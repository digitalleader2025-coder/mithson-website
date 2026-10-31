// POST /api/enquiry → checks any uploaded files, saves the enquiry and emails the Mithson inbox.
import { randomUUID } from 'node:crypto';
import { ENQUIRY, fileProblem } from '../src/content/enquiry.js';
import { createDownloadLink, isSupabaseConfigured, listEnquiryFiles, saveEnquiry } from './_lib/supabase.js';
import { isMailConfigured, sendEnquiryEmail } from './_lib/mailer.js';
import { isOverLimit } from './_lib/store.js';
import { clientAddress, getJsonBody, isProduction, sendJson } from './_lib/http.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_RE = /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

function validate(body) {
  const errors = {};
  const name = clean(body.name, 100);
  const email = clean(body.email, 160);
  const subject = clean(body.subject, 160);
  const message = clean(body.message, 4000);

  if (name.length < 2) errors.name = 'Enter your name.';
  if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address, like you@company.com.';
  if (subject.length < 2) errors.subject = 'Enter a subject.';
  if (message.length < 2) errors.message = 'Enter your message.';

  return { errors, data: { name, email, subject, message } };
}

/** Confirms each named file really is in this enquiry's private folder, then makes its link. */
async function prepareFiles(enquiryId, claimed) {
  if (!claimed.length) return [];
  if (!UUID_RE.test(enquiryId ?? '') || claimed.length > ENQUIRY.maxFiles || !isSupabaseConfigured) {
    throw new Error('Invalid file reference');
  }

  const stored = await listEnquiryFiles(enquiryId);
  return Promise.all(claimed.map(async ({ path, name }) => {
    const storedName = String(path ?? '').split('/').pop();
    const file = stored.find((item) => item.name === storedName);
    if (!String(path).startsWith(`${enquiryId}/`) || !file || fileProblem({ name: file.name, size: file.size })) {
      throw new Error('Uploaded file could not be verified');
    }
    return {
      path,
      name: clean(name, 160) || storedName,
      size: file.size,
      url: await createDownloadLink(path, ENQUIRY.linkDays * 86400),
    };
  }));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed.' });

  if (isProduction && !isMailConfigured) {
    console.error('[enquiry] email is not configured');
    return sendJson(res, 503, { error: 'Enquiries are not available right now. Please email sales@mithson.com.' });
  }

  let body;
  try {
    body = await getJsonBody(req);
  } catch {
    return sendJson(res, 400, { error: 'Invalid request.' });
  }

  // Honeypot field filled by bots only
  if (body.website) return sendJson(res, 200, { ok: true });

  const { errors, data } = validate(body);
  if (Object.keys(errors).length) return sendJson(res, 400, { error: 'Check the highlighted fields.', fields: errors });

  try {
    if (await isOverLimit('enquiry', clientAddress(req), ENQUIRY.rateLimit)) {
      return sendJson(res, 429, { error: 'Too many attempts. Please try again later or email sales@mithson.com.' });
    }
  } catch (err) {
    console.error('[enquiry] limit check failed', err);
  }

  let files;
  try {
    files = await prepareFiles(body.enquiryId, Array.isArray(body.files) ? body.files : []);
  } catch (err) {
    console.error('[enquiry] file check failed', err);
    return sendJson(res, 400, { error: 'We could not confirm your uploaded files. Please choose them and send again.' });
  }

  const enquiry = { id: UUID_RE.test(body.enquiryId ?? '') ? body.enquiryId : randomUUID(), ...data };

  // Email is what reaches the team, so a save problem is logged but never loses the enquiry
  if (isSupabaseConfigured) {
    try {
      await saveEnquiry({ ...enquiry, files: files.map(({ path, name, size }) => ({ path, name, size })) });
    } catch (err) {
      console.error('[enquiry] save failed', err);
    }
  }

  try {
    const emailed = await sendEnquiryEmail({ ...enquiry, files });
    if (!emailed && isProduction) throw new Error('Email not sent');
  } catch (err) {
    console.error('[enquiry] email failed', err);
    return sendJson(res, 502, { error: 'Your message could not be sent. Please try again or email sales@mithson.com.' });
  }

  return sendJson(res, 201, { ok: true, fileCount: files.length });
}

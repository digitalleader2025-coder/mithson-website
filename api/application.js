// POST /api/application → checks the uploaded resume, saves the application, emails HR and
// sends the applicant their confirmation.
import { APPLICATION, resumeProblem } from '../src/content/careers.js';
import { findCountry } from '../src/content/timezones.js';
import { createDownloadLink, isSupabaseConfigured, listFiles, saveApplication } from './_lib/supabase.js';
import { isMailConfigured, sendApplicationConfirmation, sendApplicationToHr } from './_lib/mailer.js';
import { isOverLimit } from './_lib/store.js';
import { clientAddress, getJsonBody, isProduction, sendJson } from './_lib/http.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;
const UUID_RE = /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const oneLine = (value, max) => clean(value, max).replace(/\s+/g, ' ');

function validate(body) {
  const errors = {};
  const name = oneLine(body.name, 100);
  const phone = oneLine(body.phone, 30);
  const email = oneLine(body.email, 160);
  const role = oneLine(body.role, 120);
  const skills = clean(body.skills, 2000);
  const state = oneLine(body.state, 80);
  const country = findCountry(body.country)?.name;

  if (name.length < 2) errors.name = 'Enter your full name.';
  if (!PHONE_RE.test(phone)) errors.phone = 'Enter a valid phone number.';
  if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address, like you@example.com.';
  if (role.length < 2) errors.role = 'Enter the role you are looking for.';
  if (skills.length < 2) errors.skills = 'Tell us about your skills.';
  if (state.length < 2) errors.state = 'Enter your state.';
  if (!country) errors.country = 'Choose your country.';

  return { errors, data: { name, phone, email, role, skills, state, country } };
}

/** Confirms the resume really is in this application's private folder, then makes its link. */
async function prepareResume(applicationId, resume) {
  const folder = `resumes/${applicationId}`;
  const storedName = String(resume?.path ?? '').split('/').pop();
  if (!UUID_RE.test(applicationId ?? '') || resume?.path !== `${folder}/${storedName}`) {
    throw new Error('Invalid resume reference');
  }

  const file = (await listFiles(folder)).find((item) => item.name === storedName);
  if (!file || resumeProblem(file)) throw new Error('Uploaded resume could not be verified');

  return {
    path: resume.path,
    name: clean(resume.name, 160) || storedName,
    size: file.size,
    url: await createDownloadLink(resume.path, APPLICATION.linkDays * 86400),
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed.' });

  if (!isSupabaseConfigured || (isProduction && !isMailConfigured)) {
    console.error('[application] missing configuration', { isSupabaseConfigured, isMailConfigured });
    return sendJson(res, 503, { error: 'Applications are not available right now. Please try again later.' });
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
    if (await isOverLimit('application', clientAddress(req), APPLICATION.rateLimit)) {
      return sendJson(res, 429, { error: 'Too many attempts. Please try again later.' });
    }
  } catch (err) {
    console.error('[application] limit check failed', err);
  }

  let resume;
  try {
    resume = await prepareResume(body.applicationId, body.resume);
  } catch (err) {
    console.error('[application] resume check failed', err);
    return sendJson(res, 400, { error: 'We could not confirm your resume. Please choose it and submit again.' });
  }

  const application = { id: body.applicationId, ...data };

  // Email is what reaches HR, so a save problem is logged but never loses the application
  try {
    await saveApplication({ ...application, resume_path: resume.path, resume_name: resume.name });
  } catch (err) {
    console.error('[application] save failed', err);
  }

  try {
    const emailed = await sendApplicationToHr({ ...application, resume });
    if (!emailed && isProduction) throw new Error('Email not sent');
  } catch (err) {
    console.error('[application] HR email failed', err);
    return sendJson(res, 502, { error: 'Your application could not be sent. Please try again.' });
  }

  // HR already has the application, so a failed confirmation should not ask them to apply again
  let confirmed = false;
  try {
    confirmed = await sendApplicationConfirmation(application);
  } catch (err) {
    console.error('[application] confirmation email failed', err);
  }

  return sendJson(res, 201, { ok: true, confirmed });
}

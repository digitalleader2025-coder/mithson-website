// POST /api/enquiry-upload → gives the browser one private upload link per file, so large
// drawings go straight to Supabase instead of through the Vercel function.
import { randomUUID } from 'node:crypto';
import { ENQUIRY, fileProblem } from '../src/content/enquiry.js';
import { createUploadLink, isSupabaseConfigured, safeFileName } from './_lib/supabase.js';
import { isOverLimit } from './_lib/store.js';
import { clientAddress, getJsonBody, sendJson } from './_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed.' });

  if (!isSupabaseConfigured) {
    console.error('[enquiry] Supabase is not configured');
    return sendJson(res, 503, { error: 'File upload is not available right now. Send your message without files, or email sales@mithson.com.' });
  }

  let body;
  try {
    body = await getJsonBody(req);
  } catch {
    return sendJson(res, 400, { error: 'Invalid request.' });
  }

  const requested = Array.isArray(body.files) ? body.files : [];
  if (body.website || requested.length === 0 || requested.length > ENQUIRY.maxFiles) {
    return sendJson(res, 400, { error: `Choose up to ${ENQUIRY.maxFiles} files.` });
  }

  const problem = requested.map((file) => fileProblem({ name: String(file.name), size: Number(file.size) })).find(Boolean);
  if (problem) return sendJson(res, 400, { error: problem });

  try {
    if (await isOverLimit('upload', clientAddress(req), ENQUIRY.rateLimit)) {
      return sendJson(res, 429, { error: 'Too many attempts. Please try again later or email sales@mithson.com.' });
    }

    const enquiryId = randomUUID();
    const uploads = await Promise.all(requested.map(async (file, index) => {
      const path = `${enquiryId}/${index + 1}-${safeFileName(String(file.name))}`;
      return { path, name: String(file.name), url: await createUploadLink(path) };
    }));
    return sendJson(res, 200, { enquiryId, uploads });
  } catch (err) {
    console.error('[enquiry] upload link failed', err);
    return sendJson(res, 500, { error: 'Could not prepare your upload. Please try again.' });
  }
}

// POST /api/application-upload → gives the browser a private upload link for one resume.
import { randomUUID } from 'node:crypto';
import { APPLICATION, resumeProblem } from '../src/content/careers.js';
import { createUploadLink, isSupabaseConfigured, safeFileName } from './_lib/supabase.js';
import { isOverLimit } from './_lib/store.js';
import { clientAddress, getJsonBody, sendJson } from './_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed.' });

  if (!isSupabaseConfigured) {
    console.error('[application] Supabase is not configured');
    return sendJson(res, 503, { error: 'Applications are not available right now. Please try again later.' });
  }

  let body;
  try {
    body = await getJsonBody(req);
  } catch {
    return sendJson(res, 400, { error: 'Invalid request.' });
  }

  if (body.website) return sendJson(res, 400, { error: 'Invalid request.' });

  const name = String(body.name ?? '');
  const problem = resumeProblem({ name, size: Number(body.size) });
  if (problem) return sendJson(res, 400, { error: problem });

  try {
    if (await isOverLimit('application-upload', clientAddress(req), APPLICATION.rateLimit)) {
      return sendJson(res, 429, { error: 'Too many attempts. Please try again later.' });
    }

    const applicationId = randomUUID();
    const path = `resumes/${applicationId}/${safeFileName(name)}`;
    return sendJson(res, 200, { applicationId, path, url: await createUploadLink(path) });
  } catch (err) {
    console.error('[application] upload link failed', err);
    return sendJson(res, 500, { error: 'Could not prepare your upload. Please try again.' });
  }
}

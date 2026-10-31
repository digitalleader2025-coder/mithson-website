// GET /api/keep-alive → called weekly by Vercel Cron so a quiet week does not pause free Supabase.
import { isSupabaseConfigured, touchDatabase } from './_lib/supabase.js';
import { sendJson } from './_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return sendJson(res, 405, { error: 'Method not allowed.' });
  if (!isSupabaseConfigured) return sendJson(res, 200, { ok: true, skipped: true });

  try {
    await touchDatabase();
    return sendJson(res, 200, { ok: true });
  } catch (err) {
    console.error('[keep-alive] failed', err);
    return sendJson(res, 500, { error: 'Check failed.' });
  }
}

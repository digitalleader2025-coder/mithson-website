// Small helpers so the handlers run the same on Vercel and in the Vite dev server.
export function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

export function getQuery(req) {
  if (req.query) return req.query;
  return Object.fromEntries(new URL(req.url, 'http://localhost').searchParams);
}

export async function getJsonBody(req) {
  if (req.body !== undefined) return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

/** On Vercel every external service must be configured; locally missing ones fall back to dry-run. */
export const isProduction = Boolean(process.env.VERCEL) || process.env.NODE_ENV === 'production';

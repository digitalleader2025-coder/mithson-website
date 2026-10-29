// GET /api/availability?date=YYYY-MM-DD → the 30-minute blocks already booked that day.
import { isBookableDate } from '../src/content/booking.js';
import { getBusyBlocks, isPersistentStore } from './_lib/store.js';
import { getQuery, isProduction, sendJson } from './_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return sendJson(res, 405, { error: 'Method not allowed.' });
  if (isProduction && !isPersistentStore) {
    return sendJson(res, 503, { error: 'Booking is not available right now. Please contact sales@mithson.com.' });
  }

  const { date } = getQuery(req);
  if (!isBookableDate(date)) return sendJson(res, 400, { error: 'Choose an open date within the next 60 days.' });

  try {
    return sendJson(res, 200, { date, busy: await getBusyBlocks(date) });
  } catch (err) {
    console.error('[booking] availability failed', err);
    return sendJson(res, 500, { error: 'Could not load available times. Please try again.' });
  }
}

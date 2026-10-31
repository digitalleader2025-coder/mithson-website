// Meeting booking rules — shared by the Book a Meeting page and the /api booking functions.
// Bookings are stored in India Standard Time (UTC+5:30, no daylight saving); each customer
// sees the same slots converted to the time zone they pick.
export const BOOKING = {
  timeZone: 'Asia/Kolkata',
  timeZoneLabel: 'India Standard Time (IST)',
  utcOffsetMinutes: 330,
  dayStart: 8 * 60, // 8:00 am
  dayEnd: 20 * 60, // 8:00 pm — meetings must finish by this time
  step: 30, // start times every 30 minutes; each booking holds whole 30-minute blocks
  durations: [30, 45, 60],
  closedWeekdays: [0], // Sunday
  maxDaysAhead: 60,
  minLeadMinutes: 60, // same-day slots must start at least this far in the future
  retentionDays: 2, // booking data is deleted from storage this long after the meeting ends
  platforms: [
    { id: 'teams', label: 'Microsoft Teams' },
    { id: 'meet', label: 'Google Meet' },
  ],
};

export function minutesToHHMM(minutes) {
  const h = String(Math.floor(minutes / 60)).padStart(2, '0');
  const m = String(minutes % 60).padStart(2, '0');
  return `${h}:${m}`;
}

export function hhmmToMinutes(hhmm) {
  const match = /^(\d{2}):(\d{2})$/.exec(hhmm ?? '');
  if (!match) return NaN;
  return Number(match[1]) * 60 + Number(match[2]);
}

export function minutesToLabel(minutes) {
  const h24 = Math.floor(minutes / 60);
  const m = String(minutes % 60).padStart(2, '0');
  const suffix = h24 >= 12 ? 'pm' : 'am';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${m} ${suffix}`;
}

/** Every 30-minute block in the working day, as minutes from midnight. */
export function dayBlocks() {
  const blocks = [];
  for (let m = BOOKING.dayStart; m < BOOKING.dayEnd; m += BOOKING.step) blocks.push(m);
  return blocks;
}

/** The 30-minute blocks a meeting of `duration` minutes starting at `start` occupies. */
export function blocksFor(start, duration) {
  const blocks = [];
  for (let m = start; m < start + duration; m += BOOKING.step) blocks.push(m);
  return blocks;
}

/** Valid start times for a duration, so the meeting ends by closing time. */
export function startTimes(duration) {
  return dayBlocks().filter((m) => m + duration <= BOOKING.dayEnd);
}

/** Current date (YYYY-MM-DD) and minutes from midnight in IST. */
export function nowInIST(now = Date.now()) {
  const ist = new Date(now + BOOKING.utcOffsetMinutes * 60000);
  return {
    date: ist.toISOString().slice(0, 10),
    minutes: ist.getUTCHours() * 60 + ist.getUTCMinutes(),
  };
}

/** The moment (ms since epoch) of `start` minutes after midnight IST on `dateStr`. */
export function slotInstant(dateStr, start) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return Date.UTC(y, m - 1, d) + (start - BOOKING.utcOffsetMinutes) * 60000;
}

/** Unix time (seconds) when stored booking data should expire: meeting end + `retentionDays`. */
export function expiryEpochSeconds(dateStr, start, duration) {
  const endUtcMs = slotInstant(dateStr, start + duration);
  return Math.floor(endUtcMs / 1000) + BOOKING.retentionDays * 86400;
}

const zoneFormatters = new Map();

/** Date (YYYY-MM-DD) and minutes from midnight on the clock in `timeZone`. */
export function localParts(ms, timeZone) {
  if (!zoneFormatters.has(timeZone)) {
    zoneFormatters.set(timeZone, new Intl.DateTimeFormat('en-US', {
      timeZone, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
    }));
  }
  const parts = Object.fromEntries(zoneFormatters.get(timeZone).formatToParts(ms).map((p) => [p.type, p.value]));
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

export function addDays(dateStr, days) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function weekdayOf(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).getUTCDay();
}

export function isBookableDate(dateStr, now = Date.now()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr ?? '')) return false;
  const d = new Date(`${dateStr}T00:00:00Z`);
  if (Number.isNaN(d.getTime()) || d.toISOString().slice(0, 10) !== dateStr) return false;
  const today = nowInIST(now).date;
  if (dateStr < today || dateStr > addDays(today, BOOKING.maxDaysAhead)) return false;
  return !BOOKING.closedWeekdays.includes(weekdayOf(dateStr));
}

export function isStartInFuture(dateStr, start, now = Date.now()) {
  const { date, minutes } = nowInIST(now);
  if (dateStr > date) return true;
  if (dateStr < date) return false;
  return start >= minutes + BOOKING.minLeadMinutes;
}

/** Every open slot grouped by the date it falls on in `timeZone`; `date` and `start` stay in IST. */
export function slotsByLocalDate(duration, timeZone, now = Date.now()) {
  const days = new Map();
  const today = nowInIST(now).date;
  for (let i = 0; i <= BOOKING.maxDaysAhead; i++) {
    const date = addDays(today, i);
    if (!isBookableDate(date, now)) continue;
    for (const start of startTimes(duration)) {
      if (!isStartInFuture(date, start, now)) continue;
      const local = localParts(slotInstant(date, start), timeZone);
      if (!days.has(local.date)) days.set(local.date, []);
      days.get(local.date).push({ date, start, minutes: local.minutes });
    }
  }
  return days;
}

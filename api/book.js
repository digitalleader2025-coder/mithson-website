// POST /api/book → reserves the slot, creates the Teams or Google Meet meeting and emails both parties.
import { randomUUID } from 'node:crypto';
import {
  BOOKING,
  blocksFor,
  expiryEpochSeconds,
  hhmmToMinutes,
  isBookableDate,
  isStartInFuture,
  localParts,
  minutesToHHMM,
  minutesToLabel,
  slotInstant,
  startTimes,
} from '../src/content/booking.js';
import { findCountry, zoneLabel } from '../src/content/timezones.js';
import { claimBlocks, isPersistentStore, releaseBlocks, saveBooking } from './_lib/store.js';
import { createTeamsMeeting, isTeamsConfigured } from './_lib/teams.js';
import { createGoogleMeeting, isGoogleMeetConfigured } from './_lib/googleMeet.js';
import { companyInbox, isMailConfigured, sendBookingEmails } from './_lib/mailer.js';
import { getJsonBody, isProduction, sendJson } from './_lib/http.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

const MEETING_SERVICES = {
  teams: { isConfigured: isTeamsConfigured, create: createTeamsMeeting },
  meet: { isConfigured: isGoogleMeetConfigured, create: createGoogleMeeting },
};

function validate(body) {
  const errors = {};
  const name = clean(body.name, 100);
  const email = clean(body.email, 160);
  const company = clean(body.company, 120);
  const phone = clean(body.phone, 30);
  const notes = clean(body.notes, 1000);
  const duration = Number(body.duration);
  const start = hhmmToMinutes(body.time);
  const country = findCountry(body.country);
  const timeZone = country?.zones.includes(body.timeZone) ? body.timeZone : null;
  const platform = BOOKING.platforms.find((p) => p.id === body.platform);

  if (name.length < 2) errors.name = 'Enter your name.';
  if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address, like you@company.com.';
  if (!BOOKING.durations.includes(duration)) errors.duration = 'Choose 30, 45 or 60 minutes.';
  if (!country) errors.country = 'Choose your country.';
  else if (!timeZone) errors.timeZone = 'Choose your time zone.';
  if (!platform) errors.platform = 'Choose Microsoft Teams or Google Meet.';
  if (!isBookableDate(body.date)) errors.date = 'Choose an open date within the next 60 days.';
  else if (!startTimes(duration).includes(start) || !isStartInFuture(body.date, start)) {
    errors.time = 'Choose one of the available times.';
  }

  return {
    errors,
    data: {
      name, email, company, phone, notes, duration, start, date: body.date,
      country: country?.name, timeZone, platform: platform?.id, platformLabel: platform?.label,
    },
  };
}

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed.' });

  if (isProduction && !(isPersistentStore && isMailConfigured)) {
    console.error('[booking] missing configuration', { isPersistentStore, isMailConfigured });
    return sendJson(res, 503, { error: 'Booking is not available right now. Please contact sales@mithson.com.' });
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

  const service = MEETING_SERVICES[data.platform];
  if (isProduction && !service.isConfigured) {
    console.error('[booking] meeting platform not configured', data.platform);
    const error = `${data.platformLabel} is not available right now. Choose the other platform or contact sales@mithson.com.`;
    return sendJson(res, 503, { error, fields: { platform: error } });
  }

  const id = randomUUID();
  const blocks = blocksFor(data.start, data.duration);
  const expiresAt = expiryEpochSeconds(data.date, data.start, data.duration);

  try {
    if (!(await claimBlocks(data.date, blocks, id, expiresAt))) {
      return sendJson(res, 409, { error: 'That time was just booked by someone else. Choose another time.', code: 'taken' });
    }
  } catch (err) {
    console.error('[booking] claim failed', err);
    return sendJson(res, 500, { error: 'Could not book the meeting. Please try again.' });
  }

  const startMs = slotInstant(data.date, data.start);
  const local = localParts(startMs, data.timeZone);
  const booking = {
    id,
    ...data,
    time: minutesToHHMM(data.start),
    dateLabel: formatDate(data.date),
    timeLabel: minutesToLabel(data.start),
    localDateLabel: formatDate(local.date),
    localTimeLabel: minutesToLabel(local.minutes),
    timeZoneLabel: zoneLabel(data.timeZone, startMs),
    createdAt: new Date().toISOString(),
    joinUrl: null,
  };

  if (service.isConfigured) {
    try {
      const meeting = await service.create({
        id,
        subject: `Mithson meeting with ${data.name}${data.company ? ` (${data.company})` : ''}`,
        description: [`Booked through the Mithson website by ${data.name}, ${data.country}.`, data.notes].filter(Boolean).join('\n\n'),
        startMs,
        duration: data.duration,
        attendees: [
          { email: data.email, name: data.name },
          { email: companyInbox, name: 'Mithson Sealing Solutions' },
        ],
      });
      booking.joinUrl = meeting.joinUrl;
      booking.meetingEventId = meeting.eventId;
    } catch (err) {
      console.error('[booking] meeting creation failed', data.platform, err);
      await releaseBlocks(data.date, blocks, id).catch(() => {});
      return sendJson(res, 502, { error: `Could not create the ${data.platformLabel} meeting. Please try again in a moment.` });
    }
  } else {
    console.info(`[booking] ${data.platformLabel} not configured — no meeting link created (local development only).`);
  }

  let emailed = false;
  try {
    await saveBooking(booking, expiresAt);
    emailed = await sendBookingEmails(booking);
  } catch (err) {
    // The slot and meeting exist, so keep the booking and tell the customer the email failed.
    console.error('[booking] save/email failed', err);
  }

  return sendJson(res, 201, {
    ok: true,
    booking: {
      date: booking.date,
      dateLabel: booking.dateLabel,
      timeLabel: booking.timeLabel,
      localDateLabel: booking.localDateLabel,
      localTimeLabel: booking.localTimeLabel,
      timeZoneLabel: booking.timeZoneLabel,
      platformLabel: booking.platformLabel,
      duration: booking.duration,
      email: booking.email,
    },
    emailed,
  });
}

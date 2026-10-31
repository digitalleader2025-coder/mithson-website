// Google Meet links through the Google Calendar API, acting as one signed-in Google account.
// The event goes on that account's calendar and Google sends the invitation to every attendee.
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;

export const isGoogleMeetConfigured = Boolean(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET && GOOGLE_REFRESH_TOKEN);

const CONFERENCE_CHECKS = 3;
const eventsUrl = () =>
  `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.GOOGLE_CALENDAR_ID || 'primary')}/events`;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getAccessToken() {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token: GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  if (!res.ok) throw new Error(`Google token request failed (${res.status})`);
  return (await res.json()).access_token;
}

const meetLink = (event) =>
  event.hangoutLink ?? event.conferenceData?.entryPoints?.find((e) => e.entryPointType === 'video')?.uri;

/** Creates the calendar event with a Meet link and returns its join URL. */
export async function createGoogleMeeting({ id, subject, description, startMs, duration, attendees }) {
  const accessToken = await getAccessToken();
  const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };

  const res = await fetch(`${eventsUrl()}?conferenceDataVersion=1&sendUpdates=all`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      summary: subject,
      description,
      start: { dateTime: new Date(startMs).toISOString() },
      end: { dateTime: new Date(startMs + duration * 60000).toISOString() },
      attendees: attendees.map(({ email, name }) => ({ email, displayName: name })),
      conferenceData: {
        createRequest: { requestId: id, conferenceSolutionKey: { type: 'hangoutsMeet' } },
      },
      reminders: {
        useDefault: false,
        overrides: [{ method: 'popup', minutes: 15 }, { method: 'email', minutes: 60 }],
      },
    }),
  });
  if (!res.ok) throw new Error(`Google Meet creation failed (${res.status})`);
  let event = await res.json();

  // Google builds the Meet link in the background, so it may be pending at first
  for (let check = 0; check < CONFERENCE_CHECKS && !meetLink(event); check++) {
    await wait(1000);
    const retry = await fetch(`${eventsUrl()}/${encodeURIComponent(event.id)}`, { headers });
    if (retry.ok) event = await retry.json();
  }

  const joinUrl = meetLink(event);
  if (joinUrl) return { joinUrl, eventId: event.id };

  await fetch(`${eventsUrl()}/${encodeURIComponent(event.id)}?sendUpdates=all`, { method: 'DELETE', headers }).catch(() => {});
  throw new Error('Google did not return a Meet link');
}

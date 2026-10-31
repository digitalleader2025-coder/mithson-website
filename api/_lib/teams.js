// Microsoft Teams meetings through Microsoft Graph. The event goes on the organizer's Outlook and
// Teams calendar, and Microsoft sends the calendar invitation to every attendee.
const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MS_ORGANIZER_EMAIL } = process.env;

export const isTeamsConfigured = Boolean(MS_TENANT_ID && MS_CLIENT_ID && MS_CLIENT_SECRET && MS_ORGANIZER_EMAIL);

const eventsUrl = () => `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(MS_ORGANIZER_EMAIL)}/events`;

async function getAccessToken() {
  const res = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(MS_TENANT_ID)}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: MS_CLIENT_ID,
      client_secret: MS_CLIENT_SECRET,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  });
  if (!res.ok) throw new Error(`Microsoft token request failed (${res.status})`);
  return (await res.json()).access_token;
}

/** Graph expects a UTC time without the trailing Z when timeZone is sent separately. */
const graphTime = (ms) => ({ dateTime: new Date(ms).toISOString().slice(0, 19), timeZone: 'UTC' });

/** Creates the calendar event with a Teams link and returns its join URL. */
export async function createTeamsMeeting({ subject, description, startMs, duration, attendees }) {
  const accessToken = await getAccessToken();
  const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };
  const organizer = MS_ORGANIZER_EMAIL.toLowerCase();

  const res = await fetch(eventsUrl(), {
    method: 'POST',
    headers,
    body: JSON.stringify({
      subject,
      body: { contentType: 'text', content: description },
      start: graphTime(startMs),
      end: graphTime(startMs + duration * 60000),
      attendees: attendees
        .filter(({ email }) => email.toLowerCase() !== organizer)
        .map(({ email, name }) => ({ emailAddress: { address: email, name }, type: 'required' })),
      isOnlineMeeting: true,
      onlineMeetingProvider: 'teamsForBusiness',
      isReminderOn: true,
      reminderMinutesBeforeStart: 15,
      allowNewTimeProposals: false,
    }),
  });
  if (!res.ok) throw new Error(`Teams meeting creation failed (${res.status})`);
  const event = await res.json();
  if (event.onlineMeeting?.joinUrl) return { joinUrl: event.onlineMeeting.joinUrl, eventId: event.id };

  // The link can arrive just after the event is created
  const retry = await fetch(`${eventsUrl()}/${encodeURIComponent(event.id)}`, { headers });
  const joinUrl = retry.ok ? (await retry.json()).onlineMeeting?.joinUrl : null;
  if (joinUrl) return { joinUrl, eventId: event.id };

  await fetch(`${eventsUrl()}/${encodeURIComponent(event.id)}`, { method: 'DELETE', headers }).catch(() => {});
  throw new Error('Teams did not return a join link');
}

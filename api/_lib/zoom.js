// Zoom meeting creation through a Server-to-Server OAuth app.
const { ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET } = process.env;

export const isZoomConfigured = Boolean(ZOOM_ACCOUNT_ID && ZOOM_CLIENT_ID && ZOOM_CLIENT_SECRET);

async function getAccessToken() {
  const credentials = Buffer.from(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`).toString('base64');
  const res = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${encodeURIComponent(ZOOM_ACCOUNT_ID)}`,
    { method: 'POST', headers: { Authorization: `Basic ${credentials}` } }
  );
  if (!res.ok) throw new Error(`Zoom token request failed (${res.status})`);
  return (await res.json()).access_token;
}

/** Creates a scheduled meeting and returns its join URL. `start` is local IST time "YYYY-MM-DDTHH:MM:00". */
export async function createZoomMeeting({ topic, start, duration, agenda }) {
  const accessToken = await getAccessToken();
  const user = encodeURIComponent(process.env.ZOOM_USER_ID || 'me');
  const res = await fetch(`https://api.zoom.us/v2/users/${user}/meetings`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      topic,
      type: 2,
      start_time: start,
      duration,
      timezone: 'Asia/Kolkata',
      agenda: agenda?.slice(0, 2000),
      settings: { join_before_host: false, waiting_room: true },
    }),
  });
  if (!res.ok) throw new Error(`Zoom meeting creation failed (${res.status})`);
  const meeting = await res.json();
  return { joinUrl: meeting.join_url, meetingId: meeting.id, password: meeting.password };
}

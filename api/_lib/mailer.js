// Booking confirmation emails over SMTP.
import nodemailer from 'nodemailer';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM } = process.env;

export const isMailConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);
export const companyInbox = process.env.BOOKING_NOTIFY_EMAIL || 'sales@mithson.com';

const transport = isMailConfigured
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: Number(SMTP_PORT || 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function renderEmail({ heading, intro, booking, forCustomer }) {
  const indiaTime = `${booking.dateLabel}, ${booking.timeLabel} (IST)`;
  const customerTime = `${booking.localDateLabel}, ${booking.localTimeLabel} — ${booking.timeZoneLabel}`;
  const rows = [
    ...(forCustomer
      ? [['Your time', customerTime], ['India time', indiaTime]]
      : [['India time', indiaTime], ['Customer time', customerTime]]),
    ['Duration', `${booking.duration} minutes`],
    ['Platform', booking.platformLabel],
    ['Country', booking.country],
    ['Name', booking.name],
    ['Email', booking.email],
    ['Company', booking.company],
    ['Phone', booking.phone],
    ['Notes', booking.notes],
  ].filter(([, v]) => v);

  const inviteNote = `A ${booking.platformLabel === 'Google Meet' ? 'Google' : 'Microsoft'} calendar invitation with a reminder is sent separately.`;
  const join = booking.joinUrl
    ? `<p style="margin:24px 0"><a href="${escapeHtml(booking.joinUrl)}" style="background:#0336A3;color:#FFFFFF;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600">Join ${escapeHtml(booking.platformLabel)} meeting</a></p>
       <p style="font-size:13px;color:#475569">${escapeHtml(booking.platformLabel)} link: ${escapeHtml(booking.joinUrl)}<br>${escapeHtml(inviteNote)}</p>`
    : '';

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1E293B">
    <div style="background:#0336A3;color:#FFFFFF;padding:20px 24px;border-radius:12px 12px 0 0">
      <strong style="font-size:18px">Mithson Sealing Solutions</strong>
    </div>
    <div style="border:1px solid #D6E4FF;border-top:none;padding:24px;border-radius:0 0 12px 12px">
      <h1 style="color:#0336A3;font-size:20px;margin:0 0 12px">${escapeHtml(heading)}</h1>
      <p style="margin:0 0 16px">${escapeHtml(intro)}</p>
      <table style="border-collapse:collapse;width:100%">
        ${rows.map(([k, v]) => `<tr><td style="padding:6px 0;color:#475569;width:110px;vertical-align:top">${k}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`).join('')}
      </table>
      ${join}
    </div>
  </div>`;

  const text = [
    heading,
    '',
    intro,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    booking.joinUrl ? `\n${booking.platformLabel} link: ${booking.joinUrl}\n${inviteNote}` : '',
  ].join('\n');

  return { html, text };
}

/** Sends the confirmation to the customer and the notification to the Mithson inbox. */
export async function sendBookingEmails(booking) {
  const subject = `Meeting with Mithson — ${booking.localDateLabel}, ${booking.localTimeLabel} (${booking.duration} min, ${booking.platformLabel})`;
  const messages = [
    {
      to: booking.email,
      subject,
      replyTo: companyInbox,
      ...renderEmail({
        heading: 'Your meeting is booked',
        intro: `Hi ${booking.name}, thank you for booking a meeting with Mithson Sealing Solutions. Here are the details.`,
        booking,
        forCustomer: true,
      }),
    },
    {
      to: companyInbox,
      subject: `New booking: ${booking.name}, ${booking.country} — ${booking.dateLabel}, ${booking.timeLabel} IST (${booking.platformLabel})`,
      replyTo: booking.email,
      ...renderEmail({
        heading: 'New meeting booked',
        intro: 'A customer booked a meeting through the website.',
        booking,
        forCustomer: false,
      }),
    },
  ];

  if (!transport) {
    console.info('[booking] SMTP not configured — emails not sent:', messages.map((m) => `${m.to}: ${m.subject}`));
    return false;
  }
  const from = MAIL_FROM || SMTP_USER;
  await Promise.all(messages.map((m) => transport.sendMail({ from, ...m })));
  return true;
}

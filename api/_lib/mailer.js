// Booking confirmation emails over SMTP.
import nodemailer from 'nodemailer';
import { APPLICATION } from '../../src/content/careers.js';
import { ENQUIRY, formatBytes } from '../../src/content/enquiry.js';

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

const hrInbox = process.env.HR_NOTIFY_EMAIL || companyInbox;

/** Sends a job application to Mithson HR, with a private link to the resume. */
export async function sendApplicationToHr({ name, phone, email, role, skills, state, country, resume }) {
  const details = [
    ['Name', name], ['Phone', phone], ['Email', email], ['Role', role], ['State', state], ['Country', country],
  ];
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1E293B">
    <div style="background:#0336A3;color:#FFFFFF;padding:20px 24px;border-radius:12px 12px 0 0">
      <strong style="font-size:18px">Mithson Sealing Solutions</strong>
    </div>
    <div style="border:1px solid #D6E4FF;border-top:none;padding:24px;border-radius:0 0 12px 12px">
      <h1 style="color:#0336A3;font-size:20px;margin:0 0 12px">New job application</h1>
      <table style="border-collapse:collapse;width:100%">
        ${details.map(([k, v]) => `<tr><td style="padding:6px 0;color:#475569;width:110px;vertical-align:top">${k}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`).join('')}
      </table>
      <h2 style="color:#0336A3;font-size:16px;margin:20px 0 8px">Skills</h2>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(skills)}</p>
      <p style="margin:24px 0"><a href="${escapeHtml(resume.url)}" style="background:#0336A3;color:#FFFFFF;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600">Download resume</a></p>
      <p style="font-size:13px;color:#475569">${escapeHtml(resume.name)} (${formatBytes(resume.size)}). This link stops working after ${APPLICATION.linkDays} days. The file stays in Supabase.</p>
    </div>
  </div>`;
  const text = [
    'New job application',
    '',
    ...details.map(([k, v]) => `${k}: ${v}`),
    '',
    'Skills:',
    skills,
    '',
    `Resume: ${resume.url}`,
  ].join('\n');

  const mail = { to: hrInbox, subject: `Job application: ${name} — ${role}`, replyTo: email, html, text };
  if (!transport) {
    console.info('[application] SMTP not configured — email not sent:', mail.subject);
    return false;
  }
  await transport.sendMail({ from: MAIL_FROM || SMTP_USER, ...mail });
  return true;
}

/** Tells the applicant that their application arrived. */
export async function sendApplicationConfirmation({ name, email, role }) {
  const paragraphs = [
    `Thank you for your interest in the ${role} position at Mithson Sealing Solutions. We have successfully received your application and resume.`,
    'Our hiring team is currently reviewing applications to identify the candidates whose qualifications best match the requirements of the role.',
    'If your background matches what we are looking for, a member of our recruiting team will reach out to you directly to discuss the next steps.',
  ];
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1E293B;line-height:1.6">
    <div style="background:#0336A3;color:#FFFFFF;padding:20px 24px;border-radius:12px 12px 0 0">
      <strong style="font-size:18px">Mithson Sealing Solutions</strong>
    </div>
    <div style="border:1px solid #D6E4FF;border-top:none;padding:24px;border-radius:0 0 12px 12px">
      <p style="margin:0 0 16px">Hi ${escapeHtml(name)},</p>
      ${paragraphs.map((p) => `<p style="margin:0 0 16px">${escapeHtml(p)}</p>`).join('')}
      <p style="margin:0">Best regards,<br>The Mithson Recruitment Team</p>
    </div>
  </div>`;
  const text = [`Hi ${name},`, ...paragraphs, 'Best regards,\nThe Mithson Recruitment Team'].join('\n\n');

  const mail = {
    to: email,
    subject: `Your application for ${role} at Mithson Sealing Solutions`,
    replyTo: hrInbox,
    html,
    text,
  };
  if (!transport) {
    console.info('[application] SMTP not configured — confirmation not sent:', mail.subject);
    return false;
  }
  await transport.sendMail({ from: MAIL_FROM || SMTP_USER, ...mail });
  return true;
}

/** Sends a website enquiry to the Mithson inbox, with a private link to each uploaded file. */
export async function sendEnquiryEmail({ name, email, subject, message, files }) {
  const details = [['Name', name], ['Email', email], ['Subject', subject]];
  const fileRows = files
    .map((file) => `<li style="margin:6px 0"><a href="${escapeHtml(file.url)}" style="color:#0336A3;font-weight:600">${escapeHtml(file.name)}</a> (${formatBytes(file.size)})</li>`)
    .join('');
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1E293B">
    <div style="background:#0336A3;color:#FFFFFF;padding:20px 24px;border-radius:12px 12px 0 0">
      <strong style="font-size:18px">Mithson Sealing Solutions</strong>
    </div>
    <div style="border:1px solid #D6E4FF;border-top:none;padding:24px;border-radius:0 0 12px 12px">
      <h1 style="color:#0336A3;font-size:20px;margin:0 0 12px">New website enquiry</h1>
      <table style="border-collapse:collapse;width:100%">
        ${details.map(([k, v]) => `<tr><td style="padding:6px 0;color:#475569;width:110px;vertical-align:top">${k}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`).join('')}
      </table>
      <h2 style="color:#0336A3;font-size:16px;margin:20px 0 8px">Message</h2>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
      ${files.length ? `<h2 style="color:#0336A3;font-size:16px;margin:20px 0 8px">Uploaded files</h2>
      <ul style="margin:0;padding-left:20px">${fileRows}</ul>
      <p style="font-size:13px;color:#475569">These links stop working after ${ENQUIRY.linkDays} days. The files stay in Supabase.</p>` : ''}
    </div>
  </div>`;
  const text = [
    'New website enquiry',
    '',
    ...details.map(([k, v]) => `${k}: ${v}`),
    '',
    message,
    ...(files.length ? ['', 'Uploaded files:', ...files.map((file) => `${file.name}: ${file.url}`)] : []),
  ].join('\n');

  const mail = {
    to: companyInbox,
    subject: `New enquiry: ${name} — ${subject}${files.length ? ` (${files.length} file${files.length > 1 ? 's' : ''})` : ''}`,
    replyTo: email,
    html,
    text,
  };

  if (!transport) {
    console.info('[enquiry] SMTP not configured — email not sent:', mail.subject);
    return false;
  }
  await transport.sendMail({ from: MAIL_FROM || SMTP_USER, ...mail });
  return true;
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

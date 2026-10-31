import { useEffect } from 'react';
import { company } from '../../content/company';
import './PrivacyPolicy.css';

const LAST_UPDATED = '31 October 2026';

export default function PrivacyPolicyPage() {
  const email = company.contacts.sales.email;

  useEffect(() => {
    document.title = 'Privacy Policy | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper privacy-page">
      <section className="privacy-hero">
        <div className="container">
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-subtitle">
            How {company.legalName} handles the details you share with us through this website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container privacy-body">
          <p className="privacy-updated">Last updated: {LAST_UPDATED}</p>

          <h2>Information we collect</h2>
          <p>When you book a meeting, we collect the details you enter:</p>
          <ul>
            <li>Your name and email address</li>
            <li>Your company and phone number, if you provide them</li>
            <li>Your country and time zone</li>
            <li>The meeting date, time, length and video platform you choose</li>
            <li>Anything you write about what you would like to discuss</li>
          </ul>

          <h2>How we use it</h2>
          <p>We use these details only to:</p>
          <ul>
            <li>Reserve your meeting time and stop it being booked twice</li>
            <li>Create the video meeting and send you the link and calendar invitation</li>
            <li>Tell our team about the booking and prepare for your meeting</li>
          </ul>
          <p>We do not sell your information or use it for advertising.</p>

          <h2>Who we share it with</h2>
          <p>We share your details only with the services that run the booking system:</p>
          <ul>
            <li>Our website hosting and booking storage providers</li>
            <li>Our email provider, which delivers the confirmation messages</li>
            <li>The video meeting provider for your meeting, such as Microsoft Teams or Google Meet</li>
          </ul>

          <h2>How long we keep it</h2>
          <p>
            Booking details held by the website are deleted automatically 2 days after your meeting
            ends. Confirmation emails and calendar invitations stay in the mailboxes and calendars
            that received them, including our team&apos;s, until they are deleted.
          </p>

          <h2>Google and Microsoft accounts</h2>
          <p>
            This website connects to Google and Microsoft only through {company.name}&apos;s own
            accounts, to create meetings on our calendars. It does not ask you to sign in, and it
            does not access your Google or Microsoft account, calendar or files.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us what information we hold about you, or ask us to correct or delete it, by
            emailing <a href={`mailto:${email}`}>{email}</a>.
          </p>

          <h2>Changes to this policy</h2>
          <p>We will update this page if the way we handle your information changes.</p>

          <h2>Contact us</h2>
          <p>
            For privacy questions, email <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

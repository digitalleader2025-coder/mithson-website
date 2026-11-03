import { useState } from 'react';
import { Link } from 'react-router-dom';
import { company } from '../../content/company';
import { navigation } from '../../content/navigation';
import logoImage from '../../../images/mithson-logo/Mithson-logo.png';
import './Footer.css';

const certifications = ['ISO 9001:2015', 'QIMA', 'API-6A', 'NORSOK', 'BAM'];

const ICONS = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2" />,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.9 8.8H3.5V20h3.4V8.8ZM5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.5 13.6c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.9V8.8H9.5V20h3.4v-5.5c0-1.5.3-2.9 2.1-2.9s1.9 1.7 1.9 3V20h3.5v-6.4Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [openColumn, setOpenColumn] = useState(null);
  const { email, phones } = company.contacts.sales;

  return (
    <footer className="footer" role="contentinfo">
      {/* Top strip */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img loading="lazy" src={logoImage} alt="Mithson Sealing Solutions" className="logo-image" />
              </div>
              <p className="footer-tagline">
                Over {company.experience} years of polymer
                engineering expertise.
              </p>
              <div className="footer-certs">
                {certifications.map((c) => (
                  <span key={c} className="cert-chip">{c}</span>
                ))}
              </div>
              <div className="footer-social">
                <a href={company.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Mithson on LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href={`mailto:${email}`} aria-label="Email Mithson">
                  <Icon name="mail" />
                </a>
              </div>
            </div>

            {/* Nav columns */}
            {navigation.slice(0, 4).map((item) => (
              <div
                key={item.path}
                className={`footer-nav-col${item.label === 'Products' ? ' footer-nav-col--wide' : ''}${openColumn === item.path ? ' is-open' : ''}`}
              >
                <h3 className="footer-col-heading">
                  <Link to={item.path}>{item.label}</Link>
                  {/* Phones show each column as a tap-to-open section */}
                  <button
                    type="button"
                    className="footer-col-toggle"
                    aria-expanded={openColumn === item.path}
                    onClick={() => setOpenColumn(openColumn === item.path ? null : item.path)}
                  >
                    {item.label}
                    <span aria-hidden="true">{openColumn === item.path ? '−' : '+'}</span>
                  </button>
                </h3>
                <ul>
                  {item.children
                    ?.flatMap((child) => child.children ?? [child])
                    .filter((child) => child.path !== item.path)
                    .map((child) => (
                    <li key={child.path}>
                      <Link to={child.path} className="footer-link">{child.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact card */}
            <div className="footer-contact">
              <h3 className="footer-col-heading">Contact</h3>
              <address className="footer-address">
                <a href={`mailto:${email}`} className="footer-contact-row">
                  <span className="footer-contact-icon"><Icon name="mail" /></span>
                  <span>{email}</span>
                </a>
                {phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="footer-contact-row">
                    <span className="footer-contact-icon"><Icon name="phone" /></span>
                    <span>{p}</span>
                  </a>
                ))}
                <div className="footer-contact-row footer-contact-row--office">
                  <span className="footer-contact-icon"><Icon name="pin" /></span>
                  <div className="footer-office">
                    {company.offices[0].address.slice(1, 4).map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                  </div>
                </div>
              </address>
              <Link to="/connect-with-us" className="btn btn-primary footer-enquire">
                Enquire Now <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
        <svg className="footer-wave" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="footer-wave-back" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#dbeaff" />
              <stop offset="1" stopColor="#cfe3ff" />
            </linearGradient>
            <linearGradient id="footer-wave-front" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#bcd8ff" />
              <stop offset="1" stopColor="#a9ceff" />
            </linearGradient>
          </defs>
          <path fill="url(#footer-wave-back)" d="M0 60C200 10 400 70 640 140c220 40 500-60 800-120v150H0Z" />
          <path fill="url(#footer-wave-front)" d="M0 150c180-70 360-60 560 20h300c200-30 380-90 580-60v60H0Z" />
        </svg>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <span className="footer-divider" aria-hidden="true" />
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <span className="footer-divider" aria-hidden="true" />
          <p className="footer-copy">
            Built with precision. Engineered for performance.
          </p>
        </div>
      </div>
    </footer>
  );
}

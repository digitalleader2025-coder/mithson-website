import { Link } from 'react-router-dom';
import { company } from '../../content/company';
import { navigation } from '../../content/navigation';
import logoImage from '../../../images/mithson-logo/Mithson-logo.png';
import './Footer.css';

const certifications = ['ISO 9001:2015', 'QIMA', 'API-6A', 'NORSOK', 'BAM'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Top strip */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logoImage} alt="Mithson Sealing Solutions" className="logo-image" />
              </div>
              <p className="footer-tagline">
                Part of the <strong>Fluoro Carbon Seals Group</strong> — over {company.experience} years of polymer
                engineering expertise.
              </p>
              <div className="footer-certs">
                {certifications.map((c) => (
                  <span key={c} className="cert-chip">{c}</span>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {navigation.slice(0, 4).map((item) => (
              <div key={item.path} className="footer-nav-col">
                <h3 className="footer-col-heading">
                  <Link to={item.path}>{item.label}</Link>
                </h3>
                <ul>
                  {item.children?.map((child) => (
                    <li key={child.path}>
                      <Link to={child.path} className="footer-link">{child.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div className="footer-nav-col">
              <h3 className="footer-col-heading">Contact</h3>
              <address className="footer-address">
                <p className="footer-contact-name">{company.contacts.sales.email}</p>
                {company.contacts.sales.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="footer-link">{p}</a>
                ))}
                <div className="footer-office">
                  {company.offices[0].address.slice(1, 4).map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <p className="footer-copy footer-copy--muted">
            Built with precision. Engineered for performance.
          </p>
        </div>
      </div>
    </footer>
  );
}

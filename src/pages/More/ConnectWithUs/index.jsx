import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollReveal from '../../../shared/components/ScrollReveal';
import { company } from '../../../content/company';
import './ConnectWithUs.css';

export default function ConnectWithUsPage() {
  const formRef = useRef();

  useEffect(() => {
    document.title = 'Connect With Us | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — integrate backend or mailto as needed
    alert('Thank you for your message. Our team will be in touch shortly.');
    formRef.current?.reset();
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">More</span>
            <h1 className="section-title">Connect With Us</h1>
            <p className="section-subtitle">
              Reach our engineering and sales team for technical consultation, quotes and custom solutions.
            </p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      <section className="section">
        <div className="container connect-layout">
          {/* Contact form */}
          <ScrollReveal>
            <div className="glass-card connect-form-card">
              <h2 className="connect-section-title">Send a Message</h2>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="connect-form"
                aria-label="Contact form"
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="connect-name" className="form-label">Name</label>
                  <input
                    id="connect-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="connect-email" className="form-label">Email</label>
                  <input
                    id="connect-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="connect-subject" className="form-label">Subject</label>
                  <input
                    id="connect-subject"
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Product enquiry, technical question…"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="connect-message" className="form-label">Message</label>
                  <textarea
                    id="connect-message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Describe your application, materials, operating conditions…"
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary connect-submit" id="connect-form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <div className="connect-info">
            {/* Leadership */}
            <ScrollReveal delay={0.1}>
              <div className="glass-card connect-info-card">
                <h3 className="connect-info-heading">Leadership</h3>
                {[company.contacts.ceo, company.contacts.md].map((person) => (
                  <div key={person.email} className="connect-person">
                    <div className="connect-person-name">{person.name}</div>
                    <div className="connect-person-title">{person.title}</div>
                    {person.phones.map((ph) => (
                      <a key={ph} href={`tel:${ph}`} className="connect-person-link">{ph}</a>
                    ))}
                    <a href={`mailto:${person.email}`} className="connect-person-link">{person.email}</a>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Sales */}
            <ScrollReveal delay={0.15}>
              <div className="glass-card connect-info-card">
                <h3 className="connect-info-heading">Sales</h3>
                {company.contacts.sales.phones.map((ph) => (
                  <a key={ph} href={`tel:${ph}`} className="connect-person-link">{ph}</a>
                ))}
                <a href={`mailto:${company.contacts.sales.email}`} className="connect-person-link">
                  {company.contacts.sales.email}
                </a>
              </div>
            </ScrollReveal>

            {/* Offices */}
            {company.offices.map((office, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.05}>
                <div className="glass-card connect-info-card">
                  <h3 className="connect-info-heading">{office.label}</h3>
                  <address className="connect-address">
                    {office.address.map((line, j) => (
                      <span key={j}>{line}</span>
                    ))}
                  </address>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

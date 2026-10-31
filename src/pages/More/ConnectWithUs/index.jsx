import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';
import { company } from '../../../content/company';
import { ENQUIRY, fileProblem, formatBytes } from '../../../content/enquiry';
import './ConnectWithUs.css';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '', website: '' };

/** Sends one file straight to private storage, using the link from /api/enquiry-upload. */
async function uploadFile(file, url) {
  const body = new FormData();
  body.append('cacheControl', '3600');
  body.append('', file);
  const res = await fetch(url, { method: 'PUT', headers: { 'x-upsert': 'false' }, body });
  if (!res.ok) throw new Error(`Could not upload ${file.name}. Please try again.`);
}

export default function ConnectWithUsPage() {
  const [params] = useSearchParams();
  const wantsDrawing = params.get('drawing') === '1';
  const [form, setForm] = useState({ ...EMPTY_FORM, subject: params.get('subject') ?? '' });
  const [files, setFiles] = useState([]);
  const [fieldErrors, setFieldErrors] = useState({});
  const [fileError, setFileError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [status, setStatus] = useState('');
  const [sent, setSent] = useState(null);
  const formCardRef = useRef(null);

  useEffect(() => {
    document.title = 'Connect With Us | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  // "Send your drawing" links land on the form rather than the top of the page
  useEffect(() => {
    if (!wantsDrawing) return undefined;
    const timer = setTimeout(() => {
      const card = formCardRef.current;
      if (!card) return;
      if (window.lenis) window.lenis.scrollTo(card, { offset: -100, force: true, immediate: true });
      else card.scrollIntoView({ block: 'start' });
    }, 500);
    return () => clearTimeout(timer);
  }, [wantsDrawing]);

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const addFiles = (e) => {
    const chosen = [...e.target.files];
    e.target.value = '';
    const problem = chosen.map(fileProblem).find(Boolean);
    const next = [...files];
    for (const file of chosen) {
      const isNew = !next.some((f) => f.name === file.name && f.size === file.size);
      if (isNew && !fileProblem(file) && next.length < ENQUIRY.maxFiles) next.push(file);
    }
    const tooMany = files.length + chosen.length > ENQUIRY.maxFiles;
    setFiles(next);
    setFileError(problem ?? (tooMany ? `You can upload up to ${ENQUIRY.maxFiles} files.` : ''));
  };

  const removeFile = (file) => {
    setFiles((list) => list.filter((f) => f !== file));
    setFileError('');
  };

  const validate = () => {
    const errors = {};
    if (form.name.trim().length < 2) errors.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Enter a valid email address, like you@company.com.';
    }
    if (form.subject.trim().length < 2) errors.subject = 'Enter a subject.';
    if (form.message.trim().length < 2) errors.message = 'Enter your message.';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      document.getElementById(`connect-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitError('');
    try {
      let enquiryId;
      let uploaded = [];
      if (files.length) {
        setStatus('Preparing upload…');
        const res = await fetch('/api/enquiry-upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: files.map(({ name, size }) => ({ name, size })), website: form.website }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Could not prepare your upload.');

        for (const [index, upload] of data.uploads.entries()) {
          setStatus(`Uploading file ${index + 1} of ${files.length}…`);
          await uploadFile(files[index], upload.url);
        }
        enquiryId = data.enquiryId;
        uploaded = data.uploads.map(({ path, name }) => ({ path, name }));
      }

      setStatus('Sending…');
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, enquiryId, files: uploaded }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFieldErrors(data.fields || {});
        throw new Error(data.error || 'Your message could not be sent. Please try again.');
      }
      setSent({ fileCount: uploaded.length });
      setForm(EMPTY_FORM);
      setFiles([]);
    } catch (err) {
      setSubmitError(err.message || 'Your message could not be sent. Please try again.');
    } finally {
      setStatus('');
    }
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
            <div className="glass-card connect-form-card" ref={formCardRef}>
              <h2 className="connect-section-title">Send a Message</h2>
              {sent ? (
                <div className="connect-sent" role="status">
                  <p className="connect-alert">
                    Thank you. We received your message{sent.fileCount ? ` and ${sent.fileCount} file${sent.fileCount > 1 ? 's' : ''}` : ''}, and our team will reply by email.
                  </p>
                  <button type="button" className="btn btn-outline connect-again" onClick={() => setSent(null)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="connect-form" aria-label="Contact form" noValidate>
                  <div className="form-group">
                    <label htmlFor="connect-name" className="form-label">Name</label>
                    <input
                      id="connect-name" type="text" name="name" className="form-input" placeholder="Your full name"
                      required autoComplete="name" value={form.name} onChange={updateField}
                      aria-invalid={Boolean(fieldErrors.name)}
                    />
                    {fieldErrors.name && <p className="form-error">{fieldErrors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="connect-email" className="form-label">Email</label>
                    <input
                      id="connect-email" type="email" name="email" className="form-input" placeholder="you@company.com"
                      required autoComplete="email" value={form.email} onChange={updateField}
                      aria-invalid={Boolean(fieldErrors.email)}
                    />
                    {fieldErrors.email && <p className="form-error">{fieldErrors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="connect-subject" className="form-label">Subject</label>
                    <input
                      id="connect-subject" type="text" name="subject" className="form-input"
                      placeholder="Product enquiry, technical question…" required
                      value={form.subject} onChange={updateField} aria-invalid={Boolean(fieldErrors.subject)}
                    />
                    {fieldErrors.subject && <p className="form-error">{fieldErrors.subject}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="connect-message" className="form-label">Message</label>
                    <textarea
                      id="connect-message" name="message" className="form-input form-textarea"
                      placeholder="Describe your application, materials, operating conditions…"
                      rows={5} required maxLength={4000} value={form.message} onChange={updateField}
                      aria-invalid={Boolean(fieldErrors.message)}
                    />
                    {fieldErrors.message && <p className="form-error">{fieldErrors.message}</p>}
                  </div>

                  <div className="form-group">
                    <span className="form-label">Drawings or files <span className="form-optional">(optional)</span></span>
                    <label className="connect-file">
                      <input
                        id="connect-files" type="file" multiple onChange={addFiles} aria-label="Upload drawings or files"
                        aria-describedby="connect-files-help" accept={ENQUIRY.extensions.map((ext) => `.${ext}`).join(',')}
                      />
                      Click to upload your drawings
                    </label>
                    <p className="form-help" id="connect-files-help">
                      Up to {ENQUIRY.maxFiles} files, 20 MB each: PDF, DWG, DXF, STEP, IGES, PNG or JPG.
                    </p>
                    {fileError && <p className="form-error" role="alert">{fileError}</p>}
                    {files.length > 0 && (
                      <ul className="connect-file-list">
                        {files.map((file) => (
                          <li key={`${file.name}-${file.size}`}>
                            <span className="connect-file-name">{file.name} ({formatBytes(file.size)})</span>
                            <button
                              type="button" className="connect-file-remove" onClick={() => removeFile(file)}
                              disabled={Boolean(status)} aria-label={`Remove ${file.name}`}
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Honeypot for bots — hidden from people and assistive tech */}
                  <div className="connect-hp" aria-hidden="true">
                    <label htmlFor="connect-website">Website</label>
                    <input id="connect-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={updateField} />
                  </div>

                  {submitError && <p className="connect-alert" role="alert">{submitError}</p>}

                  <button type="submit" className="btn btn-primary connect-submit" id="connect-form-submit" disabled={Boolean(status)}>
                    {status || 'Send Message'}
                  </button>
                </form>
              )}
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

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../shared/components/ScrollReveal';
import { company } from '../../content/company';
import { COUNTRIES } from '../../content/timezones';
import { uploadFile } from '../../content/enquiry';
import {
  careerAreas,
  careerStats,
  hiringSteps,
  resumeProblem,
  whatWeDo,
  whyJoin,
} from '../../content/careers';
import './Careers.css';

const EMPTY_FORM = {
  name: '', phone: '', email: '', role: '', skills: '', state: '', country: 'IN', website: '',
};

function validate(form, resume) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Enter your full name.';
  if (!/^\+?[\d\s()-]{7,20}$/.test(form.phone.trim())) errors.phone = 'Enter a valid phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address, like you@example.com.';
  }
  if (form.role.trim().length < 2) errors.role = 'Enter the role you are looking for.';
  if (form.skills.trim().length < 2) errors.skills = 'Tell us about your skills.';
  if (form.state.trim().length < 2) errors.state = 'Enter your state.';
  if (!resume) errors.resume = 'Upload your resume.';
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div className="career-field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="career-error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

export default function CareersPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [status, setStatus] = useState('');
  const [sentRole, setSentRole] = useState('');
  const [confirmationSent, setConfirmationSent] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    document.title = 'Career | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  const scrollToForm = () => {
    const target = formRef.current;
    if (!target) return;
    if (window.lenis) {
      window.lenis.resize();
      window.lenis.scrollTo(target, { offset: -100, force: true, immediate: true });
    } else {
      target.scrollIntoView({ block: 'start' });
    }
  };

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const chooseResume = (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    const problem = resumeProblem(file);
    setResume(problem ? null : file);
    setErrors((errs) => ({ ...errs, resume: problem ?? undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form, resume);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`career-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitError('');
    try {
      setStatus('Preparing upload…');
      const linkRes = await fetch('/api/application-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: resume.name, size: resume.size, website: form.website }),
      });
      const link = await linkRes.json();
      if (!linkRes.ok) throw new Error(link.error || 'Could not prepare your upload.');

      setStatus('Uploading resume…');
      await uploadFile(resume, link.url);

      setStatus('Sending application…');
      const res = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          applicationId: link.applicationId,
          resume: { path: link.path, name: resume.name },
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.fields || {});
        throw new Error(data.error || 'Your application could not be sent. Please try again.');
      }
      setSentRole(form.role.trim());
      setConfirmationSent(data.confirmed);
      setForm(EMPTY_FORM);
      setResume(null);
    } catch (err) {
      setSubmitError(err.message || 'Your application could not be sent. Please try again.');
    } finally {
      setStatus('');
    }
  };

  return (
    <div className="page-wrapper careers-page">
      <section className="careers-hero">
        <div className="container careers-hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">Career at Mithson</span>
            <h1 className="section-title">Build your career in high-performance engineering</h1>
            <p className="section-subtitle">
              Join the {company.group} team in Chennai and help make the seals and polymer components that
              keep demanding equipment running in industries around the world.
            </p>
            <button type="button" className="btn btn-navy careers-apply" onClick={scrollToForm}>
              Apply now
            </button>
          </motion.div>

          <ul className="careers-stats">
            {careerStats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="careers-intro">
              <span className="section-label">What we do</span>
              <h2 className="section-title">Small parts with a big job</h2>
              <p className="section-subtitle">
                A seal may look simple, but it can decide whether a valve, pump or machine works safely.
                That is the kind of problem we solve every day.
              </p>
            </div>
          </ScrollReveal>
          <div className="careers-grid careers-grid--4">
            {whatWeDo.map((item) => (
              <article key={item.title} className="careers-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="careers-sectors">
            <strong>Industries we serve:</strong> {company.sectors.join(', ')}.
          </p>
        </div>
      </section>

      <section className="section careers-tint">
        <div className="container">
          <div className="careers-intro">
            <span className="section-label">Why join us</span>
            <h2 className="section-title">A place to learn, contribute and grow</h2>
          </div>
          <div className="careers-grid careers-grid--3">
            {whyJoin.map((item) => (
              <article key={item.title} className="careers-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container careers-areas">
          <div>
            <span className="section-label">Where you could fit</span>
            <h2 className="section-title">Areas of work</h2>
            <p className="section-subtitle">
              We make our products from design through to delivery, so there are many kinds of work behind
              every part. Tell us where your interests and skills fit.
            </p>
          </div>
          <ul className="careers-chips">
            {careerAreas.map((area) => <li key={area}>{area}</li>)}
          </ul>
        </div>
      </section>

      <section className="section careers-tint" ref={formRef} id="apply">
        <div className="container careers-apply-grid">
          <div>
            <span className="section-label">Apply</span>
            <h2 className="section-title">Tell us about yourself</h2>
            <p className="section-subtitle">
              Share your details and resume. Our hiring team will review your application against the roles
              we are looking to fill.
            </p>
            <ol className="careers-steps">
              {hiringSteps.map((step, index) => (
                <li key={step.title}>
                  <span aria-hidden="true">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="careers-form-card">
            {sentRole ? (
              <div role="status">
                <h3 className="careers-form-title">Application received</h3>
                <p className="careers-sent">
                  Thank you for your interest in the {sentRole} position.
                  {confirmationSent ? ' We have sent a confirmation to your email.' : ' We have received your application.'}
                </p>
                <button type="button" className="btn btn-outline" onClick={() => setSentRole('')}>
                  Send another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Job application form">
                <h3 className="careers-form-title">Job application</h3>

                <Field id="career-name" label="Full name" error={errors.name}>
                  <input
                    id="career-name" name="name" type="text" autoComplete="name" required
                    value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)}
                  />
                </Field>

                <div className="career-row">
                  <Field id="career-phone" label="Phone number" error={errors.phone}>
                    <input
                      id="career-phone" name="phone" type="tel" autoComplete="tel" required
                      value={form.phone} onChange={updateField} aria-invalid={Boolean(errors.phone)}
                    />
                  </Field>
                  <Field id="career-email" label="Email" error={errors.email}>
                    <input
                      id="career-email" name="email" type="email" autoComplete="email" required
                      value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)}
                    />
                  </Field>
                </div>

                <Field id="career-role" label="Role you are looking for" error={errors.role}>
                  <input
                    id="career-role" name="role" type="text" required maxLength={120}
                    placeholder="For example, Quality Engineer"
                    value={form.role} onChange={updateField} aria-invalid={Boolean(errors.role)}
                  />
                </Field>

                <Field id="career-skills" label="Your skills" error={errors.skills}>
                  <textarea
                    id="career-skills" name="skills" rows={4} required maxLength={2000}
                    placeholder="Your main skills, tools, qualifications and experience"
                    value={form.skills} onChange={updateField} aria-invalid={Boolean(errors.skills)}
                  />
                </Field>

                <div className="career-row">
                  <Field id="career-state" label="State" error={errors.state}>
                    <input
                      id="career-state" name="state" type="text" autoComplete="address-level1" required
                      value={form.state} onChange={updateField} aria-invalid={Boolean(errors.state)}
                    />
                  </Field>
                  <Field id="career-country" label="Country">
                    <select id="career-country" name="country" value={form.country} onChange={updateField}>
                      {COUNTRIES.map(({ code, name }) => <option key={code} value={code}>{name}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="career-field">
                  <span className="career-label">Resume</span>
                  <label className="career-file">
                    <input
                      id="career-resume" type="file" accept=".pdf,.doc,.docx" onChange={chooseResume}
                      aria-label="Upload your resume" aria-describedby="career-resume-help"
                    />
                    {resume ? `Selected: ${resume.name}` : 'Click to upload your resume'}
                  </label>
                  <p className="career-help" id="career-resume-help">PDF, DOC or DOCX, up to 10 MB.</p>
                  {errors.resume && <p className="career-error" role="alert">{errors.resume}</p>}
                </div>

                {/* Honeypot for bots — hidden from people and assistive tech */}
                <div className="career-hp" aria-hidden="true">
                  <label htmlFor="career-website">Website</label>
                  <input id="career-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={updateField} />
                </div>

                {submitError && <p className="careers-alert" role="alert">{submitError}</p>}

                <button type="submit" className="btn btn-navy careers-submit" disabled={Boolean(status)}>
                  {status || 'Submit application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

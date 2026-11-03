import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../../../shared/hooks/usePageMeta';
import { ENQUIRY, fileProblem, sendEnquiry } from '../../../content/enquiry';
import { PageHero } from '../../Capabilities/CapabilityPage';
import '../../Capabilities/Capabilities.css';
import '../ConnectWithUs/ConnectWithUs.css';

const MARKETS = ['Oil & Gas', 'Downhole Tools', 'Life Science', 'Semiconductor', 'Aerospace', 'Automotive', 'Mining', 'Robotics', 'Other'];
const INQUIRIES = ['Proposal', 'Material data', 'Drawing review', 'Other'];
const MOTIONS = ['Static', 'Rotating', 'Reciprocating', 'Other'];

const EMPTY = {
  company: '', name: '', email: '', phone: '', dueDate: '', market: '', inquiryType: '',
  tempMin: '', tempNormal: '', tempMax: '', tempTest: '',
  pressureMin: '', pressureNormal: '', pressureMax: '', pressureTest: '',
  media: '', motion: '', speed: '', dimensions: '', clearances: '', notes: '', website: '',
};

const CONDITIONS = [
  ['tempMin', 'Minimum temperature'], ['tempNormal', 'Normal temperature'],
  ['tempMax', 'Maximum temperature'], ['tempTest', 'Test temperature'],
  ['pressureMin', 'Minimum pressure'], ['pressureNormal', 'Normal pressure'],
  ['pressureMax', 'Maximum pressure'], ['pressureTest', 'Test pressure'],
];

function Field({ id, label, error, wide, children }) {
  return (
    <div className={`application-field${wide ? ' application-field--wide' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="application-error" role="alert">{error}</p>}
    </div>
  );
}

function check(form) {
  const errors = {};
  if (form.company.trim().length < 2) errors.company = 'Enter your company name.';
  if (form.name.trim().length < 2) errors.name = 'Enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email address, like you@company.com.';
  if (!form.market) errors.market = 'Choose a market.';
  if (!form.inquiryType) errors.inquiryType = 'Choose an inquiry type.';
  return errors;
}

export default function ApplicationDataPage() {
  usePageMeta('Application Data Form', 'Send Mithson your operating conditions, dimensions and drawings for a sealing application review.');
  const [form, setForm] = useState(EMPTY);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [status, setStatus] = useState('');
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const chooseFiles = (e) => {
    const chosen = [...files, ...e.target.files];
    e.target.value = '';
    const problem = chosen.map(fileProblem).find(Boolean)
      ?? (chosen.length > ENQUIRY.maxFiles ? `You can attach up to ${ENQUIRY.maxFiles} files.` : '');
    setFileError(problem);
    if (!problem) setFiles(chosen);
  };

  const text = (name, label, props = {}) => (
    <Field id={`app-${name}`} label={label} error={errors[name]} wide={props.wide}>
      <input
        id={`app-${name}`} name={name} className="form-input" value={form[name]} onChange={update}
        type={props.type ?? 'text'} autoComplete={props.autoComplete} maxLength={300}
      />
    </Field>
  );

  const select = (name, label, options) => (
    <Field id={`app-${name}`} label={label} error={errors[name]}>
      <select id={`app-${name}`} name={name} className="form-input" value={form[name]} onChange={update}>
        <option value="">Please choose</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </Field>
  );

  const area = (name, label) => (
    <Field id={`app-${name}`} label={label} wide>
      <textarea id={`app-${name}`} name={name} className="form-input form-textarea" rows={3} maxLength={1000} value={form[name]} onChange={update} />
    </Field>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = check(form);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`app-${first}`)?.focus();
      return;
    }

    setSubmitError('');
    const { name, email, notes, website, ...application } = form;
    try {
      await sendEnquiry({
        form: {
          name, email, website,
          subject: `Application data: ${form.company.trim()}`.slice(0, 160),
          message: notes.trim() || 'See the application data in this email.',
          application,
        },
        files,
        onStatus: setStatus,
      });
      setSent(true);
      setForm(EMPTY);
      setFiles([]);
    } catch (err) {
      setErrors(err.fields ?? {});
      setSubmitError(err.message || 'Your details could not be sent. Please try again.');
    } finally {
      setStatus('');
    }
  };

  return (
    <div className="page-wrapper">
      <PageHero
        label="Enquire Now"
        title="Application Data Form"
        intro="Share your operating conditions and drawings. Add what you know, and leave the rest blank."
      />
      <section className="section">
        <div className="container">
          {sent ? (
            <div role="status" className="capability-notice">
              <p>Thank you. We have received your application data.</p>
              <div className="capability-actions" style={{ marginTop: 'var(--space-4)' }}>
                <button type="button" className="btn btn-outline" onClick={() => setSent(false)}>Send another</button>
                <Link to="/capabilities" className="btn btn-ghost">View Capabilities</Link>
              </div>
            </div>
          ) : (
            <form className="application-form" onSubmit={handleSubmit} noValidate aria-label="Application data form">
              <fieldset>
                <legend>Your details</legend>
                {text('company', 'Company name')}
                {text('name', 'Your name', { autoComplete: 'name' })}
                {text('email', 'Email', { type: 'email', autoComplete: 'email' })}
                {text('phone', 'Phone', { type: 'tel', autoComplete: 'tel' })}
                {select('market', 'Market', MARKETS)}
                {select('inquiryType', 'Type of inquiry', INQUIRIES)}
                {text('dueDate', 'Due date', { type: 'date' })}
              </fieldset>

              <fieldset>
                <legend>Operating conditions (include units)</legend>
                {CONDITIONS.map(([name, label]) => <div key={name}>{text(name, label)}</div>)}
                {area('media', 'Media and contaminants')}
                {select('motion', 'Motion', MOTIONS)}
                {text('speed', 'Speed or stroke')}
              </fieldset>

              <fieldset>
                <legend>Hardware and files</legend>
                {area('dimensions', 'Hardware dimensions (ID, OD, length)')}
                {area('clearances', 'Clearances and gaps')}
                {area('notes', 'Notes')}
                <Field id="app-files" label="Drawings and files" wide>
                  <input id="app-files" type="file" multiple accept={ENQUIRY.extensions.map((ext) => `.${ext}`).join(',')} onChange={chooseFiles} />
                  <p className="application-files">
                    {files.length ? `${files.length} selected: ${files.map(({ name }) => name).join(', ')}` : `Up to ${ENQUIRY.maxFiles} files, 20 MB each.`}
                  </p>
                  {fileError && <p className="application-error" role="alert">{fileError}</p>}
                </Field>
              </fieldset>

              <div className="application-hp" aria-hidden="true">
                <label htmlFor="app-website">Website</label>
                <input id="app-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
              </div>

              {submitError && <p className="application-error" role="alert">{submitError}</p>}
              <div>
                <button type="submit" className="btn btn-navy" disabled={Boolean(status)}>{status || 'Send Application Data'}</button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

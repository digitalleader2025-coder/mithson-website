import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BOOKING,
  addDays,
  blocksFor,
  isBookableDate,
  isStartInFuture,
  minutesToHHMM,
  minutesToLabel,
  nowInIST,
  startTimes,
} from '../../content/booking';
import './BookMeeting.css';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const EMPTY_FORM = { name: '', email: '', company: '', phone: '', notes: '', website: '' };

const monthKey = (dateStr) => dateStr.slice(0, 7);

function shiftMonth(key, delta) {
  const [y, m] = key.split('-').map(Number);
  const d = new Date(Date.UTC(y, m - 1 + delta, 1));
  return d.toISOString().slice(0, 7);
}

function monthLabel(key) {
  const [y, m] = key.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-IN', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function longDate(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC',
  });
}

/** Calendar cells for a month, Monday first; null for leading blanks. */
function monthCells(key) {
  const [y, m] = key.split('-').map(Number);
  const first = new Date(Date.UTC(y, m - 1, 1));
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const lead = (first.getUTCDay() + 6) % 7;
  const cells = Array(lead).fill(null);
  for (let d = 1; d <= days; d++) cells.push(`${key}-${String(d).padStart(2, '0')}`);
  return cells;
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 10l6-3v10l-6-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ChevronIcon({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BookMeetingPage() {
  const today = nowInIST().date;
  const lastDay = addDays(today, BOOKING.maxDaysAhead);

  const [duration, setDuration] = useState(BOOKING.durations[0]);
  const [viewMonth, setViewMonth] = useState(monthKey(today));
  const [selectedDate, setSelectedDate] = useState(null);
  const [busy, setBusy] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState('pick');
  const [form, setForm] = useState(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const headingRef = useRef(null);
  const requestRef = useRef(0);

  useEffect(() => {
    document.title = 'Book a Meeting | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  // Move focus to the new step's heading so keyboard and screen reader users follow along
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  const loadAvailability = useCallback(async (date) => {
    const requestId = ++requestRef.current;
    setLoadingSlots(true);
    setSlotsError('');
    try {
      const res = await fetch(`/api/availability?date=${date}`);
      const data = await res.json();
      if (requestId !== requestRef.current) return;
      if (!res.ok) throw new Error(data.error || 'Could not load available times.');
      setBusy(data.busy);
    } catch (err) {
      if (requestId !== requestRef.current) return;
      setBusy([]);
      setSlotsError(err.message || 'Could not load available times. Please try again.');
    } finally {
      if (requestId === requestRef.current) setLoadingSlots(false);
    }
  }, []);

  const pickDate = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    loadAvailability(date);
  };

  const changeDuration = (value) => {
    setDuration(value);
    setSelectedTime(null);
  };

  const slots = useMemo(() => {
    if (!selectedDate) return [];
    return startTimes(duration)
      .filter((start) => isStartInFuture(selectedDate, start))
      .map((start) => ({
        start,
        booked: blocksFor(start, duration).some((b) => busy.includes(b)),
      }));
  }, [selectedDate, duration, busy]);

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const validateField = (name, value) => {
    if (name === 'name' && value.trim().length < 2) return 'Enter your name.';
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      return 'Enter a valid email address, like you@company.com.';
    }
    return undefined;
  };

  const handleBlur = (e) => {
    const error = validateField(e.target.name, e.target.value);
    setFieldErrors((errs) => ({ ...errs, [e.target.name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = { name: validateField('name', form.name), email: validateField('email', form.email) };
    if (errors.name || errors.email) {
      setFieldErrors(errors);
      document.getElementById(errors.name ? 'book-name' : 'book-email')?.focus();
      return;
    }

    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date: selectedDate, time: minutesToHHMM(selectedTime), duration }),
      });
      const data = await res.json();
      if (res.status === 409) {
        // Someone took the slot first — return to the time list with fresh availability
        setSelectedTime(null);
        setStep('pick');
        await loadAvailability(selectedDate);
        setSlotsError(data.error);
        return;
      }
      if (!res.ok) {
        setFieldErrors(data.fields || {});
        throw new Error(data.error || 'Could not book the meeting. Please try again.');
      }
      setConfirmation(data);
      setStep('done');
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const startOver = () => {
    setForm(EMPTY_FORM);
    setFieldErrors({});
    setSubmitError('');
    setConfirmation(null);
    setSelectedTime(null);
    setStep('pick');
    if (selectedDate) loadAvailability(selectedDate);
  };

  const canGoPrev = viewMonth > monthKey(today);
  const canGoNext = viewMonth < monthKey(lastDay);
  const summary = selectedDate && selectedTime !== null
    ? `${minutesToLabel(selectedTime)} – ${minutesToLabel(selectedTime + duration)}, ${longDate(selectedDate)}`
    : null;

  return (
    <div className="page-wrapper book-page">
      <div className="container book-container">
        <div className="book-card">
          {/* Meeting details */}
          <aside className="book-info">
            <p className="book-host">Mithson Sealing Solutions</p>
            <h1 className="book-title" tabIndex={-1} ref={step === 'pick' ? headingRef : undefined}>
              Book a Meeting
            </h1>
            <p className="book-lead">
              Talk to our engineering and sales team about your sealing application, materials or a quote.
            </p>

            <fieldset className="book-duration" disabled={step !== 'pick'}>
              <legend className="book-meta-label"><ClockIcon /> Duration</legend>
              <div className="book-duration-options">
                {BOOKING.durations.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`book-duration-btn${duration === d ? ' is-selected' : ''}`}
                    aria-pressed={duration === d}
                    onClick={() => changeDuration(d)}
                  >
                    {d === 60 ? '1 hour' : `${d} min`}
                  </button>
                ))}
              </div>
            </fieldset>

            <p className="book-meta"><VideoIcon /> Zoom video call — the link is emailed to you</p>
            <p className="book-meta"><GlobeIcon /> {BOOKING.timeZoneLabel}</p>

            {summary && step !== 'pick' && (
              <p className="book-summary">
                <strong>{duration === 60 ? '1 hour' : `${duration} min`}</strong>
                <span>{summary} (IST)</span>
              </p>
            )}
          </aside>

          {step === 'pick' && (
            <div className="book-picker">
              <div className="book-calendar">
                <h2 className="book-section-title">Select a date &amp; time</h2>
                <div className="book-month">
                  <button
                    type="button"
                    className="book-month-btn"
                    onClick={() => setViewMonth((m) => shiftMonth(m, -1))}
                    disabled={!canGoPrev}
                    aria-label="Previous month"
                  >
                    <ChevronIcon dir="left" />
                  </button>
                  <span className="book-month-label" aria-live="polite">{monthLabel(viewMonth)}</span>
                  <button
                    type="button"
                    className="book-month-btn"
                    onClick={() => setViewMonth((m) => shiftMonth(m, 1))}
                    disabled={!canGoNext}
                    aria-label="Next month"
                  >
                    <ChevronIcon dir="right" />
                  </button>
                </div>

                <div className="book-grid">
                  {WEEKDAYS.map((w) => (
                    <span key={w} className="book-weekday" aria-hidden="true">{w}</span>
                  ))}
                  {monthCells(viewMonth).map((date, i) =>
                    date ? (
                      <button
                        key={date}
                        type="button"
                        className={`book-day${selectedDate === date ? ' is-selected' : ''}${date === today ? ' is-today' : ''}`}
                        disabled={!isBookableDate(date)}
                        aria-pressed={selectedDate === date}
                        aria-label={longDate(date)}
                        onClick={() => pickDate(date)}
                      >
                        {Number(date.slice(8))}
                      </button>
                    ) : (
                      <span key={`blank-${i}`} />
                    )
                  )}
                </div>
                <p className="book-hours">Meetings run 10:00 am – 7:00 pm IST, Monday to Saturday.</p>
              </div>

              <div className="book-times" aria-live="polite">
                {!selectedDate && <p className="book-empty">Choose a date to see available times.</p>}

                {selectedDate && (
                  <>
                    <h3 className="book-times-date">{longDate(selectedDate)}</h3>
                    {slotsError && <p className="book-error" role="alert">{slotsError}</p>}
                    {loadingSlots && <p className="book-empty">Loading times…</p>}
                    {!loadingSlots && !slotsError && slots.length === 0 && (
                      <p className="book-empty">No times left on this date. Choose another date.</p>
                    )}
                    {!loadingSlots && slots.length > 0 && (
                      <ul className="book-slot-list">
                        {slots.map(({ start, booked }) => (
                          <li key={start} className="book-slot-row">
                            {booked ? (
                              <span className="book-slot is-booked" aria-label={`${minutesToLabel(start)} booked`}>
                                <span>{minutesToLabel(start)}</span>
                                <span className="book-slot-tag">Booked</span>
                              </span>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className={`book-slot${selectedTime === start ? ' is-selected' : ''}`}
                                  aria-pressed={selectedTime === start}
                                  onClick={() => setSelectedTime(start)}
                                >
                                  {minutesToLabel(start)}
                                </button>
                                {selectedTime === start && (
                                  <button type="button" className="book-next" onClick={() => setStep('details')}>
                                    Next
                                  </button>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {step === 'details' && (
            <form className="book-form" onSubmit={handleSubmit} noValidate>
              <h2 className="book-section-title" tabIndex={-1} ref={headingRef}>Enter your details</h2>

              <div className="book-field">
                <label htmlFor="book-name">Name</label>
                <input
                  id="book-name" name="name" type="text" autoComplete="name" required
                  value={form.name} onChange={updateField} onBlur={handleBlur}
                  aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? 'book-name-error' : undefined}
                />
                {fieldErrors.name && <p className="book-field-error" id="book-name-error">{fieldErrors.name}</p>}
              </div>

              <div className="book-field">
                <label htmlFor="book-email">Email</label>
                <input
                  id="book-email" name="email" type="email" autoComplete="email" required
                  value={form.email} onChange={updateField} onBlur={handleBlur}
                  aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? 'book-email-error' : 'book-email-help'}
                />
                {fieldErrors.email
                  ? <p className="book-field-error" id="book-email-error">{fieldErrors.email}</p>
                  : <p className="book-field-help" id="book-email-help">The Zoom link and meeting details are sent here.</p>}
              </div>

              <div className="book-field-row">
                <div className="book-field">
                  <label htmlFor="book-company">Company <span className="book-optional">(optional)</span></label>
                  <input id="book-company" name="company" type="text" autoComplete="organization" value={form.company} onChange={updateField} />
                </div>
                <div className="book-field">
                  <label htmlFor="book-phone">Phone <span className="book-optional">(optional)</span></label>
                  <input id="book-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField} />
                </div>
              </div>

              <div className="book-field">
                <label htmlFor="book-notes">What would you like to discuss? <span className="book-optional">(optional)</span></label>
                <textarea id="book-notes" name="notes" rows={4} value={form.notes} onChange={updateField} maxLength={1000} />
              </div>

              {/* Honeypot for bots — hidden from people and assistive tech */}
              <div className="book-hp" aria-hidden="true">
                <label htmlFor="book-website">Website</label>
                <input id="book-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={updateField} />
              </div>

              {submitError && <p className="book-error" role="alert">{submitError}</p>}

              <div className="book-form-actions">
                <button type="button" className="book-back" onClick={() => setStep('pick')} disabled={submitting}>
                  Back
                </button>
                <button type="submit" className="book-confirm" disabled={submitting}>
                  {submitting ? 'Booking…' : 'Book meeting'}
                </button>
              </div>
            </form>
          )}

          {step === 'done' && confirmation && (
            <div className="book-done">
              <div className="book-done-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h2 className="book-section-title" tabIndex={-1} ref={headingRef}>Meeting booked</h2>
              <p className="book-done-when">
                {confirmation.booking.timeLabel} IST on {confirmation.booking.dateLabel}, for {confirmation.booking.duration} minutes
              </p>
              <p className="book-done-text">
                {confirmation.emailed
                  ? <>We sent the Zoom link and meeting details to <strong>{confirmation.booking.email}</strong>.</>
                  : <>Your time is reserved, but the confirmation email could not be sent. Contact <a href="mailto:sales@mithson.com">sales@mithson.com</a> for your Zoom link.</>}
              </p>
              <button type="button" className="book-back" onClick={startOver}>Book another meeting</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

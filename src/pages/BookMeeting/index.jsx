import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BOOKING,
  blocksFor,
  localParts,
  minutesToHHMM,
  minutesToLabel,
  slotInstant,
  slotsByLocalDate,
} from '../../content/booking';
import { COUNTRIES, detectLocation, zoneLabel, zoneOptions } from '../../content/timezones';
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
  const [location, setLocation] = useState(detectLocation);
  const { country, timeZone } = location;
  const today = localParts(Date.now(), timeZone).date;

  const [duration, setDuration] = useState(BOOKING.durations[0]);
  const [platform, setPlatform] = useState(null);
  const [viewMonth, setViewMonth] = useState(monthKey(today));
  const [selectedDate, setSelectedDate] = useState(null);
  const [busy, setBusy] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
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

  // A customer's calendar day can span two India dates, so availability is read for each one
  const loadAvailability = useCallback(async (dates) => {
    const requestId = ++requestRef.current;
    setLoadingSlots(true);
    setSlotsError('');
    try {
      const days = await Promise.all(dates.map(async (date) => {
        const res = await fetch(`/api/availability?date=${date}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Could not load available times.');
        return data;
      }));
      if (requestId !== requestRef.current) return;
      setBusy(days.flatMap(({ date, busy: blocks }) => blocks.map((block) => `${date}|${block}`)));
    } catch (err) {
      if (requestId !== requestRef.current) return;
      setBusy([]);
      setSlotsError(err.message || 'Could not load available times. Please try again.');
    } finally {
      if (requestId === requestRef.current) setLoadingSlots(false);
    }
  }, []);

  const slotsByDay = useMemo(() => slotsByLocalDate(duration, timeZone), [duration, timeZone]);
  const openDates = [...slotsByDay.keys()];
  const lastDay = openDates[openDates.length - 1] ?? today;
  const indiaDates = useMemo(
    () => [...new Set((slotsByDay.get(selectedDate) ?? []).map((slot) => slot.date))],
    [slotsByDay, selectedDate]
  );
  const indiaDatesKey = indiaDates.join(',');

  useEffect(() => {
    if (indiaDatesKey) loadAvailability(indiaDatesKey.split(','));
  }, [indiaDatesKey, loadAvailability]);

  const pickDate = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const changeDuration = (value) => {
    setDuration(value);
    setSelectedSlot(null);
  };

  // Dates and times all shift with the zone, so the customer picks again
  const changeLocation = (next) => {
    setLocation(next);
    setSelectedDate(null);
    setSelectedSlot(null);
    setViewMonth(monthKey(localParts(Date.now(), next.timeZone).date));
  };

  const changeCountry = (code) => changeLocation({ country: code, timeZone: zoneOptions(code)[0] });

  const slots = useMemo(() => {
    if (!selectedDate) return [];
    return (slotsByDay.get(selectedDate) ?? []).map((slot) => ({
      ...slot,
      booked: blocksFor(slot.start, duration).some((b) => busy.includes(`${slot.date}|${b}`)),
    }));
  }, [selectedDate, slotsByDay, duration, busy]);

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
    const errors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      platform: platform ? undefined : 'Choose Microsoft Teams or Google Meet.',
    };
    if (errors.name || errors.email || errors.platform) {
      setFieldErrors(errors);
      const firstInvalid = errors.name ? 'book-name' : errors.email ? 'book-email' : `book-platform-${BOOKING.platforms[0].id}`;
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          date: selectedSlot.date,
          time: minutesToHHMM(selectedSlot.start),
          duration,
          platform,
          country,
          timeZone,
        }),
      });
      const data = await res.json();
      if (res.status === 409) {
        // Someone took the slot first — return to the time list with fresh availability
        setSelectedSlot(null);
        setStep('pick');
        await loadAvailability(indiaDates);
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
    setSelectedSlot(null);
    setStep('pick');
    if (indiaDates.length) loadAvailability(indiaDates);
  };

  const canGoPrev = viewMonth > monthKey(today);
  const canGoNext = viewMonth < monthKey(lastDay);
  const summary = selectedDate && selectedSlot
    ? `${minutesToLabel(selectedSlot.minutes)} – ${minutesToLabel((selectedSlot.minutes + duration) % 1440)}, ${longDate(selectedDate)}`
    : null;
  const zoneChoices = zoneOptions(country);
  const zoneText = zoneLabel(timeZone);
  const inIndia = timeZone === BOOKING.timeZone;

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

            <fieldset className="book-location" disabled={step !== 'pick'}>
              <legend className="book-meta-label"><GlobeIcon /> Your location</legend>
              <label className="book-select-label" htmlFor="book-country">Country</label>
              <select id="book-country" className="book-select" value={country} onChange={(e) => changeCountry(e.target.value)}>
                {COUNTRIES.map(({ code, name }) => <option key={code} value={code}>{name}</option>)}
              </select>
              {zoneChoices.length > 1 ? (
                <>
                  <label className="book-select-label" htmlFor="book-zone">Time zone</label>
                  <select
                    id="book-zone"
                    className="book-select"
                    value={timeZone}
                    onChange={(e) => changeLocation({ country, timeZone: e.target.value })}
                  >
                    {zoneChoices.map((zone) => <option key={zone} value={zone}>{zoneLabel(zone)}</option>)}
                  </select>
                </>
              ) : (
                <p className="book-zone-text">{zoneText}</p>
              )}
            </fieldset>

            <p className="book-meta"><VideoIcon /> Microsoft Teams or Google Meet — the link is emailed to you</p>

            {summary && step !== 'pick' && (
              <p className="book-summary">
                <strong>{duration === 60 ? '1 hour' : `${duration} min`}</strong>
                <span>{summary}</span>
                <span className="book-summary-zone">{zoneLabel(timeZone, slotInstant(selectedSlot.date, selectedSlot.start))}</span>
                {!inIndia && (
                  <span className="book-summary-zone">
                    {minutesToLabel(selectedSlot.start)} India time, {longDate(selectedSlot.date)}
                  </span>
                )}
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
                        disabled={!slotsByDay.has(date)}
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
                <p className="book-hours">
                  We meet 8:00 am – 8:00 pm India time, Monday to Saturday.
                  {!inIndia && ' Dates and times here are shown in your time zone.'}
                </p>
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
                        {slots.map((slot) => (
                          <li key={`${slot.date}-${slot.start}`} className="book-slot-row">
                            {slot.booked ? (
                              <span className="book-slot is-booked" aria-label={`${minutesToLabel(slot.minutes)} booked`}>
                                <span>{minutesToLabel(slot.minutes)}</span>
                                <span className="book-slot-tag">Booked</span>
                              </span>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className={`book-slot${selectedSlot?.date === slot.date && selectedSlot?.start === slot.start ? ' is-selected' : ''}`}
                                  aria-pressed={selectedSlot?.date === slot.date && selectedSlot?.start === slot.start}
                                  onClick={() => setSelectedSlot(slot)}
                                >
                                  {minutesToLabel(slot.minutes)}
                                </button>
                                {selectedSlot?.date === slot.date && selectedSlot?.start === slot.start && (
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

              <fieldset className="book-platform">
                <legend>Meeting platform</legend>
                <div className="book-platform-options">
                  {BOOKING.platforms.map(({ id, label }) => (
                    <label key={id} className={`book-platform-option${platform === id ? ' is-selected' : ''}`}>
                      <input
                        id={`book-platform-${id}`}
                        type="radio"
                        name="platform"
                        value={id}
                        checked={platform === id}
                        onChange={() => {
                          setPlatform(id);
                          setFieldErrors((errs) => ({ ...errs, platform: undefined }));
                        }}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {fieldErrors.platform && <p className="book-field-error" role="alert">{fieldErrors.platform}</p>}
              </fieldset>

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
                  : <p className="book-field-help" id="book-email-help">The meeting link and details are sent here.</p>}
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
                {confirmation.booking.localTimeLabel} on {confirmation.booking.localDateLabel}, for {confirmation.booking.duration} minutes
              </p>
              <p className="book-done-text">
                {confirmation.booking.timeZoneLabel}
                {!inIndia && <><br />{confirmation.booking.timeLabel} India time on {confirmation.booking.dateLabel}</>}
              </p>
              <p className="book-done-text">
                {confirmation.emailed
                  ? <>We sent the {confirmation.booking.platformLabel} link and meeting details to <strong>{confirmation.booking.email}</strong>.</>
                  : <>Your time is reserved, but the confirmation email could not be sent. Contact <a href="mailto:sales@mithson.com">sales@mithson.com</a> for your {confirmation.booking.platformLabel} link.</>}
              </p>
              <button type="button" className="book-back" onClick={startOver}>Book another meeting</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

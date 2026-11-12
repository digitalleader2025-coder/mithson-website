import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { ItemSpecList } from '../../../shared/components/ProductSpecList';
import { products as allProducts, getProductBySlug } from '../../../content/products';
import { productItems } from '../../../content/productItems';
import {
  aoddHero,
  applications,
  applicationsNote,
  chemFactors,
  chemFields,
  chemIntro,
  chemResult,
  closing,
  components,
  customStages,
  documents,
  documentsNote,
  extras,
  extrasNote,
  faqs,
  heroChips,
  heroTags,
  hotspots,
  maintenance,
  maintenanceSafety,
  materials,
  materialsCompare,
  materialsNote,
  selectionSteps,
  specNote,
  specParameters,
  specTables,
  strokeIntro,
  strokeStages,
  techAdvantages,
  techCycle,
  techIntro,
  techNote,
  troubleshooting,
  troubleshootingNote,
} from '../../../content/diaphragmAodd';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './DiaphragmAodd.css';

// existing product photographs - kept exactly as they are
import imgDiaphragm from './assets/Diaphragm.png';
import imgShaft from './assets/PILOT Shaft.png';
import imgBall from './assets/PTFE Ball.png';
import imgOring from './assets/PTFE O-Ring.png';
import imgSeat from './assets/PTFE Seat.png';
// supporting photographs added for the new sections
import refBalls from './assets/ref/balls-and-seats-group.webp';
import refDiaphragmFace from './assets/ref/diaphragm-face.png';
import refShaft from './assets/ref/pilot-shaft.png';
import refOring from './assets/ref/ptfe-oring.png';
import refSeat from './assets/ref/valve-seat.webp';
import refPumps from './assets/ref/pumps-installed.webp';

const IMAGES = {
  diaphragm: imgDiaphragm,
  shaft: imgShaft,
  ball: imgBall,
  oring: imgOring,
  seat: imgSeat,
  'diaphragm-face': refDiaphragmFace,
  'shaft-detail': refShaft,
  'balls-group': refBalls,
  'seat-detail': refSeat,
  'oring-detail': refOring,
  'pumps-installed': refPumps,
};

const product = getProductBySlug('diaphragm-aodd');
const SPECS = productItems['diaphragm-aodd'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  gauge: <><path d="M12 21a9 9 0 1 0-9-9" /><path d="M3 12h3M12 3v3M19.5 6.5 17 9M12 12l5-3" /></>,
  thermo: <><path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0Z" /><path d="M12 9v5" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 13h6M9 17h4" /></>,
  diaphragm: <><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M12 3v18M4 12h4M16 12h4" /></>,
  shaft: <><rect x="3" y="10" width="18" height="4" rx="1.5" /><path d="M6 10V7M6 17v-3M18 10V7M18 17v-3" /></>,
  ball: <><circle cx="12" cy="10" r="5" /><path d="M5 19h14M8 17l4-2 4 2" /></>,
  seat: <><ellipse cx="12" cy="12" rx="9" ry="5" /><ellipse cx="12" cy="12" rx="3.5" ry="2" /></>,
  ring: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /></>,
  paint: <><rect x="4" y="4" width="12" height="8" rx="1.5" /><path d="M16 8h3v5a2 2 0 0 1-2 2h-3" /><path d="M12 15v3a2 2 0 0 1-4 0v-3" /></>,
  pharma: <><rect x="3" y="8" width="18" height="12" rx="3" /><path d="M9 8V5h6v3M12 11v6M9 14h6" /></>,
  food: <><path d="M5 3v8a3 3 0 0 0 6 0V3M8 11v10" /><path d="M17 3c-2 2-2 6 0 8v10" /></>,
  mine: <><path d="M3 20h18" /><path d="m6 20 6-12 6 12" /><path d="M9 14h6" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  water: <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />,
};

function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Head({ number, label, title, intro, light }) {
  return (
    <Reveal className={`mp-head${light ? ' mp-head--light' : ''}`}>
      <span className="mp-label">{number && <b>{number}</b>}{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

/**
 * The AODD pump cut-away, drawn in-house in Mithson blue and white.
 * `side` is which air chamber is pressurised ('left' or 'right'), which decides
 * where the diaphragms sit and which check balls are open. `highlight` lifts one
 * part out of the drawing. Both the explorer and the stroke demo use this.
 */
function PumpDiagram({ side = 'left', highlight = null, animate = false, reduceMotion = false }) {
  const toRight = side === 'left'; // air in the left chamber pushes the assembly right
  const shift = reduceMotion ? 0 : (toRight ? 16 : -16);
  const move = animate && !reduceMotion
    ? { x: [16, -16, 16] }
    : { x: shift };
  const timing = animate && !reduceMotion
    ? { duration: 3.4, repeat: Infinity, ease: 'easeInOut' }
    : { duration: 0.7, ease: EASE };

  const on = (key) => (highlight === key ? ' is-lit' : '');
  // on the discharge side the ball is lifted; on the suction side the opposite
  const leftDischargeOpen = toRight;
  const rightDischargeOpen = !toRight;

  const ball = (cx, cy, open, key) => (
    <g className={`da-ball${on(key)}`}>
      <path className="da-seat" d={`M${cx - 15} ${cy + 11}h30l-7 7h-16Z`} />
      <motion.circle
        cx={cx}
        cy={open ? cy - 4 : cy + 4}
        r="10"
        initial={{ cy: open ? cy - 4 : cy + 4 }}
        animate={{ cy: open ? cy - 4 : cy + 4 }}
        transition={timing.repeat ? { duration: 3.4, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.6, ease: EASE }}
      />
    </g>
  );

  return (
    <svg viewBox="0 0 400 320" role="img" aria-label="Air-operated double diaphragm pump, cut away">
      {/* manifolds */}
      <g className={`da-manifold${on('manifold-d')}`}>
        <rect x="70" y="18" width="260" height="26" rx="6" />
        <rect x="186" y="0" width="28" height="20" rx="4" />
      </g>
      <g className={`da-manifold${on('manifold-s')}`}>
        <rect x="70" y="276" width="260" height="26" rx="6" />
        <rect x="186" y="300" width="28" height="20" rx="4" />
      </g>

      {/* liquid chambers */}
      <path className="da-chamber" d="M62 96h88v128H62a34 34 0 0 1 0-128Z" />
      <path className="da-chamber" d="M338 96h-88v128h88a34 34 0 0 0 0-128Z" />

      {/* liquid: the chamber being discharged is fuller */}
      <motion.path className="da-liquid" d="M70 104h78v112H70a28 28 0 0 1 0-112Z"
        animate={{ opacity: animate && !reduceMotion ? [0.85, 0.25, 0.85] : (toRight ? 0.85 : 0.3) }}
        transition={timing} />
      <motion.path className="da-liquid" d="M330 104h-78v112h78a28 28 0 0 0 0-112Z"
        animate={{ opacity: animate && !reduceMotion ? [0.25, 0.85, 0.25] : (toRight ? 0.3 : 0.85) }}
        transition={timing} />

      {/* air section */}
      <rect className={`da-air${on('air')}`} x="158" y="96" width="84" height="128" rx="8" />
      <text className="da-air-text" x="200" y="150" textAnchor="middle">AIR</text>
      <text className="da-air-text" x="200" y="166" textAnchor="middle">VALVE</text>

      {/* the moving assembly: two diaphragms joined by the shaft */}
      <motion.g animate={move} transition={timing}>
        <path className={`da-diaphragm${on('diaphragm')}`} d="M150 96c-18 24-18 104 0 128" />
        <path className={`da-diaphragm${on('diaphragm')}`} d="M250 96c18 24 18 104 0 128" />
        <rect className={`da-shaft${on('shaft')}`} x="148" y="154" width="104" height="12" rx="5" />
      </motion.g>

      {/* check valves: discharge pair on top, suction pair below */}
      {ball(106, 64, leftDischargeOpen, 'ball-d')}
      {ball(294, 64, rightDischargeOpen, 'ball-d')}
      {ball(106, 256, !leftDischargeOpen, 'ball-s')}
      {ball(294, 256, !rightDischargeOpen, 'ball-s')}

      {/* the seat hotspot shares the ball group, so give it its own ring */}
      {highlight === 'seat' && (
        <g className="da-seat-ring">
          <path d="M91 267h30l-7 7h-16Z" />
          <path d="M279 267h30l-7 7h-16Z" />
        </g>
      )}

      {/* flow arrows */}
      <g className="da-flow-air">
        <path d="M200 312v-14M194 304l6 6 6-6" transform="translate(0,-304)" />
      </g>
    </svg>
  );
}

function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);

  return (
    <section ref={ref} className="mp-hero da-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{aoddHero.label}</span>
          <h1>
            {aoddHero.title}
            <span>{aoddHero.titleAccent}</span>
            {aoddHero.titleRest}
          </h1>
          <p>{aoddHero.lead}</p>
          <p className="da-hero-sub">{aoddHero.lead2}</p>
          <ul className="da-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#da-components" className="btn btn-primary">Explore AODD components <Arrow /></a>
            <Link to={CONTACT} className="btn mp-btn-ghost">Request technical enquiry</Link>
          </div>
        </motion.div>

        <motion.div
          className="mu-hero-visual"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <img src={product.image} alt={product.name} />
        </motion.div>
      </div>

      <div className="container">
        <motion.ul
          className="mp-stats"
          initial="hidden"
          animate="shown"
          variants={{ shown: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } } }}
        >
          {heroChips.map((c) => (
            <motion.li key={c.title} variants={{ hidden: { opacity: 0, y: 18 }, shown: { opacity: 1, y: 0 } }}>
              <span className="mp-icon"><Icon name={c.icon} size={20} /></span>
              <div><strong>{c.title}</strong><span>{c.text}</span></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/** 02 - the signature: the cut-away with a hotspot on every part. */
function Explorer() {
  const [picked, setPicked] = useState(hotspots[1].key);
  const reduceMotion = useReducedMotion();
  const item = hotspots.find((h) => h.key === picked);

  return (
    <div className="da-explorer">
      <div className="da-explorer-art">
        <PumpDiagram side="left" highlight={picked} reduceMotion={reduceMotion} />
        {hotspots.map((h) => (
          <button
            key={h.key}
            type="button"
            className={`da-dot${h.key === picked ? ' is-on' : ''}${h.mithson ? ' da-dot--ours' : ''}`}
            style={{ left: `${h.at[0]}%`, top: `${h.at[1]}%` }}
            aria-label={h.name}
            aria-pressed={h.key === picked}
            onClick={() => setPicked(h.key)}
          >
            <i aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="da-explorer-copy">
        <ul className="da-explorer-list">
          {hotspots.map((h) => (
            <li key={h.key}>
              <button type="button" aria-current={h.key === picked} onClick={() => setPicked(h.key)}>
                {h.name}
                {h.mithson && <em>Mithson</em>}
              </button>
            </li>
          ))}
        </ul>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            className="da-explorer-panel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <span className={item.mithson ? 'da-badge da-badge--ours' : 'da-badge'}>
              {item.mithson ? 'Supplied by Mithson' : 'Part of the pump body'}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** 03 - the six component families, picked one at a time. */
function Components({ onZoom }) {
  const [active, setActive] = useState(components[0].key);
  const item = components.find((c) => c.key === active);
  const spec = item.spec ? SPECS[item.spec] : null;
  return (
    <>
      <div className="da-picks" role="tablist" aria-label="AODD component families">
        {components.map((c) => (
          <button key={c.key} type="button" role="tab" aria-selected={c.key === active} onClick={() => setActive(c.key)}>
            <b>{c.number}</b>
            <span>{c.short}</span>
            <i>{c.job}</i>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="da-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="da-panel-photos">
            <button type="button" className="da-shot" onClick={() => onZoom({ src: IMAGES[item.photo], alt: item.name })}>
              <img src={IMAGES[item.photo]} alt={item.name} />
              <span>{item.short}</span>
            </button>
            <button type="button" className="da-shot da-shot--small" onClick={() => onZoom({ src: IMAGES[item.detail], alt: `${item.name} detail` })}>
              <img src={IMAGES[item.detail]} alt={`${item.name} detail`} loading="lazy" />
              <span>Detail view</span>
            </button>
          </div>
          <div className="da-panel-body">
            <h3>{item.name}</h3>
            <p className="da-sub">{item.subtitle}</p>
            <p>{item.text}</p>
            {spec && <ItemSpecList spec={spec} />}
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            {item.materials && (
              <div className="da-mat-options">
                <strong>Material constructions</strong>
                <ul>{item.materials.map((m) => <li key={m}>{m}</li>)}</ul>
                <small>{item.materialsNote}</small>
              </div>
            )}
            <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>
            <p className="da-uses"><strong>Applications:</strong> {item.uses}</p>
            <p className="da-asks"><strong>To quote we need:</strong> {item.asks.join(' · ')}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Request a {item.short.toLowerCase()} datasheet <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/** 05 - the two-stroke demonstration. */
function Strokes() {
  const [stage, setStage] = useState(0);
  const [running, setRunning] = useState(false);
  const reduceMotion = useReducedMotion();
  const item = strokeStages[stage];

  return (
    <div className="da-strokes">
      <div className="da-strokes-art">
        <PumpDiagram
          side={running ? 'left' : item.side}
          highlight={running ? null : item.highlight}
          animate={running}
          reduceMotion={reduceMotion}
        />
        <div className="da-strokes-controls">
          <button type="button" onClick={() => setRunning((r) => !r)} aria-pressed={running}>
            {running ? 'Pause pump' : 'Start pump'}
          </button>
          <button type="button" onClick={() => { setRunning(false); setStage(2); }}>Show suction stroke</button>
          <button type="button" onClick={() => { setRunning(false); setStage(3); }}>Show discharge stroke</button>
        </div>
        <p className="da-strokes-key">
          <b /> Mithson components &nbsp;·&nbsp; <i /> liquid &nbsp;·&nbsp; <u /> air section
        </p>
      </div>

      <div className="da-strokes-steps">
        <ol role="tablist" aria-label="Pump cycle stages">
          {strokeStages.map((s, i) => (
            <li key={s.key}>
              <button type="button" role="tab" aria-selected={!running && i === stage} onClick={() => { setRunning(false); setStage(i); }}>
                <b>{String(i + 1).padStart(2, '0')}</b>
                {s.label}
              </button>
            </li>
          ))}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div
            key={running ? 'running' : item.key}
            className="da-strokes-copy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{running ? 'The pump running' : item.name}</h3>
            <p>{running ? 'Both diaphragms move together on the shaft, so one chamber fills while the other empties, and the check balls change over every stroke. Pause to step through what happens.' : item.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Materials() {
  const [open, setOpen] = useState(materials[0].key);
  return (
    <div className="da-materials">
      {materials.map((m, i) => {
        const isOpen = m.key === open;
        return (
          <Reveal key={m.key} delay={i * 0.05} className={`da-material${isOpen ? ' is-open' : ''}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : m.key)}>
              <b>{m.name}</b>
              <span>{m.full}</span>
              <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="da-material-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <p>{m.text}</p>
                    <ul className="mp-checks">
                      {m.points.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
                    </ul>
                    <p className="da-uses"><strong>Used for:</strong> {m.uses}</p>
                    <p className="mu-watch"><Icon name="alert" size={16} /> Watch for: {m.watch}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </div>
  );
}

/** 09 - the chemical enquiry. It never answers "compatible"; it asks for a review. */
function ChemicalCheck() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({});
  const set = (k, v) => setValues((s) => ({ ...s, [k]: v }));
  const ready = Boolean(values.chemical && values.component);

  return (
    <div className="da-chem">
      <form
        className="da-chem-form"
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      >
        {chemFields.map((f) => (
          <label key={f.key} className="da-chem-field">
            <span>{f.label}</span>
            {f.options ? (
              <select value={values[f.key] ?? ''} onChange={(e) => set(f.key, e.target.value)}>
                <option value="">Select a component</option>
                {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input type="text" placeholder={f.placeholder} value={values[f.key] ?? ''} onChange={(e) => set(f.key, e.target.value)} />
            )}
          </label>
        ))}
        <button type="submit" className="btn btn-navy" disabled={!ready}>
          Request material compatibility assistance <Arrow />
        </button>
        {!ready && <p className="da-chem-hint">Enter at least the fluid and the component you need.</p>}
      </form>

      <div className="da-chem-side">
        <h3>What decides compatibility</h3>
        <ul className="mp-checks">
          {chemFactors.map((c) => <li key={c}><span><Icon name="check" size={14} /></span>{c}</li>)}
        </ul>
        <AnimatePresence>
          {sent && (
            <motion.div
              className="da-chem-result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <strong>Sent for engineering review</strong>
              <p>{chemResult}</p>
              <Link to={CONTACT} className="btn btn-white mp-inline-btn">Continue to the enquiry form <Arrow /></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SelectionGuide() {
  const [step, setStep] = useState(0);
  const item = selectionSteps[step];
  return (
    <div className="da-guide">
      <ol className="da-guide-rail">
        {selectionSteps.map((s, i) => (
          <li key={s.title}>
            <button type="button" aria-current={i === step} onClick={() => setStep(i)}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {s.title}
            </button>
          </li>
        ))}
      </ol>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          className="da-guide-panel"
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="da-guide-num">{String(step + 1).padStart(2, '0')} / {selectionSteps.length}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="da-guide-nav">
            <button type="button" onClick={() => setStep((step - 1 + selectionSteps.length) % selectionSteps.length)}>Previous</button>
            <button type="button" onClick={() => setStep((step + 1) % selectionSteps.length)}>Next parameter <Arrow /></button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SpecTables() {
  const [open, setOpen] = useState(specTables[0].key);
  return (
    <div className="da-spectabs">
      <div className="da-spectabs-rail" role="tablist" aria-label="Specification tables">
        {specTables.map((t) => (
          <button key={t.key} type="button" role="tab" aria-selected={t.key === open} onClick={() => setOpen(t.key)}>
            {t.title.replace(' specifications', '')}
          </button>
        ))}
      </div>
      {specTables.filter((t) => t.key === open).map((t) => (
        <motion.div key={t.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <div className="mu-table da-table">
            <div className="mu-table-head"><span>Field</span><span>Value</span></div>
            {t.rows.map(([k, v]) => (
              <div key={k}>
                <span>{k}</span>
                <span className={v === 'Contact Mithson for confirmed specifications' ? 'da-ask' : undefined}>{v}</span>
              </div>
            ))}
          </div>
          <Link to={CONTACT} className="btn btn-navy mp-inline-btn">Request the {t.title.replace(' specifications', '').toLowerCase()} datasheet <Arrow /></Link>
        </motion.div>
      ))}
    </div>
  );
}

function Faqs() {
  const [open, setOpen] = useState(0);
  return (
    <ul className="mp-faqs">
      {faqs.map((f, i) => (
        <li key={f.q} className={open === i ? 'is-open' : ''}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{f.q}</span>
            <i aria-hidden="true">+</i>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                {f.a}
              </motion.p>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}

function Lightbox({ shot, onClose }) {
  useEffect(() => {
    if (!shot) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shot, onClose]);

  return (
    <AnimatePresence>
      {shot && (
        <motion.div
          className="da-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={shot.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.img src={shot.src} alt={shot.alt} initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} transition={{ duration: 0.3, ease: EASE }} />
          <button type="button" onClick={onClose} aria-label="Close">×</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function DiaphragmAODDPage() {
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = 'AODD Pump Components, PTFE Diaphragms & Valve Seats | Mithson';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page da-page">
      <Hero />

      {/* 01 Understanding the technology */}
      <section className="section mp-section" id="da-technology">
        <div className="container mp-split">
          <div>
            <Head number="01" label="AODD technology" title="Understanding air-operated double diaphragm pumps" intro={techIntro} />
            <div className="da-cycle">
              {techCycle.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.07} className="mp-card da-cycle-card">
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </Reveal>
              ))}
            </div>
            <p className="mu-watch"><Icon name="alert" size={16} /> {techNote}</p>
          </div>
          <Reveal className="mu-figure da-figure">
            <button type="button" className="da-shot" onClick={() => setShot({ src: refPumps, alt: 'AODD pumps installed on a process line' })}>
              <img src={refPumps} alt="AODD pumps installed on a process line" loading="lazy" />
            </button>
            <figcaption>AODD pumps on a process line. Mithson supplies the wearing parts inside them.</figcaption>
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="da-advantages">
            <h3>Why the technology is used</h3>
            <ul className="mp-checks">
              {techAdvantages.map((a) => <li key={a}><span><Icon name="check" size={14} /></span>{a}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 02 Component explorer */}
      <section className="section mp-section mp-tint" id="da-explorer">
        <div className="container">
          <Head number="02" label="Inside the pump" title="Every part, and which ones we make"
            intro="Select a part of the pump to see what it does and whether it is one of Mithson's components or part of the pump body." />
          <Explorer />
        </div>
      </section>

      {/* 03 The components */}
      <section className="mp-dark" id="da-components">
        <div className="container">
          <Head number="03" label="The range" title="Six component families" light
            intro="Diaphragms, pilot shafts, PTFE check balls, PTFE valve seats, PTFE O-rings, and how they work together. Pick one to see it in full." />
          <Components onZoom={setShot} />
        </div>
      </section>

      {/* 04 Additional components */}
      <section className="section mp-section" id="da-extras">
        <div className="container">
          <Head number="04" label="Additional components" title="Other parts found in AODD pump assemblies" intro={extrasNote} />
          <div className="da-extras">
            {extras.map((e, i) => (
              <Reveal key={e.key} delay={(i % 3) * 0.07} className="mp-card">
                <span className="mp-icon"><Icon name="layers" size={20} /></span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 How it works */}
      <section className="section mp-section mp-tint" id="da-working">
        <div className="container">
          <Head number="05" label="Working principle" title="How an AODD pump works" intro={strokeIntro} />
          <Strokes />
        </div>
      </section>

      {/* 06 Materials */}
      <section className="section mp-section" id="da-materials">
        <div className="container">
          <Head number="06" label="Material technology" title="Fluoropolymer and elastomer materials" intro={materialsNote} />
          <Materials />
          <Reveal className="da-compare">
            <h3 className="mp-subhead">At a glance</h3>
            <div className="mu-table">
              <div className="mu-table-head mu-table-head--3"><span>Material</span><span>Main characteristics</span><span>Selection considerations</span></div>
              {materialsCompare.map(([m, c, s]) => (
                <div key={m} className="da-row3"><span>{m}</span><span>{c}</span><span>{s}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 Applications */}
      <section className="mp-dark" id="da-applications">
        <div className="container">
          <Head number="07" label="Applications" title="Where AODD components work" light intro={applicationsNote} />
          <div className="da-apps">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.06} className="da-app">
                <span className="mp-icon"><Icon name={a.icon} size={20} /></span>
                <h3>{a.title}</h3>
                <ul>{a.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <p><strong>Needs:</strong> {a.need}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Technical specifications */}
      <section className="section mp-section" id="da-specs">
        <div className="container">
          <Head number="08" label="Technical specifications" title="What we confirm for every component"
            intro="AODD component performance depends on the pump design, material grade, operating conditions and fluid, so most of this is confirmed per order rather than published as one figure." />
          <SpecTables />
          <Reveal className="da-params">
            <h3 className="mp-subhead">Parameters, and where each one comes from</h3>
            <div className="mu-table">
              <div className="mu-table-head"><span>Parameter</span><span>Determined by</span></div>
              {specParameters.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}
            </div>
          </Reveal>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>No borrowed ratings.</strong> {specNote}</Reveal>
        </div>
      </section>

      {/* 09 Chemical compatibility */}
      <section className="section mp-section mp-tint" id="da-chemical">
        <div className="container">
          <Head number="09" label="Chemical compatibility" title="Selecting the right material for your fluid" intro={chemIntro} />
          <ChemicalCheck />
        </div>
      </section>

      {/* 10 Selection guide */}
      <section className="section mp-section" id="da-selection">
        <div className="container">
          <Head number="10" label="Selection guide" title="How to select the right AODD components"
            intro="Nine things decide the component. Step through them and you have everything our engineers need." />
          <SelectionGuide />
        </div>
      </section>

      {/* 11 Installation and maintenance */}
      <section className="section mp-section mp-tint" id="da-maintenance">
        <div className="container">
          <Head number="11" label="Installation & maintenance" title="Inspecting AODD components" />
          <div className="mp-grid mp-grid--3">
            {maintenance.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 0.07} className="mp-card">
                <span className="mp-icon"><Icon name={m.icon} size={20} /></span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Safety.</strong> {maintenanceSafety}</Reveal>
        </div>
      </section>

      {/* 12 Troubleshooting */}
      <section className="section mp-section" id="da-troubleshooting">
        <div className="container">
          <Head number="12" label="Troubleshooting" title="Component failure analysis" intro={troubleshootingNote} />
          <div className="da-trouble">
            {troubleshooting.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.06} className="da-trouble-card">
                <h3>{t.title}</h3>
                <ul>{t.causes.map((c) => <li key={c}>{c}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13 Custom components */}
      <section className="section mp-section mp-tint" id="da-custom">
        <div className="container">
          <Head number="13" label="Custom engineering" title="From your pump drawing to a finished component"
            intro="Different AODD pump manufacturers use different geometries, mounting arrangements and material configurations, so every enquiry starts from the original part." />
          <ol className="da-stages">
            {customStages.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.07}>
                <b>{String(i + 1).padStart(2, '0')}</b>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Upload your technical drawing <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* 14 Documentation */}
      <section className="section mp-section" id="da-documents">
        <div className="container">
          <Head number="14" label="Technical documentation" title="Documents available on request" intro={documentsNote} />
          <div className="da-docs">
            {documents.map((d, i) => (
              <Reveal key={d} delay={(i % 4) * 0.06} className="da-doc">
                <span className="mp-icon"><Icon name="doc" size={20} /></span>
                <strong>{d}</strong>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link to={CONTACT} className="btn btn-navy mp-inline-btn">Request technical documentation <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* 15 FAQ */}
      <section className="section mp-section mp-tint" id="da-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="15" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Mithson engineers confirm the right component for each pump." />
          <Faqs />
        </div>
      </section>

      <RelatedProducts product={product} products={allProducts} />

      {/* 16 CTA */}
      <section className="mp-cta" id="da-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">16 — Engineering review</span>
            <h2>{closing[0]}</h2>
            <p>{closing[1]}</p>
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={CONTACT} className="btn btn-white">Get in touch <Arrow /></Link>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Request technical consultation <Arrow /></Link>
          </div>
        </div>
      </section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </div>
  );
}

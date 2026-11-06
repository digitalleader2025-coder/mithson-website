import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import usePageMeta from '../../../shared/hooks/usePageMeta';
import CircularCarousel from '../../../shared/components/CircularCarousel';
import { companyCertificates, materialRecords } from '../../../content/hsse';
import {
  applicationFactors,
  documents,
  emissionScopes,
  environment,
  hsseFacts,
  hsseIntro,
  improvementActivities,
  improvementLoop,
  isoText,
  lifecycleSteps,
  qimaText,
  qualityApproach,
  safety,
  standards,
  standardsNote,
} from '../../../content/hssePage';
import { siteImages } from '../../../content/siteImages';
import imgProducts from '../../../assets/about/hero-products.webp';
import imgBuilding from '../../../assets/about/mithson-building.webp';
import imgOffshore from '../../../assets/industries/Oil & Gas.webp';
import imgIso from '../../../assets/certificates/ISO.png';
import imgQima from '../../../assets/certificates/QIMA.png';
import './HSSEQuality.css';

const REQUEST_DOCS = '/connect-with-us?subject=Quality%20documents';
const SEND_APPLICATION = '/connect-with-us/application-data';

// Optional photos: drop a file with this name into src/assets/site-images and it appears here
const heroPhoto = siteImages['hsse-hero'] ?? imgProducts;
const environmentPhoto = siteImages['hsse-environment'];
const safetyPhoto = siteImages['hsse-safety'];

const certImages = [...companyCertificates, ...materialRecords].map(({ name, scope, image }, index) => ({
  id: index + 1,
  url: image,
  alt: `${name}: ${scope}`,
}));

const EASE = [0.22, 1, 0.36, 1];

// Line icons on a 24px grid
const ICONS = {
  search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5" /></>,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 9 8-4.5M12 12v9M12 12 4 7.5" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  clipboard: <><path d="M9 4h6v3H9zM7 5H5v16h14V5h-2" /><path d="m9 14 2 2 4-4" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  wave: <path d="M3 8c3-3 6 3 9 0s6 3 9 0M3 13c3-3 6 3 9 0s6 3 9 0M3 18c3-3 6 3 9 0s6 3 9 0" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  truck: <><path d="M2 16V7h11v9M13 10h4l4 4v2h-8" /><circle cx="6" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></>,
  recycle: <path d="M7 19H4l3-5M17 19h3l-3-5M9 5l3-2 3 2M12 3v6M7 14l-2-3 5-8M17 14l2-3-5-8M7 19h10" />,
  leaf: <path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16Zm0 0c3-4 6-7 10-9" />,
  cloud: <path d="M7 18a4 4 0 1 1 .5-8A6 6 0 0 1 19 11a3.5 3.5 0 0 1-1 7H7Z" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  helmet: <path d="M3 17h18M5 17v-3a7 7 0 0 1 14 0v3M10 7V5h4v2M12 7v5" />,
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 2 6 5.5" /></>,
  siren: <path d="M7 18v-6a5 5 0 0 1 10 0v6M5 18h14v3H5zM12 2v2M4 6l1.5 1.5M20 6l-1.5 1.5" />,
  thermo: <><path d="M10 4a2 2 0 0 1 4 0v10a4 4 0 1 1-4 0V4Z" /><path d="M12 9v7" /></>,
  gauge: <><path d="M4 18a9 9 0 1 1 16 0" /><path d="m12 13 4-4" /></>,
  arrows: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  tools: <path d="m14.7 6.3 3-3a4 4 0 0 1-5.4 5.4L6 15l-2 1-1 2 1 1 2-1 1-2 6.3-6.3M15 15l5 5" />,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></>,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  certificate: <><rect x="3" y="4" width="18" height="12" rx="2" /><circle cx="12" cy="17" r="3" /><path d="M10 19.5V22l2-1 2 1v-2.5M7 8h10" /></>,
  book: <path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2V5Zm0 14a2 2 0 0 1 2-2h14" />,
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="m5 12 5 5 9-10" />,
};

function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const Arrow = ({ back }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={back ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'} />
  </svg>
);

/** Fades and lifts its content in once, when it scrolls into view. */
function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Head({ label, title, intro, light }) {
  return (
    <Reveal className={`hsse-head${light ? ' hsse-head--light' : ''}`}>
      <span className="hsse-label">{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

/** Small "phone" check, so some sections can switch to a simpler layout. */
function useMatch(query) {
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatch(list.matches);
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, [query]);
  return match;
}

/** Steps through items on its own until the visitor picks one; pauses while hovered or off screen. */
function useAutoStep(count, ref, delay = 4500) {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [picked, setPicked] = useState(false);
  const inView = useInView(ref, { margin: '-120px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (picked || held || !inView || reduceMotion) return undefined;
    const timer = setTimeout(() => setActive((a) => (a + 1) % count), delay);
    return () => clearTimeout(timer);
  }, [active, count, delay, held, inView, picked, reduceMotion]);

  const pick = (index) => { setPicked(true); setActive(index); };
  const hold = { onMouseEnter: () => setHeld(true), onMouseLeave: () => setHeld(false) };
  return { active, pick, hold, running: !picked && !held && inView && !reduceMotion };
}

/* ---------- 01 Hero ---------- */
function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '20%']);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70]);

  return (
    <section ref={ref} className="hsse-hero" id="hsse-top">
      <motion.div className="hsse-hero-bg" style={{ y: bgY, backgroundImage: `url("${imgOffshore}")` }} aria-hidden="true" />
      <div className="container hsse-hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="hsse-label hsse-label--dark">HSSE & Quality</span>
          <h1>Quality, Safety and Environmental Responsibility <span>in Every Component</span></h1>
          <p>{hsseIntro[0]}</p>
          <div className="hsse-actions">
            <Link to={REQUEST_DOCS} className="btn btn-primary">Request Quality Documents <Arrow /></Link>
            <Link to={SEND_APPLICATION} className="btn hsse-btn-ghost">Send Your Application Details</Link>
          </div>
        </motion.div>
        <motion.div
          className="hsse-hero-visual"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <span className="hsse-hero-glow" aria-hidden="true" />
          <img src={heroPhoto} alt="Polymer seals and components" />
          <span className="hsse-caption">Illustrative image</span>
        </motion.div>
      </div>
      <div className="container">
        <motion.ul
          className="hsse-facts"
          initial="hidden"
          animate="shown"
          variants={{ shown: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
        >
          {hsseFacts.map((fact) => (
            <motion.li key={fact.title} variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0 } }}>
              <span className="hsse-fact-icon"><Icon name={fact.icon} /></span>
              <div><strong>{fact.title}</strong><span>{fact.text}</span></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ---------- 02 Approach wheel ---------- */
function ApproachWheel() {
  const ref = useRef(null);
  const { active, pick, hold, running } = useAutoStep(qualityApproach.length, ref);
  const item = qualityApproach[active];

  return (
    <div ref={ref} className="hsse-wheel-wrap" {...hold}>
      <div className="hsse-wheel" role="tablist" aria-label="Our approach to quality">
        <svg className="hsse-wheel-ring" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="78" />
          <motion.circle
            key={active}
            cx="100"
            cy="100"
            r="78"
            className="hsse-wheel-progress"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: running ? 1 : 0 }}
            transition={{ duration: running ? 4.5 : 0, ease: 'linear' }}
          />
        </svg>
        <div className="hsse-wheel-hub" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.title}
              className="hsse-wheel-hub-inner"
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <Icon name={item.icon} size={54} />
              <strong>{String(active + 1).padStart(2, '0')}</strong>
            </motion.div>
          </AnimatePresence>
        </div>
        {qualityApproach.map((step, index) => {
          const angle = (index / qualityApproach.length) * 2 * Math.PI - Math.PI / 2;
          return (
            <button
              key={step.title}
              type="button"
              role="tab"
              aria-selected={index === active}
              className="hsse-wheel-node"
              style={{ '--x': `${50 + 42 * Math.cos(angle)}%`, '--y': `${50 + 42 * Math.sin(angle)}%` }}
              onClick={() => pick(index)}
            >
              <span><Icon name={step.icon} /></span>
              <em>{step.title}</em>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          className="hsse-wheel-card"
          role="tabpanel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          <span className="hsse-count">{String(active + 1).padStart(2, '0')} / {String(qualityApproach.length).padStart(2, '0')}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------- 03 Certifications ---------- */
function Standards() {
  const [open, setOpen] = useState(null);
  return (
    <div className="hsse-standards">
      {standards.map((s, index) => (
        <Reveal key={s.title} delay={index * 0.08} className={`hsse-standard${open === index ? ' is-open' : ''}`}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
            <span className="hsse-fact-icon"><Icon name={s.icon} /></span>
            <strong>{s.title}</strong>
            <span className="hsse-plus" aria-hidden="true"><Icon name="plus" size={18} /></span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                {s.text}
              </motion.p>
            )}
          </AnimatePresence>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- 04 Lifecycle ---------- */
function Lifecycle() {
  const ref = useRef(null);
  const { active, pick, hold, running } = useAutoStep(lifecycleSteps.length, ref, 6000);
  const step = lifecycleSteps[active];
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="hsse-life" {...hold}>
      <div className="hsse-life-track" role="tablist" aria-label="Quality through the product lifecycle">
        <svg className="hsse-life-wave" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path className="hsse-life-wave-bg" d="M0 60 C100 10 200 10 300 60 S500 110 600 60 S800 10 900 60 S1100 110 1200 60" />
          <motion.path
            d="M0 60 C100 10 200 10 300 60 S500 110 600 60 S800 10 900 60 S1100 110 1200 60"
            initial={{ pathLength: reduceMotion ? 1 : 0 }}
            animate={inView ? { pathLength: (active + 1) / lifecycleSteps.length } : undefined}
            transition={{ duration: 0.8, ease: EASE }}
          />
        </svg>
        {lifecycleSteps.map((s, index) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`hsse-life-node${index < active ? ' is-done' : ''}`}
            onClick={() => pick(index)}
          >
            <span className="hsse-life-num">{String(index + 1).padStart(2, '0')}</span>
            <em>{s.title}</em>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step.title}
          className="hsse-life-card"
          role="tabpanel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div>
            <span className="hsse-count">Step {String(active + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="hsse-life-nav">
              <button type="button" className="hsse-arrow" aria-label="Previous step" disabled={active === 0} onClick={() => pick(active - 1)}><Arrow back /></button>
              <button type="button" className="hsse-arrow" aria-label="Next step" disabled={active === lifecycleSteps.length - 1} onClick={() => pick(active + 1)}><Arrow /></button>
              {running && <span className="hsse-life-timer" aria-hidden="true"><motion.span key={active} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 6, ease: 'linear' }} /></span>}
            </div>
          </div>
          {step.list && (
            <div className="hsse-life-list">
              <strong>{step.listTitle}</strong>
              <motion.ul initial="hidden" animate="shown" variants={{ shown: { transition: { staggerChildren: 0.06 } } }}>
                {step.list.map((line) => (
                  <motion.li key={line} variants={{ hidden: { opacity: 0, x: 12 }, shown: { opacity: 1, x: 0 } }}>
                    <span><Icon name="check" size={14} /></span>{line}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------- 05 Environment and safety ---------- */
function Accordion({ items, tone }) {
  const [open, setOpen] = useState(0);
  return (
    <ul className={`hsse-acc hsse-acc--${tone}`}>
      {items.map((item, index) => (
        <li key={item.title} className={open === index ? 'is-open' : ''}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
            <span className="hsse-acc-icon"><Icon name={item.icon} size={20} /></span>
            <strong>{item.title}</strong>
            <span className="hsse-plus" aria-hidden="true"><Icon name="plus" size={16} /></span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                {item.text}
              </motion.p>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}

function Scopes() {
  const [tab, setTab] = useState(0);
  return (
    <div className="hsse-scopes">
      <div className="hsse-scopes-head">
        <span className="hsse-acc-icon"><Icon name="cloud" size={20} /></span>
        <div>
          <strong>Scope 1, Scope 2 and Scope 3 Emissions</strong>
          <p>Mithson&apos;s published sustainability information refers to reducing its carbon footprint across Scope 1, 2 and 3 emissions.</p>
        </div>
      </div>
      <div className="hsse-tabs" role="tablist" aria-label="Emission scopes">
        {emissionScopes.map((s, index) => (
          <button key={s.title} type="button" role="tab" aria-selected={tab === index} onClick={() => setTab(index)}>{s.title}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={tab} role="tabpanel" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          {emissionScopes[tab].text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

/* ---------- 06 Application factors ---------- */
function Factors() {
  const ref = useRef(null);
  const { active, pick, hold } = useAutoStep(applicationFactors.length, ref, 4000);
  const phone = useMatch('(max-width: 900px)');
  const factor = applicationFactors[active];
  const left = applicationFactors.slice(0, 3);
  const right = applicationFactors.slice(3);

  const button = (f, index) => (
    <button key={f.title} type="button" role="tab" aria-selected={index === active} className="hsse-factor" onClick={() => pick(index)}>
      <span className="hsse-acc-icon"><Icon name={f.icon} size={20} /></span>
      <strong>{f.title}</strong>
    </button>
  );

  return (
    <div ref={ref} className="hsse-factors" {...hold}>
      {!phone && <div className="hsse-factor-col" role="tablist" aria-label="Application factors">{left.map((f, i) => button(f, i))}</div>}
      <div className="hsse-factor-centre">
        <div className="hsse-factor-visual">
          <span className="hsse-factor-pulse" aria-hidden="true" />
          <img src={imgProducts} alt="" loading="lazy" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={factor.title} className="hsse-factor-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <h3><Icon name={factor.icon} size={20} /> {factor.title}</h3>
            <p>{factor.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      {phone
        ? <div className="hsse-factor-grid" role="tablist" aria-label="Application factors">{applicationFactors.map((f, i) => button(f, i))}</div>
        : <div className="hsse-factor-col" role="tablist" aria-label="Application factors">{right.map((f, i) => button(f, i + 3))}</div>}
    </div>
  );
}

/* ---------- 07 Continual improvement loop ---------- */
const LOOP_PATH = 'M200 100 C 260 20, 360 20, 360 100 C 360 180, 260 180, 200 100 C 140 20, 40 20, 40 100 C 40 180, 140 180, 200 100 Z';

function ImprovementLoop() {
  const reduceMotion = useReducedMotion();
  // Labels sit on the four outer points of the loop
  const spots = [{ x: 40, y: 100 }, { x: 200, y: 32 }, { x: 360, y: 100 }, { x: 200, y: 176 }];
  return (
    <div className="hsse-loop">
      <svg viewBox="0 0 400 200" role="img" aria-label="Review, analyze, improve and implement, in a continuous loop">
        <defs>
          <linearGradient id="hsse-loop-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#42a4ff" />
            <stop offset="1" stopColor="#0a6cff" />
          </linearGradient>
        </defs>
        <path d={LOOP_PATH} className="hsse-loop-glow" />
        <path d={LOOP_PATH} className="hsse-loop-line" />
        {!reduceMotion && (
          <circle r="7" className="hsse-loop-dot">
            <animateMotion dur="7s" repeatCount="indefinite" path={LOOP_PATH} />
          </circle>
        )}
      </svg>
      {improvementLoop.map((label, index) => (
        <span key={label} className={`hsse-loop-label hsse-loop-label--${index}`} style={{ left: `${(spots[index].x / 400) * 100}%`, top: `${(spots[index].y / 200) * 100}%` }}>
          {label}
        </span>
      ))}
    </div>
  );
}

/* ---------- Side navigation ---------- */
const SECTIONS = [
  ['hsse-top', 'Overview'],
  ['hsse-approach', 'Our Approach'],
  ['hsse-certifications', 'Certifications'],
  ['hsse-lifecycle', 'Lifecycle'],
  ['hsse-responsibility', 'Environment & Safety'],
  ['hsse-application', 'Product Safety'],
  ['hsse-improvement', 'Improvement'],
  ['hsse-documents', 'Documents'],
];

function SideNav() {
  const [current, setCurrent] = useState(SECTIONS[0][0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.lenis) { window.lenis.resize(); window.lenis.scrollTo(el, { offset: -90, force: true }); } else el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="hsse-sidenav" aria-label="Page sections">
      {SECTIONS.map(([id, label]) => (
        <button key={id} type="button" className={current === id ? 'is-active' : ''} aria-current={current === id ? 'true' : undefined} onClick={() => go(id)}>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default function HSSEQualityPage() {
  usePageMeta('HSSE & Quality', 'How Mithson Sealing Solutions approaches quality, ISO 9001:2015 certification, material references, environmental responsibility and safe operations.');

  return (
    <div className="page-wrapper hsse-page">
      <SideNav />
      <Hero />

      {/* Group background */}
      <section className="hsse-intro">
        <div className="container hsse-intro-grid">
          {hsseIntro.slice(1).map((p, i) => <Reveal key={p} as="p" delay={i * 0.1}>{p}</Reveal>)}
        </div>
      </section>

      {/* 1. Approach */}
      <section className="section hsse-section" id="hsse-approach">
        <div className="container hsse-approach">
          <div>
            <Head label="Our Approach to Quality" title="A Structured Approach to Reliable Sealing Solutions" />
            <Reveal as="p" className="hsse-text">
              Quality begins before manufacturing and continues beyond product delivery. Every sealing application has its own
              operating conditions, material requirements and dimensional considerations. Understanding these requirements is
              essential to developing a suitable sealing solution.
            </Reveal>
            <Reveal as="p" className="hsse-text hsse-text--strong">Our quality approach is built around five important areas. Select one to read more.</Reveal>
            <Reveal className="hsse-building">
              <img src={imgBuilding} alt="Mithson Sealing Solutions building" loading="lazy" />
              <span className="hsse-caption">Illustrative image</span>
            </Reveal>
          </div>
          <ApproachWheel />
        </div>
      </section>

      {/* 2. Certifications */}
      <section className="section hsse-dark" id="hsse-certifications">
        <div className="container">
          <Head
            light
            label="Quality Management & Certifications"
            title="A Structured Commitment to Consistent Quality"
            intro="Mithson Sealing Solutions identifies quality as a core part of its manufacturing and product development approach. Our quality management focus covers the journey from material selection and prototype development to production and post-delivery support."
          />
          <div className="hsse-certs">
            <Reveal className="hsse-cert">
              <motion.img src={imgIso} alt="ISO 9001:2015 certified" whileHover={{ rotate: -6, scale: 1.05 }} />
              <div>
                <h3>ISO 9001:2015</h3>
                {isoText.map((p) => <p key={p}>{p}</p>)}
                <Link to={REQUEST_DOCS} className="hsse-link">Request the certificate <Arrow /></Link>
              </div>
            </Reveal>
            <Reveal className="hsse-cert" delay={0.1}>
              <motion.img src={imgQima} alt="QIMA audited" whileHover={{ rotate: 6, scale: 1.05 }} />
              <div>
                <h3>QIMA Audited</h3>
                <p>{qimaText}</p>
                <p className="hsse-muted">Audit scope and date are available on request.</p>
                <Link to={REQUEST_DOCS} className="hsse-link">Request audit details <Arrow /></Link>
              </div>
            </Reveal>
          </div>

          <Reveal as="h3" className="hsse-subhead">Industry Standards and Material-Related References</Reveal>
          <Reveal as="p" className="hsse-sublead">
            Mithson&apos;s official quality information references API 6A, NORSOK and BAM in connection with industry-recognised
            materials. Their applicability depends on the specific material grade, product design, test method and customer specification.
          </Reveal>
          <Standards />
          <Reveal as="p" className="hsse-important"><strong>Important:</strong> {standardsNote}</Reveal>

          <Reveal as="h3" className="hsse-subhead">Certificates and material test records</Reveal>
          <Reveal as="p" className="hsse-sublead">ISO 9001:2015 and QIMA apply to Mithson. The other records cover the named materials and compounds.</Reveal>
          <div className="hsse-carousel">
            <CircularCarousel items={certImages} cardWidth={200} aspectRatio={1.45} speed={14} tilt={-5} perspective={2500} direction="left" gap={25} />
          </div>
        </div>
      </section>

      {/* 3. Lifecycle */}
      <section className="section hsse-section hsse-tint" id="hsse-lifecycle">
        <div className="container">
          <Head
            label="Quality Through the Product Lifecycle"
            title="From Material Selection to Post-Delivery Support"
            intro="A sealing component must be suitable for its intended application, not simply manufactured to a particular shape. Material behaviour, dimensions, operating conditions and installation requirements all influence performance."
          />
          <Lifecycle />
        </div>
      </section>

      {/* 4 + 5. Environment and safety */}
      <section className="section hsse-section" id="hsse-responsibility">
        <div className="container hsse-duo">
          <Reveal className="hsse-panel hsse-panel--green">
            {environmentPhoto && <img className="hsse-panel-photo" src={environmentPhoto} alt="" loading="lazy" />}
            <span className="hsse-label">Environmental Responsibility</span>
            <h2>Responsible Practices for a More Sustainable Future</h2>
            <p className="hsse-text">
              Responsible manufacturing includes considering how energy, materials, transport and production resources are used.
              These initiatives form part of the company&apos;s stated focus on reducing its environmental footprint.
            </p>
            <Accordion items={environment} tone="green" />
            <Scopes />
            <Link to="/who-we-are/sustainability" className="hsse-link">More on sustainability <Arrow /></Link>
          </Reveal>
          <Reveal className="hsse-panel hsse-panel--blue" delay={0.1}>
            {safetyPhoto && <img className="hsse-panel-photo" src={safetyPhoto} alt="" loading="lazy" />}
            <span className="hsse-label">Health, Safety & Workplace Responsibility</span>
            <h2>Building Awareness Around Safe Operations</h2>
            <p className="hsse-text">
              Health and safety are important considerations in industrial manufacturing environments. Responsible operations
              require attention to workplace conditions, equipment, employee awareness and the risks associated with production activities.
            </p>
            <Accordion items={safety} tone="blue" />
          </Reveal>
        </div>
      </section>

      {/* 6. Product safety */}
      <section className="section hsse-section hsse-tint" id="hsse-application">
        <div className="container">
          <Head
            label="Product Safety & Application Suitability"
            title="The Right Material and Design for the Right Application"
            intro="A sealing component's performance depends on more than its material name or physical dimensions. The correct solution must be evaluated against the operating environment and the equipment in which it will be installed."
          />
          <Factors />
          <Reveal as="p" className="hsse-important hsse-important--light">
            <strong>Remember:</strong> a sealing component should not be selected solely on the basis of material type. Its suitability
            must be evaluated against the complete application.
          </Reveal>
        </div>
      </section>

      {/* 7. Continual improvement */}
      <section className="section hsse-section" id="hsse-improvement">
        <div className="container hsse-improve">
          <div>
            <Head
              label="Continual Improvement"
              title="Learning, Reviewing and Improving"
              intro="Quality management is an ongoing process. Customer feedback, inspection findings, production observations and changes in application requirements can all provide opportunities to improve products and processes."
            />
            <ul className="hsse-checks">
              {improvementActivities.map((a, i) => (
                <Reveal as="li" key={a} delay={i * 0.06}><span><Icon name="check" size={14} /></span>{a}</Reveal>
              ))}
            </ul>
            <Reveal as="p" className="hsse-text">These activities support the objective of delivering products that consistently meet agreed customer requirements.</Reveal>
          </div>
          <Reveal><ImprovementLoop /></Reveal>
        </div>
      </section>

      {/* 8. Documentation */}
      <section className="section hsse-section hsse-tint" id="hsse-documents">
        <div className="container">
          <Head
            label="Technical Documentation & Customer Support"
            title="Information That Supports Better Engineering Decisions"
            intro="Accurate technical information helps customers evaluate components, plan installation and maintain equipment. Depending on the product and order requirements, customers may request:"
          />
          <div className="hsse-docs">
            {documents.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <Link to={`/connect-with-us?subject=${encodeURIComponent(d.title)}`} className="hsse-doc">
                  <span className="hsse-doc-icon"><Icon name={d.icon} size={26} /></span>
                  <strong>{d.title}</strong>
                  <span className="hsse-doc-text">{d.text}</span>
                  <span className="hsse-doc-go">Request <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="hsse-muted hsse-docs-note">
            The availability of each document depends on the product, material, manufacturing record and agreed customer requirements.
          </Reveal>
        </div>
      </section>

      {/* 9. Commitment */}
      <section className="hsse-commit">
        <div className="hsse-commit-bg" style={{ backgroundImage: `url("${imgOffshore}")` }} aria-hidden="true" />
        <div className="container hsse-commit-grid">
          <div>
            <span className="hsse-label hsse-label--dark">Our Commitment</span>
            <h2>
              {['Quality in every process.', 'Responsibility in every operation.', 'Confidence in every solution.'].map((line, i) => (
                <Reveal as="span" key={line} delay={i * 0.15}>{line}</Reveal>
              ))}
            </h2>
          </div>
          <div>
            <Reveal as="p">
              At Mithson Sealing Solutions, we recognise that reliable sealing performance depends on the right combination of material
              knowledge, engineering, manufacturing control and customer understanding. Through our focus on quality management, product
              development, environmental responsibility and safe working practices, we aim to support customers across demanding industrial applications.
            </Reveal>
            <Reveal as="p" delay={0.1} className="hsse-commit-ask">
              <strong>Need technical or quality information?</strong> Contact our team to discuss your application requirements,
              product specifications or available quality documentation.
            </Reveal>
            <Reveal className="hsse-actions" delay={0.2}>
              <Link to={REQUEST_DOCS} className="btn btn-primary">Request Quality Documents <Arrow /></Link>
              <Link to={SEND_APPLICATION} className="btn hsse-btn-ghost">Send Your Application Details</Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { ItemSpecList } from '../../../shared/components/ProductSpecList';
import { products as allProducts, getProductBySlug } from '../../../content/products';
import { productItems } from '../../../content/productItems';
import {
  applications,
  applicationsNote,
  basicsIntro,
  basicsNote,
  basicsParts,
  closing,
  customStages,
  documents,
  documentsNote,
  extras,
  extrasNote,
  families,
  faqs,
  generalSpecs,
  heroChips,
  heroTags,
  kitIntro,
  kitNote,
  kitPoints,
  maintenance,
  materials,
  materialsNote,
  selectionSteps,
  shHero,
  specsNote,
  troubleshooting,
  troubleshootingNote,
  workingIntro,
  workingStages,
} from '../../../content/sealsHydraulic';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './SealsHydraulic.css';

// existing product photographs - kept exactly as they are
import imgWear from './assets/Wear Rings.png';
import imgPiston from './assets/Piston Seals.png';
import imgWiper from './assets/Wiper Seals.png';
import imgRod from './assets/Rod Seals.png';
import imgKit from './assets/Hydraulic Seal Kit.png';
// supporting photographs added for the new sections
import refPiston from './assets/ref/piston-detail.webp';
import refRod from './assets/ref/rod-detail.webp';
import refWiper from './assets/ref/wiper-detail.webp';
import refWear from './assets/ref/wear-detail.webp';
import refOrings from './assets/ref/orings.webp';
import refKitBench from './assets/ref/seal-kit-bench.webp';
import refPu from './assets/ref/material-pu.webp';
import refNbr from './assets/ref/material-nbr.webp';
import refRange from './assets/ref/range.webp';

const IMAGES = {
  piston: imgPiston,
  rod: imgRod,
  wiper: imgWiper,
  wear: imgWear,
  kit: imgKit,
  'piston-detail': refPiston,
  'rod-detail': refRod,
  'wiper-detail': refWiper,
  'wear-detail': refWear,
  orings: refOrings,
  'seal-kit-bench': refKitBench,
  'material-pu': refPu,
  'material-nbr': refNbr,
  range: refRange,
};

const product = getProductBySlug('seals-hydraulic');
const SPECS = productItems['seals-hydraulic'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  move: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  kit: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M12 11v5M9.5 13.5h5" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  gauge: <><path d="M12 21a9 9 0 1 0-9-9" /><path d="M3 12h3M12 3v3M19.5 6.5 17 9M12 12l5-3" /></>,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 13h6M9 17h4" /></>,
  digger: <><path d="M3 20h18M5 20v-4h6v4" /><path d="m11 16 2-7 6 3" /><circle cx="7" cy="20" r="1.4" /></>,
  mine: <><path d="M3 20h18" /><path d="m6 20 6-12 6 12" /><path d="M9 14h6" /></>,
  leaf: <><path d="M20 4c0 9-5 13-12 14 0-7 4-12 12-14Z" /><path d="M4 20c3-5 7-8 12-10" /></>,
  press: <><rect x="4" y="3" width="16" height="4" rx="1" /><path d="M12 7v6M7 13h10v3H7z" /><path d="M4 21h16" /></>,
  forklift: <><path d="M3 17V6h7v11" /><path d="M10 10h4l3 4v3h-7" /><circle cx="6.5" cy="19" r="1.6" /><circle cx="15" cy="19" r="1.6" /><path d="M19 5v12" /></>,
  truck: <><rect x="2" y="7" width="12" height="9" rx="1" /><path d="M14 10h4l3 3v3h-7" /><circle cx="6" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>,
  wave: <path d="M2 8c3-3 5 3 8 0s5 3 8 0M2 14c3-3 5 3 8 0s5 3 8 0M2 20c3-3 5 3 8 0s5 3 8 0" />,
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

function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);

  return (
    <section ref={ref} className="mp-hero sh-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{shHero.label}</span>
          <h1>
            {shHero.title}
            <span>{shHero.titleAccent}</span>
            {shHero.titleRest}
          </h1>
          <p>{shHero.lead}</p>
          <p className="sh-hero-sub">{shHero.lead2}</p>
          <ul className="sh-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#sh-products" className="btn btn-primary">Explore the range <Arrow /></a>
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

/**
 * 03 - the four families, picked one at a time. The existing product photograph
 * stays on the left; the close-up supporting photograph sits beside it.
 */
function Families({ onZoom }) {
  const [active, setActive] = useState(families[0].key);
  const item = families.find((f) => f.key === active);
  const spec = SPECS[item.spec];
  return (
    <>
      <div className="sh-picks" role="tablist" aria-label="Hydraulic seal families">
        {families.map((f) => (
          <button key={f.key} type="button" role="tab" aria-selected={f.key === active} onClick={() => setActive(f.key)}>
            <b>{f.number}</b>
            <span>{f.name}</span>
            <i>{f.job}</i>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="sh-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="sh-panel-photos">
            <button type="button" className="sh-shot" onClick={() => onZoom({ src: IMAGES[item.photo], alt: item.name })}>
              <img src={IMAGES[item.photo]} alt={item.name} />
              <span>Mithson {item.name.replace('Hydraulic ', '')}</span>
            </button>
            <button type="button" className="sh-shot sh-shot--small" onClick={() => onZoom({ src: IMAGES[item.detail], alt: `${item.name} close-up` })}>
              <img src={IMAGES[item.detail]} alt={`${item.name} close-up`} loading="lazy" />
              <span>Profile close-up</span>
            </button>
          </div>
          <div className="sh-panel-body">
            <h3>{item.name}</h3>
            <p className="sh-sub">{item.subtitle}</p>
            <p>{item.text}</p>
            {spec && <ItemSpecList spec={spec} />}
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>
            <p className="sh-uses"><strong>Applications:</strong> {item.uses}</p>
            <p className="sh-asks"><strong>To quote we need:</strong> {item.asks.join(' · ')}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Enquire about {item.name} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/**
 * 05 - the signature of this page: a hydraulic cylinder that really strokes.
 * The rod and piston move together, and the stage you pick lights up the seal
 * doing the work at that moment.
 */
function Cylinder() {
  const [stage, setStage] = useState(0);
  const [running, setRunning] = useState(true);
  const reduceMotion = useReducedMotion();
  const item = workingStages[stage];
  const stroke = reduceMotion || !running ? { x: 34 } : { x: [0, 68, 0] };

  const lit = (key) => (item.highlight === key ? ' is-lit' : '');

  return (
    <div className="sh-cyl">
      <div className="sh-cyl-art">
        <svg viewBox="0 0 420 180" role="img" aria-label={`Hydraulic cylinder, ${item.name}`}>
          {/* barrel */}
          <rect className="sh-barrel" x="24" y="46" width="250" height="88" rx="6" />
          <rect className="sh-fluid" x="30" y="52" width="238" height="76" rx="4" />
          {/* port */}
          <rect className="sh-barrel" x="40" y="26" width="26" height="22" rx="4" />
          <path className="sh-arrow" d="M53 30v14M48 39l5 6 5-6" />

          {/* piston + rod, stroking together */}
          <motion.g animate={stroke} transition={{ duration: reduceMotion ? 0 : 3.2, repeat: running && !reduceMotion ? Infinity : 0, ease: 'easeInOut' }}>
            <rect className="sh-piston" x="150" y="52" width="34" height="76" rx="4" />
            <rect className={`sh-seal${lit('piston')}`} x="152" y="52" width="8" height="76" rx="3" />
            <rect className={`sh-seal${lit('piston')}`} x="174" y="52" width="8" height="76" rx="3" />
            <rect className={`sh-ring${lit('wear')}`} x="162" y="52" width="10" height="7" rx="2" />
            <rect className={`sh-ring${lit('wear')}`} x="162" y="121" width="10" height="7" rx="2" />
            <rect className="sh-rod" x="184" y="80" width="208" height="20" rx="4" />
          </motion.g>

          {/* gland / cylinder head */}
          <rect className="sh-head" x="274" y="46" width="44" height="88" rx="5" />
          <rect className={`sh-seal${lit('rod')}`} x="280" y="74" width="9" height="32" rx="3" />
          <rect className={`sh-ring${lit('wear')}`} x="292" y="74" width="8" height="32" rx="2" />
          <rect className={`sh-seal${lit('wiper')}`} x="304" y="72" width="9" height="36" rx="3" />

          {/* labels */}
          <g className="sh-tag">
            <text x="156" y="166">Piston seal</text>
            <text x="268" y="34">Rod seal</text>
            <text x="330" y="60">Wiper</text>
          </g>
        </svg>
        <button type="button" className="sh-cyl-toggle" onClick={() => setRunning((r) => !r)} aria-pressed={running}>
          {running ? 'Pause the stroke' : 'Play the stroke'}
        </button>
      </div>

      <div className="sh-cyl-steps">
        <ol role="tablist" aria-label="Cylinder stages">
          {workingStages.map((s, i) => (
            <li key={s.key}>
              <button type="button" role="tab" aria-selected={i === stage} onClick={() => setStage(i)}>
                <b>{String(i + 1).padStart(2, '0')}</b>
                {s.label}
              </button>
            </li>
          ))}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            className="sh-cyl-copy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Materials({ onZoom }) {
  const [open, setOpen] = useState(materials[0].key);
  return (
    <div className="sh-materials">
      {materials.map((m, i) => {
        const isOpen = m.key === open;
        return (
          <Reveal key={m.key} delay={i * 0.05} className={`sh-material${isOpen ? ' is-open' : ''}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : m.key)}>
              <b>{m.short}</b>
              <span>{m.name}</span>
              <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="sh-material-body"
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
                    <p className="sh-uses"><strong>Typical use:</strong> {m.uses}</p>
                  </div>
                  {m.photo && (
                    <button type="button" className="sh-shot sh-shot--small" onClick={() => onZoom({ src: IMAGES[m.photo], alt: m.name })}>
                      <img src={IMAGES[m.photo]} alt={m.name} loading="lazy" />
                      <span>{m.name}</span>
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </div>
  );
}

function SelectionGuide() {
  const [step, setStep] = useState(0);
  const item = selectionSteps[step];
  return (
    <div className="sh-guide">
      <ol className="sh-guide-rail">
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
          className="sh-guide-panel"
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="sh-guide-num">{String(step + 1).padStart(2, '0')} / {selectionSteps.length}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="sh-guide-nav">
            <button type="button" onClick={() => setStep((step - 1 + selectionSteps.length) % selectionSteps.length)}>Previous</button>
            <button type="button" onClick={() => setStep((step + 1) % selectionSteps.length)}>Next parameter <Arrow /></button>
          </div>
        </motion.div>
      </AnimatePresence>
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

/** A photograph opened full size. Escape or a click on the backdrop closes it. */
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
          className="sh-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={shot.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.img
            src={shot.src}
            alt={shot.alt}
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
          <button type="button" onClick={onClose} aria-label="Close">×</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SealsHydraulicPage() {
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = 'Hydraulic Seals — Piston, Rod, Wiper & Wear Rings | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page sh-page">
      <Hero />

      {/* 01 Understanding hydraulic sealing */}
      <section className="section mp-section" id="sh-basics">
        <div className="container mp-split">
          <div>
            <Head number="01" label="Hydraulic sealing basics" title="What a hydraulic sealing system has to do" intro={basicsIntro} />
            <ul className="mp-checks sh-parts">
              {basicsParts.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
            </ul>
            <p className="mu-watch"><Icon name="alert" size={16} /> {basicsNote}</p>
          </div>
          <Reveal className="mu-figure sh-figure">
            <button type="button" className="sh-shot" onClick={() => setShot({ src: refRange, alt: 'Hydraulic seal range' })}>
              <img src={refRange} alt="A selection of hydraulic sealing profiles" loading="lazy" />
            </button>
            <figcaption>Profiles differ by job: pressure sealing, wiping and guiding are not the same task.</figcaption>
          </Reveal>
        </div>
      </section>

      {/* 02 The four families */}
      <section className="mp-dark" id="sh-products">
        <div className="container">
          <Head number="02" label="The range" title="Four families, four different jobs" light
            intro="Piston seals, rod seals, wiper seals and wear rings each have a separate engineering responsibility inside the cylinder. Pick one to see what it does." />
          <Families onZoom={setShot} />
        </div>
      </section>

      {/* 03 Supporting components */}
      <section className="section mp-section" id="sh-extras">
        <div className="container">
          <Head number="03" label="Supporting components" title="The rest of the sealing arrangement" intro={extrasNote} />
          <div className="mp-grid mp-grid--4 sh-extras">
            {extras.map((e, i) => (
              <Reveal key={e.key} delay={(i % 4) * 0.07} className="mp-card sh-extra">
                {e.photo ? (
                  <button type="button" className="sh-shot sh-shot--small" onClick={() => setShot({ src: IMAGES[e.photo], alt: e.title })}>
                    <img src={IMAGES[e.photo]} alt={e.title} loading="lazy" />
                  </button>
                ) : (
                  <span className="mp-icon"><Icon name="layers" size={20} /></span>
                )}
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 How a hydraulic cylinder seals */}
      <section className="section mp-section mp-tint" id="sh-working">
        <div className="container">
          <Head number="04" label="Working principle" title="How a hydraulic cylinder seals" intro={workingIntro} />
          <Cylinder />
        </div>
      </section>

      {/* 05 Materials */}
      <section className="section mp-section" id="sh-materials">
        <div className="container">
          <Head number="05" label="Material technology" title="Material options for hydraulic sealing" intro={materialsNote} />
          <Materials onZoom={setShot} />
        </div>
      </section>

      {/* 06 Applications */}
      <section className="mp-dark" id="sh-applications">
        <div className="container">
          <Head number="06" label="Applications" title="Where hydraulic seals work" light intro={applicationsNote} />
          <div className="mp-grid mp-grid--4 sh-apps">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.06} className="sh-app">
                <span className="mp-icon"><Icon name={a.icon} size={20} /></span>
                <h3>{a.title}</h3>
                <ul>{a.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <p><strong>Needs:</strong> {a.need}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Technical specifications */}
      <section className="section mp-section mp-tint" id="sh-specs">
        <div className="container">
          <Head number="07" label="Technical specifications" title="What we confirm for every hydraulic seal"
            intro="Hydraulic seals are supplied to the dimensions and conditions of your cylinder, so most of this table is confirmed per order rather than published as one figure." />
          <div className="mu-table sh-table">
            <div className="mu-table-head"><span>Field</span><span>Value</span></div>
            {generalSpecs.map(([k, v]) => (
              <div key={k}>
                <span>{k}</span>
                <span className={v === 'Contact Mithson for confirmed specifications' ? 'sh-ask' : undefined}>{v}</span>
              </div>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>No single range.</strong> {specsNote}</Reveal>
        </div>
      </section>

      {/* 08 Selection guide */}
      <section className="section mp-section" id="sh-selection">
        <div className="container">
          <Head number="08" label="Selection guide" title="How to select the right hydraulic seal"
            intro="Nine things decide the seal. Step through them and you have everything our engineers need." />
          <SelectionGuide />
        </div>
      </section>

      {/* 09 Installation and maintenance */}
      <section className="section mp-section mp-tint" id="sh-maintenance">
        <div className="container">
          <Head number="09" label="Installation & maintenance" title="Getting the seal in, and keeping it working" />
          <div className="mp-grid mp-grid--3">
            {maintenance.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 0.07} className="mp-card">
                <span className="mp-icon"><Icon name={m.icon} size={20} /></span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Troubleshooting */}
      <section className="section mp-section" id="sh-troubleshooting">
        <div className="container">
          <Head number="10" label="Troubleshooting" title="Common hydraulic sealing problems" intro={troubleshootingNote} />
          <div className="sh-trouble">
            {troubleshooting.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.06} className="sh-trouble-card">
                <h3>{t.title}</h3>
                <ul>{t.causes.map((c) => <li key={c}>{c}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Seal kits */}
      <section className="section mp-section mp-tint" id="sh-kits">
        <div className="container mp-split">
          <div>
            <Head number="11" label="Seal kits" title="Hydraulic seal kits for service and refurbishment" intro={kitIntro} />
            <ul className="mp-checks">
              {kitPoints.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
            </ul>
            <p className="mu-watch"><Icon name="alert" size={16} /> {kitNote}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Request a seal kit <Arrow /></Link>
          </div>
          <Reveal className="mu-figure sh-figure">
            <button type="button" className="sh-shot" onClick={() => setShot({ src: imgKit, alt: 'Mithson hydraulic seal kit' })}>
              <img src={imgKit} alt="Mithson hydraulic seal kit" loading="lazy" />
            </button>
            <figcaption>A Mithson hydraulic seal kit</figcaption>
          </Reveal>
        </div>
      </section>

      {/* 12 Custom engineering */}
      <section className="section mp-section" id="sh-custom">
        <div className="container">
          <Head number="12" label="Custom engineering" title="From your cylinder drawing to a finished seal" />
          <ol className="sh-stages">
            {customStages.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.07}>
                <b>{String(i + 1).padStart(2, '0')}</b>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 13 Documentation */}
      <section className="section mp-section mp-tint" id="sh-documents">
        <div className="container">
          <Head number="13" label="Technical documentation" title="Documents available on request" intro={documentsNote} />
          <div className="sh-docs">
            {documents.map((d, i) => (
              <Reveal key={d} delay={(i % 4) * 0.06} className="sh-doc">
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

      {/* 14 FAQ */}
      <section className="section mp-section" id="sh-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="14" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Mithson engineers confirm the right seal for each cylinder." />
          <Faqs />
        </div>
      </section>

      <RelatedProducts product={product} products={allProducts} />

      {/* 15 CTA */}
      <section className="mp-cta" id="sh-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">15 — Engineering review</span>
            <h2>{closing[0]}</h2>
            <p>{closing[1]}</p>
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={CONTACT} className="btn btn-white">Get in touch <Arrow /></Link>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Send your cylinder data <Arrow /></Link>
          </div>
        </div>
      </section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </div>
  );
}

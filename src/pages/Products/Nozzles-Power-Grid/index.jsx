import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { products as allProducts, getProductBySlug } from '../../../content/products';
import {
  applications,
  challenges,
  cipGains,
  cipIntro,
  cipSteps,
  closing,
  customAsks,
  customOptions,
  designGroups,
  faqs,
  heroChips,
  heroSpecs,
  heroTags,
  inspectionChecklist,
  introText,
  materialCompare,
  materialIntro,
  materialNote,
  nozzles,
  nozzlesDistinction,
  nzHero,
  precisionIntro,
  precisionPoints,
  ptfeProperties,
  qualityNote,
  specNote,
  specTable,
  validationOptions,
  whyMatters,
  workingFactors,
  workingIntro,
  workingNote,
  workingStages,
} from '../../../content/nozzlesPowerGrid';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './NozzlesPowerGrid.css';

// existing product photographs - kept exactly as they are
import imgNozzle1 from './assets/PTFE Nozzles-1.png';
import imgNozzle2 from './assets/PTFE Nozzles-2.png';
import imgNozzle3 from './assets/PTFE Nozzles-3.png';

const IMAGES = { nozzle1: imgNozzle1, nozzle2: imgNozzle2, nozzle3: imgNozzle3 };

const product = getProductBySlug('nozzles-power-grid');
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  thermo: <><path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0Z" /><path d="M12 9v5" /></>,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  flow: <path d="M3 8h10a4 4 0 0 1 0 8H5M16 4l4 4-4 4M8 12l-4 4 4 4" />,
  caliper: <><path d="M5 3v18M19 3v18" /><path d="M5 8h14M9 8v4M15 8v4" /></>,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  press: <><rect x="5" y="3" width="14" height="4" rx="1" /><path d="M12 7v5M7 12h10v4H7z" /><path d="M4 21h16" /></>,
  slide: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  drop: <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  tower: <><path d="M12 2v20M6 22 12 2l6 20" /><path d="M8.2 14h7.6M9.5 9h5" /></>,
  box: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 11h18M9 6V4h6v2" /></>,
  grid: <><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></>,
  factory: <><path d="M3 21V10l6 4V10l6 4V7l6 4v10z" /><path d="M7 21v-4M13 21v-4M18 21v-4" /></>,
  wind: <><path d="M12 22V12" /><path d="M12 12 5 8M12 12l7-4M12 12v-9" /><circle cx="12" cy="12" r="1.6" /></>,
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
    <section ref={ref} className="mp-hero nz-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{nzHero.label}</span>
          <h1>
            {nzHero.title}
            <span>{nzHero.titleAccent}</span>
            {nzHero.titleRest}
          </h1>
          <p>{nzHero.lead}</p>
          <p className="nz-hero-sub">{nzHero.lead2}</p>
          <ul className="nz-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#nz-range" className="btn btn-primary">Explore the range <Arrow /></a>
            <Link to={CONTACT} className="btn mp-btn-ghost">Enquire now</Link>
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

/** 02 - the two nozzle types, picked one at a time. */
function Range({ onZoom }) {
  const [active, setActive] = useState(nozzles[0].key);
  const item = nozzles.find((n) => n.key === active);
  return (
    <>
      <div className="nz-picks" role="tablist" aria-label="Nozzle types">
        {nozzles.map((n) => (
          <button key={n.key} type="button" role="tab" aria-selected={n.key === active} onClick={() => setActive(n.key)}>
            <b>{n.number}</b>
            <span>{n.name}</span>
            <i>{n.job}</i>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="nz-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="nz-panel-photos">
            <button type="button" className="nz-shot" onClick={() => onZoom({ src: IMAGES[item.photo], alt: item.name })}>
              <img src={IMAGES[item.photo]} alt={item.name} />
              <span>Mithson {item.short}</span>
            </button>
            <button type="button" className="nz-shot nz-shot--small" onClick={() => onZoom({ src: IMAGES[item.detail], alt: `${item.name} detail` })}>
              <img src={IMAGES[item.detail]} alt={`${item.name} detail`} loading="lazy" />
              <span>Another profile</span>
            </button>
          </div>
          <div className="nz-panel-body">
            <h3>{item.name}</h3>
            <p className="nz-sub">{item.subtitle}</p>
            <p>{item.text}</p>
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            <div className="nz-gains">
              <strong>What it does in the breaker</strong>
              <ul>{item.gains.map((g) => <li key={g}>{g}</li>)}</ul>
            </div>
            <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>
            <p className="nz-uses"><strong>Applications:</strong> {item.uses}</p>
            <p className="nz-asks"><strong>To quote we need:</strong> {item.asks.join(' · ')}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Enquire about {item.short.toLowerCase()} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/**
 * 04 - the CIP line, drawn step by step. Each step has its own small illustration,
 * so the process reads as a sequence rather than as six paragraphs.
 */
function CipArt({ step }) {
  const on = (k) => (step === k ? ' is-on' : '');
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label="Cold isostatic pressing, step illustration">
      {/* 01 powder */}
      {step === 'powder' && (
        <g className={`nz-cip${on('powder')}`}>
          <path className="nz-vessel" d="M120 60h120v100a12 12 0 0 1-12 12H132a12 12 0 0 1-12-12Z" />
          <g className="nz-powder">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <circle key={i} cx={138 + (i % 6) * 18} cy={128 + Math.floor(i / 6) * 18} r="5" />
            ))}
          </g>
          <text className="nz-cip-text" x="180" y="46" textAnchor="middle">PTFE powder</text>
        </g>
      )}

      {/* 02 mould */}
      {step === 'mould' && (
        <g className="nz-cip">
          <path className="nz-bag" d="M140 40c-10 30-10 90 0 120h80c10-30 10-90 0-120Z" />
          <g className="nz-powder">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <circle key={i} cx={152 + (i % 3) * 28} cy={80 + Math.floor(i / 3) * 26} r="6" />
            ))}
          </g>
          <text className="nz-cip-text" x="180" y="182" textAnchor="middle">Flexible mould, loaded</text>
        </g>
      )}

      {/* 03 isostatic compaction */}
      {step === 'press' && (
        <g className="nz-cip">
          <rect className="nz-vessel" x="80" y="30" width="200" height="140" rx="12" />
          <path className="nz-bag" d="M150 56c-8 24-8 66 0 90h60c8-24 8-66 0-90Z" />
          <g className="nz-arrows">
            <path d="M100 100h34M126 94l8 6-8 6" />
            <path d="M260 100h-34M234 94l-8 6 8 6" />
            <path d="M180 48v26M174 68l6 6 6-6" />
            <path d="M180 152v-26M174 132l6-6 6 6" />
          </g>
          <text className="nz-cip-text" x="180" y="188" textAnchor="middle">Pressure from every direction</text>
        </g>
      )}

      {/* 04 sintering */}
      {step === 'sinter' && (
        <g className="nz-cip">
          <rect className="nz-vessel" x="70" y="50" width="220" height="110" rx="10" />
          <rect className="nz-blank" x="140" y="80" width="80" height="50" rx="6" />
          <g className="nz-heat">
            <path d="M110 140c0-14 10-14 10-28s-10-14-10-28" />
            <path d="M250 140c0-14 10-14 10-28s-10-14-10-28" />
          </g>
          <text className="nz-cip-text" x="180" y="182" textAnchor="middle">Controlled thermal processing</text>
        </g>
      )}

      {/* 05 machining */}
      {step === 'machine' && (
        <g className="nz-cip">
          <rect className="nz-blank" x="96" y="78" width="168" height="54" rx="8" />
          <path className="nz-profile" d="M150 78c6 18 6 36 0 54M210 78c-10 18-10 36 0 54" />
          <path className="nz-tool" d="M180 20v44M170 64h20l-10 12Z" />
          <text className="nz-cip-text" x="180" y="166" textAnchor="middle">Throat and contour machined</text>
        </g>
      )}

      {/* 06 inspection */}
      {step === 'inspect' && (
        <g className="nz-cip">
          <path className="nz-nozzle" d="M110 70h60l30 30 30-30h20v60h-20l-30-30-30 30h-60Z" />
          <g className="nz-gauge">
            <circle cx="180" cy="100" r="46" />
            <path d="M213 133 246 166" />
          </g>
          <text className="nz-cip-text" x="180" y="182" textAnchor="middle">Measured against the drawing</text>
        </g>
      )}
    </svg>
  );
}

function CipProcess() {
  const [step, setStep] = useState(cipSteps[0].key);
  const item = cipSteps.find((s) => s.key === step);
  return (
    <div className="nz-cip-process">
      <div className="nz-cip-art">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <CipArt step={step} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="nz-cip-body">
        <ol className="nz-cip-rail" role="tablist" aria-label="CIP process steps">
          {cipSteps.map((s) => (
            <li key={s.key}>
              <button type="button" role="tab" aria-selected={s.key === step} onClick={() => setStep(s.key)}>
                <b>{s.number}</b>
                {s.title}
              </button>
            </li>
          ))}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            className="nz-cip-copy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{item.number} — {item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/**
 * 05 - the signature of this page: the interruption drawn in four stages, with the
 * contacts really parting, the arc striking and the gas flowing through the nozzle.
 */
function Interruption() {
  const [stage, setStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const item = workingStages[stage];
  const open = stage >= 1;
  const arc = stage >= 1 && stage <= 2;
  const gas = stage >= 2;
  const clear = stage === 3;

  return (
    <div className="nz-work">
      <div className="nz-work-art">
        <svg viewBox="0 0 420 220" role="img" aria-label={`Circuit breaker interruption, ${item.title}`}>
          {/* chamber */}
          <rect className="nz-chamber" x="14" y="36" width="392" height="148" rx="12" />

          {/* the PTFE nozzle, drawn as the two facing halves around the gap */}
          <g className="nz-nozzle-art">
            <path d="M176 56h54l-18 48 18 48h-54Z" />
            <path d="M244 56h-54l18 48-18 48h54Z" transform="translate(0,0)" />
          </g>
          <text className="nz-label nz-label--ours" x="210" y="196" textAnchor="middle">PTFE nozzle</text>

          {/* fixed contact */}
          <rect className="nz-contact" x="40" y="94" width="150" height="22" rx="5" />
          <text className="nz-label" x="70" y="86">Fixed contact</text>

          {/* moving contact, which really moves */}
          <motion.g
            animate={{ x: reduceMotion ? (open ? 56 : 0) : (open ? 56 : 0) }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <rect className="nz-contact" x="230" y="94" width="150" height="22" rx="5" />
          </motion.g>
          <text className="nz-label" x="330" y="86">Moving contact</text>

          {/* the arc */}
          <AnimatePresence>
            {arc && (
              <motion.path
                className="nz-arc"
                d="M190 105l12-6 10 12 12-7 14 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: reduceMotion ? 1 : [0.5, 1, 0.6, 1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0.3 : 0.9, repeat: reduceMotion ? 0 : Infinity }}
              />
            )}
          </AnimatePresence>

          {/* gas flow through the nozzle */}
          <AnimatePresence>
            {gas && (
              <motion.g
                className="nz-gas"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <path d="M150 70h40M182 64l8 6-8 6" />
                <path d="M150 140h40M182 134l8 6-8 6" />
                <path d="M270 70h-40M238 64l-8 6 8 6" />
                <path d="M270 140h-40M238 134l-8 6 8 6" />
              </motion.g>
            )}
          </AnimatePresence>

          {/* gap recovered */}
          <AnimatePresence>
            {clear && (
              <motion.g className="nz-clear" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                <path d="M196 105h32" strokeDasharray="5 5" />
                <text className="nz-label nz-label--ok" x="212" y="134" textAnchor="middle">Gap recovered</text>
              </motion.g>
            )}
          </AnimatePresence>
        </svg>

        <ol className="nz-work-rail" role="tablist" aria-label="Interruption stages">
          {workingStages.map((s, i) => (
            <li key={s.key}>
              <button type="button" role="tab" aria-selected={i === stage} onClick={() => setStage(i)}>
                <b>{s.number}</b>
                {s.label}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="nz-work-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{item.number} — {item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="nz-factors">
          <h4>What nozzle performance depends on</h4>
          <ul>{workingFactors.map((f) => <li key={f}>{f}</li>)}</ul>
          <p className="mu-watch"><Icon name="alert" size={16} /> {workingNote}</p>
        </div>
      </div>
    </div>
  );
}

function DesignGroups() {
  const [open, setOpen] = useState(designGroups[0].key);
  return (
    <div className="nz-design">
      {designGroups.map((g, i) => {
        const isOpen = g.key === open;
        return (
          <Reveal key={g.key} delay={i * 0.05} className={`nz-design-card${isOpen ? ' is-open' : ''}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : g.key)}>
              <span className="mp-icon"><Icon name={g.icon} size={20} /></span>
              <span className="nz-design-title">{g.title}</span>
              <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="nz-design-body">
                    <p>{g.text}</p>
                    <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
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
          className="nz-lightbox"
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

export default function NozzlesPowerGridPage() {
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = 'PTFE Arc-Quenching & Insulating Nozzles for SF6 Breakers | Mithson';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page nz-page">
      <Hero />

      {/* 01 Why the nozzle matters */}
      <section className="section mp-section" id="nz-intro">
        <div className="container mp-split">
          <div>
            <Head number="01" label="High-voltage switchgear" title="Precision polymer components for reliable grid protection" />
            {introText.map((p) => <p key={p} className="nz-lead">{p}</p>)}
          </div>
          <Reveal className="mu-figure nz-figure">
            <button type="button" className="nz-shot" onClick={() => setShot({ src: imgNozzle1, alt: 'Mithson PTFE nozzle' })}>
              <img src={imgNozzle1} alt="Mithson PTFE nozzle" loading="lazy" />
            </button>
            <figcaption>A Mithson PTFE nozzle. The internal throat decides how the gas moves.</figcaption>
          </Reveal>
        </div>

        <div className="container">
          <div className="nz-why">
            {whyMatters.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.07} className="mp-card">
                <span className="mp-icon"><Icon name={w.icon} size={20} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 The range */}
      <section className="mp-dark" id="nz-range">
        <div className="container">
          <Head number="02" label="Product range" title="Two nozzle types" light
            intro="Arc-quenching nozzles and insulating nozzles. Pick one to see it in full." />
          <Range onZoom={setShot} />
          <Reveal as="p" className="nz-distinct"><Icon name="alert" size={18} /> <strong>Which is which.</strong> {nozzlesDistinction}</Reveal>
        </div>
      </section>

      {/* 03 Material technology */}
      <section className="section mp-section" id="nz-material">
        <div className="container">
          <Head number="03" label="Material technology" title="Why PTFE" intro={materialIntro} />
          <div className="nz-props">
            {ptfeProperties.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06} className="nz-prop">
                <span className="mp-icon"><Icon name={p.icon} size={20} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="nz-compare">
            <h3 className="mp-subhead">Material options compared</h3>
            <div className="mu-table">
              <div className="mu-table-head nz-row3"><span>Material</span><span>Important characteristics</span><span>Potential applications</span></div>
              {materialCompare.map(([m, c, a]) => (
                <div key={m} className="nz-row3"><span>{m}</span><span>{c}</span><span>{a}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Why the choice matters.</strong> {materialNote}</Reveal>
        </div>
      </section>

      {/* 04 CIP */}
      <section className="section mp-section mp-tint" id="nz-cip">
        <div className="container">
          <Head number="04" label="Manufacturing" title="Cold Isostatic Pressing, step by step" intro={cipIntro} />
          <CipProcess />
          <Reveal className="nz-cip-gains">
            <h3>What CIP gives us</h3>
            <ul className="mp-checks">
              {cipGains.map((g) => <li key={g}><span><Icon name="check" size={14} /></span>{g}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 05 How it works */}
      <section className="section mp-section" id="nz-working">
        <div className="container">
          <Head number="05" label="Working principle" title="How the nozzle quenches the arc" intro={workingIntro} />
          <Interruption />
        </div>
      </section>

      {/* 06 Design and performance */}
      <section className="section mp-section mp-tint" id="nz-design">
        <div className="container">
          <Head number="06" label="Design parameters" title="Engineered for demanding switching conditions"
            intro="Four groups of requirements. Open each one to see what we review with you." />
          <DesignGroups />
          <Reveal className="nz-spec">
            <h3 className="mp-subhead">Technical specification</h3>
            <div className="mu-table">
              <div className="mu-table-head"><span>Parameter</span><span>Information</span></div>
              {specTable.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}
            </div>
          </Reveal>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>No published ratings.</strong> {specNote}</Reveal>
        </div>
      </section>

      {/* 07 Applications */}
      <section className="mp-dark" id="nz-applications">
        <div className="container">
          <Head number="07" label="Applications" title="Supporting high-voltage electrical infrastructure" light />
          <div className="nz-apps">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06} className="nz-app">
                <span className="mp-icon"><Icon name={a.icon} size={20} /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Precision and quality */}
      <section className="section mp-section" id="nz-quality">
        <div className="container">
          <Head number="08" label="Precision & quality" title="Precision geometry, reliable component quality" intro={precisionIntro} />
          <div className="nz-precision">
            {precisionPoints.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06} className="mp-card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="nz-quality">
            <Reveal>
              <h3 className="mp-subhead">Inspection checklist</h3>
              <ol className="nz-checklist">
                {inspectionChecklist.map((q, i) => (
                  <li key={q}><b>{String(i + 1).padStart(2, '0')}</b>{q}</li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <h3 className="mp-subhead">Validation, where it is specified</h3>
              <ul className="mp-checks">
                {validationOptions.map((v) => <li key={v}><span><Icon name="check" size={14} /></span>{v}</li>)}
              </ul>
              <p className="mu-watch"><Icon name="alert" size={16} /> {qualityNote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 Challenges */}
      <section className="section mp-section mp-tint" id="nz-challenges">
        <div className="container">
          <Head number="09" label="Challenges" title="What makes high-voltage switching hard" />
          <div className="nz-challenges">
            {challenges.map((c, i) => (
              <Reveal key={c.challenge} delay={(i % 3) * 0.06} className="nz-challenge">
                <h3>{c.challenge}</h3>
                <p className="nz-challenge-problem">{c.problem}</p>
                <p className="nz-challenge-answer"><strong>Our approach.</strong> {c.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Custom engineering */}
      <section className="section mp-section" id="nz-custom">
        <div className="container mp-split">
          <div>
            <Head number="10" label="Custom engineering" title="Nozzles designed around your circuit breaker"
              intro="Every breaker manufacturer uses different interruption chamber architectures, contact arrangements, gas-flow paths and nozzle geometries. Work starts from your drawing, specification or reference sample." />
            <div className="nz-options">
              <h3>What can change</h3>
              <ul>{customOptions.map((o) => <li key={o}>{o}</li>)}</ul>
            </div>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Request a custom nozzle quotation <Arrow /></Link>
          </div>
          <Reveal className="nz-asks-card">
            <h3>What to send us</h3>
            <ol>
              {customAsks.map((a, i) => (
                <li key={a}><b>{String(i + 1).padStart(2, '0')}</b>{a}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 11 At a glance */}
      <section className="section mp-section mp-tint" id="nz-specs">
        <div className="container">
          <Head number="11" label="At a glance" title="Product summary"
            intro="The whole specification in one place. Anything application-specific is confirmed by our engineers against your breaker." />
          <div className="mu-table nz-table">
            <div className="mu-table-head"><span>Parameter</span><span>Specification</span></div>
            {heroSpecs.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}
          </div>
        </div>
      </section>

      {/* 12 FAQ */}
      <section className="section mp-section" id="nz-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="12" label="FAQ" title="Common questions"
            intro="General guidance only. Mithson engineers confirm the right nozzle for each breaker." />
          <Faqs />
        </div>
      </section>

      <RelatedProducts product={product} products={allProducts} />

      {/* 13 CTA */}
      <section className="mp-cta" id="nz-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">13 — Engineering review</span>
            <h2>{closing[0]}</h2>
            <p>{closing[1]}</p>
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={CONTACT} className="btn btn-white">Get in touch <Arrow /></Link>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Request a technical quotation <Arrow /></Link>
          </div>
        </div>
      </section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </div>
  );
}

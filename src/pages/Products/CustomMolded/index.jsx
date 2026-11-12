import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { customManufacturing } from '../../../content/customManufacturing';
import {
  categories,
  categoriesClosing,
  categoriesIntro,
  checklist,
  checklistNote,
  chooseMachining,
  chooseMolding,
  closing,
  cmHero,
  compareNote,
  compareRows,
  faqs,
  fileFormats,
  heroChips,
  heroTags,
  industries,
  materials,
  materialsIntro,
  materialsNote,
  materialTraits,
  parameters,
  parametersNote,
  processClosing,
  processes,
  processIntro,
  steps,
  whyMithson,
} from '../../../content/customMolded';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './CustomMolded.css';

// supporting photographs for the new sections
import imgSealsGaskets from '../CustomManufacturing/assets/molded/seals-gaskets.png';
import imgGasketsColour from '../CustomManufacturing/assets/molded/gaskets-colour.png';
import imgPolymerBushes from '../CustomManufacturing/assets/molded/polymer-bushes.png';
import imgPtfeBushes from '../CustomManufacturing/assets/molded/ptfe-bushes.webp';
import imgDiaphragmsGroup from '../CustomManufacturing/assets/molded/diaphragms-group.webp';
import imgDiaphragmsRow from '../CustomManufacturing/assets/molded/diaphragms-row.png';
import imgPuParts from '../CustomManufacturing/assets/molded/pu-parts.webp';
import imgRubberRange from '../CustomManufacturing/assets/molded/rubber-range.webp';
import imgBonded from '../CustomManufacturing/assets/molded/rubber-metal-bonded.png';
import imgSealsRange from '../CustomManufacturing/assets/molded/seals-range.webp';
import imgPtfeMachined from '../CustomManufacturing/assets/molded/ptfe-machined.png';
import imgPtfePress from '../CustomManufacturing/assets/molded/ptfe-press.webp';
import imgCompressionTooling from '../CustomManufacturing/assets/molded/compression-tooling.png';
import imgOilGasSkid from '../CustomManufacturing/assets/molded/oil-gas-skid.webp';

const IMAGES = {
  'seals-gaskets': imgSealsGaskets,
  'gaskets-colour': imgGasketsColour,
  'polymer-bushes': imgPolymerBushes,
  'ptfe-bushes': imgPtfeBushes,
  'diaphragms-group': imgDiaphragmsGroup,
  'diaphragms-row': imgDiaphragmsRow,
  'pu-parts': imgPuParts,
  'rubber-range': imgRubberRange,
  'rubber-metal-bonded': imgBonded,
  'seals-range': imgSealsRange,
  'ptfe-machined': imgPtfeMachined,
  'ptfe-press': imgPtfePress,
  'compression-tooling': imgCompressionTooling,
  'oil-gas-skid': imgOilGasSkid,
};

// the existing hero image stays exactly as it is
const product = customManufacturing['custom-molded-products'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';
const MACHINED = '/products/machined-products';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  mold: <><rect x="4" y="4" width="16" height="6" rx="1.5" /><rect x="4" y="14" width="16" height="6" rx="1.5" /><path d="M12 10v4" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  rocket: <><path d="M14 4c4 2 6 6 6 10l-4 1-3-3 1-4Z" /><path d="M10 10 4 14l1 4 4 1 4-6" /><circle cx="15" cy="9" r="1.4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" /></>,
  support: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2" y="13" width="4" height="6" rx="1.5" /><rect x="18" y="13" width="4" height="6" rx="1.5" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  car: <><path d="M4 16v-3l2-5h12l2 5v3" /><path d="M3 16h18v3h-3v-3M6 19H3v-3" /><circle cx="7.5" cy="16" r="1.4" /><circle cx="16.5" cy="16" r="1.4" /></>,
  pharma: <><rect x="3" y="8" width="18" height="12" rx="3" /><path d="M9 8V5h6v3M12 11v6M9 14h6" /></>,
  mine: <><path d="M3 20h18" /><path d="m6 20 6-12 6 12" /><path d="M9 14h6" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>,
  robot: <><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9 16h6" /><circle cx="12" cy="3" r="1.4" /></>,
  plane: <path d="M10 20h4l-1-6 8 2v-3l-8-4V4a2 2 0 0 0-4 0v5l-8 4v3l8-2z" />,
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
    <section ref={ref} className="mp-hero cm-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{cmHero.label}</span>
          <h1>
            {cmHero.title}
            <span>{cmHero.titleAccent}</span>
            {cmHero.titleRest}
          </h1>
          <p>{cmHero.lead}</p>
          <p className="cm-hero-sub">{cmHero.lead2}</p>
          <ul className="cm-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <Link to={APPLICATION_DATA} className="btn btn-primary">Send your drawing <Arrow /></Link>
            <Link to="/book-a-meeting" className="btn mp-btn-ghost">Book a meeting</Link>
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

/** 01 - the six things we mold, picked one at a time. */
function Categories({ onZoom }) {
  const [active, setActive] = useState(categories[0].key);
  const item = categories.find((c) => c.key === active);
  return (
    <>
      <div className="cm-picks" role="tablist" aria-label="Component categories">
        {categories.map((c) => (
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
          className="cm-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="cm-panel-photos">
            <button type="button" className="cm-shot" onClick={() => onZoom({ src: IMAGES[item.photo], alt: item.name })}>
              <img src={IMAGES[item.photo]} alt={item.name} />
              <span>{item.short}</span>
            </button>
            <button type="button" className="cm-shot cm-shot--small" onClick={() => onZoom({ src: IMAGES[item.detail], alt: `${item.name} detail` })}>
              <img src={IMAGES[item.detail]} alt={`${item.name} detail`} loading="lazy" />
              <span>Another example</span>
            </button>
          </div>
          <div className="cm-panel-body">
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <div className="cm-items">
              <strong>Typical products</strong>
              <ul>{item.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
            <p className="cm-uses"><strong>Applications:</strong> {item.uses}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Discuss a {item.short.toLowerCase()} requirement <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/**
 * 02 - the signature of this page: the mold drawn for each process, so you can
 * see where the material goes and why the five routes are not interchangeable.
 */
function MoldArt({ kind, reduceMotion }) {
  const fill = reduceMotion ? { opacity: 1 } : { opacity: [0, 1, 1] };
  const timing = { duration: reduceMotion ? 0 : 2.4, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' };

  return (
    <svg viewBox="0 0 360 230" role="img" aria-label={`${kind} mold, cut away`}>
      {/* heater platens, on every route */}
      <rect className="cm-platen" x="30" y="16" width="300" height="20" rx="4" />
      <rect className="cm-platen" x="30" y="194" width="300" height="20" rx="4" />
      <text className="cm-art-text" x="180" y="30" textAnchor="middle">HEATED PLATEN</text>
      <text className="cm-art-text" x="180" y="208" textAnchor="middle">HEATED PLATEN</text>

      {/* mold halves */}
      <path className="cm-mold" d="M50 42h260v62h-88a22 22 0 0 0-22 22h-40a22 22 0 0 0-22-22H50Z" />
      <path className="cm-mold" d="M50 188h260v-62h-88a22 22 0 0 1-22-22h-40a22 22 0 0 1-22 22H50Z" />

      {/* the cavity fills on every route */}
      <motion.path className="cm-material" d="M140 104h80a22 22 0 0 1 0 22h-80a22 22 0 0 1 0-22Z"
        initial={{ opacity: 0 }} animate={fill} transition={timing} />

      {kind === 'compression' && (
        <>
          <motion.ellipse className="cm-charge" cx="180" cy="80" rx="34" ry="18"
            initial={{ cy: 70, opacity: 1 }}
            animate={reduceMotion ? { cy: 80 } : { cy: [60, 104, 104], opacity: [1, 1, 0] }}
            transition={timing} />
          <g className="cm-arrows">
            <path d="M110 58v16M104 68l6 6 6-6" />
            <path d="M250 58v16M244 68l6 6 6-6" />
          </g>
          <text className="cm-art-text cm-art-text--dark" x="180" y="152" textAnchor="middle">Charge pressed in the cavity</text>
        </>
      )}

      {kind === 'transfer' && (
        <>
          <rect className="cm-pot" x="150" y="40" width="60" height="42" rx="4" />
          <motion.rect className="cm-plunger" x="158" y="20" width="44" height="22" rx="3"
            initial={{ y: 0 }} animate={reduceMotion ? { y: 0 } : { y: [0, 30, 0] }} transition={timing} />
          <motion.rect className="cm-charge" x="156" y="52" width="48" height="26" rx="3"
            initial={{ opacity: 1 }} animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0.2, 1] }} transition={timing} />
          <path className="cm-runner" d="M180 82v22" />
          <text className="cm-art-text cm-art-text--dark" x="180" y="152" textAnchor="middle">Pushed through the runner</text>
        </>
      )}

      {kind === 'injection' && (
        <>
          <rect className="cm-barrel" x="24" y="96" width="92" height="38" rx="6" />
          <path className="cm-runner" d="M116 115h24" />
          <motion.circle className="cm-shot-dot" cx="124" cy="115" r="5"
            initial={{ cx: 124 }} animate={reduceMotion ? { cx: 140 } : { cx: [118, 160, 160] }} transition={timing} />
          <text className="cm-art-text" x="70" y="120" textAnchor="middle">SCREW</text>
          <text className="cm-art-text cm-art-text--dark" x="200" y="152" textAnchor="middle">Injected through gate and runner</text>
        </>
      )}

      {kind === 'bonding' && (
        <>
          <rect className="cm-insert" x="164" y="100" width="32" height="30" rx="3" />
          <text className="cm-art-text cm-art-text--dark" x="180" y="152" textAnchor="middle">Rubber cured onto the metal insert</text>
          <g className="cm-arrows">
            <path d="M120 86v14M114 94l6 6 6-6" />
            <path d="M240 86v14M234 94l6 6 6-6" />
          </g>
        </>
      )}

      {kind === 'ptfe' && (
        <>
          <g className="cm-powder">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.circle key={i} cx={150 + (i % 4) * 20} cy={i < 4 ? 108 : 122} r="4"
                initial={{ opacity: 1 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 1, 0.15] }}
                transition={{ ...timing, delay: i * 0.05 }} />
            ))}
          </g>
          <g className="cm-heat">
            <path d="M92 150c0-12 9-12 9-24s-9-12-9-24" />
            <path d="M268 150c0-12 9-12 9-24s-9-12-9-24" />
          </g>
          <text className="cm-art-text cm-art-text--dark" x="180" y="170" textAnchor="middle">Powder pressed, then sintered</text>
        </>
      )}
    </svg>
  );
}

function Processes({ onZoom }) {
  const [active, setActive] = useState(processes[0].key);
  const reduceMotion = useReducedMotion();
  const item = processes.find((p) => p.key === active);

  return (
    <div className="cm-process">
      <div className="cm-process-art">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <MoldArt kind={active} reduceMotion={reduceMotion} />
          </motion.div>
        </AnimatePresence>
        {item.photo && (
          <button type="button" className="cm-shot cm-shot--small" onClick={() => onZoom({ src: IMAGES[item.photo], alt: item.name })}>
            <img src={IMAGES[item.photo]} alt={item.name} loading="lazy" />
            <span>{item.name} in the shop</span>
          </button>
        )}
      </div>

      <div className="cm-process-body">
        <ol className="cm-process-rail" role="tablist" aria-label="Molding processes">
          {processes.map((p) => (
            <li key={p.key}>
              <button type="button" role="tab" aria-selected={p.key === active} onClick={() => setActive(p.key)}>
                <b>{p.number}</b>
                {p.name}
              </button>
            </li>
          ))}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            className="cm-process-copy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{item.name}</h3>
            <p className="cm-process-sub">{item.subtitle}</p>
            <p>{item.text}</p>
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            <p className="cm-uses cm-uses--light"><strong>Typical applications:</strong> {item.uses}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** 03 - the material matcher: pick what matters and the six re-order. */
function MaterialMatcher({ onZoom }) {
  const [trait, setTrait] = useState('chemical');
  const [open, setOpen] = useState(materials[0].key);
  const ranked = [...materials].sort((a, b) => b.traits[trait] - a.traits[trait]);

  return (
    <div className="cm-materials">
      <div className="cm-matcher" role="tablist" aria-label="What matters most">
        <span>What matters most?</span>
        {materialTraits.map((t) => (
          <button key={t.key} type="button" role="tab" aria-selected={t.key === trait} onClick={() => setTrait(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="cm-material-list">
        {ranked.map((m, i) => {
          const isOpen = m.key === open;
          const level = m.traits[trait];
          return (
            <motion.div
              key={m.key}
              layout
              transition={{ duration: 0.45, ease: EASE }}
              className={`cm-material${isOpen ? ' is-open' : ''}`}
            >
              <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : m.key)}>
                <em className="cm-rank">{String(i + 1).padStart(2, '0')}</em>
                <b>{m.name}</b>
                <span>{m.full}</span>
                <span className={`cm-bar cm-bar--${level}`} aria-label={`${materialTraits.find((t) => t.key === trait).label}: ${level} of 3`}><i /></span>
                <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="cm-material-body"
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
                      <p className="cm-temp"><Icon name="alert" size={16} /> <strong>Indicative range:</strong> {m.temperature}</p>
                      <p className="cm-uses"><strong>Typical use:</strong> {m.uses}</p>
                      {m.watch && <p className="mu-watch"><Icon name="alert" size={16} /> {m.watch}</p>}
                      <Link to={CONTACT} className="btn btn-navy mp-inline-btn">Request the {m.name} specification <Arrow /></Link>
                    </div>
                    {m.photo && (
                      <button type="button" className="cm-shot cm-shot--small" onClick={() => onZoom({ src: IMAGES[m.photo], alt: m.full })}>
                        <img src={IMAGES[m.photo]} alt={m.full} loading="lazy" />
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function Industries({ onZoom }) {
  return (
    <div className="cm-industries">
      {industries.map((ind, i) => (
        <Reveal key={ind.key} delay={(i % 3) * 0.06} className="cm-industry">
          {ind.photo ? (
            <button type="button" className="cm-shot cm-shot--small" onClick={() => onZoom({ src: IMAGES[ind.photo], alt: ind.title })}>
              <img src={IMAGES[ind.photo]} alt={ind.title} loading="lazy" />
            </button>
          ) : (
            <span className="mp-icon"><Icon name={ind.icon} size={20} /></span>
          )}
          <h3>{ind.title}</h3>
          <p>{ind.text}</p>
          <ul>{ind.items.map((it) => <li key={it}>{it}</li>)}</ul>
          {ind.note && <p className="cm-industry-note">{ind.note}</p>}
        </Reveal>
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
          className="cm-lightbox"
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

export default function CustomMoldedPage() {
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = 'Custom Molded Products | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page cm-page">
      <Hero />

      {/* 01 What can be molded */}
      <section className="mp-dark" id="cm-categories">
        <div className="container">
          <Head number="01" label="What can be molded" title="Six kinds of custom component" light intro={categoriesIntro} />
          <Categories onZoom={setShot} />
          <Reveal as="p" className="cm-closing-line">{categoriesClosing}</Reveal>
        </div>
      </section>

      {/* 02 How molded parts are made */}
      <section className="section mp-section" id="cm-processes">
        <div className="container">
          <Head number="02" label="Manufacturing" title="How molded parts are made" intro={processIntro} />
          <Processes onZoom={setShot} />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Which route is yours?</strong> {processClosing}</Reveal>
        </div>
      </section>

      {/* 03 Materials */}
      <section className="section mp-section mp-tint" id="cm-materials">
        <div className="container">
          <Head number="03" label="Material technology" title="The right material makes the difference" intro={materialsIntro} />
          <MaterialMatcher onZoom={setShot} />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Read this with the table.</strong> {materialsNote}</Reveal>
        </div>
      </section>

      {/* 04 What we measure */}
      <section className="section mp-section" id="cm-parameters">
        <div className="container">
          <Head number="04" label="Technical parameters" title="What gets measured, and why"
            intro="Twelve properties decide whether a molded part survives its application. Here is what each one tells an engineer." />
          <div className="cm-params">
            {parameters.map(([name, why], i) => (
              <Reveal key={name} delay={(i % 4) * 0.04} className="cm-param">
                <b>{String(i + 1).padStart(2, '0')}</b>
                <strong>{name}</strong>
                <span>{why}</span>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>No generic numbers.</strong> {parametersNote}</Reveal>
        </div>
      </section>

      {/* 05 Molded or machined */}
      <section className="section mp-section mp-tint" id="cm-compare">
        <div className="container">
          <Head number="05" label="Molded or machined" title="Choosing the right manufacturing method"
            intro="Molding and machining both produce custom polymer and elastomer components. Which one suits your part depends on geometry, material, quantity, tolerances and economics." />
          <div className="mu-table cm-table">
            <div className="mu-table-head cm-row3"><span>Parameter</span><span>Molded</span><span>Machined</span></div>
            {compareRows.map(([p, m, c]) => (
              <div key={p} className="cm-row3">
                <span>{p}</span>
                <span data-label="Molded">{m}</span>
                <span data-label="Machined">{c}</span>
              </div>
            ))}
          </div>
          <div className="cm-choose">
            <Reveal className="cm-choose-card">
              <h3>Choose molding when</h3>
              <ul className="mp-checks">
                {chooseMolding.map((c) => <li key={c}><span><Icon name="check" size={14} /></span>{c}</li>)}
              </ul>
            </Reveal>
            <Reveal className="cm-choose-card cm-choose-card--alt">
              <h3>Choose machining when</h3>
              <ul className="mp-checks">
                {chooseMachining.map((c) => <li key={c}><span><Icon name="check" size={14} /></span>{c}</li>)}
              </ul>
              <Link to={MACHINED} className="btn btn-navy mp-inline-btn">View machined products <Arrow /></Link>
            </Reveal>
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Neither is universally better.</strong> {compareNote}</Reveal>
        </div>
      </section>

      {/* 06 Industries */}
      <section className="mp-dark" id="cm-industries">
        <div className="container">
          <Head number="06" label="Industries" title="Where these parts are used" light
            intro="Custom molded components exist because standard products do not always satisfy a specific equipment design, sealing requirement or environment." />
          <Industries onZoom={setShot} />
        </div>
      </section>

      {/* 07 From drawing to delivery */}
      <section className="section mp-section" id="cm-steps">
        <div className="container">
          <Head number="07" label="How we work" title="From drawing to delivery"
            intro="A structured route from your requirement to a finished component, with approval before anything is tooled." />
          <ol className="cm-steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 0.07}>
                <b>{s.number}</b>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 08 What to send us */}
      <section className="section mp-section mp-tint" id="cm-send">
        <div className="container mp-split">
          <div>
            <Head number="08" label="What to send us" title="The more we know, the better the part"
              intro="The more we understand about your part and its application, the better we can evaluate the right material, method and manufacturing requirements." />
            <div className="cm-formats">
              <h3>Accepted formats</h3>
              <ul>{fileFormats.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
            <p className="mu-watch"><Icon name="alert" size={16} /> {checklistNote}</p>
            <div className="cm-send-actions">
              <Link to={APPLICATION_DATA} className="btn btn-navy">Send your drawing <Arrow /></Link>
              <Link to="/book-a-meeting" className="btn mp-btn-outline">Book a meeting</Link>
            </div>
          </div>
          <Reveal className="cm-checklist-card">
            <h3>Information checklist</h3>
            <ol>
              {checklist.map((c, i) => (
                <li key={c}><b>{String(i + 1).padStart(2, '0')}</b>{c}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 09 Why Mithson */}
      <section className="section mp-section" id="cm-why">
        <div className="container">
          <Head number="09" label="Why Mithson" title="Your engineering partner for custom components" />
          <div className="cm-why">
            {whyMithson.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 0.05} className="mp-card">
                <span className="mp-icon"><Icon name={w.icon} size={20} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 FAQ */}
      <section className="section mp-section mp-tint" id="cm-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="10" label="FAQ" title="Common questions"
            intro="General guidance only. Our engineers confirm the right material and method for each project." />
          <Faqs />
        </div>
      </section>

      {/* 11 CTA */}
      <section className="mp-cta" id="cm-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">11 — Engineering review</span>
            <h2>{closing[0]}</h2>
            <p>{closing[1]}</p>
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={APPLICATION_DATA} className="btn btn-white">Send your drawing <Arrow /></Link>
            <Link to={CONTACT} className="btn mp-btn-ghost">Get in touch <Arrow /></Link>
          </div>
        </div>
      </section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </div>
  );
}

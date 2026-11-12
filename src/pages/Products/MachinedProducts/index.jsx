import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { customManufacturing } from '../../../content/customManufacturing';
import {
  categories,
  categoriesIntro,
  checklist,
  checklistNote,
  closing,
  compareNote,
  compareRows,
  faqs,
  heroChips,
  heroSpecs,
  heroTags,
  industries,
  materialAxes,
  materials,
  materialsIntro,
  materialsNote,
  mpHero,
  parameters,
  parametersNote,
  processIntro,
  processNote,
  processSteps,
  steps,
} from '../../../content/machinedProducts';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './MachinedProducts.css';

// supporting photographs for the new sections
import imgStockPtfe from '../CustomManufacturing/assets/machined/stock-ptfe.webp';
import imgStockPeek from '../CustomManufacturing/assets/machined/stock-peek.png';
import imgStockPom from '../CustomManufacturing/assets/machined/stock-pom.png';
import imgTurning from '../CustomManufacturing/assets/machined/cnc-turning.webp';
import imgMillingPeek from '../CustomManufacturing/assets/machined/cnc-milling-peek.webp';
import imgMillingCad from '../CustomManufacturing/assets/machined/cnc-milling-cad.webp';
import imgDrilling from '../CustomManufacturing/assets/machined/cnc-drilling.png';
import imgInspection from '../CustomManufacturing/assets/machined/inspection.png';
import imgPtfeWhite from '../CustomManufacturing/assets/machined/parts-ptfe-white.png';
import imgPeekRange from '../CustomManufacturing/assets/machined/parts-peek-range.webp';
import imgFilledPtfe from '../CustomManufacturing/assets/machined/parts-filled-ptfe.webp';
import imgPfa from '../CustomManufacturing/assets/machined/parts-pfa.png';
import imgPomGears from '../CustomManufacturing/assets/machined/parts-pom-gears.webp';
import imgNylonBushes from '../CustomManufacturing/assets/machined/parts-nylon-bushes.png';
import imgUhmwStrips from '../CustomManufacturing/assets/machined/parts-uhmw-strips.webp';
import imgCustomBlocks from '../CustomManufacturing/assets/machined/parts-custom-blocks.webp';
import imgBushesBlack from '../CustomManufacturing/assets/machined/parts-bushes-black.png';
import imgWearRing from '../CustomManufacturing/assets/machined/parts-wear-ring.png';
import imgSemiconductor from '../CustomManufacturing/assets/machined/ind-semiconductor.webp';
import imgTransmission from '../CustomManufacturing/assets/machined/ind-transmission.webp';

const IMAGES = {
  'stock-ptfe': imgStockPtfe,
  'stock-peek': imgStockPeek,
  'stock-pom': imgStockPom,
  'cnc-turning': imgTurning,
  'cnc-milling-peek': imgMillingPeek,
  'cnc-milling-cad': imgMillingCad,
  'cnc-drilling': imgDrilling,
  inspection: imgInspection,
  'parts-ptfe-white': imgPtfeWhite,
  'parts-peek-range': imgPeekRange,
  'parts-filled-ptfe': imgFilledPtfe,
  'parts-pfa': imgPfa,
  'parts-pom-gears': imgPomGears,
  'parts-nylon-bushes': imgNylonBushes,
  'parts-uhmw-strips': imgUhmwStrips,
  'parts-custom-blocks': imgCustomBlocks,
  'parts-bushes-black': imgBushesBlack,
  'parts-wear-ring': imgWearRing,
  'ind-semiconductor': imgSemiconductor,
  'ind-transmission': imgTransmission,
};

// the existing hero image stays exactly as it is
const product = customManufacturing['machined-products'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';
const MOLDED = '/products/custom-molded-products';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  lathe: <><rect x="2" y="9" width="6" height="8" rx="1.5" /><rect x="8" y="11" width="10" height="4" rx="1" /><path d="M20 4v7l-3 2" /><path d="M2 21h20" /></>,
  caliper: <><path d="M5 3v18M19 3v18" /><path d="M5 8h14M9 8v4M15 8v4" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  car: <><path d="M4 16v-3l2-5h12l2 5v3" /><path d="M3 16h18v3h-3v-3M6 19H3v-3" /><circle cx="7.5" cy="16" r="1.4" /><circle cx="16.5" cy="16" r="1.4" /></>,
  pharma: <><rect x="3" y="8" width="18" height="12" rx="3" /><path d="M9 8V5h6v3M12 11v6M9 14h6" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>,
  mine: <><path d="M3 20h18" /><path d="m6 20 6-12 6 12" /><path d="M9 14h6" /></>,
  plane: <path d="M10 20h4l-1-6 8 2v-3l-8-4V4a2 2 0 0 0-4 0v5l-8 4v3l8-2z" />,
  robot: <><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9 16h6" /><circle cx="12" cy="3" r="1.4" /></>,
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
    <section ref={ref} className="mp-hero mc-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{mpHero.label}</span>
          <h1>
            {mpHero.title}
            <span>{mpHero.titleAccent}</span>
            {mpHero.titleRest}
          </h1>
          <p>{mpHero.lead}</p>
          <p className="mc-hero-sub">{mpHero.lead2}</p>
          <ul className="mc-tags">
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

/**
 * 02 - the signature of this page: one blank that really loses material as you
 * step through the operations, instead of five separate pictures of machines.
 */
function BlankArt({ step, reduceMotion }) {
  const at = (k) => processSteps.findIndex((s) => s.key === k);
  const i = at(step);
  const turned = i >= at('turning');
  const milled = i >= at('milling');
  const drilled = i >= at('drilling');
  const bored = i >= at('boring');
  const done = i >= at('inspection');
  const t = { duration: reduceMotion ? 0 : 0.6, ease: EASE };

  return (
    <svg viewBox="0 0 340 200" role="img" aria-label={`Polymer blank after ${step}`}>
      {/* the blank: a rod that turns down to a bush */}
      <motion.rect
        className="mc-blank"
        x="90"
        rx="4"
        y={turned ? 56 : 40}
        height={turned ? 88 : 120}
        width="160"
        initial={{ y: turned ? 56 : 40, height: turned ? 88 : 120 }}
        animate={{ y: turned ? 56 : 40, height: turned ? 88 : 120 }}
        transition={t}
      />

      {/* the shoulder turning leaves behind */}
      <AnimatePresence>
        {turned && (
          <motion.rect className="mc-blank" x="90" y="44" width="34" height="112" rx="4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={t} />
        )}
      </AnimatePresence>

      {/* milled slot across the top */}
      <AnimatePresence>
        {milled && (
          <motion.rect className="mc-cut" x="150" y="56" width="44" height="18" rx="3"
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 18 }} exit={{ opacity: 0 }} transition={t} />
        )}
      </AnimatePresence>

      {/* drilled holes */}
      <AnimatePresence>
        {drilled && (
          <motion.g className="mc-cut" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={t}>
            <circle cx="214" cy="78" r="8" />
            <circle cx="214" cy="122" r="8" />
          </motion.g>
        )}
      </AnimatePresence>

      {/* the bore through the middle */}
      <AnimatePresence>
        {bored && (
          <motion.rect className="mc-cut" x="90" y="88" rx="3" height="24"
            initial={{ width: 0 }} animate={{ width: 160 }} exit={{ width: 0 }} transition={t} />
        )}
      </AnimatePresence>

      {/* the cutting tool, parked until the part is finished */}
      <AnimatePresence>
        {!done && (
          <motion.g className="mc-tool"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: reduceMotion ? 0 : [0, -6, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.4, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}>
            <path d="M286 30v38l-10 12h20l-10-12" />
          </motion.g>
        )}
      </AnimatePresence>

      {/* the caliper, once it is measured */}
      <AnimatePresence>
        {done && (
          <motion.g className="mc-gauge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={t}>
            <path d="M78 36v128M262 36v128" />
            <path d="M78 36h184" />
            <text className="mc-art-text" x="170" y="28" textAnchor="middle">MEASURED TO DRAWING</text>
          </motion.g>
        )}
      </AnimatePresence>

      {/* chuck */}
      <rect className="mc-chuck" x="30" y="60" width="56" height="80" rx="6" />
      <text className="mc-art-text mc-art-text--light" x="58" y="104" textAnchor="middle">CHUCK</text>
    </svg>
  );
}

function Process({ onZoom }) {
  const [active, setActive] = useState(processSteps[0].key);
  const reduceMotion = useReducedMotion();
  const item = processSteps.find((s) => s.key === active);

  return (
    <div className="mc-process">
      <div className="mc-process-art">
        <BlankArt step={active} reduceMotion={reduceMotion} />
        <p className="mc-process-caption">One blank, five operations. Each step takes material away and never puts it back.</p>
        {item.photo && (
          <button type="button" className="mc-shot mc-shot--small" onClick={() => onZoom({ src: IMAGES[item.photo], alt: item.name })}>
            <img src={IMAGES[item.photo]} alt={item.name} loading="lazy" />
            <span>{item.name}</span>
          </button>
        )}
      </div>

      <div className="mc-process-body">
        <ol className="mc-process-rail" role="tablist" aria-label="Machining operations">
          {processSteps.map((s) => (
            <li key={s.key}>
              <button type="button" role="tab" aria-selected={s.key === active} onClick={() => setActive(s.key)}>
                <b>{s.number}</b>
                {s.name}
              </button>
            </li>
          ))}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            className="mc-process-copy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{item.number} — {item.name}</h3>
            <p>{item.text}</p>
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** 03 - the radar: pick up to three materials and overlay their profiles. */
const RADAR_COLOURS = ['#0336a3', '#42a4ff', '#8fb8e8'];

function polygon(scores, scale = 1) {
  const n = materialAxes.length;
  return materialAxes
    .map((axis, i) => {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const r = (scores[axis.key] / 5) * 78 * scale;
      return `${(110 + r * Math.cos(angle)).toFixed(1)},${(110 + r * Math.sin(angle)).toFixed(1)}`;
    })
    .join(' ');
}

function MaterialRadar({ onZoom }) {
  const [picked, setPicked] = useState(['ptfe', 'peek']);
  const [detail, setDetail] = useState('ptfe');
  const toggle = (key) => {
    setPicked((cur) => {
      if (cur.includes(key)) return cur.length === 1 ? cur : cur.filter((k) => k !== key);
      return cur.length >= 3 ? [...cur.slice(1), key] : [...cur, key];
    });
    setDetail(key);
  };
  const shown = picked.map((k) => materials.find((m) => m.key === k)).filter(Boolean);
  const item = materials.find((m) => m.key === detail) ?? shown[0];

  return (
    <div className="mc-materials">
      <div className="mc-material-pills" role="group" aria-label="Materials to compare">
        {materials.map((m) => (
          <button key={m.key} type="button" aria-pressed={picked.includes(m.key)} onClick={() => toggle(m.key)}>
            <b>{m.name}</b>
            <span>{m.strength}</span>
          </button>
        ))}
      </div>

      <div className="mc-radar-grid">
        <div className="mc-radar">
          {/* the box is wider than the chart so the longest axis labels are not clipped */}
            <svg viewBox="-48 -10 316 240" role="img" aria-label="Material comparison, six properties">
            {/* rings */}
            {[0.25, 0.5, 0.75, 1].map((s) => (
              <polygon key={s} className="mc-radar-ring" points={polygon({ chemical: 5, temperature: 5, strength: 5, wear: 5, friction: 5, stability: 5 }, s)} />
            ))}
            {/* spokes */}
            {materialAxes.map((axis, i) => {
              const angle = (Math.PI * 2 * i) / materialAxes.length - Math.PI / 2;
              return <line key={axis.key} className="mc-radar-spoke" x1="110" y1="110" x2={110 + 78 * Math.cos(angle)} y2={110 + 78 * Math.sin(angle)} />;
            })}
            {/* one shape per picked material */}
            {shown.map((m, i) => (
              <motion.polygon
                key={m.key}
                className="mc-radar-shape"
                points={polygon(m.scores)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                style={{ fill: RADAR_COLOURS[i], stroke: RADAR_COLOURS[i] }}
              />
            ))}
            {/* axis labels */}
            {materialAxes.map((axis, i) => {
              const angle = (Math.PI * 2 * i) / materialAxes.length - Math.PI / 2;
              const x = 110 + 92 * Math.cos(angle);
              const y = 110 + 92 * Math.sin(angle);
              return (
                <text key={axis.key} className="mc-radar-label" x={x} y={y}
                  textAnchor={Math.abs(x - 110) < 6 ? 'middle' : x > 110 ? 'start' : 'end'}
                  dominantBaseline="middle">
                  {axis.label}
                </text>
              );
            })}
          </svg>
          <ul className="mc-radar-key">
            {shown.map((m, i) => (
              <li key={m.key}><span style={{ background: RADAR_COLOURS[i] }} /> {m.name}</li>
            ))}
          </ul>
          <p className="mc-radar-note">Pick up to three. A fourth replaces the oldest.</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            className="mc-material-detail"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{item.name}</h3>
            <p className="mc-material-full">{item.full}</p>
            <p>{item.text}</p>
            <ul className="mp-checks">
              {item.points.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
            </ul>
            <p className="mc-temp"><Icon name="alert" size={16} /> <strong>Indicative reference:</strong> {item.temperature}</p>
            {item.watch && <p className="mu-watch"><Icon name="alert" size={16} /> {item.watch}</p>}
            <p className="mc-uses"><strong>Typical applications:</strong> {item.uses}</p>
            <div className="mc-material-shots">
              <button type="button" className="mc-shot mc-shot--small" onClick={() => onZoom({ src: IMAGES[item.photo], alt: `${item.name} components` })}>
                <img src={IMAGES[item.photo]} alt={`${item.name} components`} loading="lazy" />
                <span>Finished components</span>
              </button>
              {item.stock && (
                <button type="button" className="mc-shot mc-shot--small" onClick={() => onZoom({ src: IMAGES[item.stock], alt: `${item.name} stock material` })}>
                  <img src={IMAGES[item.stock]} alt={`${item.name} stock material`} loading="lazy" />
                  <span>Stock material</span>
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
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
          className="mc-lightbox"
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

export default function MachinedProductsPage() {
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = 'Machined Products, Precision Polymer Components | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page mc-page">
      <Hero />

      {/* 01 What can be machined */}
      <section className="section mp-section" id="mc-categories">
        <div className="container">
          <Head number="01" label="What can be machined" title="Eight kinds of component" intro={categoriesIntro} />
          <div className="mc-cats">
            {categories.map((c, i) => (
              <Reveal key={c.key} delay={(i % 4) * 0.05} className="mc-cat">
                <button type="button" className="mc-shot" onClick={() => setShot({ src: IMAGES[c.photo], alt: c.name })}>
                  <img src={IMAGES[c.photo]} alt={c.name} loading="lazy" />
                </button>
                <b>{c.number}</b>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <ul>{c.uses.map((u) => <li key={u}>{u}</li>)}</ul>
                <p className="mc-cat-mat"><strong>Usual materials:</strong> {c.materials}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 How machined parts are made */}
      <section className="mp-dark" id="mc-process">
        <div className="container">
          <Head number="02" label="Manufacturing" title="How machined parts are made" light intro={processIntro} />
          <Process onZoom={setShot} />
          <Reveal as="p" className="mc-note"><Icon name="alert" size={18} /> <strong>Polymer is not metal.</strong> {processNote}</Reveal>
        </div>
      </section>

      {/* 03 Materials */}
      <section className="section mp-section" id="mc-materials">
        <div className="container">
          <Head number="03" label="Material technology" title="Selecting the right polymer" intro={materialsIntro} />
          <MaterialRadar onZoom={setShot} />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Read this with the chart.</strong> {materialsNote}</Reveal>
        </div>
      </section>

      {/* 04 Molded or machined */}
      <section className="section mp-section mp-tint" id="mc-compare">
        <div className="container">
          <Head number="04" label="Molded or machined" title="Understanding the right method"
            intro="Molded and machined polymer components answer different manufacturing problems. The choice depends on geometry, quantity, tooling investment, material availability, dimensions and complexity." />
          <div className="mu-table mc-table">
            <div className="mu-table-head mc-row3"><span>Parameter</span><span>Molded</span><span>Machined</span></div>
            {compareRows.map(([p, m, c]) => (
              <div key={p} className="mc-row3">
                <span>{p}</span>
                <span data-label="Molded">{m}</span>
                <span data-label="Machined">{c}</span>
              </div>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Often it is both.</strong> {compareNote}</Reveal>
          <Reveal>
            <Link to={MOLDED} className="btn btn-navy mp-inline-btn">View custom molded products <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* 05 Industries */}
      <section className="mp-dark" id="mc-industries">
        <div className="container">
          <Head number="05" label="Industries" title="Where these components are used" light
            intro="Precision polymer components wherever reliability, chemical compatibility, dimensional precision and wear performance decide whether the equipment keeps running." />
          <div className="mc-industries">
            {industries.map((ind, i) => (
              <Reveal key={ind.key} delay={(i % 4) * 0.05} className="mc-industry">
                {ind.photo ? (
                  <button type="button" className="mc-shot mc-shot--small" onClick={() => setShot({ src: IMAGES[ind.photo], alt: ind.title })}>
                    <img src={IMAGES[ind.photo]} alt={ind.title} loading="lazy" />
                  </button>
                ) : (
                  <span className="mp-icon"><Icon name={ind.icon} size={20} /></span>
                )}
                <h3>{ind.title}</h3>
                <ul>{ind.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Engineering parameters */}
      <section className="section mp-section" id="mc-parameters">
        <div className="container">
          <Head number="06" label="Engineering parameters" title="Precision is more than dimensions"
            intro="Twelve properties decide whether a machined polymer component performs. Here is what each one tells an engineer." />
          <div className="mc-params">
            {parameters.map(([name, why], i) => (
              <Reveal key={name} delay={(i % 4) * 0.04} className="mc-param">
                <b>{String(i + 1).padStart(2, '0')}</b>
                <strong>{name}</strong>
                <span>{why}</span>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>No generic numbers.</strong> {parametersNote}</Reveal>
        </div>
      </section>

      {/* 07 From drawing to delivery */}
      <section className="section mp-section mp-tint" id="mc-steps">
        <div className="container">
          <Head number="07" label="How we work" title="From drawing to delivery"
            intro="A structured route from your requirement to a finished component, with approval before any material is cut." />
          <ol className="mc-steps">
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
      <section className="section mp-section" id="mc-send">
        <div className="container mp-split">
          <div>
            <Head number="08" label="What to send us" title="Help us understand your component" intro={checklistNote} />
            <div className="mc-send-actions">
              <Link to={APPLICATION_DATA} className="btn btn-navy">Send your drawing <Arrow /></Link>
              <Link to="/book-a-meeting" className="btn mp-btn-outline">Book a meeting</Link>
            </div>
            <Reveal className="mc-specs">
              <h3 className="mp-subhead">At a glance</h3>
              <div className="mu-table">
                <div className="mu-table-head"><span>Parameter</span><span>Detail</span></div>
                {heroSpecs.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}
              </div>
            </Reveal>
          </div>
          <Reveal className="mc-checklist-card">
            <h3>Information checklist</h3>
            <ol>
              {checklist.map((c, i) => (
                <li key={c}><b>{String(i + 1).padStart(2, '0')}</b>{c}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 09 FAQ */}
      <section className="section mp-section mp-tint" id="mc-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="09" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Our engineers confirm the right material and process for each component." />
          <Faqs />
        </div>
      </section>

      {/* 10 CTA */}
      <section className="mp-cta" id="mc-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">10 — Engineering review</span>
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

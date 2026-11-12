import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { products as allProducts, getProductBySlug } from '../../../content/products';
import {
  applications,
  applicationsNote,
  chemFactors,
  chemIntro,
  chemNote,
  closing,
  configNote,
  configurations,
  construction,
  coreCompare,
  coreNote,
  cores,
  customAsks,
  customOptions,
  eoHero,
  faqs,
  fepIntro,
  fepProperties,
  fepWarning,
  heroCaveat,
  heroChips,
  heroSpecs,
  heroTags,
  installSteps,
  installWarning,
  maintenance,
  overviewIntro,
  overviewTogether,
  pressureFactors,
  pressureNote,
  qualityChecklist,
  qualityNote,
  qualityParams,
  tempNote,
  tempRows,
  whyMithson,
  workingFactors,
  workingIntro,
  workingStages,
} from '../../../content/encapsulatedORing';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './EncapsulatedORing.css';

// existing product photograph - kept exactly as it is
import imgHero from './assets/Encapsulated O-Ring.png';
// supporting images added for the new sections
import refCores from './assets/ref/cores-fep-silicone-fkm.png';
import refSilicone from './assets/ref/silicone-core.png';
import refFkm from './assets/ref/fkm-core.png';
import refRings from './assets/ref/rings-group.png';
import refPharma from './assets/ref/pharma-cleanroom.webp';
import refProcess from './assets/ref/process-equipment.webp';

const IMAGES = {
  hero: imgHero,
  cores: refCores,
  silicone: refSilicone,
  fkm: refFkm,
  rings: refRings,
  pharma: refPharma,
  process: refProcess,
};

const product = getProductBySlug('encapsulated-o-ring');
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  thermo: <><path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0Z" /><path d="M12 9v5" /></>,
  gauge: <><path d="M12 21a9 9 0 1 0-9-9" /><path d="M3 12h3M12 3v3M19.5 6.5 17 9M12 12l5-3" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  slide: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  drop: <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  pharma: <><rect x="3" y="8" width="18" height="12" rx="3" /><path d="M9 8V5h6v3M12 11v6M9 14h6" /></>,
  food: <><path d="M5 3v8a3 3 0 0 0 6 0V3M8 11v10" /><path d="M17 3c-2 2-2 6 0 8v10" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  lab: <><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></>,
  valve: <><circle cx="12" cy="12" r="4" /><path d="M12 3v5M12 16v5M3 12h5M16 12h5M8 3h8M8 21h8" /></>,
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
    <section ref={ref} className="mp-hero eo-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{eoHero.label}</span>
          <h1>
            {eoHero.title}
            <span>{eoHero.titleAccent}</span>
            {eoHero.titleRest}
          </h1>
          <p>{eoHero.lead}</p>
          <p className="eo-hero-sub">{eoHero.lead2}</p>
          <ul className="eo-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#eo-cores" className="btn btn-primary">Explore the cores <Arrow /></a>
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
            <motion.li key={c.text} variants={{ hidden: { opacity: 0, y: 18 }, shown: { opacity: 1, y: 0 } }}>
              <span className="mp-icon"><Icon name={c.icon} size={20} /></span>
              <div><strong>{c.title}</strong><span>{c.text}</span></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/** The seal cross-section, drawn in-house. `squeeze` is the percentage compression. */
function SealSection({ squeeze = 0, hollow = false, showGroove = true }) {
  // the ring is drawn as a circle that flattens as the squeeze rises
  const r = 46;
  const ry = r * (1 - squeeze / 100);
  const contact = Math.round(squeeze * 1.6);

  return (
    <svg viewBox="0 0 320 200" role="img" aria-label={`Encapsulated O-Ring at ${squeeze}% squeeze`}>
      {showGroove && (
        <>
          {/* housing with the groove cut into it */}
          <path className="eo-housing" d="M20 196v-40h80v-56H20V60h280v40h-80v56h80v40z" />
          {/* mating surface above */}
          <rect className="eo-mating" x="20" y="18" width="280" height="26" rx="4" />
          <text className="eo-tag" x="160" y="14" textAnchor="middle">Mating surface</text>
          <text className="eo-tag" x="60" y="186" textAnchor="middle">Housing groove</text>
        </>
      )}

      {/* the seal itself: FEP jacket outside, elastomer core inside */}
      <motion.g animate={{ y: showGroove ? 0 : 0 }}>
        <motion.ellipse className="eo-jacket" cx="160" cy="100" rx={r} ry={ry} initial={{ ry }} animate={{ ry }} transition={{ duration: 0.5, ease: EASE }} />
        <motion.ellipse className="eo-core" cx="160" cy="100" rx={r - 11} ry={Math.max(ry - 11, 4)} initial={{ ry: Math.max(ry - 11, 4) }} animate={{ ry: Math.max(ry - 11, 4) }} transition={{ duration: 0.5, ease: EASE }} />
        {hollow && (
          <motion.ellipse className="eo-cavity" cx="160" cy="100" rx={16} ry={Math.max(16 * (1 - squeeze / 100), 3)} initial={{ ry: Math.max(16 * (1 - squeeze / 100), 3) }} animate={{ ry: Math.max(16 * (1 - squeeze / 100), 3) }} transition={{ duration: 0.5, ease: EASE }} />
        )}
      </motion.g>

      {/* contact bands grow with the squeeze */}
      <AnimatePresence>
        {contact > 0 && (
          <motion.g className="eo-contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.rect x={160 - contact} width={contact * 2} height="5" rx="2.5" y={100 - ry - 2} initial={{ y: 100 - ry - 2 }} animate={{ y: 100 - ry - 2 }} transition={{ duration: 0.5, ease: EASE }} />
            <motion.rect x={160 - contact} width={contact * 2} height="5" rx="2.5" y={100 + ry - 3} initial={{ y: 100 + ry - 3 }} animate={{ y: 100 + ry - 3 }} transition={{ duration: 0.5, ease: EASE }} />
          </motion.g>
        )}
      </AnimatePresence>

      {/* compression arrows */}
      {showGroove && squeeze > 0 && (
        <g className="eo-force">
          <path d="M160 48v12M154 54l6 6 6-6" />
          <path d="M160 152v-12M154 146l6-6 6 6" />
        </g>
      )}
    </svg>
  );
}

/** 01 - the two layers, side by side with a drawn cross-section. */
function Construction({ onZoom }) {
  return (
    <div className="eo-construction">
      <div className="eo-construction-art">
        <SealSection squeeze={0} showGroove={false} />
        <ul className="eo-legend">
          <li><span className="eo-key eo-key--jacket" /> FEP jacket</li>
          <li><span className="eo-key eo-key--core" /> Elastomeric core</li>
        </ul>
      </div>
      <div className="eo-construction-cards">
        {construction.map((c, i) => (
          <Reveal key={c.key} delay={i * 0.08} className="mp-card eo-construction-card">
            <b>{c.number}</b>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </Reveal>
        ))}
        <Reveal delay={0.16} className="eo-together">
          <p>{overviewTogether}</p>
          <button type="button" className="eo-shot eo-shot--wide" onClick={() => onZoom({ src: refCores, alt: 'FEP jacket over silicone and FKM cores' })}>
            <img src={refCores} alt="FEP jacket over silicone and FKM cores" loading="lazy" />
            <span>The jacket, with a silicone core and an FKM core</span>
          </button>
        </Reveal>
      </div>
    </div>
  );
}

/** 02 - the two cores, picked one at a time. */
function Cores({ onZoom }) {
  const [active, setActive] = useState(cores[0].key);
  const item = cores.find((c) => c.key === active);
  return (
    <>
      <div className="eo-picks" role="tablist" aria-label="Core materials">
        {cores.map((c) => (
          <button key={c.key} type="button" role="tab" aria-selected={c.key === active} onClick={() => setActive(c.key)}>
            <b>{c.number}</b>
            <span>{c.name}</span>
            <i>{c.job}</i>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="eo-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="eo-panel-photos">
            <button type="button" className="eo-shot" onClick={() => onZoom({ src: IMAGES[item.photo], alt: item.name })}>
              <img src={IMAGES[item.photo]} alt={item.name} />
              <span>{item.short}</span>
            </button>
            <button type="button" className="eo-shot eo-shot--small" onClick={() => onZoom({ src: IMAGES[item.detail], alt: `${item.name} detail` })}>
              <img src={IMAGES[item.detail]} alt={`${item.name} detail`} loading="lazy" />
              <span>In the hand</span>
            </button>
          </div>
          <div className="eo-panel-body">
            <h3>{item.name}</h3>
            <p className="eo-sub">{item.subtitle}</p>
            <p className="eo-temp"><Icon name="thermo" size={18} /> {item.temperature}</p>
            <p>{item.text}</p>
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            <div className="eo-gains">
              <strong>What it does for you</strong>
              <ul>{item.gains.map((g) => <li key={g}>{g}</li>)}</ul>
            </div>
            <div className="eo-choose">
              <strong>Choose this core when</strong>
              <ul>{item.choose.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <p className="eo-uses"><strong>Applications:</strong> {item.uses}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Enquire about the {item.short.toLowerCase()} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/**
 * 04 - the signature of this page: a groove cross-section driven by a squeeze slider,
 * so you can see the core flatten and the contact band widen as compression rises.
 */
function Working() {
  const [squeeze, setSqueeze] = useState(0);
  // the stage shown is whichever one the current squeeze has reached
  const stage = [...workingStages].reverse().find((s) => squeeze >= s.squeeze) ?? workingStages[0];

  return (
    <div className="eo-working">
      <div className="eo-working-art">
        <SealSection squeeze={squeeze} />
        <label className="eo-slider">
          <span>Squeeze <b>{squeeze}%</b></span>
          <input
            type="range"
            min="0"
            max="30"
            step="1"
            value={squeeze}
            onChange={(e) => setSqueeze(Number(e.target.value))}
            aria-label="Seal squeeze percentage"
          />
        </label>
        <div className="eo-working-jump">
          {workingStages.map((s) => (
            <button key={s.key} type="button" aria-pressed={stage.key === s.key} onClick={() => setSqueeze(s.squeeze)}>
              <b>{s.number}</b>{s.title}
            </button>
          ))}
        </div>
      </div>

      <div className="eo-working-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{stage.number} — {stage.title}</h3>
            <p>{stage.text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="eo-factors">
          <h4>What the designer has to get right</h4>
          <ul>{workingFactors.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

/** 05 - solid against hollow, with the cavity drawn in. */
function Configurations() {
  const [kind, setKind] = useState('solid');
  const item = configurations.find((c) => c.key === kind);
  return (
    <div className="eo-config">
      <div className="eo-config-art">
        <SealSection squeeze={14} hollow={kind === 'hollow'} showGroove={false} />
        <div className="eo-config-switch">
          {configurations.map((c) => (
            <button key={c.key} type="button" aria-pressed={kind === c.key} onClick={() => setKind(c.key)}>{c.name}</button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="eo-config-body"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{item.name}</h3>
          <p className="eo-sub eo-sub--light">{item.subtitle}</p>
          <p>{item.text}</p>
          <ul className="mp-checks">
            {item.points.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
          </ul>
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
          className="eo-lightbox"
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

export default function EncapsulatedORingPage() {
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = 'FEP Encapsulated O-Rings, Silicone & FKM Cores | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page eo-page">
      <Hero />

      {/* 01 Construction */}
      <section className="section mp-section" id="eo-construction">
        <div className="container">
          <Head number="01" label="Construction" title="Two materials, one sealing solution" intro={overviewIntro} />
          <Construction onZoom={setShot} />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Before you read any figure here.</strong> {heroCaveat}</Reveal>
        </div>
      </section>

      {/* 02 The cores */}
      <section className="mp-dark" id="eo-cores">
        <div className="container">
          <Head number="02" label="Core materials" title="Choose the right core for your environment" light
            intro="The internal core decides the temperature flexibility, the compression recovery and the sealing force. Pick one to see it in full." />
          <Cores onZoom={setShot} />
          <Reveal className="eo-compare">
            <h3>Silicone against FKM</h3>
            <div className="eo-compare-table">
              <div className="eo-compare-head"><span /><span>Silicone core</span><span>FKM / Viton core</span></div>
              {coreCompare.map(([p, s, f]) => (
                <div key={p} className="eo-compare-row">
                  <span>{p}</span>
                  <span data-label="Silicone">{s}</span>
                  <span data-label="FKM / Viton">{f}</span>
                </div>
              ))}
            </div>
            <p className="mu-watch"><Icon name="alert" size={16} /> {coreNote}</p>
          </Reveal>
        </div>
      </section>

      {/* 03 FEP */}
      <section className="section mp-section" id="eo-fep">
        <div className="container">
          <Head number="03" label="Material technology" title="Understanding FEP" intro={fepIntro} />
          <div className="eo-props">
            {fepProperties.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06} className="eo-prop">
                <span className="mp-icon"><Icon name={p.icon} size={20} /></span>
                <b>{p.number}</b>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>FEP is not a perfect barrier.</strong> {fepWarning}</Reveal>
        </div>
      </section>

      {/* 04 How it seals */}
      <section className="section mp-section mp-tint" id="eo-working">
        <div className="container">
          <Head number="04" label="Working principle" title="How an encapsulated O-Ring seals" intro={workingIntro} />
          <Working />
        </div>
      </section>

      {/* 05 Solid and hollow */}
      <section className="section mp-section" id="eo-config">
        <div className="container">
          <Head number="05" label="Core configurations" title="Solid core and hollow core"
            intro="Two internal configurations for different sealing loads. Switch between them to see the difference." />
          <Configurations />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Not interchangeable.</strong> {configNote}</Reveal>
        </div>
      </section>

      {/* 06 Temperature and pressure */}
      <section className="section mp-section mp-tint" id="eo-limits">
        <div className="container">
          <Head number="06" label="Temperature & pressure" title="What the numbers actually mean"
            intro="Two published temperature ranges, one typical pressure reference, and the conditions each of them depends on." />
          <div className="eo-limits">
            <Reveal>
              <h3 className="mp-subhead">Temperature</h3>
              <div className="mu-table">
                <div className="mu-table-head"><span>Construction</span><span>Temperature range</span></div>
                {tempRows.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}
              </div>
              <p className="mu-watch"><Icon name="alert" size={16} /> {tempNote}</p>
            </Reveal>
            <Reveal>
              <h3 className="mp-subhead">Pressure</h3>
              <div className="eo-pressure">
                <strong>Up to 1,500 psi</strong>
                <span>typical application reference</span>
              </div>
              <p className="eo-pressure-lead">What the permissible pressure actually depends on:</p>
              <ul className="mp-checks">
                {pressureFactors.map((f) => <li key={f}><span><Icon name="check" size={14} /></span>{f}</li>)}
              </ul>
              <p className="mu-watch"><Icon name="alert" size={16} /> {pressureNote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 Applications */}
      <section className="mp-dark" id="eo-applications">
        <div className="container">
          <Head number="07" label="Applications" title="Reliable sealing across critical sectors" light intro={applicationsNote} />
          <div className="eo-apps">
            {applications.map((a, i) => (
              <Reveal key={a.key} delay={(i % 3) * 0.06} className="eo-app">
                {a.photo ? (
                  <button type="button" className="eo-shot eo-shot--small" onClick={() => setShot({ src: IMAGES[a.photo], alt: a.title })}>
                    <img src={IMAGES[a.photo]} alt={a.title} loading="lazy" />
                  </button>
                ) : (
                  <span className="mp-icon"><Icon name={a.icon} size={20} /></span>
                )}
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <ul>{a.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Chemical compatibility */}
      <section className="section mp-section" id="eo-chemical">
        <div className="container mp-split">
          <div>
            <Head number="08" label="Chemical compatibility" title="Choose the right seal for the medium" intro={chemIntro} />
            <p className="mu-watch"><Icon name="alert" size={16} /> {chemNote}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Send us your fluid details <Arrow /></Link>
          </div>
          <Reveal className="eo-chem-card">
            <h3>What decides compatibility</h3>
            <ol>
              {chemFactors.map((c, i) => (
                <li key={c}><b>{String(i + 1).padStart(2, '0')}</b>{c}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 09 Installation and maintenance */}
      <section className="section mp-section mp-tint" id="eo-install">
        <div className="container">
          <Head number="09" label="Installation & maintenance" title="Getting it in without damaging the jacket" intro={installWarning} />
          <ol className="eo-steps">
            {installSteps.map((s, i) => (
              <Reveal as="li" key={s.number} delay={(i % 3) * 0.06}>
                <b>{s.number}</b>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="eo-maintain">
            <h3>In service</h3>
            <ul className="mp-checks">
              {maintenance.map((m) => <li key={m}><span><Icon name="check" size={14} /></span>{m}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 10 Quality */}
      <section className="section mp-section" id="eo-quality">
        <div className="container">
          <Head number="10" label="Quality control" title="Precision manufacturing, consistent seals"
            intro="An encapsulated O-Ring is only as good as the consistency of its jacket, its core and its dimensions." />
          <div className="eo-quality-grid">
            {qualityParams.map((q, i) => (
              <Reveal key={q.title} delay={(i % 3) * 0.06} className="mp-card">
                <h3>{q.title}</h3>
                <p>{q.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="eo-checklist-wrap">
            <h3 className="mp-subhead">Inspection checklist</h3>
            <ol className="eo-checklist">
              {qualityChecklist.map((c, i) => (
                <li key={c}><b>{String(i + 1).padStart(2, '0')}</b>{c}</li>
              ))}
            </ol>
            <p className="mu-watch"><Icon name="alert" size={16} /> {qualityNote}</p>
          </Reveal>
        </div>
      </section>

      {/* 11 Custom engineering */}
      <section className="section mp-section mp-tint" id="eo-custom">
        <div className="container mp-split">
          <div>
            <Head number="11" label="Custom engineering" title="Encapsulated O-Rings for your application"
              intro="Different applications need different dimensions, materials and performance characteristics. Work starts from your drawing, sample or specification." />
            <div className="eo-options">
              <h3>What can change</h3>
              <ul>{customOptions.map((o) => <li key={o}>{o}</li>)}</ul>
            </div>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Request a custom sealing solution <Arrow /></Link>
          </div>
          <Reveal className="eo-asks-card">
            <h3>What to send us</h3>
            <ol>
              {customAsks.map((a, i) => (
                <li key={a}><b>{String(i + 1).padStart(2, '0')}</b>{a}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 12 Why Mithson */}
      <section className="section mp-section" id="eo-why">
        <div className="container">
          <Head number="12" label="Why Mithson" title="Engineered protection, reliable sealing" />
          <div className="eo-why">
            {whyMithson.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06} className="mp-card">
                <span className="mp-icon"><Icon name={w.icon} size={20} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13 At a glance */}
      <section className="section mp-section mp-tint" id="eo-specs">
        <div className="container">
          <Head number="13" label="At a glance" title="Product summary" />
          <div className="mu-table eo-table">
            <div className="mu-table-head"><span>Parameter</span><span>Specification</span></div>
            {heroSpecs.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}
          </div>
        </div>
      </section>

      {/* 14 FAQ */}
      <section className="section mp-section" id="eo-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="14" label="FAQ" title="Common questions"
            intro="General guidance only. Mithson engineers confirm the right seal for each application." />
          <Faqs />
        </div>
      </section>

      <RelatedProducts product={product} products={allProducts} />

      {/* 15 CTA */}
      <section className="mp-cta" id="eo-contact">
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
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Request a technical quotation <Arrow /></Link>
          </div>
        </div>
      </section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </div>
  );
}

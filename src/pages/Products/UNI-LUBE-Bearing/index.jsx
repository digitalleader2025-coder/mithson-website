import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { ItemSpecList } from '../../../shared/components/ProductSpecList';
import { products as allProducts, getProductBySlug } from '../../../content/products';
import { productItems } from '../../../content/productItems';
import {
  advantages,
  applications,
  applicationsNote,
  basicsBody,
  basicsIntro,
  basicsNote,
  basicsPoints,
  closing,
  comparison,
  comparisonNote,
  constructions,
  constructionsNote,
  customStages,
  documents,
  documentsNote,
  faqs,
  families,
  heroChips,
  heroTags,
  maintenance,
  pvExplainer,
  selectionSteps,
  specIntro,
  specParameters,
  troubleshooting,
  troubleshootingNote,
  ulHero,
  workingIntro,
  workingStages,
} from '../../../content/uniLubeBearing';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './UniLube.css';

// existing Mithson product photographs, unchanged
import imgHero from './assets/Main Image.png';
import imgMf from './assets/MSS-MF Self Lube - 1.png';
import imgMp from './assets/MSS-MP Pre Lube - 1.png';
import imgBim from './assets/MSS-BIM BI-Metal.png';
import imgMb from './assets/MSS-MB Solid Bush.png';
import imgMithlon from './assets/MSS-Mithlon.png';
// added construction and application photographs
import refMfPolymer from './assets/ref/mf-polymer.webp';
import refMpPockets from './assets/ref/mp-pockets.webp';
import refMpDetail from './assets/ref/mp-detail.webp';
import refBimLayers from './assets/ref/bim-layers.webp';
import refMbGraphite from './assets/ref/mb-graphite.webp';
import refMbSplit from './assets/ref/mb-split.webp';
import refInspection from './assets/ref/inspection.webp';
import refTurbine from './assets/ref/turbine.webp';

const IMAGES = {
  mf: imgMf,
  mp: imgMp,
  bim: imgBim,
  mb: imgMb,
  mithlon: imgMithlon,
  'mf-polymer': refMfPolymer,
  'mp-pockets': refMpPockets,
  'mp-detail': refMpDetail,
  'bim-layers': refBimLayers,
  'mb-graphite': refMbGraphite,
  'mb-split': refMbSplit,
};

const product = getProductBySlug('uni-lube-bearing');
const SPECS = productItems['uni-lube-bearing'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  rotate: <><path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v5h-5" /></>,
  drop: <path d="M12 3s6 6.5 6 10.5a6 6 0 0 1-12 0C6 9.5 12 3 12 3Z" />,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  slide: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  weight: <><path d="M7 8h10l3 13H4z" /><circle cx="12" cy="5" r="2.5" /></>,
  impact: <path d="M13 2 4 13h7l-1 9 10-12h-7z" />,
  wave: <path d="M3 10c3-3 6 3 9 0s6-3 9 0M3 16c3-3 6 3 9 0s6-3 9 0" />,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  gauge: <><path d="M4 18a9 9 0 1 1 16 0" /><path d="m12 13 4-4" /></>,
  lab: <><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></>,
  digger: <><path d="M3 19h18" /><path d="M5 19v-4h6v4M11 15l3-8 5 3-3 5" /><circle cx="7" cy="19" r="2" /></>,
  hydraulic: <><rect x="3" y="9" width="11" height="6" rx="1.5" /><path d="M14 12h7M18 9v6" /></>,
  leaf: <path d="M20 4c0 9-5 14-13 14 0 0-1-8 5-11 4-2 8-3 8-3Z" />,
  compressor: <><rect x="3" y="8" width="12" height="9" rx="1.5" /><path d="M15 11h3l3 3v3h-6M6 8V5h6v3" /><circle cx="9" cy="12.5" r="2" /></>,
  furnace: <><rect x="4" y="8" width="16" height="13" rx="2" /><path d="M8 8V5h8v3M9 14h6M9 18h6" /></>,
  turbine: <><circle cx="12" cy="12" r="2.5" /><path d="M12 9.5V3M14.2 13.2 20 17M9.8 13.2 4 17" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 13h6M9 17h4" /></>,
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
    <section ref={ref} className="mp-hero ul-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{ulHero.label}</span>
          <h1>
            {ulHero.title}
            <span>{ulHero.titleAccent}</span>
            {ulHero.titleRest}
          </h1>
          <p>{ulHero.lead}</p>
          <p className="ul-hero-sub">{ulHero.lead2}</p>
          <ul className="ul-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#ul-families" className="btn btn-primary">Explore bearing solutions <Arrow /></a>
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
          <img src={imgHero} alt={product.name} />
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

/** 03 — the five families, picked one at a time. */
function Families() {
  const [active, setActive] = useState(families[0].key);
  const item = families.find((f) => f.key === active);
  const spec = SPECS[item.spec];
  return (
    <>
      <div className="ul-picks" role="tablist" aria-label="Bearing families">
        {families.map((f) => (
          <button key={f.key} type="button" role="tab" aria-selected={f.key === active} onClick={() => setActive(f.key)}>
            <b>{f.number}</b>
            <span>{f.name}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="ul-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="ul-panel-visuals">
            <div className="ul-photo"><img src={IMAGES[item.photo]} alt={item.name} /></div>
            {item.detail && (
              <div className="ul-photo ul-photo--small"><img src={IMAGES[item.detail]} alt={`${item.name} construction`} loading="lazy" /></div>
            )}
          </div>
          <div className="ul-panel-body">
            <h3>{item.name}</h3>
            <em>{item.subtitle}</em>
            <p className="ul-lube"><Icon name="drop" size={16} /> {item.lube}</p>
            <p>{item.text}</p>
            {spec && <ItemSpecList spec={spec} />}
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>
            <p className="ul-uses"><strong>Applications:</strong> {item.uses}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Enquire about {item.name} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/**
 * 07 — the signature of this page: a plain-bearing cross-section where the shaft really
 * turns, oscillates or sits still, with the sliding interface picked out in accent blue.
 */
function WorkingPrinciple() {
  const [stage, setStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const item = workingStages[stage];
  const spin = stage === 1 || stage === 3;
  const oscillate = stage === 2;

  const shaftAnimation = reduceMotion || (!spin && !oscillate)
    ? { rotate: 0 }
    : spin
      ? { rotate: 360 }
      : { rotate: [-18, 18, -18] };
  const shaftTransition = reduceMotion || (!spin && !oscillate)
    ? { duration: 0 }
    : spin
      ? { duration: 6, ease: 'linear', repeat: Infinity }
      : { duration: 2.4, ease: 'easeInOut', repeat: Infinity };

  return (
    <div className="ul-working">
      <div className="ul-working-art">
        <svg viewBox="0 0 240 200" aria-label={`Plain bearing, ${item.name}`} role="img">
          {/* housing */}
          <path className="ul-housing" d="M26 40h188v120H26z" />
          {/* bearing bush */}
          <circle className="ul-bush" cx="120" cy="100" r="66" />
          {/* sliding interface */}
          <circle className="ul-interface" cx="120" cy="100" r="52" />
          {/* shaft */}
          <motion.g animate={shaftAnimation} transition={shaftTransition} style={{ transformOrigin: '120px 100px' }}>
            <circle className="ul-shaft" cx="120" cy="100" r="46" />
            <path className="ul-keyway" d="M114 56h12v14h-12z" />
            <circle className="ul-centre" cx="120" cy="100" r="4" />
          </motion.g>
          {/* radial load arrow */}
          <path className="ul-load" d="M120 10v20M112 24l8 8 8-8" />
          <text className="ul-tag" x="132" y="22">Radial load</text>
          <text className="ul-tag ul-tag--accent" x="8" y="186">Sliding interface</text>
          <path className="ul-lead" d="M60 180 86 132" />
        </svg>
      </div>

      <div className="ul-working-body">
        <div className="ul-stage-tabs" role="tablist" aria-label="Operating stage">
          {workingStages.map((s, i) => (
            <button key={s.key} type="button" role="tab" aria-selected={i === stage} onClick={() => setStage(i)}>
              {s.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={item.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </motion.div>
        </AnimatePresence>
        <ul className="mp-pills mu-pills-light ul-parts">
          <li>Housing</li>
          <li>Bearing bush</li>
          <li>Shaft</li>
          <li>Sliding surface</li>
          <li>Radial load</li>
          <li>Lubricating interface</li>
        </ul>
      </div>
    </div>
  );
}

/** 11 — the selection guide, one parameter at a time. */
function SelectionGuide() {
  const [step, setStep] = useState(0);
  const item = selectionSteps[step];
  return (
    <div className="ul-guide">
      <ol className="ul-guide-rail">
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
        <motion.div key={item.title} className="ul-guide-panel" initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <span className="ul-guide-num">{String(step + 1).padStart(2, '0')} / {selectionSteps.length}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="ul-guide-nav">
            <button type="button" onClick={() => setStep((step - 1 + selectionSteps.length) % selectionSteps.length)}>Previous</button>
            <button type="button" onClick={() => setStep((step + 1) % selectionSteps.length)}>Next parameter <Arrow /></button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Accordion({ items, render }) {
  const [open, setOpen] = useState(0);
  return (
    <ul className="mp-faqs">
      {items.map((it, i) => (
        <li key={it.title ?? it.q} className={open === i ? 'is-open' : ''}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.title ?? it.q}</span>
            <i aria-hidden="true">+</i>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                {render(it)}
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}

export default function UniLubeBearingPage() {
  useEffect(() => {
    document.title = 'Self-Lubricating Bearings & Industrial Bushings | UNI-LUBE | Mithson';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page ul-page">
      <Hero />

      {/* 01 Understanding self-lubricating bearings */}
      <section className="section mp-section" id="ul-basics">
        <div className="container mp-split">
          <div>
            <Head number="01" label="The basics" title="What are self-lubricating bearings?" intro={basicsIntro} />
            <Reveal as="p" className="ul-body">{basicsBody}</Reveal>
            <Reveal as="p" className="mp-note">{basicsNote}</Reveal>
          </div>
          <Reveal className="ul-basics-card">
            <h3>Key characteristics</h3>
            <ul className="mp-checks">
              {basicsPoints.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 02 The five families */}
      <section className="mp-dark" id="ul-families">
        <div className="container">
          <Head number="02" label="Product families" title="Explore our UNI-LUBE bearing technologies" light
            intro="Five families, each with a different construction and lubrication mechanism. Pick one to see its figures and applications." />
          <Families />
        </div>
      </section>

      {/* 03 Construction and materials */}
      <section className="section mp-section" id="ul-construction">
        <div className="container">
          <Head number="03" label="Construction" title="Engineered materials for different operating conditions"
            intro="How each construction carries the load and where the lubrication comes from." />
          <div className="ul-constructions">
            {constructions.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.07} className="ul-construction">
                {c.key ? (
                  <div className="ul-construction-photo"><img src={IMAGES[c.key]} alt={c.title} loading="lazy" /></div>
                ) : (
                  <div className="ul-construction-photo ul-construction-photo--none"><Icon name="layers" size={40} /></div>
                )}
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-note">{constructionsNote}</Reveal>
        </div>
      </section>

      {/* 04 Comparison */}
      <section className="section mp-section mp-tint" id="ul-comparison">
        <div className="container">
          <Head number="04" label="Family comparison" title="Find the right UNI-LUBE bearing for your application" />
          <Reveal className="ul-compare-wrap">
            <table className="ul-compare">
              <thead>
                <tr>
                  <th scope="col">Family</th>
                  <th scope="col">Construction</th>
                  <th scope="col">Lubrication method</th>
                  <th scope="col">Primary operating characteristics</th>
                  <th scope="col">Typical applications</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([name, construction, lube, chars, uses]) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td data-label="Construction">{construction}</td>
                    <td data-label="Lubrication method">{lube}</td>
                    <td data-label="Operating characteristics">{chars}</td>
                    <td data-label="Typical applications">{uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {comparisonNote}</Reveal>
        </div>
      </section>

      {/* 05 How they work */}
      <section className="section mp-section" id="ul-working">
        <div className="container">
          <Head number="05" label="Working principle" title="How self-lubricating bearings work" intro={workingIntro} />
          <WorkingPrinciple />
        </div>
      </section>

      {/* 06 Advantages */}
      <section className="mp-dark" id="ul-advantages">
        <div className="container">
          <Head number="06" label="Technical advantages" title="Performance advantages of UNI-LUBE bearings" light />
          <div className="ul-advantages">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.06} className="mu-adv">
                <span className="mp-icon mp-icon--dark"><Icon name={a.icon} /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Applications */}
      <section className="section mp-section" id="ul-applications">
        <div className="container">
          <Head number="07" label="Applications" title="UNI-LUBE bearings across industrial applications"
            intro="Different industrial environments require different bearing materials and lubrication arrangements." />
          <div className="ul-apps">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.06} className="ul-app">
                <span className="mp-icon"><Icon name={a.icon} /></span>
                <h3>{a.title}</h3>
                <ul className="mp-pills mu-pills-light">
                  {a.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <p className="ul-app-need"><strong>Needs:</strong> {a.need}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="ul-app-photo">
            <img src={refTurbine} alt="Turbine assembly with bearing positions" loading="lazy" />
            <p>Power generation is one of the eight areas above: turbine assemblies place bearings under load, speed and temperature at once.</p>
          </Reveal>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {applicationsNote}</Reveal>
        </div>
      </section>

      {/* 08 Technical specifications and PV */}
      <section className="section mp-section mp-tint" id="ul-specs">
        <div className="container">
          <Head number="08" label="Technical specifications" title="What we confirm, and what PV means" intro={specIntro} />
          <div className="ul-specs">
            <Reveal>
              <h3 className="mp-subhead">Specification parameters</h3>
              <div className="mu-table">
                <div className="mu-table-head"><span>Parameter</span><span>Value</span></div>
                {specParameters.map(([k, v]) => (
                  <div key={k}>
                    <span>{k}</span>
                    <span className={v === 'Confirm with Technical Team' ? 'ul-ask' : undefined}>{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <div>
              <Reveal className="ul-pv">
                <h3 className="mp-subhead">Pressure-velocity (PV)</h3>
                <p className="ul-formula">{pvExplainer.formula}</p>
                <ul className="mp-checks">
                  {pvExplainer.lines.map((l) => <li key={l}><span><Icon name="check" size={14} /></span>{l}</li>)}
                </ul>
                <p className="mp-note">{pvExplainer.note}</p>
              </Reveal>
              <Reveal className="ul-inspect">
                <img src={refInspection} alt="Dimensional inspection of finished bushes" loading="lazy" />
                <p>Dimensional verification against the approved drawing, before release.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 09 Selection guide */}
      <section className="section mp-section" id="ul-selection">
        <div className="container">
          <Head number="09" label="Selection guide" title="How to select the right self-lubricating bearing"
            intro="Step through the eight parameters we need to recommend a family." />
          <SelectionGuide />
          <Reveal className="ul-help">
            <h3>Need assistance selecting a bearing?</h3>
            <p>Share your operating conditions and technical drawing with Mithson for application-specific evaluation.</p>
            <Link to={APPLICATION_DATA} className="btn">Send your operating conditions <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* 10 Installation and maintenance */}
      <section className="section mp-section mp-tint" id="ul-maintenance">
        <div className="container">
          <Head number="10" label="Installation & maintenance" title="Getting the intended service life"
            intro="Correct installation and operating practice are essential for self-lubricating and pre-lubricated bearings." />
          <div className="mp-grid mp-grid--3">
            {maintenance.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 0.07} className="mp-card">
                <span className="mp-icon"><Icon name={m.icon} /></span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Custom */}
      <section className="section mp-section" id="ul-custom">
        <div className="container">
          <Head number="11" label="Custom engineering" title="Custom bearing solutions for specialised applications"
            intro="Industrial machinery often requires bearing dimensions, materials and configurations specific to its design." />
          <ol className="ul-stages">
            {customStages.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.07}>
                <span className="ul-stage-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Submit your bearing drawing <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* 12 Troubleshooting */}
      <section className="section mp-section mp-tint" id="ul-troubleshooting">
        <div className="container mp-split mp-split--narrow">
          <Head number="12" label="Troubleshooting" title="Understanding bearing wear and performance issues" intro={troubleshootingNote} />
          <Accordion
            items={troubleshooting}
            render={(it) => (
              <ul className="ul-causes">
                {it.causes.map((c) => <li key={c}>{c}</li>)}
              </ul>
            )}
          />
        </div>
      </section>

      {/* 13 Documentation */}
      <section className="section mp-section" id="ul-documents">
        <div className="container">
          <Head number="13" label="Technical documentation" title="Documents available on request" intro={documentsNote} />
          <div className="ul-docs">
            {documents.map((d, i) => (
              <Reveal key={d} delay={(i % 5) * 0.05} className="ul-doc">
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
      <section className="section mp-section mp-tint" id="ul-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="14" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Mithson engineers confirm the right bearing for each application." />
          <Accordion items={faqs} render={(it) => <p className="ul-answer">{it.a}</p>} />
        </div>
      </section>

      {/* 15 CTA */}
      <section className="mp-cta" id="ul-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">15 — Engineering review</span>
            <h2>Ready to specify UNI-LUBE bearings?</h2>
            {closing.map((p) => <p key={p}>{p}</p>)}
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

      <RelatedProducts currentSlug={product.slug} products={allProducts} />
    </div>
  );
}

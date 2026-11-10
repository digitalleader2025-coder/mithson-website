import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { ItemSpecList } from '../../../shared/components/ProductSpecList';
import { products, getProductBySlug } from '../../../content/products';
import { productItems } from '../../../content/productItems';
import {
  capabilities,
  catalogue,
  catalogueNote,
  closing,
  customNote,
  families,
  faqs,
  heroChips,
  heroTags,
  materials,
  materialsNote,
  parameters,
  parametersNote,
  selectionChecks,
  svHero,
  systemNote,
  systemParts,
  valveTypes,
} from '../../../content/sealsValve';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './SealsValve.css';

import imgSpring from './assets/Spring Energized Seals.png';
import imgORing from './assets/Elastomer O-Ring.png';
import imgStem from './assets/Stem packing API 6A.png';
import imgChevron from './assets/PTFE Chevron Packing.png';
import imgCgChevron from './assets/PTFE Carbon Graphite Chevron Packing.png';
import imgCgSeat from './assets/PTFE Carbon Graphite Seat.png';
import imgCavity from './assets/PTFE Cavity Seat.png';
import imgPtfeSeat from './assets/PTFE Seat.png';
import imgPeekRing from './assets/Peek Seat Ring.png';
import imgPeekInsert from './assets/Peek Insert Metal Seat.png';
import imgDevlonRing from './assets/Devlon Seat Ring.png';
import imgDevlonInsert from './assets/Devlon Insert Metal Seat.png';
import vGate from './assets/ref/valve-gate.webp';
import vBall from './assets/ref/valve-ball.webp';
import vGlobe from './assets/ref/valve-globe.webp';
import vPlug from './assets/ref/valve-plug.webp';
import vButterfly from './assets/ref/valve-butterfly.webp';
import vDiaphragm from './assets/ref/valve-diaphragm.webp';

const VALVE_PHOTOS = {
  gate: vGate,
  ball: vBall,
  globe: vGlobe,
  plug: vPlug,
  butterfly: vButterfly,
  diaphragm: vDiaphragm,
};

const IMAGES = {
  'Spring Energized Seals': imgSpring,
  'Elastomer O-Ring': imgORing,
  'Stem packing API 6A': imgStem,
  'PTFE Chevron Packing': imgChevron,
  'PTFE Carbon Graphite Chevron Packing': imgCgChevron,
  'PTFE Carbon Graphite Seat': imgCgSeat,
  'PTFE Cavity Seat': imgCavity,
  'PTFE Seat': imgPtfeSeat,
  'Peek Seat Ring': imgPeekRing,
  'Peek Insert Metal Seat': imgPeekInsert,
  'Devlon Seat Ring': imgDevlonRing,
  'Devlon Insert Metal Seat': imgDevlonInsert,
};

const product = getProductBySlug('seals-valve');
const SPECS = productItems['seals-valve'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  spring: <path d="M4 7h16M5 11h14M4 15h16M6 19h12M6 5c2 2 10 2 12 0M6 9c2 2 10 2 12 0M6 13c2 2 10 2 12 0" />,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  seal: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /></>,
  ring: <circle cx="12" cy="12" r="7.5" strokeWidth="3.2" />,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  valve: <><circle cx="12" cy="12" r="4" /><path d="M12 3v5M12 16v5M3 12h5M16 12h5M8 3h8M8 21h8" /></>,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
};


/* Cut-away cross-sections: body in outline, the closing part in accent blue and the
   seal or seat in navy, so a reader can see where Mithson's component actually sits. */
const VALVE_ART = {
  gate: (
    <>
      <path className="d-body" d="M6 88h18v42H6zM176 88h18v42h-18z" />
      <path className="d-body" d="M24 96h44v26H24zM132 96h44v26h-44z" />
      <path className="d-body" d="M62 74h76v56H62z" />
      <path className="d-body" d="M84 34h32v40H84z" />
      <rect className="d-seal" x="78" y="94" width="8" height="30" />
      <rect className="d-seal" x="114" y="94" width="8" height="30" />
      <rect className="d-part" x="86" y="46" width="28" height="78" rx="3" />
      <rect className="d-stem" x="96" y="8" width="8" height="40" />
      <rect className="d-stem" x="68" y="6" width="64" height="7" rx="3.5" />
    </>
  ),
  ball: (
    <>
      <path className="d-body" d="M6 88h18v42H6zM176 88h18v42h-18z" />
      <path className="d-body" d="M24 96h32v26H24zM144 96h32v26h-32z" />
      <path className="d-body" d="M52 70h96v60H52z" />
      <circle className="d-part" cx="100" cy="100" r="30" />
      <rect className="d-bore" x="70" y="92" width="60" height="16" rx="2" />
      <path className="d-seal" d="M60 86h12v28H60zM128 86h12v28h-12z" />
      <rect className="d-stem" x="96" y="26" width="8" height="46" />
      <rect className="d-stem" x="96" y="14" width="76" height="9" rx="4.5" />
    </>
  ),
  globe: (
    <>
      <path className="d-body" d="M6 98h18v38H6zM176 98h18v38h-18z" />
      <path className="d-body" d="M24 106h36v22H24zM140 106h36v22h-36z" />
      <path className="d-body" d="M46 136V98a54 38 0 0 1 108 0v38z" />
      <rect className="d-body" x="78" y="34" width="44" height="34" />
      <path className="d-seal" d="M74 96h52v8H74z" />
      <path className="d-part" d="M82 72h36v24l-18 10-18-10z" />
      <rect className="d-stem" x="96" y="8" width="8" height="40" />
      <ellipse className="d-stem" cx="100" cy="8" rx="34" ry="5" />
    </>
  ),
  plug: (
    <>
      <path className="d-body" d="M6 88h18v42H6zM176 88h18v42h-18z" />
      <path className="d-body" d="M24 96h36v26H24zM140 96h36v26h-36z" />
      <path className="d-body" d="M56 70h88v60H56z" />
      <path className="d-seal" d="M72 70h56l-7 60H79z" />
      <path className="d-part" d="M78 76h44l-5 48H83z" />
      <rect className="d-bore" x="84" y="92" width="32" height="16" rx="2" />
      <rect className="d-stem" x="96" y="30" width="8" height="46" />
      <rect className="d-stem" x="96" y="18" width="72" height="9" rx="4.5" />
    </>
  ),
  butterfly: (
    <>
      <circle className="d-body" cx="100" cy="100" r="46" />
      <circle className="d-seal" cx="100" cy="100" r="38" />
      <circle className="d-bore" cx="100" cy="100" r="30" />
      <ellipse className="d-part" cx="100" cy="100" rx="11" ry="30" transform="rotate(28 100 100)" />
      <rect className="d-stem" x="96" y="54" width="8" height="92" rx="2" />
      <rect className="d-stem" x="82" y="16" width="36" height="26" rx="4" />
      <rect className="d-stem" x="96" y="40" width="8" height="18" />
    </>
  ),
  diaphragm: (
    <>
      <path className="d-body" d="M6 104h18v38H6zM176 104h18v38h-18z" />
      <path className="d-body" d="M24 112h30v22H24zM146 112h30v22h-30z" />
      <path className="d-body" d="M40 142v-30h120v30z" />
      <path className="d-weir" d="M70 112h60l-14-18H84z" />
      <path className="d-body" d="M60 94h80v-6a40 40 0 0 0-80 0z" />
      <path className="d-seal" d="M46 92c16-16 30 2 54 2s38-18 54-2v8c-16-14-30 4-54 4s-38-18-54-4z" />
      <path className="d-part" d="M78 60h44v22a22 14 0 0 1-44 0z" />
      <rect className="d-stem" x="96" y="10" width="8" height="52" />
      <ellipse className="d-stem" cx="100" cy="10" rx="32" ry="5" />
    </>
  ),
};

function ValveArt({ type }) {
  return (
    <svg viewBox="0 0 200 150" aria-hidden="true">
      {VALVE_ART[type]}
    </svg>
  );
}

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
    <section ref={ref} className="mp-hero sv-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{svHero.label}</span>
          <h1>
            {svHero.title}
            <span>{svHero.titleAccent}</span>
            {svHero.titleRest}
          </h1>
          <p>{svHero.lead}</p>
          <p className="sv-hero-sub">{svHero.lead2}</p>
          <ul className="sv-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#sv-catalogue" className="btn btn-primary">Explore products <Arrow /></a>
            <Link to={CONTACT} className="btn mp-btn-ghost">Request technical consultation</Link>
          </div>
        </motion.div>

        <motion.div
          className="mu-hero-visual"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <img src={imgSpring} alt={product.name} />
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

/** The twelve products, picked one at a time from the numbered tabs. */
function Catalogue() {
  const [family, setFamily] = useState('All');
  const [active, setActive] = useState(catalogue[0].key);

  const shown = family === 'All' ? catalogue : catalogue.filter((c) => c.family === family);
  const item = shown.find((c) => c.key === active) ?? shown[0];
  const spec = SPECS[item.spec];

  const pick = (f) => {
    const next = f === 'All' ? catalogue : catalogue.filter((c) => c.family === f);
    setFamily(f);
    setActive(next[0].key);
  };

  return (
    <>
      <div className="sv-filter" role="tablist" aria-label="Product families">
        {families.map((f) => (
          <button key={f} type="button" role="tab" aria-selected={f === family} onClick={() => pick(f)}>
            {f}
            <b>{f === 'All' ? catalogue.length : catalogue.filter((c) => c.family === f).length}</b>
          </button>
        ))}
      </div>

      <div className="sv-picks" role="tablist" aria-label="Products">
        {shown.map((c, i) => (
          <button key={c.key} type="button" role="tab" aria-selected={c.key === item.key} onClick={() => setActive(c.key)}>
            <b>{String(i + 1).padStart(2, '0')}</b>
            <span>{c.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="sv-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="sv-panel-photo"><img src={IMAGES[item.image]} alt={item.name} /></div>
          <div className="sv-panel-body">
            <span className="sv-card-family">{item.family}</span>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            {spec && <ItemSpecList spec={spec} />}
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            <p className="sv-card-uses"><strong>Applications:</strong> {item.uses}</p>
            {item.note && <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>}
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Enquire about {item.name} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/** Valve technologies: pick a valve type, see what it needs. */
function ValveTypes() {
  const [active, setActive] = useState(0);
  const item = valveTypes[active];
  return (
    <div className="sv-valves">
      <div className="sv-valve-list" role="tablist" aria-label="Valve technologies">
        {valveTypes.map((v, i) => (
          <button key={v.key} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)}>
            <Icon name="valve" size={20} />
            <span>{v.name}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="sv-valve-panel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <figure className="sv-valve-art">
            <ValveArt type={item.key} />
            <figcaption>How it closes</figcaption>
          </figure>
          <div className="sv-valve-text">
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <ul className="mp-pills mu-pills-light">
              {item.items.map((t) => <li key={t}>{t}</li>)}
            </ul>
            {item.link && (
              <Link to={item.link} className="btn btn-navy mp-inline-btn">Open the Plug &amp; Lined Valve page <Arrow /></Link>
            )}
          </div>
          <motion.figure
            className="sv-valve-photo"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
          >
            <img src={VALVE_PHOTOS[item.key]} alt={`${item.name} in service`} loading="lazy" />
            <figcaption>{item.name}</figcaption>
          </motion.figure>
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

export default function SealsValvePage() {
  useEffect(() => {
    document.title = `${product.name} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page sv-page">
      <Hero />

      {/* 01 Product portfolio */}
      <section className="section mp-section" id="sv-catalogue">
        <div className="container">
          <Head number="01" label="Product portfolio" title="Twelve sealing components for industrial valves"
            intro="Filter by component family, then pick a product to see its figures, characteristics and applications." />
          <Catalogue />
          <Reveal as="p" className="mp-note">{catalogueNote}</Reveal>
        </div>
      </section>

      {/* 02 How the sealing system works */}
      <section className="mp-dark" id="sv-system">
        <div className="container">
          <Head number="02" label="Sealing system" title="Understanding the valve sealing system" light intro={systemNote} />
          <div className="sv-system">
            {systemParts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="mu-adv">
                <span className="mp-icon mp-icon--dark"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Materials */}
      <section className="section mp-section" id="sv-materials">
        <div className="container">
          <Head number="03" label="Material engineering" title="Advanced materials, engineered for performance"
            intro="Material selection is at the heart of reliable sealing. Mithson works with high-performance polymers and elastomers to develop components for different operating environments." />
          <div className="sv-materials">
            {materials.map((m, i) => (
              <Reveal key={m.key} delay={(i % 3) * 0.07} className="sv-material">
                <h3>{m.name}</h3>
                <em>{m.short}</em>
                <p>{m.text}</p>
                <p className="sv-material-watch"><Icon name="alert" size={14} /> {m.watch}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-note">{materialsNote}</Reveal>
        </div>
      </section>

      {/* 04 Valve technologies */}
      <section className="section mp-section mp-tint" id="sv-valves">
        <div className="container">
          <Head number="04" label="Valve technologies" title="Sealing solutions across multiple valve technologies"
            intro="Pick a valve type to see how it closes, where the seal sits and which Mithson components it takes." />
          <ValveTypes />
        </div>
      </section>

      {/* 05 Capabilities */}
      <section className="section mp-section" id="sv-capabilities">
        <div className="container">
          <Head number="05" label="Engineering & manufacturing" title="From polymer selection to precision manufacturing"
            intro="Mithson combines polymer engineering knowledge with precision component manufacturing to develop sealing solutions that match customer equipment requirements." />
          <ol className="sv-capabilities">
            {capabilities.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.07}>
                <span className="sv-cap-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 Specifications and selection */}
      <section className="section mp-section mp-tint" id="sv-specs">
        <div className="container mp-split">
          <div>
            <Head number="06" label="Technical parameters" title="What we need to specify a seal"
              intro="Every valve sealing application has different requirements. Products are evaluated against these parameters." />
            <Reveal className="mu-table">
              <div className="mu-table-head"><span>Parameter</span><span>Information required</span></div>
              {parameters.map(([k, v]) => (
                <div key={k}><span>{k}</span><span>{v}</span></div>
              ))}
            </Reveal>
            <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {parametersNote}</Reveal>
          </div>
          <div>
            <Reveal as="h3" className="mp-subhead">What to consider when selecting valve seals</Reveal>
            <Reveal className="mp-card">
              <ul className="mp-checks">
                {selectionChecks.map((c) => <li key={c}><span><Icon name="check" size={14} /></span>{c}</li>)}
              </ul>
            </Reveal>
            <Reveal className="sv-custom">
              <h3>Custom manufacturing</h3>
              <p>{customNote}</p>
              <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Submit your technical drawing <Arrow /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 FAQ */}
      <section className="section mp-section" id="sv-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="07" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Mithson engineers confirm the right component for each valve." />
          <Faqs />
        </div>
      </section>

      {/* 08 CTA */}
      <section className="mp-cta" id="sv-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">08 — Engineering review</span>
            <h2>Looking for the right valve sealing solution?</h2>
            {closing.map((p) => <p key={p}>{p}</p>)}
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={APPLICATION_DATA} className="btn btn-white">Request a quote <Arrow /></Link>
            <Link to={CONTACT} className="btn mp-btn-ghost">Contact the technical team <Arrow /></Link>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={product.slug} products={products} />
    </div>
  );
}

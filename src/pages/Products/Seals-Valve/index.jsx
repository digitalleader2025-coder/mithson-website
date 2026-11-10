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
import imgPlant from './assets/ref/valve-plant.webp';

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


/* Schematic cross-sections, drawn to scale-free proportions. They show how each valve
   closes, which a stock photograph of a painted valve body cannot. */
const VALVE_ART = {
  gate: (
    <>
      <path d="M8 64h40M112 64h40" strokeWidth="9" />
      <path d="M48 44h64v40H48z" />
      <path d="M72 44v40h16V44z" fill="currentColor" fillOpacity="0.18" />
      <path d="M80 44V16M62 16h36" strokeWidth="5" />
      <path d="M48 52h64M48 76h64" strokeWidth="2" strokeOpacity="0.45" />
    </>
  ),
  ball: (
    <>
      <path d="M8 64h36M116 64h36" strokeWidth="9" />
      <path d="M44 40h72v48H44z" />
      <circle cx="80" cy="64" r="20" fill="currentColor" fillOpacity="0.18" />
      <path d="M60 64h40" strokeWidth="7" />
      <path d="M80 44V18M66 18h28" strokeWidth="5" />
    </>
  ),
  globe: (
    <>
      <path d="M8 76h34M118 76h34" strokeWidth="9" />
      <path d="M42 92V60a38 38 0 0 1 76 0v32z" />
      <path d="M58 70h44" strokeWidth="4" />
      <path d="M66 58h28v10H66z" fill="currentColor" fillOpacity="0.18" />
      <path d="M80 58V18M66 18h28" strokeWidth="5" />
    </>
  ),
  plug: (
    <>
      <path d="M8 64h38M114 64h38" strokeWidth="9" />
      <path d="M46 40h68v48H46z" />
      <path d="M66 40h28l-7 48H73z" fill="currentColor" fillOpacity="0.2" />
      <path d="M80 40V18M64 18h32" strokeWidth="5" />
    </>
  ),
  butterfly: (
    <>
      <path d="M8 64h144" strokeWidth="9" />
      <path d="M52 36h56v56H52z" />
      <path d="m62 86 36-44" strokeWidth="8" strokeLinecap="round" />
      <circle cx="80" cy="64" r="5" fill="currentColor" />
      <path d="M80 36V18M66 18h28" strokeWidth="5" />
    </>
  ),
  diaphragm: (
    <>
      <path d="M8 82h30M122 82h30" strokeWidth="9" />
      <path d="M38 94V62h84v32z" />
      <path d="M38 70c14-18 28 6 42 6s28-24 42-6" strokeWidth="5" fill="none" />
      <path d="M66 56h28v12H66z" fill="currentColor" fillOpacity="0.2" />
      <path d="M80 56V18M64 18h32" strokeWidth="5" />
    </>
  ),
};

function ValveArt({ type }) {
  return (
    <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          <div className="sv-valve-art"><ValveArt type={item.key} /></div>
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
            intro="Each application requires carefully selected sealing geometry and material properties to maintain the intended sealing interface." />
          <Reveal className="sv-valve-banner">
            <img src={imgPlant} alt="Valves and pipework in an industrial plant" loading="lazy" />
            <p>Valves and pipework in service. The diagrams below show how each valve type closes and where the seal sits.</p>
          </Reveal>
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

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

/** One catalogue card. Tilts very slightly towards the pointer: this page's signature move. */
function ProductCard({ item, open, onToggle }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const spec = SPECS[item.spec];

  const tilt = (event) => {
    if (reduceMotion || !ref.current || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (event.clientX - r.left) / r.width - 0.5;
    const dy = (event.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${(-dy * 5).toFixed(2)}deg) rotateY(${(dx * 5).toFixed(2)}deg) translateY(-4px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ''; };

  return (
    <article ref={ref} className={`sv-card${open ? ' is-open' : ''}`} onPointerMove={tilt} onPointerLeave={reset}>
      <div className="sv-card-photo"><img src={IMAGES[item.image]} alt={item.name} loading="lazy" /></div>
      <div className="sv-card-body">
        <span className="sv-card-family">{item.family}</span>
        <h3>{item.name}</h3>
        <p>{item.text}</p>
        {spec && <ItemSpecList spec={spec} />}
        <button type="button" className="sv-card-more" aria-expanded={open} onClick={onToggle}>
          {open ? 'Show less' : 'View details'} <Arrow />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="sv-card-detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="mp-checks">
                {item.points.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
              </ul>
              <p className="sv-card-uses"><strong>Applications:</strong> {item.uses}</p>
              {item.note && <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

/** Horizontal rail of the twelve products, filtered by family, with a progress bar. */
function Catalogue() {
  const [family, setFamily] = useState('All');
  const [open, setOpen] = useState(null);
  const railRef = useRef(null);

  const shown = family === 'All' ? catalogue : catalogue.filter((c) => c.family === family);

  const nudge = (dir) => {
    const el = railRef.current;
    // scrollLeft, not scrollBy: the page's smooth-scroll library swallows the animated form
    if (el) el.scrollLeft += dir * Math.max(320, el.clientWidth * 0.8);
  };

  return (
    <>
      <div className="sv-filter" role="tablist" aria-label="Product families">
        {families.map((f) => (
          <button key={f} type="button" role="tab" aria-selected={f === family} onClick={() => { setFamily(f); setOpen(null); }}>
            {f}
            <b>{f === 'All' ? catalogue.length : catalogue.filter((c) => c.family === f).length}</b>
          </button>
        ))}
      </div>

      <div className="sv-rail-wrap">
        <ul className="sv-rail" ref={railRef}>
          {shown.map((item) => (
            <li key={item.key}>
              <ProductCard item={item} open={open === item.key} onToggle={() => setOpen(open === item.key ? null : item.key)} />
            </li>
          ))}
        </ul>
        <div className="sv-rail-controls">
          <p className="sv-rail-hint">{shown.length} products &middot; scroll or use the arrows</p>
          <div className="sv-rail-arrows">
            <button type="button" aria-label="Scroll products left" onClick={() => nudge(-1)}>‹</button>
            <button type="button" aria-label="Scroll products right" onClick={() => nudge(1)}>›</button>
          </div>
        </div>
      </div>
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
          <h3>{item.name}</h3>
          <p>{item.text}</p>
          <ul className="mp-pills mu-pills-light">
            {item.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
          {item.link && (
            <Link to={item.link} className="btn btn-navy mp-inline-btn">Open the Plug &amp; Lined Valve page <Arrow /></Link>
          )}
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
            intro="Filter by component family, then open a card for its characteristics and applications." />
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

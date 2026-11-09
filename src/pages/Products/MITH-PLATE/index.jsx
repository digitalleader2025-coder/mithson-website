import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { products, getProductBySlug } from '../../../content/products';
import {
  applications,
  applicationsNote,
  characteristics,
  closing,
  conditions,
  developmentSteps,
  envelope,
  faqs,
  fittingCare,
  heroStats,
  materials,
  mithPlateHero,
  overview,
  performance,
  specNote,
  validation,
} from '../../../content/mithPlate';
import mithPlateImage from './assets/mith-plate.png';
import './MithPlate.css';

const product = getProductBySlug('mith-plate');
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  cold: <path d="M12 2v20M4 7l16 10M20 7 4 17M12 6l-2.5-2.5M12 6l2.5-2.5M12 18l-2.5 2.5M12 18l2.5 2.5" />,
  heat: <><path d="M10 4a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0V4Z" /><path d="M12 9v7" /></>,
  gauge: <><path d="M4 18a9 9 0 1 1 16 0" /><path d="m12 13 4-4" /></>,
  feather: <path d="M20 4c0 8-6 12-12 12H4l10-10M8 16l-4 4M14 10l-5 5" />,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  slide: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  gas: <><circle cx="8" cy="14" r="3" /><circle cx="16" cy="10" r="2" /><circle cx="15" cy="17" r="1.5" /></>,
  cycle: <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 12a9 9 0 0 1-15 6.7L3 16M21 4v4h-4M3 20v-4h4" />,
  oil: <><path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" /><path d="M9 14a3 3 0 0 0 3 3" /></>,
  drop: <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />,
  seal: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /></>,
  wave: <path d="M2 12c2-5 4-5 6 0s4 5 6 0 4-5 6 0" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  ruler: <path d="M3 17 17 3l4 4L7 21l-4-4ZM7 13l2 2M10 10l2 2M13 7l2 2" />,
  compressor: <><rect x="3" y="8" width="12" height="9" rx="1.5" /><path d="M15 11h3l3 3v3h-6M6 8V5h6v3" /><circle cx="9" cy="12.5" r="2" /></>,
  swap: <path d="M4 8h13l-3-3M20 16H7l3 3" />,
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
    <section ref={ref} className="mp-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mp-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{mithPlateHero.label}</span>
          <h1>
            {mithPlateHero.title}
            <span>{mithPlateHero.titleAccent}</span>
            {mithPlateHero.titleRest}
          </h1>
          <p>{mithPlateHero.lead}</p>
          <div className="mp-actions">
            <a href="#mp-materials" className="btn btn-primary">Explore the engineering <Arrow /></a>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Discuss your application</Link>
          </div>
        </motion.div>

        <motion.div
          className="mp-hero-visual"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <span className="mp-hero-mark" aria-hidden="true">MITH</span>
          <img src={mithPlateImage} alt={product.name} />
        </motion.div>

        <motion.aside
          className="mp-envelope"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <div className="mp-envelope-head">
            <span className="mp-icon"><Icon name="drawing" size={20} /></span>
            <div>
              <strong>Built to your valve design</strong>
              <span>Component dimensions developed around customer requirements and drawings.</span>
            </div>
          </div>
          <span className="mp-envelope-title">Envelope</span>
          <ul>
            {envelope.map((e) => (
              <li key={e.label}>
                <span className="mp-icon mp-icon--sm"><Icon name={e.icon} size={18} /></span>
                <div><strong>{e.value}</strong><span>{e.label}{e.note ? `, ${e.note}` : ''}</span></div>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>

      <div className="container">
        <motion.ul
          className="mp-stats"
          initial="hidden"
          animate="shown"
          variants={{ shown: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
        >
          {heroStats.map((s) => (
            <motion.li key={s.label} variants={{ hidden: { opacity: 0, y: 18 }, shown: { opacity: 1, y: 0 } }}>
              <span className="mp-icon"><Icon name={s.icon} size={20} /></span>
              <div><strong>{s.value}</strong><span>{s.label}</span></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function MaterialPicker() {
  const [active, setActive] = useState(1);
  const item = materials[active];

  return (
    <div className="mp-materials">
      <div className="mp-material-list" role="tablist" aria-label="Material options">
        {materials.map((m, i) => (
          <button
            key={m.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            className="mp-material-opt"
            onClick={() => setActive(i)}
          >
            <span className={`mp-swatch mp-swatch--${m.swatch}`} aria-hidden="true" />
            <span>
              <strong>{m.name}</strong>
              <em>{m.short}</em>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="mp-material-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="mp-material-visual">
            <span className="mp-material-chip">{item.name}</span>
            <img src={mithPlateImage} alt="" />
          </div>
          <div className="mp-material-body">
            <h3>{item.name}</h3>
            <p>{item.intro}</p>
            <ul className="mp-pills">
              {item.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mp-material-side">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            className={`mp-reference${item.warning ? ' mp-reference--warn' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="mp-reference-tag">
              <Icon name={item.warning ? 'alert' : 'heat'} size={16} />
              {item.warning ? 'Important' : 'Typical reference'}
            </span>
            <p>{item.reference ?? item.warning}</p>
          </motion.div>
        </AnimatePresence>
        <Link to={APPLICATION_DATA} className="mp-request">
          <span>
            <strong>Request grade-specific data</strong>
            <em>Get the technical information for the grade that suits your application.</em>
          </span>
          <i aria-hidden="true"><Arrow /></i>
        </Link>
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

function Steps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  return (
    <ol ref={ref} className="mp-steps">
      <span className="mp-steps-line" aria-hidden="true">
        <motion.span initial={{ scaleX: reduceMotion ? 1 : 0 }} animate={inView ? { scaleX: 1 } : undefined} transition={{ duration: 1.2, ease: EASE }} />
      </span>
      {developmentSteps.map((s, i) => (
        <motion.li
          key={s.title}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45, delay: i * 0.1 }}
        >
          <span className="mp-step-num">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}

export default function MITHPLATEPage() {
  useEffect(() => {
    document.title = `${product.name} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page">
      <Hero />

      {/* 01 Overview */}
      <section className="section mp-section" id="mp-overview">
        <div className="container mp-split">
          <div>
            <Head number="01" label="Product overview" title="Designed for the heart of reciprocating compressors" />
            {overview.map((p) => <Reveal as="p" key={p} className="mp-text">{p}</Reveal>)}
          </div>
          <div>
            <Reveal as="h3" className="mp-subhead">Key product characteristics</Reveal>
            <ul className="mp-checks">
              {characteristics.map((c, i) => (
                <Reveal as="li" key={c} delay={i * 0.05}><span><Icon name="check" size={14} /></span>{c}</Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 02 Materials */}
      <section className="section mp-section mp-tint" id="mp-materials">
        <div className="container">
          <Head
            number="02"
            label="Available materials"
            title="Select the material for your compressor"
            intro="Different polymer materials provide different combinations of strength, stiffness, friction, wear resistance and temperature capability."
          />
          <MaterialPicker />
        </div>
      </section>

      {/* 03 Operating conditions */}
      <section className="section mp-section" id="mp-conditions">
        <div className="container">
          <Head
            number="03"
            label="Operating conditions"
            title="Understand the conditions before selecting"
            intro="MITH PLATE selection should be based on the complete compressor operating environment."
          />
          <div className="mp-grid mp-grid--3">
            {conditions.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.07} className="mp-card">
                <span className="mp-icon"><Icon name={c.icon} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Performance */}
      <section className="mp-dark" id="mp-performance">
        <div className="container">
          <Head number="04" label="Performance considerations" title="Engineering characteristics that matter" light
            intro="Actual performance always depends on component design, material grade and operating frequency." />
          <div className="mp-perf">
            {performance.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="mp-perf-item">
                <span className="mp-icon mp-icon--dark"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Specifications */}
      <section className="section mp-section" id="mp-specs">
        <div className="container mp-split">
          <div>
            <Head number="05" label="Product specifications" title="Published operating information"
              intro="Mithson's product information currently presents the following indicative operating envelope." />
            <Reveal className="mp-spec-table">
              {envelope.map((e) => (
                <div key={e.label}>
                  <dt>{e.label}</dt>
                  <dd>{e.value}{e.note ? <em>, {e.note}</em> : null}</dd>
                </div>
              ))}
              <div>
                <dt>Material options</dt>
                <dd className="mp-spec-mats">{materials.map((m) => <span key={m.key}>{m.name}</span>)}</dd>
              </div>
            </Reveal>
            <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {specNote}</Reveal>
          </div>
          <div>
            <Reveal as="h3" className="mp-subhead">Final suitability depends on</Reveal>
            <ol className="mp-numbered">
              {validation.map((v, i) => (
                <Reveal as="li" key={v} delay={i * 0.05}><span>{i + 1}</span>{v}</Reveal>
              ))}
            </ol>
            <Reveal>
              <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Request technical information <Arrow /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 Applications */}
      <section className="section mp-section mp-tint" id="mp-applications">
        <div className="container mp-apps-grid">
          <div>
            <Head number="06" label="Applications" title="Designed for reciprocating compressor requirements" />
            <div className="mp-apps">
              {applications.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.06} className="mp-app">
                  <span className="mp-icon mp-icon--sm"><Icon name={a.icon} size={18} /></span>
                  {a.title}
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="mp-note">{applicationsNote}</Reveal>
          </div>
          <Reveal className="mp-aside" delay={0.1}>
            <h3>At every valve overhaul</h3>
            <ul className="mp-checks">
              {fittingCare.map((f) => <li key={f}><span><Icon name="check" size={14} /></span>{f}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 07 Development */}
      <section className="section mp-section" id="mp-development">
        <div className="container">
          <Head number="07" label="Development & manufacturing" title="From material selection to finished component"
            intro="Every valve plate must meet the dimensional and material requirements of its intended valve assembly." />
          <Steps />
        </div>
      </section>

      {/* 08 FAQ */}
      <section className="section mp-section mp-tint" id="mp-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="08" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Mithson engineers confirm the right product and metric for each application." />
          <Faqs />
        </div>
      </section>

      {/* 09 CTA */}
      <section className="mp-cta" id="mp-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">09 — Specify your MITH PLATE</span>
            <h2>Let&apos;s evaluate your compressor application</h2>
            {closing.map((p) => <p key={p}>{p}</p>)}
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={APPLICATION_DATA} className="btn btn-white">Send compressor data <Arrow /></Link>
            <Link to={CONTACT} className="btn mp-btn-ghost">Request technical review <Arrow /></Link>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={product.slug} products={products} />
    </div>
  );
}

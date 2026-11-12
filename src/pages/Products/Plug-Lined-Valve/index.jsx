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
  closing,
  comparison,
  comparisonNote,
  customStages,
  dataFields,
  documents,
  documentsNote,
  faqs,
  heroChips,
  heroTags,
  installation,
  materials,
  overviewIntro,
  overviewPoints,
  partsDistinction,
  plHero,
  pressureNote,
  productInfo,
  products,
  selectionSteps,
  specIntro,
  stages,
  temperatureNote,
  workingIntro,
} from '../../../content/plugLinedValve';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './PlugLined.css';

import imgSleeve from './assets/Image1.png';
import imgPlug from './assets/Image2.png';
import imgLiner from './assets/Image3.png';
import imgDisc from './assets/PFA Lined Disc.png';

const IMAGES = { sleeve: imgSleeve, plug: imgPlug, liner: imgLiner, disc: imgDisc };

const product = getProductBySlug('plug-lined-valve');
const SPECS = productItems['plug-lined-valve'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  seal: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /></>,
  valve: <><circle cx="12" cy="12" r="4" /><path d="M12 3v5M12 16v5M3 12h5M16 12h5M8 3h8M8 21h8" /></>,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  rotate: <><path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v5h-5" /></>,
  slide: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  arrows: <path d="M3 9h18M3 15h18M7 5 3 9l4 4M17 11l4 4-4 4" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  lab: <><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></>,
  compressor: <><rect x="3" y="8" width="12" height="9" rx="1.5" /><path d="M15 11h3l3 3v3h-6M6 8V5h6v3" /><circle cx="9" cy="12.5" r="2" /></>,
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
    <section ref={ref} className="mp-hero pl-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{plHero.label}</span>
          <h1>
            {plHero.title}
            <span>{plHero.titleAccent}</span>
            {plHero.titleRest}
          </h1>
          <p>{plHero.lead}</p>
          <p className="pl-hero-sub">{plHero.lead2}</p>
          <ul className="pl-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#pl-products" className="btn btn-primary">Explore products <Arrow /></a>
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
          <img src={imgSleeve} alt={product.name} />
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

/** 03 — the four components, picked one at a time. */
function Products() {
  const [active, setActive] = useState(products[0].key);
  const item = products.find((p) => p.key === active);
  const spec = SPECS[item.spec];
  return (
    <>
      <div className="pl-picks" role="tablist" aria-label="Components">
        {products.map((p) => (
          <button key={p.key} type="button" role="tab" aria-selected={p.key === active} onClick={() => setActive(p.key)}>
            <b>{p.number}</b>
            <span>{p.name}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="pl-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="pl-panel-photo"><img src={IMAGES[item.image]} alt={item.name} /></div>
          <div className="pl-panel-body">
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            {spec && <ItemSpecList spec={spec} />}
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            {item.note && <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>}
            <p className="pl-uses"><strong>Applications:</strong> {item.uses}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Enquire about {item.name} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/**
 * 06 — the signature of this page: a sleeved plug valve cut-away whose plug really turns
 * through the three stages, with the PTFE sleeve picked out in Mithson blue.
 */
function WorkingPrinciple() {
  const [stage, setStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const item = stages[stage];
  // open: bore in line with the pipe. rotate: halfway. closed: bore across the flow.
  const angle = [0, 45, 90][stage];

  return (
    <div className="pl-working">
      <div className="pl-working-art">
        <svg viewBox="0 0 260 200" aria-label={`Sleeved plug valve, ${item.name}`} role="img">
          {/* pipework */}
          <path className="pl-pipe" d="M4 86h58v38H4zM198 86h58v38h-58z" />
          <path className="pl-flow" d="M4 96h58v18H4zM198 96h58v18h-58z" />
          {/* body */}
          <path className="pl-body" d="M58 58h144v98H58z" />
          {/* PTFE sleeve, the Mithson part */}
          <path className="pl-sleeve" d="M92 62h76l-9 90h-58z" />
          {/* plug: a tapered block with a bore, rotating about the stem */}
          <g style={{ transformOrigin: '130px 107px' }}>
            <motion.g
              animate={{ rotate: reduceMotion ? angle : angle }}
              transition={{ duration: reduceMotion ? 0 : 0.8, ease: EASE }}
              style={{ transformOrigin: '130px 107px' }}
            >
              <path className="pl-plug" d="M100 68h60l-7 78h-46z" />
              <rect className="pl-bore" x="96" y="96" width="68" height="20" rx="3" />
            </motion.g>
          </g>
          {/* stem and operator */}
          <rect className="pl-stem" x="124" y="16" width="12" height="46" rx="2" />
          <rect className="pl-stem" x="98" y="8" width="64" height="12" rx="6" />
          {/* labels */}
          <text className="pl-tag" x="14" y="78">Inlet</text>
          <text className="pl-tag" x="214" y="78">Outlet</text>
          <text className="pl-tag pl-tag--accent" x="176" y="176">PTFE sleeve</text>
          <path className="pl-lead" d="M172 170 150 140" />
        </svg>
      </div>

      <div className="pl-working-body">
        <div className="pl-stage-tabs" role="tablist" aria-label="Valve position">
          {stages.map((s, i) => (
            <button key={s.key} type="button" role="tab" aria-selected={i === stage} onClick={() => setStage(i)}>
              {s.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </motion.div>
        </AnimatePresence>
        <ul className="mp-pills mu-pills-light pl-parts">
          <li>Valve body</li>
          <li>Rotating plug</li>
          <li>PTFE sleeve</li>
          <li>Inlet and outlet ports</li>
          <li>Valve stem</li>
          <li>Sealing interface</li>
        </ul>
      </div>
    </div>
  );
}

/** 10 — the selection guide, one parameter at a time. */
function SelectionGuide() {
  const [step, setStep] = useState(0);
  const item = selectionSteps[step];
  return (
    <div className="pl-guide">
      <ol className="pl-guide-rail">
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
          className="pl-guide-panel"
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="pl-guide-num">{String(step + 1).padStart(2, '0')} / {selectionSteps.length}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="pl-guide-nav">
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

export default function PlugLinedValvePage() {
  useEffect(() => {
    document.title = 'PTFE Plug Valve Sleeves & Liners | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page pl-page">
      <Hero />

      {/* 01 Product overview */}
      <section className="section mp-section" id="pl-overview">
        <div className="container mp-split">
          <div>
            <Head number="01" label="Product overview" title="Precision polymer components for industrial plug valves" intro={overviewIntro} />
            <div className="pl-overview">
              {overviewPoints.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.07} className="mp-card pl-over">
                  <span className="mp-icon"><Icon name={o.icon} size={20} /></span>
                  <div>
                    <h3>{o.title}</h3>
                    <p>{o.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mu-figure pl-figure">
            <img src={imgSleeve} alt="PTFE plug valve sleeve" loading="lazy" />
            <figcaption>A PTFE sleeve, the interface between plug and body</figcaption>
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="pl-distinct">
            <h3>Three different parts, often confused</h3>
            <div>
              {partsDistinction.map((p) => (
                <div key={p.key}>
                  <strong>{p.name}</strong>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 Products */}
      <section className="mp-dark" id="pl-products">
        <div className="container">
          <Head number="02" label="Components" title="Plugs, sleeves and liners" light
            intro="Four components, each with its own job inside the valve. Pick one to see its figures and applications." />
          <Products />
        </div>
      </section>

      {/* 03 Materials */}
      <section className="section mp-section" id="pl-materials">
        <div className="container">
          <Head number="03" label="Material technology" title="Advanced PTFE materials, engineered for performance"
            intro="Different process conditions demand different combinations of chemical resistance, friction, mechanical strength, deformation resistance and dimensional stability." />
          <div className="pl-materials">
            {materials.map((m, i) => (
              <Reveal key={m.key} delay={(i % 3) * 0.07} className="pl-material">
                <h3>{m.name}</h3>
                <em>{m.short}</em>
                <p>{m.text}</p>
                <ul className="mp-pills mu-pills-light">
                  {m.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <p className="pl-material-watch"><Icon name="alert" size={14} /> {m.watch}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Material comparison */}
      <section className="section mp-section mp-tint" id="pl-comparison">
        <div className="container">
          <Head number="04" label="Material comparison" title="Understanding the differences between PTFE materials" />
          <Reveal className="pl-compare-wrap">
            <table className="pl-compare">
              <thead>
                <tr>
                  <th scope="col">Material</th>
                  <th scope="col">Main characteristics</th>
                  <th scope="col">Advantages</th>
                  <th scope="col">Important considerations</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([name, chars, adv, watch]) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td data-label="Main characteristics">{chars}</td>
                    <td data-label="Advantages">{adv}</td>
                    <td data-label="Important considerations" className="pl-watch-cell">{watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {comparisonNote}</Reveal>
        </div>
      </section>

      {/* 05 How it works */}
      <section className="section mp-section" id="pl-working">
        <div className="container">
          <Head number="05" label="Working principle" title="How a PTFE sleeved plug valve works" intro={workingIntro} />
          <WorkingPrinciple />
        </div>
      </section>

      {/* 06 Advantages */}
      <section className="mp-dark" id="pl-advantages">
        <div className="container">
          <Head number="06" label="Engineering advantages" title="Engineered for reliable sealing performance" light />
          <div className="mu-advantages">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.07} className="mu-adv">
                <span className="mp-icon mp-icon--dark"><Icon name={a.icon} /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Applications */}
      <section className="section mp-section" id="pl-applications">
        <div className="container">
          <Head number="07" label="Applications" title="Designed for demanding industrial environments"
            intro="Mithson's polymer sealing components are designed for compatible industrial valve applications where chemical compatibility, low friction and reliable sealing interfaces are important." />
          <div className="mp-grid mp-grid--3">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.07} className="mp-card pl-app">
                <span className="mp-icon"><Icon name={a.icon} /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <p className="pl-app-focus"><strong>Focus:</strong> {a.focus}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Technical specifications */}
      <section className="section mp-section mp-tint" id="pl-specs">
        <div className="container">
          <Head number="08" label="Technical specifications" title="Operating parameters and product data" intro={specIntro} />
          <div className="pl-specs">
            <Reveal>
              <h3 className="mp-subhead">Product information</h3>
              <div className="mu-table">
                <div className="mu-table-head"><span>Item</span><span>Information</span></div>
                {productInfo.map(([k, v]) => (
                  <div key={k}><span>{k}</span><span>{v}</span></div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <h3 className="mp-subhead">What we confirm per order</h3>
              <div className="mu-table">
                <div className="mu-table-head"><span>Field</span><span>Value</span></div>
                {dataFields.map(([k, v]) => (
                  <div key={k}>
                    <span>{k}</span>
                    <span className={v === 'Confirm with Technical Team' ? 'pl-ask' : undefined}>{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Temperature.</strong> {temperatureNote}</Reveal>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Pressure.</strong> {pressureNote}</Reveal>
        </div>
      </section>

      {/* 09 Selection guide */}
      <section className="section mp-section" id="pl-selection">
        <div className="container">
          <Head number="09" label="Selection guide" title="How to select the right PTFE sleeve or liner"
            intro="Selecting the right polymer component requires an understanding of the complete operating environment. Step through the seven parameters we need." />
          <SelectionGuide />
          <Reveal className="pl-help">
            <h3>Need help selecting the right material?</h3>
            <p>Share your valve specifications and operating conditions with Mithson&apos;s team for application-specific product evaluation.</p>
            <Link to={APPLICATION_DATA} className="btn">Request material selection assistance <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* 10 Installation */}
      <section className="section mp-section mp-tint" id="pl-installation">
        <div className="container">
          <Head number="10" label="Installation & maintenance" title="Handling polymer components correctly"
            intro="Correct handling and installation are important for maintaining the dimensional integrity and sealing performance of polymer components." />
          <div className="mp-grid mp-grid--3 pl-install">
            {installation.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 0.07} className="mp-card">
                <span className="mp-icon"><Icon name={it.icon} /></span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Custom engineering */}
      <section className="section mp-section" id="pl-custom">
        <div className="container">
          <Head number="11" label="Custom engineering" title="Custom polymer components, precision engineered"
            intro="Industrial valve applications often require specialised polymer geometries and material formulations." />
          <ol className="pl-stages">
            {customStages.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.07}>
                <span className="pl-stage-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Submit your technical drawing <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* 12 Documentation */}
      <section className="section mp-section mp-tint" id="pl-documents">
        <div className="container">
          <Head number="12" label="Technical documentation" title="Documents available on request" intro={documentsNote} />
          <div className="pl-docs">
            {documents.map((d, i) => (
              <Reveal key={d} delay={(i % 4) * 0.06} className="pl-doc">
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

      {/* 13 FAQ */}
      <section className="section mp-section" id="pl-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="13" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Mithson engineers confirm the right component for each valve." />
          <Faqs />
        </div>
      </section>

      {/* 14 CTA */}
      <section className="mp-cta" id="pl-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">14 — Engineering review</span>
            <h2>Ready to specify your Plug &amp; Lined Valve components?</h2>
            {closing.map((p) => <p key={p}>{p}</p>)}
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={CONTACT} className="btn btn-white">Get in touch <Arrow /></Link>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Request a technical consultation <Arrow /></Link>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={product.slug} products={allProducts} />
    </div>
  );
}

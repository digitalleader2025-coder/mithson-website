import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { ItemSpecList } from '../../../shared/components/ProductSpecList';
import { products, getProductBySlug } from '../../../content/products';
import { productItems } from '../../../content/productItems';
import {
  applications,
  applicationsNote,
  closing,
  comparison,
  components,
  construction,
  faqs,
  heroChips,
  installation,
  materials,
  materialsNote,
  overviewIntro,
  overviewNote,
  overviewRoles,
  positions,
  positionsNote,
  quality,
  qualityNote,
  safetyNote,
  selectionGroups,
  selectionIntro,
  specsNote,
  standardsNote,
  xtHero,
} from '../../../content/xmasTree';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './XMasTree.css';

import imgHero from './assets/ref/xmas-tree.webp';
import imgSpringCutaway from './assets/ref/spring-cutaway.webp';
import imgSpringRing from './assets/ref/spring-seal-ring.webp';
import imgORings from './assets/ref/o-rings.webp';
import imgValve from './assets/ref/valve-cutaway.webp';
import imgSpringSeal from './assets/genre/Spring Energized Seals.png';
import imgStemPacking from './assets/genre/Stem Packing.png';
import imgSeatSeal from './assets/genre/SEAT Seal.png';
import imgORing from './assets/genre/Elastomer O-Ring.png';

const IMAGES = {
  'Spring Energized Seals': imgSpringSeal,
  'Stem Packing': imgStemPacking,
  'SEAT Seal': imgSeatSeal,
  'Elastomer O-Ring': imgORing,
  'spring-seal-ring': imgSpringRing,
  'o-rings': imgORings,
  'valve-cutaway': imgValve,
};

const product = getProductBySlug('seals-x-mas-tree');
const SPECS = productItems['seals-x-mas-tree'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  spring: <path d="M4 7h16M5 11h14M4 15h16M6 19h12M6 5c2 2 10 2 12 0M6 9c2 2 10 2 12 0M6 13c2 2 10 2 12 0" />,
  gauge: <><path d="M4 18a9 9 0 1 1 16 0" /><path d="m12 13 4-4" /></>,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  seal: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /></>,
  ring: <circle cx="12" cy="12" r="7.5" strokeWidth="3.2" />,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  valve: <><circle cx="12" cy="12" r="4" /><path d="M12 3v5M12 16v5M3 12h5M16 12h5M8 3h8M8 21h8" /></>,
  compressor: <><rect x="3" y="8" width="12" height="9" rx="1.5" /><path d="M15 11h3l3 3v3h-6M6 8V5h6v3" /><circle cx="9" cy="12.5" r="2" /></>,
  hydraulic: <><rect x="3" y="9" width="11" height="6" rx="1.5" /><path d="M14 12h7M18 9v6" /></>,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
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
    <section ref={ref} className="mp-hero xt-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{xtHero.label}</span>
          <h1>
            {xtHero.title}
            <span>{xtHero.titleAccent}</span>
            {xtHero.titleRest}
          </h1>
          <p>{xtHero.lead}</p>
          <p className="xt-hero-sub">{xtHero.lead2}</p>
          <div className="mp-actions">
            <a href="#xt-components" className="btn btn-primary">Explore sealing components <Arrow /></a>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Discuss your application</Link>
          </div>
        </motion.div>

        <motion.div
          className="mu-hero-visual xt-hero-visual"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <img src={imgHero} alt="Wellhead Christmas tree assembly" />
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

/** 02 — the four components, as one interactive panel on the dark band. */
function Components() {
  const [active, setActive] = useState(0);
  const item = components[active];
  const spec = SPECS[item.spec];
  return (
    <div className="mu-types">
      <div className="xt-comp-tabs" role="tablist" aria-label="Sealing components">
        {components.map((c, i) => (
          <button key={c.key} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)}>
            <b>{c.number}</b>
            <span>{c.name}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="mu-type-panel xt-comp-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="xt-comp-visuals">
            <div className="mu-type-visual xt-visual"><img src={IMAGES[item.image]} alt={item.name} /></div>
            {item.detail && (
              <div className="mu-type-visual xt-visual xt-visual--small"><img src={IMAGES[item.detail]} alt="" loading="lazy" /></div>
            )}
          </div>
          <div className="mu-type-body">
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            {spec && <ItemSpecList spec={spec} />}
            <ul className="mp-checks xt-checks">
              {item.points.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
            </ul>
            <p className="mu-type-note"><Icon name="alert" size={16} /> {item.note}</p>
            <p className="xt-choose"><strong>Typical selection considerations:</strong> {item.choose}</p>
            <Link to={APPLICATION_DATA} className="btn btn-white mu-type-btn">Enquire about {item.name} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** 03 — exploded view: the jacket and spring separate as the section scrolls, then reassemble. */
function Exploded() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 30%'] });
  // out and back: apart in the middle of the section, together at both ends
  const spread = useTransform(scrollYProgress, [0, 0.45, 0.75, 1], [0, 1, 1, 0]);
  const jacketX = useTransform(spread, (v) => (reduceMotion ? 0 : v * -54));
  const springX = useTransform(spread, (v) => (reduceMotion ? 0 : v * 54));
  const labelOpacity = useTransform(spread, [0, 0.6], [0, 1]);

  return (
    <div ref={ref} className="xt-exploded">
      <div className="xt-exploded-stage">
        <motion.img className="xt-explode-img" src={imgSpringCutaway} alt="Spring-energised seal cut-away" style={{ x: jacketX }} loading="lazy" />
        <motion.span className="xt-explode-tag xt-explode-tag--jacket" style={{ opacity: labelOpacity, x: jacketX }}>Polymer jacket</motion.span>
        <motion.span className="xt-explode-tag xt-explode-tag--spring" style={{ opacity: labelOpacity, x: springX }}>Metal spring</motion.span>
      </div>
      <div className="xt-exploded-text">
        {construction.parts.map((p, i) => (
          <Reveal key={p.key} delay={i * 0.08} className="mp-card">
            <h3>{p.name}</h3>
            <p>{p.text}</p>
            <p className="mu-sub">{p.note}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** 05 — hotspot photo: numbered dots on the valve cut-away. */
function Positions() {
  const [open, setOpen] = useState(0);
  return (
    <div className="xt-hotspots">
      <div className="xt-hotspot-figure">
        <img src={imgValve} alt="Gate valve cut-away showing the sealing positions" loading="lazy" />
        {positions.map((p, i) => (
          <button
            key={p.key}
            type="button"
            className={`xt-dot${open === i ? ' is-open' : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={p.name}
            aria-pressed={open === i}
            onClick={() => setOpen(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <ol className="xt-hotspot-list">
        {positions.map((p, i) => (
          <li key={p.key}>
            <button type="button" className={open === i ? 'is-open' : ''} aria-expanded={open === i} onClick={() => setOpen(i)}>
              <span className="xt-hotspot-num">{i + 1}</span>
              <span>
                <strong>{p.name}</strong>
                <em>{p.text}</em>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** 08 — comparison table: the four components side by side. */
function Comparison() {
  return (
    <Reveal className="xt-compare-wrap">
      <table className="xt-compare">
        <thead>
          <tr>
            <th scope="col">Component</th>
            <th scope="col">Temperature</th>
            <th scope="col">Pressure</th>
            <th scope="col">Key technical parameters</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((c) => {
            const spec = SPECS[c.spec] ?? {};
            return (
              <tr key={c.name}>
                <th scope="row">{c.name}</th>
                <td data-label="Temperature">{spec.temperature
                  ? <><span className="xt-val">{spec.temperature.value}</span><em>{spec.temperature.origin === 'mithson' ? 'Mithson' : 'Typical'}</em></>
                  : <span className="xt-ask">Ask our engineers</span>}
                </td>
                <td data-label="Pressure">{spec.pressure
                  ? <><span className="xt-val">{spec.pressure.value}</span><em>{spec.pressure.origin === 'mithson' ? 'Mithson' : 'Typical'}</em></>
                  : <span className="xt-ask">Ask our engineers</span>}
                </td>
                <td className="xt-params" data-label="Key technical parameters">{c.params}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Reveal>
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

export default function SealsXMasTreePage() {
  useEffect(() => {
    document.title = `${product.name} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page xt-page">
      <Hero />

      {/* 01 Understanding the seals */}
      <section className="section mp-section" id="xt-overview">
        <div className="container mp-split">
          <div>
            <Head number="01" label="Product overview" title="What are Christmas tree seals?" intro={overviewIntro} />
            <p className="xt-lead">Within these valves, different sealing components perform specific functions:</p>
            <div className="xt-roles">
              {overviewRoles.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.06} className="mp-card xt-role">
                  <span className="mp-icon"><Icon name={r.icon} size={20} /></span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="mp-note">{overviewNote}</Reveal>
          </div>
          <Reveal className="mu-figure xt-figure">
            <img src={imgSpringRing} alt="PTFE spring-energised seal with its metal energiser visible" loading="lazy" />
            <figcaption>A PTFE jacket with its corrosion-resistant energiser spring</figcaption>
          </Reveal>
        </div>
      </section>

      {/* 02 The four components */}
      <section className="mp-dark" id="xt-components">
        <div className="container">
          <Head number="02" label="Sealing components" title="A complete range of gate valve sealing elements" light
            intro="Four component groups, each with its own position, geometry and operating requirement. Pick one to compare." />
          <Components />
        </div>
      </section>

      {/* 03 Construction, exploded */}
      <section className="section mp-section" id="xt-construction">
        <div className="container">
          <Head number="03" label="Seal construction" title="Two components. One integrated sealing solution." intro={construction.intro} />
          <Exploded />
          <Reveal className="xt-steps">
            <h3 className="mp-subhead">How the assembly works</h3>
            <ol className="mp-numbered">
              {construction.steps.map((s, i) => (
                <li key={s}><span>{i + 1}</span><div>{s}</div></li>
              ))}
            </ol>
            <p className="mp-note">{construction.note}</p>
          </Reveal>
        </div>
      </section>

      {/* 04 Materials */}
      <section className="section mp-section mp-tint" id="xt-materials">
        <div className="container">
          <Head number="04" label="Materials" title="Material selection for wellhead service"
            intro="Material selection must account for operating temperature, pressure, fluid chemistry, mechanical loading and the intended service environment." />
          <div className="xt-materials">
            {materials.map((m, i) => (
              <Reveal key={m.key} delay={(i % 3) * 0.07} className="xt-material">
                <span className="xt-material-family">{m.family}</span>
                <h3>{m.name}</h3>
                <em>{m.short}</em>
                <p>{m.text}</p>
                {m.points.length > 0 && (
                  <ul className="mp-pills mu-pills-light">
                    {m.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                )}
                {m.extra && <p className="mu-sub">{m.extra}</p>}
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {materialsNote}</Reveal>
        </div>
      </section>

      {/* 05 Sealing positions, hotspots */}
      <section className="section mp-section" id="xt-positions">
        <div className="container">
          <Head number="05" label="Sealing positions" title="Where these components sit in the valve"
            intro="Tap a marker to see which component seals that interface." />
          <Positions />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {positionsNote}</Reveal>
        </div>
      </section>

      {/* 06 Applications */}
      <section className="mp-dark" id="xt-applications">
        <div className="container">
          <Head number="06" label="Applications" title="Supporting critical oilfield equipment" light />
          <div className="mu-advantages">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.07} className="mu-adv">
                <span className="mp-icon mp-icon--dark"><Icon name={a.icon} /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="xt-dark-note">{applicationsNote}</Reveal>
        </div>
      </section>

      {/* 07 Selection guide */}
      <section className="section mp-section" id="xt-selection">
        <div className="container">
          <Head number="07" label="Technical selection guide" title="Choosing the right Christmas tree seal" intro={selectionIntro} />
          <div className="xt-selection">
            {selectionGroups.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 0.07} className="mp-card">
                <h3>{g.title}</h3>
                <ul className="mp-checks">
                  {g.items.map((it) => <li key={it}><span><Icon name="check" size={14} /></span>{it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Send application data <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* 08 Technical specifications, compared */}
      <section className="section mp-section mp-tint" id="xt-specs">
        <div className="container">
          <Head number="08" label="Technical specifications" title="The four components, side by side"
            intro="The operating limits of each component depend on its construction, material grade and application." />
          <Comparison />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {specsNote}</Reveal>
          <Reveal className="xt-standard">
            <span className="mp-icon"><Icon name="shield" /></span>
            <div>
              <h3>Standards and documentation</h3>
              <p>{standardsNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 Quality */}
      <section className="section mp-section" id="xt-quality">
        <div className="container">
          <Head number="09" label="Quality & manufacturing" title="Precision from material selection to finished component"
            intro="The quality of a sealing component depends on more than its material name." />
          <div className="xt-quality">
            {quality.map((q, i) => (
              <Reveal key={q.title} delay={i * 0.06} className="xt-quality-step">
                <span className="mp-icon"><Icon name={q.icon} size={20} /></span>
                <h3>{q.title}</h3>
                <p>{q.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-note">{qualityNote}</Reveal>
        </div>
      </section>

      {/* 10 Installation */}
      <section className="section mp-section mp-tint" id="xt-installation">
        <div className="container">
          <Head number="10" label="Installation & maintenance" title="Maintaining the integrity of gate valve sealing systems" />
          <div className="mu-install">
            {installation.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.08} className="mp-card">
                <h3>{group.title}</h3>
                <ul className="mp-checks">
                  {group.items.map((it) => <li key={it}><span><Icon name="check" size={14} /></span>{it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-warn xt-safety"><Icon name="alert" size={18} /> {safetyNote}</Reveal>
        </div>
      </section>

      {/* 11 FAQ */}
      <section className="section mp-section" id="xt-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="11" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Mithson engineers confirm the right component for each valve." />
          <Faqs />
        </div>
      </section>

      {/* 12 CTA */}
      <section className="mp-cta" id="xt-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">12 — Engineering review</span>
            <h2>The right seal for the right valve application</h2>
            {closing.map((p) => <p key={p}>{p}</p>)}
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={APPLICATION_DATA} className="btn btn-white">Send application data <Arrow /></Link>
            <Link to={CONTACT} className="btn mp-btn-ghost">Request technical documentation <Arrow /></Link>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={product.slug} products={products} />
    </div>
  );
}

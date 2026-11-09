import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { ItemSpecList } from '../../../shared/components/ProductSpecList';
import { productItems } from '../../../content/productItems';
import { products, getProductBySlug } from '../../../content/products';
import {
  advantages,
  anatomy,
  closing,
  enquiryNote,
  enquiryTable,
  equipment,
  equipmentNote,
  faqs,
  heroChips,
  installation,
  installationNote,
  jacketMaterials,
  jacketNote,
  mUniHero,
  profiles,
  profilesNote,
  sealTypes,
  sealTypesNote,
  selectionFactors,
  springMaterialNote,
  springMaterials,
  springs,
  springsNote,
  stages,
  stagesNote,
} from '../../../content/mUniSeal';
// the MITH PLATE sheet carries the shared product-page look; only the extras live in MUniSeal.css
import '../MITH-PLATE/MithPlate.css';
import './MUniSeal.css';

import imgCanti from './assets/genre/Canti Seals.png';
import imgCoil from './assets/genre/Coil Seals.png';
import imgHeli from './assets/genre/Heli Seals.png';
import imgIdFace from './assets/genre/ID Face Seals.png';
import imgOdFace from './assets/genre/OD Face Seals.png';
import imgPtfeRod from './assets/ref/ptfe-rod.webp';
import imgFilledPtfe from './assets/ref/filled-ptfe.webp';
import imgPtfeRods from './assets/ref/ptfe-rods.webp';
import imgUCup from './assets/ref/profile-u-cup.webp';
import imgAnatomy from './assets/ref/seal-anatomy.webp';
import imgCutaway from './assets/ref/seal-cutaway.webp';
import imgSpringV from './assets/ref/spring-v.webp';
import imgSpringHelical from './assets/ref/spring-helical.webp';

const IMAGES = {
  'Canti Seals': imgCanti,
  'Coil Seals': imgCoil,
  'Heli Seals': imgHeli,
  'ID Face Seals': imgIdFace,
  'OD Face Seals': imgOdFace,
  'ptfe-rod': imgPtfeRod,
  'filled-ptfe': imgFilledPtfe,
  'ptfe-rods': imgPtfeRods,
  'profile-u-cup': imgUCup,
  'seal-anatomy': imgAnatomy,
  'seal-cutaway': imgCutaway,
  'spring-v': imgSpringV,
  'spring-helical': imgSpringHelical,
};

const product = getProductBySlug('m-uni-seal');
// the approved temperature, pressure and speed figures each variant already carries
const SPECS = productItems['m-uni-seal'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  spring: <path d="M4 7h16M5 11h14M4 15h16M6 19h12M6 5c2 2 10 2 12 0M6 9c2 2 10 2 12 0M6 13c2 2 10 2 12 0" />,
  gauge: <><path d="M4 18a9 9 0 1 1 16 0" /><path d="m12 13 4-4" /></>,
  slide: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  jacket: <><path d="M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" /><path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M8 11v4M16 11v4" /></>,
  seal: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /></>,
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
    <section ref={ref} className="mp-hero mu-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{mUniHero.label}</span>
          <h1>
            {mUniHero.title}
            <span>{mUniHero.titleAccent}</span>
            {mUniHero.titleRest}
          </h1>
          <p>{mUniHero.lead}</p>
          <div className="mp-actions">
            <a href="#mu-types" className="btn btn-primary">Explore seal configurations <Arrow /></a>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Discuss your application</Link>
          </div>
        </motion.div>

        <motion.div
          className="mu-hero-visual"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.9 }}
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

/** Dark band: pick one of the five variants Mithson photographs. */
function SealTypes() {
  const [active, setActive] = useState(0);
  const item = sealTypes[active];
  return (
    <div className="mu-types">
      <div className="mu-type-tabs" role="tablist" aria-label="Seal types">
        {sealTypes.map((t, i) => (
          <button key={t.key} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)}>
            {t.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="mu-type-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="mu-type-visual">
            <img src={IMAGES[item.image]} alt={item.name} />
          </div>
          <div className="mu-type-body">
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            {SPECS[item.name] && <ItemSpecList spec={SPECS[item.name]} />}
            <p className="mu-type-note"><Icon name="alert" size={16} /> {sealTypesNote}</p>
            <Link to={APPLICATION_DATA} className="btn btn-white mu-type-btn">Enquire about {item.name} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** Shared picker: a list of options on the left, the chosen one shown on the right. */
function Picker({ items, note, label, renderBody }) {
  const [active, setActive] = useState(0);
  const item = items[active];
  return (
    <>
      <div className="mu-picker">
        <div className="mu-picker-list" role="tablist" aria-label={label}>
          {items.map((it, i) => (
            <button key={it.key} type="button" role="tab" aria-selected={i === active} className="mp-material-opt" onClick={() => setActive(i)}>
              <span className="mu-thumb"><img src={IMAGES[it.image]} alt="" loading="lazy" /></span>
              <span>
                <strong>{it.name}</strong>
                {it.short && <em>{it.short}</em>}
              </span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.key}
            className="mu-picker-panel"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderBody(item)}
          </motion.div>
        </AnimatePresence>
      </div>
      {note && <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {note}</Reveal>}
    </>
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

function Stages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  return (
    <ol ref={ref} className="mp-steps mu-stages">
      <span className="mp-steps-line" aria-hidden="true">
        <motion.span initial={{ scaleX: reduceMotion ? 1 : 0 }} animate={inView ? { scaleX: 1 } : undefined} transition={{ duration: 1.2, ease: EASE }} />
      </span>
      {stages.map((s, i) => (
        <motion.li
          key={s.title}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45, delay: i * 0.12 }}
        >
          <span className="mp-step-num">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}

export default function MUNISealPage() {
  useEffect(() => {
    document.title = `${product.name} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page mu-page">
      <Hero />

      {/* 01 What is a spring-energised seal */}
      <section className="section mp-section" id="mu-overview">
        <div className="container mp-split">
          <div>
            <Head number="01" label="Product overview" title="What is a spring-energised seal?"
              intro="A spring-energised seal is a specialised polymer sealing component built from two elements that work together." />
            <div className="mu-anatomy">
              {anatomy.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.08} className="mp-card">
                  <span className="mp-icon"><Icon name={a.icon} /></span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <p className="mu-sub">{a.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mu-figure">
            <img src={imgAnatomy} alt="Cutaway of a spring-energised seal showing the jacket and the coil spring" loading="lazy" />
            <figcaption>Seal jacket over a canted coil spring</figcaption>
          </Reveal>
        </div>
      </section>

      {/* 02 How it works */}
      <section className="section mp-section mp-tint" id="mu-how">
        <div className="container">
          <Head number="02" label="How M-UNI Seal works" title="Spring force and pressure-assisted sealing"
            intro="The sealing process combines mechanical spring force with the properties of the polymer jacket." />
          <Stages />
          <Reveal as="p" className="mp-warn mu-stage-note"><Icon name="alert" size={18} /> {stagesNote}</Reveal>
        </div>
      </section>

      {/* 03 Seal types */}
      <section className="mp-dark" id="mu-types">
        <div className="container">
          <Head number="03" label="Seal configurations" title="Five seal types, one sealing principle" light
            intro="Every M-UNI variant pairs a polymer jacket with a spring energiser. Pick a type to compare." />
          <SealTypes />
        </div>
      </section>

      {/* 04 Jacket profiles */}
      <section className="section mp-section" id="mu-profiles">
        <div className="container">
          <Head number="04" label="Jacket profiles" title="Profiles for different sealing requirements"
            intro="The correct profile depends on whether the application is static, reciprocating, rotary or face-sealing." />
          <Picker
            items={profiles}
            note={profilesNote}
            label="Jacket profiles"
            renderBody={(item) => (
              <>
                <div className="mu-panel-visual"><img src={IMAGES[item.image]} alt={item.name} /></div>
                <div className="mu-panel-body">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <p className="mu-watch"><Icon name="alert" size={16} /> {item.watch}</p>
                </div>
              </>
            )}
          />
        </div>
      </section>

      {/* 05 Spring designs */}
      <section className="section mp-section mp-tint" id="mu-springs">
        <div className="container">
          <Head number="05" label="Spring energiser options" title="Selecting the spring design"
            intro="The spring influences the force applied to the jacket, the available deflection and how the seal behaves in service." />
          <Picker
            items={springs}
            note={springsNote}
            label="Spring designs"
            renderBody={(item) => (
              <>
                <div className="mu-panel-visual"><img src={IMAGES[item.image]} alt={item.name} /></div>
                <div className="mu-panel-body">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </>
            )}
          />
        </div>
      </section>

      {/* 06 Jacket materials */}
      <section className="section mp-section" id="mu-materials">
        <div className="container">
          <Head number="06" label="Material selection" title="Polymer jackets for sealing performance"
            intro="The jacket material directly influences friction, wear, chemical compatibility, thermal behaviour and mechanical performance." />
          <Picker
            items={jacketMaterials}
            note={jacketNote}
            label="Jacket materials"
            renderBody={(item) => (
              <>
                <div className="mu-panel-visual mu-panel-visual--light"><img src={IMAGES[item.image]} alt={item.name} /></div>
                <div className="mu-panel-body">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <ul className="mp-pills mu-pills-light">
                    {item.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </>
            )}
          />

          <Reveal className="mu-springmat">
            <div>
              <span className="mp-icon"><Icon name="shield" /></span>
              <h3>Corrosion resistance and mechanical stability</h3>
              <p>The spring energiser must keep its mechanical characteristics throughout the intended operating environment.</p>
            </div>
            <div>
              <div className="mu-chips">
                {springMaterials.map((m) => <span key={m}>{m}</span>)}
              </div>
              <p className="mp-note">{springMaterialNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 Advantages */}
      <section className="mp-dark" id="mu-advantages">
        <div className="container">
          <Head number="07" label="Key engineering advantages" title="Why spring-energised polymer seals?" light />
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

      {/* 08 Applications */}
      <section className="section mp-section" id="mu-applications">
        <div className="container">
          <Head number="08" label="Applications" title="Sealing across industrial equipment"
            intro="Spring-energised seals are used where conventional elastomer seals may not meet the required mix of temperature capability, chemical compatibility, friction and dimensional stability." />
          <div className="mp-grid mp-grid--3">
            {equipment.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 0.07} className="mp-card">
                <span className="mp-icon"><Icon name={e.icon} /></span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-note">{equipmentNote}</Reveal>
        </div>
      </section>

      {/* 09 Selection and enquiry */}
      <section className="section mp-section mp-tint" id="mu-selection">
        <div className="container mp-split">
          <div>
            <Head number="09" label="Technical selection" title="Selecting the right M-UNI Seal"
              intro="A spring-energised seal should be selected on the complete operating environment, not on temperature or pressure alone." />
            <ol className="mp-numbered">
              {selectionFactors.map((f, i) => (
                <Reveal as="li" key={f.title} delay={i * 0.05}>
                  <span>{i + 1}</span>
                  <div><strong>{f.title}</strong> {f.text}</div>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <Reveal as="h3" className="mp-subhead">What to include in your enquiry</Reveal>
            <Reveal className="mu-table">
              <div className="mu-table-head"><span>Parameter</span><span>Information required</span></div>
              {enquiryTable.map(([k, v]) => (
                <div key={k}><span>{k}</span><span>{v}</span></div>
              ))}
            </Reveal>
            <Reveal as="p" className="mp-note">{enquiryNote}</Reveal>
            <Reveal>
              <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Send application data <Arrow /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10 Installation */}
      <section className="section mp-section" id="mu-installation">
        <div className="container">
          <Head number="10" label="Installation & maintenance" title="Protecting sealing performance"
            intro="Correct installation is important to achieve the intended sealing performance." />
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
          <Reveal as="p" className="mp-note">{installationNote}</Reveal>
        </div>
      </section>

      {/* 11 FAQ */}
      <section className="section mp-section mp-tint" id="mu-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="11" label="FAQ" title="Frequently asked questions"
            intro="General guidance only. Mithson engineers confirm the right configuration for each application." />
          <Faqs />
        </div>
      </section>

      {/* 12 CTA */}
      <section className="mp-cta" id="mu-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">12 — Engineering review</span>
            <h2>Let&apos;s find the right sealing configuration</h2>
            {closing.map((p) => <p key={p}>{p}</p>)}
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={APPLICATION_DATA} className="btn btn-white">Send application data <Arrow /></Link>
            <Link to={CONTACT} className="btn mp-btn-ghost">Request technical information <Arrow /></Link>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={product.slug} products={products} />
    </div>
  );
}

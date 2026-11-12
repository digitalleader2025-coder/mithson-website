import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { RelatedProducts } from '../../../shared/components/ProductPage';
import { ItemSpecList } from '../../../shared/components/ProductSpecList';
import { products as allProducts, getProductBySlug } from '../../../content/products';
import { productItems } from '../../../content/productItems';
import {
  applications,
  benefits,
  carbonGains,
  closing,
  considerations,
  customAsks,
  customOptions,
  faqs,
  heroChips,
  heroSpecs,
  heroTags,
  inspection,
  manufacturing,
  materialGrades,
  materialIntro,
  materialNote,
  materialRows,
  overviewIntro,
  overviewText,
  parameters,
  parametersNote,
  products,
  qualityNote,
  worksCards,
  worksIntro,
  worksWith,
  worksWithout,
  wtHero,
} from '../../../content/washersTransmission';
// the MITH PLATE sheet carries the shared product-page look; only the extras live here
import '../MITH-PLATE/MithPlate.css';
import '../M-UNI-Seal/MUniSeal.css';
import './WashersTransmission.css';

// existing product photographs - kept exactly as they are
import imgSplit from './assets/PEEK-Split Lock Washer.png';
import imgThrust from './assets/PEEK-Thrust Washer.png';
import imgSeals from './assets/PTFE Transmission Seals.png';
import imgProduct1 from './assets/Product 1.png';

const IMAGES = { thrust: imgThrust, split: imgSplit, seals: imgSeals, product1: imgProduct1 };

const product = getProductBySlug('washers-transmission');
const SPECS = productItems['washers-transmission'];
const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';

const ICONS = {
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  thermo: <><path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0Z" /><path d="M12 9v5" /></>,
  gauge: <><path d="M12 21a9 9 0 1 0-9-9" /><path d="M3 12h3M12 3v3M19.5 6.5 17 9M12 12l5-3" /></>,
  drawing: <><path d="M5 3h10l4 4v14H5z" /><path d="M8 13h8M8 17h5M14 3v5h5" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 13h6M9 17h4" /></>,
  slide: <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  strength: <><path d="M4 10v4M20 10v4M7 7v10M17 7v10M7 12h10" /></>,
  caliper: <><path d="M5 3v18M19 3v18" /><path d="M5 8h14M9 8v4M15 8v4" /></>,
  feather: <><path d="M20 4c0 9-5 13-12 14 0-7 4-12 12-14Z" /><path d="M4 20c3-5 7-8 12-10" /></>,
  speed: <><path d="M12 21a9 9 0 1 0-9-9" /><path d="m12 12 6-4" /><circle cx="12" cy="12" r="1.6" /></>,
  gear: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  planet: <><circle cx="12" cy="12" r="4" /><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-20 12 12)" /></>,
  box: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 11h18M9 6V4h6v2" /></>,
  car: <><path d="M4 16v-3l2-5h12l2 5v3" /><path d="M3 16h18v3h-3v-3M6 19H3v-3" /><circle cx="7.5" cy="16" r="1.4" /><circle cx="16.5" cy="16" r="1.4" /></>,
  rotor: <><circle cx="12" cy="12" r="2.5" /><path d="M12 9.5V3M14.2 13.2l5.6 3.3M9.8 13.2l-5.6 3.3" /></>,
  anvil: <><path d="M4 8h10l3 3h3v3h-4l-2 2H8l-2-2H4z" /><path d="M8 16v3h8v-3M6 21h12" /></>,
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
    <section ref={ref} className="mp-hero wt-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container mu-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{wtHero.label}</span>
          <h1>
            {wtHero.title}
            <span>{wtHero.titleAccent}</span>
            {wtHero.titleRest}
          </h1>
          <p>{wtHero.lead}</p>
          <p className="wt-hero-sub">{wtHero.lead2}</p>
          <ul className="wt-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#wt-range" className="btn btn-primary">Explore the range <Arrow /></a>
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

/** 02 - the three product types, picked one at a time. */
function Range({ onZoom }) {
  const [active, setActive] = useState(products[0].key);
  const item = products.find((p) => p.key === active);
  const spec = item.spec ? SPECS[item.spec] : null;
  return (
    <>
      <div className="wt-picks" role="tablist" aria-label="Product types">
        {products.map((p) => (
          <button key={p.key} type="button" role="tab" aria-selected={p.key === active} onClick={() => setActive(p.key)}>
            <b>{p.number}</b>
            <span>{p.name}</span>
            <i>{p.job}</i>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          className="wt-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="wt-panel-photos">
            <button type="button" className="wt-shot" onClick={() => onZoom({ src: IMAGES[item.photo], alt: item.name })}>
              <img src={IMAGES[item.photo]} alt={item.name} />
              <span>Mithson {item.short}</span>
            </button>
            {item.detail !== item.photo && (
              <button type="button" className="wt-shot wt-shot--small" onClick={() => onZoom({ src: IMAGES[item.detail], alt: `${item.name} detail` })}>
                <img src={IMAGES[item.detail]} alt={`${item.name} detail`} loading="lazy" />
                <span>Detail view</span>
              </button>
            )}
          </div>
          <div className="wt-panel-body">
            <h3>{item.name}</h3>
            <p className="wt-sub">{item.subtitle}</p>
            <p>{item.text}</p>
            {spec && <ItemSpecList spec={spec} />}
            {item.principle && (
              <p className="wt-principle"><strong>How it works.</strong> {item.principle}</p>
            )}
            <ul className="mp-checks">
              {item.points.map((pt) => <li key={pt}><span><Icon name="check" size={14} /></span>{pt}</li>)}
            </ul>
            {item.gains && (
              <div className="wt-gains">
                <strong>What it does for you</strong>
                <ul>{item.gains.map((g) => <li key={g}>{g}</li>)}</ul>
              </div>
            )}
            {item.note && <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>}
            <p className="wt-uses"><strong>Applications:</strong> {item.uses}</p>
            <p className="wt-asks"><strong>To quote we need:</strong> {item.asks.join(' · ')}</p>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Enquire about the {item.short.toLowerCase()} <Arrow /></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/**
 * 04 - the signature of this page: the thrust interface drawn in section, with a
 * switch that takes the washer out so you can see what it is actually protecting.
 */
function ThrustDiagram() {
  const [withWasher, setWithWasher] = useState(true);
  const [card, setCard] = useState(worksCards[0].key);
  const reduceMotion = useReducedMotion();
  const active = worksCards.find((c) => c.key === card);

  return (
    <div className="wt-works">
      <div className="wt-works-art">
        <svg viewBox="0 0 420 240" role="img" aria-label={withWasher ? 'Thrust interface with the washer fitted' : 'Thrust interface without a washer'}>
          {/* housing */}
          <rect className="wt-housing" x="20" y="30" width="60" height="180" rx="6" />
          <text className="wt-tag" x="50" y="226" textAnchor="middle">Housing</text>

          {/* shaft */}
          <rect className="wt-shaft" x="80" y="100" width="320" height="40" rx="6" />
          <text className="wt-tag" x="330" y="92" textAnchor="middle">Shaft</text>

          {/* gear, pushed left by the axial load */}
          <motion.g animate={{ x: withWasher || reduceMotion ? 0 : -16 }} transition={{ duration: 0.6, ease: EASE }}>
            <rect className="wt-gear" x="118" y="46" width="64" height="148" rx="8" />
            <path className="wt-teeth" d="M182 54h16M182 76h16M182 98h16M182 142h16M182 164h16M182 186h16" />
            <text className="wt-tag" x="150" y="38" textAnchor="middle">Gear</text>
          </motion.g>

          {/* the washer, or the bare metal contact that replaces it */}
          <AnimatePresence mode="wait">
            {withWasher ? (
              <motion.g key="washer"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}>
                <rect className="wt-washer" x="92" y="52" width="22" height="136" rx="5" />
                <text className="wt-tag wt-tag--ours" x="103" y="226" textAnchor="middle">PEEK washer</text>
              </motion.g>
            ) : (
              <motion.g key="contact"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}>
                <path className="wt-rub" d="M100 52v136" />
                <path className="wt-spark" d="M92 78l12 8-12 8M92 140l12 8-12 8" />
                <text className="wt-tag wt-tag--warn" x="100" y="226" textAnchor="middle">Metal on metal</text>
              </motion.g>
            )}
          </AnimatePresence>

          {/* axial load arrows */}
          <g className="wt-force">
            <path d="M260 70h-60M206 64l-8 6 8 6" />
            <text className="wt-tag" x="268" y="74">Axial load</text>
          </g>
        </svg>

        <div className="wt-works-switch">
          <button type="button" aria-pressed={withWasher} onClick={() => setWithWasher(true)}>With the washer</button>
          <button type="button" aria-pressed={!withWasher} onClick={() => setWithWasher(false)}>Without it</button>
        </div>
        <p className="wt-works-caption">{withWasher ? worksWith : worksWithout}</p>
      </div>

      <div className="wt-works-cards">
        {worksCards.map((c) => (
          <button
            key={c.key}
            type="button"
            className={`wt-work-card${c.key === card ? ' is-on' : ''}`}
            aria-expanded={c.key === card}
            onClick={() => setCard(c.key)}
          >
            <b>{c.number}</b>
            <h3>{c.title}</h3>
            {c.key === card && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>{active.text}</motion.p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/** 03 - the three PEEK grades compared property by property. */
function GradeMatrix() {
  return (
    <div className="wt-matrix">
      <div className="wt-matrix-head">
        <span />
        {materialGrades.map((g) => (
          <span key={g.key} className={g.key === 'carbon' ? 'is-ours' : undefined}>
            <b>{g.name}</b>
            <i>{g.use}</i>
          </span>
        ))}
      </div>
      {materialRows.map((row, i) => (
        <Reveal key={row.property} delay={i * 0.05} className="wt-matrix-row">
          <span className="wt-matrix-prop">{row.property}</span>
          {materialGrades.map((g) => {
            const [label, level] = row[g.key];
            return (
              <span key={g.key} className={`wt-cell${g.key === 'carbon' ? ' is-ours' : ''}`} data-label={g.name}>
                <em className={`wt-bar wt-bar--${level}`} aria-hidden="true"><i /></em>
                {label}
              </span>
            );
          })}
        </Reveal>
      ))}
    </div>
  );
}

function Considerations() {
  const [open, setOpen] = useState(considerations[0].key);
  return (
    <div className="wt-consider">
      {considerations.map((c, i) => {
        const isOpen = c.key === open;
        return (
          <Reveal key={c.key} delay={i * 0.05} className={`wt-consider-card${isOpen ? ' is-open' : ''}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : c.key)}>
              <span>{c.title}</span>
              <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {c.items.map((it) => <li key={it}>{it}</li>)}
                </motion.ul>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
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
          className="wt-lightbox"
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

export default function WashersTransmissionPage() {
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = 'PEEK Thrust Washers & Split-Lock Washers | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page wt-page">
      <Hero />

      {/* 01 Engineered for transmission reliability */}
      <section className="section mp-section" id="wt-overview">
        <div className="container mp-split">
          <div>
            <Head number="01" label="Why polymer" title="Engineered for transmission reliability" intro={overviewIntro} />
            <p className="wt-lead">{overviewText}</p>
          </div>
          <Reveal className="mu-figure wt-figure">
            <button type="button" className="wt-shot" onClick={() => setShot({ src: imgThrust, alt: 'Mithson PEEK thrust washer' })}>
              <img src={imgThrust} alt="Mithson PEEK thrust washer" loading="lazy" />
            </button>
            <figcaption>The carbon-filled PEEK thrust washer, specified to 250°C continuous.</figcaption>
          </Reveal>
        </div>

        <div className="container">
          <div className="wt-benefits">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 0.06} className="mp-card wt-benefit">
                <span className="mp-icon"><Icon name={b.icon} size={20} /></span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Product range */}
      <section className="mp-dark" id="wt-range">
        <div className="container">
          <Head number="02" label="Product range" title="Three product types" light
            intro="A PEEK thrust washer, a PEEK split-lock washer and PTFE transmission seals. Pick one to see it in full." />
          <Range onZoom={setShot} />
        </div>
      </section>

      {/* 03 Material technology */}
      <section className="section mp-section" id="wt-material">
        <div className="container">
          <Head number="03" label="Material technology" title="Why carbon-filled PEEK" intro={materialIntro} />
          <Reveal className="wt-gains-band">
            <h3>What the carbon fibre adds</h3>
            <ul className="mp-checks">
              {carbonGains.map((g) => <li key={g}><span><Icon name="check" size={14} /></span>{g}</li>)}
            </ul>
          </Reveal>
          <GradeMatrix />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Read this with the table.</strong> {materialNote}</Reveal>
        </div>
      </section>

      {/* 04 How it works */}
      <section className="section mp-section mp-tint" id="wt-works">
        <div className="container">
          <Head number="04" label="Working principle" title="How a thrust washer works" intro={worksIntro} />
          <ThrustDiagram />
        </div>
      </section>

      {/* 05 Engineering parameters */}
      <section className="section mp-section" id="wt-parameters">
        <div className="container">
          <Head number="05" label="Engineering parameters" title="Built for demanding operating conditions"
            intro="Six parameters decide whether a washer survives. Here is what each one means, and where the number comes from." />
          <div className="wt-params">
            {parameters.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.07} className="wt-param">
                <span className="mp-icon"><Icon name={p.icon} size={20} /></span>
                <h3>{p.title}</h3>
                <strong>{p.value}</strong>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>What we publish, and what we do not.</strong> {parametersNote}</Reveal>
        </div>
      </section>

      {/* 06 Applications */}
      <section className="mp-dark" id="wt-applications">
        <div className="container">
          <Head number="06" label="Applications" title="Where transmission washers are used" light
            intro="Use the application areas as a starting point, not as an approval. Each one is confirmed against your assembly." />
          <div className="wt-apps">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06} className="wt-app">
                <span className="mp-icon"><Icon name={a.icon} size={20} /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 What to consider */}
      <section className="section mp-section" id="wt-consider">
        <div className="container mp-split">
          <Head number="07" label="Selection" title="What to consider when choosing a washer"
            intro="Five groups of questions. Answer them and the washer almost specifies itself." />
          <Considerations />
        </div>
      </section>

      {/* 08 Manufacturing and quality */}
      <section className="section mp-section mp-tint" id="wt-quality">
        <div className="container">
          <Head number="08" label="Manufacturing & quality" title="Precision manufacturing, consistent performance"
            intro="Every washer is made to the specified geometry, material grade and dimensional requirements." />
          <div className="wt-quality">
            <Reveal>
              <h3 className="mp-subhead">What we can make</h3>
              <ul className="mp-checks">
                {manufacturing.map((m) => <li key={m}><span><Icon name="check" size={14} /></span>{m}</li>)}
              </ul>
            </Reveal>
            <Reveal>
              <h3 className="mp-subhead">What we inspect</h3>
              <ol className="wt-inspect">
                {inspection.map((q, i) => (
                  <li key={q}><b>{String(i + 1).padStart(2, '0')}</b>{q}</li>
                ))}
              </ol>
            </Reveal>
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Certificates.</strong> {qualityNote}</Reveal>
        </div>
      </section>

      {/* 09 Custom engineering */}
      <section className="section mp-section" id="wt-custom">
        <div className="container mp-split">
          <div>
            <Head number="09" label="Custom engineering" title="Washers designed around your requirements"
              intro="Every transmission has its own mechanical configuration, load conditions and dimensions. Work starts from your drawing, specification or reference sample." />
            <div className="wt-options">
              <h3>What can change</h3>
              <ul>{customOptions.map((o) => <li key={o}>{o}</li>)}</ul>
            </div>
            <Link to={APPLICATION_DATA} className="btn btn-navy mp-inline-btn">Discuss your requirements <Arrow /></Link>
          </div>
          <Reveal className="wt-asks-card">
            <h3>What to send us</h3>
            <ol>
              {customAsks.map((a, i) => (
                <li key={a}><b>{String(i + 1).padStart(2, '0')}</b>{a}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 10 At a glance */}
      <section className="section mp-section" id="wt-specs">
        <div className="container">
          <Head number="10" label="At a glance" title="Product summary"
            intro="The whole specification in one place. Anything shown as application-dependent is confirmed by our engineers for your assembly." />
          <div className="mu-table wt-table">
            <div className="mu-table-head"><span>Parameter</span><span>Specification</span></div>
            {heroSpecs.map(([k, v]) => <div key={k}><span>{k}</span><span>{v}</span></div>)}
          </div>
        </div>
      </section>

      {/* 11 FAQ */}
      <section className="section mp-section mp-tint" id="wt-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="11" label="FAQ" title="Common questions"
            intro="General guidance only. Mithson engineers confirm the right washer for each assembly." />
          <Faqs />
        </div>
      </section>

      <RelatedProducts product={product} products={allProducts} />

      {/* 12 CTA */}
      <section className="mp-cta" id="wt-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">12 — Engineering review</span>
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

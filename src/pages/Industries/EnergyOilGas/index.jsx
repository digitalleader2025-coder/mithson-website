import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  checklist,
  closing,
  conditions,
  disclaimer,
  equipment,
  families,
  familiesIntro,
  faqs,
  heroChips,
  heroTags,
  materials,
  materialSteps,
  materialsIntro,
  materialsNote,
  ogHero,
  photoCredits,
  pressureNote,
  sealingIntro,
  sealingTypes,
  standards,
  standardsIntro,
  standardsNote,
  steps,
  valueChain,
} from '../../../content/industryOilGas';
// the MITH PLATE sheet carries the shared section look; only the extras live here
import '../../Products/MITH-PLATE/MithPlate.css';
import '../../Products/M-UNI-Seal/MUniSeal.css';
import './EnergyOilGas.css';

import imgOffshore from '../../../assets/industries/oil-gas/offshore-rigs.jpg';
import imgRefinery from '../../../assets/industries/oil-gas/refinery.jpg';
import imgGasPlant from '../../../assets/industries/oil-gas/gas-plant.jpg';
import imgLng from '../../../assets/industries/oil-gas/lng-terminal.jpg';
import imgPipeline from '../../../assets/industries/oil-gas/pipeline-valve.jpg';
// the real Mithson product photos, unchanged, from the oil & gas product pages
import pStemPacking from '../../../assets/api6a/Stem Packing Set.png';
import pStemSeal from '../../../assets/api6a/Stem Seal.png';
import pFaceSeal from '../../../assets/api6a/ID OD Seal.png';
import pBop from '../../../assets/api6a/BOP Seal.png';
import pPlunger from '../../../assets/wellservice/Plunger Packing Set.png';
import pPumpPacking from '../../../assets/wellservice/Pump Packing Set.png';
import pValveSeat from '../../../assets/wellservice/Valve Seat Insert.png';
import pLinerSeal from '../../../assets/wellservice/Mud Pump Liner Seal.png';
import pBodyBonnet from '../../../assets/api6d/Body-Bonnet Seal.png';
import pSeatRetainer from '../../../assets/api6d/Seat Retainer.png';
import pSeatRing from '../../../assets/api6d/Peek Seat Ring.png';
import pLngSeal from '../../../assets/api6d/LNG Seal.png';

const IMAGES = { offshore: imgOffshore, refinery: imgRefinery, gasplant: imgGasPlant, lng: imgLng, pipeline: imgPipeline };
const PRODUCTS = {
  stemPacking: pStemPacking, stemSeal: pStemSeal, faceSeal: pFaceSeal, bop: pBop,
  plunger: pPlunger, pumpPacking: pPumpPacking, valveSeat: pValveSeat, linerSeal: pLinerSeal,
  bodyBonnet: pBodyBonnet, seatRetainer: pSeatRetainer, seatRing: pSeatRing, lngSeal: pLngSeal,
};

const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION_DATA = '/connect-with-us/application-data';
const OIL_GAS_SEAL = '/oil-gas-seal';

const ICONS = {
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z" /><path d="M8 7h7M8 11h7" /></>,
  snow: <path d="M12 3v18M4 7l16 10M20 7 4 17M12 7l-3-2M12 7l3-2M12 17l-3 2M12 17l3 2" />,
  gauge: <><path d="M12 21a9 9 0 1 0-9-9" /><path d="M3 12h3M12 3v3M19.5 6.5 17 9M12 12l5-3" /></>,
  thermo: <><path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0Z" /><path d="M12 9v5" /></>,
  burst: <path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5 19 19M19 5l-3.5 3.5M8.5 15.5 5 19" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
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
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -50]);

  return (
    <section ref={ref} className="mp-hero og-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <motion.div className="og-hero-photo" style={{ y: imgY }} aria-hidden="true">
        <img src={imgOffshore} alt="" />
      </motion.div>
      <div className="container og-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{ogHero.label}</span>
          <h1>
            {ogHero.title}
            <span>{ogHero.titleAccent}</span>
            {ogHero.titleRest}
          </h1>
          <p>{ogHero.lead}</p>
          <p className="og-hero-sub">{ogHero.lead2}</p>
          <ul className="og-tags">
            {heroTags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mp-actions">
            <a href="#og-families" className="btn btn-primary">Explore our sealing solutions <Arrow /></a>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Send your requirement</Link>
          </div>
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

/**
 * 01 - the signature of this page: the well and the line out of it, drawn in section,
 * with each of the three product families marked where it actually sits.
 */
function WellMap({ active, onPick }) {
  const lit = (k) => (active === k ? ' is-lit' : '');
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="Where each seal family sits, from wellhead to LNG">
      {/* sky and ground */}
      <rect className="og-sky" x="0" y="0" width="420" height="120" />
      <rect className="og-ground" x="0" y="120" width="420" height="180" />

      {/* casing down the hole */}
      <rect className="og-casing" x="86" y="120" width="10" height="170" />
      <rect className="og-casing" x="124" y="120" width="10" height="170" />
      <rect className="og-bore" x="96" y="120" width="28" height="170" />

      {/* the tree on top */}
      <g className={`og-part og-tree${lit('wellhead')}`} onClick={() => onPick('wellhead')}>
        <rect x="80" y="74" width="60" height="46" rx="4" />
        <rect x="100" y="52" width="20" height="24" rx="3" />
        <rect x="62" y="86" width="20" height="12" rx="3" />
        <rect x="138" y="86" width="20" height="12" rx="3" />
      </g>
      <text className="og-map-label" x="110" y="44" textAnchor="middle">Wellhead &amp; tree</text>

      {/* the service pump on the pad */}
      <g className={`og-part og-pump${lit('well-service')}`} onClick={() => onPick('well-service')}>
        <rect x="196" y="92" width="58" height="28" rx="4" />
        <rect x="254" y="100" width="26" height="12" rx="3" />
        <circle cx="212" cy="106" r="7" />
      </g>
      <text className="og-map-label" x="225" y="84" textAnchor="middle">Well service pump</text>

      {/* the line out: pipeline valve to LNG tank */}
      <path className="og-pipe" d="M158 62h120" />
      <g className={`og-part og-valve${lit('api6d')}`} onClick={() => onPick('api6d')}>
        <path d="M278 52h24v20h-24z" />
        <rect x="286" y="40" width="8" height="14" rx="2" />
      </g>
      <path className="og-pipe" d="M302 62h22" />
      <g className={`og-part og-tank${lit('api6d')}`} onClick={() => onPick('api6d')}>
        <ellipse cx="358" cy="74" rx="34" ry="30" />
      </g>
      <text className="og-map-label" x="330" y="30" textAnchor="middle">Pipeline &amp; LNG</text>
      <text className="og-map-label og-map-label--small" x="358" y="118" textAnchor="middle">~−162°C</text>
    </svg>
  );
}

function Families({ onZoom }) {
  const [active, setActive] = useState(families[0].key);
  const item = families.find((f) => f.key === active);
  return (
    <div className="og-families">
      <div className="og-map">
        <WellMap active={active} onPick={setActive} />
        <p className="og-map-note">Select a part of the picture, or use the list.</p>
      </div>

      <div className="og-family-body">
        <div className="og-picks" role="tablist" aria-label="Product families">
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
            className="og-panel"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <h3>{item.name}</h3>
            <p className="og-sub">{item.tagline}</p>
            <p>{item.text}</p>

            <div className="og-products">
              {item.products.map((p) => (
                <div key={p.name} className="og-product">
                  <button type="button" className="og-product-shot" onClick={() => onZoom({ src: PRODUCTS[p.image], alt: `Mithson ${p.name}` })}
                    aria-label={`Enlarge ${p.name} photo`}>
                    <img src={PRODUCTS[p.image]} alt={`Mithson ${p.name}`} loading="lazy" />
                  </button>
                  <strong>{p.name}</strong>
                  <em>{p.job}</em>
                  <span><b>Material:</b> {p.materials}</span>
                  <span><b>Equipment:</b> {p.where}</span>
                  {p.pressure && <b className="og-pressure">{p.pressure}</b>}
                </div>
              ))}
            </div>

            {item.note && <p className="mu-watch"><Icon name="alert" size={16} /> {item.note}</p>}
            <p className="og-uses"><strong>Used in:</strong> {item.uses}</p>
            <Link to={item.path} className="btn btn-navy mp-inline-btn">View the full product page <Arrow /></Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** 02 - the six sealing arrangements, each drawn in section. */
function SealArt({ kind }) {
  return (
    <svg viewBox="0 0 160 90" role="img" aria-label={`${kind} sealing, cross-section`}>
      {/* housing above and below, with the gland between */}
      <rect className="og-metal" x="6" y="6" width="148" height="22" rx="3" />
      <rect className="og-metal" x="6" y="62" width="148" height="22" rx="3" />

      {kind === 'static' && (
        <>
          <rect className="og-metal" x="6" y="28" width="148" height="34" rx="2" opacity="0.18" />
          <circle className="og-seal" cx="80" cy="45" r="15" />
          <path className="og-force" d="M80 34v-4M80 56v4" />
        </>
      )}

      {kind === 'dynamic' && (
        <>
          <rect className="og-shaft" x="6" y="36" width="148" height="18" rx="3" />
          <rect className="og-seal" x="62" y="28" width="12" height="34" rx="4" />
          <rect className="og-seal" x="86" y="28" width="12" height="34" rx="4" />
          <path className="og-force" d="M112 45h26M132 40l6 5-6 5" />
        </>
      )}

      {kind === 'spring' && (
        <>
          <path className="og-jacket" d="M58 30h44v30H58a9 9 0 0 1 0-30Z" />
          <path className="og-spring" d="M66 38l6 6-6 6 6 6M78 38l6 6-6 6 6 6" />
          <path className="og-force" d="M80 26v-5M80 64v5" />
        </>
      )}

      {kind === 'antiextrusion' && (
        <>
          <circle className="og-seal" cx="72" cy="45" r="15" />
          <rect className="og-backup" x="90" y="30" width="14" height="30" rx="2" />
          <path className="og-gap" d="M104 60h18" />
          <path className="og-force" d="M40 45h16M50 40l6 5-6 5" />
        </>
      )}

      {kind === 'rgd' && (
        <>
          <circle className="og-seal" cx="80" cy="45" r="16" />
          <g className="og-bubbles">
            <circle cx="74" cy="40" r="3" />
            <circle cx="85" cy="48" r="2.4" />
            <circle cx="79" cy="52" r="2" />
          </g>
          <path className="og-force" d="M110 45h22M126 40l6 5-6 5" />
        </>
      )}

      {kind === 'cryogenic' && (
        <>
          <path className="og-jacket" d="M58 30h44v30H58a9 9 0 0 1 0-30Z" />
          <path className="og-spring" d="M66 38l6 6-6 6 6 6M78 38l6 6-6 6 6 6" />
          <g className="og-frost">
            <path d="M118 36v14M112 43h12M114 38l8 10M122 38l-8 10" />
          </g>
        </>
      )}
    </svg>
  );
}

function SealingTypes() {
  const [open, setOpen] = useState(sealingTypes[0].key);
  return (
    <div className="og-seals">
      {sealingTypes.map((s, i) => {
        const isOpen = s.key === open;
        return (
          <Reveal key={s.key} delay={(i % 3) * 0.06} className={`og-seal-card${isOpen ? ' is-open' : ''}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : s.key)}>
              <span className="og-seal-art"><SealArt kind={s.key} /></span>
              <b>{s.name}</b>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="og-seal-body">
                    <p>{s.text}</p>
                    <ul>{s.examples.map((e) => <li key={e}>{e}</li>)}</ul>
                  </div>
                </motion.div>
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
          className="og-lightbox"
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

export default function IndustriesEnergyPage() {
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = 'Energy — Oil & Gas Sealing Solutions | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper mp-page og-page">
      <Hero />

      {/* 01 The three families */}
      <section className="section mp-section" id="og-families">
        <div className="container">
          <Head number="01" label="Product portfolio" title="Where each seal family sits" intro={familiesIntro} />
          <Families onZoom={setShot} />
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>Those pressure figures.</strong> {pressureNote}</Reveal>
        </div>
      </section>

      {/* 02 Sealing systems */}
      <section className="mp-dark" id="og-sealing">
        <div className="container">
          <Head number="02" label="Sealing systems" title="Six arrangements, in cross-section" light intro={sealingIntro} />
          <SealingTypes />
        </div>
      </section>

      {/* 03 Materials */}
      <section className="section mp-section" id="og-materials">
        <div className="container">
          <Head number="03" label="Material technology" title="Eight materials for demanding conditions" intro={materialsIntro} />
          <div className="mu-table og-table">
            <div className="mu-table-head og-row4"><span>Material</span><span>Family</span><span>Key strength</span><span>Selection consideration</span></div>
            {materials.map((m) => (
              <div key={m.key} className="og-row4">
                <span><b>{m.name}</b></span>
                <span data-label="Family">{m.family}</span>
                <span data-label="Key strength">{m.strength}</span>
                <span data-label="Watch for">{m.watch}</span>
              </div>
            ))}
          </div>
          <div className="og-matgrid">
            {materials.map((m, i) => (
              <Reveal key={m.key} delay={(i % 4) * 0.04} className="og-matcard">
                <b>{m.name}</b>
                <span>{m.uses}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="og-steps-card">
            <h3>How to select the right material</h3>
            <ol>
              {materialSteps.map((s, i) => (
                <li key={s}><b>{String(i + 1).padStart(2, '0')}</b>{s}</li>
              ))}
            </ol>
          </Reveal>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>No single rating.</strong> {materialsNote}</Reveal>
        </div>
      </section>

      {/* 04 Operating conditions */}
      <section className="section mp-section mp-tint" id="og-conditions">
        <div className="container">
          <Head number="04" label="Operating conditions" title="What a seal is actually up against"
            intro="Pressure, temperature, fluid chemistry, mechanical movement and material behaviour all act together. Six things decide whether the seal survives." />
          <div className="og-conditions">
            {conditions.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06} className="mp-card">
                <span className="mp-icon"><Icon name={c.icon} size={20} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Standards */}
      <section className="section mp-section" id="og-standards">
        <div className="container">
          <Head number="05" label="Standards" title="Designed around industry requirements" intro={standardsIntro} />
          <div className="og-standards">
            {standards.map((s, i) => (
              <Reveal key={s.key} delay={(i % 3) * 0.06} className="og-standard">
                <b>{s.code}</b>
                <strong>{s.full}</strong>
                <p>{s.text}</p>
                <span><Icon name="check" size={14} /> {s.applies}</span>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> <strong>What we do and do not claim.</strong> {standardsNote}</Reveal>
        </div>
      </section>

      {/* 06 The value chain */}
      <section className="mp-dark" id="og-chain">
        <div className="container">
          <Head number="06" label="The value chain" title="From wellhead to LNG" light
            intro="Upstream, midstream and downstream put different demands on the same sealing families." />
          <div className="og-chain">
            {valueChain.map((v, i) => (
              <Reveal key={v.key} delay={i * 0.08} className="og-chain-card">
                <button type="button" className="og-shot" onClick={() => setShot({ src: IMAGES[v.photo], alt: v.name })}>
                  <img src={IMAGES[v.photo]} alt={v.name} loading="lazy" />
                </button>
                <b>{v.name}</b>
                <em>{v.subtitle}</em>
                <p>{v.text}</p>
                <ul>{v.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <span className="og-chain-mat"><strong>Usual materials:</strong> {v.materials}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Equipment matrix */}
      <section className="section mp-section" id="og-equipment">
        <div className="container">
          <Head number="07" label="Equipment" title="Critical equipment, reliable sealing"
            intro="Which Mithson components go into which piece of equipment, and what they are there to do." />
          <div className="og-equipment">
            {equipment.map((e, i) => (
              <Reveal key={e.key} delay={(i % 3) * 0.06} className="og-equip">
                <h3>{e.title}</h3>
                <ul>{e.components.map((c) => <li key={c}>{c}</li>)}</ul>
                <p><strong>Purpose.</strong> {e.purpose}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 How we work */}
      <section className="section mp-section mp-tint" id="og-process">
        <div className="container">
          <Head number="08" label="How we work" title="From application review to sealing solution" />
          <ol className="og-steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 0.06}>
                <b>{s.number}</b>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 09 What to send us */}
      <section className="section mp-section" id="og-send">
        <div className="container">
          <Head number="09" label="What to send us" title="Help us understand your sealing requirement"
            intro="Choosing the right seal needs accurate application information. The more of this you can send, the faster the engineering review." />
          <div className="og-checklist">
            {checklist.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06} className="og-check-card">
                <h3>{c.title}</h3>
                <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="og-send-actions">
            <Link to={APPLICATION_DATA} className="btn btn-navy">Upload your drawing <Arrow /></Link>
            <Link to={CONTACT} className="btn mp-btn-outline">Contact our engineering team</Link>
          </Reveal>
        </div>
      </section>

      {/* 10 FAQ */}
      <section className="section mp-section mp-tint" id="og-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number="10" label="FAQ" title="Oil & gas sealing questions"
            intro="General guidance only. Our engineers confirm the right seal for each application." />
          <Faqs />
        </div>
      </section>

      {/* 11 CTA */}
      <section className="mp-cta" id="og-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">11 — Engineering review</span>
            <h2>{closing[0]}</h2>
            <p>{closing[1]}</p>
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a> &nbsp;·&nbsp; <a href="tel:+919994204988">+91 99942 04988</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={OIL_GAS_SEAL} className="btn btn-white">View all oil &amp; gas seals <Arrow /></Link>
            <Link to="/book-a-meeting" className="btn mp-btn-ghost">Book a meeting <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section og-footnotes">
        <div className="container">
          <p className="og-disclaimer"><Icon name="alert" size={16} /> {disclaimer}</p>
          <p className="og-credits">
            Industry photographs: {photoCredits.map((c, i) => (
              <span key={c.photo}>{i > 0 && ' · '}{c.photo} by {c.by} on {c.on}</span>
            ))}.
          </p>
        </div>
      </section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </div>
  );
}

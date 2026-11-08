import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import usePageMeta from '../../../shared/hooks/usePageMeta';
import { siteImages } from '../../../content/siteImages';
import {
  capabilityCards,
  developmentSteps,
  facilitiesIntro,
  facilityFacts,
  facilityIndustries,
  facilityMaterials,
  locations,
  qualityCommitment,
} from '../../../content/facilitiesPage';
import imgBuilding from '../../../assets/about/mithson-building.webp';
import imgCorporate from '../../../assets/about/group-heritage.webp';
import imgSeals from '../../../assets/about/journey-expansion.webp';
import imgUnit2 from '../../../assets/about/unit-2.webp';
import imgRecords from '../../../assets/about/journey-today.webp';
import imgIso from '../../../assets/certificates/ISO.png';
import imgQima from '../../../assets/certificates/QIMA.png';
import imgOilGas from '../../../assets/industries/Oil & Gas.webp';
import imgAutomotive from '../../../assets/industries/Automotive.webp';
import imgLifeScience from '../../../assets/industries/Life Science.webp';
import imgMining from '../../../assets/industries/Mining.webp';
import imgSemiconductor from '../../../assets/industries/Semiconductor.webp';
import imgAerospace from '../../../assets/industries/Aerospace.webp';
import imgRobotics from '../../../assets/industries/Robotics.webp';
import imgDownhole from '../../../assets/industries/Downhole Tools.webp';
import './Facilities.css';

const INDUSTRY_IMAGES = {
  'Oil & Gas': imgOilGas,
  Automotive: imgAutomotive,
  'Life Science': imgLifeScience,
  Mining: imgMining,
  Semiconductor: imgSemiconductor,
  Aerospace: imgAerospace,
};

// Pictures named in facilitiesPage.js. The site-images ones are AI images, so they carry a label.
const PICTURES = {
  seals: { src: imgSeals },
  records: { src: imgRecords },
  building: { src: imgBuilding, illustrative: true },
  ...Object.fromEntries(Object.entries(siteImages).map(([name, src]) => [name, { src, illustrative: true }])),
};

const EASE = [0.22, 1, 0.36, 1];

const ICONS = {
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 2 6 5.5" /></>,
  cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 9 8-4.5M12 12v9M12 12 4 7.5" />,
  chart: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M7 12l3-3 3 2 4-4M8 20h8M12 16v4" /></>,
  ruler: <path d="M3 17 17 3l4 4L7 21l-4-4ZM7 13l2 2M10 10l2 2M13 7l2 2" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  car: <><path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3z" /><circle cx="7.5" cy="16" r="1.5" /><circle cx="16.5" cy="16" r="1.5" /></>,
  truck: <><path d="M2 16V8h11l3 4h5v4H2Z" /><circle cx="6" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>,
  plane: <path d="M10 14 3 12l1-2 7 1 4-7h2l-1 8 5 1v2l-5 1 1 5h-2l-4-5-1 4H8l1-5Z" />,
  building: <path d="M4 21V5l8-2v18M12 21V9l8 3v9M2 21h20M7 8h2M7 12h2M7 16h2M15 14h2M15 17h2" />,
  calendar: <path d="M4 5h16v15H4zM4 9h16M9 3v4M15 3v4" />,
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />,
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

/** Fades and lifts its content in once, when it scrolls into view. */
function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Head({ label, title, intro, light }) {
  return (
    <Reveal className={`fac-head${light ? ' fac-head--light' : ''}`}>
      <span className="fac-label">{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

/** A picture shown whole (never cropped), with an "Illustrative image" tag where needed. */
function Picture({ name, className = '' }) {
  const pic = PICTURES[name];
  if (!pic) return null;
  return (
    <span className={`fac-pic ${className}`}>
      <img src={pic.src} alt="" loading="lazy" />
      {pic.illustrative && <em>Illustrative image</em>}
    </span>
  );
}

/** Card that leans slightly towards the pointer. */
function TiltCard({ className, children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const move = (e) => {
    if (reduceMotion) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -6, y: ((e.clientX - r.left) / r.width - 0.5) * 6 });
  };
  return (
    <motion.article
      ref={ref}
      className={className}
      onMouseMove={move}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ transformPerspective: 1200 }}
    >
      {children}
    </motion.article>
  );
}

function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '20%']);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);

  return (
    <section ref={ref} className="fac-hero">
      <motion.div className="fac-hero-bg" style={{ y: bgY, backgroundImage: `url("${imgSemiconductor}")` }} aria-hidden="true" />
      <div className="container fac-hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="fac-label fac-label--dark">Facilities</span>
          <h1>Engineering, Manufacturing and Customer Support — Connected <span>Across Our Locations</span></h1>
          <p>{facilitiesIntro[0]}</p>
          <div className="fac-actions">
            <Link to="/connect-with-us/application-data" className="btn btn-primary">Send Your Application Data <Arrow /></Link>
            <Link to="/book-a-meeting" className="btn fac-btn-ghost"><Icon name="calendar" size={18} /> Book a Meeting</Link>
          </div>
        </motion.div>
        <motion.div
          className="fac-hero-visual"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <div className="fac-hero-frame">
            <img src={imgBuilding} alt="Mithson Sealing Solutions building" />
            <em>Illustrative image</em>
          </div>
          <motion.span className="fac-hero-badge fac-hero-badge--a" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <Icon name="pin" size={18} /> Chennai
          </motion.span>
          <motion.span className="fac-hero-badge fac-hero-badge--b" animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <Icon name="pin" size={18} /> Thiruporur
          </motion.span>
        </motion.div>
      </div>
      <div className="container">
        <motion.ul className="fac-facts" initial="hidden" animate="shown" variants={{ shown: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}>
          {facilityFacts.map((f) => (
            <motion.li key={f.title} variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0 } }}>
              <span className="fac-icon fac-icon--dark"><Icon name={f.icon} /></span>
              <div><strong>{f.title}</strong><span>{f.text}</span></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function LocationCard({ loc, image, illustrative, delay }) {
  return (
    <Reveal delay={delay}>
      <TiltCard className="fac-loc">
        <div className="fac-loc-photo">
          <img src={image} alt={loc.name} loading="lazy" />
          {illustrative && <em>Illustrative image</em>}
          <span className="fac-loc-num">{loc.id}</span>
          <span className="fac-loc-tag">{loc.tag}</span>
        </div>
        <div className="fac-loc-body">
          <h3>{loc.name}</h3>
          <address><Icon name="pin" size={18} /><span>{loc.address.map((line) => <span key={line}>{line}</span>)}</span></address>
          {loc.text.map((p) => <p key={p}>{p}</p>)}
          <dl>
            <div><dt>Location</dt><dd>{loc.place}</dd></div>
            <div><dt>Facility type</dt><dd>{loc.type}</dd></div>
          </dl>
          <div className="fac-loc-actions">
            <a href={loc.directions} target="_blank" rel="noopener noreferrer" className="btn btn-navy"><Icon name="pin" size={18} /> Get Directions</a>
            <Link to={loc.action.to} className="btn btn-outline">{loc.action.label} <Arrow /></Link>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}

function IndustryStrip() {
  const [active, setActive] = useState(0);
  return (
    <div className="fac-strip" onMouseLeave={() => setActive(0)}>
      {facilityIndustries.map((ind, index) => (
        <Link
          key={ind.title}
          to={ind.path}
          className={`fac-strip-item${index === active ? ' is-active' : ''}`}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
        >
          <img src={INDUSTRY_IMAGES[ind.image]} alt="" loading="lazy" />
          <span className="fac-strip-shade" aria-hidden="true" />
          <span className="fac-strip-content">
            <span className="fac-icon fac-icon--glass"><Icon name={ind.icon} size={22} /></span>
            <strong>{ind.title}</strong>
            <span className="fac-strip-text">{ind.text}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function MaterialChips() {
  const [active, setActive] = useState(0);
  const m = facilityMaterials[active];
  return (
    <div className="fac-mat">
      <div className="fac-mat-chips" role="tablist" aria-label="Materials we work with">
        {facilityMaterials.map((mat, index) => (
          <button key={mat.name} type="button" role="tab" aria-selected={index === active} onClick={() => setActive(index)} onMouseEnter={() => setActive(index)}>
            {mat.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={m.name} role="tabpanel" className="fac-mat-text" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <strong>{m.name}:</strong> {m.text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Development() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const line = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0, 1]);
  return (
    <div ref={ref} className="fac-dev">
      <span className="fac-dev-line" aria-hidden="true"><motion.span style={{ scaleX: line }} /></span>
      <ol>
        {developmentSteps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 0.08} className="fac-dev-step">
            <Picture name={step.image} className="fac-dev-pic" />
            <span className="fac-dev-num">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export default function FacilitiesPage() {
  usePageMeta('Facilities', 'Mithson Sealing Solutions corporate office in Chennai and Unit-II manufacturing facility in Thiruporur, Chengalpattu, Tamil Nadu.');

  return (
    <div className="page-wrapper fac-page">
      <Hero />

      {/* Heritage */}
      <section className="fac-intro">
        <div className="container fac-intro-grid">
          {facilitiesIntro.slice(1).map((p, i) => <Reveal key={p} as="p" delay={i * 0.1}>{p}</Reveal>)}
        </div>
      </section>

      {/* Locations */}
      <section className="section fac-section">
        <div className="container">
          <Head label="Our Locations" title="Two Locations. One Engineering Commitment." />
          <div className="fac-locs">
            <LocationCard loc={locations[0]} image={imgCorporate} delay={0} />
            <LocationCard loc={locations[1]} image={imgUnit2} delay={0.1} />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section fac-section fac-tint">
        <div className="container">
          <Head
            label="Our Manufacturing & Engineering Capabilities"
            title="Turning Material Expertise into Precision Components"
            intro="Mithson works with a range of advanced polymers, fluoropolymers, thermoplastics and elastomers to develop sealing solutions for industrial equipment. Our manufacturing and engineering activities are focused on translating application requirements into components with the required geometry, material characteristics and dimensional specifications."
          />
          <div className="fac-caps">
            {capabilityCards.map((cap, index) => (
              <Reveal key={cap.title} delay={(index % 3) * 0.08}>
                <Link to={cap.path} className="fac-cap">
                  <Picture name={cap.image} className="fac-cap-pic" />
                  <div className="fac-cap-body">
                    <span className="fac-icon"><Icon name={cap.icon} /></span>
                    <h3>{cap.title}</h3>
                    <p>{cap.text}</p>
                    {cap.chips && <span className="fac-cap-chips">{cap.chips.map((c) => <span key={c}>{c}</span>)}</span>}
                    <span className="fac-more">Learn more <Arrow /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section fac-section">
        <div className="container">
          <Head
            label="Supporting Different Industrial Applications"
            title="Facilities Supporting Demanding Sealing Requirements"
            intro="Our polymer engineering and manufacturing activities support components used across a range of industries."
          />
          <IndustryStrip />
          <Reveal as="p" className="fac-note">The suitability of any product depends on its design, material specification and intended operating conditions.</Reveal>
        </div>
      </section>

      {/* Materials */}
      <section className="fac-materials">
        <div className="container fac-materials-grid">
          <Reveal className="fac-materials-visual">
            <img src={imgSeals} alt="Spring-energized and polymer seals" loading="lazy" />
          </Reveal>
          <div>
            <Head
              light
              label="Materials We Work With"
              title="Advanced Materials for Application-Specific Solutions"
              intro="Material selection is an important part of the engineering process. Different polymers and elastomers offer different combinations of chemical resistance, mechanical strength, thermal behaviour, friction and wear characteristics."
            />
            <MaterialChips />
            <p className="fac-materials-note">The final material selection should always be based on the complete application requirements and verified material specifications.</p>
          </div>
        </div>
      </section>

      {/* Development approach */}
      <section className="section fac-section fac-tint">
        <div className="container">
          <Head
            label="From Engineering Requirement to Finished Component"
            title="A Connected Product Development Approach"
            intro="Our product development approach connects engineering, material selection, prototyping, manufacturing and customer support."
          />
          <Development />
        </div>
      </section>

      {/* Quality */}
      <section className="fac-quality">
        <div className="fac-quality-bg" style={{ backgroundImage: `url("${imgRobotics}")` }} aria-hidden="true" />
        <div className="container fac-quality-grid">
          <div>
            <Head light label="Quality and Operational Commitment" title="Consistency Across Every Stage" />
            {qualityCommitment.map((p, i) => <Reveal as="p" key={p} delay={i * 0.1} className="fac-quality-text">{p}</Reveal>)}
            <Link to="/who-we-are/hsse-and-quality" className="fac-link fac-link--light">HSSE & Quality <Arrow /></Link>
          </div>
          <div className="fac-quality-cards">
            <Reveal className="fac-qcard">
              <motion.img src={imgIso} alt="ISO 9001:2015 certified" whileHover={{ rotate: -8, scale: 1.06 }} />
              <div><strong>ISO 9001:2015</strong><span>Certified company</span><p>A structured quality management system for consistent processes and continual improvement.</p></div>
            </Reveal>
            <Reveal className="fac-qcard" delay={0.1}>
              <motion.img src={imgQima} alt="QIMA audited" whileHover={{ rotate: 8, scale: 1.06 }} />
              <div><strong>QIMA Audited</strong><span>Assessment against the defined audit scope</span><p>Audit scope and date are available on request.</p></div>
            </Reveal>
            <Reveal className="fac-qrecords" delay={0.2}>
              <img src={imgRecords} alt="ISO 9001:2015 certificate with material test records" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="fac-cta">
        <div className="fac-cta-bg" style={{ backgroundImage: `url("${imgDownhole}")` }} aria-hidden="true" />
        <div className="container fac-cta-grid">
          <Reveal className="fac-cta-text">
            <span className="fac-cta-icon"><Icon name="building" size={40} /></span>
            <div>
              <span className="fac-label fac-label--dark">Plan a Visit or Discuss Your Requirements</span>
              <h2>Connect with the Right Team</h2>
              <p>
                Whether you are looking for a custom polymer component, an application-specific sealing solution or information about
                our manufacturing capabilities, our team is available to discuss your requirements.
              </p>
              <p>Share your product drawings, material requirements, application details or project specifications so that the relevant team can understand your needs.</p>
            </div>
          </Reveal>
          <Reveal className="fac-cta-actions" delay={0.15}>
            <Link to="/connect-with-us/application-data" className="btn btn-white"><Icon name="layers" size={18} /> Send Your Application Data <Arrow /></Link>
            <Link to="/book-a-meeting" className="btn fac-btn-ghost"><Icon name="calendar" size={18} /> Book a Meeting <Arrow /></Link>
            <Link to="/connect-with-us" className="btn fac-btn-ghost"><Icon name="phone" size={18} /> Contact Our Team <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

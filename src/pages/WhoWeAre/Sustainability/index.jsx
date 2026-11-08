import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import usePageMeta from '../../../shared/hooks/usePageMeta';
import { siteImages } from '../../../content/siteImages';
import {
  approach,
  carbonNote,
  commitment,
  commitmentLines,
  focusLine,
  indicators,
  indicatorsNote,
  industriesNote,
  industriesText,
  initiatives,
  lifecycle,
  pillars,
  resources,
  scopes,
  sustainabilityIndustries,
  sustainabilityIntro,
  valueChain,
  valueChainText,
} from '../../../content/sustainabilityPage';
import imgTurbines from '../../../assets/industries/sustanability.webp';
import imgGlobe from '../../../assets/industries/EnvironmentalSustainablility.webp';
import imgSeals from '../../../assets/about/journey-expansion.webp';
import imgBuilding from '../../../assets/about/mithson-building.webp';
import imgOilGas from '../../../assets/industries/Oil & Gas.webp';
import imgAutomotive from '../../../assets/industries/Automotive.webp';
import imgLifeScience from '../../../assets/industries/Life Science.webp';
import imgMining from '../../../assets/industries/Mining.webp';
import imgSemiconductor from '../../../assets/industries/Semiconductor.webp';
import imgRobotics from '../../../assets/industries/Robotics.webp';
import imgAerospace from '../../../assets/industries/Aerospace.webp';
import './Sustainability.css';

const INDUSTRY_IMAGES = {
  'Oil & Gas': imgOilGas,
  Automotive: imgAutomotive,
  'Life Science': imgLifeScience,
  Mining: imgMining,
  Semiconductor: imgSemiconductor,
  Robotics: imgRobotics,
  Aerospace: imgAerospace,
};

const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION = '/connect-with-us/application-data';

const ICONS = {
  solar: <><rect x="3" y="4" width="18" height="11" rx="1" /><path d="M3 8h18M3 11.5h18M9 4v11M15 4v11M12 15v5M8 20h8" /></>,
  ev: <><path d="M2 16V8h11l3 4h3v4M6 8V6h5v2" /><circle cx="6.5" cy="17" r="2" /><circle cx="16.5" cy="17" r="2" /><path d="m20 6-2 3h2l-2 3" /></>,
  recycle: <path d="M7 19H4l3-5M17 19h3l-3-5M9 5l3-2 3 2M12 3v6M7 14l-2-3 5-8M17 14l2-3-5-8M7 19h10" />,
  leaf: <path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16Zm0 0c3-4 6-7 10-9" />,
  factory: <path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17H3ZM7 17h2M12 17h2M17 17h1" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  chain: <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  waste: <path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6M14 11v6" />,
  water: <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />,
  check: <path d="m5 12 5 5 9-10" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></>,
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

/** Fades its content up once, when it scrolls into view. */
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
    <Reveal className={`sus-head${light ? ' sus-head--light' : ''}`}>
      <span className="sus-label">{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

/**
 * Photo for an initiative. Drop a file named after `image` into src/assets/site-images and it
 * appears here; until then the card shows a drawn panel with its icon.
 */
function InitiativePhoto({ name, icon, credit, illustrative }) {
  const src = siteImages[name];
  if (!src) {
    return (
      <span className={`sus-photo sus-photo--empty sus-photo--${icon}`} aria-hidden="true">
        <Icon name={icon} size={56} />
      </span>
    );
  }
  return (
    <span className="sus-photo">
      <img src={src} alt="" loading="lazy" />
      {(credit || illustrative) && <em>{credit ?? 'Illustrative image'}</em>}
    </span>
  );
}

function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%']);

  return (
    <section ref={ref} className="sus-hero" id="sus-top">
      <motion.div className="sus-hero-bg" style={{ y: bgY, backgroundImage: `url("${imgTurbines}")` }} aria-hidden="true" />
      <div className="container sus-hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="sus-label sus-label--dark"><Icon name="leaf" size={16} /> Sustainability</span>
          <h1>Building a More Responsible <span>Industrial Future</span></h1>
          <p>{sustainabilityIntro[0]}</p>
          <p className="sus-focus"><strong>Our focus:</strong> {focusLine}</p>
          <div className="sus-actions">
            <button type="button" className="btn btn-primary" onClick={() => {
              const el = document.getElementById('sus-initiatives');
              if (!el) return;
              if (window.lenis) { window.lenis.resize(); window.lenis.scrollTo(el, { offset: -90, force: true }); } else el.scrollIntoView({ behavior: 'smooth' });
            }}>Explore Our Initiatives <Arrow /></button>
            <Link to={CONTACT} className="btn sus-btn-ghost"><Icon name="leaf" size={18} /> Discuss Sustainability</Link>
          </div>
        </motion.div>
        <motion.ul
          className="sus-pillars"
          initial="hidden"
          animate="shown"
          variants={{ shown: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } } }}
        >
          {pillars.map((p) => (
            <motion.li key={p.title} variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0 } }}>
              <span className="sus-pill-icon"><Icon name={p.icon} size={28} /></span>
              <strong>{p.title}</strong>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/** One initiative: photo on one side, text on the other, alternating down the page. */
function Initiative({ item, index }) {
  return (
    <Reveal className={`sus-init${index % 2 ? ' sus-init--flip' : ''}`}>
      <InitiativePhoto name={item.image} icon={item.icon} credit={item.credit} illustrative={item.illustrative} />
      <div className="sus-init-body">
        <div className="sus-init-top">
          <span className="sus-init-num">{String(index + 1).padStart(2, '0')}</span>
          <span className="sus-icon"><Icon name={item.icon} /></span>
        </div>
        <h3>{item.title}</h3>
        <p className="sus-init-lead">{item.lead}</p>
        {item.text.map((t) => <p key={t}>{t}</p>)}
        <ul className="sus-checks">
          {item.points.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
        </ul>
      </div>
    </Reveal>
  );
}

function Scopes() {
  const [open, setOpen] = useState(0);
  return (
    <div className="sus-scopes">
      {scopes.map((s, index) => (
        <Reveal key={s.title} delay={index * 0.08} className={`sus-scope${open === index ? ' is-open' : ''}`}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
            <span className="sus-scope-icon"><Icon name={s.icon} size={22} /></span>
            <span className="sus-scope-name">
              <strong>{s.title}</strong>
              <em>{s.subtitle}</em>
            </span>
            <span className="sus-plus" aria-hidden="true">+</span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                <div className="sus-scope-body">
                  <p>{s.text}</p>
                  <ul className="sus-checks sus-checks--light">
                    {s.points.map((p) => <li key={p}><span><Icon name="check" size={14} /></span>{p}</li>)}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      ))}
    </div>
  );
}

function Indicators() {
  const [tab, setTab] = useState(0);
  const group = indicators[tab];
  return (
    <div className="sus-ind">
      <div className="sus-tabs" role="tablist" aria-label="Environmental indicators">
        {indicators.map((g, index) => (
          <button key={g.title} type="button" role="tab" aria-selected={index === tab} onClick={() => setTab(index)}>
            <Icon name={g.icon} size={18} /> {g.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ul
          key={group.title}
          role="tabpanel"
          className="sus-ind-list"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {group.items.map((i) => <li key={i}><span><Icon name="check" size={14} /></span>{i}</li>)}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}

const SECTIONS = [
  ['sus-top', 'Overview'],
  ['sus-approach', 'Our Approach'],
  ['sus-initiatives', 'Initiatives'],
  ['sus-carbon', 'Carbon Footprint'],
  ['sus-lifecycle', 'Responsible Manufacturing'],
  ['sus-resources', 'Resource Management'],
  ['sus-value-chain', 'Value Chain'],
  ['sus-industries', 'Our Industries'],
  ['sus-progress', 'Measuring Progress'],
  ['sus-commitment', 'Our Commitment'],
];

function SideNav() {
  const [current, setCurrent] = useState(SECTIONS[0][0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.lenis) { window.lenis.resize(); window.lenis.scrollTo(el, { offset: -90, force: true }); } else el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="sus-sidenav" aria-label="Page sections">
      {SECTIONS.map(([id, label]) => (
        <button key={id} type="button" className={current === id ? 'is-active' : ''} aria-current={current === id ? 'true' : undefined} onClick={() => go(id)}>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function Lifecycle() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  return (
    <ol ref={ref} className="sus-life">
      {lifecycle.map((step, index) => (
        <motion.li
          key={step.title}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="sus-icon"><Icon name={step.icon} /></span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export default function SustainabilityPage() {
  usePageMeta(
    'Sustainability',
    'Mithson Sealing Solutions environmental initiatives: solar energy, electric vehicles for goods movement, scrap reduction, sustainable agriculture and our Scope 1, 2 and 3 focus.',
  );

  return (
    <div className="page-wrapper sus-page">
      <SideNav />
      <Hero />

      {/* Group background */}
      <section className="sus-intro">
        <div className="container sus-intro-grid">
          {sustainabilityIntro.slice(1).map((p, i) => <Reveal key={p} as="p" delay={i * 0.1}>{p}</Reveal>)}
        </div>
      </section>

      {/* 1. Approach */}
      <section className="section sus-section" id="sus-approach">
        <div className="container sus-approach">
          <div>
            <Head label="Our Sustainability Approach" title="Responsibility Integrated into Our Operations" />
            {approach.map((p) => <Reveal as="p" key={p} className="sus-text">{p}</Reveal>)}
          </div>
          <div className="sus-pillar-grid">
            {pillars.map((p, index) => (
              <Reveal key={p.title} delay={index * 0.08} className="sus-pillar">
                <span className="sus-icon sus-icon--round"><Icon name={p.icon} size={28} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Initiatives */}
      <section className="section sus-section sus-tint" id="sus-initiatives">
        <div className="container">
          <Head
            label="Our Environmental Initiatives"
            title="Practical Actions for a Lower Environmental Footprint"
            intro="Four published initiatives shape how we use energy, materials and transport across our operations."
          />
          <div className="sus-inits">
            {initiatives.map((item, index) => <Initiative key={item.title} item={item} index={index} />)}
          </div>
        </div>
      </section>

      {/* 3. Carbon footprint */}
      <section className="sus-carbon" id="sus-carbon">
        <div className="sus-carbon-bg" style={{ backgroundImage: `url("${imgGlobe}")` }} aria-hidden="true" />
        <div className="container sus-carbon-grid">
          <div>
            <Head
              light
              label="Understanding Our Carbon Footprint"
              title="Addressing Scope 1, Scope 2 and Scope 3 Emissions"
              intro="Greenhouse gas emissions are commonly grouped into three categories under the GHG Protocol framework. These categories help organisations understand where emissions originate and identify opportunities to reduce their environmental impact."
            />
            <Reveal as="p" className="sus-carbon-note">{carbonNote}</Reveal>
          </div>
          <Scopes />
        </div>
      </section>

      {/* 4. Responsible polymer manufacturing */}
      <section className="section sus-section" id="sus-lifecycle">
        <div className="container sus-split">
          <div>
            <Head
              label="Responsible Polymer Manufacturing"
              title="Improving Resource Efficiency Across the Product Lifecycle"
              intro="Responsible manufacturing considers not only the performance of the finished component but also the efficient use of materials and resources throughout production."
            />
            <Lifecycle />
          </div>
          <Reveal className="sus-figure">
            <img src={imgSeals} alt="Polymer and spring-energized seals" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* 5. Resource management */}
      <section className="section sus-section sus-tint" id="sus-resources">
        <div className="container">
          <Head
            label="Responsible Resource Management"
            title="Using Resources More Thoughtfully"
            intro="Responsible operations involve considering how resources are consumed and identifying practical opportunities to improve efficiency."
          />
          <div className="sus-res">
            {resources.map((r, index) => (
              <Reveal key={r.title} delay={index * 0.06} className="sus-res-card">
                <span className="sus-icon"><Icon name={r.icon} /></span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Value chain */}
      <section className="section sus-section" id="sus-value-chain">
        <div className="container sus-split sus-split--reverse">
          <Reveal className="sus-figure sus-figure--globe">
            <img src={imgGlobe} alt="" loading="lazy" />
          </Reveal>
          <div>
            <Head
              label="Sustainability Across Our Value Chain"
              title="Environmental Responsibility Beyond Our Facilities"
            />
            {valueChainText.map((p) => <Reveal as="p" key={p} className="sus-text">{p}</Reveal>)}
            <ul className="sus-checks">
              {valueChain.map((v, i) => (
                <Reveal as="li" key={v} delay={i * 0.06}><span><Icon name="check" size={14} /></span>{v}</Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Industries */}
      <section className="section sus-section sus-tint" id="sus-industries">
        <div className="container">
          <Head label="Sustainability and Our Industries" title="Supporting Industrial Performance Responsibly" intro={industriesText[0]} />
          <div className="sus-industries">
            {sustainabilityIndustries.map((ind, index) => (
              <Reveal key={ind.title} delay={index * 0.05}>
                <Link to={ind.path} className="sus-industry">
                  <img src={INDUSTRY_IMAGES[ind.image]} alt="" loading="lazy" />
                  <span>{ind.title}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="sus-text">{industriesText[1]}</Reveal>
          <Reveal as="p" className="sus-note">{industriesNote}</Reveal>
        </div>
      </section>

      {/* 8. Measuring progress */}
      <section className="section sus-section" id="sus-progress">
        <div className="container">
          <Head
            label="Measuring Progress and Continuous Improvement"
            title="Moving from Environmental Intent to Measurable Action"
            intro="Environmental responsibility requires regular review, reliable information and a willingness to improve. As environmental measurement develops, these indicators can help demonstrate progress transparently."
          />
          <Indicators />
          <Reveal as="p" className="sus-note">{indicatorsNote}</Reveal>
        </div>
      </section>

      {/* 9. Commitment and contact */}
      <section className="sus-commit" id="sus-commitment">
        <div className="sus-commit-bg" style={{ backgroundImage: `url("${imgBuilding}")` }} aria-hidden="true" />
        <div className="container sus-commit-grid">
          <div>
            <span className="sus-label sus-label--dark">Our Sustainability Commitment</span>
            <h2>
              {commitmentLines.map((line, i) => (
                <Reveal as="span" key={line} delay={i * 0.15}>{line}</Reveal>
              ))}
            </h2>
          </div>
          <div>
            {commitment.map((p, i) => <Reveal as="p" key={p} delay={i * 0.1}>{p}</Reveal>)}
            <Reveal as="p" delay={0.2} className="sus-commit-ask">
              <strong>Would you like to know more?</strong> Contact our team to discuss your requirements, request
              relevant company information or explore potential collaboration opportunities.
            </Reveal>
            <Reveal className="sus-actions" delay={0.3}>
              <Link to={CONTACT} className="btn btn-white">Contact Our Team <Arrow /></Link>
              <Link to={APPLICATION} className="btn sus-btn-ghost">Send Your Application Details <Arrow /></Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

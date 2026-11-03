import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';
import AnimatedImage from '../../../shared/components/AnimatedImage';
import usePageMeta from '../../../shared/hooks/usePageMeta';
import { company } from '../../../content/company';
import { products } from '../../../content/products';
import { materials } from '../../../content/materials';
import { siteImages } from '../../../content/siteImages';
import {
  aboutIndustries,
  aboutStats,
  journey,
  lifecycle,
  manufactureGroups,
  materialFamilies,
  philosophy,
  qualityCredentials,
  qualityFocus,
  sustainabilityInitiatives,
  values,
  whoWeAre,
  whyMithson,
} from '../../../content/about';
import imgOilGas from '../../../assets/industries/Oil & Gas.webp';
import imgAutomotive from '../../../assets/industries/Automotive.webp';
import imgLifeScience from '../../../assets/industries/Life Science.webp';
import imgSemiconductor from '../../../assets/industries/Semiconductor.webp';
import imgAerospace from '../../../assets/industries/Aerospace.webp';
import imgMining from '../../../assets/industries/Mining.webp';
import imgIso from '../../../assets/certificates/ISO.png';
import './AboutUs.css';

const INDUSTRY_IMAGES = {
  'Oil & Gas': imgOilGas,
  Automotive: imgAutomotive,
  'Life Science': imgLifeScience,
  Semiconductor: imgSemiconductor,
  Aerospace: imgAerospace,
  Mining: imgMining,
};

const productImage = (id) => {
  const product = products.find((item) => item.id === id);
  return product?.carouselImage ?? (Array.isArray(product?.image) ? product.image[0] : product?.image);
};

const materialInfo = (item) => {
  if (!item.match) return item;
  const found = materials.find((m) => m.name === item.match);
  return { ...item, strengths: found?.strengths, uses: found?.uses };
};

const STAT_ICONS = [
  <path key="a" d="M4 5h16v15H4zM4 9h16M9 3v4M15 3v4" />,
  <path key="b" d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  <><circle key="c1" cx="12" cy="12" r="3" /><path key="c2" d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  <><path key="d1" d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle key="d2" cx="12" cy="10" r="2.5" /></>,
];

function Icon({ children, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const Arrow = ({ back }) => <Icon size={18}><path d={back ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'} /></Icon>;

/** Number that counts up the first time it scrolls into view. */
function CountUp({ value, suffix = '', plain }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(plain || reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || plain || reduceMotion) return undefined;
    const controls = animate(0, value, { duration: 1.4, ease: 'easeOut', onUpdate: (v) => setShown(Math.round(v)) });
    return () => controls.stop();
  }, [inView, plain, reduceMotion, value]);

  return <span ref={ref}>{shown}{suffix}</span>;
}

/** On phones a section folds into a tap-to-open panel; on larger screens it is always open. */
function useIsPhone() {
  const query = '(max-width: 640px)';
  const [phone, setPhone] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setPhone(list.matches);
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, []);
  return phone;
}

function Section({ id, label, title, intro, tint, foldable, children }) {
  const phone = useIsPhone();
  const [open, setOpen] = useState(false);
  const folded = foldable && phone;
  const panelId = `${id}-panel`;

  return (
    <section id={id} className={`section about-section${tint ? ' about-tint' : ''}${folded ? ' about-section--folded' : ''}`}>
      <div className="container">
        {folded ? (
          <button type="button" className="about-fold" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}>
            <span>{title}</span>
            <span className="about-fold-icon" aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
        ) : (
          <ScrollReveal>
            {label && <span className="section-label">{label}</span>}
            <h2 className="section-title about-title">{title}</h2>
            {intro && <p className="about-intro">{intro}</p>}
          </ScrollReveal>
        )}
        <div id={panelId} hidden={folded && !open}>
          {folded && intro && <p className="about-intro">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const [active, setActive] = useState(0);
  const step = journey[active];

  return (
    <div className="about-journey">
      <div className="about-journey-track" role="tablist" aria-label="Our journey">
        <span className="about-journey-line" aria-hidden="true">
          <motion.span animate={{ scaleX: journey.length > 1 ? active / (journey.length - 1) : 1 }} transition={{ duration: 0.5 }} />
        </span>
        {journey.map((item, index) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`about-journey-dot${index <= active ? ' is-done' : ''}`}
            onClick={() => setActive(index)}
          >
            <span className="about-journey-marker" aria-hidden="true" />
            <span>{item.key}</span>
          </button>
        ))}
      </div>
      <motion.div key={step.key} className="about-journey-card" role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <span className={`about-journey-tag${step.tag.startsWith('Group') ? '' : ' about-journey-tag--mithson'}`}>{step.tag}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <div className="about-journey-nav">
          <button type="button" className="about-arrow" aria-label="Previous step" disabled={active === 0} onClick={() => setActive(active - 1)}><Arrow back /></button>
          <button type="button" className="about-arrow" aria-label="Next step" disabled={active === journey.length - 1} onClick={() => setActive(active + 1)}><Arrow /></button>
        </div>
      </motion.div>
    </div>
  );
}

function ProductRow() {
  const rowRef = useRef(null);
  const [ends, setEnds] = useState({ start: true, end: false });
  const update = () => {
    const row = rowRef.current;
    if (row) setEnds({ start: row.scrollLeft <= 4, end: row.scrollLeft + row.clientWidth >= row.scrollWidth - 4 });
  };
  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  const move = (direction) => {
    const row = rowRef.current;
    const step = row.firstElementChild.offsetWidth + parseFloat(getComputedStyle(row).columnGap);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    row.scrollBy({ left: direction * step, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div className="about-row-head">
        <Link to="/products" className="about-link">View All Products <Arrow /></Link>
        <div className="about-row-arrows">
          <button type="button" className="about-arrow" aria-label="Previous products" disabled={ends.start} onClick={() => move(-1)}><Arrow back /></button>
          <button type="button" className="about-arrow" aria-label="Next products" disabled={ends.end} onClick={() => move(1)}><Arrow /></button>
        </div>
      </div>
      <div className="about-products" ref={rowRef} onScroll={update}>
        {manufactureGroups.map((group) => (
          <Link key={group.title} to={group.path} className="about-product">
            <div className="about-product-image"><img src={productImage(group.product)} alt="" loading="lazy" /></div>
            <h3>{group.title}</h3>
            <p>{group.text}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

function MaterialExplorer() {
  const [familyIndex, setFamilyIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const family = materialFamilies[familyIndex];
  const item = materialInfo(family.items[itemIndex]);

  return (
    <div className="about-materials">
      <div className="about-tabs" role="tablist" aria-label="Material families">
        {materialFamilies.map((f, index) => (
          <button key={f.family} type="button" role="tab" aria-selected={index === familyIndex} onClick={() => { setFamilyIndex(index); setItemIndex(0); }}>
            {f.family}
          </button>
        ))}
      </div>
      <div className="about-materials-body">
        <div className="about-chips" role="listbox" aria-label={family.family}>
          {family.items.map((m, index) => (
            <button key={m.name} type="button" role="option" aria-selected={index === itemIndex} onClick={() => setItemIndex(index)}>
              {m.name}
            </button>
          ))}
        </div>
        <motion.div key={item.name} className="about-material-card" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <span className="section-label">{family.family}</span>
          <h3>{item.name}</h3>
          {item.strengths && <p><strong>Strengths:</strong> {item.strengths}</p>}
          {item.uses && <p><strong>Typical uses:</strong> {item.uses}</p>}
          <Link to="/capabilities/materials" className="about-link">Compare materials <Arrow /></Link>
        </motion.div>
      </div>
      <p className="about-note">
        Material selection is based on application requirements such as operating temperature, pressure, chemical exposure,
        mechanical loading, friction, and compatibility with the operating medium.
      </p>
    </div>
  );
}

function Lifecycle() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  return (
    <ol ref={ref} className="about-lifecycle">
      {lifecycle.map((stage, index) => (
        <motion.li
          key={stage.title}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45, delay: index * 0.1 }}
        >
          <span className="about-lifecycle-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <h3>{stage.title}</h3>
          <p>{stage.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}

function VisionValues() {
  const tabs = ['Vision', 'Mission', 'Core Values'];
  const [tab, setTab] = useState(0);

  return (
    <div className="about-vision">
      <div className="about-tabs" role="tablist" aria-label="Vision, mission and values">
        {tabs.map((name, index) => (
          <button key={name} type="button" role="tab" aria-selected={index === tab} onClick={() => setTab(index)}>{name}</button>
        ))}
      </div>
      <motion.div key={tab} role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        {tab === 0 && (
          <div className="about-statement">
            <h3>To Be Recognized as a Global Leader in Polymer Engineering Technology.</h3>
            <p>We aim to strengthen our position in polymer engineering through a continued commitment to quality, reliability, innovation, and customer satisfaction.</p>
          </div>
        )}
        {tab === 1 && (
          <div className="about-statement">
            <h3>Delivering Reliable Solutions Through Engineering Excellence.</h3>
            <p>To develop and manufacture high-performance polymer sealing solutions that address customer requirements through material expertise, application-focused engineering, manufacturing knowledge, and continuous improvement.</p>
          </div>
        )}
        {tab === 2 && (
          <div className="about-cards about-cards--5">
            {values.map((v) => (
              <article key={v.title} className="about-card"><h3>{v.title}</h3><p>{v.text}</p></article>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function AboutUsPage() {
  usePageMeta('About Us', 'Mithson Sealing Solutions designs and manufactures high-performance polymer seals and precision components, with over 25 years of group heritage.');

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    if (window.lenis) {
      window.lenis.resize();
      window.lenis.scrollTo(target, { offset: -100, force: true });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrapper about-page">
      {/* 01 Hero */}
      <section className="page-hero about-hero">
        <div className="container about-hero-grid">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">About Mithson</span>
            <h1 className="section-title about-hero-title">Engineering Precision. Delivering Reliable Sealing Solutions.</h1>
            <p className="section-subtitle">
              A polymer engineering company with over 25 years of group heritage, designing and manufacturing
              high-performance sealing solutions for critical industries.
            </p>
            <div className="about-actions">
              <button type="button" className="btn btn-navy" onClick={() => scrollTo('journey')}>Our Journey <Arrow /></button>
              <Link to="/capabilities" className="btn btn-outline">Explore Our Capabilities</Link>
            </div>
          </motion.div>
          {siteImages['capabilities-overview'] && (
            <AnimatedImage src={siteImages['capabilities-overview']} caption="Illustrative image" />
          )}
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      {/* Key facts */}
      <div className="container">
        <ul className="about-stats">
          {aboutStats.map((stat, index) => (
            <li key={stat.label}>
              <span className="about-stat-icon"><Icon>{STAT_ICONS[index]}</Icon></span>
              <div>
                <strong><CountUp value={stat.value} suffix={stat.suffix} plain={stat.plain} /></strong>
                <span>{stat.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 02 Who we are + philosophy */}
      <Section id="who-we-are" label="Who We Are" title="A Trusted Name in Polymer Engineering">
        <div className="about-split">
          <div className="about-prose">{whoWeAre.map((p) => <p key={p}>{p}</p>)}</div>
          <aside className="about-panel">
            <span className="section-label">Our Engineering Philosophy</span>
            <h3>Understanding the Application Before Engineering the Solution.</h3>
            <p>
              Every industrial application presents different operating conditions. Pressure, temperature, chemical exposure,
              friction, movement, and equipment geometry all influence sealing performance.
            </p>
            <ul className="about-checks">{philosophy.map((p) => <li key={p}>{p}</li>)}</ul>
          </aside>
        </div>
      </Section>

      {/* 03 Journey */}
      <Section id="journey" label="Our Story" title="Built on Experience. Driven by Engineering." tint>
        <Journey />
      </Section>

      {/* 04 Materials */}
      <Section id="materials" label="Advanced Materials Expertise" title="Selecting the Right Material for Every Application." intro="Material selection plays a critical role in the performance and service life of sealing components. Our group has experience working with a broad range of engineering polymers and elastomers." foldable>
        <MaterialExplorer />
      </Section>

      {/* 05 Products */}
      <Section id="manufacture" label="What We Manufacture" title="Precision Components for Critical Applications." intro="Our product portfolio covers a range of polymer sealing solutions and engineered components." tint foldable>
        <ProductRow />
      </Section>

      {/* 06 Industries */}
      <Section id="industries" label="Industries We Serve" title="Engineering Solutions Across Multiple Sectors." foldable>
        <div className="about-industries">
          {aboutIndustries.map((industry) => (
            <Link key={industry.title} to={industry.path} className="about-industry">
              {industry.image
                ? <img src={INDUSTRY_IMAGES[industry.image]} alt="" loading="lazy" />
                : <span className="about-industry-icon"><Icon size={32}><path d="M3 21V9l6 4V9l6 4V5h6v16H3Z" /></Icon></span>}
              <div>
                <h3>{industry.title} <Arrow /></h3>
                <p>{industry.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 07 Engineering & manufacturing lifecycle */}
      <Section id="capabilities" label="Engineering & Manufacturing Capabilities" title="From Application Requirements to Finished Components." intro="We focus on supporting customers throughout the product development and manufacturing lifecycle." tint>
        <Lifecycle />
        <Link to="/capabilities" className="btn btn-outline about-section-cta">View Capabilities <Arrow /></Link>
      </Section>

      {/* 08 Quality */}
      <Section id="quality" label="Quality Assurance" title="Quality Is Built Into Every Stage." foldable>
        <div className="about-split">
          <div className="about-prose">
            <p>Quality is an essential part of our approach to engineering and manufacturing.</p>
            <p>We emphasize quality throughout the product development lifecycle, from material selection and prototype development to production and post-delivery support.</p>
            <ul className="about-checks">{qualityFocus.map((q) => <li key={q}>{q}</li>)}</ul>
          </div>
          <aside className="about-panel">
            <span className="section-label">Quality Credentials</span>
            <div className="about-credentials">
              <img src={imgIso} alt="ISO 9001:2015 certified quality management system" loading="lazy" />
              <ul>
                {qualityCredentials.map((c) => <li key={c.title}><strong>{c.title}</strong><span>{c.text}</span></li>)}
              </ul>
            </div>
            <p className="about-note">Specific product compliance and material qualifications are subject to the applicable product documentation and requirements.</p>
            <Link to="/who-we-are/hsse-and-quality" className="about-link">HSSE & Quality <Arrow /></Link>
          </aside>
        </div>
      </Section>

      {/* 09 Facilities */}
      <Section id="facilities" label="Our Facilities" title="Where We Work" tint>
        <div className="about-cards about-cards--2">
          {company.offices.map((office) => (
            <article key={office.label} className="about-card about-facility">
              <span className="about-stat-icon"><Icon>{STAT_ICONS[3]}</Icon></span>
              <div>
                <h3>{office.label}</h3>
                <address>{office.address.slice(1).join(' ')}</address>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 10 Why Mithson */}
      <Section id="why-mithson" label="Why Choose Mithson" title="Partnering for Dependable Performance">
        <div className="about-cards about-cards--5">
          {whyMithson.map((item, index) => (
            <article key={item.title} className="about-card about-card--lift">
              <span className="about-lifecycle-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 11 Vision, mission, values */}
      <Section id="vision" label="Vision, Mission & Values" title="What Guides Us" tint foldable>
        <VisionValues />
      </Section>

      {/* 12 Sustainability */}
      <Section id="sustainability" label="Sustainability & Responsible Manufacturing" title="Engineering with Greater Environmental Responsibility." foldable>
        <div className="about-split">
          <div className="about-prose">
            <p>We recognize the importance of responsible manufacturing and reducing environmental impact.</p>
            <p>These initiatives reflect our commitment to exploring practical ways to reduce our environmental footprint across our operations.</p>
          </div>
          <aside className="about-panel">
            <span className="section-label">Our published initiatives</span>
            <ul className="about-checks">{sustainabilityInitiatives.map((s) => <li key={s}>{s}</li>)}</ul>
            <Link to="/who-we-are/sustainability" className="about-link">Sustainability <Arrow /></Link>
          </aside>
        </div>
      </Section>

      {/* 13 CTA */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="about-cta">
              <div>
                <h2>Let's Engineer Your Next Sealing Solution.</h2>
                <p>
                  Every application has its own engineering challenges. Whether you require a standard component, an
                  application-specific seal, or support with product development, connect with Mithson Sealing Solutions.
                </p>
              </div>
              <div className="about-actions">
                <Link to="/connect-with-us/application-data" className="btn btn-white">Discuss Your Application</Link>
                <Link to="/products" className="btn btn-outline-white">Explore Our Products</Link>
                <Link to="/book-a-meeting" className="btn btn-outline-white">Book a Meeting</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

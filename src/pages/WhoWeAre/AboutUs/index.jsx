import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, animate, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';
import usePageMeta from '../../../shared/hooks/usePageMeta';
import { company } from '../../../content/company';
import { products } from '../../../content/products';
import { materials } from '../../../content/materials';
import {
  aboutIndustries,
  aboutStats,
  highlights,
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
import imgHeroProducts from '../../../assets/about/hero-products.webp';
import imgBuilding from '../../../assets/about/mithson-building.webp';
import imgHeritage from '../../../assets/about/group-heritage.webp';
import imgExpansion from '../../../assets/about/journey-expansion.webp';
import imgToday from '../../../assets/about/journey-today.webp';
import imgOilGas from '../../../assets/industries/Oil & Gas.webp';
import imgAutomotive from '../../../assets/industries/Automotive.webp';
import imgLifeScience from '../../../assets/industries/Life Science.webp';
import imgSemiconductor from '../../../assets/industries/Semiconductor.webp';
import imgAerospace from '../../../assets/industries/Aerospace.webp';
import imgMining from '../../../assets/industries/Mining.webp';
import imgDownholetools from '../../../assets/industries/Downhole Tools.webp';
import imgIso from '../../../assets/certificates/ISO.png';
import './AboutUs.css';

const INDUSTRY_IMAGES = {
  'Oil & Gas': imgOilGas,
  Automotive: imgAutomotive,
  'Life Science': imgLifeScience,
  Semiconductor: imgSemiconductor,
  Aerospace: imgAerospace,
  Mining: imgMining,
  'Downhole Tools': imgDownholetools,
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

// Line icons, drawn on a 24px grid
const ICONS = {
  calendar: <path d="M4 5h16v15H4zM4 9h16M9 3v4M15 3v4" />,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  sectors: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" /></>,
  tools: <path d="m14.7 6.3 3-3a4 4 0 0 1-5.4 5.4L6 15l-2 1-1 2 1 1 2-1 1-2 6.3-6.3M15 15l5 5M17 13l4 4-2 2-4-4" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5M8.5 11h5M11 8.5v5" /></>,
  ruler: <path d="M3 17 17 3l4 4L7 21l-4-4ZM7 13l2 2M10 10l2 2M13 7l2 2" />,
  cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 9 8-4.5M12 12v9M12 12 4 7.5" />,
  factory: <path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17H3ZM7 17h2M12 17h2M17 17h1" />,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14M12 3V1" />,
  car: <><path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3z" /><circle cx="7.5" cy="16" r="1.5" /><circle cx="16.5" cy="16" r="1.5" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>,
  plane: <path d="M10 14 3 12l1-2 7 1 4-7h2l-1 8 5 1v2l-5 1 1 5h-2l-4-5-1 4H8l1-5Z" />,
  truck: <><path d="M2 16V8h11l3 4h5v4H2Z" /><circle cx="6" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></>,
};

const STAT_ICONS = ['calendar', 'layers', 'sectors', 'pin'];
const HIGHLIGHT_ICONS = ['layers', 'gear', 'tools', 'shield'];
const LIFECYCLE_ICONS = ['search', 'layers', 'ruler', 'cube', 'factory', 'shield'];
const INDUSTRY_ICONS = { 'Oil & Gas': 'rig', Automotive: 'car', 'Life Sciences': 'flask', Semiconductor: 'chip', Aerospace: 'plane', Mining: 'truck', 'Downhole Tools': 'factory' };

function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const Arrow = ({ back }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={back ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'} />
  </svg>
);

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

/** Children fade up one after another when the group scrolls into view. */
function Stagger({ as = 'div', className, children, step = 0.08 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      ref={ref}
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      animate={inView ? 'shown' : undefined}
      variants={{ shown: { transition: { staggerChildren: step } } }}
    >
      {children}
    </Tag>
  );
}

const item = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/** On phones some long sections fold into a tap-to-open panel. */
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

function Section({ id, label, title, intro, tint, foldable, className = '', aside, children }) {
  const phone = useIsPhone();
  const [open, setOpen] = useState(false);
  const folded = foldable && phone;
  const panelId = `${id}-panel`;

  return (
    <section id={id} className={`section about-section${tint ? ' about-tint' : ''}${folded ? ' about-section--folded' : ''} ${className}`}>
      <div className="container">
        {folded ? (
          <button type="button" className="about-fold" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}>
            <span>{title}</span>
            <span className="about-fold-icon" aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
        ) : (
          <ScrollReveal>
            <div className="about-head">
              <div>
                {label && <span className="section-label">{label}</span>}
                <h2 className="section-title about-title">{title}</h2>
                {intro && <p className="about-intro">{intro}</p>}
              </div>
              {aside}
            </div>
          </ScrollReveal>
        )}
        <div id={panelId} className="about-body" hidden={folded && !open}>
          {folded && intro && <p className="about-intro">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/** Captioned image that never crops its picture. */
function Figure({ src, alt, caption, className = '' }) {
  return (
    <motion.figure
      className={`about-figure ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </motion.figure>
  );
}

function Hero({ onJourney }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%']);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);

  return (
    <section ref={ref} className="about-hero">
      <motion.div className="about-hero-bg" style={{ y: bgY, backgroundImage: `url("${imgOilGas}")` }} aria-hidden="true" />
      <div className="container">
        <div className="about-hero-grid">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Advanced Polymer Sealing Solutions</span>
            <h1 className="about-hero-title">Engineering Precision. Delivering Reliable Sealing Solutions.</h1>
            <p className="about-hero-text">
              A polymer engineering company with over 25 years of group heritage, designing and manufacturing
              high-performance sealing solutions for critical industries.
            </p>
            <div className="about-actions">
              <Link to="/products" className="btn btn-primary">Explore Products <Arrow /></Link>
              <Link to="/capabilities" className="btn btn-outline">Our Capabilities</Link>
              <button type="button" className="about-text-btn" onClick={onJourney}>Our Journey <Arrow /></button>
            </div>
          </motion.div>
          <motion.div
            className="about-hero-visual"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <span className="about-hero-glow" aria-hidden="true" />
            <img className="about-hero-float" src={imgHeroProducts} alt="Polymer seals, bushings and a flange component" />
            <span className="about-caption">Illustrative image</span>
          </motion.div>
        </div>

        <Stagger as="ul" className="about-stats">
          {aboutStats.map((stat, index) => (
            <motion.li key={stat.label} variants={item}>
              <span className="about-icon"><Icon name={STAT_ICONS[index]} /></span>
              <div>
                <strong><CountUp value={stat.value} suffix={stat.suffix} plain={stat.plain} /></strong>
                <span>{stat.label}</span>
              </div>
            </motion.li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// One picture per journey step, in the same order as `journey`
const JOURNEY_IMAGES = [
  { src: imgHeritage, alt: 'Fluoro Carbon Seals building in Chennai', caption: 'Fluoro Carbon Seals, Chennai: our group heritage' },
  { src: imgExpansion, alt: 'Spring-energized and polymer seals', caption: 'Spring-energized and polymer seals' },
  { src: imgBuilding, alt: 'Mithson Sealing Solutions building', caption: 'Illustrative image' },
  { src: imgToday, alt: 'ISO 9001:2015 certificate with material test records for API 6A, NORSOK and BAM', caption: 'ISO 9001:2015 and material test records' },
];

function Journey() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0, 1]);
  const picture = JOURNEY_IMAGES[active];

  // The step crossing the middle of the screen becomes the active one, so the picture follows the scroll
  useEffect(() => {
    const steps = ref.current?.querySelectorAll('li');
    if (!steps) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(Number(entry.target.dataset.step))),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    JOURNEY_IMAGES.forEach(({ src }) => { new Image().src = src; });
  }, []);

  return (
    <div className="about-journey">
      <div className="about-journey-visual">
        <figure className="about-figure about-journey-figure">
          <AnimatePresence initial={false}>
            <motion.img
              key={picture.src}
              src={picture.src}
              alt={picture.alt}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <figcaption>{picture.caption}</figcaption>
          <span className="about-journey-count" aria-hidden="true">
            <strong>{journey[active].key}</strong> {String(active + 1).padStart(2, '0')} / {String(journey.length).padStart(2, '0')}
          </span>
        </figure>
        <div className="about-journey-pips" aria-hidden="true">
          {journey.map((step, index) => <span key={step.key} className={index === active ? 'is-active' : ''} />)}
        </div>
      </div>
      <ol ref={ref} className="about-timeline">
        <span className="about-timeline-line" aria-hidden="true"><motion.span style={{ scaleY: lineScale }} /></span>
        {journey.map((step, index) => (
          <motion.li
            key={step.key}
            data-step={index}
            className={index === active ? 'is-active' : ''}
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <span className="about-timeline-dot" aria-hidden="true" />
            <div
              className="about-timeline-card"
              role="button"
              tabIndex={0}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(index); } }}
            >
              <img className="about-timeline-img" src={JOURNEY_IMAGES[index].src} alt="" loading="lazy" />
              <div className="about-timeline-top">
                <strong>{step.key}</strong>
                <span className={`about-tag${step.tag.startsWith('Group') ? '' : ' about-tag--mithson'}`}>{step.tag}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
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
    <div className="about-products-wrap">
      <button type="button" className="about-arrow about-arrow--prev" aria-label="Previous products" disabled={ends.start} onClick={() => move(-1)}><Arrow back /></button>
      <Stagger className="about-products" step={0.06}>
        <div className="about-products-track" ref={rowRef} onScroll={update}>
          {manufactureGroups.map((group) => (
            <motion.div key={group.title} variants={item} className="about-product-cell">
              <Link to={group.path} className="about-product">
                <div className="about-product-image"><img src={productImage(group.product)} alt="" loading="lazy" /></div>
                <div className="about-product-text">
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </div>
                <span className="about-product-go" aria-hidden="true"><Arrow /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Stagger>
      <button type="button" className="about-arrow about-arrow--next" aria-label="Next products" disabled={ends.end} onClick={() => move(1)}><Arrow /></button>
    </div>
  );
}

function MaterialExplorer() {
  const [familyIndex, setFamilyIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const family = materialFamilies[familyIndex];
  const selected = materialInfo(family.items[itemIndex]);

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
        <motion.div key={family.family} className="about-swatches" role="listbox" aria-label={family.family} initial="hidden" animate="shown" variants={{ shown: { transition: { staggerChildren: 0.05 } } }}>
          {family.items.map((m, index) => (
            <motion.button key={m.name} variants={item} type="button" role="option" aria-selected={index === itemIndex} onClick={() => setItemIndex(index)}>
              <span className={`about-swatch about-swatch--${m.swatch}`} aria-hidden="true" />
              <span>{m.name}</span>
            </motion.button>
          ))}
        </motion.div>
        <motion.div key={selected.name} className="about-material-card" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <span className={`about-swatch about-swatch--${selected.swatch} about-swatch--large`} aria-hidden="true" />
          <span className="about-kicker">{family.family}</span>
          <h3>{selected.name}</h3>
          {selected.strengths && <p><strong>Strengths:</strong> {selected.strengths}</p>}
          {selected.uses && <p><strong>Typical uses:</strong> {selected.uses}</p>}
          <Link to="/capabilities/materials" className="about-link">Compare materials <Arrow /></Link>
        </motion.div>
      </div>
      <p className="about-note">
        Material selection is based on application requirements such as operating temperature, pressure, chemical exposure,
        mechanical loading, friction, and compatibility with the operating medium. Tiles show typical colours only.
      </p>
    </div>
  );
}

/** Builds the U-shaped line through the step icons (01 → 03, round the bend, 04 → 06). */
function useFlowPath(ref) {
  const [shape, setShape] = useState(null);
  useEffect(() => {
    const box = ref.current;
    if (!box) return undefined;
    const measure = () => {
      const icons = box.querySelectorAll('.about-flow-icon');
      if (icons.length < 6) return;
      const origin = box.getBoundingClientRect();
      const centre = (i) => {
        const r = icons[i].getBoundingClientRect();
        return { x: r.left - origin.left + r.width / 2, y: r.top - origin.top + r.height / 2 };
      };
      const [a, c, d, f] = [centre(0), centre(2), centre(3), centre(5)];
      if (d.y <= c.y + 1) { setShape(null); return; }
      // The bend runs through the side gutter; tablets have no gutter, so their rows get straight lines only
      const edge = origin.width - 6;
      const straight = window.matchMedia('(max-width: 900px)').matches;
      setShape({
        w: origin.width,
        h: origin.height,
        d: straight
          ? `M${a.x} ${a.y} H${c.x} M${d.x} ${d.y} H${f.x}`
          : `M${a.x} ${a.y} H${c.x} C${edge} ${c.y} ${edge} ${d.y} ${d.x} ${d.y} H${f.x}`,
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(box);
    return () => observer.disconnect();
  }, [ref]);
  return shape;
}

function Lifecycle() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const shape = useFlowPath(ref);

  return (
    <div ref={ref} className="about-flow">
      {shape && (
        <svg className="about-flow-path" viewBox={`0 0 ${shape.w} ${shape.h}`} aria-hidden="true">
          <path className="about-flow-track" d={shape.d} />
          <motion.path
            d={shape.d}
            initial={{ pathLength: reduceMotion ? 1 : 0 }}
            animate={inView ? { pathLength: 1 } : undefined}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
        </svg>
      )}
      <ol>
        {lifecycle.map((stage, index) => (
          <motion.li
            key={stage.title}
            className={`about-flow-step about-flow-step--${index + 1}`}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.45, delay: 0.2 + index * 0.22 }}
          >
            <span className="about-flow-icon"><Icon name={LIFECYCLE_ICONS[index]} size={26} /></span>
            <span className="about-flow-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
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
      {/* 01 Hero with key facts */}
      <Hero onJourney={() => scrollTo('journey')} />

      {/* 02 Who we are */}
      <section id="who-we-are" className="section about-section about-who">
        <div className="container">
          <div className="about-who-grid">
            <ScrollReveal>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title about-title">A Trusted Name in Polymer Engineering</h2>
              <div className="about-prose">{whoWeAre.map((p) => <p key={p}>{p}</p>)}</div>
            </ScrollReveal>
            <Figure className="about-who-figure" src={imgBuilding} alt="Mithson Sealing Solutions building" caption="Illustrative image" />
          </div>

          <Stagger className="about-highlights">
            {highlights.map((h, index) => (
              <motion.article key={h.title} variants={item} className="about-highlight">
                <span className="about-icon"><Icon name={HIGHLIGHT_ICONS[index]} /></span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </motion.article>
            ))}
          </Stagger>

          <ScrollReveal>
            <aside className="about-panel about-philosophy">
              <div>
                <span className="section-label">Our Engineering Philosophy</span>
                <h3>Understanding the Application Before Engineering the Solution.</h3>
                <p>
                  Every industrial application presents different operating conditions. Pressure, temperature, chemical exposure,
                  friction, movement, and equipment geometry all influence sealing performance.
                </p>
              </div>
              <ul className="about-checks">{philosophy.map((p) => <li key={p}>{p}</li>)}</ul>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* 03 Journey */}
      <Section id="journey" label="Our Story" title="Built on Experience. Driven by Engineering." tint>
        <Journey />
      </Section>

      {/* 04 Materials */}
      <Section id="materials" label="Advanced Materials Expertise" title="Selecting the Right Material for Every Application." intro="Material selection plays a critical role in the performance and service life of sealing components. Our group has experience working with a broad range of engineering polymers and elastomers.">
        <MaterialExplorer />
      </Section>

      {/* 05 Products */}
      <Section
        id="manufacture"
        label="What We Manufacture"
        title="Precision Components for Critical Applications."
        intro="Our product portfolio covers a range of polymer sealing solutions and engineered components."
        tint
        aside={<Link to="/products" className="about-link about-head-link">View All Products <Arrow /></Link>}
      >
        <ProductRow />
      </Section>

      {/* 06 Industries */}
      <Section id="industries" label="Industries We Serve" title="Engineering Solutions Across Multiple Sectors.">
        <Stagger className="about-industries" step={0.06}>
          {aboutIndustries.map((industry) => (
            <motion.div key={industry.title} variants={item} className={`about-industry-cell${industry.image ? '' : ' about-industry-cell--plain'}`}>
              <Link to={industry.path} className="about-industry">
                {industry.image && <img src={INDUSTRY_IMAGES[industry.image]} alt="" loading="lazy" />}
                <span className="about-industry-icon"><Icon name={INDUSTRY_ICONS[industry.title]} size={28} /></span>
                <div className="about-industry-text">
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                </div>
                <span className="about-industry-go" aria-hidden="true"><Arrow /></span>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </Section>

      {/* 07 Engineering & manufacturing lifecycle */}
      <Section
        id="capabilities"
        label="Engineering & Manufacturing"
        title="From Application Requirements to Finished Components."
        intro="We focus on supporting customers throughout the product development and manufacturing lifecycle."
        tint
        aside={<Link to="/capabilities" className="btn btn-outline about-head-link">View Capabilities <Arrow /></Link>}
      >
        <Lifecycle />
      </Section>

      {/* 08 Quality */}
      <Section id="quality" label="Quality Assurance" title="Quality Is Built Into Every Stage.">
        <div className="about-quality">
          <div className="about-prose">
            <p>Quality is an essential part of our approach to engineering and manufacturing.</p>
            <p>We emphasize quality throughout the product development lifecycle, from material selection and prototype development to production and post-delivery support.</p>
            <ul className="about-checks">{qualityFocus.map((q) => <li key={q}>{q}</li>)}</ul>
            <Link to="/who-we-are/hsse-and-quality" className="about-link">HSSE & Quality <Arrow /></Link>
          </div>
          <div className="about-quality-badges">
            <motion.div
              className="about-iso"
              initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={imgIso} alt="ISO 9001:2015 certified quality management system" loading="lazy" />
              <strong>{qualityCredentials[0].title}</strong>
              <span>{qualityCredentials[0].text}</span>
            </motion.div>
            <Stagger as="ul" className="about-creds">
              {qualityCredentials.slice(1).map((c) => (
                <motion.li key={c.title} variants={item}><strong>{c.title}</strong><span>{c.text}</span></motion.li>
              ))}
            </Stagger>
            <p className="about-note">Specific product compliance and material qualifications are subject to the applicable product documentation and requirements.</p>
          </div>
        </div>
      </Section>

      {/* 09 Facilities */}
      <Section id="facilities" label="Our Facilities" title="Where We Work" tint foldable>
        <Stagger className="about-cards about-cards--2">
          {company.offices.map((office) => (
            <motion.article key={office.label} variants={item} className="about-card about-facility">
              <span className="about-icon"><Icon name="pin" /></span>
              <div>
                <h3>{office.label}</h3>
                <address>{office.address.slice(1).join(' ')}</address>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </Section>

      {/* 10 Why Mithson */}
      <Section id="why-mithson" label="Why Choose Mithson" title="Partnering for Dependable Performance" foldable>
        <Stagger className="about-cards about-cards--5">
          {whyMithson.map((w, index) => (
            <motion.article key={w.title} variants={item} className="about-card about-card--lift">
              <span className="about-flow-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </motion.article>
          ))}
        </Stagger>
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
      <section className="section about-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="about-cta">
              <div className="about-cta-bg" style={{ backgroundImage: `url("${imgOilGas}")` }} aria-hidden="true" />
              <div className="about-cta-text">
                <span className="section-label">Get in Touch</span>
                <h2>Let's Engineer Your Next Sealing Solution.</h2>
                <p>
                  Every application has its own engineering challenges. Whether you require a standard component, an
                  application-specific seal, or support with product development, connect with Mithson Sealing Solutions.
                </p>
              </div>
              <div className="about-cta-actions">
                <Link to="/connect-with-us/application-data" className="btn btn-white">Discuss Your Application <Arrow /></Link>
                <Link to="/products" className="btn btn-outline-white">Explore Our Products <Arrow /></Link>
                <Link to="/book-a-meeting" className="btn btn-outline-white">Book a Meeting <Arrow /></Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

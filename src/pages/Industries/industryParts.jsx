import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ItemSpecList } from '../../shared/components/ProductSpecList';

// Building blocks shared by the industry pages and the Downhole Tools page.
const EASE = [0.22, 1, 0.36, 1];

const ICONS = {
  gauge: <><path d="M12 21a9 9 0 1 0-9-9" /><path d="M3 12h3M12 3v3M19.5 6.5 17 9M12 12l5-3" /></>,
  thermo: <><path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0Z" /><path d="M12 9v5" /></>,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
  cycle: <><path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></>,
  wear: <><circle cx="12" cy="12" r="8" /><path d="M12 4v3M12 17v3M4 12h3M17 12h3" /></>,
  vacuum: <><circle cx="12" cy="12" r="8" /><path d="M8 12h8" /></>,
  dust: <path d="M4 14h3M9 10h3M14 14h3M6 18h2M12 18h3M17 10h3M8 6h2M15 6h2" />,
  bolt: <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />,
  weight: <><path d="M6 8h12l2 12H4L6 8Z" /><path d="M9 8a3 3 0 1 1 6 0" /></>,
  ruler: <><path d="M3 17 17 3l4 4L7 21Z" /><path d="m7 13 2 2M10 10l2 2M13 7l2 2" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  wind: <path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7" />,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 13h6M9 17h4" /></>,
};

export function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name] || ICONS.check}
    </svg>
  );
}

export const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
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

export function Head({ number, label, title, intro, light }) {
  return (
    <Reveal className={`mp-head${light ? ' mp-head--light' : ''}`}>
      <span className="mp-label">{number && <b>{number}</b>}{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

export function Cards({ items }) {
  return (
    <div className={`ind-cards${items.length === 4 ? ' ind-cards--4' : ''}`}>
      {items.map((c, i) => (
        <Reveal key={c.title} delay={(i % 3) * 0.06} className="ind-card">
          {c.icon && <span className="mp-icon"><Icon name={c.icon} size={20} /></span>}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
          {c.list && <ul>{c.list.map((l) => <li key={l}>{l}</li>)}</ul>}
        </Reveal>
      ))}
    </div>
  );
}

export function Products({ items, onZoom }) {
  return (
    <div className="ind-products">
      {items.map((p, i) => (
        <Reveal key={p.name} delay={(i % 4) * 0.05} className="ind-product">
          <button type="button" className="og-product-shot" onClick={() => onZoom({ src: p.image, alt: `Mithson ${p.name}` })}
            aria-label={`Enlarge ${p.name} photo`}>
            <img src={p.image} alt={`Mithson ${p.name}`} loading="lazy" />
          </button>
          {p.tag && <span className="ind-tag">{p.tag}</span>}
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
          {p.materials && <p className="ind-meta"><b>Materials:</b> {p.materials}</p>}
          {p.uses && <p className="ind-meta"><b>Typical use:</b> {p.uses}</p>}
          {p.path && <Link to={p.path} className="ind-more">View product <Arrow /></Link>}
        </Reveal>
      ))}
    </div>
  );
}

/** the page's interactive centrepiece: pick an application, see what seals it and why */
/**
 * Family and product explorer on a navy band, in the UNI-LUBE style: pick a family, then one of
 * its products, and the panel shows that product's photo, text, figures and uses on this page.
 * With a single family the family row is left out.
 */
export function ProductExplorer({ families, specs = {}, onZoom }) {
  const [fam, setFam] = useState(0);
  const [prod, setProd] = useState(0);
  const family = families[fam];
  const item = family.items[prod];
  const spec = specs[item.label];
  const pickFamily = (i) => { setFam(i); setProd(0); };
  return (
    <div className="ind-x">
      {families.length > 1 && (
        <div className="ind-x-families" role="tablist" aria-label="Product families">
          {families.map((f, i) => (
            <button key={f.title} type="button" role="tab" aria-selected={i === fam} onClick={() => pickFamily(i)}>
              <b>{String(i + 1).padStart(2, '0')}</b>
              <span>{f.title}</span>
            </button>
          ))}
        </div>
      )}
      {(family.intro || family.desc) && (
        <div className="ind-x-family-text">
          {family.intro && <p>{family.intro}</p>}
          {family.desc && <p>{family.desc}</p>}
        </div>
      )}
      <div className="ind-x-products" role="tablist" aria-label={`${family.title} products`}>
        {family.items.map((p, i) => (
          <button key={p.label} type="button" role="tab" aria-selected={i === prod} onClick={() => setProd(i)}>
            {p.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${fam}-${prod}`}
          role="tabpanel"
          className="ind-x-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <button type="button" className="ind-x-photo" onClick={() => onZoom({ src: item.image, alt: `Mithson ${item.label}` })}
            aria-label={`Enlarge ${item.label} photo`}>
            <img src={item.image} alt={`Mithson ${item.label}`} />
          </button>
          <div className="ind-x-body">
            <h3>{item.label}</h3>
            <em>{family.title}</em>
            {item.tag && <p className="ind-x-tag"><Icon name="gauge" size={16} /> {item.tag}</p>}
            <p>{item.desc}</p>
            {spec && <ItemSpecList spec={spec} />}
            <dl className="ind-x-facts">
              <div><dt>Material</dt><dd>{item.materials}</dd></div>
              <div><dt>Application</dt><dd>{item.application}</dd></div>
            </dl>
            <Link to={`/connect-with-us?subject=${encodeURIComponent(`Enquiry: ${item.label}`)}`} className="btn mp-inline-btn ind-x-btn">
              Enquire about {item.label} <Arrow />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Table({ cols, rows }) {
  const template = cols.map((_, i) => (i === 0 ? 'minmax(130px, 0.8fr)' : 'minmax(0, 1fr)')).join(' ');
  return (
    <div className="mu-table og-table ind-table">
      <div className="mu-table-head ind-row" style={{ '--cols': template }}>
        {cols.map((c) => <span key={c}>{c}</span>)}
      </div>
      {rows.map((r) => (
        <div key={r[0]} className="ind-row" style={{ '--cols': template }}>
          {r.map((cell, i) => (i === 0 ? <span key={i}><b>{cell}</b></span> : <span key={i} data-label={cols[i]}>{cell}</span>))}
        </div>
      ))}
    </div>
  );
}

/** drawn cross-sections, labelled; illustrations of construction, not to scale */
const DIAGRAMS = {
  spring: {
    title: 'Spring-energized seal',
    text: 'A polymer jacket holds a metal spring. The spring pushes the sealing lips onto the shaft and bore, and system pressure adds to that force.',
    labels: ['Polymer jacket', 'Energizing spring', 'Sealing lips', 'System pressure'],
    art: (
      <svg viewBox="0 0 240 150" role="img" aria-label="Cross-section of a spring-energized seal">
        <rect className="ind-d-metal" x="10" y="10" width="220" height="26" rx="3" />
        <rect className="ind-d-metal" x="10" y="114" width="220" height="26" rx="3" />
        <path className="ind-d-jacket" d="M70 36h96v78H70l-10-8V44Z" />
        <path className="ind-d-cavity" d="M84 50h70v50H84a14 14 0 0 1 0-50Z" />
        <circle className="ind-d-spring" cx="112" cy="75" r="16" />
        <circle className="ind-d-spring" cx="112" cy="75" r="9" />
        <path className="ind-d-arrow" d="M196 75h-26M176 69l-6 6 6 6" />
        <path className="ind-d-lip" d="M60 44 52 36M60 106l-8 8" />
        <text className="ind-d-text" x="200" y="64">P</text>
      </svg>
    ),
  },
  encap: {
    title: 'Encapsulated O-ring',
    text: 'An elastomer core gives the ring its recovery; a seamless fluoropolymer jacket gives it a chemical-resistant contact surface.',
    labels: ['Fluoropolymer jacket', 'Elastomer core', 'Static sealing contact'],
    art: (
      <svg viewBox="0 0 240 150" role="img" aria-label="Cross-section of an encapsulated O-ring">
        <rect className="ind-d-metal" x="10" y="10" width="220" height="30" rx="3" />
        <rect className="ind-d-metal" x="10" y="110" width="220" height="30" rx="3" />
        <ellipse className="ind-d-jacket" cx="120" cy="75" rx="40" ry="35" />
        <ellipse className="ind-d-core" cx="120" cy="75" rx="31" ry="27" />
        <path className="ind-d-lip" d="M100 41h40M100 109h40" />
      </svg>
    ),
  },
};

export function Diagrams({ kinds }) {
  return (
    <div className="ind-diagrams">
      {kinds.map((k, i) => {
        const d = DIAGRAMS[k];
        return (
          <Reveal key={k} delay={i * 0.08} className="ind-diagram">
            <div className="ind-diagram-art">{d.art}</div>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
            <ul className="ind-chips">{d.labels.map((l) => <li key={l}>{l}</li>)}</ul>
            <small>Drawn illustration, not to scale.</small>
          </Reveal>
        );
      })}
    </div>
  );
}

/** one product told in depth: its real photo, a property table and where it is used */
export function Feature({ f, onZoom }) {
  return (
    <div className="ind-feature">
      <Reveal>
        <button type="button" className="ind-feature-shot" onClick={() => onZoom({ src: f.image, alt: f.alt })} aria-label={`Enlarge: ${f.alt}`}>
          <img src={f.image} alt={f.alt} loading="lazy" />
        </button>
      </Reveal>
      <Reveal delay={0.08}>
        <dl className="ind-feature-list">
          {f.rows.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
        <h4 className="ind-mini">Potential use cases</h4>
        <ul className="ind-chips">{f.uses.map((u) => <li key={u}>{u}</li>)}</ul>
        {f.path && <Link to={f.path} className="btn btn-navy mp-inline-btn">View the product page <Arrow /></Link>}
      </Reveal>
    </div>
  );
}

export function Faqs({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <ul className="mp-faqs">
      {items.map((f, i) => (
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

export function Lightbox({ shot, onClose }) {
  useEffect(() => {
    if (!shot) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shot, onClose]);

  return (
    <AnimatePresence>
      {shot && (
        <motion.div className="og-lightbox" role="dialog" aria-modal="true" aria-label={shot.alt}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={onClose}>
          <motion.img src={shot.src} alt={shot.alt} initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} transition={{ duration: 0.3, ease: EASE }} />
          <button type="button" onClick={onClose} aria-label="Close">×</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

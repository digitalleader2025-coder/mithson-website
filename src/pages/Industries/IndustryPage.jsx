import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { industryPages } from '../../content/industryPages';
import { Arrow, Cards, Diagrams, Faqs, Feature, Head, Icon, Lightbox, Products, Reveal, Table } from './industryParts';
// shared section look (MITH PLATE, M-UNI) plus the Oil & Gas extras this template reuses
import '../Products/MITH-PLATE/MithPlate.css';
import '../Products/M-UNI-Seal/MUniSeal.css';
import './EnergyOilGas/EnergyOilGas.css';
import './IndustryPage.css';

const EASE = [0.22, 1, 0.36, 1];
const APPLICATION_DATA = '/connect-with-us/application-data';

function Hero({ hero, onZoom }) {
  return (
    <section className="mp-hero ind-hero">
      <div className="mp-hero-bg" aria-hidden="true" />
      <div className="container ind-hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="mp-label mp-label--dark">{hero.label}</span>
          <h1>
            {hero.title}
            <span>{hero.accent}</span>
            {hero.rest}
          </h1>
          <p>{hero.lead}</p>
          {hero.lead2 && <p className="og-hero-sub">{hero.lead2}</p>}
          {hero.tags && <ul className="og-tags">{hero.tags.map((t) => <li key={t}>{t}</li>)}</ul>}
          <div className="mp-actions">
            <a href="#ind-products" className="btn btn-primary">Explore the products <Arrow /></a>
            <Link to={APPLICATION_DATA} className="btn mp-btn-ghost">Send your requirement</Link>
          </div>
        </motion.div>

        {/* the page's existing hero picture, shown whole */}
        <motion.button
          type="button"
          className="ind-hero-visual"
          onClick={() => onZoom({ src: hero.image, alt: hero.imageAlt })}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          aria-label={`Enlarge: ${hero.imageAlt}`}
        >
          <img src={hero.image} alt={hero.imageAlt} />
          {hero.imageNote && <small>{hero.imageNote}</small>}
        </motion.button>
      </div>

      {hero.chips && (
        <div className="container">
          <motion.ul
            className="mp-stats"
            initial="hidden"
            animate="shown"
            variants={{ shown: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } } }}
          >
            {hero.chips.map((c) => (
              <motion.li key={c.title} variants={{ hidden: { opacity: 0, y: 18 }, shown: { opacity: 1, y: 0 } }}>
                <span className="mp-icon"><Icon name={c.icon} size={20} /></span>
                <div><strong>{c.title}</strong><span>{c.text}</span></div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </section>
  );
}

function Applications({ items, onZoom }) {
  const [active, setActive] = useState(items[0].title);
  const item = items.find((a) => a.title === active);
  return (
    <div className="ind-apps">
      <div className="og-picks ind-app-picks" role="tablist" aria-label="Applications">
        {items.map((a, i) => (
          <button key={a.title} type="button" role="tab" aria-selected={a.title === active} onClick={() => setActive(a.title)}>
            <b>{String(i + 1).padStart(2, '0')}</b>
            <span>{a.title}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          role="tabpanel"
          className="og-panel ind-app-panel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          {item.photo && (
            <button type="button" className="og-shot" onClick={() => onZoom({ src: item.photo, alt: item.photoAlt })}>
              <img src={item.photo} alt={item.photoAlt} loading="lazy" />
            </button>
          )}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.parts && (
            <>
              <h4 className="ind-mini">{item.partsLabel || 'Typical sealing and wear components'}</h4>
              <ul className="ind-chips">{item.parts.map((p) => <li key={p}>{p}</li>)}</ul>
            </>
          )}
          {item.materials && <p className="og-uses"><strong>Common materials:</strong> {item.materials}</p>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * One template for the six industry pages. Each section renders only when the page's content
 * file supplies it, and sections are numbered in the order they appear.
 */
export default function IndustryPage({ slug }) {
  const page = industryPages[slug];
  const [shot, setShot] = useState(null);

  useEffect(() => {
    document.title = `${page.docTitle} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, [page.docTitle]);

  // number the sections in the order they appear; every second light section gets the tint
  const order = [
    page.challenges && 'challenges', 'products', page.applications && 'applications',
    ...(page.sections || []).map((x) => x.id), 'faq', 'cta',
  ].filter(Boolean);
  const no = (key) => String(order.indexOf(key) + 1).padStart(2, '0');
  const tint = (key) => ((order.indexOf(key) + 1) % 2 === 0 ? ' mp-tint' : '');

  return (
    <div className="page-wrapper mp-page og-page ind-page">
      <Hero hero={page.hero} onZoom={setShot} />

      {page.challenges && (
        <section className="section mp-section" id="ind-challenges">
          <div className="container">
            <Head number={no('challenges')} label={page.challenges.label || 'The challenge'} title={page.challenges.title} intro={page.challenges.intro} />
            <Cards items={page.challenges.items} />
          </div>
        </section>
      )}

      <section className={`section mp-section${tint('products')}`} id="ind-products">
        <div className="container">
          <Head number={no('products')} label="Products" title={page.products.title} intro={page.products.intro} />
          <Products items={page.products.items} onZoom={setShot} />
          {page.products.note && <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {page.products.note}</Reveal>}
        </div>
      </section>

      {page.applications && (
        <section className="mp-dark ind-dark" id="ind-applications">
          <div className="container">
            <Head number={no('applications')} label="Applications" title={page.applications.title} intro={page.applications.intro} light />
            <Applications items={page.applications.items} onZoom={setShot} />
          </div>
        </section>
      )}

      {page.sections?.map((s) => (
        <section key={s.id} className={`section mp-section${tint(s.id)}`} id={`ind-${s.id}`}>
          <div className="container">
            <Head number={no(s.id)} label={s.label} title={s.title} intro={s.intro} />
            {s.feature && <Feature f={s.feature} onZoom={setShot} />}
            {s.table && <Reveal><Table cols={s.table.cols} rows={s.table.rows} /></Reveal>}
            {s.cards && <Cards items={s.cards} />}
            {s.diagrams && <Diagrams kinds={s.diagrams} />}
            {s.steps && (
              <ol className="og-steps">
                {s.steps.map((st, i) => (
                  <Reveal as="li" key={st.title} delay={(i % 3) * 0.06}>
                    <b>{String(i + 1).padStart(2, '0')}</b>
                    <h3>{st.title}</h3>
                    <p>{st.text}</p>
                  </Reveal>
                ))}
              </ol>
            )}
            {s.chips && <Reveal as="ul" className="ind-chips ind-chips--wide">{s.chips.map((c) => <li key={c}>{c}</li>)}</Reveal>}
            {s.checklist && (
              <div className="og-checklist">
                {s.checklist.map((c, i) => (
                  <Reveal key={c.title} delay={(i % 3) * 0.06} className="og-check-card">
                    <h3>{c.title}</h3>
                    <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  </Reveal>
                ))}
              </div>
            )}
            {s.paragraphs && <Reveal className="ind-prose">{s.paragraphs.map((p) => <p key={p}>{p}</p>)}</Reveal>}
            {s.note && <Reveal as="p" className="mp-warn"><Icon name="alert" size={18} /> {s.note}</Reveal>}
            {s.cta && (
              <Reveal className="og-send-actions">
                <Link to={APPLICATION_DATA} className="btn btn-navy">Upload your drawing <Arrow /></Link>
                <Link to="/connect-with-us" className="btn mp-btn-outline">Contact our engineering team</Link>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      <section className={`section mp-section${tint('faq')}`} id="ind-faq">
        <div className="container mp-split mp-split--narrow">
          <Head number={no('faq')} label="FAQ" title={page.faqTitle}
            intro="General guidance only. Mithson engineering confirms the right seal for each application." />
          <Faqs items={page.faqs} />
        </div>
      </section>

      <section className="mp-cta" id="ind-contact">
        <div className="container mp-cta-grid">
          <div>
            <span className="mp-label mp-label--dark">{no('cta')} — Engineering review</span>
            <h2>{page.closing.title}</h2>
            <p>{page.closing.text}</p>
            <p className="mp-cta-contact">
              Contact Mithson: <a href="mailto:sales@mithson.com">sales@mithson.com</a> &nbsp;·&nbsp; <a href="tel:+917845022800">+91 78450 22800</a> &nbsp;·&nbsp; <a href="tel:+917845384005">+91 78453 84005</a>
            </p>
          </div>
          <div className="mp-cta-actions">
            <Link to={APPLICATION_DATA} className="btn btn-white">Request engineering support <Arrow /></Link>
            <Link to="/book-a-meeting" className="btn mp-btn-ghost">Book a meeting <Arrow /></Link>
            <Link to="/industries" className="btn mp-btn-ghost">All industries</Link>
          </div>
        </div>
      </section>

      <section className="section og-footnotes">
        <div className="container">
          <p className="og-disclaimer"><Icon name="alert" size={16} /> {page.disclaimer}</p>
          {page.credits?.length > 0 && (
            <p className="og-credits">
              Application photographs: {page.credits.map((c, i) => (
                <span key={c.photo}>{i > 0 && ' · '}{c.photo} by {c.by} on Unsplash</span>
              ))}.
            </p>
          )}
        </div>
      </section>

      <Lightbox shot={shot} onClose={() => setShot(null)} />
    </div>
  );
}

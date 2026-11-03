import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../shared/components/ScrollReveal';
import usePageMeta from '../../shared/hooks/usePageMeta';
import { isPending, visible } from '../../content/validation';
import { materialRecords } from '../../content/hsse';
import { siteImages } from '../../content/siteImages';
import AnimatedImage from '../../shared/components/AnimatedImage';
import SealDiagram from './SealDiagram';
import './Capabilities.css';

export function PageHero({ label, title, intro, image, photo, children }) {
  const photoSrc = siteImages[photo];

  return (
    <section className="page-hero">
      <div className={`container${photoSrc ? ' capability-hero capability-hero--photo' : image ? ' capability-hero' : ''}`}>
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">{label}</span>
          <h1 className="section-title">{title}</h1>
          <p className="section-subtitle">{intro}</p>
          {children}
        </motion.div>
        {photoSrc
          ? <AnimatedImage src={photoSrc} caption="Illustrative image" />
          : image && <img src={image} alt="" className="capability-hero-image" />}
      </div>
      <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
    </section>
  );
}

export function PendingBadge({ item }) {
  return isPending(item) ? <span className="capability-pending">Awaiting Mithson approval</span> : null;
}

export function ItemCard({ item, number }) {
  const body = (
    <>
      <PendingBadge item={item} />
      {number && <span className="capability-number" aria-hidden="true">{number}</span>}
      <h3>{item.title}</h3>
      {item.text && <p>{item.text}</p>}
      {item.path && <span className="capability-more">Learn more →</span>}
    </>
  );
  return item.path
    ? <Link to={item.path} className="capability-card">{body}</Link>
    : <article className="capability-card">{body}</article>;
}

export function RecordCards({ records }) {
  return (
    <div className="record-grid">
      {records.map((record) => (
        <article key={`${record.name}-${record.scope}`} className="record-card">
          <img src={record.image} alt="" loading="lazy" />
          <h3>{record.name}</h3>
          <p>{record.scope}</p>
        </article>
      ))}
    </div>
  );
}

export function PageActions() {
  return (
    <div className="capability-actions">
      <Link to="/connect-with-us/application-data" className="btn btn-navy">Send Application Data</Link>
      <Link to="/book-a-meeting" className="btn btn-outline">Book a Meeting</Link>
    </div>
  );
}

function TestTable({ tests }) {
  return (
    <div className="capability-table-wrap" tabIndex={0} role="region" aria-label="Test methods">
      <table className="capability-table">
        <thead>
          <tr>
            {['Test', 'What it proves', 'Method', 'Unit', 'Range', 'Where'].map((h) => <th key={h} scope="col">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr key={test.name}>
              <th scope="row">{test.name}</th>
              <td>{test.proves}</td>
              <td>{test.method}</td>
              <td>{test.unit}</td>
              <td>{test.range}</td>
              <td>{test.where}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CapabilityPage({ page }) {
  usePageMeta(page.title, page.description);
  const tests = visible(page.tests);

  return (
    <div className="page-wrapper">
      <PageHero label={page.label} title={page.title} intro={page.intro} image={page.image} photo={page.photo} />

      {page.diagram && (
        <section className="section capability-tint">
          <div className="container"><SealDiagram /></div>
        </section>
      )}

      {page.sections.map((section) => {
        const items = visible(section.items);
        return (
          <Fragment key={section.title}>
            <section className="section">
              <div className="container">
                <ScrollReveal>
                  <h2 className="section-title capability-heading">{section.title}</h2>
                </ScrollReveal>
                <div className="capability-grid">
                  {items.map((item, index) => (
                    <ItemCard key={item.title} item={item} number={section.ordered ? index + 1 : null} />
                  ))}
                </div>
              </div>
            </section>
          </Fragment>
        );
      })}

      {tests.length > 0 && (
        <section className="section capability-tint">
          <div className="container">
            <h2 className="section-title capability-heading">Test methods</h2>
            <TestTable tests={tests} />
          </div>
        </section>
      )}

      {page.materialRecords && (
        <section className="section capability-tint">
          <div className="container">
            <h2 className="section-title capability-heading">Material test records</h2>
            <p className="capability-lead">These records cover the named materials and compounds.</p>
            <RecordCards records={materialRecords} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          {page.note && <p className="capability-lead">{page.note}</p>}
          <PageActions />
        </div>
      </section>
    </div>
  );
}

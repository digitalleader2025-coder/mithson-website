import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';
import {
  customManufacturing,
  manufacturingSteps,
  processComparison,
  quoteChecklist,
} from '../../../content/customManufacturing';
import './CustomManufacturing.css';

function ItemCard({ item }) {
  const body = (
    <>
      <div className="custom-card-image">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <h3 className="custom-card-title">{item.name}</h3>
      <p className="custom-card-text">{item.desc}</p>
    </>
  );

  return item.path
    ? <Link to={item.path} className="custom-card">{body}</Link>
    : <article className="custom-card">{body}</article>;
}

export default function CustomManufacturingPage({ slug }) {
  const product = customManufacturing[slug];
  const other = Object.values(customManufacturing).find((item) => item.slug !== slug);
  const drawingLink = `/connect-with-us?drawing=1&subject=${encodeURIComponent(`${product.name} enquiry`)}`;

  useEffect(() => {
    document.title = `${product.name} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, [product.name]);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container custom-hero">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Custom Manufacturing</span>
            <h1 className="section-title">{product.name}</h1>
            <p className="section-subtitle">{product.intro}</p>
            <div className="custom-actions">
              <Link to={drawingLink} className="btn btn-navy">Send your drawing</Link>
              <Link to="/book-a-meeting" className="btn btn-outline">Book a Meeting</Link>
            </div>
          </motion.div>
          <div className="custom-hero-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container custom-prose">
          <ScrollReveal>
            <h2 className="section-title">{product.what.title}</h2>
            {product.what.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </ScrollReveal>
        </div>
      </section>

      <section className="section custom-section--tint">
        <div className="container">
          <h2 className="section-title custom-heading">{product.makes.title}</h2>
          <div className="custom-grid">
            {product.makes.items.map((item) => (
              <ScrollReveal key={item.name}>
                <ItemCard item={item} />
              </ScrollReveal>
            ))}
          </div>
          <p className="custom-note">
            Photos show similar Mithson parts. Your part is made to your own drawing, and availability is
            confirmed by Mithson engineering for each application.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{product.processes.title}</h2>
          <p className="section-subtitle custom-lead">{product.processes.intro}</p>
          <div className="custom-process-grid">
            {product.processes.items.map((process) => (
              <article key={process.name} className="custom-process">
                <h3>{process.name}</h3>
                <p>{process.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section custom-section--tint">
        <div className="container">
          <h2 className="section-title">{product.materialTable.title}</h2>
          <p className="section-subtitle custom-lead">{product.materialTable.intro}</p>
          <div className="custom-table-wrap" tabIndex={0} role="region" aria-label={product.materialTable.title}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th scope="col">Material</th>
                  <th scope="col">Why choose it</th>
                  <th scope="col">Typical temperature</th>
                </tr>
              </thead>
              <tbody>
                {product.materialTable.rows.map((row) => (
                  <tr key={row.material}>
                    <th scope="row">{row.material}</th>
                    <td>{row.why}</td>
                    <td>{row.temperature ?? <span className="custom-muted">Ask our engineers</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="custom-note">
            Temperatures are common industry values for each material, not guaranteed Mithson ratings. The limit
            for your part also depends on its grade, design and working conditions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Molded or machined?</h2>
          <div className="custom-table-wrap" tabIndex={0} role="region" aria-label="Molded and machined parts compared">
            <table className="custom-table custom-table--compare">
              <thead>
                <tr>
                  <th scope="col" aria-label="Topic" />
                  <th scope="col">Molded</th>
                  <th scope="col">Machined</th>
                </tr>
              </thead>
              <tbody>
                {processComparison.rows.map((row) => (
                  <tr key={row.topic}>
                    <th scope="row">{row.topic}</th>
                    <td>{row.molded}</td>
                    <td>{row.machined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="custom-note">{processComparison.note}</p>
          <div className="custom-columns">
            <div>
              <h3 className="custom-subheading">Where these parts are used</h3>
              <ul className="custom-list">
                {product.uses.map((use) => <li key={use}>{use}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="custom-subheading">Industries we serve</h3>
              <ul className="custom-chips">
                {product.industries.map((industry) => <li key={industry}>{industry}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section custom-section--tint">
        <div className="container">
          <h2 className="section-title custom-heading">From drawing to delivery</h2>
          <ol className="custom-steps">
            {manufacturingSteps.map((step, index) => (
              <li key={step.title}>
                <span className="custom-step-number" aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container custom-quote">
          <div>
            <h2 className="section-title">What to send us</h2>
            <p className="section-subtitle custom-lead">
              The more we know about your part and how it is used, the better our recommendation will be. Send
              what you have, and our engineers will ask about anything else.
            </p>
            <div className="custom-actions">
              <Link to={drawingLink} className="btn btn-navy">Send your drawing</Link>
              <Link to="/book-a-meeting" className="btn btn-outline">Book a Meeting</Link>
              <Link to={other.path} className="btn btn-ghost">View {other.name} →</Link>
            </div>
          </div>
          <ul className="custom-checklist">
            {quoteChecklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}

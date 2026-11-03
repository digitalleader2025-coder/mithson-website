import ScrollReveal from './ScrollReveal';
import { productDetails } from '../../content/productDetails';
import './ProductDetails.css';

/** Longer explanation under each product: what it does, how to choose it and how to look after it. */
export default function ProductDetails({ slug, name }) {
  const details = productDetails[slug];
  if (!details) return null;

  return (
    <section className="section product-details" aria-label={`More about ${name}`}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Product guide</span>
          <h2 className="section-title">Understanding {name}</h2>
          <div className="product-details-overview">
            {details.overview.map((text) => <p key={text}>{text}</p>)}
          </div>
        </ScrollReveal>

        <h3 className="product-details-heading">How it works</h3>
        <div className="product-details-grid">
          {details.howItWorks.map((item) => (
            <article key={item.title} className="product-details-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="product-details-columns">
          <div>
            <h3 className="product-details-heading">What to consider when choosing</h3>
            <ul>{details.selection.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3 className="product-details-heading">Fitting and care</h3>
            <ul>{details.care.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>

        <h3 className="product-details-heading">Common questions</h3>
        <div className="product-details-faqs">
          {details.faqs.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <p className="product-details-note">
          General guidance only. Mithson engineers confirm the right product and limits for each application.
        </p>
      </div>
    </section>
  );
}

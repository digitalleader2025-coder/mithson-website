import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../shared/components/ScrollReveal';
import TypicalSpecs from '../../shared/components/TypicalSpecs';
import { industries } from '../../content/industries';
import './IndustryPage.css';

function ProductCard({ product }) {
  const body = (
    <>
      <div className="industry-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <h3 className="industry-card-title">{product.name}</h3>
      <p className="industry-card-text">{product.desc}</p>
    </>
  );

  return product.path
    ? <Link to={product.path} className="industry-card">{body}</Link>
    : <article className="industry-card">{body}</article>;
}

export default function IndustryPage({ slug }) {
  const industry = industries[slug];

  useEffect(() => {
    document.title = `${industry.title} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, [industry.title]);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container industry-hero">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Industries</span>
            <h1 className="section-title">{industry.title}</h1>
            <p className="section-subtitle">{industry.intro}</p>
          </motion.div>
          <img src={industry.image} alt="" className="industry-hero-image" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title industry-heading">Products for {industry.title}</h2>
          <div className="industry-grid">
            {industry.products.map((product) => (
              <ScrollReveal key={product.name}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
          <p className="industry-note">
            Availability and specifications are confirmed by Mithson engineering for each application.
          </p>

          <div className="industry-details">
            <div>
              <h3 className="industry-subheading">Where these parts are used</h3>
              <ul className="industry-list">
                {industry.uses.map((use) => <li key={use}>{use}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="industry-subheading">Common materials</h3>
              <ul className="industry-chips">
                {industry.materials.map((material) => <li key={material}>{material}</li>)}
              </ul>
            </div>
          </div>

          {industry.specs && (
            <div className="industry-specs">
              <TypicalSpecs specs={industry.specs} />
            </div>
          )}

          <div className="industry-actions">
            <Link to="/book-a-meeting" className="btn btn-navy">Book a Meeting</Link>
            <Link to="/connect-with-us" className="btn btn-outline">Enquire Now</Link>
            <Link to="/industries" className="btn btn-ghost">← All Industries</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { products } from '../../content/products';
import ScrollReveal from '../../shared/components/ScrollReveal';
import './Products.css';

export default function ProductsPage() {
  useEffect(() => {
    document.title = 'Products | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero products-page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Our Portfolio</span>
            <h1 className="section-title">Engineered Product Lines</h1>
            <p className="section-subtitle">
              {products.length} high-performance product families — seals, bearings, nozzles and precision polymer
              components for the world's most demanding applications.
            </p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true">
          <div className="hero-grid" />
        </div>
      </section>

      {/* Products grid */}
      <section className="section">
        <div className="container">
          <div className="products-landing-grid">
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.05}>
                <Link
                  to={product.path}
                  className="product-landing-card glass-card"
                  id={`products-page-${product.id}`}
                >
                  {/* Accent top bar */}
                  <div className="plc-accent" style={{ background: product.accent }} />
                  {/* Card content */}
                  <div className="plc-body">
                    <div className="plc-number">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h2 className="plc-name">{product.name}</h2>
                    <p className="plc-tagline">{product.tagline}</p>
                    <p className="plc-desc">{product.shortDescription}</p>
                    {/* Materials */}
                    <div className="plc-materials">
                      {product.materials?.slice(0, 3).map((m) => (
                        <span key={m} className="material-mini-chip">{m}</span>
                      ))}
                    </div>
                  </div>
                  <div className="plc-footer">
                    <span className="plc-link">View Product <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section products-cta-strip">
        <div className="container">
          <div className="glass-card products-cta-card">
            <div>
              <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>
                Can't find what you need?
              </h2>
              <p className="section-subtitle">
                Our engineering team designs custom polymer solutions for unique requirements.
              </p>
            </div>
            <Link to="/connect-with-us" className="btn btn-primary" id="products-cta-contact">
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

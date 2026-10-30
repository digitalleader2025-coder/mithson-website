import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { products } from '../../content/products';
import { typicalSpecs } from '../../content/typicalSpecs';
import './Products.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'seals', label: 'Seals' },
  { id: 'valves', label: 'Valves' },
  { id: 'oilfield', label: 'Oilfield' },
  { id: 'bearings', label: 'Bearings' },
  { id: 'pump', label: 'Pump & Transmission' },
  { id: 'power', label: 'Power Grid' },
];

const cardImage = (product) =>
  product.carouselImage ?? (Array.isArray(product.image) ? product.image[0] : product.image);

export default function ProductsPage() {
  const [filter, setFilter] = useState('all');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'Products | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter);

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

      {/* Filterable products grid */}
      <section className="section">
        <div className="container">
          <div className="product-filters" role="group" aria-label="Filter products by type">
            {FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`product-filter${filter === id ? ' is-active' : ''}`}
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="product-count" aria-live="polite">
            Showing {visible.length} of {products.length} product families
          </p>

          <motion.div layout={!reduceMotion} className="products-landing-grid">
            {visible.map((product) => (
              <motion.div
                key={product.id}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={product.path} className="product-landing-card" id={`products-page-${product.id}`}>
                  <div className="plc-image">
                    <img src={cardImage(product)} alt={product.name} loading="lazy" />
                  </div>
                  <div className="plc-body">
                    <h2 className="plc-name">{product.name}</h2>
                    <p className="plc-tagline">{product.tagline}</p>
                    {typicalSpecs[product.slug] && (
                      <p className="plc-spec">{typicalSpecs[product.slug].keySpec}</p>
                    )}
                    <div className="plc-materials">
                      {product.materials?.slice(0, 3).map((m) => (
                        <span key={m} className="plc-chip">{m}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
            <Link to="/connect-with-us" className="btn btn-navy" id="products-cta-contact">
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

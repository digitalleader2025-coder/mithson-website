import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { products } from '../../content/products';
import { getProductSummary } from '../../content/typicalSpecs';
import ProductSpecList from '../../shared/components/ProductSpecList';
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

const VIEWS = [
  { id: 'cards', label: 'Cards' },
  { id: 'compare', label: 'Compare table' },
];

const cardImage = (product) =>
  product.carouselImage ?? (Array.isArray(product.image) ? product.image[0] : product.image);

function CompareCell({ spec }) {
  if (!spec) return <span className="compare-missing">Ask our engineers</span>;
  return (
    <>
      <strong>{spec.value}</strong>
      <span className="compare-context">
        {spec.origin === 'mithson' ? 'Mithson' : 'Typical'}
        {spec.scope ? `: ${spec.scope}` : ''}
      </span>
    </>
  );
}

function CompareTable({ items }) {
  return (
    <div className="compare-wrap" tabIndex={0} role="region" aria-label="Product comparison table">
      <table className="compare-table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Temperature</th>
            <th scope="col">Pressure or load</th>
            <th scope="col">Materials</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => {
            const { temperature, pressure, materials } = getProductSummary(product);
            return (
              <tr key={product.id}>
                <th scope="row">
                  <Link to={product.path}>
                    <img src={cardImage(product)} alt="" loading="lazy" />
                    <span>{product.name}</span>
                  </Link>
                </th>
                <td><CompareCell spec={temperature} /></td>
                <td><CompareCell spec={pressure} /></td>
                <td>{materials.join(', ')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function ProductsPage() {
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('cards');
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

      {/* Filterable products */}
      <section className="section">
        <div className="container">
          <div className="product-toolbar">
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
            <div className="product-views" role="group" aria-label="Choose product view">
              {VIEWS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`product-view${view === id ? ' is-active' : ''}`}
                  aria-pressed={view === id}
                  onClick={() => setView(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <p className="product-count" aria-live="polite">
            Showing {visible.length} of {products.length} product families
          </p>

          {view === 'cards' ? (
            <div className="products-landing-grid">
              {visible.map((product) => (
                <motion.div
                  key={product.id}
                  layout={reduceMotion ? false : 'position'}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link to={product.path} className="product-landing-card" id={`products-page-${product.id}`}>
                    <div className="plc-image">
                      <img src={cardImage(product)} alt={product.name} loading="lazy" />
                    </div>
                    <div className="plc-body">
                      <h2 className="plc-name">{product.name}</h2>
                      <p className="plc-tagline">{product.tagline}</p>
                      <ProductSpecList product={product} />
                      <span className="plc-link">View full details</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <CompareTable items={visible} />
          )}

          <p className="product-legend">
            <strong>Mithson</strong> figures come from Mithson product data. <strong>Typical</strong> figures are
            common industry values for this type of product, not guaranteed Mithson ratings. Confirm your application
            with our engineers.
          </p>
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

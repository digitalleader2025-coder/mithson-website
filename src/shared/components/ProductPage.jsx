import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SceneWrapper from '../../shared/3d/SceneWrapper';
import ProductViewer from '../../shared/3d/ProductViewer';
import EnvironmentLight from '../../shared/3d/EnvironmentLight';
import './ProductPage.css';

/* ----------------------------------------------------------------
   Reusable product page section components
   Used by every product page — data driven via data.js
   ---------------------------------------------------------------- */

/** Breadcrumb navigation */
export function ProductBreadcrumb({ productName }) {
  return (
    <nav className="product-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li aria-hidden="true">›</li>
        <li><Link to="/products">Products</Link></li>
        <li aria-hidden="true">›</li>
        <li aria-current="page">{productName}</li>
      </ol>
    </nav>
  );
}

/** Hero section with 3D viewer */
export function ProductHero({ product }) {
  const { name, tagline, shortDescription, accent, folder } = product;

  // Dynamic asset paths — user drops files here; component reads automatically
  const heroImageSrc = `/src/pages/Products/${folder}/assets/hero.jpg`;
  const modelSrc     = `/src/pages/Products/${folder}/models/product.glb`;

  return (
    <section className="product-hero" aria-labelledby="product-hero-title">
      <div className="product-hero-inner container">
        {/* Text side */}
        <motion.div
          className="product-hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProductBreadcrumb productName={name} />
          <span className="product-label">Product</span>
          <h1 className="product-hero-title" id="product-hero-title">{name}</h1>
          <p className="product-hero-tagline">{tagline}</p>
          <p className="product-hero-desc">{shortDescription}</p>
          <div className="product-hero-actions">
            <Link to="/connect-with-us" className="btn btn-primary" id={`product-enquire-${product.id}`}>
              Enquire Now
            </Link>
            <Link to="/product-gallery" className="btn btn-outline" id={`product-gallery-${product.id}`}>
              View Gallery
            </Link>
          </div>
        </motion.div>

        {/* 3D / image viewer side */}
        <motion.div
          className="product-hero-viewer"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div
            className="product-viewer-frame"
            style={{ '--accent': accent }}
          >
            <SceneWrapper
              style={{ height: '100%' }}
              camera={{ position: [0, 0, 4], fov: 45 }}
              dpr={[1, 1.5]}
            >
              <EnvironmentLight shadowOpacity={0.15} />
              <ProductViewer
                imageSrc={heroImageSrc}
                modelSrc={modelSrc}
                alt={name}
                accent={accent}
              />
            </SceneWrapper>
            {/* Decorative frame glow */}
            <div className="viewer-glow" style={{ '--glow-color': accent }} />
          </div>
        </motion.div>
      </div>

      {/* Background grid */}
      <div className="product-hero-bg" aria-hidden="true">
        <div className="hero-grid" />
      </div>
    </section>
  );
}

/** Material highlights list */
export function ProductMaterials({ materials }) {
  if (!materials?.length) return null;
  return (
    <div className="product-materials">
      <h3 className="product-section-label">Materials</h3>
      <div className="materials-grid">
        {materials.map((m, i) => (
          <span key={i} className="material-chip">{m}</span>
        ))}
      </div>
    </div>
  );
}

/** Feature highlights */
export function ProductHighlights({ highlights }) {
  if (!highlights?.length) return null;
  return (
    <div className="product-highlights">
      <h3 className="product-section-label">Key Features</h3>
      <ul className="highlights-list">
        {highlights.map((h, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="highlight-item"
          >
            <span className="highlight-dot" aria-hidden="true" />
            {h}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/** Applications list */
export function ProductApplications({ applications }) {
  if (!applications?.length) return null;
  return (
    <div className="product-applications">
      <h3 className="product-section-label">Applications</h3>
      <div className="applications-grid">
        {applications.map((a, i) => (
          <div key={i} className="application-card glass-card">
            <span className="application-icon" aria-hidden="true">⬡</span>
            <span>{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Related products carousel */
export function RelatedProducts({ currentSlug, products }) {
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 4);
  if (!related.length) return null;
  return (
    <section className="related-products section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>Related Products</h2>
        <div className="related-grid">
          {related.map((p) => (
            <Link key={p.slug} to={p.path} className="related-card glass-card" id={`related-${p.slug}`}>
              <div className="related-card-accent" style={{ background: p.accent }} />
              <h3 className="related-card-name">{p.name}</h3>
              <p className="related-card-tagline">{p.tagline}</p>
              <span className="related-card-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** CTA Banner */
export function ProductCTA({ productName }) {
  return (
    <section className="product-cta-section">
      <div className="container product-cta-inner">
        <div>
          <h2 className="product-cta-title">Ready to specify {productName}?</h2>
          <p className="product-cta-sub">
            Contact our engineering team for technical consultation, drawings and samples.
          </p>
        </div>
        <div className="product-cta-actions">
          <Link to="/connect-with-us" className="btn btn-primary" id="product-cta-contact">
            Get in Touch
          </Link>
          <a href="mailto:sales@mithson.com" className="btn btn-outline" id="product-cta-email">
            sales@mithson.com
          </a>
        </div>
      </div>
    </section>
  );
}

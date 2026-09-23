import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';
import InteractiveProximityImage from '../../../shared/components/InteractiveProximityImage';
import {
  ProductBreadcrumb,
  ProductHighlights,
  ProductMaterials,
  ProductApplications,
  ProductCTA,
  RelatedProducts,
} from '../../../shared/components/ProductPage';
import { products, getProductBySlug } from '../../../content/products';
import mithPlateImage from './assets/mith-plate.png';

const product = getProductBySlug('mith-plate');

export default function MITHPLATEPage() {
  useEffect(() => {
    document.title = `${product.name} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper">
      {/* Custom Hero for MITH PLATE */}
      <section className="product-hero" aria-labelledby="product-hero-title">
        <div className="product-hero-inner container">
          {/* Text side */}
          <motion.div
            className="hero-text-area"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductBreadcrumb productName={product.name} />
            <span className="product-label">Product</span>
            <h1 className="product-hero-title" id="product-hero-title">{product.name}</h1>
            <p className="product-hero-tagline">{product.tagline}</p>
          </motion.div>

          <motion.div
            className="hero-desc-area"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="product-hero-desc" style={{ fontSize: '0.95rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                We specialize exclusively in the "heart" of the Positive Displacement compressor. Unlike dynamic machines, reciprocating compressors rely on the timed integrity of suction and discharge valves. We provide the high-precision plates that make this possible, focusing on the Reciprocating branch of the compressor.
              </p>
              <p>
                Our thermoplastic plates replace traditional metal to solve common maintenance headaches:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Micro-Sealing:</strong> Unlike rigid metal, our polymers conform to the valve seat for a near-perfect seal, increasing Volumetric Efficiency.</li>
                <li><strong>Lower Inertia:</strong> Being 70% lighter than steel, our plates respond faster to pressure changes, eliminating "valve flutter" at high RPMs.</li>
                <li><strong>Liquid Tolerance:</strong> Naturally dampening, our plates can survive "liquid slugs" that would shatter metallic alternatives.</li>
                <li><strong>Oil-Free Ready:</strong> Self-lubricating properties make them the only choice for Medical, Food, and Pharma air.</li>
              </ul>
            </div>
          </motion.div>

          {/* Interactive Image Viewer */}
          <motion.div
            className="hero-viewer-area"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <div
              className="product-viewer-frame"
              style={{ '--accent': product.accent, background: 'transparent' }}
            >
              <InteractiveProximityImage src={mithPlateImage} alt={product.name} />
              
              {/* Decorative frame glow */}
              <div className="viewer-glow" style={{ '--glow-color': product.accent }} />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="hero-actions-area"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to="/connect-with-us" className="btn btn-primary" id={`product-enquire-${product.id}`}>
              Enquire Now
            </Link>
            <Link to="/product-gallery" className="btn btn-outline" id={`product-gallery-${product.id}`}>
              View Gallery
            </Link>
          </motion.div>
        </div>

        {/* Background grid */}
        <div className="product-hero-bg" aria-hidden="true">
          <div className="hero-grid" />
        </div>
      </section>

      {/* Standard Product Body */}
      <section className="product-body section">
        <div className="container product-body-inner">
          <div>
            <ScrollReveal>
              <ProductHighlights highlights={product.highlights} />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ProductApplications applications={product.applications} />
            </ScrollReveal>
          </div>
          <aside>
            <ScrollReveal delay={0.2}>
              <ProductMaterials materials={product.materials} />
            </ScrollReveal>
          </aside>
        </div>
      </section>

      <ProductCTA productName={product.name} />
      <RelatedProducts currentSlug={product.slug} products={products} />
    </div>
  );
}

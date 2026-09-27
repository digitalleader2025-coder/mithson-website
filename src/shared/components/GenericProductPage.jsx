/**
 * Generic product page template.
 * Receives product data from data.js in each product folder.
 */
import { useEffect } from 'react';
import ScrollReveal from '../../shared/components/ScrollReveal';
import {
  ProductHero,
  ProductHighlights,
  ProductMaterials,
  ProductApplications,
  ProductCTA,
  RelatedProducts,
} from '../../shared/components/ProductPage';
import { products } from '../../content/products';

import imgCanti from '../../pages/Products/M-UNI-Seal/assets/genre/Canti Seals.png';
import imgCoil from '../../pages/Products/M-UNI-Seal/assets/genre/Coil Seals.png';
import imgHeli from '../../pages/Products/M-UNI-Seal/assets/genre/Heli Seals.png';
import imgIDFace from '../../pages/Products/M-UNI-Seal/assets/genre/ID Face Seals.png';
import imgODFace from '../../pages/Products/M-UNI-Seal/assets/genre/OD Face Seals.png';

export default function GenericProductPage({ product }) {
  // Update document title
  useEffect(() => {
    document.title = `${product.name} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, [product.name]);

  return (
    <div className="page-wrapper">
      <ProductHero product={product} />

      <section className="product-body section">
        <div className="container product-body-inner">
          {/* Main column */}
          <div>
            {product.slug === 'm-uni-seal' && (
              <ScrollReveal>
                <MUNISealCustomSection />
              </ScrollReveal>
            )}
            <ScrollReveal>
              <ProductHighlights highlights={product.highlights} />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ProductApplications applications={product.applications} />
            </ScrollReveal>
            {/* Variants / sub-types if present */}
            {product.variants && (
              <ScrollReveal delay={0.15}>
                <VariantsList variants={product.variants} />
              </ScrollReveal>
            )}
            {product.types && (
              <ScrollReveal delay={0.15}>
                <VariantsList variants={product.types} />
              </ScrollReveal>
            )}
            {product.components && (
              <ScrollReveal delay={0.15}>
                <ComponentsList components={product.components} />
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <ScrollReveal delay={0.2}>
              <ProductMaterials materials={product.materials} />
            </ScrollReveal>
            {product.temperatureRanges && (
              <ScrollReveal delay={0.25}>
                <TemperatureRanges ranges={product.temperatureRanges} />
              </ScrollReveal>
            )}
          </aside>
        </div>
      </section>

      <ProductCTA productName={product.name} />

      <RelatedProducts currentSlug={product.slug} products={products} />
    </div>
  );
}

function VariantsList({ variants }) {
  return (
    <div className="product-variants" style={{ marginBottom: '2.5rem' }}>
      <h3 className="product-section-label">Variants</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {variants.map((v, i) => (
          <div key={i} className="glass-card" style={{ padding: '1rem 1.25rem', borderRadius: '0.75rem' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
              {v.name}
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', lineHeight: 1.6 }}>
              {v.notes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComponentsList({ components }) {
  return (
    <div className="product-components" style={{ marginBottom: '2.5rem' }}>
      <h3 className="product-section-label">Components</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {components.map((c, i) => (
          <span key={i} className="material-chip">{c}</span>
        ))}
      </div>
    </div>
  );
}

function TemperatureRanges({ ranges }) {
  return (
    <div className="product-temp-ranges" style={{ marginBottom: '2rem' }}>
      <h3 className="product-section-label">Temperature Ranges</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {Object.entries(ranges).map(([key, val]) => (
          <div key={key} className="glass-card" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem' }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent)', marginBottom: '0.25rem' }}>
              {key} core
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-2)' }}>{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MUNISealCustomSection() {
  const images = [
    { src: imgCanti, title: 'Canti Seals' },
    { src: imgCoil, title: 'Coil Seals' },
    { src: imgHeli, title: 'Heli Seals' },
    { src: imgIDFace, title: 'ID Face Seals' },
    { src: imgODFace, title: 'OD Face Seals' }
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.5rem' }}>
        {images.map((img, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={img.src} alt={img.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <span style={{ color: 'var(--color-blue-accent)', fontWeight: '700', fontSize: '0.9rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {img.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

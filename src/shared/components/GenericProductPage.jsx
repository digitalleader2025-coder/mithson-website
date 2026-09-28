/**
 * Generic product page template.
 * Receives product data from data.js in each product folder.
 */
import { useEffect, useState } from 'react';
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

import imgHammerUnionSeal from '../../pages/Products/Hammer-Union-Seal/assets/measurements/Seal Measurement.png';
import imgHammerUnionMeasurement from '../../pages/Products/Hammer-Union-Seal/assets/measurements/measurement.avif';

import imgXmasElastomer from '../../pages/Products/Seals-X-Mas-Tree/assets/genre/Elastomer O-Ring.png';
import imgXmasSeat from '../../pages/Products/Seals-X-Mas-Tree/assets/genre/SEAT Seal.png';
import imgXmasSpring from '../../pages/Products/Seals-X-Mas-Tree/assets/genre/Spring Energized Seals.png';
import imgXmasStem from '../../pages/Products/Seals-X-Mas-Tree/assets/genre/Stem Packing.png';

import vsImg1 from '../../pages/Products/Seals-Valve/assets/Devlon Insert Metal Seat.png';
import vsImg2a from '../../pages/Products/Seals-Valve/assets/Devlon Seat Ring.png';
import vsImg2b from '../../pages/Products/Seals-Valve/assets/Devlon Seat Ring (2).png';
import vsImg4 from '../../pages/Products/Seals-Valve/assets/Elastomer O-Ring.png';
import vsImg5 from '../../pages/Products/Seals-Valve/assets/PTFE Carbon Graphite Chevron Packing.png';
import vsImg6 from '../../pages/Products/Seals-Valve/assets/PTFE Carbon Graphite Seat.png';
import vsImg7 from '../../pages/Products/Seals-Valve/assets/PTFE Cavity Seat.png';
import vsImg8 from '../../pages/Products/Seals-Valve/assets/PTFE Chevron Packing.png';
import vsImg9 from '../../pages/Products/Seals-Valve/assets/PTFE Seat.png';
import vsImg10 from '../../pages/Products/Seals-Valve/assets/Peek Insert Metal Seat.png';
import vsImg11 from '../../pages/Products/Seals-Valve/assets/Peek Seat Ring.png';
import vsImg12 from '../../pages/Products/Seals-Valve/assets/Spring Energized Seals.png';
import vsImg13a from '../../pages/Products/Seals-Valve/assets/Stem packing API 6A.png';
import vsImg13b from '../../pages/Products/Seals-Valve/assets/Stem Packing API 6A (unpacked).png';

import plvImg1 from '../../pages/Products/Plug-Lined-Valve/assets/Image1.png';
import plvImg2 from '../../pages/Products/Plug-Lined-Valve/assets/Image2.png';
import plvImg3 from '../../pages/Products/Plug-Lined-Valve/assets/Image3.png';

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
            {product.slug === 'hammer-union-seal' && (
              <ScrollReveal>
                <HammerUnionCustomSection />
              </ScrollReveal>
            )}
            {product.slug === 'seals-x-mas-tree' && (
              <ScrollReveal>
                <XMasTreeCustomSection />
              </ScrollReveal>
            )}
            {product.slug === 'seals-valve' && (
              <ScrollReveal>
                <SealsValveCustomSection />
              </ScrollReveal>
            )}
            {product.slug === 'plug-lined-valve' && (
              <ScrollReveal>
                <PlugLinedValveCustomSection />
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

function HammerUnionCustomSection() {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        
        {/* First Image (Seal) */}
        <div style={{ padding: '0.5rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', maxWidth: '350px', display: 'flex', justifyContent: 'center' }}>
          <img src={imgHammerUnionSeal} alt="Hammer Union Seal" style={{ maxWidth: '100%', maxHeight: '200px', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
        </div>
        
        {/* Text */}
        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-text)', textAlign: 'center', maxWidth: '600px', margin: '0' }}>
          Hammer union seals are commonly offered in sizes ranging from 1″ to 6″ inner diameter, with dimensions specified by inner diameter (ID), outer diameter (OD), and overall height.
        </p>

        {/* Second Image (Measurement Data) */}
        <div style={{ padding: '0.5rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', maxWidth: '500px', display: 'flex', justifyContent: 'center' }}>
          <img src={imgHammerUnionMeasurement} alt="Hammer Union Seal Measurement Data" style={{ maxWidth: '100%', maxHeight: '250px', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
        </div>

      </div>
    </div>
  );
}

function XMasTreeCustomSection() {
  const images = [
    { src: imgXmasSpring, title: 'Spring Energized Seals' },
    { src: imgXmasStem, title: 'Stem Packing' },
    { src: imgXmasSeat, title: 'Seat Seal' },
    { src: imgXmasElastomer, title: 'Elastomer O-Ring' },
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
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

function CyclingImage({ images, interval = 10000, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <div style={{ padding: '1rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={title} style={{ position: 'absolute', maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', opacity: i === index ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }} />
      ))}
    </div>
  );
}

function SealsValveCustomSection() {
  const items = [
    { images: [vsImg1], title: 'Devlon Insert Metal Seat' },
    { images: [vsImg2a, vsImg2b], title: 'Devlon Seat Ring' },
    { images: [vsImg4], title: 'Elastomer O-Ring' },
    { images: [vsImg5], title: 'PTFE Carbon Graphite Chevron Packing' },
    { images: [vsImg6], title: 'PTFE Carbon Graphite Seat' },
    { images: [vsImg7], title: 'PTFE Cavity Seat' },
    { images: [vsImg8], title: 'PTFE Chevron Packing' },
    { images: [vsImg9], title: 'PTFE Seat' },
    { images: [vsImg10], title: 'Peek Insert Metal Seat' },
    { images: [vsImg11], title: 'Peek Seat Ring' },
    { images: [vsImg12], title: 'Spring Energized Seals' },
    { images: [vsImg13a, vsImg13b], title: 'Stem Packing API 6A' },
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <CyclingImage images={item.images} title={item.title} interval={10000} />
            <span style={{ color: 'var(--color-blue-accent)', fontWeight: '700', fontSize: '0.85rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlugLinedValveCustomSection() {
  const items = [
    { images: [plvImg1], title: 'PTFE Plug Valve Sleeve' },
    { images: [plvImg2], title: 'PTFE Bushings and Sleeves' },
    { images: [plvImg3], title: 'PTFE Valve Liners' },
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={item.images[0]} alt={item.title} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
            </div>
            <span style={{ color: 'var(--color-blue-accent)', fontWeight: '700', fontSize: '0.95rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

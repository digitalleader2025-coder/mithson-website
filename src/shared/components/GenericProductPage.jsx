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
import SkewedCarousel from '../../shared/components/SkewedCarousel';

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

import ubImg1 from '../../pages/Products/UNI-LUBE-Bearing/assets/MSS-MF Self Lube - 1.png';
import ubImg2 from '../../pages/Products/UNI-LUBE-Bearing/assets/MSS-MF Self Lube - 2.png';
import ubImg3 from '../../pages/Products/UNI-LUBE-Bearing/assets/MSS-MP Pre Lube - 1.png';
import ubImg4 from '../../pages/Products/UNI-LUBE-Bearing/assets/MSS-MF Pre Lube - 2.png';
import ubImg5 from '../../pages/Products/UNI-LUBE-Bearing/assets/MSS-BIM BI-Metal.png';
import ubImg6 from '../../pages/Products/UNI-LUBE-Bearing/assets/MSS-MB Solid Bush.png';
import ubImg7 from '../../pages/Products/UNI-LUBE-Bearing/assets/MSS-Mithlon.png';

import shImg1 from '../../pages/Products/Seals-Hydraulic/assets/Wear Rings.png';
import shImg2 from '../../pages/Products/Seals-Hydraulic/assets/Piston Seals.png';
import shImg3 from '../../pages/Products/Seals-Hydraulic/assets/Wiper Seals.png';
import shImg4 from '../../pages/Products/Seals-Hydraulic/assets/Rod Seals.png';

import diaImg1 from '../../pages/Products/Diaphragm-AODD/assets/Diaphragm.png';
import diaImg2 from '../../pages/Products/Diaphragm-AODD/assets/PILOT Shaft.png';
import diaImg3 from '../../pages/Products/Diaphragm-AODD/assets/PTFE Ball.png';
import diaImg4 from '../../pages/Products/Diaphragm-AODD/assets/PTFE O-Ring.png';
import diaImg5 from '../../pages/Products/Diaphragm-AODD/assets/PTFE Seat.png';

import wtImg1 from '../../pages/Products/Washers-Transmission/assets/PEEK-Split Lock Washer.png';
import wtImg2 from '../../pages/Products/Washers-Transmission/assets/PEEK-Thrust Washer.png';
import wtImg3 from '../../pages/Products/Washers-Transmission/assets/Product 1.png';

import npImg1 from '../../pages/Products/Nozzles-Power-Grid/assets/PTFE Nozzles-1.png';
import npImg2 from '../../pages/Products/Nozzles-Power-Grid/assets/PTFE Nozzles-2.png';
import npImg3 from '../../pages/Products/Nozzles-Power-Grid/assets/PTFE Nozzles-3.png';

import productDetailsImg from '../../shared/assets/Product details.png';
import eoImg1 from '../../pages/Products/Encapsulated-O-Ring/assets/Encapsulated O-Ring.png';

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
        <div className={`container product-body-inner ${['seals-valve', 'uni-lube-bearing', 'diaphragm-aodd'].includes(product.slug) ? 'layout-single-column' : ''}`}>
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
            {product.slug === 'uni-lube-bearing' && (
              <ScrollReveal>
                <UniLubeBearingCustomSection />
              </ScrollReveal>
            )}
            {product.slug === 'seals-hydraulic' && (
              <ScrollReveal>
                <SealsHydraulicCustomSection />
              </ScrollReveal>
            )}
            {product.slug === 'diaphragm-aodd' && (
              <ScrollReveal>
                <DiaphragmAoddCustomSection />
              </ScrollReveal>
            )}
            {product.slug === 'washers-transmission' && (
              <ScrollReveal>
                <WashersTransmissionCustomSection />
              </ScrollReveal>
            )}

            {product.slug === 'encapsulated-o-ring' && (
              <ScrollReveal>
                <EncapsulatedORingCustomSection />
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

function CarouselItemDetails({ title, description, attributes }) {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      border: '1px solid #E2E8F0',
      padding: '2rem',
      textAlign: 'left',
      width: '100%',
      marginTop: '1rem',
      borderRadius: '12px'
    }}>
      {title && (
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1E293B', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
          {title}
        </h3>
      )}
      {description && (
        <p style={{ fontSize: '0.95rem', color: 'var(--color-blue-dark)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {description}
        </p>
      )}
      {attributes && attributes.length > 0 && (
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {attributes.map((attr, i) => (
            <div key={i} style={{ flex: '1 1 200px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                {attr.label}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-blue-dark)', fontWeight: '500', lineHeight: '1.5' }}>
                {attr.value}
              </div>
            </div>
          ))}
        </div>
      )}
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
              <img loading="lazy" src={img.src} alt={img.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
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
          <img loading="lazy" src={imgHammerUnionSeal} alt="Hammer Union Seal" style={{ maxWidth: '100%', maxHeight: '200px', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
        </div>
        
        {/* Text */}
        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-text)', textAlign: 'center', maxWidth: '600px', margin: '0' }}>
          Hammer union seals are commonly offered in sizes ranging from 1″ to 6″ inner diameter, with dimensions specified by inner diameter (ID), outer diameter (OD), and overall height.
        </p>

        {/* Second Image (Measurement Data) */}
        <div style={{ padding: '0.5rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', maxWidth: '500px', display: 'flex', justifyContent: 'center' }}>
          <img loading="lazy" src={imgHammerUnionMeasurement} alt="Hammer Union Seal Measurement Data" style={{ maxWidth: '100%', maxHeight: '250px', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
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
              <img loading="lazy" src={img.src} alt={img.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
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
        <img loading="lazy" key={i} src={src} alt={title} style={{ position: 'absolute', maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', opacity: i === index ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }} />
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
    { 
      images: [vsImg13a, vsImg13b], 
      title: 'Stem Packing API 6A'
    },
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <SkewedCarousel items={items} />
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
              <img loading="lazy" src={item.images[0]} alt={item.title} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
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

function CarouselImage({ images, interval = 5000, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const hasMultiple = images.length > 1;

  return (
    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'visible' }}>
      {images.map((src, i) => (
        <img loading="lazy" key={i} src={src} alt={title} style={{ position: 'absolute', maxWidth: '80%', maxHeight: '80%', objectFit: 'contain', opacity: i === index ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }} />
      ))}
      {hasMultiple && (
        <>
          <button 
            onClick={prevSlide}
            aria-label="Previous image"
            style={{ position: 'absolute', left: '-15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.95)', border: '1px solid #eee', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 10, color: 'var(--color-blue-accent)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button 
            onClick={nextSlide}
            aria-label="Next image"
            style={{ position: 'absolute', right: '-15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.95)', border: '1px solid #eee', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 10, color: 'var(--color-blue-accent)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </>
      )}
    </div>
  );
}

function UniLubeBearingCustomSection() {
  const items = [
    { 
      images: [ubImg1, ubImg2], 
      title: 'MSS-MF Self Lube', 
      details: <CarouselItemDetails 
        title="Metal-Polymer Self-Lubricating"
        description="MSS-MF series bearings deliver high-performance, self-lubricating operation with a wide range of applications. Designed for maintenance-free, long-life performance, they provide low friction, vibration and noise, excellent abrasion resistance under high loads and low speeds, and strong dimensional stability with efficient heat conductivity."
        attributes={[
          { label: 'Industries & Applications', value: 'Hydraulics and valves, including pumps, actuators and industrial valves; textile machinery such as spinning and weaving equipment; agricultural machinery including tractors, tillers and harvesters; and automotive applications such as earthmovers and trucks.' }
        ]}
      /> 
    },
    { 
      images: [ubImg3, ubImg4], 
      title: 'MSS-MP Pre Lube', 
      details: <CarouselItemDetails 
        title="Metal-Polymer Self-Lubricating"
        description="MSS-MP series bearings provide reliable performance under high loads and low speeds. Their pre-lubricated design uses lubricant-retaining pockets for extended operation with minimal maintenance. They are suitable for rotational, oscillating, frequent start-stop and boundary-condition applications, offering good damping and shock-load resistance."
        attributes={[
          { label: 'Industries & Applications', value: 'Hydraulics and pneumatics, including hydraulic seals, pumps and piston-rod guides; agricultural equipment such as gearboxes, transmissions, harvesters, balers and tractors; and handling and lifting equipment, including crane transmissions, vertical-shaft gearboxes, drive sprockets and related components.' }
        ]}
      /> 
    },
    { 
      images: [ubImg5], 
      title: 'MSS-BIM Bi-Metal', 
      details: <CarouselItemDetails 
        title="High-Performance Bi-Metal Bushing"
        description="MSS-BIM bi-metal bushings provide excellent mechanical strength, fatigue resistance and wear resistance for demanding lubricated applications. Designed for extreme loads, shock loads and low-speed oscillating movements, they combine a durable steel backing with high-performance bronze bearing layers, including lead-free options with solid lubricants."
        attributes={[
          { label: 'Industries & Applications', value: 'Suitable for oil- and grease-lubricated systems, textile machinery, pneumatic equipment, king pin and brake caliper bushes, mechanical handling and lifting equipment, and hydraulic cylinders. They deliver reliable performance, rigidity and long fatigue life under dynamic and shock-loading conditions.' }
        ]}
      /> 
    },
    { 
      images: [ubImg6], 
      title: 'MSS-MB Solid Bush', 
      details: <CarouselItemDetails 
        title="Thick-Wall Single Metal Bearing"
        description="MSS-MB bearings combine a durable metal structure with embedded solid lubricants made from graphite and oil, delivering high load and impact resistance with low friction. They provide reliable, maintenance-free performance across demanding operating conditions, including rotational, oscillating and frequent start-stop movements. With excellent wear resistance, low friction, chemical resistance and corrosion protection, they operate across temperatures from -40°C to +300°C."
        attributes={[
          { label: 'Industries & Applications', value: 'Suitable for water, steam and gas turbines, iron foundries, steel and aluminum industries, furnaces, blowers, pumps, compressors, sewage treatment plants, thermal processing equipment, hot rolling mills, food and beverage machinery, packaging equipment, agricultural machinery and construction equipment.' }
        ]}
      /> 
    },
    { 
      images: [ubImg7], 
      title: 'MSS-MITHLON', 
      details: <CarouselItemDetails 
        title="Thermoplastic Bushing"
        description="MSS-MITHLON bushings are made from advanced thermoplastic materials, providing long service life, low friction and reliable performance where traditional metal bushings may struggle. Available in standard and custom sizes, they offer lightweight, corrosion-resistant and maintenance-free operation. With grease-free performance, low noise, shaft-friendly characteristics, no delamination and an eco-friendly design, MITHLON bushings are well suited for demanding environments."
        attributes={[
          { label: 'Industries & Applications', value: 'Particularly recommended for moist and underwater applications where regular maintenance is difficult or costly. Typical applications include pumps, marine equipment and other systems requiring reliable, low-maintenance performance.' }
        ]}
      /> 
    },
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <SkewedCarousel items={items} />
    </div>
  );
}

function SealsHydraulicCustomSection() {
  const items = [
    {
      image: shImg1,
      title: 'Wear Rings',
      desc: 'Mithson offers bearings in many materials, all of which offer high wear resistance and excellent friction. It prevents metal-to-metal contact and guides the piston and piston rod of the hydraulic cylinder.'
    },
    {
      image: shImg2,
      title: 'PISTON SEALS',
      desc: 'Piston seals are dynamic seals that work as a single or double-acting reciprocating movement. It prevents fluid from passing the piston and acts as a pressure barrier. It also allows lubrication film to minimize friction and wear.'
    },
    {
      image: shImg3,
      title: 'WIPER SEALS',
      desc: 'Wiper seals prevent external contaminants from entering the cylinder assembly which is one of the primary causes of cylinder failure. It also helps the lubrication film back into the cylinder when the rod retracts.'
    },
    {
      image: shImg4,
      title: 'Rod Seals',
      desc: 'Rod seal is the most critical seal hydraulic cylinder. It acts as a pressure barrier and keeps the operating fluid inside the cylinder. It prevents leakage from within the cylinder to the outside which can reduce equipment performance.'
    }
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img loading="lazy" src={item.image} alt={item.title} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
            </div>
            <span style={{ color: 'var(--color-blue-accent)', fontWeight: '700', fontSize: '1.1rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {item.title}
            </span>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', textAlign: 'left', lineHeight: '1.5' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiaphragmAoddCustomSection() {
  const items = [
    { images: [diaImg1], title: 'Diaphragm' },
    { images: [diaImg2], title: 'Pilot Shaft' },
    { images: [diaImg3], title: 'PTFE Ball' },
    { images: [diaImg4], title: 'PTFE O-Ring' },
    { images: [diaImg5], title: 'PTFE Seat' }
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <SkewedCarousel items={items} />
    </div>
  );
}

function WashersTransmissionCustomSection() {
  const items = [
    { image: wtImg1, title: 'PEEK-Split Lock Washer' },
    { image: wtImg2, title: 'PEEK-Thrust Washer' },
    { image: wtImg3, title: 'Product 1' }
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img loading="lazy" src={item.image} alt={item.title} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
            </div>
            <span style={{ color: 'var(--color-blue-accent)', fontWeight: '700', fontSize: '1.1rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


function EncapsulatedORingCustomSection() {
  return (
    <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
      <img loading="lazy" src={productDetailsImg} alt="Encapsulated O-Ring Details" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)' }} />
    </div>
  );
}

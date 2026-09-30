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
        <img key={i} src={src} alt={title} style={{ position: 'absolute', maxWidth: '80%', maxHeight: '80%', objectFit: 'contain', opacity: i === index ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }} />
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
  const mssMfDetails = (
    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', textAlign: 'left', width: '100%', marginTop: '0.5rem' }}>
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)', fontSize: '0.85rem' }}>
        METAL-POLYMER SELF-LUBRICATING<br />LONG LIFE HASSLE FREE PERFORMANCE
      </p>
      <p style={{ marginBottom: '1.5rem', lineHeight: '1.5' }}>
        MSS-MF series are the highest performance self-lubricating bearings. Its performance is unmatched by any other self-lubricating bearing material and has the widest application range.
      </p>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>CHARACTERISTICS</p>
      <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', lineHeight: '1.4' }}>
        <li>Dry Lubrication and maintenance free.</li>
        <li>Long life and frictionless</li>
        <li>Low vibration and low noise</li>
        <li>Abrasion resistance in high load and low speed condition.</li>
        <li>Provides excellent dimensional stability and heat conductivity</li>
      </ul>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>INDUSTRY & APPLICATIONS</p>
      <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', lineHeight: '1.4' }}>
        <li><strong>Hydraulics and Valves:</strong> Pumps – Centrifugal, Water axial piston, Hydraulic actuators, Ball, Butterfly and check valves</li>
        <li><strong>Textiles Equipment:</strong> Spinning machinery, Weaving machinery</li>
        <li><strong>Agricultural Equipment:</strong> Tractors, tillers, Harvesters</li>
        <li><strong>Automotive:</strong> Earthmovers, Trucks</li>
      </ul>
    </div>
  );

  const mssMpDetails = (
    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', textAlign: 'left', width: '100%', marginTop: '0.5rem' }}>
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)', fontSize: '0.85rem' }}>
        METAL-POLYMER SELF-LUBRICATING<br />LONG LIFE HASSLE FREE PERFORMANCE
      </p>
      <p style={{ marginBottom: '1.5rem', lineHeight: '1.5' }}>
        MSS-MP series bearing provides extraordinary performance with low speed and high load application. It is referred as “pre-lubricated” because it requires traces of lubricant that last for to a very long period due to its unique lubricant retention system.
      </p>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>CHARACTERISTICS</p>
      <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', lineHeight: '1.4' }}>
        <li>Recommended to use where intermittent operation or boundary condition.</li>
        <li>Suitable for high load and low speed of Rotational, Oscillating or frequent stop or start.</li>
        <li>Work longer in boundary condition without adding oil due to lubricant retaining pockets in the material.</li>
        <li>Good damping behavior and good resistance to shock loads.</li>
      </ul>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>INDUSTRY & APPLICATIONS</p>
      <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', lineHeight: '1.4' }}>
        <li><strong>Hydraulics & Pneumatics:</strong> Hydraulic oil seals and components in hydraulic pumps, Piston rod guide – Hydraulic engineering</li>
        <li><strong>Agricultural Equipment:</strong> Gearboxes and transmissions, Seals and components for harvesters, Valves for balers and tractors, Bearings for gearboxes, Plain bearings for harvesters</li>
        <li><strong>Handling and Lifting Equipment:</strong> Vertical shaft gearboxes and components, Gearboxes and drive sprockets, For crane transmission</li>
      </ul>
    </div>
  );

  const mssBimDetails = (
    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', textAlign: 'left', width: '100%', marginTop: '0.5rem' }}>
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)', fontSize: '0.85rem' }}>
        HIGH PERFORMANCE FOR HEAVY LOAD APPLICATION BI-METAL BUSHING
      </p>
      <p style={{ marginBottom: '1.5rem', lineHeight: '1.5' }}>
        The Bi-metal bearings offers a very high mechanical strength, fatigue and wear resistance. MSS-BIM bearings are particularly recommended for lubricated applications working under extreme loads, including shock loads and low speed oscillating movements. The bearing layer includes lead bronze, lead-free bronze and lead-free with solid lubricant for high performance.
      </p>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>CHARACTERISTICS</p>
      <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', lineHeight: '1.4' }}>
        <li>Recommended to use oil and grease condition.</li>
        <li>Good performance under oscillating movement.</li>
        <li>Steel backing provides strength and rigidity and suitable for high load application.</li>
        <li>Great fatigue strength under dynamic and shock load application.</li>
      </ul>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>INDUSTRY & APPLICATIONS</p>
      <p style={{ lineHeight: '1.4' }}>
        Textile machinery, Pneumatic equipment, King pin bushes, Brake caliper bushes, Mechanical handling and lifting equipment, Hydraulic cylinders.
      </p>
    </div>
  );

  const mssMbDetails = (
    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', textAlign: 'left', width: '100%', marginTop: '0.5rem' }}>
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)', fontSize: '0.85rem' }}>
        THICK WALL SINGLE METAL BEARING
      </p>
      <p style={{ marginBottom: '1.5rem', lineHeight: '1.5' }}>
        MSS-MB bearings are made of metal and embedded with solid lubricants in line. The solid lubricants are made of graphite with oil. With the combination of heavy load and impact resistance of the metal and the low friction factor of the non-metal, this material is good for the various working conditions.
      </p>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>CHARACTERISTICS</p>
      <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', lineHeight: '1.4' }}>
        <li>Long service life without lubrication.</li>
        <li>Suitable for high load and low speed of Rotational, Oscillating or frequent stop or start.</li>
        <li>Good anti wear and low friction and resistance to chemical and anti corrosion.</li>
        <li>Suitable for application temperature range from -40°C to +300°C.</li>
      </ul>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>INDUSTRY & APPLICATIONS</p>
      <p style={{ lineHeight: '1.4' }}>
        Turbines (water, steam and gas), iron foundry, steel and aluminum industry, furnaces, blower, pumps and compressors, sewage purification plants, thermal treatment furnaces, hot rolling mills, food and beverage industry, packaging equipment, agriculture and construction machines.
      </p>
    </div>
  );

  const mssMithlonDetails = (
    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', textAlign: 'left', width: '100%', marginTop: '0.5rem' }}>
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)', fontSize: '0.85rem' }}>
        THERMOPLASTIC BUSHING
      </p>
      <p style={{ marginBottom: '1.5rem', lineHeight: '1.5' }}>
        MSS-MITHLON bushings, made from unique thermoplastic material give long life and low friction which traditional metal-based bushings are struggling to provide. It is available in both standard and custom sizes, offering material advantages.
      </p>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>CHARACTERISTICS</p>
      <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', lineHeight: '1.4', textTransform: 'capitalize' }}>
        <li>No grease</li>
        <li>Corrosion resistance</li>
        <li>Low friction</li>
        <li>Less noise</li>
        <li>Low weight</li>
        <li>Shaft friendly</li>
        <li>No delamination</li>
        <li>Eco friendly</li>
      </ul>
      
      <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-blue-dark)' }}>INDUSTRY & APPLICATIONS</p>
      <p style={{ lineHeight: '1.4' }}>
        Mithlon specifically recommended for moist and underwater applications. These include the pump and marine industry, where regular maintenance is not practically feasible or cost-effective.
      </p>
    </div>
  );

  const items = [
    { images: [ubImg1, ubImg2], title: 'MSS-MF Self Lube', details: mssMfDetails },
    { images: [ubImg3, ubImg4], title: 'MSS-MP Pre Lube', details: mssMpDetails },
    { images: [ubImg5], title: 'MSS-BIM Bi-Metal', details: mssBimDetails },
    { images: [ubImg6], title: 'MSS-MB Solid Bush', details: mssMbDetails },
    { images: [ubImg7], title: 'MSS-MITHLON', details: mssMithlonDetails },
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <CarouselImage images={item.images} title={item.title} interval={5000} />
            <span style={{ color: 'var(--color-blue-accent)', fontWeight: '700', fontSize: '1.1rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {item.title}
            </span>
            {item.details && item.details}
          </div>
        ))}
      </div>
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
              <img src={item.image} alt={item.title} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
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
    { image: diaImg1, title: 'Diaphragm' },
    { image: diaImg2, title: 'Pilot Shaft' },
    { image: diaImg3, title: 'PTFE Ball' },
    { image: diaImg4, title: 'PTFE O-Ring' },
    { image: diaImg5, title: 'PTFE Seat' }
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(3, 54, 163, 0.08)', width: '100%', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
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
              <img src={item.image} alt={item.title} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
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

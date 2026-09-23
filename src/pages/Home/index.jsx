import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SceneWrapper from '../../shared/3d/SceneWrapper';
import HeroOrb from '../../shared/3d/HeroOrb';
import ParticleField from '../../shared/3d/ParticleField';
import FloatingRing from '../../shared/3d/FloatingRing';
import EnvironmentLight from '../../shared/3d/EnvironmentLight';
import ScrollReveal from '../../shared/components/ScrollReveal';
import ProductCarousel from '../../shared/components/ProductCarousel';

import { products } from '../../content/products';
import { company } from '../../content/company';

import './Home.css';

gsap.registerPlugin(ScrollTrigger);


/* ----- Industry sectors ----- */
const sectors = company.sectors.map((s, i) => ({
  label: s,
  icon: ['🛢️', '🚗', '🔬', '⛏️', '💻', '🤖', '✈️'][i] || '⬡',
}));

/* ================================================================
   HOME PAGE
   ================================================================ */
export default function HomePage() {
  return (
    <div className="home-page page-wrapper">
      <HeroSection />
      <ProductCarousel />
      <IndustriesSection />
      <CertificationSection />
      <SustainabilitySection />
      <HomeCTA />
    </div>
  );
}

/* ----- Hero ----- */
function HeroSection() {
  const textRef = useRef();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* 3D canvas — full viewport background */}
      <div className="hero-canvas" aria-hidden="true">
        <SceneWrapper
          camera={{ position: [0, 0, 8], fov: 55 }}
          dpr={[1, 1.5]}
          style={{ height: '100%' }}
        >
          <EnvironmentLight
            preset="city"
            ambientIntensity={0.4}
            directionalIntensity={1.5}
            shadowOpacity={0}
          />
          <HeroOrb position={[2.5, 0, -1]} scale={2.4} speed={0.35} distort={0.3} />
          <FloatingRing position={[-3.5, 1.5, -2]} scale={1.8} color="#0336A3" speed={0.4} />
          <FloatingRing position={[4, -2, -3]} scale={1.2} color="#42A4FF" speed={0.3} tubeRadius={0.04} />
          <ParticleField count={500} spread={18} size={0.022} color="#42A4FF" speed={0.05} />
        </SceneWrapper>
      </div>

      {/* Overlay gradient */}
      <div className="hero-gradient" aria-hidden="true" />

      {/* Content */}
      <div className="hero-content container" ref={textRef}>
        <div className="hero-text">
          <motion.div
            className="hero-badge hero-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="badge badge-blue">Part of Fluoro Carbon Seals Group</span>
          </motion.div>

          <h1 className="hero-title" id="hero-title">
            <span className="hero-line hero-title-line">Engineering the</span>
            <span className="hero-line hero-title-line text-gradient">Future of</span>
            <span className="hero-line hero-title-line">Sealing Technology</span>
          </h1>

          <p className="hero-subtitle hero-line">
            High-performance polymer seals and components for Oil & Gas, Aerospace, Automotive and beyond —
            engineered with {company.experience} years of expertise.
          </p>

          <div className="hero-actions hero-line">
            <Link to="/products" className="btn btn-primary" id="hero-explore-products">
              Explore Products
            </Link>
            <Link to="/who-we-are/about-us" className="btn btn-ghost" id="hero-learn-more">
              Who We Are
            </Link>
          </div>

          {/* Cert strip */}
          <div className="hero-certs hero-line" aria-label="Certifications">
            {company.certifications.map((c) => (
              <span key={c} className="hero-cert-chip">{c}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



/* ----- Industries section ----- */
function IndustriesSection() {
  return (
    <section className="industries-section section--lg" aria-labelledby="industries-title">
      <div className="container">
        <div className="industries-layout">
          {/* Left text */}
          <div className="industries-text">
            <ScrollReveal>
              <span className="section-label">Industries</span>
              <h2 className="section-title" id="industries-title">
                Serving Global Industries
              </h2>
              <p className="section-subtitle" style={{ marginTop: '1rem' }}>
                From extreme-pressure Oil & Gas environments to precision Life Science applications —
                Mithson polymer expertise spans the most demanding sectors.
              </p>
              <Link to="/industries" className="btn btn-outline" style={{ marginTop: '2rem' }} id="home-industries-link">
                Explore Industries
              </Link>
            </ScrollReveal>
          </div>

          {/* Right grid */}
          <div className="sectors-grid">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.label}
                className="sector-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              >
                <span className="sector-icon" aria-hidden="true">{sector.icon}</span>
                <span className="sector-label">{sector.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Certification section ----- */
function CertificationSection() {
  return (
    <section className="cert-section" aria-labelledby="cert-title">
      <div className="container">
        <ScrollReveal>
          <div className="cert-inner glass-card">
            <div className="cert-text">
              <span className="section-label">Quality</span>
              <h2 className="section-title" id="cert-title">
                Certified to the Highest Standards
              </h2>
              <p className="section-subtitle" style={{ marginTop: '1rem' }}>
                Every product is manufactured under ISO 9001:2015 quality management and
                audited against international standards including API, NORSOK and BAM.
              </p>
              <Link to="/who-we-are/quality-and-certification" className="btn btn-primary" style={{ marginTop: '1.5rem' }} id="home-cert-link">
                Our Certifications
              </Link>
            </div>
            <div className="cert-badges">
              {company.certifications.map((c) => (
                <div key={c} className="cert-badge-card glass">
                  <span className="cert-badge-name">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ----- Sustainability section ----- */
function SustainabilitySection() {
  return (
    <section className="sustain-section section" aria-labelledby="sustain-title">
      <div className="container">
        <div className="sustain-layout">
          <ScrollReveal>
            <span className="section-label">Sustainability</span>
            <h2 className="section-title" id="sustain-title">
              Committed to a <span className="text-gradient-blue">Greener Future</span>
            </h2>
          </ScrollReveal>
          <div className="sustain-cards">
            {company.sustainability.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="sustain-card glass-card">
                  <div className="sustain-card-dot" />
                  <p>{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Home CTA ----- */
function HomeCTA() {
  return (
    <section className="home-cta-section" aria-labelledby="home-cta-title">
      {/* Subtle 3D rings */}
      <div className="home-cta-canvas" aria-hidden="true">
        <SceneWrapper
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.2]}
          style={{ height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <FloatingRing position={[-2, 0, 0]} scale={1.5} color="#42A4FF" speed={0.5} />
          <FloatingRing position={[2, 0, 0]} scale={1.5} color="#0336A3" speed={0.4} tubeRadius={0.05} />
          <ParticleField count={200} spread={10} size={0.02} color="#42A4FF" />
        </SceneWrapper>
      </div>
      <div className="home-cta-gradient" aria-hidden="true" />
      <div className="container home-cta-content">
        <ScrollReveal>
          <h2 className="home-cta-title" id="home-cta-title">
            Ready to Solve Your <span className="text-gradient">Sealing Challenge?</span>
          </h2>
          <p className="home-cta-sub">
            Talk to our engineering team today for technical consultation, custom solutions and rapid sampling.
          </p>
          <div className="home-cta-actions">
            <Link to="/connect-with-us" className="btn btn-primary" id="home-cta-contact">
              Contact Us
            </Link>
            <Link to="/oil-gas-seal" className="btn btn-ghost" id="home-cta-oil-gas">
              Oil & Gas Seals
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

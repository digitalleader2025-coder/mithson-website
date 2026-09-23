import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../shared/components/ScrollReveal';

export default function IndustriesPage() {
  useEffect(() => {
    document.title = 'Industries | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div className="page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Industries</span>
            <h1 className="section-title">Industries We Serve</h1>
            <p className="section-subtitle">Polymer engineering solutions across the world's most demanding sectors.</p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <Link to="/industries/energy-oil-gas" className="glass-card" id="industries-oil-gas-card"
              style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '2rem', padding: '3rem', borderRadius: '1.25rem', marginBottom: '1.5rem', transition: 'transform 0.3s, border-color 0.3s' }}
            >
              <div>
                <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Primary Sector</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem' }}>Energy — Oil & Gas</h2>
                <p style={{ color: 'var(--color-text-2)', fontSize: 'var(--text-base)', lineHeight: 1.7, maxWidth: 600 }}>
                  API 6A wellhead, well service, downhole and LNG ball valve sealing — rated for HPHT, sour gas and cryogenic service.
                </p>
              </div>
              <span style={{ color: 'var(--color-accent)', fontSize: '2rem' }}>→</span>
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', textAlign: 'center', marginTop: '3rem' }}>
              Additional industry pages for Automotive, Life Science, Mining, Semiconductor, Robotics and Aerospace — coming soon.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

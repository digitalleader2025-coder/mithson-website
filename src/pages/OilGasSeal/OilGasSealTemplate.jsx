import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../shared/components/ScrollReveal';

export default function OilGasSealTemplate({ title, subtitle, products: productList, label, pageId }) {
  useEffect(() => {
    document.title = `${title} | Mithson Sealing Solutions`;
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, [title]);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div className="page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">{label || 'Oil & Gas Seal'}</span>
            <h1 className="section-title">{title}</h1>
            <p className="section-subtitle">{subtitle}</p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Product Range</h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {productList.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: '1.5rem 2rem', borderRadius: '1rem', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem', alignItems: 'center' }} id={`${pageId}-item-${i}`}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-text)', marginBottom: '0.4rem' }}>{item.name}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {item.materials?.map(m => <span key={m} className="material-chip" style={{ fontSize: '0.7rem' }}>{m}</span>)}
                    </div>
                    {item.application && (
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>{item.application}</p>
                    )}
                    {item.notes && (
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: '0.25rem' }}>{item.notes}</p>
                    )}
                  </div>
                  <span className="badge badge-blue">{item.spec || 'In-Stock'}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/connect-with-us" className="btn btn-primary" id={`${pageId}-enquire`}>Enquire Now</Link>
            <Link to="/oil-gas-seal" className="btn btn-ghost" id={`${pageId}-back`}>← All Oil & Gas Seals</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

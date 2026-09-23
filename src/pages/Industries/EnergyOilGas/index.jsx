import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';

const oilGasSections = [
  {
    id: 'wellhead',
    title: 'API 6A Wellhead Equipment Seals',
    desc: 'High-pressure, sour-gas and HPHT wellhead sealing — spring energized lip seals, stem packing and BOP seals manufactured to API 6A.',
    path: '/oil-gas-seal/api-6a-wellhead-equipment-seal',
  },
  {
    id: 'well-service',
    title: 'Well Service Equipment Seals',
    desc: 'Plunger packing, pump packing and liner seals for high-cycling mud, frac and plunger pump applications — NBR, HNBR, FKM and filled PTFE.',
    path: '/oil-gas-seal/well-service-equipment-seal',
  },
  {
    id: 'downhole',
    title: 'Downhole Tool Seals',
    desc: 'Aggressive fluids, high temperature and deep-well pressure — unified stack seals, packers, RGD O-rings and PEEK back-up rings.',
    path: '/oil-gas-seal/downhole-tool-seal',
  },
  {
    id: 'api6d',
    title: 'API 6D Ball Valve & LNG Seals',
    desc: 'Gas transmission and cryogenic ball valve sealing — body-bonnet seals, PEEK seat rings and LNG seals rated to -162°C/-260°F.',
    path: '/oil-gas-seal/api-6d-ball-valve-lng-seal',
  },
];

const materials = ['PTFE', 'PEEK', 'FKM', 'HNBR', 'Perfluoro Elastomers'];
const standards = ['API', 'NORSOK', 'BAM', 'ISO'];

export default function IndustriesEnergyPage() {
  useEffect(() => {
    document.title = 'Energy - Oil & Gas | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Industries</span>
            <h1 className="section-title">Energy — Oil & Gas</h1>
            <p className="section-subtitle">
              API-qualified sealing solutions for wellhead, well service, downhole and ball valve applications —
              engineered for the extreme conditions of oil and gas production.
            </p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      {/* Sector overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <ScrollReveal>
              <span className="section-label">Overview</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                High-Performance Sealing for the Oil & Gas Sector
              </h2>
              <p style={{ color: 'var(--color-text-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Mithson engineers seals for the most demanding Oil & Gas applications —
                from surface wellhead equipment operating at high pressure and sour gas conditions,
                to downhole tools at depth, and cryogenic LNG service.
              </p>
              <p style={{ color: 'var(--color-text-2)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Materials include PTFE, PEEK, FKM, HNBR and perfluoro elastomers,
                manufactured and tested to API, NORSOK, BAM and ISO standards.
              </p>
              <Link to="/oil-gas-seal" className="btn btn-primary" id="industry-oil-gas-link">
                View Oil & Gas Seals
              </Link>
            </ScrollReveal>
            <div>
              <ScrollReveal delay={0.1}>
                <div className="glass-card" style={{ padding: '2rem', borderRadius: '1rem', marginBottom: '1rem' }}>
                  <div className="product-section-label">Materials</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {materials.map(m => <span key={m} className="material-chip">{m}</span>)}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="glass-card" style={{ padding: '2rem', borderRadius: '1rem' }}>
                  <div className="product-section-label">Standards & References</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {standards.map(s => <span key={s} className="badge badge-blue">{s}</span>)}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-sectors */}
      <section className="section" style={{ background: 'var(--color-bg-2)' }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Product Applications</span>
            <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Sealing Solutions by Application</h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {oilGasSections.map((sec, i) => (
              <ScrollReveal key={sec.id} delay={i * 0.08}>
                <Link to={sec.path} className="glass-card" id={`industry-${sec.id}`}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.5rem', borderRadius: '1rem', transition: 'transform 0.3s, border-color 0.3s' }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-text)' }}>{sec.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', lineHeight: 1.65 }}>{sec.desc}</p>
                  <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 600, marginTop: 'auto' }}>Explore →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

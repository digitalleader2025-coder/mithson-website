import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../shared/components/ScrollReveal';

const subPages = [
  { title: 'API 6A Wellhead Equipment Seal', path: '/oil-gas-seal/api-6a-wellhead-equipment-seal', desc: 'Stem packing sets, stem seals, OD/ID face seals and BOP seals for wellhead gate valves and BOP applications.' },
  { title: 'Well Service Equipment Seal', path: '/oil-gas-seal/well-service-equipment-seal', desc: 'Plunger packing, pump packing, valve seat inserts and liner seals for mud, frac and plunger pump service.' },
  { title: 'Downhole Tool Seal', path: '/oil-gas-seal/downhole-tool-seal', desc: 'Unified stack seals, packers, RGD O-rings and PEEK back-up rings for deep-well and hostile-fluid environments.' },
  { title: 'API 6D Ball Valve & LNG Seal', path: '/oil-gas-seal/api-6d-ball-valve-lng-seal', desc: 'Body-bonnet seals, seat retainers, PEEK seat rings and LNG seals for trunnion and floating ball valves.' },
];

export default function OilGasSealPage() {
  useEffect(() => {
    document.title = 'Oil & Gas Seal | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div className="page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Oil & Gas</span>
            <h1 className="section-title">Oil & Gas Seal</h1>
            <p className="section-subtitle">
              API-qualified sealing solutions for wellhead, well service, downhole and ball valve applications.
              Materials: PTFE, PEEK, FKM, HNBR and perfluoro elastomers. Standards: API, NORSOK, BAM, ISO.
            </p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {subPages.map((sp, i) => (
              <ScrollReveal key={sp.path} delay={i * 0.1}>
                <Link to={sp.path} className="glass-card" id={`oil-gas-${i}`}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', borderRadius: '1rem', transition: 'transform 0.3s, border-color 0.3s' }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)' }} />
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--color-text)' }}>{sp.title}</h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', lineHeight: 1.65, flex: 1 }}>{sp.desc}</p>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>View Details →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

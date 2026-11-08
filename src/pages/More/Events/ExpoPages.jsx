import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';

import { eventYears } from '../../../content/events';

const byYear = (year) => eventYears.find((e) => e.year === year);

export default function Expo2025Page() {
  useEffect(() => {
    document.title = 'Oil & Gas Expo 2025 | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);
  const data = byYear('2025');
  return <ExpoPage
    year={data.year}
    fullTitle="Oil & Gas Expo 2025"
    events={data.events}
    description={data.intro}
    highlights={['API 6A Wellhead Seals', 'Well Service Packing', 'Downhole Seals', 'API 6D / LNG Seals', 'Spring Energized Lip Seals', 'PTFE & PEEK Components']}
    prevPath="/events/expo-2024"
  />;
}

export function Expo2024Page() {
  useEffect(() => {
    document.title = 'Expo 2024 | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);
  const data = byYear('2024');
  return <ExpoPage
    year={data.year}
    fullTitle="Industry Exhibitions 2024"
    events={data.events}
    description={data.intro}
    highlights={['Seals for Construction Equipment', 'Valve Sealing Solutions', 'Middle East Oil & Gas Presence']}
    nextPath="/events/oil-and-gas-expo-2025"
    prevPath="/events/expo-2023"
  />;
}

export function Expo2023Page() {
  useEffect(() => {
    document.title = 'Expo 2023 | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);
  const data = byYear('2023');
  return <ExpoPage
    year={data.year}
    fullTitle="Industry Exhibitions 2023"
    events={data.events}
    description={data.intro}
    highlights={['Southeast Asia Market Entry', 'Automation Sector Presence', 'OTC Houston — Global Oil & Gas']}
    nextPath="/events/expo-2024"
  />;
}

function ExpoPage({ year, fullTitle, events, description, highlights, nextPath, prevPath }) {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div className="page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span className="section-label" style={{ marginBottom: 0 }}>Events — {year}</span>
            </div>
            <h1 className="section-title">{fullTitle}</h1>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <ScrollReveal>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-2)', lineHeight: 1.8, maxWidth: '1000px' }}>
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="expo-grid">
              {events.map((evt, idx) => (
                <div key={idx} className="expo-card">
                  <img src={evt.image} alt={`Mithson at ${evt.name}`} />
                  <div className="expo-card-body">
                    <h3>{evt.name}</h3>
                    <p className="expo-card-venue">{evt.venue}</p>
                    <p className="expo-card-place">{evt.place} &middot; {year}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '1.25rem', marginTop: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-accent)', marginBottom: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Products Showcased
              </h3>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: 'var(--text-base)', color: 'var(--color-text-2)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {prevPath && <Link to={prevPath} className="btn btn-ghost" id={`expo-${year}-prev`}>← Previous Expo</Link>}
            {nextPath && <Link to={nextPath} className="btn btn-ghost" id={`expo-${year}-next`}>Next Expo →</Link>}
            <div style={{ flex: 1 }} />
            <Link to="/connect-with-us" className="btn btn-primary" id={`expo-${year}-contact`}>Connect With Us</Link>
          </div>

        </div>
      </section>

      <style>{`
        .expo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .expo-card {
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(66, 164, 255, 0.18);
          border-radius: 18px;
          box-shadow: 0 12px 32px rgba(3, 54, 163, 0.08);
        }
        .expo-card img {
          display: block;
          width: 100%;
          height: 240px;
          object-fit: cover;
        }
        .expo-card-body { padding: 1.25rem; }
        .expo-card h3 {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-navy-base);
        }
        .expo-card-venue {
          margin-top: 0.35rem;
          font-size: var(--text-sm);
          line-height: 1.5;
          color: var(--color-text-2);
        }
        .expo-card-place {
          margin-top: 0.5rem;
          font-size: var(--text-xs);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #42a4ff;
        }
        @media (max-width: 1024px) {
          .expo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .expo-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

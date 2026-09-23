import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';

export default function Expo2025Page() {
  useEffect(() => {
    document.title = 'Oil & Gas Expo 2025 | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);
  return <ExpoPage
    year="2025"
    title="Oil & Gas Expo 2025"
    fullTitle="Oil Gas & Power World Expo 2025"
    status="upcoming"
    badge="Booth C31"
    venues={['Hall 4, Bombay Exhibition Center', 'Goregaon (East), Mumbai, India']}
    description="MITHSON is exhibiting at the Oil Gas & Power World Expo 2025 — one of Asia's leading trade events for the energy industry. Visit us at Booth C31, Hall 4, to see our latest sealing solutions for wellhead equipment, well service applications and high-pressure ball valves."
    highlights={['API 6A Wellhead Seals', 'Well Service Packing', 'Downhole Seals', 'API 6D / LNG Seals', 'Spring Energized Lip Seals', 'PTFE & PEEK Components']}
    prevPath="/events/expo-2024"
  />;
}

export function Expo2024Page() {
  useEffect(() => {
    document.title = 'Expo 2024 | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);
  return <ExpoPage
    year="2024"
    title="Expo 2024"
    fullTitle="Multiple Events 2024"
    status="past"
    venues={['bauma CONEXPO INDIA 2024 — Delhi', 'Valve World Mumbai', 'OPES 2024 — Oman']}
    description="In 2024 MITHSON participated across three major industry events — bauma CONEXPO INDIA in New Delhi covering construction and off-highway equipment, Valve World Mumbai covering valve and fluid control, and OPES 2024 in Oman reaching the Middle East Oil & Gas sector."
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
  return <ExpoPage
    year="2023"
    title="Expo 2023"
    fullTitle="Multiple Events 2023"
    status="past"
    venues={['Valve World Southeast Asia Expo 2023 — Singapore', 'Automation Expo 2023 — Mumbai, India', 'Offshore Technology Conference 2023, NRG Park, Houston, Texas, USA']}
    description="In 2023 MITHSON had a global presence — Valve World Southeast Asia in Singapore, Automation Expo in Mumbai, and the Offshore Technology Conference in Houston, Texas. OTC is one of the world's largest gathering of offshore energy professionals."
    highlights={['Southeast Asia Market Entry', 'Automation Sector Presence', 'OTC Houston — Global Oil & Gas']}
    nextPath="/events/expo-2024"
  />;
}

function ExpoPage({ year, title, fullTitle, status, badge, venues, description, highlights, nextPath, prevPath }) {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div className="page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span className="section-label" style={{ marginBottom: 0 }}>Events — {year}</span>
              {status === 'upcoming' && <span className="badge badge-blue">Upcoming</span>}
              {badge && <span className="badge badge-blue">{badge}</span>}
            </div>
            <h1 className="section-title">{fullTitle}</h1>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '4rem', alignItems: 'start' }}>
          <div>
            <ScrollReveal>
              {venues.map((v, i) => (
                <p key={i} style={{ fontSize: 'var(--text-base)', color: 'var(--color-accent-l)', fontWeight: 600, marginBottom: '0.25rem' }}>{v}</p>
              ))}
              <p style={{ marginTop: '1.5rem', fontSize: 'var(--text-lg)', color: 'var(--color-text-2)', lineHeight: 1.8 }}>{description}</p>
            </ScrollReveal>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {prevPath && <Link to={prevPath} className="btn btn-ghost" id={`expo-${year}-prev`}>← Previous Expo</Link>}
              {nextPath && <Link to={nextPath} className="btn btn-ghost" id={`expo-${year}-next`}>Next Expo →</Link>}
              <Link to="/connect-with-us" className="btn btn-primary" id={`expo-${year}-contact`}>Connect With Us</Link>
            </div>
          </div>
          <ScrollReveal delay={0.15}>
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-accent)', marginBottom: '1rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 'var(--text-xs)' }}>
                Products Showcased
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: 'var(--text-sm)', color: 'var(--color-text-2)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .container[style*="grid-template-columns"] { display: flex !important; flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}

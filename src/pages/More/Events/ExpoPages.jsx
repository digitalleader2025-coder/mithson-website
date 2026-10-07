import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';

import imgExpo2025 from '../../../assets/events/expo 2025/expo 2025.avif';

import imgExpo2024Bauma from '../../../assets/events/expo 2024/Bauma Conexpo India 2024 - Delhi.avif';
import imgExpo2024Opes from '../../../assets/events/expo 2024/OPES 2024 - Oman.avif';
import imgExpo2024Valve from '../../../assets/events/expo 2024/Valve World Mumbai 2024.avif';

import imgExpo2023Auto from '../../../assets/events/expo 2023/Automation Expo 2023 - Mumbai, India.avif';
import imgExpo2023OTC from '../../../assets/events/expo 2023/Offshore Technology Conference 2023 NRG Park, Houston, Texas, USA.avif';
import imgExpo2023Valve from '../../../assets/events/expo 2023/Valve World Southeast Asia Expo 2023 - Singapore.avif';

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
    events={[
      { title: 'Hall 4, Bombay Exhibition Center, Mumbai', image: imgExpo2025 }
    ]}
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
    events={[
      { title: 'bauma CONEXPO INDIA 2024 — Delhi', image: imgExpo2024Bauma },
      { title: 'Valve World Mumbai', image: imgExpo2024Valve },
      { title: 'OPES 2024 — Oman', image: imgExpo2024Opes }
    ]}
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
    events={[
      { title: 'Valve World Southeast Asia Expo 2023 — Singapore', image: imgExpo2023Valve },
      { title: 'Automation Expo 2023 — Mumbai, India', image: imgExpo2023Auto },
      { title: 'Offshore Technology Conference 2023, Houston, USA', image: imgExpo2023OTC }
    ]}
    description="In 2023 MITHSON had a global presence — Valve World Southeast Asia in Singapore, Automation Expo in Mumbai, and the Offshore Technology Conference in Houston, Texas. OTC is one of the world's largest gathering of offshore energy professionals."
    highlights={['Southeast Asia Market Entry', 'Automation Sector Presence', 'OTC Houston — Global Oil & Gas']}
    nextPath="/events/expo-2024"
  />;
}

function ExpoPage({ year, fullTitle, status, events, description, highlights, nextPath, prevPath }) {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div className="page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span className="section-label" style={{ marginBottom: 0 }}>Events — {year}</span>
              {status === 'upcoming' && <span className="badge badge-blue">Upcoming</span>}
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
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-accent-l)', fontWeight: 600, minHeight: '48px', margin: 0 }}>
                    {evt.title}
                  </p>
                  <img src={evt.image} alt={evt.title} style={{ width: '100%', height: '240px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 8px 24px rgba(3, 54, 163, 0.08)' }} />
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
          gap: 2rem;
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

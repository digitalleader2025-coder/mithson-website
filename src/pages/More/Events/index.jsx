import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';

const events = [
  {
    year: '2025',
    title: 'Oil & Gas Expo 2025',
    fullTitle: 'Oil Gas & Power World Expo 2025',
    venue: 'Hall 4, Bombay Exhibition Center, Goregaon (East), Mumbai, India',
    booth: 'Booth C31',
    description: 'MITHSON exhibiting at one of Asia\'s premier oil, gas and power expos — showcasing our latest sealing solutions for wellhead, well service and high-pressure applications.',
    path: '/events/oil-and-gas-expo-2025',
    status: 'upcoming',
  },
  {
    year: '2024',
    title: 'Expo 2024',
    fullTitle: 'Multiple Events 2024',
    venue: 'bauma CONEXPO INDIA 2024 – Delhi | Valve World Mumbai | OPES 2024 – Oman',
    booth: null,
    description: 'MITHSON participated in bauma CONEXPO INDIA in Delhi, Valve World Mumbai and OPES 2024 in Oman — reaching customers across construction, valve and oil & energy sectors.',
    path: '/events/expo-2024',
    status: 'past',
  },
  {
    year: '2023',
    title: 'Expo 2023',
    fullTitle: 'Multiple Events 2023',
    venue: 'Valve World SE Asia – Singapore | Automation Expo – Mumbai | OTC 2023 – Houston, TX, USA',
    booth: null,
    description: 'MITHSON showcased at Valve World Southeast Asia Expo in Singapore, Automation Expo 2023 in Mumbai and the Offshore Technology Conference at NRG Park, Houston, Texas.',
    path: '/events/expo-2023',
    status: 'past',
  },
];

export default function EventsPage() {
  useEffect(() => {
    document.title = 'Events | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <motion.div className="page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">More</span>
            <h1 className="section-title">Events</h1>
            <p className="section-subtitle">Meet MITHSON at industry expos and trade shows around the world.</p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {events.map((ev, i) => (
              <ScrollReveal key={ev.year} delay={i * 0.1}>
                <Link to={ev.path} className="glass-card" id={`events-${ev.year}`}
                  style={{ padding: '2rem', borderRadius: '1.25rem', display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '2rem', alignItems: 'center', transition: 'transform 0.3s, border-color 0.3s' }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 900, color: ev.status === 'upcoming' ? 'var(--color-accent)' : 'var(--color-dim)' }}>
                    {ev.year}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text)' }}>{ev.title}</h2>
                      {ev.status === 'upcoming' && <span className="badge badge-blue">Upcoming</span>}
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>{ev.venue}</p>
                    {ev.booth && <span className="badge badge-blue">{ev.booth}</span>}
                  </div>
                  <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xl)' }}>→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

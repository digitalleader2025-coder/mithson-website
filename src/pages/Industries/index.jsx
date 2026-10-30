import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../shared/components/ScrollReveal';
import imgOilGas from '../../assets/industries/Oil & Gas.webp';
import imgLifeScience from '../../assets/industries/Life Science.webp';
import imgSemiconductor from '../../assets/industries/Semiconductor.webp';
import imgAerospace from '../../assets/industries/Aerospace.webp';
import imgAutomotive from '../../assets/industries/Automotive.webp';
import './IndustryPage.css';

const sectors = [
  {
    title: 'Oil & Gas Seal',
    path: '/oil-gas-seal',
    image: imgOilGas,
    desc: 'API 6A wellhead, well service and LNG ball valve sealing for HPHT, sour gas and cryogenic service.',
  },
  {
    title: 'Downhole Tools',
    path: '/industries/downhole-tools',
    image: imgOilGas,
    desc: 'Unified stack seals, packers, RGD O-rings and PEEK back-up rings for deep-well environments.',
  },
  {
    title: 'Life Science',
    path: '/industries/life-science',
    image: imgLifeScience,
    desc: 'Clean, low-friction seals and bearings for instruments, pumps and medical equipment.',
  },
  {
    title: 'Semiconductor',
    path: '/industries/semiconductor',
    image: imgSemiconductor,
    desc: 'High-purity polymer parts for process tools and vacuum pumps.',
  },
  {
    title: 'Aerospace',
    path: '/industries/aerospace',
    image: imgAerospace,
    desc: 'Polymer seals for engines, fuel and hydraulic systems.',
  },
  {
    title: 'Automotive',
    path: '/industries/automotive',
    image: imgAutomotive,
    desc: 'PEEK and PTFE parts for transmissions and electric drive units.',
  },
];

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
          <div className="industry-grid">
            {sectors.map((sector) => (
              <ScrollReveal key={sector.path}>
                <Link to={sector.path} className="industry-card" id={`industries-${sector.path.split('/').pop()}-card`}>
                  <div className="industry-card-image">
                    <img src={sector.image} alt="" loading="lazy" style={{ objectFit: 'cover', padding: 0 }} />
                  </div>
                  <h2 className="industry-card-title">{sector.title}</h2>
                  <p className="industry-card-text">{sector.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

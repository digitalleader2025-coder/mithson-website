import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../shared/components/ScrollReveal';
import { company } from '../../../content/company';
import './AboutUs.css';

const timeline = [
  { year: '1996', event: 'Fluoro Carbon Seals founded in Chennai, beginning with PTFE components.' },
  { year: '2000s', event: 'Expanded into elastomers and thermoplastics; grew Oil & Gas presence.' },
  { year: '2010s', event: 'Achieved API-6A, ISO 9001:2015 and NORSOK certification; entered global markets.' },
  { year: 'Today', event: 'Mithson Sealing Solutions — 25+ years of polymer engineering across 7 industries worldwide.' },
];

export default function AboutUsPage() {
  useEffect(() => {
    document.title = 'About Us | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Who We Are</span>
            <h1 className="section-title">About Us</h1>
            <p className="section-subtitle">
              {company.experience} years of polymer engineering excellence — part of the {company.group}.
            </p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about-layout">
          <div>
            <ScrollReveal>
              <span className="section-label">Our Story</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Founded on Precision. Built for Performance.
              </h2>
              <p className="about-body-text">
                {company.name} is a member of the {company.group}. With more than {company.experience} years
                of polymer-engineering experience, we manufacture high-performance seals and polymer components
                for valves, pumps, compressors and hydraulic systems — with deep expertise in elastomers,
                fluoropolymers and thermoplastics.
              </p>
              <p className="about-body-text">
                Our vision is to become a global leader in Polymer Engineering Technology through quality,
                reliability and customer satisfaction.
              </p>
              <p className="about-body-text" style={{ marginBottom: '2rem' }}>
                {company.legalName} serves demanding sectors including Oil & Gas, Automotive, Life Science,
                Mining, Semiconductor, Robotics and Aerospace.
              </p>
              <Link to="/who-we-are/quality-and-certification" className="btn btn-primary" id="about-cert-link">
                Our Certifications
              </Link>
            </ScrollReveal>
          </div>

          {/* Stats sidebar */}
          <aside>
            <ScrollReveal delay={0.15}>
              <div className="about-stats glass-card">
                <div className="about-stat">
                  <span className="about-stat-value text-gradient">{company.experience}</span>
                  <span className="about-stat-label">Years Experience</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-value text-gradient">7</span>
                  <span className="about-stat-label">Industries Served</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-value text-gradient">5</span>
                  <span className="about-stat-label">Quality Standards</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-value text-gradient">12+</span>
                  <span className="about-stat-label">Product Lines</span>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>

      {/* Materials expertise */}
      <section className="section" style={{ background: 'var(--color-bg-2)' }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Material Expertise</span>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              Polymer Engineering Know-How
            </h2>
          </ScrollReveal>
          <div className="materials-expertise-grid">
            {company.materials.map((m, i) => (
              <ScrollReveal key={m} delay={i * 0.04}>
                <div className="material-expertise-card glass-card">
                  <span className="material-expertise-name">{m}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">History</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>Our Journey</h2>
          </ScrollReveal>
          <div className="timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-line" aria-hidden="true" />
                  <div className="timeline-event glass-card">{item.event}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

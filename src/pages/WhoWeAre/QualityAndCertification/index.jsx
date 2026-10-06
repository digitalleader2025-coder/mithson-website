import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../../shared/components/ScrollReveal';
import { company } from '../../../content/company';
import CircularCarousel from '../../../shared/components/CircularCarousel';

import imgIso from '../../../assets/certificates/ISO.png';
import imgApi from '../../../assets/certificates/API 6A FC002B.png';
import imgApi4G from '../../../assets/certificates/API 6A FC004G.png';
import imgApi5C from '../../../assets/certificates/API 6A FC005C.png';
import imgApi21A from '../../../assets/certificates/API 6A FC021A.png';
import imgNorsok from '../../../assets/certificates/NORSOK E1001.png';
import imgNorsok4 from '../../../assets/certificates/NORSOK E1004.png';
import imgBam from '../../../assets/certificates/BAM FC002B.png';
import imgBam5C from '../../../assets/certificates/BAM FC005C.png';
import imgQima from '../../../assets/certificates/QIMA.png';

const certImages = [
  { id: 1, url: imgIso, alt: "ISO 9001:2015 certification" },
  { id: 2, url: imgApi, alt: "API-6A certification FC002B" },
  { id: 3, url: imgApi4G, alt: "API-6A certification FC004G" },
  { id: 4, url: imgApi5C, alt: "API-6A certification FC005C" },
  { id: 5, url: imgApi21A, alt: "API-6A certification FC021A" },
  { id: 6, url: imgNorsok, alt: "NORSOK certification E1001" },
  { id: 7, url: imgNorsok4, alt: "NORSOK certification E1004" },
  { id: 8, url: imgBam, alt: "BAM certification FC002B" },
  { id: 9, url: imgBam5C, alt: "BAM certification FC005C" },
  { id: 10, url: imgQima, alt: "QIMA audited certification" }
];

const qualityProcess = [
  { step: '01', title: 'Material Selection', desc: 'Rigorous incoming inspection of raw polymers and metals against approved material specifications.' },
  { step: '02', title: 'Prototype & Testing', desc: 'Dimensional, mechanical and chemical testing of prototypes before production approval.' },
  { step: '03', title: 'Production Control', desc: 'In-process quality checks at each manufacturing stage — machining, moulding and finishing.' },
  { step: '04', title: 'Final Inspection', desc: 'Complete dimensional, visual and functional verification against customer drawings.' },
  { step: '05', title: 'Post-Delivery Support', desc: 'Field feedback loop and continuous improvement through corrective and preventive action.' },
];

export default function QualityPage() {
  useEffect(() => {
    document.title = 'Quality & Certification | Mithson Sealing Solutions';
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
            <span className="section-label">Quality</span>
            <h1 className="section-title">Quality & Certification</h1>
            <p className="section-subtitle">
              Certified to international standards — ISO 9001:2015, API-6A, NORSOK, BAM and QIMA audited.
            </p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      {/* Certs */}
      <section className="section">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <span className="section-label">Our Certifications</span>
            <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
              Internationally Recognised Standards
            </h2>
          </ScrollReveal>
          <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <CircularCarousel
              items={certImages}
              cardWidth={200}
              aspectRatio={1.45}
              speed={14}
              tilt={-5}
              perspective={2500}
              direction="left"
              gap={25}
            />
          </div>
        </div>
      </section>

      {/* Quality process */}
      <section className="section" style={{ background: 'var(--color-bg-2)' }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Quality Process</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>
              From Material to Delivery
            </h2>
          </ScrollReveal>
          <div className="quality-process-list">
            {qualityProcess.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="quality-step glass-card">
                  <div className="quality-step-num">{step.step}</div>
                  <div className="quality-step-content">
                    <h3 className="quality-step-title">{step.title}</h3>
                    <p className="quality-step-desc">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="section-title">Need Certificate Copies?</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 2rem', textAlign: 'center' }}>
              Contact us for certificate downloads, technical data sheets and material traceability records.
            </p>
            <Link to="/connect-with-us" className="btn btn-primary" id="quality-contact-cta">
              Request Documents
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .cert-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: var(--space-5);
        }
        .cert-page-card {
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          border-color: var(--color-border);
        }
        .cert-page-icon {
          font-size: 2rem;
          color: var(--color-accent);
        }
        .cert-page-name {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 800;
          color: var(--color-text);
          letter-spacing: 0.02em;
        }
        .quality-process-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        .quality-step {
          padding: var(--space-6) var(--space-8);
          border-radius: var(--radius-xl);
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: var(--space-6);
          align-items: center;
        }
        .quality-step-num {
          font-family: var(--font-display);
          font-size: var(--text-4xl);
          font-weight: 900;
          color: var(--color-accent);
          opacity: 0.4;
        }
        .quality-step-title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--space-2);
        }
        .quality-step-desc {
          font-size: var(--text-base);
          color: var(--color-text-2);
          line-height: 1.7;
        }
        @media (max-width: 640px) {
          .quality-step { grid-template-columns: 40px 1fr; }
          .quality-step-num { font-size: var(--text-2xl); }
        }
      `}</style>
    </div>
  );
}

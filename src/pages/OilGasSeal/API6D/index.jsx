import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OilGasSealTemplate from '../OilGasSealTemplate';
import AccordionGallery from '../../../shared/components/AccordionGallery';

import imgBodyBonnet from '../../../assets/api6d/Body-Bonnet Seal.png';
import imgSeatRetainer from '../../../assets/api6d/Seat Retainer.png';
import imgPeekSeatRing from '../../../assets/api6d/Peek Seat Ring.png';
import imgLngSeal from '../../../assets/api6d/LNG Seal.png';

const galleryItems = [
  { 
    image: imgBodyBonnet, 
    label: 'Body-Bonnet Seal', 
    desc: "In a Trunnion-mounted ball valve, the seal located between the valve body and the bonnet (or closure) serves as the primary pressure-containing seal. Its main function is to prevent internal fluid—whether liquid or gas—from escaping through the joint between the valve body and the bonnet or closure. This seal is capable of withstanding pressures up to 10,000 PSI.",
    materials: 'CFT, Elgiloy Spring',
    application: 'Trunnion Mount Ball Valve'
  },
  { 
    image: imgSeatRetainer, 
    label: 'Seat Retainer', 
    desc: "The seat retainer seal, a primary seal, is positioned between the seat retainer (or seat insert) and valve body to prevent process fluid leakage behind the valve seat. It ensures full flow containment through the ball-seat interface and maintains pressure integrity in Trunnion-mounted ball valves. A PEEK T-ring enhances support and energizing force, helping the PTFE lip maintain consistent sealing by compensating for cold flow and deformation under varying conditions. This seal is capable of withstanding pressures up to 10,000 PSI.",
    materials: 'PTFE, Elgiloy Spring, PEEK',
    application: 'Trunnion Mount Ball Valve'
  },
  { 
    image: imgPeekSeatRing, 
    label: 'Peek Seat Ring', 
    desc: "The seat ring in a ball valve is a key sealing component positioned between the valve ball and body. It creates a tight seal around the ball to allow or block flow. In trunnion-mounted designs, seat rings are typically spring-loaded or pressure-energized to maintain sealing even at low pressure. In floating ball valves, line pressure pushes the ball against the downstream seat ring, which acts as the primary sealing surface.",
    materials: 'PEEK',
    application: 'Trunnion Mount Ball Valve, Floating Ball Valve'
  },
  { 
    image: imgLngSeal, 
    label: 'LNG Seal', 
    desc: "Spring-energized seals are critical sealing elements used in Ball valves operating in LNG (Liquefied Natural Gas) applications. LNG processes involve cryogenic temperatures around –162°C (–260°F), requiring sealing systems that perform reliably under extreme cold, pressure variations, and thermal cycling—conditions where conventional elastomeric seals would fail.",
    materials: 'PTFE, Elgiloy Spring',
    application: 'Ball Valve'
  }
];

export default function API6DPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = galleryItems[activeIndex];

  const [isMobile, setIsMobile] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isMobile]);

  return (
    <OilGasSealTemplate
      title="API 6D Ball Valve & LNG Seal"
      subtitle="Gas transmission and cryogenic ball valve sealing — body-bonnet seals, PEEK seat rings and LNG seals for trunnion and floating ball valves."
      products={[]}
      label="Oil & Gas Seal"
      pageId="api6d"
    >
      <div style={{ marginBottom: '3rem', position: 'relative' }}>
        <AccordionGallery
          items={galleryItems}
          defaultIndex={0}
          expandRatio={0.52}
          trigger="hover"
          backgroundColor="#0336A3"
          accentColor="#42A4FF"
          overlayColor="#011b52"
          textColor="#ffffff"
          grayscale
          showLabels
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={460}
          gap={10}
          radius={16}
          orientation="horizontal"
          onActiveChange={setActiveIndex}
          renderOverlay={(item, i, isActive) => (
            <AnimatePresence>
              {isActive && isMobile && showToast && (
                <motion.div
                  initial={{ opacity: 0, y: -20, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: -20, x: '-50%' }}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '50%',
                    zIndex: 50,
                    background: 'rgba(0,0,0,0.8)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    pointerEvents: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Check the context below 👇
                </motion.div>
              )}
            </AnimatePresence>
          )}
        />
        
        <div style={{ marginTop: '2rem', minHeight: '200px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-card"
              style={{ padding: '2rem', borderRadius: '1rem' }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-blue-core)', marginBottom: '1rem' }}>
                {activeItem.label}
              </h3>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {activeItem.desc}
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>Material</h4>
                  <p style={{ fontWeight: 600, color: 'var(--color-text)' }}>{activeItem.materials}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>Application</h4>
                  <p style={{ fontWeight: 600, color: 'var(--color-text)' }}>{activeItem.application}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </OilGasSealTemplate>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OilGasSealTemplate from '../OilGasSealTemplate';
import AccordionGallery from '../../../shared/components/AccordionGallery';

import imgStemPacking from '../../../assets/api6a/Stem Packing Set.png';
import imgStemSeal from '../../../assets/api6a/Stem Seal.png';
import imgFaceSeal from '../../../assets/api6a/ID OD Seal.png';
import imgBopSeal from '../../../assets/api6a/BOP Seal.png';

const galleryItems = [
  { 
    image: imgStemPacking, 
    label: 'Stem Packing Set', 
    desc: "Engineered for reliability, our valve stem packing delivers exceptional sealing performance under pressure and across a wide temperature range. Crafted from premium materials that meet strict API standards, it's the trusted choice for demanding applications.",
    materials: 'PEEK, Elgiloy/SS steel, Filled PTFE',
    application: 'Wellhead Gate Valve'
  },
  { 
    image: imgStemSeal, 
    label: 'Stem Seal', 
    desc: "Spring-energized stem seals play a critical role in valve performance—securing internal fluids while blocking external contaminants. Designed for durability and precision, they are ideal for use in API 6A valves and API 6D ball valves, ensuring reliable sealing in high-demand environments.",
    materials: 'PEEK, Elgiloy/SS steel, Filled PTFE',
    application: 'Wellhead Gate Valve'
  },
  { 
    image: imgFaceSeal, 
    label: 'OD/ID Face Seal', 
    desc: "The OD/ID Face Seal for FLS Gate Valves is a spring-loaded lip seal designed to enhance the performance and service life of the gate and seat. Specifically used for the valve seat, it ensures reliable sealing under demanding conditions. The seal jacket is typically made of high-performance PEEK for superior durability, with a cost-effective alternative available in glass-filled PTFE. Typically, the ID and OD face seal of the valve seat are used together.",
    materials: 'PEEK, Elgiloy/SS steel, Filled PTFE',
    application: 'Wellhead Gate Valve'
  },
  { 
    image: imgBopSeal, 
    label: 'BOP Seal', 
    desc: "Outer BOP seals are critical components used in oil and gas wellhead blowout preventers (BOPs). They are designed to form a reliable seal around the drill pipe, effectively preventing oil and gas leaks and ensuring wellhead safety during drilling operations.",
    materials: 'NBR , HNBR',
    application: 'BOP (Blowout Preventers)'
  }
];

export default function API6APage() {
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
      title="API 6A Wellhead Equipment Seal"
      subtitle="High-pressure, sour-gas and HPHT wellhead sealing — stem packing sets, stem seals, OD/ID face seals and BOP seals manufactured to API 6A."
      products={[]}
      label="Oil & Gas Seal"
      pageId="api6a"
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

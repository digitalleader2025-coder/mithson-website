import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OilGasSealTemplate from '../OilGasSealTemplate';
import AccordionGallery from '../../../shared/components/AccordionGallery';

import imgUnifiedStack from '../../../assets/downhole/Unified Stack Seal.png';
import imgPacker from '../../../assets/downhole/Packer.png';
import imgRgdOring from '../../../assets/downhole/RGD O-Ring.png';
import imgPeekBackup from '../../../assets/downhole/Peek Back-Up Ring.png';

const galleryItems = [
  { 
    image: imgUnifiedStack, 
    label: 'Unified Stack Seal', 
    desc: "The unified bi-directional seal is a reliable and proven sealing solution, especially well-suited for extreme HPHT (High Pressure High Temperature) environments. Its compact design occupies less space compared to traditional seal stacks, while the mechanically locked configuration helps minimize installation errors. It is ideal for well tools such as sliding sleeves, which enable infinitely adjustable switching. This seal is capable of withstanding pressures up to 15,000 PSI.",
    materials: 'Filled PTFE, PEEK',
    application: 'Sliding Sleeves, Liner Hanger Seal'
  },
  { 
    image: imgPacker, 
    label: 'Packer', 
    desc: "Packer elements are flexible elastomeric components designed to create a seal between the outer diameter of the production tubing and the surrounding casing, liner, or wellbore. They are engineered to withstand harsh downhole environments and must deliver reliable zonal isolation to ensure the integrity and performance of oil and gas wells.",
    materials: 'NBR, HNBR, FKM',
    application: 'Line Hangers, Liners'
  },
  { 
    image: imgRgdOring, 
    label: 'RGD O-Ring', 
    desc: "Rapid Gas Decompression (RGD) O-rings are specialized seals engineered to resist the failure of elastomer materials caused by sudden pressure drops. To enhance RGD resistance, these O-rings are typically made from harder, high-modulus elastomer compounds that can better withstand the stresses associated with rapid decompression.",
    materials: 'HNBR, FKM, FFKM',
    application: 'Wellhead, Packers, BOP'
  },
  { 
    image: imgPeekBackup, 
    label: 'PEEK Back-up Ring', 
    desc: "PEEK back-up rings are utilized in subsurface safety valves (SSVs) as secondary sealing components, working in conjunction with primary seals such as O-rings. Their primary function is to prevent the extrusion of elastomeric seals under high-pressure and high-temperature conditions, thereby enhancing the seal integrity and reliability of the valve. These back-up rings are available in uncut, scarf-cut, and spiral-cut configurations.",
    materials: 'PEEK',
    application: 'Subsurface Safety Valve'
  }
];

export default function DownholePage() {
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
      title="Downhole Tool Seal"
      subtitle="Aggressive fluids, high temperature and deep-well pressure — unified stack seals, packers, RGD O-rings and PEEK back-up rings for demanding downhole environments."
      products={[]}
      label="Oil & Gas Seal"
      pageId="downhole"
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

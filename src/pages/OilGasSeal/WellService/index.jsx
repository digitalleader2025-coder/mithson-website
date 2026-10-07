import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OilGasSealTemplate from '../OilGasSealTemplate';
import AccordionGallery from '../../../shared/components/AccordionGallery';

import imgPlungerPacking from '../../../assets/wellservice/Plunger Packing Set.png';
import imgPumpPacking from '../../../assets/wellservice/Pump Packing Set.png';
import imgValveSeat from '../../../assets/wellservice/Valve Seat Insert.png';
import imgMudPumpLiner from '../../../assets/wellservice/Mud Pump Liner Seal.png';

const galleryItems = [
  { 
    image: imgPlungerPacking, 
    label: 'Plunger Packing Set', 
    desc: "A plunger pump packing set is a critical sealing assembly designed to prevent high-pressure fluid from leaking as the plunger reciprocates within the pump cylinder.",
    materials: 'Nitrile/Fabric (NBR, Buna-N), Viton (FKM)/Fabric, HNBR/Fabric',
    application: 'Plunger Pump'
  },
  { 
    image: imgPumpPacking, 
    label: 'Pump Packing Set', 
    desc: "Hydraulic fracturing (fracking) and cementing activities in the oilfield require high-pressure pumps, where effective sealing around the pump's plunger or piston is essential to prevent fluid leakage. High-performance well service pump packings are available in a wide range of materials to suit specific well conditions and operating parameters.",
    materials: 'NBR, HNBR, FKM, filled PTFE',
    application: 'Mud Pump, Frac Pump'
  },
  { 
    image: imgValveSeat, 
    label: 'Valve Seat Insert', 
    desc: "The valve insert seal is specifically designed to seal the valve seat in fracturing pumps. Manufactured from advanced, modified polyurethane, it offers outstanding resistance to extrusion, puncture, and fatigue—ensuring dependable performance across a wide range of demanding fracturing conditions.",
    materials: 'PU (Poly Urethane)',
    application: 'Mud Pump, Frac Pump'
  },
  { 
    image: imgMudPumpLiner, 
    label: 'Mud Pump Liner Seal', 
    desc: "A liner seal in a mud pump is a sealing component placed between the liner and the pump housing (fluid end module) to prevent drilling fluid (mud) from leaking around the outside of the liner. The most important part of a mud pump with the function of ensuring mud circulation is the piston. Without a functioning liner seal, mud can leak into unwanted areas, reducing efficiency and increasing wear.",
    materials: 'PU (Poly Urethane) , NBR , HNBR',
    application: 'Mud Pump'
  }
];

export default function WellServicePage() {
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
      title="Well Service Equipment Seal"
      subtitle="High-cycling, high-stress sealing for mud pumps, frac pumps and plunger pumps — plunger packing sets, pump packing, valve seat inserts and liner seals."
      products={[]}
      label="Oil & Gas Seal"
      pageId="well-service"
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

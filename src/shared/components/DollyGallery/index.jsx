import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './DollyGallery.css';

const DollyItem = ({ index, item, cameraPos, revealRange, itemWidth, aspectRatio, grayscale }) => {
  // Pure Z-axis depth (no X/Y scatter, perfectly centered tunnel)
  const itemZ = useTransform(cameraPos, (pos) => index - pos);
  
  // Scale and opacity mapped to depth
  const scale = useTransform(itemZ, [-0.5, 0, revealRange], [2, 1, 0.3]);
  const opacity = useTransform(itemZ, [-0.4, 0, 1, revealRange], [0, 1, 0.4, 0]);
  
  const blur = useTransform(itemZ, [-0.3, 0, revealRange], ['blur(5px)', 'blur(0px)', 'blur(8px)']);
  const zIndex = useTransform(itemZ, (z) => 100 - Math.round(z * 10));

  return (
    <motion.div
      className="dolly-gallery-item"
      style={{
        width: itemWidth,
        aspectRatio,
        scale,
        opacity,
        zIndex,
        filter: blur,
        backgroundColor: 'rgba(255, 255, 255, 0.95)', // Subtle background to allow slight peeking
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(11, 26, 48, 0.12)'
      }}
    >
      <img 
        src={item.url} 
        alt={item.alt} 
        style={{ 
          filter: `grayscale(${grayscale})`,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          padding: '4px', // Minimal padding so image is large and crisp
          borderRadius: '12px'
        }} 
      />
    </motion.div>
  );
};

export default function DollyGallery({
  items = [],
  infinite = false,
  itemWidth = 290,
  aspectRatio = 1.4500000000000002,
  revealRange = 2.2,
  grayscale = 0,
  autoScroll = 0,
  pauseOnHover = true,
  backgroundColor = "transparent",
  onIndexChange = () => {}
}) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end bottom"] // Ensure it finishes before leaving screen
  });

  const totalItems = items.length;

  // 0 to 0.85 maps to items. 0.85 to 1.0 is the final hold buffer for QIMA.
  const cameraPos = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [0, totalItems - 1, totalItems - 1]
  );

  useMotionValueEvent(cameraPos, "change", (latest) => {
    let activeIdx = Math.round(latest);
    if (activeIdx < 0) activeIdx = 0;
    if (activeIdx >= totalItems) activeIdx = totalItems - 1;
    onIndexChange(activeIdx);
  });

  return (
    <div 
      className="dolly-gallery-container" 
      ref={containerRef}
      style={{
        // Tighter scroll height so it feels like a section, not an endless page
        height: `${totalItems * 60}vh` 
      }}
    >
      <div className="dolly-gallery-sticky" style={{ backgroundColor }}>
        <div className="dolly-gallery-perspective">
           {items.map((item, i) => (
              <DollyItem 
                key={item.id || i} 
                index={i} 
                item={item} 
                cameraPos={cameraPos} 
                revealRange={revealRange}
                itemWidth={itemWidth}
                aspectRatio={aspectRatio}
                grayscale={grayscale}
              />
           ))}
        </div>
      </div>
    </div>
  );
}

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './DollyGallery.css';

const DollyItem = ({ index, item, cameraPos, revealRange, itemWidth, aspectRatio, grayscale, totalItems }) => {
  const isFinal = index === totalItems - 1;
  
  let targetX = 0;
  let targetY = 0;
  
  // Use vw/vh units for responsive scattering, so it works on mobile and desktop identically
  if (!isFinal) {
    // Left, Right, Center, Left, Right...
    const xPattern = ['-25vw', '25vw', '0vw', '-25vw', '25vw', '0vw', '-25vw', '25vw'];
    const yPattern = ['5vh', '-5vh', '0vh', '5vh', '-5vh', '0vh', '5vh', '-5vh'];
    targetX = xPattern[index % xPattern.length];
    targetY = yPattern[index % yPattern.length];
  }

  const itemZ = useTransform(cameraPos, (pos) => index - pos);
  
  const scale = useTransform(itemZ, [-0.5, 0, revealRange], [1.8, 1, 0.4]);
  const opacity = useTransform(itemZ, [-0.4, 0, 0.8, revealRange], [0, 1, 0.6, 0]);
  
  const baseDepthY = useTransform(itemZ, [-0.5, 0, revealRange], ['10vh', '0vh', '-10vh']);

  // We use string concatenation for responsive units!
  // Framer motion allows useTransform to return a string template!
  const x = useTransform(scale, (s) => `calc(${targetX} * ${s})`);
  const y = useTransform([scale, baseDepthY], ([s, depthY]) => `calc(calc(${targetY} * ${s}) + ${depthY})`);

  const blur = useTransform(itemZ, [-0.3, 0, revealRange], ['blur(10px)', 'blur(0px)', 'blur(10px)']);
  const zIndex = useTransform(itemZ, (z) => 100 - Math.round(z * 10));

  return (
    <motion.div
      className="dolly-gallery-item"
      style={{
        width: itemWidth,
        aspectRatio,
        scale,
        opacity,
        x,
        y,
        zIndex,
        filter: blur,
        backgroundColor: 'var(--color-bg)' // Ensure crisp edges and cover elements behind it if transparent
      }}
    >
      <img 
        src={item.url} 
        alt={item.alt} 
        style={{ 
          filter: `grayscale(${grayscale})`,
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Keep certificate undistorted!
          padding: '1rem',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(11, 26, 48, 0.08)'
        }} 
      />
    </motion.div>
  );
};

export default function DollyGallery({
  items = [],
  infinite = false,
  itemWidth = 290,
  aspectRatio = 1.45,
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
    offset: ["start start", "end end"]
  });

  const totalItems = items.length;

  // We want to hold the final image for a bit. 
  // Map the first 85% of the scroll to the items, and the last 15% to holding the last item.
  const cameraPos = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [0, totalItems - 1, totalItems - 1]
  );

  // Expose the active index back to the parent
  useMotionValueEvent(cameraPos, "change", (latest) => {
    let activeIdx = Math.round(latest);
    if (activeIdx < 0) activeIdx = 0;
    if (activeIdx >= totalItems) activeIdx = totalItems - 1;
    onIndexChange(activeIdx);
  });

  // Responsive padding/sizing handled by CSS class
  return (
    <div 
      className="dolly-gallery-container" 
      ref={containerRef}
      style={{
        // 100vh per item + 50vh for the final hold buffer
        height: `${totalItems * 100 + 50}vh`
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
                totalItems={totalItems}
              />
           ))}
        </div>
      </div>
    </div>
  );
}

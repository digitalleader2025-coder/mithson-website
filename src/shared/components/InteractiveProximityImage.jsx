import { useRef, useState, useEffect } from 'react';

export default function InteractiveProximityImage({ src, alt }) {
  const containerRef = useRef(null);
  const [proximity, setProximity] = useState(0);
  
  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }
          
          const rect = containerRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(e.clientX - centerX, 2) + 
            Math.pow(e.clientY - centerY, 2)
          );
          
          const maxDistance = 350; // Activation radius in pixels
          if (distance < maxDistance) {
            // Closer = higher value (0 to 1)
            // Use easing so it's not strictly linear
            const p = 1 - (distance / maxDistance);
            // Smooth step (easing)
            const easedP = p * p * (3 - 2 * p);
            setProximity(easedP);
          } else {
            setProximity(0);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Use proximity to calculate transform
  // max scale = 1.07
  const scale = 1 + (proximity * 0.07);
  // glow opacity = up to 0.7
  const glowOpacity = proximity * 0.7;
  const glowScale = 1 + (proximity * 0.2);

  return (
    <div 
      ref={containerRef}
      className="interactive-image-container"
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        perspective: '1200px',
        padding: '2rem', // Prevent collision when scaling
        zIndex: 1 // Keep below nav
      }}
    >
      {/* Glow behind */}
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(66, 164, 255, 0.5) 0%, rgba(66, 164, 255, 0) 65%)',
          opacity: glowOpacity,
          transform: `scale(${glowScale}) translateZ(-50px)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      {/* Image in front */}
      <img 
        src={src} 
        alt={alt}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '90%',
          height: 'auto',
          objectFit: 'contain',
          transform: `scale(${scale}) translateZ(${proximity * 30}px)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.1))',
          pointerEvents: 'none' // Let container capture mouse seamlessly
        }}
      />
    </div>
  );
}

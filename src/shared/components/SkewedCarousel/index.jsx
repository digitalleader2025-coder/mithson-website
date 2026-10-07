import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SkewedCarousel.css';

export default function SkewedCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length]);

  return (
    <div className="skewed-carousel-container">
      <div className="skewed-carousel-viewport">
        <div className="skewed-carousel-track">
          <AnimatePresence initial={false}>
            {items.map((item, index) => {
              // Calculate relative position to current index
              // Handling wrapping for an infinite feel or just bounded.
              // Since we want 2-3 cards on each side, we can calculate a circular distance.
              let diff = index - currentIndex;
              const half = Math.floor(items.length / 2);
              
              if (diff > half) diff -= items.length;
              if (diff < -half) diff += items.length;

              const isCenter = diff === 0;
              const isVisible = Math.abs(diff) <= 3; // Show center + 3 on each side

              if (!isVisible) return null;

              // Base styling values based on position
              let scale = 1;
              let rotateY = 0;
              let zIndex = 100 - Math.abs(diff);
              let opacity = 1;
              let xOffset = diff * 120; // Base spacing

              if (Math.abs(diff) === 1) {
                scale = 0.8;
                rotateY = diff > 0 ? -15 : 15;
                xOffset = diff * 160;
              } else if (Math.abs(diff) === 2) {
                scale = 0.65;
                rotateY = diff > 0 ? -20 : 20;
                xOffset = diff * 240;
                opacity = 0.8;
              } else if (Math.abs(diff) === 3) {
                scale = 0.5;
                rotateY = diff > 0 ? -25 : 25;
                xOffset = diff * 300;
                opacity = 0.4;
              }

              return (
                <motion.div
                  key={index}
                  className="skewed-carousel-card"
                  initial={false}
                  animate={{
                    x: xOffset,
                    scale: scale,
                    rotateY: rotateY,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    mass: 0.8
                  }}
                  onClick={() => goTo(index)}
                >
                  <div className="skewed-card-inner">
                    <img 
                      src={item.images[0]} 
                      alt={item.title} 
                      className="skewed-card-img"
                    />
                    <div className="skewed-card-glow" />
                  </div>
                  {isCenter && (
                    <motion.div 
                      className="skewed-card-title"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.title}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="skewed-carousel-controls">
        <button onClick={prev} className="skewed-carousel-btn" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div className="skewed-carousel-indicators">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`skewed-indicator ${idx === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button onClick={next} className="skewed-carousel-btn" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}

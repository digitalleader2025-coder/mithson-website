import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SkewedCarousel.css';

export default function SkewedCarousel({ items }) {
  const isInfinite = items.length > 4;

  // If we have fewer than 7 items BUT > 4, duplicate them to ensure we have enough "hidden" 
  // items in the back to prevent visible cross-screen jumping during infinite loop.
  const renderItems = isInfinite && items.length < 7 
    ? [...items, ...items, ...items]
    : items;

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (isInfinite) {
      setCurrentIndex((prev) => (prev + 1) % renderItems.length);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
    }
  };

  const prev = () => {
    if (isInfinite) {
      setCurrentIndex((prev) => (prev - 1 + renderItems.length) % renderItems.length);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const goTo = (idx) => {
    if (!isInfinite) {
      setCurrentIndex(idx);
      return;
    }
    const currentBase = currentIndex % items.length;
    let diff = idx - currentBase;
    
    if (diff > Math.floor(items.length / 2)) diff -= items.length;
    if (diff < -Math.floor(items.length / 2)) diff += items.length;
    
    let targetIndex = (currentIndex + diff) % renderItems.length;
    if (targetIndex < 0) targetIndex += renderItems.length;
    
    setCurrentIndex(targetIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [renderItems.length]);

  return (
    <div className="skewed-carousel-container">
      <div className="skewed-carousel-viewport">
        <div className="skewed-carousel-track">
          <AnimatePresence initial={false}>
            {renderItems.map((item, index) => {
              // Calculate relative position to current index
              // Handling wrapping for an infinite feel or just bounded.
              // Since we want 2-3 cards on each side, we can calculate a circular distance.
              let diff = index - currentIndex;
              
              if (isInfinite) {
                const half = Math.floor(renderItems.length / 2);
                if (diff > half) diff -= renderItems.length;
                if (diff < -half) diff += renderItems.length;
              }

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
                  onClick={() => goTo(index % items.length)}
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
                      initial={{ opacity: 0, x: "-50%", y: 10 }}
                      animate={{ opacity: 1, x: "-50%", y: 0 }}
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
        <button 
          onClick={prev} 
          className="skewed-carousel-btn" 
          disabled={!isInfinite && currentIndex === 0}
          style={{ opacity: !isInfinite && currentIndex === 0 ? 0.3 : 1, cursor: !isInfinite && currentIndex === 0 ? 'default' : 'pointer' }}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div className="skewed-carousel-indicators">
          {items.map((_, idx) => {
            const isActive = (currentIndex % items.length) === idx;
            return (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`skewed-indicator ${isActive ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

        <button 
          onClick={next} 
          className="skewed-carousel-btn" 
          disabled={!isInfinite && currentIndex === items.length - 1}
          style={{ opacity: !isInfinite && currentIndex === items.length - 1 ? 0.3 : 1, cursor: !isInfinite && currentIndex === items.length - 1 ? 'default' : 'pointer' }}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      {/* Active Item Details */}
      <AnimatePresence mode="wait">
        {renderItems[currentIndex]?.details && (
          <motion.div
            key={currentIndex}
            className="skewed-carousel-details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderItems[currentIndex].details}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

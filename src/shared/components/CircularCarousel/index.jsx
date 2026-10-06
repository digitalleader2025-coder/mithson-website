import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import './CircularCarousel.css';

export default function CircularCarousel({
  items = [],
  cardWidth = 216,
  aspectRatio = 1.45,
  speed = 14, // degrees per second
  tilt = -5,
  perspective = 2500,
  direction = 'left',
  pauseOnHover = true,
  draggable = true,
  gap = 25
}) {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const totalItems = items.length;
  // Calculate radius based on card width and gap so they form a perfect cylinder
  const radius = Math.max((cardWidth + gap) * totalItems / (2 * Math.PI), 250);

  // Speed is deg/sec. We map it to framer motion's delta.
  const speedFactor = direction === 'left' ? -speed : speed;

  useAnimationFrame((t, delta) => {
    if ((pauseOnHover && isHovered) || isDragging) return;
    // Delta is in ms. Convert to seconds.
    const deltaSeconds = delta / 1000;
    setRotation((prev) => prev + (speedFactor * deltaSeconds));
  });

  return (
    <div 
      className="circular-carousel-scene" 
      style={{ perspective: `${perspective}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="circular-carousel-cylinder"
        ref={containerRef}
        style={{
          rotateX: tilt,
          rotateY: rotation,
          transformStyle: 'preserve-3d'
        }}
        onPanStart={() => {
          if (draggable) setIsDragging(true);
        }}
        onPanEnd={() => {
          if (draggable) setIsDragging(false);
        }}
        onPan={(event, info) => {
          if (draggable) {
            setRotation((prev) => prev + info.delta.x * 0.5);
          }
        }}
      >
        {items.map((item, i) => {
          const angle = (360 / totalItems) * i;
          return (
              <div 
              key={item.id || i}
              className="circular-carousel-item"
              style={{
                width: `${cardWidth}px`,
                aspectRatio,
                transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(11, 26, 48, 0.12)'
              }}
            >
              <img 
                src={item.url || item.src} 
                alt={item.alt || ''} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '4px',
                  borderRadius: '12px',
                  pointerEvents: 'none' // Prevent drag interfering with image drag
                }}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

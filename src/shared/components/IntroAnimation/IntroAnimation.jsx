import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logoImage from '../../../../images/mithson-logo/Mithson-logo.png';
import './IntroAnimation.css';

export default function IntroAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetRect, setTargetRect] = useState(null);
  const [stage, setStage] = useState('initial'); 
  
  useEffect(() => {
    // Check if animation should play this session
    const hasPlayed = sessionStorage.getItem('mithsonIntroPlayed');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!hasPlayed && !prefersReduced) {
      setIsPlaying(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling during intro
      
      // Allow DOM to settle before measuring target navigation logo
      setTimeout(() => {
        const targetLogo = document.querySelector('.navbar-logo .logo-image');
        if (targetLogo) {
          setTargetRect(targetLogo.getBoundingClientRect());
        }
      }, 50);
    } else {
      sessionStorage.setItem('mithsonIntroPlayed', 'true');
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    // 0.00s: Start appearance (stage handled by initial -> appearing)
    setStage('appearing');
    
    // 1.05s: Hold ends, start moving to top-left
    const t1 = setTimeout(() => {
      setStage('moving');
    }, 1050); 
    
    // 2.30s: Done, hand off to real website
    const t2 = setTimeout(() => {
      setStage('done');
      setIsPlaying(false);
      sessionStorage.setItem('mithsonIntroPlayed', 'true');
      document.body.style.overflow = '';
    }, 2300);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  }, [isPlaying]);

  if (!isPlaying || stage === 'done') return null;

  let finalX = 0;
  let finalY = 0;
  let finalScale = 1;
  
  // Set a responsive center width so it's not too big on mobile
  const isMobile = window.innerWidth < 768;
  const centerWidth = isMobile ? window.innerWidth * 0.6 : 320; 
  
  if (targetRect) {
    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;
    
    // Exact center of the target logo in the DOM
    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;
    
    // Distance to move from center
    finalX = targetCenterX - windowCenterX;
    finalY = targetCenterY - windowCenterY;
    
    // Scale down exactly to the target's width
    finalScale = targetRect.width / centerWidth;
  }

  // Define Framer Motion animation states
  const logoVariants = {
    initial: { opacity: 0, scale: 0.94, x: 0, y: 0 },
    appearing: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" } 
    },
    moving: { 
      opacity: 1, 
      scale: finalScale, 
      x: finalX, 
      y: finalY,
      // Premium cinematic easing for the move
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const overlayVariants = {
    initial: { opacity: 1 },
    appearing: { opacity: 1 },
    moving: { 
      opacity: 0,
      // Fades out between 1.30s and 2.30s
      transition: { duration: 1.0, delay: 0.25, ease: "easeInOut" } 
    }
  };

  return (
    <>
      <motion.div 
        className="intro-overlay"
        variants={overlayVariants}
        initial="initial"
        animate={stage}
      />
      
      <div className="intro-logo-container">
        <motion.img
          src={logoImage}
          alt="Mithson"
          className="intro-logo-img"
          style={{ width: centerWidth }}
          variants={logoVariants}
          initial="initial"
          animate={stage}
        />
      </div>
    </>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import StaggeredText from '../StaggeredText';
import './OurJourney.css';

import Img1996 from '../../../assets/history/FCS.png';
import Img2000s from '../../../assets/history/SpringEnergized.png';
import Img2010s from '../../../assets/history/Certifications.png';
import ImgToday from '../../../assets/history/Mithson.png';

const journeyData = [
  {
    year: "1996",
    title: "Fluoro Carbon Seals",
    description: "Founded in Chennai, beginning with high-performance PTFE components for specialized engineering.",
    image: Img1996
  },
  {
    year: "2000s",
    title: "Elastomers & Thermoplastics",
    description: "Expanded into elastomers and thermoplastics, significantly growing our presence in the Oil & Gas sector.",
    image: Img2000s
  },
  {
    year: "2010s",
    title: "Global Standards",
    description: "Achieved major industry certifications (API, ISO, QIMA) and successfully entered global markets.",
    image: Img2010s
  },
  {
    year: "Today",
    title: "Mithson Sealing Solutions",
    description: "Over two decades of polymer engineering expertise serving the world's most demanding industries.",
    image: ImgToday
  }
];

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);

  // Framer Motion for the continuous blue timeline progress
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the progress bar a little
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Derive active index directly from scroll progress
    const unsubscribe = smoothProgress.on("change", (v) => {
      // 4 items -> thresholds at roughly 0.15, 0.4, 0.65, 0.9
      let idx = 0;
      if (v > 0.2) idx = 1;
      if (v > 0.5) idx = 2;
      if (v > 0.8) idx = 3;
      
      setActiveIndex(idx);
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  // Preload images
  useEffect(() => {
    journeyData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  return (
    <section className="our-journey-section">
      <div className="our-journey-scroll-wrapper" ref={wrapperRef}>
        <div className="our-journey-container">
          
          {/* LEFT COLUMN: Timeline */}
          <div className="journey-left">
            <div className="journey-header">
              <span className="journey-eyebrow">HISTORY</span>
              <h2 className="journey-heading">Our Journey</h2>
            </div>

            <div className="journey-timeline">
              <div className="timeline-track-container">
                <div className="timeline-track-bg" />
                <motion.div 
                  className="timeline-track-progress" 
                  style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
                />
              </div>

              <div className="timeline-items">
                {journeyData.map((item, index) => {
                  const isActive = activeIndex === index;
                  const isCompleted = index < activeIndex;

                  return (
                    <div 
                      key={index} 
                      className="milestone-block"
                    >
                    <div className={`milestone-dot ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`} />
                    
                    <div className="milestone-content">
                      <h3 className={`milestone-year ${isActive || isCompleted ? 'highlight' : ''}`}>
                        {item.year}
                      </h3>
                      
                      <div className="milestone-text-area">
                        {isActive ? (
                          <>
                            <h4 className="milestone-title active">
                              <StaggeredText text={item.title} staggerDelay={0.03} />
                            </h4>
                            <p className="milestone-desc active">
                              <StaggeredText text={item.description} staggerDelay={0.015} />
                            </p>
                          </>
                        ) : (
                          <>
                            <h4 className={`milestone-title ${isCompleted ? 'completed' : 'inactive'}`}>
                              {item.title}
                            </h4>
                            <p className={`milestone-desc ${isCompleted ? 'completed' : 'inactive'}`}>
                              {item.description}
                            </p>
                          </>
                        )}
                      </div>

                      {/* Mobile Inline Image */}
                      <div className={`milestone-mobile-image ${isActive || isCompleted ? 'visible' : ''}`}>
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Image (Desktop) / Inline Image (Mobile handled by CSS) */}
        <div className="journey-right">
          <div className="journey-image-frame">
            {journeyData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`journey-image-wrapper ${isActive ? 'visible' : 'hidden'}`}
                >
                  <img 
                    src={item.image} 
                    alt={`Mithson History - ${item.title}`}
                    className="journey-image"
                  />
                </div>
              );
            })}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}

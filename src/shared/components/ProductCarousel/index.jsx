import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../../content/products';
import './ProductCarousel.css';

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds auto-play
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="product-carousel-section" aria-labelledby="carousel-title">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title" id="carousel-title">
            Featured Products
          </h2>
        </div>

        <div className="product-carousel-container">
          <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous Product">
            &#10094;
          </button>
          
          <div className="carousel-track">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="carousel-slide glass-card"
              >
                <div className="carousel-visual">
                  {currentProduct.image ? (
                    <img src={currentProduct.image} alt={currentProduct.name} className="carousel-image" />
                  ) : (
                    <div className="carousel-placeholder">
                      <div className="gallery-card-shape lightbox-shape" />
                      <div className="gallery-card-shape gallery-card-shape--2 lightbox-shape" />
                    </div>
                  )}
                </div>
                <div className="carousel-info">
                  <h3 className="carousel-product-name">{currentProduct.name}</h3>
                  <p className="carousel-tagline">{currentProduct.tagline}</p>
                  
                  <div className="carousel-materials">
                    {currentProduct.materials?.map((m) => (
                      <span key={m} className="material-mini-chip">{m}</span>
                    ))}
                  </div>

                  <p className="carousel-desc">{currentProduct.shortDescription}</p>
                  
                  <Link to={currentProduct.path} className="btn btn-primary carousel-view-btn">
                    View Product
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next Product">
            &#10095;
          </button>
        </div>
        
        <div className="carousel-dots">
          {products.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

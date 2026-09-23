import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../../shared/components/ScrollReveal';
import { galleryItems, galleryCategories } from '../../content/gallery';
import './ProductGallery.css';

export default function ProductGalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.title = 'Product Gallery | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Gallery</span>
            <h1 className="section-title">Product Gallery</h1>
            <p className="section-subtitle">
              {galleryItems.length}+ precision polymer products — seals, bearings, nozzles and more.
            </p>
          </motion.div>
        </div>
        <div className="page-hero-bg" aria-hidden="true"><div className="hero-grid" /></div>
      </section>

      {/* Filter bar */}
      <section className="gallery-filter-bar" aria-label="Filter gallery by category">
        <div className="container gallery-filter-inner">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn${activeCategory === cat ? ' gallery-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section gallery-section">
        <div className="container">
          <motion.div
            className="gallery-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.button
                  key={item.id}
                  className="gallery-card glass-card"
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(item)}
                  aria-label={`View ${item.label}`}
                  id={`gallery-item-${item.id}`}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  {/* Placeholder or Image visual */}
                  <div className="gallery-card-visual" aria-hidden="true" style={{ overflow: 'hidden' }}>
                    {item.image ? (
                      <img src={item.image} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      <>
                        <div className="gallery-card-shape" />
                        <div className="gallery-card-shape gallery-card-shape--2" />
                      </>
                    )}
                  </div>
                  <div className="gallery-card-label">{item.label}</div>
                  <div className="gallery-card-cat">{item.category}</div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--color-muted)', padding: '3rem' }}>
              No items in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.label}
          >
            <motion.div
              className="lightbox-card glass-card"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close"
                id="gallery-lightbox-close"
              >
                ✕
              </button>
              <div className="lightbox-visual" aria-hidden="true" style={{ overflow: 'hidden' }}>
                {lightbox.image ? (
                  <img src={lightbox.image} alt={lightbox.label} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <>
                    <div className="gallery-card-shape lightbox-shape" />
                    <div className="gallery-card-shape gallery-card-shape--2 lightbox-shape" />
                  </>
                )}
              </div>
              <div className="lightbox-info">
                <span className="badge badge-blue" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
                  {lightbox.category}
                </span>
                <h2 className="lightbox-title">{lightbox.label}</h2>
                <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', marginTop: '1rem', lineHeight: 1.6 }}>
                  High-performance polymer component. Contact us for technical specifications,
                  material options and custom dimensions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

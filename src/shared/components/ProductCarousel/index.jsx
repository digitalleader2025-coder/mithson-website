import { useState, useEffect, useRef, useCallback, useId } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../../content/products';
import ProductSpecList from '../ProductSpecList';
import './ProductCarousel.css';

// Crisp category & 1-line overview metadata for each product
const PRODUCT_METADATA = {
  'mith-plate': {
    category: 'COMPRESSOR VALVES',
    overview: '70% lighter than steel with superior micro-sealing precision.',
    badge: '70% Lighter',
  },
  'm-uni-seal': {
    category: 'SPRING-ENERGIZED SEALS',
    overview: 'Pressure-assisted PTFE seal with corrosion-resistant metal energizer.',
    badge: 'High Pressure',
  },
  'hammer-union-seal': {
    category: 'OILFIELD CONNECTIONS',
    overview: 'Leak-proof elastomeric & PTFE seals for extreme flow lines.',
    badge: 'High Temp',
  },
  'seals-x-mas-tree': {
    category: 'WELLHEAD & GATE VALVES',
    overview: 'API 6A compliant sealing engineered for extreme Christmas Tree conditions.',
    badge: 'API 6A',
  },
  'seals-valve': {
    category: 'INDUSTRIAL VALVES',
    overview: 'High-performance PTFE and PEEK solutions for all valve types.',
    badge: 'PTFE & PEEK',
  },
  'plug-lined-valve': {
    category: 'PLUG VALVES & SLEEVES',
    overview: 'Bubble-tight bi-directional sealing with low torque operation.',
    badge: 'Bubble-Tight',
  },
  'uni-lube-bearing': {
    category: 'SELF-LUBRICATING BEARINGS',
    overview: 'Maintenance-free dry lubrication reducing friction and wear.',
    badge: 'Self-Lube',
  },
  'seals-hydraulic': {
    category: 'HYDRAULIC CYLINDERS',
    overview: 'Wear rings, piston, rod, and wiper seals for extreme hydraulics.',
    badge: 'Heavy-Duty',
  },
  'diaphragm-aodd': {
    category: 'AODD PUMP COMPONENTS',
    overview: 'Chemical-resistant fluoropolymer diaphragms, balls, and seats.',
    badge: 'Pure PTFE',
  },
  'washers-transmission': {
    category: 'AUTOMATIC TRANSMISSIONS',
    overview: 'Carbon-filled PEEK thrust washers rated for continuous 250°C.',
    badge: 'Up to 250°C',
  },
  'nozzles-power-grid': {
    category: 'HIGH-VOLTAGE SWITCHGEAR',
    overview: 'Thermal & electrical stress-resistant arc-quenching PTFE nozzles.',
    badge: 'CIP Formed',
  },
  'encapsulated-o-ring': {
    category: 'ENCAPSULATED SEALS',
    overview: 'Seamless chemical-resistant FEP jacket over flexible elastomeric core.',
    badge: 'FEP / Viton',
  },
};

function Arrow({ direction = 'right', size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transform: direction === 'left' ? 'rotate(180deg)' : undefined,
        flexShrink: 0,
      }}
    >
      <path
        d="M4 12h15M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function resolveProductImage(prod) {
  if (prod.carouselImage) {
    return Array.isArray(prod.carouselImage) ? prod.carouselImage[0] : prod.carouselImage;
  }
  if (prod.image) {
    return Array.isArray(prod.image) ? prod.image[0] : prod.image;
  }
  return null;
}

export default function ProductCarousel() {
  const railRef = useRef(null);
  const dragRef = useRef(null);
  const suppressClickUntil = useRef(0);
  const animFrameRef = useRef(null);
  const smoothGlideRef = useRef(null);

  // Cached layout metrics to prevent layout reflows during scroll
  const stepRef = useRef(0);
  const maxScrollRef = useRef(0);
  const currentIndexRef = useRef(0);

  // Direct DOM refs for 60fps progress bar & counter without React re-renders
  const progressFillRef = useRef(null);
  const counterIndexRef = useRef(null);

  // React state ONLY for button disabled states (only updates at ends, not during scroll)
  const [navState, setNavState] = useState({ canPrev: false, canNext: true });

  const railId = useId();
  const headingId = useId();

  // Pure arithmetic UI update — 0 DOM reads, 0 React re-renders, 60-120 FPS
  const updateUI = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const max = maxScrollRef.current;
    const pos = Math.max(0, Math.min(max, rail.scrollLeft));
    const step = stepRef.current || 300;

    const idx = Math.min(
      products.length - 1,
      Math.max(0, Math.round(pos / step))
    );

    if (currentIndexRef.current !== idx) {
      currentIndexRef.current = idx;
      if (counterIndexRef.current) {
        counterIndexRef.current.textContent = String(idx + 1).padStart(2, '0');
      }
    }

    if (progressFillRef.current) {
      const progress = max > 1 ? pos / max : 0;
      const scale = 0.12 + progress * 0.88;
      progressFillRef.current.style.transform = `scaleX(${scale})`;
    }
  }, []);

  // Sync button disabled states only when boundary values actually change
  const syncNavState = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const pos = rail.scrollLeft;
    const max = maxScrollRef.current;
    const canPrev = pos > 4;
    const canNext = pos < max - 4;

    setNavState((prev) => {
      if (prev.canPrev === canPrev && prev.canNext === canNext) return prev;
      return { canPrev, canNext };
    });
  }, []);

  // Re-measure container geometry only on resize or mount (NOT on scroll!)
  const measureGeometry = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const max = Math.max(0, rail.scrollWidth - rail.clientWidth);
    maxScrollRef.current = max;

    const cards = rail.children;
    if (cards.length > 0) {
      const firstCard = cards[0];
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap =
        cards.length > 1
          ? cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().right
          : 20;
      stepRef.current = cardWidth + gap;
    }

    updateUI();
    syncNavState();
  }, [updateUI, syncNavState]);

  // Set up listeners for scrolling and resizing
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    measureGeometry();

    const onScroll = () => {
      if (animFrameRef.current !== null) return;
      animFrameRef.current = requestAnimationFrame(() => {
        animFrameRef.current = null;
        updateUI();
        syncNavState();
      });
    };

    rail.addEventListener('scroll', onScroll, { passive: true });

    const observer = new ResizeObserver(() => {
      measureGeometry();
    });
    observer.observe(rail);

    return () => {
      rail.removeEventListener('scroll', onScroll);
      observer.disconnect();
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (smoothGlideRef.current !== null) {
        cancelAnimationFrame(smoothGlideRef.current);
      }
    };
  }, [measureGeometry, updateUI, syncNavState]);

  // Hardware-accelerated, mathematical smooth scroll (avoids scroll-snap conflict)
  const smoothScrollTo = useCallback(
    (targetLeft, duration = 380) => {
      const rail = railRef.current;
      if (!rail) return;

      if (smoothGlideRef.current !== null) {
        cancelAnimationFrame(smoothGlideRef.current);
      }

      const max = maxScrollRef.current;
      const clampedTarget = Math.max(0, Math.min(max, targetLeft));
      const startLeft = rail.scrollLeft;
      const distance = clampedTarget - startLeft;

      if (Math.abs(distance) < 2) return;

      // Temporarily disable CSS scroll-snap so browser doesn't stutter or fight easing
      rail.style.scrollSnapType = 'none';

      const startTime = performance.now();

      // Fluid cubic ease-out curve (same spring-feel as iOS / Framer)
      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = easeOutCubic(progress);

        rail.scrollLeft = startLeft + distance * ease;
        updateUI();

        if (progress < 1) {
          smoothGlideRef.current = requestAnimationFrame(step);
        } else {
          rail.scrollLeft = clampedTarget;
          // Re-enable snapping when glide completes
          rail.style.removeProperty('scroll-snap-type');
          smoothGlideRef.current = null;
          updateUI();
          syncNavState();
        }
      }

      smoothGlideRef.current = requestAnimationFrame(step);
    },
    [updateUI, syncNavState]
  );

  // Move carousel by exactly 1 card step
  function move(direction) {
    const rail = railRef.current;
    if (!rail) return;

    const step = stepRef.current || (rail.clientWidth / 3);
    const current = rail.scrollLeft;
    const currentIdx = Math.round(current / step);
    const nextIdx = Math.min(products.length - 1, Math.max(0, currentIdx + direction));
    const target = nextIdx * step;

    smoothScrollTo(target, 360);
  }

  // Keyboard navigation
  function onKeyDown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      smoothScrollTo(0, 320);
    } else if (event.key === 'End') {
      event.preventDefault();
      smoothScrollTo(maxScrollRef.current, 320);
    }
  }

  // Butter-smooth mouse drag with momentum snap
  function onPointerDown(event) {
    if (event.pointerType !== 'mouse' || event.button !== 0 || !event.isPrimary) return;
    const rail = event.currentTarget;
    if (rail.scrollWidth <= rail.clientWidth + 2) return;

    if (smoothGlideRef.current !== null) {
      cancelAnimationFrame(smoothGlideRef.current);
      smoothGlideRef.current = null;
      rail.style.removeProperty('scroll-snap-type');
    }

    dragRef.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: rail.scrollLeft,
      lastX: event.clientX,
      velocity: 0,
      active: false,
    };
  }

  function onPointerMove(event) {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;

    if (!drag.active) {
      if (Math.abs(deltaX) < 6) return;
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        dragRef.current = null;
        return;
      }
      drag.active = true;
      const rail = event.currentTarget;
      rail.dataset.dragging = 'true';
      rail.style.scrollSnapType = 'none';
      rail.setPointerCapture(event.pointerId);
    }

    drag.velocity = event.clientX - drag.lastX;
    drag.lastX = event.clientX;

    event.preventDefault();
    event.currentTarget.scrollLeft = drag.scrollLeft - deltaX;
    updateUI();
  }

  function finishDrag(event) {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    const rail = event.currentTarget;

    if (drag.active) {
      suppressClickUntil.current = Date.now() + 350;

      // Inertial snap to nearest card with velocity consideration
      const step = stepRef.current || 300;
      const current = rail.scrollLeft;
      let targetIdx = Math.round(current / step);

      if (drag.velocity < -8) {
        targetIdx = Math.ceil(current / step);
      } else if (drag.velocity > 8) {
        targetIdx = Math.floor(current / step);
      }

      targetIdx = Math.min(products.length - 1, Math.max(0, targetIdx));
      smoothScrollTo(targetIdx * step, 300);
    }

    dragRef.current = null;
    delete rail.dataset.dragging;
    if (rail.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
  }

  function onCardClick(event) {
    if (Date.now() < suppressClickUntil.current) {
      event.preventDefault();
    }
  }

  return (
    <section className="product-carousel-section" aria-labelledby={headingId}>
      <div className="container">
        {/* Header with Title on Left & Controls on Right */}
        <div className="os-header">
          <div className="os-header-copy">
            <span className="os-eyebrow">Our Portfolio</span>
            <h2 id={headingId} className="os-heading">
              Featured Products
            </h2>
          </div>

          <div className="os-header-actions">
            <Link to="/products" className="os-view-all">
              Explore All Products
              <Arrow size={16} />
            </Link>

            <div className="os-navigation">
              <button
                type="button"
                className="os-nav-button"
                aria-label="Previous products"
                aria-controls={railId}
                disabled={!navState.canPrev}
                onClick={() => move(-1)}
              >
                <Arrow direction="left" size={19} />
              </button>
              <button
                type="button"
                className="os-nav-button"
                aria-label="Next products"
                aria-controls={railId}
                disabled={!navState.canNext}
                onClick={() => move(1)}
              >
                <Arrow direction="right" size={19} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Rail — Equal Sized Cards */}
        <div
          id={railId}
          ref={railRef}
          className="os-rail"
          tabIndex={0}
          role="region"
          aria-label="Featured Products Carousel"
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onLostPointerCapture={finishDrag}
        >
          {products.map((product, index) => {
            const meta = PRODUCT_METADATA[product.slug] || {};
            const category = meta.category || product.applications?.[0] || 'ENGINEERED POLYMERS';
            const overview = meta.overview || product.tagline || product.summary;
            const badge = meta.badge || product.materials?.[0] || '';
            const imgSrc = resolveProductImage(product);

            return (
              <Link
                key={product.slug || index}
                to={product.path}
                className="os-card"
                draggable={false}
                onClick={onCardClick}
              >
                <div className="os-media">
                  <div className="os-image-layer">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={product.name}
                        loading={index < 3 ? 'eager' : 'lazy'}
                        decoding="async"
                        draggable={false}
                      />
                    ) : (
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{product.name}</span>
                    )}
                  </div>

                  {badge && <span className="os-badge">{badge}</span>}

                  <span className="os-action" aria-hidden="true">
                    <span className="os-action-label">Explore Product</span>
                    <Arrow size={16} />
                  </span>
                </div>

                <div className="os-info">
                  <div className="os-category">{category}</div>
                  <div className="os-title-row">
                    <h3 className="os-product-title">{product.name}</h3>
                  </div>
                  <p className="os-detail">{overview}</p>
                  <ProductSpecList product={product} variant="compact" />
                  <div className="os-meta">
                    <span className="os-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="os-small-arrow" aria-hidden="true">
                      <Arrow size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer: Progress Line & Counter */}
        <div className="os-footer">
          <div className="os-progress" aria-hidden="true">
            <div
              ref={progressFillRef}
              className="os-progress-fill"
              style={{ transform: 'scaleX(0.12)' }}
            />
          </div>
          <div className="os-counter" aria-hidden="true">
            <strong ref={counterIndexRef}>01</strong> /{' '}
            {String(products.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
}

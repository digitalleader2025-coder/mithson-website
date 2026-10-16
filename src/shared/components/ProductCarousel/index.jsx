import { useState, useEffect, useRef, useCallback, useId } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../../content/products';
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

const initialRail = {
  index: 0,
  progress: 0,
  canPrevious: false,
  canNext: true,
};

export default function ProductCarousel() {
  const railRef = useRef(null);
  const dragRef = useRef(null);
  const suppressClickUntil = useRef(0);
  const animationFrame = useRef(null);
  const [railState, setRailState] = useState(initialRail);

  const railId = useId();
  const headingId = useId();

  // Measure rail position and progress
  const measureRail = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const position = Math.max(0, Math.min(maxScroll, rail.scrollLeft));
    const cards = Array.from(rail.children);
    if (!cards.length) return;

    const railRect = rail.getBoundingClientRect();
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const distance = Math.abs(cardRect.left - railRect.left);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    const next = {
      index: nearestIndex,
      progress: maxScroll > 1 ? position / maxScroll : 0,
      canPrevious: position > 4,
      canNext: position < maxScroll - 4,
    };

    setRailState((prev) => {
      if (
        prev.index === next.index &&
        prev.canPrevious === next.canPrevious &&
        prev.canNext === next.canNext &&
        Math.abs(prev.progress - next.progress) < 0.001
      ) {
        return prev;
      }
      return next;
    });
  }, []);

  // Set up listeners for scrolling and resizing
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    measureRail();

    const scheduleMeasure = () => {
      if (animationFrame.current !== null) return;
      animationFrame.current = requestAnimationFrame(() => {
        animationFrame.current = null;
        measureRail();
      });
    };

    rail.addEventListener('scroll', scheduleMeasure, { passive: true });
    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(rail);
    Array.from(rail.children).forEach((card) => {
      observer.observe(card);
    });

    return () => {
      rail.removeEventListener('scroll', scheduleMeasure);
      observer.disconnect();
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };
  }, [measureRail]);

  // Smoothly move by 1 card step
  function move(direction) {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.children);
    if (!cards.length) return;

    const firstCard = cards[0];
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap =
      cards.length > 1
        ? cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().right
        : 20;
    const scrollStep = cardWidth + gap;

    rail.scrollBy({ left: direction * scrollStep, behavior: 'smooth' });
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
      railRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (event.key === 'End') {
      event.preventDefault();
      if (railRef.current) {
        railRef.current.scrollTo({ left: railRef.current.scrollWidth, behavior: 'smooth' });
      }
    }
  }

  // Mouse drag support with click suppression on drag release
  function onPointerDown(event) {
    if (event.pointerType !== 'mouse' || event.button !== 0 || !event.isPrimary) return;
    const rail = event.currentTarget;
    if (rail.scrollWidth <= rail.clientWidth + 2) return;
    dragRef.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: rail.scrollLeft,
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

    event.preventDefault();
    event.currentTarget.scrollLeft = drag.scrollLeft - deltaX;
  }

  function finishDrag(event) {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    const rail = event.currentTarget;
    if (drag.active) {
      suppressClickUntil.current = Date.now() + 350;
    }
    dragRef.current = null;
    delete rail.dataset.dragging;
    rail.style.removeProperty('scroll-snap-type');
    if (rail.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
    measureRail();
  }

  function onCardClick(event) {
    if (Date.now() < suppressClickUntil.current) {
      event.preventDefault();
    }
  }

  return (
    <section className="product-carousel-section" aria-labelledby={headingId}>
      <div className="container">
        {/* Header with Title on Left & Arrow Buttons on Top Right */}
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
                disabled={!railState.canPrevious}
                onClick={() => move(-1)}
              >
                <Arrow direction="left" size={19} />
              </button>
              <button
                type="button"
                className="os-nav-button"
                aria-label="Next products"
                aria-controls={railId}
                disabled={!railState.canNext}
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
              className="os-progress-fill"
              style={{
                transform: `scaleX(${
                  railState.canNext || railState.canPrevious
                    ? 0.12 + railState.progress * 0.88
                    : 1
                })`,
              }}
            />
          </div>
          <div className="os-counter" aria-hidden="true">
            <strong>{String(railState.index + 1).padStart(2, '0')}</strong> /{' '}
            {String(products.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
}

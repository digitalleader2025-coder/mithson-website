import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { gsap } from 'gsap';
import './HyperiuxDimensionalSwitch.css';

const DEFAULT_EASE = 'cubic-bezier(1, -0.001, 0.159, 0.838)';
const CUBIC_BEZIER_RE = /^cubic-bezier\(\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)$/;

function cubicBezier(x1, y1, x2, y2) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;
  const slopeX = (t) => (3 * ax * t + 2 * bx) * t + cx;

  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i += 1) {
      const err = sampleX(t) - x;
      if (Math.abs(err) < 1e-6) return sampleY(t);
      const d = slopeX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= err / d;
    }
    let lo = 0;
    let hi = 1;
    t = x;
    for (let i = 0; i < 40; i += 1) {
      const v = sampleX(t);
      if (Math.abs(v - x) < 1e-6) break;
      if (x > v) lo = t;
      else hi = t;
      t = (lo + hi) / 2;
    }
    return sampleY(t);
  };
}

const easeCache = new Map();
function resolveEase(ease) {
  const cached = easeCache.get(ease);
  if (cached) return cached;
  const match = ease?.match?.(CUBIC_BEZIER_RE);
  const resolved = match
    ? cubicBezier(Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4]))
    : ease || DEFAULT_EASE;
  easeCache.set(ease, resolved);
  return resolved;
}

const EASE = 'power4.inOut';
const DURATION = 0.9;
const TEXT_TRANSLATE_PERCENT = 40;
const TEXT_ROTATE_DEG = 45;
const OUTGOING_DURATION = DURATION * 0.45;
const TEXT_Z = 60;

const preloadedCache = new Set();

function preloadImage(src) {
  if (!src || preloadedCache.has(src)) return Promise.resolve();
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    if (img.complete) {
      preloadedCache.add(src);
      if (typeof img.decode === 'function') {
        img.decode().then(resolve).catch(resolve);
      } else {
        resolve();
      }
    } else {
      img.onload = () => {
        preloadedCache.add(src);
        if (typeof img.decode === 'function') {
          img.decode().then(resolve).catch(resolve);
        } else {
          resolve();
        }
      };
      img.onerror = resolve;
    }
  });
}

function ArrowIcon({ dir }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === 'left' ? (
        <>
          <path d="m15 18-6-6 6-6" />
        </>
      ) : (
        <>
          <path d="m9 18 6-6-6-6" />
        </>
      )}
    </svg>
  );
}

export default function HyperiuxDimensionalSwitch({
  items = [],
  direction = 'horizontal',
  infinite = true,
  autoplay = true,
  autoplayDelay = 3.6,
  ease = DEFAULT_EASE,
  className = '',
}) {
  const slides = useMemo(() => {
    if (!Array.isArray(items) || items.length === 0) return [];
    return items.map((item) => ({
      src: item.src || item.image || '',
      alt: item.alt || item.title || item.text || 'Industry Image',
      text: item.title || item.text || item.alt || '',
    }));
  }, [items]);

  const count = slides.length;
  const isVertical = direction === 'vertical';
  const flipAxis = isVertical ? 'rotateX' : 'rotateY';

  const rootRef = useRef(null);
  const flipperRef = useRef(null);
  const prevTextRef = useRef(null);
  const nextTextRef = useRef(null);
  const showingNextRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const rotationRef = useRef(0);
  const isHoveredRef = useRef(false);
  const touchStartXRef = useRef(null);

  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(count > 1 ? 1 : 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(true);

  const safeFront = count > 0 ? frontIndex % count : 0;
  const safeBack = count > 0 ? backIndex % count : 0;
  const safeCurrent = count > 0 ? currentIndex % count : 0;

  // Viewport intersection observer to pause autoplay when off-screen
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Initialize text 3D depth
  useEffect(() => {
    if (prevTextRef.current && nextTextRef.current) {
      gsap.set([prevTextRef.current, nextTextRef.current], { z: TEXT_Z });
    }
  }, []);

  // Reset positioning on axis change
  useEffect(() => {
    if (!flipperRef.current || !prevTextRef.current || !nextTextRef.current) return;
    gsap.killTweensOf([flipperRef.current, prevTextRef.current, nextTextRef.current]);
    const wasShowingNext = showingNextRef.current;
    rotationRef.current = wasShowingNext ? 180 : 0;
    gsap.set(flipperRef.current, { rotateX: 0, rotateY: 0, [flipAxis]: rotationRef.current });
    const visible = wasShowingNext ? nextTextRef : prevTextRef;
    const hidden = wasShowingNext ? prevTextRef : nextTextRef;
    gsap.set(visible.current, { xPercent: 0, yPercent: 0, rotateX: 0, rotateY: 0, opacity: 1 });
    gsap.set(hidden.current, { xPercent: 0, yPercent: 0, rotateX: 0, rotateY: 0, opacity: 0 });
    isAnimatingRef.current = false;
  }, [flipAxis]);

  // Preload and background-decode all slides on mount
  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.src) preloadImage(slide.src);
    });
  }, [slides]);

  const flipTo = useCallback(
    async (dir, newIndex) => {
      if (count <= 1 || isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Ensure target slide image is fully loaded and decoded before 3D flip starts
      const targetSrc = slides[newIndex]?.src;
      if (targetSrc) {
        await preloadImage(targetSrc);
      }

      const goingNext = dir === 'next';
      const wasShowingNext = showingNextRef.current;

      flushSync(() => {
        setCurrentIndex(newIndex);
        if (wasShowingNext) {
          setFrontIndex(newIndex);
        } else {
          setBackIndex(newIndex);
        }
      });

      showingNextRef.current = !wasShowingNext;
      const outgoing = wasShowingNext ? nextTextRef : prevTextRef;
      const incoming = wasShowingNext ? prevTextRef : nextTextRef;
      const flipGoingNext = isVertical ? !goingNext : goingNext;
      rotationRef.current += flipGoingNext ? 180 : -180;
      const rotateValue = rotationRef.current;

      const resolvedEase = resolveEase(ease);

      const tl = gsap.timeline({
        defaults: { duration: DURATION, ease: EASE },
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });

      // Card flipper 3D rotation
      tl.to(flipperRef.current, { [flipAxis]: rotateValue, ease: resolvedEase, duration: 0.7 }, 0);

      // 3D Text transition with rotation and parallax travel
      const textTl = gsap.timeline();
      if (isVertical) {
        const rotateNext = !goingNext;
        const translateNext = !goingNext;
        const outRotate = rotateNext ? 45 : -45;
        const outY = translateNext ? -80 : 80;
        const inRotate = rotateNext ? -45 : 45;
        const inY = translateNext ? 80 : -80;
        textTl.to(outgoing.current, { yPercent: outY, rotateX: outRotate, duration: OUTGOING_DURATION * 1.5, ease: resolvedEase }, 0);
        textTl.to(outgoing.current, { opacity: 0, delay: -0.3, duration: 0 });
        textTl.fromTo(incoming.current, { yPercent: inY, rotateX: inRotate, opacity: 0 }, { yPercent: 0, rotateX: 0, opacity: 1, duration: OUTGOING_DURATION * 1.5, ease: resolvedEase }, 0.15);
      } else {
        const outRotate = goingNext ? TEXT_ROTATE_DEG : -TEXT_ROTATE_DEG;
        const outX = goingNext ? TEXT_TRANSLATE_PERCENT : -TEXT_TRANSLATE_PERCENT;
        const inRotate = goingNext ? -TEXT_ROTATE_DEG : TEXT_ROTATE_DEG;
        const inX = goingNext ? -TEXT_TRANSLATE_PERCENT : TEXT_TRANSLATE_PERCENT;
        textTl.to(outgoing.current, { xPercent: outX, rotateY: outRotate, duration: OUTGOING_DURATION * 1.5, ease: resolvedEase }, 0);
        textTl.to(outgoing.current, { opacity: 0, delay: -0.3, duration: 0 });
        textTl.fromTo(incoming.current, { xPercent: inX, rotateY: inRotate, opacity: 0 }, { xPercent: 0, rotateY: 0, opacity: 1, duration: OUTGOING_DURATION * 1.5, ease: resolvedEase }, 0.15);
      }

      tl.add(textTl, 0);
    },
    [count, ease, flipAxis, isVertical]
  );

  const switchTo = useCallback(
    (dir) => {
      if (count <= 1) return;
      const goingNext = dir === 'next';
      const visibleIndex = showingNextRef.current ? safeBack : safeFront;
      const raw = visibleIndex + (goingNext ? 1 : -1);
      const next = infinite ? ((raw % count) + count) % count : raw;
      if (!infinite && (next < 0 || next >= count)) return;
      flipTo(dir, next);
    },
    [count, flipTo, infinite, safeBack, safeFront]
  );

  const goToIndex = useCallback(
    (target) => {
      if (count <= 1 || target === safeCurrent) return;
      let dir;
      if (infinite) {
        const forward = ((target - safeCurrent) % count + count) % count;
        dir = forward <= count - forward ? 'next' : 'prev';
      } else {
        dir = target > safeCurrent ? 'next' : 'prev';
      }
      flipTo(dir, target);
    },
    [count, flipTo, infinite, safeCurrent]
  );

  // Autoplay
  useEffect(() => {
    if (!autoplay || autoplayDelay <= 0 || !inView || count <= 1) return;
    const interval = window.setInterval(() => {
      if (!isHoveredRef.current) {
        switchTo('next');
      }
    }, autoplayDelay * 1000);
    return () => window.clearInterval(interval);
  }, [autoplay, autoplayDelay, inView, count, switchTo]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        switchTo('prev');
      } else {
        switchTo('next');
      }
    }
    touchStartXRef.current = null;
  };

  if (count === 0) return null;

  const backClass = `hpx-dss-face ${isVertical ? 'hpx-dss-back-x' : 'hpx-dss-back-y'}`;

  return (
    <div
      ref={rootRef}
      className={`hpx-dss-root ${className}`}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Flipping Card */}
      <div className="hpx-dss-card-container">
        <div ref={flipperRef} className="hpx-dss-flipper">
          {/* Front face */}
          <div className="hpx-dss-face">
            <img
              src={slides[safeFront].src}
              alt={slides[safeFront].alt}
              draggable={false}
              loading="eager"
              decoding="async"
            />
            <div className="hpx-dss-scrim" />
          </div>

          {/* Back face (flipped 180deg) */}
          <div className={backClass}>
            <img
              src={slides[safeBack].src}
              alt={slides[safeBack].alt}
              draggable={false}
              loading="eager"
              decoding="async"
            />
            <div className="hpx-dss-scrim" />
          </div>
        </div>

        {/* 3D Floating Text Over Card */}
        <div className="hpx-dss-textwrap">
          <div ref={prevTextRef} className="hpx-dss-text">
            <span className="hpx-dss-badge">
              {String(safeFront + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <h3 className="hpx-dss-heading">{slides[safeFront].text}</h3>
          </div>
          <div ref={nextTextRef} className="hpx-dss-text hpx-dss-text-next">
            <span className="hpx-dss-badge">
              {String(safeBack + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <h3 className="hpx-dss-heading">{slides[safeBack].text}</h3>
          </div>
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="hpx-dss-nav-bar">
        {/* Dots */}
        <div className="hpx-dss-dots">
          {slides.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className="hpx-dss-dot"
              onClick={() => goToIndex(idx)}
              aria-label={`Go to ${item.text || `slide ${idx + 1}`}`}
              aria-current={idx === safeCurrent}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="hpx-dss-controls">
          <button
            type="button"
            className="hpx-dss-btn"
            onClick={() => switchTo('prev')}
            aria-label="Previous Slide"
            disabled={!infinite && safeCurrent === 0}
          >
            <ArrowIcon dir="left" />
          </button>
          <button
            type="button"
            className="hpx-dss-btn"
            onClick={() => switchTo('next')}
            aria-label="Next Slide"
            disabled={!infinite && safeCurrent === count - 1}
          >
            <ArrowIcon dir="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

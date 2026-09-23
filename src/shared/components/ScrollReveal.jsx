import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal — GSAP ScrollTrigger fade-up reveal.
 * Wrap any section content with this to add scroll-driven entrance.
 *
 * Props:
 *   children   — content to reveal
 *   delay      — stagger delay in seconds
 *   y          — starting Y offset (default 40px)
 *   className  — extra class on wrapper div
 */
export default function ScrollReveal({ children, delay = 0, y = 40, className = '' }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0, willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
}

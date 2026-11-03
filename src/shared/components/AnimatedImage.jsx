import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import './AnimatedImage.css';

const EASE = [0.16, 1, 0.3, 1];
const SPRING = { stiffness: 140, damping: 20, mass: 0.4 };

/**
 * Photo with a wipe-in reveal, a slow settle zoom and a gentle tilt that follows the pointer.
 * Everything stops for visitors who ask for reduced motion, and touch screens skip the tilt.
 */
export default function AnimatedImage({ src, alt = '', caption }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, SPRING);
  const y = useSpring(pointerY, SPRING);
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);

  const follow = (e) => {
    if (reduceMotion || e.pointerType !== 'mouse') return;
    const box = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - box.left) / box.width - 0.5);
    pointerY.set((e.clientY - box.top) / box.height - 0.5);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <figure className="animated-image">
      <motion.div
        className="animated-image-frame"
        style={reduceMotion ? undefined : { rotateX, rotateY }}
        onPointerMove={follow}
        onPointerLeave={reset}
        initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0 round 20px)', opacity: 0 }}
        animate={{ clipPath: 'inset(0 0% 0 0 round 20px)', opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
      >
        <motion.img
          src={src}
          alt={alt}
          initial={reduceMotion ? false : { scale: 1.16 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE, delay: 0.15 }}
        />
        <span className="animated-image-sheen" aria-hidden="true" />
      </motion.div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

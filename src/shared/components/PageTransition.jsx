import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * PageTransition — lightweight entrance transition on route change.
 * Avoids blocking AnimatePresence mode="wait" deadlocks that freeze browser back/forward navigation.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="initial"
      animate="animate"
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
}

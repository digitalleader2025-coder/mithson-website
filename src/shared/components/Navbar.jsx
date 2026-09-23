import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '../../content/navigation';
import logoImage from '../../../images/mithson-logo/Mithson-logo.png';
import './Navbar.css';

function ChevronIcon({ open }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12"
      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MegaMenuItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const location = useLocation();
  const isActive = location.pathname.startsWith(item.path);
  const timerRef = useRef(null);
  const navItemRef = useRef(null);

  // Close when tapping outside
  useEffect(() => {
    if (!open) return;
    const handleOutsideClick = (e) => {
      if (navItemRef.current && !navItemRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  const handleMouseEnter = () => {
    // Only apply hover if not a touch device
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    clearTimeout(timerRef.current);
    if (hasChildren) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (hasChildren) setOpen((v) => !v);
    }
    if (e.key === 'Escape') setOpen(false);
  };

  const handleClick = (e) => {
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch && hasChildren) {
      if (!open) {
        e.preventDefault(); // First tap opens the menu, don't navigate
        setOpen(true);
      } else {
        setOpen(false); // Second tap navigates, close menu
      }
    } else {
      setOpen(false); // Desktop or no children, close menu
    }
    onClose?.();
  };

  return (
    <li
      ref={navItemRef}
      className={`nav-item${isActive ? ' nav-item--active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.path}
        className="nav-link"
        aria-haspopup={hasChildren ? 'true' : undefined}
        aria-expanded={hasChildren ? open : undefined}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        {item.label}
        {hasChildren && <ChevronIcon open={open} />}
      </Link>

      <AnimatePresence>
        {open && hasChildren && (
          <motion.div
            className={`dropdown ${item.children.some(c => c.children) ? 'dropdown--wide' : ''}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            role="menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.children.map((child) =>
              child.children ? (
                <div key={child.path} className="dropdown-group">
                  <span className="dropdown-group-label">{child.label}</span>
                  {child.children.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="dropdown-link"
                      role="menuitem"
                      onClick={() => { setOpen(false); onClose?.(); }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={child.path}
                  to={child.path}
                  className="dropdown-link"
                  role="menuitem"
                  onClick={() => { setOpen(false); onClose?.(); }}
                >
                  {child.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  // Prevent rapid-click router freeze by disabling navbar clicks during page transition
  useEffect(() => {
    setIsTransitioning(true);
    const t = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(t);
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [location.pathname]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  return (
    <div style={{ pointerEvents: isTransitioning ? 'none' : 'auto' }}>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${mobileOpen ? ' navbar--open' : ''}`} role="banner">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Mithson Sealing Solutions — Home" onClick={closeMobile}>
            <img src={logoImage} alt="Mithson Sealing Solutions" className="logo-image" />
          </Link>

          {/* Desktop navigation */}
          <nav className="navbar-nav" aria-label="Primary navigation">
            <ul className="nav-list" role="list">
              {navigation.map((item) => (
                <MegaMenuItem key={item.path} item={item} />
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="navbar-cta">
            <Link to="/connect-with-us" className="btn btn-primary btn--sm" id="nav-contact-cta">
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`hamburger${mobileOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            id="nav-hamburger"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav-inner">
              {navigation.map((item) => (
                <div key={item.path} className="mobile-nav-group">
                  <button
                    className="mobile-nav-trigger"
                    onClick={() =>
                      setMobileExpanded((v) => (v === item.path ? null : item.path))
                    }
                    aria-expanded={mobileExpanded === item.path}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMobile}
                      style={{ pointerEvents: item.children?.length ? 'none' : 'auto' }}
                    >
                      {item.label}
                    </Link>
                    {item.children?.length > 0 && (
                      <ChevronIcon open={mobileExpanded === item.path} />
                    )}
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.path && item.children?.length > 0 && (
                      <motion.div
                        className="mobile-nav-children"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                      >
                        {item.children.map((child) =>
                          child.children ? (
                            <div key={child.path}>
                              <span className="mobile-nav-group-label">{child.label}</span>
                              {child.children.map((sub) => (
                                <Link key={sub.path} to={sub.path} className="mobile-nav-link" onClick={closeMobile}>
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link key={child.path} to={child.path} className="mobile-nav-link" onClick={closeMobile}>
                              {child.label}
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link to="/connect-with-us" className="btn btn-primary mobile-nav-cta" onClick={closeMobile} id="mobile-nav-cta">
                Get in Touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobile}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

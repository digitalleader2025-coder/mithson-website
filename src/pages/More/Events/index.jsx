import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import usePageMeta from '../../../shared/hooks/usePageMeta';
import {
  eventValues,
  eventYears,
  eventsIntro,
  meetTheTeam,
  showcase,
  showcaseNote,
} from '../../../content/events';
import './Events.css';

const EASE = [0.22, 1, 0.36, 1];
const CONTACT = '/connect-with-us';
const APPLICATION = '/connect-with-us/application-data';

const ICONS = {
  handshake: <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2l-4-4M3 10l4-4 4 2 3-1 7 4M3 10l4 5M21 11l-4 5M7 15l2.5 2.5M9.5 17.5 12 20" />,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 2 6 5.5" /></>,
  rig: <path d="M12 3 7 21M12 3l5 18M8.5 15h7M10 9h4M5 21h14" />,
  mould: <path d="M4 8h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8ZM7 8V5h10v3M9 19h6M12 15v4" />,
  tools: <path d="m14.7 6.3 3-3a4 4 0 0 1-5.4 5.4L6 15l-2 1-1 2 1 1 2-1 1-2 6.3-6.3M15 15l5 5" />,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  calendar: <path d="M4 5h16v15H4zM4 9h16M9 3v4M15 3v4" />,
};

function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -50]);

  return (
    <section ref={ref} className="ev-hero">
      <div className="container ev-hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <span className="ev-label">Events</span>
          <h1>Connecting with Industry. Building Relationships.</h1>
          <p className="ev-hero-lead">Meet Mithson at industry expos and trade shows around the world.</p>
          <p>{eventsIntro[0]}</p>
          <div className="ev-actions">
            <a href="#ev-journey" className="btn btn-primary">View Our Exhibition Journey <Arrow /></a>
            <Link to={CONTACT} className="btn ev-btn-ghost">Enquire About Events</Link>
          </div>
        </motion.div>
        <motion.div
          className="ev-hero-photo"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <img src={eventYears[0].cover} alt="The Mithson stand at an industry exhibition" />
        </motion.div>
      </div>
      <div className="container">
        <motion.ul
          className="ev-values"
          initial="hidden"
          animate="shown"
          variants={{ shown: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } } }}
        >
          {eventValues.map((v) => (
            <motion.li key={v.title} variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0 } }}>
              <span className="ev-icon"><Icon name={v.icon} /></span>
              <div><strong>{v.title}</strong><span>{v.text}</span></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function YearCard({ item, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <Link to={item.path} className="ev-year">
        <span className="ev-year-badge" aria-hidden="true">
          <img src={item.cover} alt="" loading="lazy" />
          <em>{item.year}</em>
        </span>
        <div className="ev-year-body">
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div className="ev-chips">
            <span><Icon name="calendar" size={16} /> {item.year}</span>
            <span><Icon name="pin" size={16} /> {item.events.map((e) => e.place).join(' · ')}</span>
          </div>
          <span className="ev-year-count">{item.events.length === 1 ? '1 exhibition' : `${item.events.length} exhibitions`}</span>
        </div>
        <span className="ev-year-photo" aria-hidden="true">
          <img src={item.events[item.events.length - 1].image} alt="" loading="lazy" />
        </span>
        <span className="ev-go" aria-hidden="true"><Arrow /></span>
      </Link>
    </Reveal>
  );
}

export default function EventsPage() {
  usePageMeta(
    'Events',
    'Mithson Sealing Solutions at industry exhibitions: Oil & Gas Expo 2025 Mumbai, bauma CONEXPO INDIA, Valve World, OPES Oman, Automation Expo and OTC Houston.',
  );

  return (
    <div className="page-wrapper ev-page">
      <Hero />

      <section className="ev-intro">
        <div className="container">
          <Reveal as="p">{eventsIntro[1]}</Reveal>
        </div>
      </section>

      {/* Exhibition journey */}
      <section className="section ev-section" id="ev-journey">
        <div className="container">
          <Reveal className="ev-head">
            <div>
              <span className="ev-label ev-label--light">Our Exhibition Journey</span>
              <h2>Engaging with Industries Worldwide</h2>
            </div>
            <p>Explore our exhibition journey and discover the industry events where you can connect with the Mithson team.</p>
          </Reveal>
          <div className="ev-years">
            {eventYears.map((item, index) => <YearCard key={item.year} item={item} index={index} />)}
          </div>
          <Reveal as="p" className="ev-note">These are past exhibitions, kept here as an archive rather than as upcoming events.</Reveal>
        </div>
      </section>

      {/* What we showcase */}
      <section className="section ev-section ev-tint">
        <div className="container">
          <Reveal className="ev-head">
            <div>
              <span className="ev-label ev-label--light">What We Showcase</span>
              <h2>Polymer Sealing Solutions for Industrial Applications</h2>
            </div>
            <p>{showcaseNote}</p>
          </Reveal>
          <div className="ev-showcase">
            {showcase.map((s, index) => (
              <Reveal key={s.title} delay={index * 0.07}>
                <Link to={s.path} className="ev-show">
                  <span className="ev-icon"><Icon name={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="ev-more">Learn more <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="ev-cta">
        <div className="ev-cta-bg" style={{ backgroundImage: `url("${eventYears[0].cover}")` }} aria-hidden="true" />
        <div className="container ev-cta-grid">
          <div>
            <span className="ev-label">Meet the Mithson Team</span>
            <h2>Let&apos;s Discuss Your Next Application</h2>
            {meetTheTeam.map((p) => <p key={p}>{p}</p>)}
          </div>
          <Reveal className="ev-cta-actions">
            <Link to={CONTACT} className="btn btn-white">Enquire About Upcoming Events <Arrow /></Link>
            <Link to={APPLICATION} className="btn ev-btn-ghost">Send Your Application Details <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

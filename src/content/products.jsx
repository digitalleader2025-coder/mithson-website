// Source-derived product data — exact names and facts from website-content.txt
// Do NOT invent technical specifications not listed here.

import React from 'react';
import mithPlateImg from '../pages/Products/MITH-PLATE/assets/mith-plate.png';
import muniSealImg from '../pages/Products/M-UNI-Seal/assets/hero.jpg';
import hammerUnionImg from '../pages/Products/Hammer-Union-Seal/assets/hero.png';
import xmasTreeImg from '../pages/Products/Seals-X-Mas-Tree/assets/hero.png';

import vsImg1 from '../pages/Products/Seals-Valve/assets/Devlon Insert Metal Seat.png';
import vsImg2 from '../pages/Products/Seals-Valve/assets/Devlon Seat Ring (2).png';
import vsImg3 from '../pages/Products/Seals-Valve/assets/Devlon Seat Ring.png';
import vsImg4 from '../pages/Products/Seals-Valve/assets/Elastomer O-Ring.png';
import vsImg5 from '../pages/Products/Seals-Valve/assets/PTFE Carbon Graphite Chevron Packing.png';
import vsImg6 from '../pages/Products/Seals-Valve/assets/PTFE Carbon Graphite Seat.png';
import vsImg7 from '../pages/Products/Seals-Valve/assets/PTFE Cavity Seat.png';
import vsImg8 from '../pages/Products/Seals-Valve/assets/PTFE Chevron Packing.png';
import vsImg9 from '../pages/Products/Seals-Valve/assets/PTFE Seat.png';
import vsImg10 from '../pages/Products/Seals-Valve/assets/Peek Insert Metal Seat.png';
import vsImg11 from '../pages/Products/Seals-Valve/assets/Peek Seat Ring.png';
import vsImg12 from '../pages/Products/Seals-Valve/assets/Spring Energized Seals.png';
import vsImg13 from '../pages/Products/Seals-Valve/assets/Stem Packing API 6A (unpacked).png';
import vsImg14 from '../pages/Products/Seals-Valve/assets/Stem packing API 6A.png';

const valveSealsImages = [
  vsImg1, vsImg2, vsImg3, vsImg4, vsImg5, vsImg6, vsImg7, 
  vsImg8, vsImg9, vsImg10, vsImg11, vsImg12, vsImg13, vsImg14
];

export const products = [
  {
    id: 'mith-plate',
    slug: 'mith-plate',
    name: 'MITH PLATE',
    tagline: 'MSS Valve Plates for Reciprocating Compressors',
    shortDescription:
      'High-performance valve plates engineered for reciprocating compressors — 70% lighter than steel with superior micro-sealing capability.',
    summary: 'High-performance valve plates engineered for reciprocating compressors — 70% lighter than steel with superior micro-sealing capability.',
    highlights: [
      '70% lighter than steel',
      'Micro-sealing precision',
      'Lower inertia design',
      'Liquid tolerant',
      'Oil-free / self-lubricating',
    ],
    materials: ['Carbon PTFE', 'Glass Filled PEEK', 'Nylon'],
    applications: ['Reciprocating Compressors'],
    path: '/products/mith-plate',
    folder: 'MITH-PLATE',
    accent: '#42A4FF',
    image: mithPlateImg,
  },
  {
    id: 'm-uni-seal',
    slug: 'm-uni-seal',
    name: 'M-UNI Seal',
    tagline: 'Spring-Energized Lip Seal',
    shortDescription:
      'Introducing the M-UNI spring-energized seal: a cutting-edge sealing solution featuring a spring-actuated, pressure-assisted mechanism. Constructed with a PTFE (or alternative polymer) jacket, this seal partially encases a corrosion resistant metal spring energizer. Designed for optimal performance and durability, the M-UNI seal is your go-to choice for reliable sealing in demanding applications.',
    summary: 'A cutting-edge spring-actuated, pressure-assisted seal featuring a PTFE jacket and corrosion-resistant metal spring for optimal durability in demanding applications.',
    highlights: [
      'Pressure-assisted sealing',
      'PTFE polymer jacket',
      'Corrosion-resistant metal spring',
      'Demanding environment rated',
    ],
    materials: ['PTFE', 'Alternative polymers', 'Corrosion-resistant metal spring'],
    applications: ['Valves', 'Pumps', 'Compressors', 'Hydraulic Systems'],
    path: '/products/m-uni-seal',
    folder: 'M-UNI-Seal',
    accent: '#3b7bd4',
    image: muniSealImg,
  },
  {
    id: 'hammer-union-seal',
    slug: 'hammer-union-seal',
    name: 'Hammer Union Seal',
    tagline: 'High-Performance Connection Seal',
    shortDescription:
      'Hammer union seals are sealing components made from elastomeric or PTFE materials, positioned between the male and female subs to ensure a leak-proof connection. They are designed to withstand high pressures, extreme temperatures, and aggressive fluids, effectively preventing fluid or gas leakage at the joint.',
    summary: 'High-performance elastomeric or PTFE sealing components designed to withstand extreme pressures and temperatures, ensuring leak-proof hammer union connections.',
    highlights: [
      'High pressure rated',
      'Extreme temperature capable',
      'Aggressive fluid resistant',
      'Elastomeric or PTFE construction',
      'Typical ID range 1–6 inch',
    ],
    materials: ['NBR', 'HNBR', 'FKM/VITON', 'BRASS/STAINLESS STEEL REINFORCED ELASTOMER', 'PTFE'],
    applications: ['Hammer Union Connections', 'High-Pressure Fluid Lines'],
    path: '/products/hammer-union-seal',
    folder: 'Hammer-Union-Seal',
    accent: '#42A4FF',
    image: hammerUnionImg,
  },
  {
    id: 'seals-x-mas-tree',
    slug: 'seals-x-mas-tree',
    name: 'Seals - X-Mas Tree',
    tagline: 'Christmas Tree Wellhead Gate-Valve Sealing',
    shortDescription: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>We provide <strong>high-performance sealing solutions</strong> for <strong>Christmas Tree valve applications</strong>, including <strong>Spring-Energized Lip Seals, Stem Packing, Seat Seals, and O-Rings</strong>. Manufactured from advanced <strong>polymer materials</strong>, our components deliver reliable performance and meet <strong>API 6A (Appendix F)</strong> requirements. <strong>Spring-Energized Seals</strong> combine a <strong>PTFE jacket</strong> with a <strong>corrosion-resistant metal energizer spring</strong>, providing consistent sealing under demanding conditions.</p>
        <p><strong>Gate Valve Stem Packing</strong> prevents leakage around the valve stem, ensuring reliable operation and sealing integrity. <strong>PTFE materials</strong> offer <strong>low friction, excellent temperature resistance, chemical resistance, and corrosion resistance</strong>. <strong>PTFE Spring-Energized Seals</strong> also provide <strong>unlimited shelf life</strong>, supporting long-term storage without compromising performance.</p>
      </div>
    ),
    summary: 'High-performance sealing solutions for Christmas Tree valve applications, meeting API 6A (Appendix F) requirements. Features PTFE jackets and corrosion-resistant springs for extreme conditions.',
    highlights: [
      'API 6A Appendix F reference',
      'Low friction PTFE jacket',
      'Unlimited shelf life (PTFE spring seals)',
      'Wide temperature range',
      'Chemical resistant',
    ],
    materials: ['PTFE jacket', 'Corrosion-resistant metal spring'],
    applications: ['Christmas Tree Wellheads', 'Gate Valve Stem Sealing', 'Seat Seals'],
    path: '/products/seals-x-mas-tree',
    folder: 'Seals-X-Mas-Tree',
    accent: '#3b7bd4',
    image: xmasTreeImg,
  },
  {
    id: 'seals-valve',
    slug: 'seals-valve',
    name: 'Seals - Valve',
    tagline: 'Complete Valve Sealing Solutions',
    shortDescription: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>We offer a full range of sealing solutions which are made from high performing Thermoplastic such as PTFE and PEEK for Gate Valve, Ball Valve, Globe Valve, Plug Valve, Butterfly Valve and Diaphragm Valve.</p>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
          <li>SPRING ENERGIZED LIP SEAL</li>
          <li>O-RING</li>
          <li>STEM PACKING - API 6A</li>
          <li>PTFE CHEVRON PACKING</li>
          <li>PTFE CARBON GRAPHITE CHEVRON PACKING</li>
          <li>PTFE CARBON GRAPHITE SEAT</li>
          <li>PTFE CAVITY SEAT</li>
          <li>PTFE SEAT</li>
          <li>PTFE PLUG</li>
          <li>PTFE SLEEVE</li>
          <li>PEEK SEAT RING</li>
          <li>PEEK INSERT METAL SEAT</li>
          <li>DEVLON SEAT RING</li>
          <li>DEVLON INSERT METAL SEAT</li>
          <li>PTFE LINED</li>
        </ol>
      </div>
    ),
    summary: 'Comprehensive range of high-performing Thermoplastic (PTFE/PEEK) sealing solutions for Gate, Ball, Globe, Plug, Butterfly, and Diaphragm valves.',
    highlights: [
      'Gate / Ball / Globe / Plug / Butterfly / Diaphragm valves',
      'PTFE and PEEK materials',
      'Spring energized lip seals',
      'Chevron packing options',
    ],
    materials: ['PTFE', 'PEEK'],
    products: [
      'Spring Energized Lip Seal', 'O-Ring', 'Stem Packing - API 6A',
      'PTFE Chevron Packing', 'PTFE Carbon Graphite Chevron Packing',
      'PTFE Carbon Graphite Seat', 'PTFE Cavity Seat', 'PTFE Seat',
      'PTFE Plug', 'PTFE Sleeve', 'PEEK Seat Ring', 'PEEK Insert Metal Seat',
      'Devlon Seat Ring', 'Devlon Insert Metal Seat', 'PTFE Lined', 'Elastomer O-Rings',
    ],
    applications: ['Gate Valves', 'Ball Valves', 'Globe Valves', 'Plug Valves', 'Butterfly Valves', 'Diaphragm Valves'],
    path: '/products/seals-valve',
    folder: 'Seals-Valve',
    accent: '#42A4FF',
    carouselImage: vsImg10,
    image: valveSealsImages,
  },
  {
    id: 'plug-lined-valve',
    slug: 'plug-lined-valve',
    name: 'Plug & Lined - Valve',
    tagline: 'PTFE Plug-Valve Sleeves and Liners',
    shortDescription:
      'High-performance PTFE plug-valve sleeves and liners delivering bubble-tight sealing with low torque and maintenance-free operation.',
    highlights: [
      'Bubble-tight sealing',
      'Low torque operation',
      'Self-lubricating',
      'Chemical resistant',
      'Bi-directional sealing',
      'Cavity-free design',
      'Maintenance-free',
    ],
    materials: [
      'Virgin PTFE',
      'Chemically Modified PTFE',
      'Carbon-filled PTFE',
      'Glass-filled PTFE',
      'Bronze-filled PTFE',
    ],
    applications: ['Plug Valves', 'Lined Valves'],
    path: '/products/plug-lined-valve',
    folder: 'Plug-Lined-Valve',
    accent: '#3b7bd4',
  },
  {
    id: 'uni-lube-bearing',
    slug: 'uni-lube-bearing',
    name: 'UNI-LUBE Bearing',
    tagline: 'Self-Lubricating Bearing Family',
    shortDescription:
      'A complete family of self-lubricating bearings covering dry, pre-lubricated, bi-metal and thermoplastic applications.',
    highlights: [
      'Dry lubrication / maintenance-free',
      'High load / low speed options',
      'Heavy-load bi-metal',
      'Thermoplastic for wet/marine use',
      'Temperature range -40°C to +300°C (MSS-MB)',
    ],
    variants: [
      { name: 'MSS-MF Self Lube', notes: 'Dry lubrication, maintenance-free, low vibration/noise, abrasion resistance' },
      { name: 'MSS-MP Pre Lube', notes: 'Intermittent/boundary operation, high load/low speed, lubricant-retaining pockets, shock-load resistance' },
      { name: 'MSS-BIM Bi-Metal', notes: 'Heavy-load, high mechanical/fatigue/wear resistance' },
      { name: 'MSS-MB Solid Bush', notes: 'Thick-wall single-metal; turbines, pumps/compressors, foundries, steel/aluminium, packaging, food/beverage, agriculture, construction; -40°C to +300°C' },
      { name: 'MSS-MITHLON', notes: 'Thermoplastic bushing for moist/underwater pump and marine applications' },
    ],
    materials: ['Various bearing-grade alloys', 'Thermoplastics'],
    applications: ['Turbines', 'Pumps', 'Compressors', 'Foundries', 'Marine', 'Food & Beverage', 'Agriculture', 'Construction'],
    path: '/products/uni-lube-bearing',
    folder: 'UNI-LUBE-Bearing',
    accent: '#42A4FF',
  },
  {
    id: 'seals-hydraulic',
    slug: 'seals-hydraulic',
    name: 'Seals - Hydraulic',
    tagline: 'Hydraulic Cylinder Seals for Extreme Environments',
    shortDescription:
      'Complete hydraulic sealing solutions including wear rings, piston seals, wiper seals and rod seals for demanding hydraulic applications.',
    highlights: [
      'Wear rings prevent metal-to-metal contact',
      'Piston seals — dynamic pressure barrier',
      'Wiper seals — contaminant exclusion',
      'Rod seals — pressure barrier',
    ],
    types: [
      { name: 'Wear Rings', notes: 'Guide piston/rod, prevent metal-to-metal contact' },
      { name: 'Piston Seals', notes: 'Dynamic pressure barrier and lubrication-film support' },
      { name: 'Wiper Seals', notes: 'Exclude contaminants and help lubrication return' },
      { name: 'Rod Seals', notes: 'Pressure barrier preventing internal fluid leakage' },
    ],
    applications: ['Hydraulic Cylinders', 'Heavy Machinery', 'Industrial Equipment'],
    path: '/products/seals-hydraulic',
    folder: 'Seals-Hydraulic',
    accent: '#3b7bd4',
  },
  {
    id: 'diaphragm-aodd',
    slug: 'diaphragm-aodd',
    name: 'Diaphragm - AODD',
    tagline: 'Air Operated Double Diaphragm Pump Components',
    shortDescription:
      'PTFE and fluoropolymer components for AODD pumps — delivering durability, chemical resistance, low friction and reduced wear.',
    highlights: [
      'PTFE/fluoropolymer durability',
      'Chemical resistance',
      'Low friction',
      'Reduced wear',
    ],
    components: ['Diaphragm', 'Pilot Shaft', 'PTFE Ball', 'PTFE Valve', 'O-Ring', 'Seat'],
    materials: ['PTFE', 'Fluoropolymers'],
    applications: ['Air Operated Double Diaphragm Pumps'],
    path: '/products/diaphragm-aodd',
    folder: 'Diaphragm-AODD',
    accent: '#42A4FF',
  },
  {
    id: 'washers-transmission',
    slug: 'washers-transmission',
    name: 'Washers - Transmission',
    tagline: 'Carbon-Filled PEEK Thrust & Split-Lock Washers',
    shortDescription:
      'Heavy-duty PEEK thrust washers and split-lock washers for high-torque automatic transmissions — continuous operation to 250°C.',
    highlights: [
      'Continuous temperature to 250°C / 482°F',
      'Thermal management',
      'PV performance',
      'Self-lubrication',
    ],
    materials: ['Carbon-filled PEEK'],
    applications: [
      'Planetary Gear Carriers',
      'Output Shaft Thrust Positions',
      'High-Pressure Pump Wear Plates',
      'Heavy-duty / High-torque Automatic Transmissions',
    ],
    path: '/products/washers-transmission',
    folder: 'Washers-Transmission',
    accent: '#3b7bd4',
  },
  {
    id: 'nozzles-power-grid',
    slug: 'nozzles-power-grid',
    name: 'Nozzles - Power Grid',
    tagline: 'PTFE Nozzles for SF6 Circuit Breakers',
    shortDescription:
      'High-performance PTFE nozzles for SF6 circuit breakers — arcing and insulating nozzles for high-voltage applications manufactured via Cold Isostatic Pressing.',
    highlights: [
      'SF6 circuit breaker rated',
      'Arcing nozzle design',
      'Insulating nozzle design',
      'Cold Isostatic Pressing (CIP)',
      'Thermal/electrical stress resistant',
      'Arc-quenching capability',
    ],
    materials: ['PTFE', 'Polymer composites'],
    applications: ['SF6 Circuit Breakers', 'High-Voltage Power Grid Equipment'],
    path: '/products/nozzles-power-grid',
    folder: 'Nozzles-Power-Grid',
    accent: '#42A4FF',
  },
  {
    id: 'encapsulated-o-ring',
    slug: 'encapsulated-o-ring',
    name: 'Encapsulated O-Ring',
    tagline: 'FEP Encapsulated O-Rings',
    shortDescription:
      'Two-part construction: silicone or FKM/Viton elastomer core enclosed in a seamless FEP jacket — combining chemical compatibility with elastomeric resilience.',
    highlights: [
      'Seamless FEP jacket',
      'Silicone core: -60°C to +205°C (-75°F to +400°F)',
      'FKM/Viton core: -20°C to +204°C (-4°F to +400°F)',
      'Chemical compatibility',
      'Low friction / non-stick',
      'Sanitary / high-purity rated',
    ],
    materials: ['FEP jacket', 'Silicone core', 'FKM/Viton core'],
    temperatureRanges: {
      silicone: '-60°C to +205°C (-75°F to +400°F)',
      fkm: '-20°C to +204°C (-4°F to +400°F)',
    },
    applications: [
      'Chemical Processing',
      'Pharmaceutical & Biotech',
      'Oil & Gas',
      'Food & Beverage',
    ],
    path: '/products/encapsulated-o-ring',
    folder: 'Encapsulated-O-Ring',
    accent: '#3b7bd4',
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

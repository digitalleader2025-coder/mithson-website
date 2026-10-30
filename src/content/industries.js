// Industry pages. The products below are similar items Mithson could supply and are
// awaiting Mithson's validation. To use a real photo later, change the `image` import
// for that product only. Certifications are on hold: do not add them here yet.

import imgLifeScience from '../assets/industries/Life Science.webp';
import imgSemiconductor from '../assets/industries/Semiconductor.webp';
import imgAerospace from '../assets/industries/Aerospace.webp';
import imgAutomotive from '../assets/industries/Automotive.webp';

// Placeholder product photos (Mithson's own images of similar parts)
import imgSpringSeal from '../pages/Products/Seals-Valve/assets/Spring Energized Seals.png';
import imgDiaphragm from '../pages/Products/Diaphragm-AODD/assets/Diaphragm.png';
import imgPistonSeal from '../pages/Products/Seals-Hydraulic/assets/Piston Seals.png';
import imgRodSeal from '../pages/Products/Seals-Hydraulic/assets/Rod Seals.png';
import imgWearRing from '../pages/Products/Seals-Hydraulic/assets/Wear Rings.png';
import imgBearing from '../pages/Products/UNI-LUBE-Bearing/assets/MSS-MF Self Lube - 1.png';
import imgPeekRing from '../pages/Products/Seals-Valve/assets/Peek Seat Ring.png';
import imgThrustWasher from '../pages/Products/Washers-Transmission/assets/PEEK-Thrust Washer.png';
import imgPtfeRing from '../pages/Products/Diaphragm-AODD/assets/PTFE O-Ring.png';
import imgElastomerRing from '../pages/Products/Seals-Valve/assets/Elastomer O-Ring.png';

export const industries = {
  'life-science': {
    title: 'Life Science',
    image: imgLifeScience,
    intro:
      'Instruments and medical equipment need seals that stay clean, run smoothly and last through millions of cycles. Polymer seals and bearings suit pumps, valves and moving parts where lubricants are not wanted.',
    uses: ['Diagnostic analyzers', 'Surgical robotics', 'Liquid chromatography pumps', 'Bioreactors and mixers', 'Oxygen concentrators'],
    materials: ['PTFE', 'PEEK', 'UHMW-PE', 'Fluoropolymers'],
    products: [
      { name: 'Spring-energized seals', image: imgSpringSeal, desc: 'Low-friction polymer seals for high-pressure reciprocating pumps and rotor valves.' },
      { name: 'Fluoropolymer diaphragms', image: imgDiaphragm, desc: 'Flexible barriers for diaphragm valves and metering pumps.' },
      { name: 'Piston rings', image: imgPistonSeal, desc: 'Dry-running rings for small compressors and portable oxygen equipment.' },
      { name: 'Self-lubricating bearings', image: imgBearing, desc: 'Quiet, oil-free bearings for carousels, guides and rollers.' },
    ],
  },
  semiconductor: {
    title: 'Semiconductor',
    image: imgSemiconductor,
    intro:
      'Chip-making tools run in vacuum, with aggressive chemistry and strict cleanliness limits. High-purity polymer parts keep wear particles and outgassing low in process and handling equipment.',
    uses: ['Wafer cleaning', 'Etch', 'PVD and CVD', 'CMP', 'Roots, screw and scroll vacuum pumps'],
    materials: ['Fluoropolymers', 'PEEK', 'Polyimide'],
    products: [
      { name: 'Spring-energized seals', image: imgSpringSeal, desc: 'For process equipment working from high pressure to ultra-high vacuum.' },
      { name: 'Rotary lip seals', image: imgRodSeal, desc: 'Polymer lips for rotating shafts in vacuum pumps and transfer equipment.' },
      { name: 'Tip seals', image: imgWearRing, desc: 'Wear-resistant seals for roots, screw and scroll vacuum pumps.' },
      { name: 'Precision polymer components', image: imgPeekRing, desc: 'Machined PEEK and fluoropolymer parts made to drawing.' },
    ],
    specs: {
      title: 'Typical range for rotary lip seals',
      rows: [
        { label: 'Temperature', value: '-53°C to 232°C', source: 'https://www.omniseal-solutions.com/industries/semi-conductor' },
        { label: 'Surface speed', value: 'Over 35 m/s', source: 'https://www.omniseal-solutions.com/industries/semi-conductor' },
      ],
    },
  },
  aerospace: {
    title: 'Aerospace',
    image: imgAerospace,
    intro:
      'Aircraft systems ask seals to handle wide temperature swings, low weight and long service intervals. Polymer seals work where rubber reaches its limits in engines, fuel and hydraulic systems.',
    uses: ['Gas turbine engines', 'Fuel systems', 'Hydraulic actuators', 'Landing gear', 'Bearing protection'],
    materials: ['PTFE', 'PEEK', 'Polyimide', 'Corrosion-resistant metal springs'],
    products: [
      { name: 'Spring-energized seals', image: imgSpringSeal, desc: 'Polymer jackets with metal springs for extreme hot and cold service.' },
      { name: 'Rotary lip seals', image: imgRodSeal, desc: 'Polymer lips for high-speed shafts and bearing protection.' },
      { name: 'Piston rings', image: imgPistonSeal, desc: 'Lightweight rings for actuators and engine accessories.' },
    ],
    specs: {
      title: 'Typical range for spring-energized seals',
      rows: [
        { label: 'Temperature', value: '-268°C to +316°C (-450°F to +600°F)', source: 'https://www.omniseal-solutions.com/sealing-solutions/spring-energized-seals' },
        { label: 'Pressure', value: 'Vacuum to 50,000 psi', source: 'https://www.omniseal-solutions.com/sealing-solutions/spring-energized-seals' },
      ],
    },
  },
  automotive: {
    title: 'Automotive',
    image: imgAutomotive,
    intro:
      'Transmissions and electric drive units need parts that survive heat, torque and thin lubrication. Filled PEEK and PTFE parts reduce friction and wear in heavy-duty and electric vehicles.',
    uses: ['Automatic transmissions', 'E-axles', 'Electric drive units', 'Valve housings', 'Heavy-duty vehicles'],
    materials: ['Carbon-filled PEEK', 'PTFE', 'Molded rubber'],
    products: [
      { name: 'PEEK thrust washers', image: imgThrustWasher, desc: 'Mithson carbon-filled PEEK washers for high-torque transmissions.', path: '/products/washers-transmission' },
      { name: 'PTFE seal rings', image: imgPtfeRing, desc: 'Low-friction rings for transmissions and e-axles.' },
      { name: 'Rotary shaft seals', image: imgRodSeal, desc: 'Polymer lips for high-speed electric drive shafts.' },
      { name: 'Molded rubber gaskets', image: imgElastomerRing, desc: 'Push-in-place gaskets for valve housings.' },
    ],
    specs: {
      title: 'Typical ranges',
      rows: [
        { label: 'PEEK continuous use', value: 'Up to 260°C (500°F)', source: 'https://www.victrex.com/~/media/cd3d8fdd782540d98735162f99655961.pdf' },
        { label: 'Molded rubber gaskets', value: 'Up to 150°C and 50 bar', source: 'https://advanced-emc.com/electric-vehicle-seals/' },
      ],
    },
  },
};

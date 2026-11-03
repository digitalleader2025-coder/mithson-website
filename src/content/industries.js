// Industry pages. The products below are similar items Mithson could supply and are
// awaiting Mithson's validation. To use a real photo later, change the `image` import
// for that product only. Certifications are on hold: do not add them here yet.

import imgLifeScience from '../assets/industries/Life Science.webp';
import imgSemiconductor from '../assets/industries/Semiconductor.webp';
import imgAerospace from '../assets/industries/Aerospace.webp';
import imgAutomotive from '../assets/industries/Automotive.webp';
import imgMining from '../assets/industries/Mining.webp';
import imgRobotics from '../assets/industries/Robotics.webp';

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

// Shown on every industry page
export const industryFaqs = [
  { q: 'What do you need to review my application?', a: 'Send temperature, pressure, media, motion, hardware dimensions and any drawings. The Application Data Form lists them in one place.' },
  { q: 'Are these parts available as standard?', a: 'Availability and specifications are confirmed by Mithson engineering for each application.' },
  { q: 'Can you make parts to my drawing?', a: 'Yes. Upload your drawing and our team will review it with you.' },
];

export const industries = {
  mining: {
    title: 'Mining',
    why: 'Mining machines work in dust, mud and shock loads, often far from workshops. Reliable seals help keep contaminants out and keep equipment working between service intervals.',
    challenges: ['Abrasive dust and slurry', 'Shock loads', 'Long hours and hard-to-reach parts', 'Protecting hydraulic systems from dirt'],
    image: imgMining,
    intro:
      'Mining equipment faces abrasive dust, shock loads and long hours in remote sites. Tough polymer seals and bearings help keep dirt out and fluids in.',
    uses: ['Hydraulic cylinders', 'Slurry pumps and valves', 'Drilling equipment', 'Conveyors and crushers'],
    materials: ['PU', 'HNBR', 'FKM/Viton', 'PTFE', 'Nylon'],
    products: [
      { name: 'Hydraulic seals', image: imgPistonSeal, desc: 'Piston and rod seals for heavy cylinders.' },
      { name: 'Wear rings', image: imgWearRing, desc: 'Guide parts that keep moving metal surfaces apart.' },
      { name: 'Valve seals', image: imgPeekRing, desc: 'Polymer seats and seals for slurry and water valves.' },
      { name: 'Self-lubricating bearings', image: imgBearing, desc: 'Bearings for pivots and places that are hard to grease.' },
    ],
  },
  robotics: {
    title: 'Robotics',
    why: 'Robots rely on smooth, accurate joints. Seals and bearings need low friction and compact designs, so motors can move precisely without wasting energy.',
    challenges: ['Low friction', 'Compact spaces', 'Precise repeat movement', 'Long life with little maintenance'],
    image: imgRobotics,
    intro:
      'Robot joints need smooth movement, low friction and long service in a small space. Polymer seals and bearings help protect joints and reduce wear.',
    uses: ['Robot joints', 'Actuators', 'Gear units', 'Automated guided vehicles'],
    materials: ['PTFE', 'PEEK', 'Delrin/POM', 'Nylon', 'FKM/Viton'],
    products: [
      { name: 'Spring-energized seals', image: imgSpringSeal, desc: 'Low-friction seals for rotating and moving joints.' },
      { name: 'Self-lubricating bearings', image: imgBearing, desc: 'Compact bearings for smooth motion without added grease.' },
      { name: 'Precision polymer components', image: imgPeekRing, desc: 'Machined rings and spacers made to drawing.' },
      { name: 'O-rings', image: imgElastomerRing, desc: 'Static seals for housings and covers.' },
    ],
  },
  'life-science': {
    title: 'Life Science',
    why: 'Life science equipment often runs in clean settings, with strict rules and sensitive fluids. A worn seal can affect accuracy, contaminate a sample or stop a machine.',
    challenges: ['Keeping wear particles low', 'Repeatable movement over many cycles', 'Resistance to cleaning fluids', 'Running without added lubricant'],
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
    why: 'Semiconductor tools protect delicate wafers from tiny contaminants. Sealing parts must handle vacuum and harsh chemistry while releasing as few particles and gases as possible.',
    challenges: ['Low particle generation', 'Low outgassing in vacuum', 'Plasma and chemical exposure', 'Long intervals between tool stops'],
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
    why: 'Aircraft parts must be light and dependable through large temperature swings. Polymer seals and bearings can reduce weight and work where lubrication is limited.',
    challenges: ['Wide temperature changes', 'Low weight', 'Fuels and hydraulic fluids', 'Long service life and traceability'],
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
    why: 'Vehicles need parts that survive heat, vibration and millions of cycles at a practical cost. Polymers are used in transmissions, e-axles and battery systems.',
    challenges: ['Repeated heat cycles', 'High torque and limited lubrication', 'Quiet, low-friction running', 'Consistency across production volumes'],
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

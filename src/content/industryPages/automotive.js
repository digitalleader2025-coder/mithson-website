// Industries > Automotive, from the approved brief (November 2026).
// Rules the brief sets: no IATF 16949, vehicle-OEM approval or PPAP claims; no universal pressure
// rating or service-life guarantee; the old PEEK 260°C and gasket 150°C / 50 bar figures are not
// shown because Mithson has not confirmed the grade and design behind them.
import hero from '../../assets/industries/Automotive.webp';
import gears from '../../assets/industries/automotive/gears-close.jpg';
import * as img from './images';

const { PATHS } = img;

export default {
  docTitle: 'Automotive Sealing & Polymer Components',
  hero: {
    label: 'Industries / Automotive',
    title: 'Automotive.',
    accent: 'Precision polymer seals',
    rest: 'for drivetrain and e-mobility.',
    lead:
      'Modern vehicles need components that cope with repeated movement, temperature swings, vibration, pressure changes and demanding lubrication. Mithson makes polymer seals and precision parts in PTFE, filled PTFE, PEEK, engineering thermoplastics and selected elastomers.',
    lead2:
      'The portfolio covers PTFE transmission seals, spring-energized seals, engineered washers, custom molded and machined parts and bearing products, backed by over 25 years of polymer engineering heritage through the Fluoro Carbon Seals Group.',
    tags: ['Friction control', 'Wear resistance', 'Fluid sealing', 'Dimensional consistency', 'Electric mobility'],
    image: hero,
    imageAlt: 'Robotic vehicle assembly line in an automotive plant',
    chips: [
      { icon: 'gear', title: '7 product families', text: 'Seals, washers, bearings, parts' },
      { icon: 'flask', title: '8 materials', text: 'PTFE, PEEK, CF-PEEK, HNBR, FKM, EPDM, PU' },
      { icon: 'bolt', title: 'EV ready', text: 'E-drive and thermal systems' },
      { icon: 'shield', title: 'ISO 9001:2015', text: 'Quality management certification' },
    ],
  },

  challenges: {
    title: 'Why precision sealing matters in automotive',
    intro:
      'Continuous movement, friction, load, vibration, temperature change and contact with lubricants all affect performance. The right polymer part reduces friction, controls leakage, protects mating surfaces and keeps the mechanism running consistently.',
    items: [
      { icon: 'thermo', title: 'Repeated thermal cycling', text: 'Starting, running and cooling change the temperature constantly.', list: ['Properties suited to the full range', 'Thermal expansion designed in', 'Stable dimensions and sealing'] },
      { icon: 'wear', title: 'Friction and mechanical wear', text: 'Sliding contact and repeated cycles wear parts and counterfaces.', list: ['Low-friction materials', 'Wear-resistant polymers', 'Geometry and surface finish'] },
      { icon: 'gear', title: 'Transmission and drivetrain loads', text: 'Movement, pressure variation, vibration and lubricant exposure together.', list: ['Sealing geometry to suit', 'Lubricant compatibility', 'Dimensional stability'] },
      { icon: 'drop', title: 'Fluid and chemical compatibility', text: 'Transmission oils, gear lubricants, hydraulic fluids, greases, coolants and cleaners.', list: ['Checked against the exact fluid', 'Temperature and exposure time', 'Compound chosen for the environment'] },
      { icon: 'bolt', title: 'Electric vehicle requirements', text: 'E-drives, thermal management, battery-related equipment and auxiliaries.', list: ['Electrical and thermal environment', 'Insulating properties where needed', 'Precision and fluid compatibility'] },
      { icon: 'ruler', title: 'Production consistency', text: 'Volume manufacturing depends on repeatable dimensions and quality.', list: ['Controlled tolerances', 'Traceable batches where required', 'Inspection to agreed requirements'] },
    ],
  },

  products: {
    title: 'Engineered products for automotive applications',
    intro: 'Real Mithson products with their own photographs. Applications are potential areas, not OEM approvals or vehicle-specific qualifications.',
    items: [
      { name: 'PTFE Transmission Seals', tag: 'A', image: img.transmissionSeal, path: PATHS.washers,
        desc: 'Low friction, wear-resistant options and chemical resistance to compatible fluids, in a precision-made sealing geometry.',
        uses: 'Automatic transmissions, drivetrain sealing, rotating and lubricated assemblies.' },
      { name: 'Washers – Transmission', tag: 'B', image: img.thrustWasher, path: PATHS.washers,
        desc: 'Engineered washers in suitable polymers, including carbon-filled PEEK where specified, for controlled friction and wear resistance.',
        uses: 'Transmission thrust arrangements, support interfaces, rotating assemblies.' },
      { name: 'Custom Molded Products', tag: 'C', image: img.customMolded, path: PATHS.customMolded,
        desc: 'Application-specific shapes, profiles and geometries made to your drawing.',
        uses: 'Custom seals, insulation parts, specialised rubber and polymer parts.' },
      { name: 'Machined Products', tag: 'D', image: img.machined, path: PATHS.machined,
        desc: 'Controlled dimensions and specific geometries in the engineering material chosen.',
        uses: 'Precision bushes, wear parts, support rings, spacers, drivetrain components.' },
      { name: 'Spring-Energized Seals', tag: 'E', image: img.mUni, path: PATHS.mUni,
        desc: 'A polymer jacket and spring that keep sealing contact under appropriate conditions.',
        uses: 'Hydraulic systems, rotary and reciprocating equipment, fluid handling.' },
      { name: 'UNI-LUBE Bearing', tag: 'F', image: img.uniLube, path: PATHS.uniLube,
        desc: 'Engineered and self-lubricating bearings, selected for load, speed, temperature, lubrication and shaft material.',
        uses: 'Support assemblies, sliding interfaces, industrial vehicle mechanisms.' },
      { name: 'Encapsulated O-Rings', tag: 'G', image: img.encapsulated, path: PATHS.encapsulated,
        desc: 'An elastomer core with a polymer encapsulation for elastic recovery plus chemical resistance.',
        uses: 'Static fluid sealing, fluid-handling equipment, chemical-contact sealing.' },
    ],
  },

  applications: {
    title: 'Where Mithson polymer components can be used',
    intro: 'Select an application area to see the components involved and what the engineering review looks at.',
    items: [
      { title: 'Automatic transmission systems', photo: gears, photoAlt: 'Gear set inside a transmission',
        text: 'Repeated movement, lubricant exposure, mechanical load and temperature variation. The review covers fluid compatibility, friction and wear, dimensional stability, speed and temperature.',
        parts: ['PTFE transmission seals', 'Transmission washers', 'Precision polymer parts', 'Custom sealing parts'] },
      { title: 'Electric drive units and e-axles',
        text: 'Motors, reduction gearing, bearings, shafts and lubrication in one unit. The review covers lubricant compatibility, thermal exposure, rotation, vibration and the electrical environment.',
        parts: ['Precision sealing elements', 'Engineered washers', 'Support and wear parts', 'Custom polymer parts'] },
      { title: 'Automotive hydraulic systems',
        text: 'Hydraulic mechanisms in cars and commercial vehicles. The review covers pressure, fluid compatibility, reciprocating movement, extrusion clearance and wear.',
        parts: ['Piston and rod seals', 'Wiper seals', 'Wear rings', 'Hydraulic sealing elements'] },
      { title: 'Engine and auxiliary systems',
        text: 'Assemblies that see heat and chemical exposure. The review covers heat, oil and fluid compatibility, load and dimensional stability.',
        parts: ['Custom molded seals', 'PTFE sealing parts', 'Polymer support parts', 'Application-specific washers'] },
      { title: 'Commercial and heavy-duty vehicles',
        text: 'Heavy loads, repeated cycles, vibration and varied environments. The review covers load and impact, wear, cycles and maintenance.',
        parts: ['Polymer bushes', 'Wear components', 'Transmission seals', 'Custom machined parts'] },
      { title: 'Fluid management systems',
        text: 'Containing lubricants, hydraulic fluids, coolants and other media. The review covers chemical compatibility, pressure, temperature and static or dynamic duty.',
        parts: ['O-rings', 'PTFE seals', 'Custom molded seals', 'Precision polymer parts'] },
    ],
  },

  sections: [
    {
      id: 'transmission',
      label: 'Transmission seals',
      title: 'Precision PTFE transmission seals',
      intro: 'Transmission seals control lubricant leakage and support moving assemblies. Correctly designed for the fluid, speed, temperature and conditions, PTFE-based seals offer useful friction and wear behaviour.',
      feature: {
        image: img.transmissionSeal,
        alt: 'Mithson PTFE transmission seals',
        rows: [
          ['Material options', 'PTFE and appropriate filled PTFE grades'],
          ['Friction', 'Low friction, depending on compound and counterface'],
          ['Wear', 'Grade- and application-dependent wear resistance'],
          ['Fluid compatibility', 'Evaluated against the specified transmission fluid'],
          ['Geometry', 'Designed around your drawing and sealing requirement'],
          ['Manufacturing', 'Precision-made to agreed dimensions and tolerances'],
        ],
        uses: ['Automatic transmission assemblies', 'Rotating shaft sealing', 'Lubricated mechanical systems', 'Specialised drivetrain equipment'],
        path: PATHS.washers,
      },
    },
    {
      id: 'materials',
      label: 'Materials',
      title: 'Advanced polymer materials for automotive engineering',
      intro: 'Material decides how a part behaves under load, heat, friction, wear and chemical contact. No single polymer suits every application.',
      cards: [
        { title: 'PTFE', text: 'Transmission seals, dynamic seals, wear parts and sliding interfaces.', list: ['Low friction', 'Excellent chemical resistance', 'Filled and modified grades'] },
        { title: 'Filled PTFE', text: 'Transmission sealing, wear rings and sliding parts.', list: ['Fillers tune performance', 'Improved wear in suitable compounds', 'Grade-dependent properties'] },
        { title: 'PEEK', text: 'Transmission washers, thrust parts and precision supports.', list: ['High mechanical strength', 'Good wear resistance', 'High-temperature capability'] },
        { title: 'Carbon-filled PEEK', text: 'Transmission washers, thrust interfaces and wear parts.', list: ['Reinforced mechanical properties', 'Enhanced wear in suitable grades', 'Demanding precision duty'] },
        { title: 'HNBR', text: 'Oil-contact sealing, hydraulics and fluid handling.', list: ['Oil resistance in suitable grades', 'Better heat and ageing than NBR', 'Selected dynamic sealing'] },
        { title: 'FKM', text: 'Oil seals, fuel contact, static and dynamic sealing where suitable.', list: ['Resists many oils and fuels', 'Compound-dependent temperature', 'Selected automotive fluids'] },
        { title: 'EPDM', text: 'Coolant systems, water-contact and weather-exposed seals.', list: ['Water and weathering resistance', 'Coolant contact where suitable', 'Good ozone resistance'] },
      ],
    },
    {
      id: 'performance',
      label: 'Material performance',
      title: 'Understanding automotive material performance',
      table: {
        cols: ['Material', 'Typical engineering consideration'],
        rows: [
          ['PTFE', 'Low friction and chemical resistance'],
          ['Filled PTFE', 'Grade-dependent wear and mechanical performance'],
          ['PEEK', 'High mechanical strength and thermal capability'],
          ['Carbon-filled PEEK', 'Reinforced wear and mechanical characteristics'],
          ['HNBR', 'Oil resistance and selected thermal applications'],
          ['FKM', 'Oil and fuel compatibility, depending on compound'],
          ['EPDM', 'Water, coolant and weathering resistance'],
          ['PU', 'Abrasion and wear resistance in suitable grades'],
        ],
      },
      note: 'All performance values are indicative and depend on material grade, component geometry, operating conditions and application design. Actual product specifications and suitability must be confirmed by Mithson engineering.',
    },
    {
      id: 'selection',
      label: 'Selection guide',
      title: 'How to select the right polymer component',
      table: {
        cols: ['Parameter', 'Engineering requirement'],
        rows: [
          ['Temperature', 'Continuous and intermittent operating temperatures'],
          ['Pressure', 'Normal operating pressure and pressure spikes'],
          ['Fluid', 'ATF, gear oil, engine oil, hydraulic fluid, coolant or other media'],
          ['Movement', 'Static, reciprocating, oscillating or rotary'],
          ['Speed', 'Surface speed and rotational speed'],
          ['Load', 'Mechanical loading and contact pressure'],
          ['Friction', 'Required friction and lubrication conditions'],
          ['Wear', 'Expected operating cycles and service requirements'],
          ['Geometry', 'Dimensions, grooves, clearances and tolerances'],
          ['Material', 'Polymer grade and compound specification'],
          ['Installation', 'Assembly conditions and method'],
          ['Validation', 'Inspection and testing requirements'],
        ],
      },
      note: 'Complete application details let Mithson engineering assess material suitability, component design and manufacturing feasibility more effectively.',
    },
    {
      id: 'problems',
      label: 'Problem and solution',
      title: 'Engineering challenges, application-focused answers',
      table: {
        cols: ['Automotive challenge', 'Engineering approach'],
        rows: [
          ['Excessive sliding friction', 'Evaluate PTFE-based material options'],
          ['Wear in sliding assemblies', 'Consider suitable filled PTFE or PEEK grades'],
          ['Lubricant leakage', 'Review seal design and fluid compatibility'],
          ['Dimensional variation', 'Controlled manufacturing and inspection'],
          ['Repeated mechanical movement', 'Appropriate dynamic sealing geometry'],
          ['Application-specific geometry', 'Custom molding or precision machining'],
          ['Thermal exposure', 'Grade evaluated against the actual temperatures'],
        ],
      },
      note: 'These are engineering approaches, not guaranteed results. Outcomes depend on the complete system design and application testing.',
    },
    {
      id: 'process',
      label: 'Manufacturing and quality',
      title: 'From polymer material to precision automotive component',
      steps: [
        { title: 'Engineering review', text: 'Drawings, application conditions, geometry, dimensions and operating requirements.' },
        { title: 'Material selection', text: 'Polymer or elastomer grade from thermal, mechanical, chemical and friction needs.' },
        { title: 'Manufacturing', text: 'Molding or machining to suit the design, material and production requirement.' },
        { title: 'Dimensional inspection', text: 'Critical dimensions, geometry and the agreed quality requirements.' },
        { title: 'Verification and delivery', text: 'Checked against the approved specification and inspection plan before dispatch.' },
      ],
      note: 'Mithson holds ISO 9001:2015 certification. It does not claim IATF 16949 certification, vehicle-OEM approval or PPAP qualification.',
    },
    {
      id: 'why',
      label: 'Why Mithson',
      title: 'Polymer engineering experience, precision manufacturing',
      cards: [
        { icon: 'clock', title: '25+ years of heritage', text: 'A long-standing engineering heritage through the Fluoro Carbon Seals Group.' },
        { icon: 'flask', title: 'Advanced materials', text: 'PTFE, modified PTFE, PEEK, fluoropolymers, thermoplastics and selected elastomers.' },
        { icon: 'doc', title: 'Custom development', text: 'Products developed to your drawings and application requirements.' },
        { icon: 'gear', title: 'Precision manufacturing', text: 'Machined and molded capability for different geometries.' },
        { icon: 'thermo', title: 'Application-based selection', text: 'The actual operating environment decides the material.' },
        { icon: 'shield', title: 'Quality and support', text: 'Quality from material to inspection, plus engineering consultation.' },
      ],
    },
    {
      id: 'send',
      label: 'What to send us',
      title: 'Details for a custom automotive seal',
      checklist: [
        { title: 'Design', items: ['Component drawing or CAD model', 'Shaft and housing dimensions', 'Surface finish and tolerances'] },
        { title: 'Conditions', items: ['Operating temperature', 'Operating pressure', 'Fluid or lubricant specification'] },
        { title: 'Duty', items: ['Rotational or linear movement', 'Expected operating cycles', 'Material and grade, if known', 'Applicable customer standards'] },
      ],
      cta: true,
    },
  ],

  faqTitle: 'Automotive engineering questions',
  faqs: [
    { q: 'What polymer materials suit automotive transmission seals?', a: 'PTFE and selected filled PTFE grades, for their friction and wear behaviour. Suitability depends on fluid compatibility, temperature, speed, pressure and seal geometry.' },
    { q: 'What is the advantage of PTFE transmission seals?', a: 'A low coefficient of friction and broad chemical resistance. Depending on formulation and design, PTFE suits demanding sealing and sliding duty.' },
    { q: 'Can PEEK be used for transmission washers?', a: 'Yes, where its properties suit the application. PEEK offers good strength and wear behaviour for thrust washers and other precision parts.' },
    { q: 'Does Mithson manufacture custom automotive polymer components?', a: 'Yes. Custom molded and precision-machined products are made to your drawings, material specifications and manufacturing requirements.' },
    { q: 'Which materials suit oil-contact applications?', a: 'PTFE, HNBR, FKM and others may be considered, depending on the oil formulation, temperature, pressure and exposure duration.' },
    { q: 'Can Mithson support electric vehicle applications?', a: 'Mithson polymer product families may be evaluated for selected e-mobility sealing, support and wear duties. Each application is reviewed individually.' },
    { q: 'What details are needed for a custom automotive seal?', a: 'Drawing or CAD model, material and grade if known, temperature, pressure, fluid specification, movement, shaft and housing dimensions, surface finish and tolerances, cycles and applicable standards.' },
    { q: 'Can Mithson make prototype and production components?', a: 'Contact the Mithson team to discuss prototype requirements, manufacturing feasibility, volumes and delivery expectations.' },
  ],

  closing: {
    title: 'Looking for automotive sealing and polymer component solutions?',
    text: 'Have a transmission sealing requirement, a precision polymer part or a custom application? Share your drawings, material preferences, operating conditions and manufacturing requirements, and our team will help identify the right approach.',
  },
  disclaimer: 'All performance values are indicative and depend on material grade, component geometry, operating conditions and application design. Suitability is confirmed by Mithson engineering.',
  credits: [{ photo: 'Transmission gear set', by: 'Kirill Prikhodko' }],
};

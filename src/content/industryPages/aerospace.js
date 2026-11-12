// Industries > Aerospace, from the approved brief (November 2026).
// Rules the brief sets: no AS9100, aviation-authority, OEM or aerospace certification claims;
// no maximum pressure, temperature or service-life figures; product families are presented as
// potentially relevant, never as certified aerospace parts. The 25-year figure is the group's
// heritage, worded as the About page words it.
import hero from '../../assets/industries/Aerospace.webp';
import * as img from './images';

const { PATHS } = img;

export default {
  docTitle: 'Aerospace Sealing Solutions',
  hero: {
    label: 'Industries / Aerospace',
    title: 'Aerospace.',
    accent: 'Precision polymer seals',
    rest: 'for demanding applications.',
    lead:
      'Aerospace systems run where reliability, dimensional stability and material performance are essential. From engines and fuel systems to hydraulic actuators and landing gear, every sealing component helps maintain system integrity.',
    lead2:
      'Mithson specialises in precision polymer sealing components in PTFE-based materials, PEEK, polyimide and custom-engineered designs, for applications that need dependable sealing, controlled friction, wear resistance and dimensional precision.',
    tags: ['Application-specific material selection', 'Optimised component geometry', 'Manufactured to your drawing', 'Controlled friction and wear'],
    image: hero,
    imageAlt: 'Aircraft jet engine',
    chips: [
      { icon: 'gear', title: '6 product families', text: 'Molded, machined, PTFE, PEEK, seals' },
      { icon: 'flask', title: '6 material groups', text: 'PTFE, PEEK, polyimide and more' },
      { icon: 'wind', title: '6 application areas', text: 'Engines to ground support' },
      { icon: 'clock', title: '25+ years', text: 'Polymer engineering heritage through the group' },
    ],
  },

  challenges: {
    title: 'Why precision sealing matters in aerospace',
    intro:
      'Temperature swings, hydraulic fluids, fuels, pressure changes, vibration and repeated movement make material selection and component design especially important. Poor sealing can lead to leakage, downtime, more maintenance and lower reliability.',
    items: [
      { icon: 'thermo', title: 'Wide temperature variation', text: 'Materials are selected to the actual operating and environmental temperature range, with thermal stability and dimensional consistency in mind.' },
      { icon: 'gauge', title: 'Pressure and vacuum', text: 'Hydraulic and pneumatic systems need dependable sealing. Geometry and material are checked against pressure, extrusion gaps and operating cycles.' },
      { icon: 'drop', title: 'Chemical and fluid compatibility', text: 'Fuel, hydraulic fluids, lubricants and other media can affect polymers, so compatibility is confirmed before selection.' },
      { icon: 'wind', title: 'Low friction and wear', text: 'Moving components need controlled friction and wear resistance; the right polymer supports consistent movement.' },
      { icon: 'ruler', title: 'Dimensional accuracy', text: 'Precision parts must meet specified tolerances, backed by manufacturing consistency and inspection.' },
      { icon: 'clock', title: 'Long service life', text: 'Material selection, design validation and application testing all contribute to reliability and controlled maintenance intervals.' },
    ],
  },

  products: {
    title: 'Engineered products for aerospace applications',
    intro: 'Real Mithson product families with their own photographs. Depending on design, material, environment and engineering validation, selected families may suit aerospace-related applications.',
    items: [
      { name: 'Custom Molded Products', tag: 'A', image: img.customMolded, path: PATHS.customMolded,
        desc: 'Polymer components made to your drawing, application and material specification.',
        uses: 'Custom sealing elements, specialised and insulating components, complex molded geometries.' },
      { name: 'Machined Products', tag: 'B', image: img.machined, path: PATHS.machined,
        desc: 'Precision-machined engineering polymer parts for dimensional accuracy and custom geometry.',
        uses: 'Precision seals, wear parts, bushings and supports, prototypes and low-volume parts.' },
      { name: 'PTFE Components', tag: 'C', image: img.ptfeParts, path: PATHS.machined,
        desc: 'Low friction, chemical resistance and useful thermal properties.',
        uses: 'Dynamic seals, back-up rings, wear rings, sliding parts, fluid-system components.' },
      { name: 'PEEK Components', tag: 'D', image: img.peekParts, path: PATHS.machined,
        desc: 'Mechanical strength, wear resistance and thermal performance.',
        uses: 'Structural polymer parts, precision supports, wear parts, high-performance sealing.' },
      { name: 'Spring-Energized Seals', tag: 'E', image: img.mUni, path: PATHS.mUni,
        desc: 'A polymer jacket and an energizing spring that maintain sealing contact under suitable conditions.',
        uses: 'Dynamic sealing, hydraulic equipment, demanding pressure or temperature duty.' },
      { name: 'Encapsulated O-Rings', tag: 'F', image: img.encapsulated, path: PATHS.encapsulated,
        desc: 'An elastomer core with a polymer encapsulation, depending on the design selected.',
        uses: 'Static sealing, chemical-resistant sealing, where core and jacket compatibility fit.' },
    ],
    note: 'These are potentially relevant product families, not certified or approved aerospace components. Actual suitability is confirmed by Mithson engineering.',
  },

  applications: {
    title: 'Where Mithson components can be applied',
    intro: 'Select an application area to see what it demands from the seal.',
    items: [
      { title: 'Aircraft gas turbine engines', text: 'Seals and precision polymer parts for selected auxiliary, fluid-handling and supporting mechanical systems associated with propulsion equipment.', parts: ['Thermal stability', 'Fluid compatibility', 'Dimensional precision', 'Wear resistance'] },
      { title: 'Aircraft fuel systems', text: 'Sealing materials that withstand contact with the specified aviation fuels and operating conditions.', parts: ['Fuel compatibility', 'Leakage control', 'Material stability', 'Reliable sealing geometry'] },
      { title: 'Hydraulic actuation systems', text: 'Pressurised fluid drives critical mechanical functions, so dynamic sealing has to perform consistently.', parts: ['Pressure resistance', 'Controlled friction', 'Wear resistance', 'Dynamic sealing performance'] },
      { title: 'Landing gear assemblies', text: 'Mechanical loads, vibration, environmental exposure and repeated movement.', parts: ['Wear resistance', 'Dimensional stability', 'Mechanical durability', 'Friction and lubrication'] },
      { title: 'Bearings and support systems', text: 'Engineering polymers for selected bearing and support duties needing low friction, wear resistance and stability.', parts: ['Low friction', 'Wear resistance', 'Load suitability', 'Dimensional accuracy'] },
      { title: 'Auxiliary and ground-support equipment', text: 'Customised sealing and precision polymer components for auxiliary systems and ground-support equipment.', parts: ['Chemical compatibility', 'Reliable operation', 'Custom dimensions', 'Application-specific materials'] },
    ].map((a) => ({ ...a, partsLabel: 'Key requirements' })),
  },

  sections: [
    {
      id: 'materials',
      label: 'Engineering materials',
      title: 'High-performance materials for demanding environments',
      intro: 'Each polymer has different mechanical, thermal, chemical and tribological characteristics. Mithson selects materials to the component geometry, operating conditions and your specification.',
      cards: [
        { title: 'PTFE', text: 'Spring-energized seals, back-up rings, wear rings and sliding parts.', list: ['Low coefficient of friction', 'Excellent chemical resistance', 'Broad thermal capability', 'Static and dynamic sealing'] },
        { title: 'PEEK', text: 'Precision-machined parts, support rings and demanding engineering duties.', list: ['High mechanical strength', 'Good wear resistance', 'High-temperature capability', 'Dimensional stability'] },
        { title: 'Polyimide', text: 'Specialty components, wear elements and selected high-temperature duties.', list: ['High-temperature performance', 'Dimensional stability in suitable grades', 'Good mechanical properties'] },
        { title: 'UHMW-PE', text: 'Wear components, guide elements and selected supports.', list: ['High abrasion resistance', 'Low friction', 'Good impact resistance'] },
        { title: 'Fluoropolymers', text: 'Specialised sealing and fluid-contact components.', list: ['Chemical resistance', 'Low friction', 'Electrical insulation in suitable grades'] },
        { title: 'Corrosion-resistant metal springs', text: 'The energizer inside spring-energized seal designs.', list: ['Mechanical energisation', 'Resilience', 'Force retention to design and material'] },
      ],
      note: 'Material grades, temperature limits, pressure limits and aerospace suitability are confirmed against actual datasheets and the application requirements.',
    },
    {
      id: 'construction',
      label: 'How they are built',
      title: 'Spring-energized seal and encapsulated O-ring',
      intro: 'Drawn cross-sections of product families E and F.',
      diagrams: ['spring', 'encap'],
    },
    {
      id: 'selection',
      label: 'Selection guide',
      title: 'Selecting the right sealing solution',
      table: {
        cols: ['Engineering parameter', 'What needs to be evaluated'],
        rows: [
          ['Operating temperature', 'Minimum and maximum continuous and intermittent temperatures'],
          ['Pressure', 'Operating pressure, pressure spikes and vacuum conditions'],
          ['Operating media', 'Aviation fuel, hydraulic fluids, lubricants and chemicals'],
          ['Movement', 'Static, reciprocating, rotary or oscillating'],
          ['Friction', 'Required friction characteristics and surface finish'],
          ['Wear', 'Expected duty cycle and component movement'],
          ['Dimensions', 'Bore, shaft, groove, clearance and tolerances'],
          ['Material', 'Polymer grade, reinforcement and compatibility'],
          ['Installation', 'Assembly method, gland geometry and installation limits'],
          ['Validation', 'Inspection, testing and customer qualification requirements'],
        ],
      },
    },
    {
      id: 'performance',
      label: 'Performance considerations',
      title: 'Designed around application requirements',
      intro: 'No maximum pressure, temperature or service-life guarantee is shown here: each depends on the factors below.',
      cards: [
        { icon: 'thermo', title: 'Temperature capability', text: 'Depends on polymer grade, mechanical loading, exposure duration and operating media.' },
        { icon: 'gauge', title: 'Pressure capability', text: 'Depends on seal geometry, extrusion gap, material hardness and system design.' },
        { icon: 'drop', title: 'Chemical compatibility', text: 'Evaluated against the exact fuel, hydraulic fluid, lubricant and cleaning chemicals.' },
        { icon: 'wind', title: 'Friction', text: 'Depends on polymer composition, counterface material, surface finish and lubrication.' },
        { icon: 'wear', title: 'Wear performance', text: 'Influenced by load, speed, temperature, operating cycles and environment.' },
        { icon: 'ruler', title: 'Dimensional stability', text: 'Depends on material, manufacturing tolerances, thermal expansion and installation.' },
      ],
    },
    {
      id: 'process',
      label: 'Manufacturing and quality',
      title: 'Precision manufacturing for demanding applications',
      steps: [
        { title: 'Engineering drawing review', text: 'Review drawings and specifications, understand operating conditions, identify critical dimensions and tolerances.' },
        { title: 'Material selection', text: 'Evaluate suitable polymers, review chemical and thermal compatibility, select the grade.' },
        { title: 'Precision manufacturing', text: 'Molding or machining that holds the specified geometry and dimensional consistency.' },
        { title: 'Inspection and quality control', text: 'Inspect critical dimensions, surface finish and condition; verify against the approved specification.' },
        { title: 'Application evaluation', text: 'Review the intended application, identify any further testing or validation, support your engineering team.' },
      ],
      note: 'Mithson does not claim AS9100 approval, aviation-authority approval, OEM qualification or other aerospace certification.',
    },
    {
      id: 'why',
      label: 'Why Mithson',
      title: 'Your engineering partner for precision polymer components',
      cards: [
        { icon: 'clock', title: '25+ years of heritage', text: 'Over 25 years of polymer engineering heritage through the group.' },
        { icon: 'flask', title: 'Engineering polymers', text: 'Experience across PTFE, PEEK, polyimide and other engineering materials.' },
        { icon: 'gear', title: 'Molded and machined', text: 'Custom molded and precision-machined component capability.' },
        { icon: 'thermo', title: 'Application-led selection', text: 'Material chosen to the application, not from a catalogue.' },
        { icon: 'doc', title: 'Built to your drawing', text: 'Product development from your drawings, with engineering consultation and support.' },
        { icon: 'shield', title: 'Multiple seal families', text: 'Several sealing product families for demanding industrial duty.' },
      ],
    },
    {
      id: 'send',
      label: 'What to send us',
      title: 'Information for a component request',
      checklist: [
        { title: 'Design', items: ['Technical drawings or CAD files', 'Component dimensions and tolerances', 'Required material specifications'] },
        { title: 'Conditions', items: ['Operating temperature range', 'Operating pressure', 'Fluid or chemical exposure'] },
        { title: 'Duty', items: ['Movement type and operating cycles', 'Applicable industry or customer standards'] },
      ],
      cta: true,
    },
  ],

  faqTitle: 'Aerospace technical questions',
  faqs: [
    { q: 'What sealing materials are suitable for aerospace applications?', a: 'PTFE, PEEK, polyimide and selected fluoropolymers may be considered. The right material depends on temperature, pressure, fluid compatibility, mechanical loading and qualification requirements.' },
    { q: 'Can Mithson manufacture custom aerospace-related polymer components?', a: 'Mithson makes custom molded and machined polymer components from your drawings and specifications. Application suitability and qualification requirements are reviewed with the engineering team.' },
    { q: 'Can PTFE be used in aircraft hydraulic systems?', a: 'PTFE-based materials appear in many hydraulic sealing designs, but the grade and design are evaluated against the fluid, pressure, temperature, movement and the applicable aerospace specifications.' },
    { q: 'What information should I provide when requesting a component?', a: 'Drawings or CAD files, dimensions and tolerances, temperature range, pressure, fluid exposure, movement and cycles, material specifications and any applicable standards.' },
    { q: 'Does Mithson provide application-specific engineering support?', a: 'Yes. Contact Mithson to discuss material selection, component geometry, manufacturing feasibility and technical requirements.' },
    { q: 'Are Mithson products aerospace certified?', a: 'Certification and aerospace qualification are confirmed for the specific component and application. Contact Mithson to discuss documentation, inspection and qualification requirements.' },
  ],

  closing: {
    title: 'Looking for precision polymer components for aerospace applications?',
    text: 'Whether you need a custom polymer seal, a precision-machined part, a wear-resistant component or an application-specific sealing solution, our team will review your drawings and technical specifications.',
  },
  disclaimer: 'Typical engineering material properties are shown for guidance and are not verified Mithson product specifications. Suitability is confirmed by Mithson engineering for each application.',
  credits: [],
};

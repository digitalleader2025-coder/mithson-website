// Industries > Mining, from the approved brief (November 2026).
// Rules the brief sets: no universal temperature, pressure, speed or load values; no invented
// customers, projects or service-life claims; final selection needs an engineering assessment.
import hero from '../../assets/industries/Mining.webp';
import excavator from '../../assets/industries/mining/excavator-open-pit.jpg';
import * as img from './images';

const { PATHS } = img;

export default {
  docTitle: 'Mining Industry Sealing Solutions',
  hero: {
    label: 'Industries / Mining',
    title: 'Mining.',
    accent: 'Polymer seals and bearings',
    rest: 'for demanding environments.',
    lead:
      'Mining equipment works in abrasive dust, mud, mineral slurry, heavy vibration, impact loads and hard hydraulic cycles, all of which stress the seals. Mithson makes precision polymer sealing components for hydraulic cylinders, pumps, valves, rotating equipment and other critical machinery.',
    lead2:
      'With expertise in advanced polymers, thermoplastics and elastomers, the engineering focus is material compatibility, dimensional accuracy, wear resistance, sealing performance and application-specific design.',
    image: hero,
    imageAlt: 'Mining excavator loading a dump truck',
    chips: [
      { icon: 'gauge', title: 'Hydraulic sealing', text: 'Piston, rod, wiper, wear rings and kits' },
      { icon: 'flask', title: 'Advanced polymers', text: 'PU, HNBR, FKM, PTFE, PEEK, nylon' },
      { icon: 'gear', title: 'Custom-engineered', text: 'Made to your drawing or sample' },
    ],
  },

  challenges: {
    title: 'Why reliable sealing matters in mining operations',
    intro:
      'Dust, abrasive particles, moisture and heavy loads attack hydraulic and mechanical systems. A well-designed sealing system keeps hydraulic fluid in, keeps contaminants out and holds the conditions the equipment needs.',
    items: [
      { icon: 'dust', title: 'Abrasive dust protection', text: 'Fine dust, mineral particles and debris try to enter hydraulic assemblies. Properly selected wiper seals keep contaminants away from sensitive cylinder parts.' },
      { icon: 'drop', title: 'Hydraulic fluid retention', text: 'Cylinders rely on effective rod and piston sealing to retain fluid and hold the required system pressure.' },
      { icon: 'wear', title: 'Mechanical wear management', text: 'Wear rings and bearings guide moving parts, maintain alignment and reduce metal-to-metal contact in suitable applications.' },
      { icon: 'cycle', title: 'Heavy-duty operating cycles', text: 'Excavators and loaders extend, retract and load repeatedly. Seals are selected to movement, pressure, speed and conditions.' },
      { icon: 'flask', title: 'Material compatibility', text: 'Hydraulic fluids, lubricants, cleaning chemicals and weather affect polymers and elastomers, so the whole environment is considered.' },
      { icon: 'clock', title: 'Equipment maintenance', text: 'The right sealing solution helps reduce leakage, contamination-related wear and unnecessary maintenance.' },
    ],
  },

  products: {
    title: 'Mithson products for mining applications',
    intro: 'Precision polymer components for hydraulic, mechanical and fluid-handling systems, each shown with its own Mithson product photograph.',
    items: [
      { name: 'Hydraulic Piston Seals', image: img.pistonSeal, path: PATHS.hydraulic,
        desc: 'Stop fluid bypassing the piston, holding the pressure separation that drives controlled cylinder movement.',
        materials: 'Application-dependent elastomers and engineered polymers', uses: 'Excavator and loader cylinders, lifting systems.' },
      { name: 'Hydraulic Rod Seals', image: img.rodSeal, path: PATHS.hydraulic,
        desc: 'Retain fluid as the rod moves through the cylinder head, controlling external leakage during reciprocating work.',
        uses: 'Boom, bucket and arm cylinders, heavy-duty cylinders.' },
      { name: 'Hydraulic Wiper Seals', image: img.wiperSeal, path: PATHS.hydraulic,
        desc: 'Keep dust, dirt, moisture and other contaminants from entering the cylinder along the moving rod.',
        uses: 'Excavators, loaders, hydraulic presses, heavy machinery.' },
      { name: 'Hydraulic Wear Rings', image: img.wearRing, path: PATHS.hydraulic,
        desc: 'Guide piston and rod, maintain alignment and reduce direct metal-to-metal contact.',
        uses: 'Piston assemblies, rod guidance, mining machinery cylinders.' },
      { name: 'Hydraulic Seal Kits', image: img.sealKit, path: PATHS.hydraulic,
        desc: 'Selected sealing components for maintaining or assembling hydraulic cylinders and related systems.',
        uses: 'Cylinder servicing, equipment maintenance, refurbishment.' },
      { name: 'MSS Self-Lubricating Bearings', image: img.mssSelfLube, path: PATHS.uniLube,
        desc: 'Controlled friction and wear with less dependence on external lubrication.',
        uses: 'Support assemblies, rotating equipment, articulation points.' },
      { name: 'MSS Bi-Metal Bearings', image: img.mssBimetal, path: PATHS.uniLube,
        desc: 'A metal backing with a bearing layer, for application-specific loads and conditions.',
        uses: 'Industrial machinery, rotating equipment, support assemblies.' },
      { name: 'MSS Solid Bushes', image: img.mssSolidBush, path: PATHS.uniLube,
        desc: 'Support and guidance between moving parts, selected to load, movement, speed and environment.',
        uses: 'Machinery joints, linkages, support systems.' },
      { name: 'PTFE Seals and Components', image: img.ptfeParts, path: PATHS.machined,
        desc: 'Chemical compatibility, low friction and dimensional stability under appropriate conditions.',
        uses: 'Fluid handling, industrial pumps, selected hydraulic and valve assemblies.' },
      { name: 'Custom Machined Polymer Components', image: img.machined, path: PATHS.machined,
        desc: 'Made to your drawings, application requirements and material specifications.',
        uses: 'Specialised assemblies, non-standard replacement parts.' },
    ],
  },

  applications: {
    title: 'Where Mithson sealing solutions can be applied',
    intro: 'Mining depends on connected hydraulic, mechanical and fluid-handling systems. Select an equipment type.',
    items: [
      { title: 'Excavators and hydraulic backhoes', photo: excavator, photoAlt: 'Hydraulic excavator working in an open-pit mine',
        text: 'Boom, arm and bucket cylinders, piston and rod assemblies and cylinder guidance.',
        parts: ['Hydraulic piston seals', 'Hydraulic rod seals', 'Hydraulic wiper seals', 'Hydraulic wear rings', 'Hydraulic seal kits'] },
      { title: 'Dump trucks and loaders',
        text: 'Lifting and steering cylinders, suspension-related hydraulics and actuation assemblies.',
        parts: ['Hydraulic rod seals', 'Hydraulic piston seals', 'Hydraulic wiper seals', 'Wear rings'] },
      { title: 'Slurry pumps and fluid handling',
        text: 'Pump sealing, fluid handling, diaphragm pumps and chemical or abrasive fluid systems. Suitability is confirmed against slurry composition, particles, pressure and pump design.',
        parts: ['PTFE seals', 'O-rings', 'PTFE diaphragm pump components', 'Rubber diaphragms'] },
      { title: 'Drilling equipment',
        text: 'Hydraulic actuation, reciprocating equipment, cylinders and fluid-handling assemblies.',
        parts: ['Hydraulic seals', 'Hydraulic wear rings', 'O-rings', 'Custom polymer components'] },
      { title: 'Conveyors and material handling',
        text: 'Rotating equipment, support bearings, bushes and mechanical systems. Bearing and bush materials are selected to load, speed, lubrication, temperature and mounting.',
        parts: ['MSS self-lubricating bearings', 'MSS bi-metal bearings', 'MSS solid bushes', 'Custom machined parts'] },
      { title: 'Crushing and screening equipment',
        text: 'Mechanical guidance, rotating and supporting parts, hydraulic actuation and maintenance assemblies.',
        parts: ['Bearings', 'Bushes', 'Hydraulic seals', 'Custom machined parts'] },
    ],
  },

  sections: [
    {
      id: 'materials',
      label: 'Material selection',
      title: 'Advanced polymer materials for mining applications',
      intro: 'Each application needs a different mix of wear resistance, strength, chemical compatibility, friction and temperature capability.',
      cards: [
        { title: 'Polyurethane (PU)', text: 'Hydraulic seals, wiper seals and heavy-duty sealing parts.', list: ['Abrasion resistance in suitable grades', 'Good mechanical strength', 'Many dynamic sealing duties', 'Several hardness grades'] },
        { title: 'HNBR', text: 'Hydraulic sealing, industrial elastomer seals and fluid systems.', list: ['Better heat resistance than standard NBR', 'Resists oils and selected fluids', 'Improved mechanical performance'] },
        { title: 'FKM (Viton)', text: 'Industrial O-rings, fluid-handling seals and specialised assemblies.', list: ['Resists many oils and fuels', 'Selected higher-temperature duty', 'Compatibility depends on fluid and grade'] },
        { title: 'PTFE', text: 'Hydraulic seals, wear parts and pump and valve components.', list: ['Low friction', 'Broad chemical resistance', 'Filled and modified grades'] },
        { title: 'PEEK', text: 'Wear parts, precision parts and high-performance components.', list: ['High mechanical strength', 'Dimensional stability', 'Excellent wear in suitable grades'] },
        { title: 'Nylon (polyamide)', text: 'Bushes, mechanical supports and industrial parts.', list: ['Good mechanical strength', 'Wear resistance in suitable grades', 'Engineered bearings and bushes'] },
      ],
      note: 'No universal temperature, pressure, speed or load values are published here. Grades, fillers, geometry and conditions change performance, so every limit is confirmed by Mithson engineering.',
    },
    {
      id: 'process',
      label: 'How we work',
      title: 'From engineering requirements to precision components',
      steps: [
        { title: 'Application understanding', text: 'The equipment, the hydraulic or mechanical assembly, the environment and what the part must do.' },
        { title: 'Technical assessment', text: 'Pressure, temperature, movement, speed, load, fluid, contamination and dimensions.' },
        { title: 'Material selection', text: 'A polymer or elastomer grade matched to properties, fluid compatibility and conditions.' },
        { title: 'Manufacturing and quality control', text: 'Made to approved drawings, tolerances and agreed specifications.' },
        { title: 'Inspection and support', text: 'Inspection and application support to the agreed project requirements.' },
      ],
    },
    {
      id: 'conditions',
      label: 'Challenges and solutions',
      title: 'Designed around real mining conditions',
      table: {
        cols: ['Challenge', 'Engineering consideration'],
        rows: [
          ['Abrasive dust and mineral particles', 'Appropriate wiper and contamination-exclusion design'],
          ['Hydraulic fluid leakage', 'Correct rod and piston seal selection'],
          ['Repeated cylinder movement', 'Material and geometry suited to reciprocating movement'],
          ['Heavy mechanical loads', 'Appropriate bearing, bush and wear-ring design'],
          ['Chemical and fluid exposure', 'Polymer and elastomer compatibility assessment'],
          ['Limited maintenance access', 'Application-specific selection and maintenance planning'],
        ],
      },
    },
    {
      id: 'send',
      label: 'What to send us',
      title: 'Help us understand your mining application',
      intro: 'To recommend the right seal or polymer part, the engineering team needs the actual application and operating conditions.',
      checklist: [
        { title: 'Equipment', items: ['Equipment manufacturer and model', 'Component or assembly name', 'Existing seal or bearing type', 'Drawing or sample photograph'] },
        { title: 'Conditions', items: ['Operating pressure', 'Operating temperature', 'Hydraulic fluid or chemical type', 'Dust, moisture or abrasive exposure'] },
        { title: 'Geometry and duty', items: ['Rod or piston diameter', 'Groove dimensions', 'Movement type and speed', 'Load and operating cycle', 'Expected service conditions'] },
      ],
      cta: true,
    },
  ],

  faqTitle: 'Mining seal questions',
  faqs: [
    { q: 'Which Mithson products suit mining equipment?', a: 'Hydraulic piston, rod and wiper seals, wear rings, seal kits, bearings, bushes and engineered polymer components. The right product depends on the equipment and conditions.' },
    { q: 'Can Mithson manufacture custom hydraulic seals?', a: 'Yes. Share technical drawings, samples and dimensional requirements for engineering review.' },
    { q: 'Which material is best for mining hydraulic seals?', a: 'There is no universal material. PU, HNBR, FKM and PTFE may be considered, depending on pressure, temperature, fluid compatibility, movement and wear.' },
    { q: 'Do wiper seals help protect mining equipment?', a: 'Yes. Properly selected wiper seals keep dust, dirt and other contaminants out of hydraulic cylinders.' },
    { q: 'Does Mithson offer wear rings and bearings?', a: 'Yes: hydraulic wear rings, self-lubricating bearings, bi-metal bearings and solid bushes.' },
    { q: 'Can Mithson manufacture to customer drawings?', a: 'Submit drawings, samples and specifications for technical assessment and a manufacturing feasibility review.' },
    { q: 'How can I request technical support?', a: 'Use the enquiry form or contact the engineering and sales team directly, with your application details and drawings.' },
  ],

  closing: {
    title: 'Looking for reliable sealing solutions for mining equipment?',
    text: 'From hydraulic cylinders and fluid handling to bearings and custom polymer parts, Mithson works with you to understand the application and identify the right solution. Share your equipment specifications, drawings or samples.',
  },
  disclaimer: 'Typical material properties are shown for guidance and are not product ratings. Final material and design selection requires an engineering assessment by Mithson.',
  credits: [{ photo: 'Open-pit excavator', by: 'Abdul Basit' }],
};

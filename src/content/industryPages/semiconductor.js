// Industries > Semiconductor, from the approved brief (November 2026).
// Rules the brief sets: no cleanroom manufacturing, semiconductor-grade, ultra-low-outgassing or
// contamination-standard claims; no universal pressure/temperature ratings; ISO 9001:2015 only.
import hero from '../../assets/industries/Semiconductor.webp';
import wafer from '../../assets/industries/semiconductor/wafer.jpg';
import * as img from './images';

const { PATHS } = img;

export default {
  docTitle: 'Semiconductor Sealing & Polymer Solutions',
  hero: {
    label: 'Industries / Semiconductor',
    title: 'Semiconductor.',
    accent: 'Precision polymer components',
    rest: 'for advanced manufacturing.',
    lead:
      'Semiconductor manufacturing demands exceptional precision, cleanliness and process stability. From wafer cleaning and chemical distribution to vacuum processing, plasma etching and deposition, every component must work reliably in demanding conditions.',
    lead2:
      'Mithson supplies engineered polymer seals and precision-manufactured components in PTFE, modified PTFE, PEEK, PFA, FKM, FFKM and other engineering polymers, developed to the operating conditions, equipment geometry and your requirements.',
    tags: ['Advanced polymer engineering', 'Precision-machined components', 'Application-specific sealing', 'Chemical-resistant material options', 'Custom manufacturing support'],
    image: hero,
    imageAlt: 'Semiconductor wafer-processing equipment',
    chips: [
      { icon: 'spark', title: '6 product families', text: 'Machined, molded and sealing parts' },
      { icon: 'flask', title: '7 materials', text: 'PTFE, PEEK, PFA, FKM, FFKM, UHMW-PE' },
      { icon: 'vacuum', title: '6 process areas', text: 'Wet clean to vacuum systems' },
      { icon: 'shield', title: 'ISO 9001:2015', text: 'Quality management certification' },
    ],
  },

  challenges: {
    title: 'Why precision sealing matters in semiconductor manufacturing',
    intro:
      'Microscopic contamination, chemical exposure, pressure variation and equipment instability can all affect manufacturing consistency. Seals contain process fluids, hold vacuum boundaries, isolate chambers and support moving assemblies, so the whole environment is considered, not just temperature or pressure.',
    items: [
      { icon: 'dust', title: 'Particle contamination control', text: 'Particles released by wear, friction or degradation can contaminate sensitive equipment.', list: ['Low-wear material selection', 'Smooth, controlled surface finishes', 'Proper clearances', 'Clean manufacturing and handling'] },
      { icon: 'flask', title: 'Chemical resistance', text: 'Wet processing and chemical delivery expose seals to acids, alkalis, solvents and cleaning agents.', list: ['Polymer compatibility', 'Resistance to swelling and degradation', 'Permeation', 'Temperature and exposure time'] },
      { icon: 'vacuum', title: 'Vacuum integrity', text: 'Chamber interfaces and valve assemblies need dependable vacuum sealing.', list: ['Suitable sealing geometry', 'Compression and recovery', 'Gas permeability and outgassing', 'Compatibility with the actual vacuum level'] },
      { icon: 'thermo', title: 'Thermal stability', text: 'Deposition and cleaning bring repeated heating and cooling.', list: ['Thermal expansion', 'Temperature resistance of the grade', 'Compression set', 'Thermal-cycling durability'] },
      { icon: 'spark', title: 'Plasma and process exposure', text: 'Etching and chamber cleaning expose materials to reactive gases and energetic plasma.', list: ['Plasma compatibility', 'Erosion resistance', 'Composition and purity', 'Process-specific qualification'] },
      { icon: 'ruler', title: 'Precision and reliability', text: 'Tightly controlled assemblies need parts made to accurate dimensions.', list: ['Tight tolerances', 'Consistent geometry', 'Controlled surface finish', 'Application-specific inspection'] },
    ],
  },

  products: {
    title: 'Mithson products for semiconductor applications',
    intro: 'Real Mithson products with their own photographs. None is presented as already qualified for semiconductor service: each is reviewed against your process.',
    items: [
      { name: 'Custom Machined PTFE Components', tag: 'Chemical resistance', image: img.ptfeParts, path: PATHS.machined,
        desc: 'Low friction, broad chemical resistance, electrical insulation and low moisture absorption, in application-specific geometries.',
        uses: 'Chemical handling, pump and valve components, fluid transfer, spacers and sealing parts.' },
      { name: 'PEEK Precision Components', tag: 'Strength and stability', image: img.peekParts, path: PATHS.machined,
        desc: 'Mechanical strength, dimensional stability, wear resistance and grade-dependent temperature capability.',
        uses: 'Equipment parts, valve and pump components, wear parts, structural spacers.' },
      { name: 'M-UNI Spring-Energized Seals', tag: 'Spring-assisted sealing', image: img.mUni, path: PATHS.mUni,
        desc: 'A polymer jacket with a spring that maintains sealing contact as conditions change. Vacuum or plasma suitability depends on the grade, spring, geometry and process.',
        uses: 'Specialised valves, precision equipment, reciprocating and suitable rotary sealing.' },
      { name: 'Encapsulated O-Rings', tag: 'Static chemical sealing', image: img.encapsulated, path: PATHS.encapsulated,
        desc: 'An elastomer core inside a fluoropolymer jacket. The jacket alone does not make it suitable for vacuum, high-purity or plasma service.',
        uses: 'Chemical transfer, fluid-handling connections, valve assemblies, static interfaces.' },
      { name: 'Custom Molded Polymer Components', tag: 'Engineering-led moulding', image: img.customMolded, path: PATHS.customMolded,
        desc: 'Application-specific parts in selected engineering polymers, subject to tooling and material feasibility.',
        uses: 'Housings and inserts, specialised profiles, supports, custom sealing geometries.' },
      { name: 'Precision-Machined Polymer Parts', tag: 'Made to drawing', image: img.machined, path: PATHS.machined,
        desc: 'Machined from engineering polymer stock to the dimensions, profiles and tolerances of each design.',
        uses: 'Vacuum equipment parts, chemical-processing assemblies, pump and valve parts, precision spacers.' },
    ],
  },

  applications: {
    title: 'Where our polymer components support semiconductor equipment',
    intro: 'The right material and geometry depend on the equipment, the process chemistry and the operating environment. Select a process area.',
    items: [
      { title: 'Wafer cleaning systems', photo: wafer, photoAlt: 'Close-up of a patterned silicon wafer',
        text: 'Specialised fluids remove contaminants from wafer surfaces. Priorities: chemical compatibility, low particle generation, dimensional stability and resistance to cleaning chemicals.',
        parts: ['Chemical-compatible seals', 'Pump sealing parts', 'Valve seats', 'Custom PTFE components'], materials: 'PTFE, PFA, compatible elastomers' },
      { title: 'Plasma etching equipment',
        text: 'Controlled plasma removes selected material from the wafer. Priorities: plasma resistance, low contamination, thermal stability and process-specific qualification.',
        parts: ['Chamber sealing interfaces', 'Compatible polymer seals', 'Valve and equipment seals'], materials: 'Semiconductor-qualified FFKM, specialised fluoropolymers' },
      { title: 'CVD and PVD deposition',
        text: 'Chemical and physical vapour deposition form thin films on wafers. Priorities: vacuum compatibility, thermal-cycling resistance, low outgassing and dimensional consistency.',
        parts: ['Vacuum equipment seals', 'Chamber interface parts', 'Valve sealing elements'], materials: 'Qualified FKM or FFKM, PTFE' },
      { title: 'CMP equipment',
        text: 'Chemical mechanical planarisation combines chemistry and polishing for a smooth wafer surface. Priorities: slurry compatibility, abrasion and wear resistance, and reliable sealing over repeated operation.',
        parts: ['Fluid-handling seals', 'Pump components', 'Wear-resistant polymer parts'], materials: 'PTFE, PEEK, application-specific polymers' },
      { title: 'Vacuum pumps and systems',
        text: 'Vacuum systems control chamber pressure and remove gases. Priorities: leak rate, gas permeability, outgassing, temperature exposure and material cleanliness.',
        parts: ['Vacuum-compatible seals', 'Spring-energized seals', 'Custom sealing profiles'], materials: 'Qualified FKM, FFKM, PTFE' },
      { title: 'Chemical distribution systems',
        text: 'Delivery systems move process chemicals safely and consistently. Priorities: chemical compatibility, fluid purity, leak prevention, extractables and long-term compatibility.',
        parts: ['Chemical-resistant seals', 'PTFE components', 'Valve and pump sealing parts'], materials: 'PTFE, PFA, FFKM where qualified' },
    ],
  },

  sections: [
    {
      id: 'materials',
      label: 'Material selection',
      title: 'Advanced polymer materials for semiconductor equipment',
      intro: 'Each material is evaluated against the full environment: chemicals, temperature, mechanical load, vacuum, plasma, cleanliness and required service life.',
      cards: [
        { title: 'Virgin PTFE', text: 'Low stiffness, so creep and cold flow under sustained load are designed around.', list: ['Resistance to many chemicals', 'Very low friction', 'Excellent electrical insulation', 'Good thermal stability'] },
        { title: 'Modified PTFE', text: 'Properties vary by formulation; compatibility and process requirements are confirmed.', list: ['Improved creep resistance', 'Good chemical resistance', 'Specialised sealing geometries'] },
        { title: 'PEEK', text: 'Not compatible with every process chemical or plasma; grade-specific evaluation is required.', list: ['High mechanical strength', 'Dimensional stability', 'High-temperature capability', 'Wear resistance'] },
        { title: 'PFA', text: 'Used only where the required grade and manufacturing capability are confirmed.', list: ['Resistance to many aggressive chemicals', 'High-purity grades exist', 'Smooth, non-stick surface'] },
        { title: 'FKM', text: 'Standard FKM is not assumed suitable for all plasma or chemical processes.', list: ['Resistance to many oils and hydrocarbons', 'Compound-dependent thermal performance', 'Elastomeric recovery'] },
        { title: 'FFKM', text: 'Grade, metal-ion content, plasma resistance, compression set and outgassing must be qualified; availability is confirmed per grade.', list: ['High chemical resistance in selected compounds', 'Specialised semiconductor grades exist', 'Demanding thermal environments'] },
        { title: 'UHMW-PE', text: 'Not a high-temperature or vacuum sealing material.', list: ['Good abrasion resistance', 'Low friction', 'Good impact resistance'] },
      ],
    },
    {
      id: 'construction',
      label: 'How they are built',
      title: 'Spring-energized seal and encapsulated O-ring',
      intro: 'Drawn cross-sections of two sealing constructions on this page.',
      diagrams: ['spring', 'encap'],
    },
    {
      id: 'parameters',
      label: 'Engineering parameters',
      title: 'Technical parameters that define the right sealing solution',
      intro: 'No single temperature or pressure rating decides a semiconductor seal. Each application needs an engineering review of the operating environment.',
      table: {
        cols: ['Parameter', 'What is reviewed'],
        rows: [
          ['Operating temperature', 'Normal and peak temperature, thermal cycling and exposure duration'],
          ['Operating pressure', 'Positive pressure, vacuum level, pressure differential and transients'],
          ['Vacuum performance', 'Vacuum range, acceptable leakage, gas permeability and outgassing'],
          ['Chemical compatibility', 'Chemical identity, concentration, temperature, exposure time and cleaning'],
          ['Plasma compatibility', 'Plasma chemistry, power, exposure time and erosion behaviour'],
          ['Dimensional requirements', 'Diameter, cross-section, tolerances, grooves, surface finish and clearances'],
          ['Mechanical requirements', 'Compression, wear, sliding velocity, friction, load and service cycles'],
          ['Cleanliness requirements', 'Material cleanliness, environment, cleaning, packaging and traceability'],
        ],
      },
      note: 'All technical values are dependent on material grade, component design and operating conditions. Final suitability and performance limits must be confirmed by Mithson engineering.',
    },
    {
      id: 'matrix',
      label: 'Selection matrix',
      title: 'Matching materials to equipment requirements',
      table: {
        cols: ['Equipment / process', 'Materials to evaluate', 'Main requirement'],
        rows: [
          ['Wafer cleaning', 'PTFE, PFA, compatible elastomers', 'Chemical resistance and cleanliness'],
          ['Chemical distribution', 'PTFE, PFA, FFKM where qualified', 'Chemical compatibility and fluid purity'],
          ['Plasma etching', 'Semiconductor-qualified FFKM, specialised fluoropolymers', 'Plasma resistance and low contamination'],
          ['CVD / PVD', 'Qualified FKM or FFKM, PTFE, other suitable polymers', 'Vacuum, heat and process compatibility'],
          ['CMP', 'PTFE, PEEK, application-specific polymers', 'Slurry compatibility and wear'],
          ['Vacuum equipment', 'Qualified FKM, FFKM, PTFE', 'Leak rate, outgassing and permeability'],
          ['Equipment mechanisms', 'PEEK, PTFE, suitable engineering polymers', 'Dimensional stability and mechanical performance'],
        ],
      },
      note: 'This table is an engineering screening guide, not a declaration of universal compatibility or confirmed product qualification.',
    },
    {
      id: 'process',
      label: 'Engineering and manufacturing',
      title: 'From engineering requirements to precision polymer components',
      steps: [
        { title: 'Application understanding', text: 'The equipment, environment, sealing function, process media and your requirements.' },
        { title: 'Material selection', text: 'Polymer or elastomer options against chemical, thermal, mechanical and cleanliness needs.' },
        { title: 'Component design', text: 'Geometry, dimensions, tolerances, sealing interfaces and manufacturing feasibility.' },
        { title: 'Manufacturing and quality control', text: 'Moulding or machining, then dimensional and visual inspection to the agreed specification.' },
        { title: 'Delivery and support', text: 'Approved parts, technical clarification, repeat orders and further development.' },
      ],
    },
    {
      id: 'custom',
      label: 'Custom components',
      title: 'Custom polymer components designed around your equipment',
      intro: 'Standard parts may not meet the geometry, material or performance a specialised tool needs. Mithson assesses custom requirements from your drawings, samples and specifications.',
      chips: ['Custom PTFE rings', 'Precision-machined PEEK parts', 'Specialised polymer sleeves', 'Custom sealing profiles', 'Polymer valve components', 'Precision spacers', 'Application-specific inserts'],
      checklist: [
        { title: 'Design', items: ['Technical drawing or sample', 'Component dimensions', 'Tolerance requirements'] },
        { title: 'Conditions', items: ['Operating temperature', 'Pressure or vacuum requirements', 'Process chemicals'] },
        { title: 'Supply', items: ['Required polymer grade', 'Quantity and production frequency'] },
      ],
      cta: true,
    },
    {
      id: 'quality',
      label: 'Quality and traceability',
      title: 'Quality-focused polymer manufacturing',
      chips: ['ISO 9001:2015 quality management certification', 'Material identification and verification', 'Dimensional inspection', 'Visual inspection', 'Manufacturing process control', 'Product conformity checks', 'Customer specification review', 'Batch identification and traceability'],
      note: 'Mithson does not claim semiconductor cleanroom manufacturing, semiconductor-grade certification, ultra-low-outgassing certification or specific contamination-control standards. Contact us to confirm the controls and documentation available for your requirement.',
    },
    {
      id: 'why',
      label: 'Why Mithson',
      title: 'Your polymer engineering partner for demanding equipment',
      cards: [
        { icon: 'flask', title: 'Polymer material expertise', text: 'Experience with advanced thermoplastics, fluoropolymers and elastomers.' },
        { icon: 'doc', title: 'Custom component development', text: 'Development from drawings, samples and application-specific specifications.' },
        { icon: 'ruler', title: 'Precision manufacturing', text: 'Specialised polymer geometries and sealing components.' },
        { icon: 'thermo', title: 'Application-based selection', text: 'Recommendations from chemical, thermal and mechanical requirements.' },
        { icon: 'cycle', title: 'Engineering collaboration', text: 'Technical discussions to understand function and environment.' },
        { icon: 'shield', title: 'Quality-focused production', text: 'Consistency, inspection and your requirements come first.' },
      ],
    },
  ],

  faqTitle: 'Semiconductor sealing questions',
  faqs: [
    { q: 'Which polymer materials are suitable for semiconductor equipment?', a: 'PTFE, modified PTFE, PEEK, PFA and selected elastomers can be considered. The choice depends on chemical exposure, temperature, vacuum, cleanliness and mechanical loading.' },
    { q: 'Can PTFE components be used in chemical-handling equipment?', a: 'PTFE is widely used for its broad chemical resistance, but the specific chemical, temperature, pressure and component design are evaluated first.' },
    { q: 'Are PEEK components suitable for semiconductor manufacturing?', a: 'PEEK can suit equipment parts that need strength, dimensional stability and wear resistance. Suitability depends on the process environment and grade.' },
    { q: 'Can Mithson manufacture components from customer drawings?', a: 'Yes. Submit drawings, samples and specifications for engineering review and a manufacturing feasibility assessment.' },
    { q: 'What information is needed to select a seal?', a: 'Process media, temperature, pressure or vacuum, dimensions, movement, surface finish and required service life.' },
    { q: 'Are standard O-rings suitable for plasma processes?', a: 'Not necessarily. Plasma can erode and degrade materials. Semiconductor-qualified compounds are evaluated for the specific plasma chemistry and process.' },
    { q: 'Can Mithson develop custom polymer components?', a: 'Custom requirements are assessed against material availability, design, tooling and manufacturing feasibility.' },
    { q: 'Does Mithson provide cleanroom-certified components?', a: 'Contact Mithson to confirm the manufacturing controls, cleanliness procedures, documentation and qualification available for your specific requirement.' },
  ],

  closing: {
    title: 'Looking for reliable polymer components for semiconductor equipment?',
    text: 'Whether you need precision-machined parts, specialised sealing profiles or a custom-developed solution, Mithson can review your requirements. Share your drawings, samples or application details to start.',
  },
  disclaimer: 'All technical values are dependent on material grade, component design and operating conditions. Final suitability and performance limits must be confirmed by Mithson engineering.',
  credits: [{ photo: 'Silicon wafer', by: 'Laura Ockel' }],
};

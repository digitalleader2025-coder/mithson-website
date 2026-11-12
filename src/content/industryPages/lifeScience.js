// Industries > Life Science, from the approved brief (November 2026).
// Rules the brief sets: no FDA, USP Class VI, ISO 10993, GMP or cleanroom claims; only
// ISO 9001:2015 is stated as a Mithson certification; suitability is always application-specific.
import hero from '../../assets/industries/Life Science.webp';
import labAutomation from '../../assets/industries/life-science/lab-automation.jpg';
import sampleTrack from '../../assets/industries/life-science/sample-track.jpg';
import * as img from './images';

const { PATHS } = img;

export default {
  docTitle: 'Life Science Sealing & Polymer Components',
  hero: {
    label: 'Industries / Life Science',
    title: 'Life Science.',
    accent: 'Precision polymer sealing',
    rest: 'for critical equipment.',
    lead:
      'Life Science equipment needs components that deliver consistent sealing, dimensional accuracy, chemical compatibility and dependable operation. From pharmaceutical processing systems and laboratory instruments to diagnostic equipment, medical devices and fluid-handling machinery, every component affects equipment reliability and process integrity.',
    lead2:
      'Mithson develops and manufactures polymer sealing solutions and precision components in PTFE, PEEK, modified PTFE, UHMW-PE, PFA and engineered elastomers, designed around the operating conditions, equipment geometry and performance requirements.',
    tags: [
      'Precision-engineered polymer components',
      'Chemical-compatibility-focused material selection',
      'Low-friction, wear-resistant solutions',
      'Custom-designed seals and components',
      'Pumps, valves and fluid handling',
      'Application-specific engineering support',
    ],
    image: hero,
    imageAlt: 'Scientist working with advanced laboratory equipment',
    chips: [
      { icon: 'flask', title: '7 product families', text: 'Seals, bearings and precision parts' },
      { icon: 'drop', title: '8 materials', text: 'PTFE, PEEK, PFA, UHMW-PE and elastomers' },
      { icon: 'cycle', title: 'Cleaning-aware', text: 'Selected against your cleaning cycle' },
      { icon: 'shield', title: 'ISO 9001:2015', text: 'Quality management certification' },
    ],
  },

  challenges: {
    title: 'Precision sealing for critical Life Science applications',
    intro:
      'In pharmaceutical manufacturing, laboratory equipment and medical technology, even small component failures can affect equipment performance, maintenance schedules and process reliability. Seals have to keep their properties through repeated movement, cleaning, process fluids, temperature changes and continuous cycles.',
    items: [
      { icon: 'flask', title: 'Chemical compatibility', text: 'Sealing materials must suit the fluids, cleaning agents, solvents and process chemicals they meet. PTFE, PEEK and selected engineered polymers can offer useful resistance, depending on the medium, temperature and conditions.' },
      { icon: 'shield', title: 'Contamination control', text: 'Sensitive processes need the right component materials, surface finishes and cleaning compatibility, so the design supports the equipment’s hygiene and contamination-control requirements.' },
      { icon: 'wind', title: 'Low-friction operation', text: 'Pumps, valves and automated lab equipment need controlled friction and wear. Engineered polymer seals and bearings help keep mechanical movement smooth.' },
      { icon: 'cycle', title: 'Repeated operating cycles', text: 'Instruments, dispensing systems and processing equipment can run through repeated cycles. Seals and bearings are selected for the expected movement, contact pressure and service conditions.' },
      { icon: 'ruler', title: 'Dimensional accuracy', text: 'Precision components must hold their specified dimensions and geometry to achieve proper fit, sealing contact and function.' },
      { icon: 'drop', title: 'Cleaning and maintenance', text: 'Components may meet frequent cleaning, flushing or sterilisation. Suitability is checked against the actual cleaning method, chemical exposure and temperature.' },
    ],
  },

  products: {
    title: 'Engineered polymer products for critical equipment',
    intro: 'Real Mithson products, each shown with its own product photograph. Every one is reviewed for the specific application before it is supplied.',
    items: [
      { name: 'Custom Molded Products', tag: 'Custom polymer components', image: img.customMolded, path: PATHS.customMolded,
        desc: 'Application-specific geometries, materials and dimensions, developed from your drawing, sample or requirement.',
        uses: 'Lab equipment housings, pump and valve assemblies, fluid handling, instrument components.' },
      { name: 'Machined Products', tag: 'Precision polymer machining', image: img.machined, path: PATHS.machined,
        desc: 'Accurate dimensions and specialised geometries machined directly from engineering drawings or approved samples.',
        uses: 'Instrument components, pump and valve internals, spacers and guides, housings and inserts.' },
      { name: 'M-UNI Spring-Energized Seals', tag: 'Advanced sealing', image: img.mUni, path: PATHS.mUni,
        desc: 'A polymer jacket with an internal spring that keeps the sealing lip in contact as conditions change.',
        uses: 'Precision fluid handling, pump and valve assemblies, lab mechanisms, reciprocating and rotary systems.' },
      { name: 'Encapsulated O-Rings', tag: 'Chemical-resistant sealing', image: img.encapsulated, path: PATHS.encapsulated,
        desc: 'An elastomer core for recovery inside a fluoropolymer jacket for a chemical-resistant contact surface.',
        uses: 'Chemical fluid handling, lab processing systems, pump and valve connections, selected pharma process equipment.' },
      { name: 'UNI-LUBE Bearings', tag: 'Self-lubricating bearings', image: img.uniLube, path: PATHS.uniLube,
        desc: 'Controlled friction and wear resistance without relying on external lubrication at the bearing interface.',
        uses: 'Lab automation, precision assemblies, fluid-handling mechanisms, equipment with limited lubrication access.' },
      { name: 'PTFE Components and Seals', tag: 'Fluoropolymer components', image: img.ptfeParts, path: PATHS.machined,
        desc: 'Chemical resistance, a low coefficient of friction, low moisture absorption and electrical insulation, in several grades.',
        uses: 'Pump sealing, valve components, chemical fluid handling, static and dynamic sealing.' },
      { name: 'PEEK Components', tag: 'High-performance polymer', image: img.peekParts, path: PATHS.machined,
        desc: 'Mechanical strength, dimensional stability, wear resistance and thermal performance where standard polymers fall short.',
        uses: 'Instrument components, pump and valve assemblies, wear parts, high-performance inserts.' },
    ],
    note: 'These products are presented as capabilities. Suitability for any pharmaceutical or medical use is confirmed for the specific component and its intended use.',
  },

  applications: {
    title: 'Where Mithson polymer components can be used',
    intro: 'Select an application to see what it asks of the seal and which components are typically involved.',
    items: [
      { title: 'Pharmaceutical processing equipment', photo: sampleTrack, photoAlt: 'Automated sample-handling track in a laboratory',
        text: 'Seals, polymer inserts and engineered components for selected pumps, valves, transfer systems and processing equipment, where chemical compatibility, cleanability, dimensional stability and the intended cleaning process all matter.',
        parts: ['Spring-energized seals', 'Encapsulated O-rings', 'PTFE seats and seals', 'Polymer inserts'], materials: 'PTFE, modified PTFE, PEEK, PFA' },
      { title: 'Laboratory instruments', photo: labAutomation, photoAlt: 'Laboratory automation equipment handling samples',
        text: 'Precision polymer components for instrument assemblies that need controlled movement, low friction, dimensional accuracy and chemical compatibility.',
        parts: ['Machined PEEK parts', 'PTFE guides', 'UNI-LUBE bearings', 'Precision spacers'], materials: 'PEEK, PTFE, UHMW-PE' },
      { title: 'Diagnostic equipment',
        text: 'Polymer seals and precision components for fluid-handling mechanisms, automated diagnostic systems and specialised instrument assemblies.',
        parts: ['Spring-energized seals', 'Machined polymer parts', 'Encapsulated O-rings'], materials: 'PTFE, PEEK, FKM where compatible' },
      { title: 'Liquid chromatography systems',
        text: 'Selected PTFE and PEEK components can be relevant to fluid pathways, fittings and sealing arrangements. The material is chosen for solvent compatibility, pressure, temperature and the instrument’s requirements.',
        parts: ['PEEK fittings and components', 'PTFE seals', 'Machined parts to drawing'], materials: 'PEEK, PTFE' },
      { title: 'Bioreactors and mixing equipment',
        text: 'Sealing components for selected fluid connections, pumps, shafts and mechanical assemblies, chosen for the process media, cleaning procedures and the required hygiene classification.',
        parts: ['Shaft seals', 'Encapsulated O-rings', 'Custom molded parts'], materials: 'PTFE, PFA, EPDM, FKM where compatible' },
      { title: 'Medical and surgical equipment',
        text: 'Precision polymer components for specialised mechanical assemblies and fluid-handling mechanisms, subject to the applicable medical-device design, biocompatibility and regulatory requirements.',
        parts: ['Machined polymer parts', 'Bearings and bushes', 'Custom seals'], materials: 'PEEK, PTFE, UHMW-PE' },
      { title: 'Automated laboratory systems',
        text: 'Bearings, wear components and precision-machined polymers for automated sample handling, positioning systems and mechanical movement.',
        parts: ['UNI-LUBE bearings', 'UHMW-PE wear strips', 'PEEK guides'], materials: 'UHMW-PE, PEEK, PTFE' },
    ],
  },

  sections: [
    {
      id: 'materials',
      label: 'Material selection',
      title: 'Choosing the right polymer for the application',
      intro: 'Different materials offer different combinations of chemical resistance, mechanical strength, friction and temperature capability. Mithson works with a range of advanced engineering materials, so the component is selected to the application.',
      cards: [
        { title: 'Virgin PTFE', text: 'Polytetrafluoroethylene. Can deform under sustained load, so creep, cold flow and dimensional stability are designed for in load-bearing seals.', list: ['Excellent resistance to many industrial chemicals', 'Very low friction', 'Low moisture absorption', 'Good electrical insulation'] },
        { title: 'Modified PTFE', text: 'Precision sealing components, pump and valve assemblies and parts that need better dimensional stability.', list: ['Improved resistance to deformation in suitable grades', 'Better sealing in selected designs', 'Good chemical resistance', 'Low friction'] },
        { title: 'PEEK', text: 'Polyether ether ketone. Precision mechanical components, instrument parts, pump and valve internals and wear inserts.', list: ['High mechanical strength', 'Wear resistance in appropriate grades', 'Good dimensional stability', 'High-temperature capability'] },
        { title: 'UHMW-PE', text: 'Ultra-high-molecular-weight polyethylene. Wear pads, guides, sliding parts and material-handling equipment.', list: ['Excellent abrasion resistance', 'Low friction', 'Good impact resistance', 'Low moisture absorption'] },
        { title: 'PFA', text: 'Perfluoroalkoxy alkane. Chemical fluid-handling equipment, selected high-purity fluid systems and specialised process parts.', list: ['Excellent chemical resistance', 'High-purity grades available', 'Good temperature capability', 'Low surface adhesion'] },
        { title: 'FKM', text: 'Fluoroelastomer. Not suitable for every pharmaceutical chemical, solvent or cleaning procedure, so compatibility is always checked.', list: ['Good resistance to many oils and fuels', 'Good thermal performance', 'Resistance to selected chemicals', 'Elastic sealing'] },
      ],
    },
    {
      id: 'comparison',
      label: 'Material comparison',
      title: 'Eight materials, side by side',
      table: {
        cols: ['Material', 'Main engineering advantage', 'Potential application'],
        rows: [
          ['Virgin PTFE', 'Chemical resistance and low friction', 'Seals, seats and fluid-handling components'],
          ['Modified PTFE', 'Improved deformation resistance in suitable grades', 'Precision sealing components'],
          ['PEEK', 'Strength, wear resistance and dimensional stability', 'Mechanical and instrument components'],
          ['UHMW-PE', 'Abrasion resistance and low friction', 'Wear pads and sliding components'],
          ['PFA', 'Chemical resistance and high-purity material options', 'Chemical fluid-handling components'],
          ['FKM', 'Elastic sealing; resistance to selected oils and chemicals', 'Static sealing applications'],
          ['EPDM', 'Resistance to water, steam and selected polar chemicals', 'Compatible fluid and utility systems'],
          ['FFKM', 'High chemical and thermal resistance in selected grades', 'Demanding chemical environments'],
        ],
      },
      note: 'These are general engineering characteristics, not guaranteed ratings for every grade. Suitability depends on the grade, process media, temperature, pressure, mechanical loading, cleaning method and regulatory requirements.',
    },
    {
      id: 'construction',
      label: 'How they are built',
      title: 'Inside two of the seals',
      intro: 'Drawn illustrations of how a spring-energized seal and an encapsulated O-ring are constructed.',
      diagrams: ['spring', 'encap'],
    },
    {
      id: 'considerations',
      label: 'Engineering considerations',
      title: 'What to evaluate before selecting a seal',
      cards: [
        { icon: 'thermo', title: 'Operating temperature', text: 'Normal, maximum and minimum temperature, and any excursions.' },
        { icon: 'gauge', title: 'Operating pressure', text: 'System pressure, fluctuations, differential pressure and possible surges.' },
        { icon: 'flask', title: 'Chemical exposure', text: 'Every process fluid, cleaning agent, solvent and sterilisation chemical that may touch the part.' },
        { icon: 'cycle', title: 'Movement type', text: 'Static, reciprocating, rotary or oscillating.' },
        { icon: 'wear', title: 'Surface finish', text: 'Mating surface finish, hardness, tolerances and geometry all change sealing performance.' },
        { icon: 'drop', title: 'Cleaning and sterilisation', text: 'Hot-water or chemical cleaning, steam sterilisation, autoclaving or other procedures.' },
        { icon: 'doc', title: 'Regulatory requirements', text: 'Whether food-contact, pharmaceutical-contact, medical-device or biocompatibility documentation is needed.' },
        { icon: 'ruler', title: 'Dimensional requirements', text: 'Drawings, tolerances, gland dimensions and mating-part details for the engineering review.' },
      ],
    },
    {
      id: 'cleaning',
      label: 'Cleaning and sterilisation',
      title: 'Designed around the actual operating environment',
      intro: 'Repeated cleaning and sterilisation can expose polymer parts to heat, steam, cleaning chemicals and thermal cycling. Different grades of PTFE, PEEK, PFA and elastomers behave differently, so these conditions are evaluated first.',
      chips: ['Steam sterilisation and autoclave exposure', 'Chemical cleaning and flushing', 'Repeated temperature cycling', 'Cleaning-agent compatibility', 'Dimensional stability after exposure', 'Surface condition and wear', 'Extractables and leachables, where applicable'],
      note: 'A material’s general chemical resistance does not by itself establish suitability for a validated pharmaceutical or medical application.',
    },
    {
      id: 'process',
      label: 'Custom engineering',
      title: 'From engineering drawing to precision component',
      intro: 'Specialised equipment often needs custom profiles, non-standard sizes and application-specific formulations. Mithson manufactures from drawings, physical samples and application requirements.',
      steps: [
        { title: 'Application understanding', text: 'The equipment, the operating environment and what the component has to do.' },
        { title: 'Material evaluation', text: 'Identify suitable polymer or elastomer options.' },
        { title: 'Engineering design', text: 'Review dimensions, geometry, tolerances and sealing requirements.' },
        { title: 'Manufacturing method', text: 'Decide whether machining, moulding or another route is right.' },
        { title: 'Quality inspection', text: 'Check dimensions and conformity against the agreed specification.' },
        { title: 'Delivery and support', text: 'Manufacturing support and technical help for future requirements.' },
      ],
    },
    {
      id: 'send',
      label: 'What to send us',
      title: 'Help us review your application',
      checklist: [
        { title: 'Design', items: ['Engineering drawings', 'Existing component samples', 'Required dimensions and tolerances'] },
        { title: 'Conditions', items: ['Operating temperature and pressure', 'Process fluid and cleaning-agent details', 'Expected operating cycles'] },
        { title: 'Requirements', items: ['Material specifications', 'Applicable regulatory or documentation requirements'] },
      ],
      cta: true,
    },
    {
      id: 'quality',
      label: 'Quality and documentation',
      title: 'Precision, traceability and manufacturing consistency',
      intro: 'For Life Science equipment, quality goes beyond the material: dimensions, manufacturing consistency, material identification and application suitability all count.',
      chips: ['ISO 9001:2015 quality management certification', 'Dimensional inspection', 'Material identification and verification', 'Drawing-based manufacturing', 'Batch and lot identification, where available', 'Inspection reports, where available', 'Customer-specific quality documentation'],
      note: 'Mithson does not claim that its products are FDA-approved, USP Class VI compliant, ISO 10993 tested, GMP certified or suitable for cleanroom use. For pharmaceutical and medical applications, regulatory suitability is established for the actual component and its intended use.',
    },
  ],

  faqTitle: 'Life Science sealing questions',
  faqs: [
    { q: 'Which polymer materials are suitable for pharmaceutical equipment?', a: 'PTFE, PEEK, PFA and selected engineered elastomers can be considered. The right choice depends on process fluids, temperature, pressure, cleaning methods and regulatory requirements.' },
    { q: 'Can Mithson manufacture custom seals for laboratory equipment?', a: 'Yes. Share technical drawings, samples and application details, and the team will evaluate suitable sealing and component solutions.' },
    { q: 'Are PTFE seals suitable for chemical-handling applications?', a: 'PTFE resists many chemicals and is common in chemical-handling equipment, but the exact chemical, concentration, temperature, pressure and mechanical loading must be evaluated.' },
    { q: 'Can PEEK components be used in high-temperature equipment?', a: 'PEEK offers good thermal and mechanical performance compared with many engineering polymers. Suitability depends on the grade, load, exposure time and environment.' },
    { q: 'Can polymer components withstand autoclave sterilisation?', a: 'Some grades withstand selected steam sterilisation conditions, but repeated autoclaving can affect dimensions and mechanical properties. The grade and the cycle are evaluated together.' },
    { q: 'Does Mithson manufacture components from customer drawings?', a: 'Yes. Custom-moulded and machined products support drawing-based and sample-based manufacture, subject to technical and manufacturing feasibility.' },
    { q: 'How do I select the correct sealing material?', a: 'Consider temperature, pressure, chemical exposure, movement, surface finish, cleaning procedures and required documentation. Mithson engineering can evaluate these details with you.' },
    { q: 'Are Mithson components suitable for medical-device applications?', a: 'Components can be evaluated for suitable medical-device applications against material properties, design requirements and regulatory documentation. Suitability is confirmed for each intended use.' },
  ],

  closing: {
    title: 'Need precision polymer components for your Life Science equipment?',
    text: 'Every Life Science application has its own requirements. Share your drawings, material requirements and operating conditions, and our team will help evaluate the right manufacturing and material options.',
  },
  disclaimer: 'All technical information is general guidance. Final material suitability and performance limits are confirmed by Mithson engineering for each application.',
  credits: [
    { photo: 'Laboratory automation', by: 'Testalize.me' },
    { photo: 'Sample-handling track', by: 'Testalize.me' },
  ],
};

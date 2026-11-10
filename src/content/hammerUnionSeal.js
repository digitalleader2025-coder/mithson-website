// Hammer Union Seal page copy, from the approved text supplied by the user (November 2026).
// The text deliberately hedges what is a general industry option and what Mithson confirms.
// Keep those caveats on the page. Every number here already existed in the site's own data
// (src/content/typicalSpecs.js and src/content/productItems.js); none was invented.

export const huHero = {
  label: 'Oilfield connection seals',
  title: 'Hammer Union Seal.',
  titleAccent: 'Sealed under',
  titleRest: 'pressure.',
  lead:
    'Hammer Union Seals are critical sealing components used in hammer union connections across oilfield flowlines and associated equipment. Positioned at the sealing interface between compatible male and female union components, these seals help prevent the escape of pressurised fluids and gases during operation.',
  lead2:
    'Mithson offers hammer union sealing solutions using elastomeric and PTFE materials, with different material and construction options to address application-specific requirements.',
};

export const heroChips = [
  { icon: 'seal', title: '1–6 in ID', text: 'Listed size range' },
  { icon: 'layers', title: '5 materials', text: 'NBR, HNBR, FKM, FFKM, PTFE' },
  { icon: 'shield', title: 'Reinforced', text: 'Brass or stainless options' },
  { icon: 'gauge', title: 'Figure 1502', text: '15,000 psi union, typical' },
];

export const unionParts = [
  { icon: 'valve', title: 'Male sub', text: 'The male connection component.' },
  { icon: 'valve', title: 'Female sub', text: 'The mating connection component.' },
  { icon: 'spring', title: 'Wing nut', text: 'The threaded or mechanically engaging component that draws the union halves together.' },
  { icon: 'seal', title: 'Sealing element', text: 'The seal used in the applicable union design to prevent fluid or gas leakage.' },
];

export const overviewIntro =
  'A hammer union is a mechanical connection commonly used in oilfield piping and flowline systems. It allows compatible pipework and equipment to be connected and disconnected for installation, inspection and maintenance.';

export const overviewNote =
  "The Hammer Union Seal is an important part of the connection's sealing arrangement. Its geometry, material and dimensions must match the union design to maintain the required sealing contact under the intended operating conditions.";

export const stages = [
  { title: 'Seal positioning', text: 'The correctly selected seal is placed in its designated position within the compatible union component.' },
  { title: 'Connection alignment', text: 'The male and female union components are aligned so that their mating surfaces engage correctly.' },
  { title: 'Mechanical make-up', text: "The wing nut or connection mechanism draws the union components together according to the manufacturer's approved make-up procedure." },
  { title: 'Sealing contact', text: 'The seal is compressed or loaded against its intended sealing surfaces, establishing the contact required to prevent leakage.' },
  { title: 'Operating pressure', text: 'During operation, the seal experiences the pressure, temperature and fluid conditions of the connected system. The seal design and material must be suitable for these conditions.' },
];

export const stagesNote =
  'Not every hammer union uses the same sealing arrangement. Some connection designs use elastomeric seals, while others use different sealing geometries or metal-to-metal sealing arrangements. Always match the seal to the exact union figure and the manufacturer’s specifications.';

export const constructions = [
  {
    key: 'elastomer',
    name: 'Elastomeric seal',
    image: 'measure',
    text: 'An elastomeric seal provides a deformable sealing interface between compatible union components.',
    points: ['NBR', 'HNBR', 'FKM', 'FFKM'],
    note: 'Each elastomer has different chemical, mechanical and temperature characteristics. The appropriate compound must be selected according to the service environment.',
  },
  {
    key: 'reinforced',
    name: 'Reinforced elastomeric seal',
    image: 'seal-brass-insert',
    text: 'Some hammer union seal designs incorporate an embedded or integrated metal backup component.',
    points: ['Brass', 'Stainless steel'],
    note: 'The reinforcement arrangement can help support the seal against deformation or extrusion in suitable designs. The actual reinforcement geometry and material must be confirmed for the selected seal.',
  },
  {
    key: 'ptfe',
    name: 'PTFE seal',
    image: 'ptfe-rings',
    text: 'PTFE is a fluoropolymer known for its low-friction characteristics and broad chemical resistance. PTFE sealing components may be considered for applications where chemical compatibility or other material properties make them suitable.',
    points: ['Low friction', 'Broad chemical resistance', 'Thermal stability'],
    note: 'The PTFE design must be evaluated for the required mechanical loading, deformation resistance, temperature and connection geometry.',
  },
];

export const constructionsNote =
  'Hammer Union Seals are available in different material and construction arrangements across the wider industry. The correct configuration depends on the union design, operating conditions, fluid compatibility and required sealing performance.';

// Temperature figures below are the site's existing typical values, kept exactly as published.
export const materials = [
  {
    key: 'nbr',
    name: 'NBR',
    short: 'Nitrile rubber',
    image: 'measure',
    temperature: '-30°C to 120°C',
    text: 'NBR is commonly used for sealing applications involving petroleum-based oils and fuels.',
    points: ['Good resistance to many mineral oils and fuels', 'Good sealing elasticity', 'Available in different hardness grades', 'Widely used in general industrial and oilfield sealing'],
    watch: 'Compatibility with temperature, aromatic fluids, ozone and particular chemicals must be checked.',
  },
  {
    key: 'hnbr',
    name: 'HNBR',
    short: 'Hydrogenated nitrile',
    image: 'seal-steel-insert',
    temperature: '-30°C to 150°C',
    text: 'HNBR is a modified nitrile elastomer offering improved resistance to heat, ageing and certain demanding service environments compared with conventional NBR grades.',
    points: ['Improved thermal ageing resistance', 'Good mechanical strength', 'Good abrasion resistance', 'Available for selected oilfield and sour-service applications'],
    watch: 'Chemical compatibility and sour-service suitability must be confirmed for the exact compound.',
  },
  {
    key: 'fkm',
    name: 'FKM',
    short: 'Fluoroelastomer',
    image: 'seal-brass-insert',
    temperature: 'Up to 200–225°C',
    text: 'FKM is commonly selected for applications requiring resistance to elevated temperatures and many oils, fuels and chemicals.',
    points: ['Good heat resistance in suitable grades', 'Good resistance to many hydrocarbons', 'Resistance to a range of oils and chemicals', 'Available in different formulations'],
    watch: 'Compatibility with amines, steam, hot water and certain chemical environments varies by formulation.',
  },
  {
    key: 'ffkm',
    name: 'FFKM',
    short: 'Perfluoroelastomer',
    image: 'seal-steel-insert',
    temperature: null,
    text: 'FFKM is a high-performance elastomer designed for demanding chemical and thermal environments.',
    points: ['Broad chemical resistance in suitable grades', 'High-temperature capability in selected formulations', 'Useful for specialised sealing environments'],
    watch: 'Material selection, availability, mechanical properties and cost must be evaluated for the actual application.',
  },
  {
    key: 'ptfe',
    name: 'PTFE',
    short: 'Polytetrafluoroethylene',
    image: 'ptfe-rings',
    temperature: 'Up to 260°C continuous',
    text: 'PTFE is a fluoropolymer used in sealing applications where low friction and broad chemical resistance are important.',
    points: ['Low coefficient of friction', 'Broad chemical resistance', 'Good thermal stability', 'Available in modified and filled formulations'],
    watch: 'PTFE has different mechanical behaviour from elastomers and may require a specific design to manage deformation and sealing contact.',
  },
];

export const materialsNote =
  'Temperatures shown are typical industry values for the material family, not a rating for a finished seal. The limit for a complete seal also depends on the union design, pressure and fluid. Confirm the approved compound grade and its limits with Mithson.';

export const reinforcements = [
  {
    key: 'brass',
    name: 'Brass reinforcement',
    image: 'seal-brass-insert',
    text: "Brass reinforcement may be incorporated into selected seal designs to support the component's geometry and provide additional resistance to deformation.",
  },
  {
    key: 'steel',
    name: 'Stainless-steel reinforcement',
    image: 'seal-steel-insert',
    text: 'Stainless-steel reinforcement may be used where the design requires a metallic support component with appropriate corrosion resistance.',
  },
];

export const reinforcementNote =
  'The reinforcement must be compatible with the seal body, fluid environment and intended connection design. Not every material or seal configuration requires reinforcement.';

export const characteristics = [
  { icon: 'valve', title: 'Connection compatibility', text: 'The seal must match the correct union figure, nominal size and sealing geometry.' },
  { icon: 'flask', title: 'Fluid compatibility', text: 'The seal material must be suitable for the transported gas, liquid or process fluid, including any contaminants or chemical additives.' },
  { icon: 'gauge', title: 'Pressure resistance', text: 'The seal and union assembly must be designed and qualified for the intended pressure conditions.' },
  { icon: 'spring', title: 'Temperature performance', text: 'The material must retain its required sealing properties across the actual operating temperature range.' },
  { icon: 'shield', title: 'Extrusion resistance', text: 'Suitable geometry, material properties and backup arrangements can help manage the risk of seal extrusion into available clearances.' },
  { icon: 'drawing', title: 'Dimensional accuracy', text: 'Correct inner diameter, outer diameter, overall height and profile dimensions are essential for proper fit and sealing contact.' },
];

export const applications = [
  { icon: 'rig', title: 'Drilling operations', text: 'Compatible hammer union connections are used in selected drilling and well-service flowline systems.' },
  { icon: 'flask', title: 'Well testing', text: 'Sealing components support connections used in well-testing equipment and associated pressure-containing systems.' },
  { icon: 'hydraulic', title: 'Hydraulic fracturing', text: 'Hammer union connections are used in compatible high-pressure fluid-handling equipment for stimulation and fracturing operations.' },
  { icon: 'compressor', title: 'Cementing operations', text: 'Suitable connections are used in cementing lines and related well-service equipment.' },
  { icon: 'valve', title: 'Choke and kill systems', text: 'Hammer union connections are used in selected pressure-control flowline arrangements, subject to the equipment design and applicable requirements.' },
  { icon: 'layers', title: 'Oilfield manifolds', text: 'Sealing components support compatible connections in manifold systems used for fluid distribution and flow control.' },
];

export const applicationsNote =
  'Application suitability must always be verified against the exact connection figure, equipment specification and service conditions.';

export const dimensions = [
  { key: 'id', name: 'Inner diameter (ID)', text: 'The internal diameter of the seal.' },
  { key: 'od', name: 'Outer diameter (OD)', text: 'The external diameter of the seal.' },
  { key: 'height', name: 'Overall height', text: 'The total height or thickness of the sealing component.' },
  { key: 'profile', name: 'Profile geometry', text: 'The shape and features required to fit the union sealing recess.' },
];

export const dimensionsIntro =
  "Mithson's published product information lists hammer union seal sizes from 1 to 6 inches inner diameter. The correct seal must be selected using the dimensions and profile required by the specific union design.";

export const dimensionsNote =
  "Dimensions should be confirmed against the relevant product drawing and the connection manufacturer's specifications.";

export const selectionFactors = [
  { title: 'Union identification.', text: 'Confirm the manufacturer, connection figure, nominal size and sealing design.' },
  { title: 'Operating pressure.', text: 'Identify the maximum working pressure, pressure variations and relevant test requirements.' },
  { title: 'Operating temperature.', text: 'Provide the minimum, normal and maximum operating temperatures.' },
  { title: 'Fluid composition.', text: 'Identify the transported fluid, chemical additives, contaminants and potential sour-service exposure.' },
  { title: 'Material requirements.', text: 'Evaluate NBR, HNBR, FKM, FFKM or PTFE according to the actual application.' },
  { title: 'Reinforcement requirements.', text: 'Determine whether the original design requires a brass or stainless-steel reinforcement arrangement.' },
  { title: 'Dimensions.', text: 'Confirm the ID, OD, overall height and relevant profile drawing.' },
  { title: 'Service conditions.', text: 'Consider pressure cycling, temperature changes, connection make-up, vibration and expected service conditions.' },
];

export const publishedTable = [
  ['Product category', 'Hammer Union Seals'],
  ['Base material families', 'Elastomeric and PTFE'],
  ['Listed size range', '1–6 inches ID'],
  ['Dimensional information', 'ID, OD and overall height'],
  ['Material options shown on this page', 'NBR, HNBR, FKM, FFKM and PTFE'],
  ['Reinforcement options shown on this page', 'Brass and stainless steel'],
];

// Existing site data (src/content/typicalSpecs.js), kept exactly as published.
export const ratings = [
  { label: 'Working pressure', value: '15,000 psi', scope: 'Figure 1502 union' },
  { label: 'Test pressure', value: '22,500 psi', scope: 'Figure 1502 union' },
  { label: 'Temperature', value: '-40°C to +300°C', scope: 'Depends on material' },
];

export const ratingsNote =
  'The pressure class of a hammer union is identified by its connection design and figure number. A 15,000 psi connection rating must not be assumed for every seal or every union configuration. Likewise, a single temperature range must not be applied to all elastomer and PTFE materials. Request the approved technical datasheet for the selected material, size and connection figure.';

export const installation = [
  {
    title: 'Before installation',
    items: [
      'Verify the connection figure and nominal size.',
      'Confirm the seal material and dimensions.',
      'Inspect the seal for cuts, cracks, deformation or other damage.',
      'Inspect the mating sealing surfaces for corrosion, scoring or contamination.',
      'Confirm that the correct replacement seal is being used.',
    ],
  },
  {
    title: 'During installation',
    items: [
      "Follow the union manufacturer's installation procedure.",
      'Ensure the seal is correctly positioned.',
      'Avoid twisting, cutting or damaging the seal.',
      'Use the approved make-up method and tools.',
      'Never substitute an incompatible seal based only on similar dimensions.',
    ],
  },
  {
    title: 'Inspection & maintenance',
    items: [
      'Inspect seals at the intervals required by the equipment maintenance programme.',
      'Replace damaged or deteriorated sealing components.',
      'Investigate leakage rather than repeatedly tightening a connection.',
      'Check for signs of extrusion, wear, chemical attack or permanent deformation.',
    ],
  },
];

export const safetyNote =
  'Safety note: never loosen, disassemble or strike a pressurised hammer union connection. Isolate the system, verify zero pressure and follow the approved site safety procedure before maintenance.';

export const faqs = [
  { q: 'What is a Hammer Union Seal?', a: 'It is a sealing component used in compatible hammer union connections to help prevent fluid or gas leakage at the connection interface.' },
  { q: 'Where is the seal installed?', a: 'The seal is positioned in the designated sealing location of the compatible union design. Its exact position and orientation depend on the connection figure and manufacturer.' },
  { q: 'Which materials are available?', a: "Mithson's product information identifies elastomeric and PTFE sealing materials. The material options shown in the current product presentation include NBR, HNBR, FKM and FFKM. Confirm the available compound grades with Mithson." },
  { q: 'What is the difference between NBR and HNBR?', a: 'Both are nitrile-based elastomers. HNBR is hydrogenated to improve selected properties such as heat ageing, mechanical strength and resistance to certain demanding environments.' },
  { q: 'Can Hammer Union Seals be used for sour-gas service?', a: 'Selected HNBR and other qualified compounds may be considered for sour-service environments. Suitability must be confirmed against the actual hydrogen sulphide exposure, material qualification and applicable requirements.' },
  { q: 'Are brass and stainless-steel reinforcement options available?', a: 'The current product presentation identifies both brass and stainless-steel reinforcement options. The exact construction and availability should be confirmed for the required size and material.' },
  { q: 'How do I select the correct seal?', a: 'Provide the union manufacturer, figure number, nominal size, dimensions, fluid composition, operating pressure and temperature. This information helps the engineering team assess the correct seal configuration.' },
  { q: 'Can Mithson support custom dimensions?', a: 'Contact Mithson with the original seal drawing, sample or dimensional details to discuss manufacturing feasibility and available configurations.' },
];

export const closing = [
  'Every hammer union application has its own connection geometry, operating conditions and material requirements.',
  "Share your connection figure, seal dimensions and service conditions with Mithson's team. We can discuss the appropriate material family, reinforcement arrangement and technical information required to evaluate your application.",
];

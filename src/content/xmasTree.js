// Seals - X-Mas Tree page copy, from the approved text supplied by the user (November 2026).
// The text is careful about what is confirmed and what is general industry practice; those
// hedges are kept on the page. Figures come only from src/content/productItems.js and
// src/content/typicalSpecs.js — nothing numerical is invented here.

export const xtHero = {
  label: 'Wellhead gate valve sealing',
  title: 'Seals — X-Mas Tree.',
  titleAccent: 'Four components.',
  titleRest: 'One sealed valve.',
  lead:
    'Christmas tree assemblies are essential components of oil and gas wellhead systems. Their gate valves control and isolate production flow, making dependable sealing performance important to equipment integrity and operational safety.',
  lead2:
    'Mithson Sealing Solutions provides polymer sealing components for Christmas tree wellhead gate valve applications, including spring-energised seals, stem packing, seat seals and elastomer O-rings.',
};

export const heroChips = [
  { icon: 'layers', title: '4 components', text: 'Spring, packing, seat, O-ring' },
  { icon: 'seal', title: 'PTFE jackets', text: 'With metal energiser springs' },
  { icon: 'shield', title: 'API 6A Appendix F', text: 'Referenced for this range' },
  { icon: 'flask', title: 'Polymer & elastomer', text: 'Selected per interface' },
];

export const overviewIntro =
  'A Christmas tree is an assembly of valves, fittings and associated equipment installed at the wellhead to control the production or injection of fluids from an oil or gas well. Gate valves are commonly incorporated into the assembly to provide flow isolation.';

export const overviewRoles = [
  { icon: 'spring', title: 'Stem packing', text: 'Helps prevent fluid or gas leakage along the moving valve stem.' },
  { icon: 'seal', title: 'Spring-energised seals', text: 'Maintain sealing contact at their designated interfaces.' },
  { icon: 'valve', title: 'Seat seals', text: 'Help establish a sealing interface between the gate and valve seat assembly.' },
  { icon: 'ring', title: 'Elastomer O-rings', text: 'Provide sealing at selected static or dynamic interfaces.' },
];

export const overviewNote =
  'Each component has a specific location, geometry and operating requirement. Correct material and profile selection are essential for achieving the intended performance.';

// The four components Mithson already photographs. `spec` keys match src/content/productItems.js.
export const components = [
  {
    key: 'spring',
    number: '01',
    name: 'Spring-Energised Seals',
    spec: 'Spring Energized Seals',
    image: 'Spring Energized Seals',
    detail: 'spring-seal-ring',
    text: 'Spring-energised seals combine a precision-engineered polymer jacket with a metallic spring energiser. The spring supplies initial contact force to help maintain sealing contact. In suitable pressure-energised designs, system pressure can further increase contact at the sealing interface.',
    note: 'Mithson describes its spring-energised seals as PTFE jacket constructions with corrosion-resistant metal energiser springs.',
    points: [
      'Spring-assisted sealing contact',
      'Low-friction PTFE jacket options',
      'Suitable polymer material selection for demanding environments',
      'Application-specific seal profiles',
      'Static and selected dynamic configurations, depending on design',
    ],
    choose: 'Pressure direction, jacket geometry, spring material, gland dimensions, temperature and fluid compatibility.',
  },
  {
    key: 'packing',
    number: '02',
    name: 'Gate Valve Stem Packing',
    spec: 'Stem Packing',
    image: 'Stem Packing',
    detail: 'valve-cutaway',
    text: 'Stem packing is installed around the valve stem, generally within the stuffing box or packing chamber. Its primary purpose is to help prevent leakage along the stem while accommodating the movement required to operate the valve.',
    note: 'Packing arrangements may use polymer sealing rings and other application-specific packing elements.',
    points: [
      'Sealing around the valve stem',
      'Resistance to the relevant process media',
      'Compatibility with stem movement',
      'Controlled packing compression',
      'Material selection according to operating conditions',
    ],
    choose: 'Stem diameter, stuffing-box dimensions, packing arrangement, pressure, temperature and media.',
  },
  {
    key: 'seat',
    number: '03',
    name: 'Gate Valve Seat Seals',
    spec: 'Seat Seal',
    image: 'SEAT Seal',
    detail: null,
    text: 'Seat seals are located at the valve seat interfaces and contribute to sealing between the gate and seat assembly. Their geometry and material depend on the valve design, sealing arrangement and operating conditions.',
    note: 'Mithson lists PTFE gate valve seat seals within its published product range.',
    points: [
      'Designed for the applicable gate valve seat geometry',
      'Polymer material selection',
      'Controlled dimensional fit',
      'Compatibility with the sealing surfaces',
      'Application-specific pressure and temperature requirements',
    ],
    choose: 'Valve design, seat geometry, contact arrangement, pressure direction, differential pressure and process fluid.',
  },
  {
    key: 'oring',
    number: '04',
    name: 'Elastomer O-Rings',
    spec: 'Elastomer O-Ring',
    image: 'Elastomer O-Ring',
    detail: 'o-rings',
    text: 'Elastomer O-rings are circular sealing components used in suitable static and dynamic interfaces. They are commonly installed in machined grooves to create sealing contact when compressed between mating surfaces.',
    note: 'The right compound depends on the fluid, temperature and gas pressure in the valve.',
    points: [
      'Simple circular sealing geometry',
      'Static and selected dynamic sealing arrangements',
      'Multiple elastomer material options',
      'Suitable for different groove configurations',
      'Application-dependent compression and compatibility',
    ],
    choose: 'Groove dimensions, squeeze, extrusion clearance, temperature, pressure and fluid compatibility.',
  },
];

// 03 — construction, shown as an exploded view that reassembles
export const construction = {
  intro: 'A spring-energised seal generally consists of two main elements.',
  parts: [
    {
      key: 'jacket',
      name: 'Polymer jacket',
      text: "The polymer jacket forms the sealing interface and determines the seal's profile and contact geometry. Mithson identifies PTFE as a jacket material for its spring-energised seals.",
      note: 'PTFE offers useful characteristics including low friction and resistance to many chemicals. Filled PTFE grades may be selected where additional mechanical or wear properties are required.',
    },
    {
      key: 'spring',
      name: 'Metallic spring energiser',
      text: 'The spring is positioned within the polymer jacket and supplies the initial mechanical loading needed to maintain sealing contact. Its design and material affect the contact force and behaviour of the assembled seal.',
      note: 'Mithson identifies corrosion-resistant metal energiser springs in its product description. The exact alloy and spring configuration should be confirmed for the selected product.',
    },
  ],
  steps: [
    'The seal is installed into its designated gland.',
    'The spring applies an initial load to the polymer jacket.',
    'The jacket makes contact with the intended sealing surface.',
    'During suitable operating conditions, pressure may further energise the sealing profile.',
    'The spring helps maintain contact as the seal experiences changes within its design limits.',
  ],
  note: 'The exact pressure-energisation behaviour depends on the seal profile and pressure direction.',
};

export const materials = [
  { key: 'ptfe', name: 'PTFE', short: 'Polytetrafluoroethylene', family: 'Polymer', text: 'A fluoropolymer used in many industrial sealing applications.', points: ['Low friction', 'Broad chemical resistance', 'Useful thermal stability', 'Available in modified and filled compounds'] },
  { key: 'filled', name: 'Filled PTFE', short: 'Compounded grades', family: 'Polymer', text: 'PTFE can be compounded with fillers to improve selected mechanical properties.', points: ['Carbon', 'Graphite', 'Glass', 'Other application-specific fillers'], extra: 'The correct compound depends on the sealing interface, wear conditions and required mechanical properties.' },
  { key: 'nbr', name: 'NBR', short: 'Nitrile rubber', family: 'Elastomer', text: 'Commonly used for applications involving many petroleum-based oils and fuels.', points: [] },
  { key: 'hnbr', name: 'HNBR', short: 'Hydrogenated nitrile', family: 'Elastomer', text: 'Used in selected applications requiring improved heat ageing and mechanical properties compared with conventional NBR.', points: [] },
  { key: 'fkm', name: 'FKM', short: 'Fluoroelastomer', family: 'Elastomer', text: 'Selected for applications requiring resistance to many oils, fuels and chemicals at elevated temperatures.', points: [] },
  { key: 'ffkm', name: 'FFKM', short: 'Perfluoroelastomer', family: 'Elastomer', text: 'A specialised elastomer considered for demanding chemical and thermal environments.', points: [] },
];

export const materialsNote =
  'Material availability must be confirmed separately for each component type. Do not assume that every material listed here is available for spring seals, stem packing, seat seals and O-rings.';

// 05 — sealing positions, shown as hotspots on the valve cut-away
export const positions = [
  { key: 'stem', x: 56, y: 22, name: 'Stem sealing', text: 'Stem packing and applicable stem seals help control leakage along the valve stem.' },
  { key: 'spring', x: 62, y: 42, name: 'Spring-energised interfaces', text: 'Spring-energised seals are used in compatible valve designs where the profile and pressure direction are suitable.' },
  { key: 'gate', x: 50, y: 62, name: 'Gate and seat interface', text: 'Seat seals are used at the designated gate-to-seat sealing interface to support the required isolation function.' },
  { key: 'static', x: 34, y: 80, name: 'Static equipment interfaces', text: 'O-rings can be used at appropriate joints and component interfaces where the valve design specifies an elastomeric seal.' },
];

export const positionsNote =
  'The actual arrangement varies by gate valve design, manufacturer and model. Product selection should be based on the original equipment drawing or approved replacement specification. The positions marked here are indicative, not a drawing of any one valve.';

export const applications = [
  { icon: 'valve', title: 'Christmas tree gate valves', text: 'Sealing elements for applicable wellhead gate valve assemblies.' },
  { icon: 'rig', title: 'Wellhead equipment', text: 'Components for selected sealing interfaces in wellhead equipment.' },
  { icon: 'hydraulic', title: 'Production flow control', text: 'Sealing elements used within compatible valves that regulate or isolate production flow.' },
  { icon: 'flask', title: 'Oil and gas processing', text: 'Polymer sealing components for suitable equipment exposed to petroleum-based fluids and process media.' },
  { icon: 'compressor', title: 'Drilling and well service', text: 'Application-specific sealing components for compatible pressure-containing equipment.' },
  { icon: 'gauge', title: 'High-pressure valve systems', text: "Seals selected according to the equipment's rated pressure, temperature, material class and design requirements." },
];

export const applicationsNote =
  'These are application categories, not a claim that every Mithson seal profile is suitable for all the equipment listed.';

export const selectionGroups = [
  { title: 'Valve identification', items: ['Valve manufacturer', 'Valve model and series', 'Valve size', 'Valve design and drawing reference'] },
  { title: 'Seal identification', items: ['Component type', 'Original part number', 'Profile and cross-section', 'Inner and outer dimensions', 'Groove or gland dimensions'] },
  { title: 'Operating conditions', items: ['Minimum and maximum operating temperature', 'Normal and maximum working pressure', 'Pressure direction', 'Pressure cycling', 'Static or dynamic operating conditions'] },
  { title: 'Process media', items: ['Fluid or gas composition', 'Hydrocarbon content', 'Chemical additives', 'Potential hydrogen sulphide exposure', 'Other contaminants'] },
  { title: 'Material and compliance', items: ['Required polymer or elastomer grade', 'Applicable material class', 'Sour-service requirements, where applicable', 'Required testing and documentation', "Equipment manufacturer's approved specifications"] },
];

export const selectionIntro =
  'Correct selection requires more than identifying the product name.';

// 08 — comparison table. `spec` keys match src/content/productItems.js for the figures.
export const comparison = [
  { name: 'Spring-Energised Seal', spec: 'Spring Energized Seals', params: 'Jacket material, spring material, profile, pressure direction, gland dimensions' },
  { name: 'Stem Packing', spec: 'Stem Packing', params: 'Packing material, stem diameter, stuffing-box dimensions, movement and compression' },
  { name: 'Seat Seal', spec: 'Seat Seal', params: 'Seat geometry, contact arrangement, material, differential pressure and temperature' },
  { name: 'Elastomer O-Ring', spec: 'Elastomer O-Ring', params: 'ID, cross-section, compound, hardness, squeeze and extrusion clearance' },
];

export const specsNote =
  'Do not apply a single pressure or temperature range to the entire Christmas Tree seal product family. For each component, establish the validated minimum and maximum temperature, the approved pressure conditions, the applicable valve design and size, the relevant material class, and the qualification and testing evidence.';

export const standardsNote =
  "API Specification 6A is an important standard for wellhead and Christmas tree equipment. Mithson's published product information references API 6A Appendix F for its Christmas Tree sealing components. Customers should request the relevant product-specific material, inspection and qualification documents when specifying a seal.";

export const quality = [
  { icon: 'flask', title: 'Material verification', text: 'Confirming the specified material grade and its suitability for the application.' },
  { icon: 'drawing', title: 'Dimensional control', text: 'Checking the dimensions and profile geometry against approved drawings and tolerances.' },
  { icon: 'seal', title: 'Surface and profile quality', text: 'Inspecting the sealing surfaces for defects that could affect fit or contact.' },
  { icon: 'spring', title: 'Spring and assembly verification', text: 'For spring-energised seals, confirming the spring and polymer jacket assembly matches the approved design.' },
  { icon: 'check', title: 'Final inspection', text: 'Checking finished components against the relevant specifications before release.' },
];

export const qualityNote =
  'Mithson describes its quality approach as covering the product development lifecycle from prototype through production to post-delivery support.';

export const installation = [
  {
    title: 'Before installation',
    items: [
      'Confirm the correct valve and seal identification.',
      'Verify the product material and dimensions.',
      'Inspect the seal for damage or deformation.',
      'Clean and inspect the sealing surfaces.',
      'Check the condition of the valve stem, seat and gland.',
    ],
  },
  {
    title: 'During installation',
    items: [
      "Follow the valve manufacturer's procedure.",
      'Use the specified installation tools.',
      'Avoid cutting, twisting or damaging polymer sealing lips.',
      'Install packing in the correct arrangement.',
      'Apply the specified packing adjustment or compression procedure.',
    ],
  },
  {
    title: 'During maintenance',
    items: [
      'Inspect for leakage at the stem and seat interfaces.',
      'Look for extrusion, cracking, wear or chemical degradation.',
      'Check for damage to the mating surfaces.',
      'Replace seals using the approved replacement specification.',
      'Investigate repeated leakage rather than simply increasing packing compression.',
    ],
  },
];

export const safetyNote =
  'Safety: wellhead equipment may contain hazardous stored pressure. Isolate and depressurise the system, verify zero energy and follow the approved site procedures before opening or servicing equipment.';

export const faqs = [
  { q: 'What is a Christmas Tree gate valve seal?', a: 'It is a sealing component used in a wellhead gate valve to help prevent leakage at a particular sealing interface.' },
  { q: 'What types of seals are used in Christmas Tree gate valves?', a: 'Common component groups include spring-energised seals, stem packing, seat seals and elastomer O-rings.' },
  { q: 'What is a spring-energised seal?', a: 'It combines a polymer jacket with a metallic spring that provides initial sealing contact. Pressure may further energise the seal depending on the design.' },
  { q: 'What is the function of stem packing?', a: 'Stem packing helps prevent fluid or gas from leaking along the valve stem.' },
  { q: 'What is the purpose of a seat seal?', a: 'A seat seal provides the designated sealing interface between the gate and seat assembly.' },
  { q: 'Why are PTFE materials used?', a: 'PTFE offers low friction and broad chemical resistance, making it useful for suitable industrial sealing applications.' },
  { q: 'Are these seals suitable for sour-gas service?', a: 'Suitability depends on the exact material compound, operating conditions and applicable qualification requirements. Obtain material-specific confirmation before specifying a seal for sour service.' },
  { q: 'What information is required to select a replacement seal?', a: 'Provide the valve manufacturer, model, drawing, seal profile, dimensions, material, pressure, temperature and process-fluid information.' },
  { q: 'Does API 6A apply to these products?', a: 'API Specification 6A applies to wellhead and Christmas tree equipment. The applicable product requirements and any material or qualification claims must be confirmed against the relevant documentation.' },
];

export const closing = [
  'Every wellhead valve has its own design, sealing geometry and operating requirements.',
  "Share your valve drawings, original seal identification, material requirements and operating conditions with Mithson's team. Our team can review the application requirements and discuss suitable polymer sealing components for the specified equipment.",
];

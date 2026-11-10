// Seals - Valve page copy, from the approved text supplied by the user (November 2026).
// Products are the twelve Mithson already photographs for this page; plugs, sleeves and
// lined components live on the Plug & Lined Valve page and are linked, not duplicated.
// Figures come only from src/content/productItems.js — nothing numerical is invented here.
// The copy is explicit: no blanket temperature or pressure rating across the portfolio.

export const svHero = {
  label: 'Valve sealing solutions',
  title: 'Seals — Valve.',
  titleAccent: 'Precision sealing.',
  titleRest: 'Engineered reliability.',
  lead:
    'Mithson Sealing Solutions offers a comprehensive range of high-performance polymer and elastomer sealing components designed for demanding industrial valve applications.',
  lead2:
    'Designed around application-specific requirements, our solutions help address leakage control, chemical compatibility, friction, wear and dimensional stability across different valve configurations.',
};

export const heroTags = [
  'PTFE sealing solutions',
  'PEEK components',
  'Devlon seat rings',
  'Spring-energised seals',
  'Custom polymer components',
  'Industrial valve applications',
];

export const heroChips = [
  { icon: 'layers', title: '12 components', text: 'Seats, packings, seals, rings' },
  { icon: 'flask', title: '5 material families', text: 'PTFE, filled PTFE, PEEK, Devlon, elastomer' },
  { icon: 'valve', title: '6 valve types', text: 'Gate, ball, globe, plug, butterfly, diaphragm' },
  { icon: 'drawing', title: 'Made to drawing', text: 'Custom profiles and dimensions' },
];

// The twelve products this page photographs. `spec` keys match src/content/productItems.js.
export const catalogue = [
  {
    key: 'spring',
    name: 'Spring Energised Lip Seals',
    spec: 'Spring Energized Seals',
    image: 'Spring Energized Seals',
    family: 'Spring-energised',
    text: 'A precision-engineered polymer jacket with an internal energising spring that maintains contact at the sealing interface.',
    points: ['Spring-assisted sealing force', 'Low-friction sealing design', 'Selected static and dynamic applications', 'Application-specific polymer materials', 'Customisable dimensions and profiles'],
    uses: 'Valve stems, rotating shafts and specialised industrial sealing assemblies.',
  },
  {
    key: 'oring',
    name: 'Elastomer O-Rings',
    spec: 'Elastomer O-Ring',
    image: 'Elastomer O-Ring',
    family: 'Elastomer',
    text: 'Circular elastomer sealing components that prevent fluid and gas leakage between mating surfaces.',
    points: ['Compact sealing construction', 'Static sealing capability', 'Multiple elastomer material options', 'Application-specific sizing', 'Easy integration into compatible valve assemblies'],
    uses: 'Valve bodies, connections and auxiliary sealing interfaces.',
  },
  {
    key: 'stem',
    name: 'Stem Packing — API 6A',
    spec: 'Stem Packing API 6A',
    image: 'Stem packing API 6A',
    family: 'Packing',
    text: 'Installed around the valve stem to control leakage along the stem interface while allowing the required stem movement.',
    points: ['Precision packing geometry', 'Application-specific materials', 'Leakage-control design', 'Compatible packing configurations'],
    uses: 'Gate valves, wellhead valves and applicable API 6A equipment.',
    note: 'API 6A applies to the equipment. Product conformity must be confirmed against the relevant documentation for each item.',
  },
  {
    key: 'chevron',
    name: 'PTFE Chevron Packing',
    spec: 'PTFE Chevron Packing',
    image: 'PTFE Chevron Packing',
    family: 'Packing',
    text: 'V-shaped sealing rings arranged in a packing assembly, machined from PTFE.',
    points: ['V-shaped sealing profile', 'Low-friction characteristics', 'Broad chemical resistance depending on grade and media', 'Application-specific packing configurations'],
    uses: 'Industrial valve stems and specialised packing systems.',
  },
  {
    key: 'cgchevron',
    name: 'PTFE Carbon Graphite Chevron Packing',
    spec: 'PTFE Carbon Graphite Chevron Packing',
    image: 'PTFE Carbon Graphite Chevron Packing',
    family: 'Packing',
    text: 'PTFE combined with carbon and graphite fillers to modify its mechanical and tribological properties.',
    points: ['Carbon-graphite-filled PTFE construction', 'Formulation-specific wear characteristics', 'Application-specific friction properties', 'Precision-machined V-shaped profiles'],
    uses: 'Selected industrial valve packing systems.',
  },
  {
    key: 'cgseat',
    name: 'PTFE Carbon Graphite Seat',
    spec: 'PTFE Carbon Graphite Seat',
    image: 'PTFE Carbon Graphite Seat',
    family: 'Seat',
    text: 'Carbon-graphite-filled PTFE valve seats providing a polymer sealing interface with properties modified through the filler formulation.',
    points: ['Precision-machined geometry', 'Controlled sealing contact', 'Formulation-dependent mechanical properties', 'Custom seat profiles'],
    uses: 'Compatible ball valve seat assemblies.',
  },
  {
    key: 'cavity',
    name: 'PTFE Cavity Seat',
    spec: 'PTFE Cavity Seat',
    image: 'PTFE Cavity Seat',
    family: 'Seat',
    text: 'Designed for specialised valve configurations where seat geometry and cavity dimensions influence the sealing arrangement.',
    points: ['Precision-engineered cavity profile', 'Application-specific geometry', 'Polymer sealing interface', 'Custom manufacturing options'],
    uses: 'Specialised ball valves and valve-seat arrangements.',
  },
  {
    key: 'ptfeseat',
    name: 'PTFE Seat',
    spec: 'PTFE Seat',
    image: 'PTFE Seat',
    family: 'Seat',
    text: 'A polymer sealing interface between the closure element and its mating surface.',
    points: ['Low coefficient of friction', 'Broad chemical resistance', 'Precision-machined profiles', 'Application-specific configurations'],
    uses: 'Ball valves, plug valves and compatible valve assemblies.',
  },
  {
    key: 'peekring',
    name: 'PEEK Seat Ring',
    spec: 'Peek Seat Ring',
    image: 'Peek Seat Ring',
    family: 'Seat',
    text: 'Manufactured from polyether ether ketone, a thermoplastic known for its mechanical strength and thermal performance.',
    points: ['High mechanical strength', 'Good dimensional stability', 'Wear resistance', 'Suitable for selected demanding operating environments'],
    uses: 'Industrial ball valves and other compatible valve assemblies.',
  },
  {
    key: 'peekinsert',
    name: 'PEEK Insert Metal Seat',
    spec: 'Peek Insert Metal Seat',
    image: 'Peek Insert Metal Seat',
    family: 'Seat',
    text: 'A polymer sealing element combined with a metal support structure: the metal carries the load while the polymer provides the sealing interface.',
    points: ['Combined polymer and metal construction', 'Application-specific insert geometry', 'Structural support for the seat assembly', 'Precision-engineered mating dimensions'],
    uses: 'Selected industrial valve seat assemblies.',
  },
  {
    key: 'devlonring',
    name: 'Devlon Seat Ring',
    spec: 'Devlon Seat Ring',
    image: 'Devlon Seat Ring',
    family: 'Seat',
    text: 'Polymer seating components for selected valve applications. Suitability depends on the Devlon grade, operating media, temperature and mechanical loading.',
    points: ['Engineering-polymer seat construction', 'Grade-dependent mechanical properties', 'Precision-machined sealing profiles', 'Application-specific dimensional options'],
    uses: 'Compatible industrial ball valves and other valve configurations.',
  },
  {
    key: 'devloninsert',
    name: 'Devlon Insert Metal Seat',
    spec: 'Devlon Insert Metal Seat',
    image: 'Devlon Insert Metal Seat',
    family: 'Seat',
    text: "A Devlon-based sealing element with a supporting metal insert, designed around the valve's seat geometry.",
    points: ['Polymer-to-metal integrated construction', 'Structural support', 'Precision-engineered dimensions', 'Material and design selected for application requirements'],
    uses: 'Selected ball valve and industrial valve assemblies.',
  },
];

export const families = ['All', 'Seat', 'Packing', 'Spring-energised', 'Elastomer'];

export const catalogueNote =
  'PTFE plugs, sleeves and lined components are part of the Plug & Lined Valve range and have their own page.';

// 03 — how the sealing system works
export const systemParts = [
  { icon: 'spring', title: 'Stem packing', text: 'Controls leakage along the valve stem.' },
  { icon: 'seal', title: 'Seat seal', text: 'Creates the sealing interface between the closure element and seat.' },
  { icon: 'ring', title: 'Body O-ring', text: 'Seals suitable static joints and connections.' },
  { icon: 'layers', title: 'Spring-energised seal', text: 'Uses spring force to maintain contact at the sealing interface.' },
];

export const systemNote =
  'Every sealing component serves a different purpose. Together, they help control leakage, protect critical interfaces and maintain valve functionality.';

// 04 — materials
export const materials = [
  { key: 'ptfe', name: 'PTFE', short: 'Polytetrafluoroethylene', text: 'Low friction, broad chemical resistance and excellent electrical insulation. Used in a wide range of industrial sealing applications.', watch: 'Media compatibility and creep' },
  { key: 'modified', name: 'Carbon-graphite filled PTFE', short: 'Modified PTFE', text: 'A modified PTFE formulation designed to provide application-specific improvements in mechanical and friction-related properties.', watch: 'Grade and filler selection' },
  { key: 'peek', name: 'PEEK', short: 'Polyether ether ketone', text: 'High mechanical strength, dimensional stability and wear resistance for demanding engineering applications.', watch: 'Mechanical loading and temperature' },
  { key: 'devlon', name: 'Devlon', short: 'Engineering polymer', text: 'An engineering-polymer family used for selected valve seat and bearing applications, with properties depending on grade.', watch: 'Exact grade and operating environment' },
  { key: 'elastomer', name: 'FKM, HNBR, EPDM', short: 'Elastomers', text: 'Flexible sealing materials selected according to fluid compatibility, temperature, mechanical requirements and service conditions.', watch: 'EPDM suits selected water and chemical service; avoid unsuitable hydrocarbon exposure' },
  { key: 'spring', name: 'Metal energisers', short: 'Springs and supports', text: 'Corrosion-resistant metal springs and supporting components used in appropriate spring-energised sealing designs.', watch: 'Alloy confirmed per product' },
];

export const materialsNote =
  'Material selection should consider the complete operating environment, including media composition, temperature, pressure, movement, extrusion gaps, surface finish and expected service life.';

// 05 — valve technologies. Each list repeats only what the approved copy names.
export const valveTypes = [
  { key: 'gate', name: 'Gate valves', text: 'Sealing solutions for valve stems, seat interfaces and body connections.', items: ['Stem packing', 'Seat seals', 'Spring-energised seals', 'O-rings'] },
  { key: 'ball', name: 'Ball valves', text: 'Precision components for compatible ball valve configurations.', items: ['Seat rings', 'Cavity seats', 'Spring-energised seals', 'Elastomer seals'] },
  { key: 'globe', name: 'Globe valves', text: 'Sealing components for stem, closure and body interfaces, selected according to the valve’s internal geometry.', items: ['Stem interface', 'Closure interface', 'Body interface'] },
  { key: 'plug', name: 'Plug valves', text: 'Components designed around the plug and body arrangement. These are part of the Plug & Lined Valve range.', items: ['PTFE plugs', 'PTFE sleeves', 'Compatible seat or packing components'], link: '/products/plug-lined-valve' },
  { key: 'butterfly', name: 'Butterfly valves', text: 'Sealing components for disc and body interfaces, with material selection based on the valve design and service media.', items: ['Disc interface', 'Body interface'] },
  { key: 'diaphragm', name: 'Diaphragm valves', text: 'Polymer and elastomer sealing components designed for compatible diaphragm and valve-body arrangements.', items: ['Polymer components', 'Elastomer components'] },
];

// 06 — capabilities
export const capabilities = [
  { title: 'Application understanding', text: 'Reviewing valve drawings, equipment specifications, operating conditions and sealing requirements.' },
  { title: 'Material selection', text: 'Evaluating suitable polymer or elastomer grades based on fluid compatibility and operating conditions.' },
  { title: 'Precision manufacturing', text: 'Producing components according to approved drawings, dimensional requirements and selected material specifications.' },
  { title: 'Quality inspection', text: 'Checking critical dimensions, surface finish and product conformity against applicable specifications.' },
  { title: 'Customer support', text: 'Supporting product selection, technical clarification and post-delivery requirements.' },
];

// 07 — enquiry parameters
export const parameters = [
  ['Product type', 'Seat, packing, O-ring, spring-energised seal'],
  ['Material', 'PTFE, modified PTFE, PEEK, Devlon, elastomer'],
  ['Operating temperature', 'Minimum and maximum service temperature'],
  ['Operating pressure', 'Working and differential pressure'],
  ['Fluid media', 'Gas, oil, water, chemicals or process fluid'],
  ['Valve type', 'Gate, ball, globe, plug, butterfly'],
  ['Movement', 'Static, reciprocating, rotary or oscillating'],
  ['Dimensions', 'ID, OD, thickness and profile'],
  ['Surface finish', 'Contact surface specification'],
  ['Standards', 'Applicable drawing and equipment requirements'],
];

export const parametersNote =
  'Actual temperature and pressure capabilities depend on the selected material grade, seal geometry, installation conditions, extrusion gap, mating surfaces and operating media. Specifications are confirmed for each individual product and application, so no single rating is published across the whole portfolio.';

export const selectionChecks = [
  'Valve type and internal construction',
  'Operating pressure and temperature',
  'Fluid and chemical compatibility',
  'Required sealing performance',
  'Static or dynamic movement',
  'Surface finish and dimensional tolerances',
  'Material grade and reinforcement',
  'Installation and maintenance requirements',
];

export const customNote =
  'Have a special sealing requirement? Mithson can evaluate custom sealing components according to customer drawings, dimensional specifications and application requirements.';

export const faqs = [
  { q: 'What types of valve seals does Mithson manufacture?', a: 'Spring-energised lip seals, O-rings, stem packing, PTFE Chevron packing, carbon-graphite-filled PTFE packing, valve seats, cavity seats, PEEK seat rings, insert-metal seats and Devlon sealing components.' },
  { q: 'Which materials are available for valve seals?', a: 'Depending on the product and application, material options include PTFE, modified PTFE, PEEK, Devlon and selected elastomer materials such as FKM, HNBR and EPDM.' },
  { q: 'What is the difference between a PTFE seat and a PEEK seat?', a: 'PTFE is valued for its low friction and broad chemical resistance, while PEEK is often selected for applications requiring higher mechanical strength, wear resistance and dimensional stability. The appropriate selection depends on the application.' },
  { q: 'What is a spring-energised seal?', a: 'It is a sealing assembly consisting of a polymer jacket and an energising spring. The spring provides contact force to help maintain the sealing interface.' },
  { q: 'Are custom valve seals available?', a: 'Custom components can be evaluated according to engineering drawings, dimensions, material requirements and application specifications.' },
  { q: 'Can Mithson supply seals for Oil & Gas applications?', a: 'Mithson offers sealing solutions for industrial and Oil & Gas applications, including wellhead and Christmas Tree gate valve sealing requirements. Specific product suitability and applicable standards must be confirmed for the individual application.' },
  { q: 'How do I select the right valve seal?', a: 'Consider valve type, operating pressure, temperature, fluid media, dimensions, movement, material compatibility and installation conditions.' },
  { q: 'What information should I provide when requesting a quotation?', a: 'Provide the product name, valve model, technical drawing, dimensions, material preference, operating conditions and required quantity.' },
  { q: 'Are PTFE seals suitable for aggressive chemicals?', a: 'PTFE offers broad chemical resistance, but compatibility must be checked against the exact chemical, concentration, temperature and operating conditions.' },
  { q: 'Does Mithson provide technical assistance?', a: 'Customers can contact Mithson for product enquiries, material selection, technical clarification and application-related support.' },
];

export const closing = [
  'Every valve application has unique engineering requirements.',
  'Let our team help you identify the right sealing component, material and configuration for your equipment: technical support, custom requirements and product enquiries.',
];

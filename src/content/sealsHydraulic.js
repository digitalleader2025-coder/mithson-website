// Seals - Hydraulic page copy, from the approved text supplied by the user (November 2026).
// The text sets hard rules that are followed here:
//   - piston seals and rod seals are never described as doing the same job;
//   - wear rings are never described as pressure seals;
//   - no universal pressure, temperature or speed figure across the range;
//   - materials are presented as options, not as grades available in every profile;
//   - anything without an approved figure reads "Contact Mithson for confirmed specifications".
// Temperature, pressure and speed come from src/content/productItems.js.

export const shHero = {
  label: 'Hydraulic cylinder sealing',
  title: 'Seals — Hydraulic.',
  titleAccent: 'Pressure in.',
  titleRest: 'Contamination out.',
  lead:
    'Hydraulic sealing systems play a critical role in maintaining the performance, reliability and operational efficiency of hydraulic equipment. Mithson develops high-performance hydraulic sealing solutions using specialised engineering polymers and elastomeric materials designed to withstand demanding operating environments.',
  lead2:
    'The range includes piston seals, rod seals, wiper seals and wear rings, each performing a specific function within the hydraulic cylinder assembly.',
};

export const heroTags = [
  'Hydraulic piston sealing',
  'Hydraulic rod sealing',
  'Contamination protection',
  'Wear and guiding solutions',
  'High-performance polymers',
  'Custom dimensions',
];

export const heroChips = [
  { icon: 'layers', title: '4 families', text: 'Piston, rod, wiper, wear ring' },
  { icon: 'flask', title: '5 material families', text: 'PU, NBR, HNBR, FKM, PTFE' },
  { icon: 'move', title: 'Reciprocating', text: 'Dynamic sealing duty' },
  { icon: 'kit', title: 'Seal kits', text: 'For service and refurbishment' },
];

export const basicsIntro =
  'Hydraulic systems use pressurised fluid to transmit power and generate controlled mechanical movement. Hydraulic cylinders convert that fluid pressure into linear force, and specialised seals at different positions inside the cylinder maintain the pressure and prevent leakage.';

export const basicsParts = [
  'Piston seals',
  'Rod seals',
  'Wiper seals',
  'Wear rings',
  'Buffer seals, where required',
  'Static O-rings and supporting seals',
];

export const basicsNote =
  'Each component has a separate engineering responsibility. The performance of the whole cylinder depends on the correct combination of seal geometry, material, surface finish, clearance, lubrication and operating conditions.';

// The four families Mithson photographs. `spec` keys match src/content/productItems.js.
export const families = [
  {
    key: 'piston',
    number: '01',
    name: 'Hydraulic Piston Seals',
    subtitle: 'Reliable pressure separation inside the cylinder',
    spec: 'PISTON SEALS',
    photo: 'piston',
    detail: 'piston-detail',
    job: 'Stops fluid crossing the piston',
    text: 'Dynamic sealing components installed around the piston inside the cylinder. They prevent hydraulic fluid from bypassing the piston as it moves through the barrel, so the pressure difference across the piston can generate the force that extends and retracts the cylinder.',
    note: 'Single-acting profiles seal pressure primarily from one direction. Double-acting profiles maintain sealing when pressure acts from either side. The correct profile must be selected for the cylinder.',
    points: [
      'Dynamic reciprocating sealing',
      'Pressure separation across the piston',
      'Internal leakage control',
      'Single-acting and double-acting design options',
      'Wear-resistant material options',
      'Compatibility with selected hydraulic fluids',
      'Application-specific profile configurations',
    ],
    uses: 'Hydraulic cylinders, excavators, construction machinery, agricultural machinery, industrial presses, material-handling equipment, lifting systems and mobile hydraulic equipment.',
    asks: ['Single-acting or double-acting', 'Pressure direction', 'Piston diameter', 'Bore diameter', 'Groove dimensions', 'Reciprocating speed'],
  },
  {
    key: 'rod',
    number: '02',
    name: 'Hydraulic Rod Seals',
    subtitle: 'Keeping the fluid inside the cylinder',
    spec: 'Rod Seals',
    photo: 'rod',
    detail: 'rod-detail',
    job: 'Stops fluid escaping to the outside',
    text: 'Installed within the cylinder head or gland around the moving piston rod. They prevent hydraulic fluid from leaking out of the cylinder as the rod moves, maintaining the external pressure boundary of the system. The sealing lip stays in contact with the rod while allowing reciprocating movement.',
    note: 'A rod seal is not a piston seal. The piston seal works inside the cylinder between the two chambers; the rod seal works at the opening where the rod leaves the cylinder.',
    points: [
      'Dynamic external sealing',
      'Hydraulic-fluid retention',
      'Leakage prevention',
      'Reciprocating movement capability',
      'Wear-resistant material options',
      'Different lip and profile designs',
      'Application-specific pressure requirements',
    ],
    uses: 'Hydraulic cylinders, hydraulic presses, excavators, industrial machinery, construction equipment, hydraulic actuators and material-handling systems.',
    asks: ['Rod diameter', 'Gland dimensions', 'Pressure direction', 'Rod surface finish', 'Reciprocating speed'],
  },
  {
    key: 'wiper',
    number: '03',
    name: 'Hydraulic Wiper Seals',
    subtitle: 'Protection against external contamination',
    spec: 'WIPER SEALS',
    photo: 'wiper',
    detail: 'wiper-detail',
    job: 'Scrapes dirt off the returning rod',
    text: 'Also called scraper or dust seals, these sit at the external end of the cylinder gland. They remove dirt, dust, mud and moisture from the piston rod as it retracts, so contamination does not reach the internal sealing arrangement, where it would damage sealing surfaces and increase wear.',
    note: 'Some double-lip designs also help control the lubrication film on the rod. The geometry and material must exclude contamination without creating excessive friction.',
    points: [
      'External contamination exclusion',
      'Dust and dirt protection',
      'Moisture protection, depending on design',
      'Rod-surface cleaning',
      'Wear resistance',
      'Single-lip and double-lip designs',
      'Compatibility with selected rod finishes',
    ],
    uses: 'Excavators, earthmoving machinery, agricultural equipment, hydraulic presses, mining machinery, industrial cylinders and outdoor hydraulic systems.',
    asks: ['Rod diameter', 'Groove dimensions', 'Wiper lip geometry', 'Contamination exposure', 'Retention arrangement'],
  },
  {
    key: 'wear',
    number: '04',
    name: 'Hydraulic Wear Rings',
    subtitle: 'Guiding, not sealing',
    spec: 'Wear Rings',
    photo: 'wear',
    detail: 'wear-detail',
    job: 'Guides the piston and rod, carries side load',
    text: 'Also called guide rings or wear bands, these guide the piston and piston rod during movement. They support radial side loads and keep the moving parts aligned, preventing direct metal-to-metal contact between piston and barrel, or between rod and cylinder head.',
    note: 'A wear ring is not a pressure seal. Its job is guidance and side-load support; by controlling lateral movement it protects the primary sealing elements.',
    points: [
      'Piston and rod guidance',
      'Radial load support',
      'Reduced metal-to-metal contact',
      'Wear resistance',
      'Dimensional stability',
      'Low-friction material options',
      'Protection of primary sealing components',
    ],
    uses: 'Hydraulic cylinders, construction equipment, mining machinery, hydraulic presses, industrial lifting systems, agricultural machinery and heavy-duty mechanical equipment.',
    asks: ['Inner diameter', 'Outer diameter', 'Width', 'Wall thickness', 'Radial clearance', 'Permissible side load', 'Material grade'],
  },
];

export const extras = [
  { key: 'buffer', title: 'Buffer seals', photo: null, text: 'Installed in selected heavy-duty arrangements to manage pressure peaks and reduce the pressure reaching the primary rod seal. Particularly relevant where there are high pressure fluctuations and shock loading.' },
  { key: 'orings', title: 'Hydraulic O-rings', photo: 'orings', text: 'Static sealing between stationary mating surfaces, including cylinder heads, housings and other assembly interfaces.' },
  { key: 'backup', title: 'Back-up rings', photo: null, text: 'Used alongside compatible seals to reduce extrusion into clearance gaps under pressure.' },
  { key: 'kits', title: 'Hydraulic seal kits', photo: 'seal-kit-bench', text: 'A selected assortment of compatible sealing components intended for cylinder servicing or refurbishment.' },
];

export const extrasNote =
  'These are additional hydraulic sealing technologies available to enquire about. Not every component is manufactured in every size or material; availability is confirmed per application.';

export const workingIntro =
  'A hydraulic cylinder uses several sealing and guiding components at once to control fluid movement, prevent leakage and protect internal surfaces. Step through the cylinder to see what each one does.';

export const workingStages = [
  { key: 'pressure', label: 'Pressure', name: 'Pressure generation', highlight: null, text: 'Hydraulic fluid enters the cylinder chamber and generates pressure against the piston. The pressure difference across the piston is what produces the force.' },
  { key: 'piston', label: 'Piston seal', name: 'Piston sealing', highlight: 'piston', text: 'The piston seal maintains the pressure barrier between the two sides of the piston, so fluid cannot simply cross from the high-pressure side to the low-pressure side.' },
  { key: 'rod', label: 'Rod seal', name: 'Rod sealing', highlight: 'rod', text: 'As the piston rod moves through the cylinder head, the rod seal prevents hydraulic fluid from escaping to the outside.' },
  { key: 'wiper', label: 'Wiper', name: 'Contamination protection', highlight: 'wiper', text: 'When the rod retracts, the wiper seal removes external dust, mud and moisture from the rod surface before it re-enters the cylinder.' },
  { key: 'wear', label: 'Wear rings', name: 'Guiding and support', highlight: 'wear', text: 'Wear rings guide the piston and rod, support radial side loads and help prevent metal-to-metal contact, protecting the seals around them.' },
];

export const materials = [
  {
    key: 'pu',
    name: 'Polyurethane',
    short: 'PU / TPU',
    photo: 'material-pu',
    text: 'Commonly used for hydraulic piston and rod seals because of its mechanical strength, elasticity and abrasion resistance.',
    points: ['High abrasion resistance', 'Good mechanical strength', 'Good elastic recovery', 'Wear resistance', 'Suitable for many hydraulic applications'],
    uses: 'Piston seals, rod seals, wiper seals and hydraulic wear components.',
  },
  {
    key: 'nbr',
    name: 'Nitrile rubber',
    short: 'NBR',
    photo: 'material-nbr',
    text: 'An elastomer commonly used in hydraulic sealing because of its resistance to many petroleum-based hydraulic oils and its flexible sealing behaviour.',
    points: ['Oil resistance for compatible fluids', 'Elasticity', 'Good general-purpose sealing properties', 'Different compound formulations'],
    uses: 'Hydraulic O-rings, static seals and compatible dynamic sealing arrangements.',
  },
  {
    key: 'hnbr',
    name: 'Hydrogenated nitrile',
    short: 'HNBR',
    photo: null,
    text: 'Offers improved thermal and mechanical properties compared with conventional NBR formulations in suitable grades.',
    points: ['Improved heat resistance', 'Good mechanical strength', 'Wear resistance', 'Compatibility with selected hydraulic fluids'],
    uses: 'Demanding hydraulic equipment, industrial sealing and selected high-temperature applications.',
  },
  {
    key: 'fkm',
    name: 'Fluorocarbon',
    short: 'FKM',
    photo: null,
    text: 'A fluorocarbon elastomer used where suitable thermal and chemical resistance is required.',
    points: ['Heat resistance', 'Chemical resistance for compatible media', 'Low permeability in suitable grades', 'Industrial sealing applications'],
    uses: 'Selected hydraulic systems, industrial fluid-handling equipment and temperature-sensitive sealing.',
  },
  {
    key: 'ptfe',
    name: 'PTFE and modified PTFE',
    short: 'Fluoropolymer',
    photo: null,
    text: 'Used in specialised arrangements where low friction, chemical resistance and dimensional characteristics are important.',
    points: ['Low friction', 'Chemical resistance', 'Good dimensional stability in suitable constructions', 'Low stick-slip potential', 'Formulations for different requirements'],
    uses: 'PTFE cap seals, spring-energised arrangements, low-friction dynamic seals and specialised hydraulic sealing systems.',
  },
];

export const materialsNote =
  'These are the relevant hydraulic sealing material technologies, not a claim that every material is available in every Mithson profile. Final selection is based on Mithson’s confirmed grades and fluid compatibility.';

export const applications = [
  { icon: 'digger', title: 'Construction machinery', items: ['Excavators', 'Loaders', 'Backhoe loaders', 'Hydraulic booms', 'Lifting arms'], need: 'Wear resistance, contamination exclusion, impact resistance and reliable reciprocating sealing.' },
  { icon: 'mine', title: 'Mining equipment', items: ['Mining excavators', 'Hydraulic support systems', 'Drilling machinery', 'Heavy lifting equipment'], need: 'Abrasion resistance, contamination protection and material suitability for demanding conditions.' },
  { icon: 'leaf', title: 'Agricultural machinery', items: ['Tractors', 'Harvesters', 'Lifting systems', 'Hydraulic attachments'], need: 'Durable seals, dirt exclusion and reliable operation outdoors.' },
  { icon: 'press', title: 'Industrial presses', items: ['Hydraulic presses', 'Forming machines', 'Industrial actuators', 'Manufacturing equipment'], need: 'Pressure retention, extrusion resistance and stable dynamic sealing.' },
  { icon: 'forklift', title: 'Material handling', items: ['Forklifts', 'Industrial lifts', 'Handling systems', 'Loading machinery'], need: 'Reliable piston and rod sealing, wear control and contamination exclusion.' },
  { icon: 'truck', title: 'Automotive and transport', items: ['Hydraulic suspension', 'Lifting equipment', 'Specialised actuators'], need: 'Dynamic sealing, wear resistance and application-specific fluid compatibility.' },
  { icon: 'wave', title: 'Marine and offshore', items: ['Hydraulic actuators', 'Deck machinery', 'Marine lifting systems', 'Offshore equipment'], need: 'Moisture protection, corrosion management and suitable material selection.' },
  { icon: 'layers', title: 'General industrial', items: ['Hydraulic cylinders', 'Manufacturing machinery', 'Industrial automation', 'Power-generation auxiliaries'], need: 'Reliable pressure containment and long-term sealing performance.' },
];

export const applicationsNote =
  'These are application areas, not blanket product approvals. The right seal is identified from the cylinder design and operating conditions.';

const ASK = 'Contact Mithson for confirmed specifications';

export const generalSpecs = [
  ['Product name', 'Piston seal, rod seal, wiper seal or wear ring'],
  ['Product code', ASK],
  ['Seal profile', ASK],
  ['Seal type', 'Dynamic or static, stated per family'],
  ['Material grade', ASK],
  ['Seal cross-section', ASK],
  ['Inner diameter', ASK],
  ['Outer diameter', ASK],
  ['Width', ASK],
  ['Groove dimensions', ASK],
  ['Installation clearance', ASK],
  ['Operating temperature', 'Published per family below'],
  ['Maximum working pressure', 'Published per family below'],
  ['Maximum reciprocating speed', 'Published per family below'],
  ['Fluid compatibility', 'Checked against the stated hydraulic fluid'],
  ['Surface finish requirements', ASK],
  ['Application type', 'Stated by the customer'],
];

export const specsNote =
  'Different polyurethane, NBR, HNBR, FKM and PTFE formulations have different operating ranges, and permissible pressure also depends on the seal profile, extrusion gap, hardness, temperature and cylinder design. The figures shown against each family are typical industry values for that seal type, not one range applied to the whole product line.';

export const selectionSteps = [
  { title: 'Cylinder type', text: 'Identify the cylinder type and its construction.' },
  { title: 'Operating pressure', text: 'Determine normal operating pressure, maximum pressure and pressure fluctuations.' },
  { title: 'Operating temperature', text: 'Identify minimum, normal and maximum working temperatures.' },
  { title: 'Hydraulic fluid', text: 'Identify the fluid type and chemical compatibility requirements.' },
  { title: 'Movement', text: 'Reciprocating, continuous, intermittent or frequent start-stop operation.' },
  { title: 'Speed', text: 'Determine piston and rod movement speed.' },
  { title: 'Dimensions', text: 'Bore diameter, rod diameter, groove diameter, groove width and seal cross-section.' },
  { title: 'Environment', text: 'Dust, mud, moisture, abrasive contamination, external temperature and chemical exposure.' },
  { title: 'Surface condition', text: 'Rod hardness, surface roughness and cylinder bore finish.' },
];

export const maintenance = [
  { icon: 'drawing', title: 'Groove inspection', text: 'Inspect the seal groove for scratches, burrs, corrosion and dimensional damage.' },
  { icon: 'move', title: 'Shaft and bore condition', text: "Verify the rod surface and cylinder bore finish against the selected seal's requirements." },
  { icon: 'check', title: 'Correct installation', text: 'Use approved installation tools and methods to prevent twisting, cutting or deformation of the seal.' },
  { icon: 'flask', title: 'Fluid compatibility', text: 'Ensure the seal material is compatible with the hydraulic fluid and any additives.' },
  { icon: 'shield', title: 'Contamination control', text: 'Inspect wiper seals and keep the hydraulic system clean to reduce abrasive contamination.' },
  { icon: 'gauge', title: 'Periodic inspection', text: 'Monitor leakage, abnormal temperature, friction, vibration and visible seal wear.' },
];

export const troubleshooting = [
  { title: 'External leakage', causes: ['Rod seal wear', 'Incorrect seal dimensions', 'Damaged sealing lip', 'Rod surface damage', 'Installation errors'] },
  { title: 'Internal leakage', causes: ['Piston seal wear', 'Extrusion damage', 'Incorrect seal profile', 'Excessive clearance', 'Material degradation'] },
  { title: 'Excessive seal wear', causes: ['Abrasive contamination', 'Poor surface finish', 'Excessive friction', 'Incorrect material selection', 'Misalignment'] },
  { title: 'Seal extrusion', causes: ['Excessive pressure', 'Excessive extrusion gap', 'Incorrect material hardness', 'High operating temperature', 'Inadequate back-up support'] },
  { title: 'Wiper failure', causes: ['Damaged wiper lip', 'Incorrect installation', 'Excessive contamination', 'Incorrect rod finish', 'Material incompatibility'] },
  { title: 'High friction or stick-slip', causes: ['Inappropriate seal material', 'Insufficient lubrication film', 'Excessive seal interference', 'Incorrect surface finish', 'Operating conditions outside the design range'] },
];

export const troubleshootingNote =
  'This is general engineering guidance. A failure cause must be verified through inspection and application-specific analysis.';

export const kitIntro =
  'Hydraulic seal kits provide a collection of compatible sealing components for cylinder maintenance, repair and refurbishment. Depending on the cylinder design, a kit may include piston seals, rod seals, wiper seals, O-rings, back-up rings and other specified components.';

export const kitPoints = [
  'Consolidated replacement components',
  'Application-specific component selection',
  'Convenient maintenance and refurbishment',
  'Reduced sourcing complexity',
  'Compatibility based on the cylinder design',
];

export const kitNote =
  'Correct kit selection matters because each cylinder has its own dimensions, groove configurations and sealing requirements.';

export const customStages = [
  { title: 'Application analysis', text: 'Understand the hydraulic equipment and operating conditions.' },
  { title: 'Technical requirement review', text: 'Evaluate pressure, temperature, movement, speed and hydraulic-fluid compatibility.' },
  { title: 'Material selection', text: 'Evaluate suitable polyurethane, elastomer and engineering polymer options.' },
  { title: 'Dimensional engineering', text: 'Review seal dimensions, groove geometry and installation requirements.' },
  { title: 'Quality inspection', text: 'Verify the finished component against the approved product specifications.' },
];

export const documents = [
  'Hydraulic piston seal datasheets',
  'Hydraulic rod seal datasheets',
  'Hydraulic wiper seal datasheets',
  'Hydraulic wear ring datasheets',
  'Hydraulic seal kit catalogue',
  'Material compatibility guide',
  'Installation instructions',
  'Technical drawing library',
];

export const documentsNote =
  'These are issued after a technical review of your application, so there is nothing to download here. Tell us which you need and the engineering team will send the approved version.';

export const faqs = [
  { q: 'What are hydraulic seals?', a: 'Components used in hydraulic systems to prevent fluid leakage, maintain pressure and protect moving mechanical components.' },
  { q: 'What is the difference between piston seals and rod seals?', a: 'Piston seals prevent hydraulic fluid from bypassing the piston inside the cylinder. Rod seals prevent hydraulic fluid from escaping externally around the moving piston rod.' },
  { q: 'What is the purpose of a hydraulic wiper seal?', a: 'A wiper seal removes dust, dirt, mud and other contaminants from the piston rod as it retracts into the cylinder.' },
  { q: 'What is a hydraulic wear ring?', a: 'A wear ring guides the piston or rod, supports radial side loads and helps prevent direct metal-to-metal contact. It is not a pressure seal.' },
  { q: 'Can piston seals be used for double-acting cylinders?', a: 'Yes. Specific piston seal profiles are designed for double-acting cylinders, where pressure may act on either side of the piston. The correct profile must be selected.' },
  { q: 'Which material is best for hydraulic seals?', a: 'There is no single material suitable for every application. Polyurethane, NBR, HNBR, FKM and PTFE each have different engineering characteristics.' },
  { q: 'What causes hydraulic seal leakage?', a: 'Common causes include wear, incorrect installation, damaged surfaces, material incompatibility, excessive pressure and extrusion damage.' },
  { q: 'What information is required to select a hydraulic seal?', a: 'Seal type, bore diameter, rod diameter, groove dimensions, pressure, temperature, movement speed and hydraulic-fluid type.' },
  { q: 'Are custom hydraulic seal sizes available?', a: 'Application-specific sizes can be evaluated based on technical drawings and manufacturing capabilities.' },
  { q: 'What is a hydraulic seal kit?', a: 'A set of compatible sealing components used for servicing or refurbishing a hydraulic cylinder.' },
  { q: 'What is the difference between a buffer seal and a rod seal?', a: 'A rod seal provides the primary external fluid barrier. A buffer seal, when used, helps manage pressure peaks and protects the primary rod-sealing arrangement.' },
  { q: 'How can I request a quotation?', a: "Share the required seal type, dimensions, quantity, application and operating conditions through Mithson's enquiry channel." },
];

export const closing = [
  'Reliable hydraulic performance starts with the right sealing solution.',
  'Whether you require hydraulic piston seals, rod seals, wiper seals, wear rings or complete seal kits, Mithson can help evaluate suitable solutions for your equipment. Share your cylinder dimensions, operating conditions and technical requirements with our team.',
];

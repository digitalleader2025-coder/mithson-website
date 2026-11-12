// Encapsulated O-Ring page copy, from the approved text supplied by the user (November 2026).
// Hard rules the text sets, followed here:
//   - the two published temperature ranges belong to their own core and are never merged;
//   - 1,500 psi is shown as a typical reference, never as a rating, and always with its caveat;
//   - FEP is never described as an impermeable barrier: permeation is named as a real risk;
//   - chemical resistance is never presented as universal compatibility;
//   - no FDA, USP or food-contact compliance is claimed without documentation;
//   - these are static seals first, with light-duty dynamic use called out as needing evaluation;
//   - hollow core is never offered as a drop-in for solid core.

export const eoHero = {
  label: 'FEP encapsulated sealing',
  title: 'Encapsulated O-Ring.',
  titleAccent: 'Rubber inside.',
  titleRest: 'Fluoropolymer outside.',
  lead:
    'High-performance FEP encapsulated O-Rings for demanding industrial environments where chemical resistance, temperature flexibility and dependable sealing all matter at once. A dual-component construction: an elastic inner core inside a seamless outer jacket of Fluorinated Ethylene Propylene.',
  lead2:
    'The FEP jacket is the chemical-resistant barrier. The elastomeric core supplies the elasticity and restoring force that keeps the seal in contact. Together they do what neither a solid fluoropolymer ring nor a plain rubber O-Ring can do alone.',
};

export const heroTags = [
  'Seamless FEP protective jacket',
  'Silicone and FKM/Viton core options',
  'Resistance to many aggressive chemicals',
  'Wide application-specific temperature range',
  'Low-friction, non-stick outer surface',
  'Elastic sealing core',
  'Static and selected light-duty dynamic use',
  'Custom sizes and configurations',
];

export const heroChips = [
  { icon: 'shield', title: 'FEP jacket', text: 'Seamless, chemical-resistant' },
  { icon: 'thermo', title: '−60°C to +205°C', text: 'Silicone core' },
  { icon: 'thermo', title: '−20°C to +204°C', text: 'FKM / Viton core' },
  { icon: 'gauge', title: 'Up to 1,500 psi', text: 'Typical reference, not a rating' },
];

export const heroSpecs = [
  ['Product category', 'FEP encapsulated O-Rings'],
  ['Outer jacket', 'FEP'],
  ['Core materials', 'Silicone (VMQ), FKM (Viton)'],
  ['Silicone core temperature', '−60°C to +205°C'],
  ['FKM core temperature', '−20°C to +204°C'],
  ['Pressure', 'Up to 1,500 psi — typical, subject to design validation'],
  ['Surface characteristics', 'Low friction and non-stick'],
  ['Chemical resistance', 'Resistance to many industrial chemicals'],
  ['Sealing type', 'Primarily static; selected light-duty dynamic applications'],
  ['Construction', 'Seamless fluoropolymer encapsulation'],
  ['Customisation', 'Size, cross-section and core configuration'],
];

export const heroCaveat =
  'Temperature and pressure must be confirmed for the selected compound, seal dimensions, groove design, fluid, duty cycle and installation conditions. Nothing on this page is a rating for your assembly until our engineers have reviewed it.';

// 01 - the construction
export const overviewIntro =
  'Traditional elastomeric O-Rings are used everywhere. But certain environments expose plain rubber to aggressive chemicals, elevated temperatures and demanding process conditions, and the seal swells, hardens, softens, degrades or simply stops sealing. The encapsulated construction is the answer to that specific problem.';

export const construction = [
  {
    key: 'jacket',
    number: '01',
    title: 'Outer FEP jacket',
    text: 'Made from Fluorinated Ethylene Propylene, a fluoropolymer known for resistance to a wide range of chemicals, low friction and a non-stick surface. Its job is to protect the elastomeric core from the process medium.',
  },
  {
    key: 'core',
    number: '02',
    title: 'Inner elastomeric core',
    text: 'Supplies the elasticity and restoring force that keeps the O-Ring in contact with the sealing surfaces. Mithson offers two principal core options: silicone (VMQ) and fluoroelastomer (FKM/Viton).',
  },
];

export const overviewTogether =
  'The FEP jacket keeps the process medium off the inner elastomer, while the core gives back the resilience that a solid fluoropolymer ring on its own does not have. You get the chemical protection of a fluoropolymer and the elastic behaviour of an elastomer in one component.';

// 02 - the two cores. `photo` keys map to the images in index.jsx.
export const cores = [
  {
    key: 'silicone',
    number: '01',
    name: 'FEP Encapsulated Silicone Core',
    short: 'Silicone Core',
    subtitle: 'Flexible sealing for low-temperature and high-purity applications',
    job: 'Stays flexible when it gets cold',
    photo: 'silicone',
    detail: 'cores',
    temperature: '−60°C to +205°C',
    text: 'A flexible silicone elastomeric core inside a seamless FEP outer jacket. The silicone core stays flexible at low temperatures, where conventional elastomers stiffen and lose sealing contact. The FEP jacket gives the chemical-resistant barrier and a smooth, low-friction sealing surface.',
    points: [
      'Silicone (VMQ) elastomeric core',
      'Seamless FEP encapsulation',
      'Excellent low-temperature flexibility',
      'Chemical-resistant outer surface',
      'Low-friction characteristics',
      'Smooth non-stick surface',
      'Suitable for selected high-purity applications',
      'Customisable dimensions',
    ],
    gains: [
      'Supports sealing in low-temperature environments',
      'Provides elastic recovery through the silicone core',
      'Helps protect the core from direct chemical exposure',
      'Reduces surface adhesion under suitable installation conditions',
      'Supports high-purity applications once the complete construction is qualified',
    ],
    uses: 'Pharmaceutical processing equipment, chemical transfer systems, food and beverage processing, laboratory equipment, Clean-in-Place systems and specialised industrial sealing assemblies.',
    choose: [
      'The application needs very good low-temperature flexibility',
      'The equipment runs under variable temperature conditions',
      'A flexible elastomeric core matters',
      'The work involves selected pharmaceutical or food-processing environments',
    ],
  },
  {
    key: 'fkm',
    number: '02',
    name: 'FEP Encapsulated FKM / Viton Core',
    short: 'FKM Core',
    subtitle: 'Chemical-resistant sealing with better compression-set behaviour',
    job: 'Holds its shape under long compression',
    photo: 'fkm',
    detail: 'rings',
    temperature: '−20°C to +204°C',
    text: 'A fluoroelastomer core inside a seamless FEP outer jacket. FKM is chosen for its chemical and thermal properties and its generally favourable compression-set behaviour compared with many conventional elastomers. The jacket adds the fluoropolymer barrier, which suits this construction to aggressive process media.',
    points: [
      'FKM (Viton) elastomeric core',
      'Seamless FEP protective jacket',
      'Good compression-set characteristics',
      'Resistance to many oils and chemicals',
      'Smooth, low-friction surface',
      'Thermal stability',
      'Application-specific sealing configurations',
      'Custom sizes available',
    ],
    gains: [
      'Supports sealing in demanding chemical environments',
      'Provides elastic restoring force',
      'Helps minimise chemical attack on the elastomeric core',
      'Offers suitable thermal characteristics for selected industrial processes',
      'Supports reliable sealing when correctly designed and installed',
    ],
    uses: 'Chemical processing plants, petrochemical equipment, oil and gas processing, industrial pumps and valves, hydraulic and process equipment, and chemical storage and transfer systems.',
    choose: [
      'Compression-set behaviour is an important consideration',
      'The process involves compatible oils and industrial chemicals',
      'The application calls for a fluoroelastomer core',
      'Thermal and chemical requirements match the selected FKM compound',
    ],
  },
];

export const coreCompare = [
  ['Outer jacket', 'FEP', 'FEP'],
  ['Core material', 'VMQ / Silicone', 'FKM / Fluoroelastomer'],
  ['Temperature range', '−60°C to +205°C', '−20°C to +204°C'],
  ['Low-temperature flexibility', 'Excellent', 'More limited than silicone'],
  ['Compression-set behaviour', 'Compound dependent', 'Generally favourable'],
  ['Chemical compatibility', 'Depends on the silicone compound', 'Depends on the FKM compound'],
  ['Typical selection', 'Low-temperature and selected high-purity work', 'Chemical and industrial sealing'],
  ['Hardness', 'Compound dependent', 'Compound dependent'],
];

export const coreNote =
  'No core material is universally better. The final selection depends on the actual process medium, the operating conditions and the sealing geometry.';

// 03 - FEP itself
export const fepIntro =
  'Fluorinated Ethylene Propylene is a high-performance fluoropolymer used across chemical processing, electrical insulation, industrial tubing and specialised sealing. In an encapsulated O-Ring it is the external protective jacket around the elastomeric core.';

export const fepProperties = [
  { icon: 'flask', number: '01', title: 'Chemical resistance', text: 'Resistance to a broad range of acids, solvents and industrial chemicals. Compatibility is still verified against the exact chemical, concentration, temperature and exposure duration.' },
  { icon: 'slide', number: '02', title: 'Low-friction surface', text: 'The smooth surface reduces friction between the seal and the mating surfaces during installation and suitable operating conditions.' },
  { icon: 'drop', number: '03', title: 'Non-stick characteristics', text: 'Low surface energy reduces adhesion and helps keep the seal from sticking to contacting surfaces.' },
  { icon: 'thermo', number: '04', title: 'Thermal performance', text: 'Useful thermal stability for applications within its specified operating range.' },
  { icon: 'bolt', number: '05', title: 'Electrical insulation', text: 'Excellent dielectric properties, useful where an application needs both chemical protection and electrical insulation.' },
  { icon: 'shield', number: '06', title: 'Moisture resistance', text: 'Low moisture absorption, which helps hold its characteristics in humid and wet environments.' },
];

export const fepWarning =
  'FEP is not a completely impermeable barrier to every chemical or gas. Some substances can permeate through the jacket over time and reach the elastomer inside. For a critical application, permeation and long-term compatibility have to be evaluated, not assumed.';

// 04 - how it seals. The slider drives the drawing.
export const workingIntro =
  'An encapsulated O-Ring seals through fluoropolymer protection and elastomeric compression together. Set the squeeze below and watch what happens in the groove.';

export const workingStages = [
  { key: 'install', number: '01', title: 'Installation', squeeze: 0, text: 'The O-Ring is positioned inside the designated sealing groove. The groove dimensions, the seal cross-section and the installation clearances all have to suit the encapsulated construction, which is stiffer than a plain rubber ring.' },
  { key: 'compress', number: '02', title: 'Controlled compression', squeeze: 12, text: 'As the mating components are assembled the O-Ring is compressed between the sealing surfaces. The elastomeric core deforms and develops a restoring force.' },
  { key: 'contact', number: '03', title: 'Sealing contact', squeeze: 20, text: 'The compressed core maintains contact pressure through the FEP jacket against the surrounding surfaces, which is what stops the process medium passing through the interface.' },
  { key: 'operate', number: '04', title: 'Operating condition', squeeze: 25, text: 'In service the FEP jacket is the chemical-resistant contact surface, while the core keeps supplying elastic sealing force within the specified application limits.' },
];

export const workingFactors = [
  'Correct O-Ring cross-section',
  'Groove depth and width',
  'Seal squeeze percentage',
  'Surface finish',
  'Installation clearance',
  'Chemical compatibility',
  'Temperature variation',
  'Pressure and extrusion gap',
  'Static or dynamic movement',
];

// 05 - solid vs hollow
export const configurations = [
  {
    key: 'solid',
    name: 'Solid core',
    subtitle: 'The standard construction',
    text: 'A fully filled elastomeric cross-section surrounded by the FEP jacket. The solid core provides the elastic restoring force needed for normal sealing applications.',
    points: ['Solid elastomeric core', 'Higher available contact force than a comparable hollow core', 'Suits conventional sealing grooves', 'Available in silicone and FKM'],
  },
  {
    key: 'hollow',
    name: 'Hollow core',
    subtitle: 'For limited closing loads',
    text: 'An internal cavity within the elastomeric core. This reduces the compression force needed during installation, which helps where components are delicate or the closing load is limited.',
    points: ['Hollow elastomeric core', 'Lower contact force', 'Easier compression under suitable conditions', 'Useful for selected delicate equipment', 'Needs its own groove and compression design'],
  },
];

export const configNote =
  'A hollow-core ring is not a drop-in replacement for a solid-core one. Its load-deflection behaviour, dimensional requirements and sealing performance are evaluated separately, every time.';

// 06 - temperature and pressure
export const tempRows = [
  ['FEP + silicone core', '−60°C to +205°C'],
  ['FEP + FKM core', '−20°C to +204°C'],
];

export const tempNote =
  'Silicone cores suit applications needing more low-temperature flexibility. FKM cores suit work where the selected fluoroelastomer gives the required compression-set and chemical characteristics. Neither limit is a guarantee of continuous performance under every chemical and pressure condition.';

export const pressureFactors = [
  'O-Ring cross-section',
  'Core material and construction',
  'FEP jacket thickness',
  'Groove geometry',
  'Extrusion clearance',
  'Temperature',
  'Fluid compatibility',
  'Static or dynamic operating conditions',
];

export const pressureNote =
  'Up to 1,500 psi is a typical application reference, not a rating. For a high-pressure application the complete sealing assembly is evaluated for extrusion, deformation and long-term sealing performance before any figure is confirmed.';

// 07 - applications
export const applications = [
  {
    key: 'pharma',
    icon: 'pharma',
    title: 'Pharmaceutical manufacturing',
    photo: 'pharma',
    text: 'Pharmaceutical equipment needs controlled sealing conditions to support process hygiene and limit unwanted contamination.',
    items: ['Pharmaceutical processing equipment', 'Chemical dosing systems', 'Process pumps and valves', 'Clean-in-Place systems', 'Sterilisation equipment'],
  },
  {
    key: 'chemical',
    icon: 'flask',
    title: 'Chemical processing',
    photo: 'process',
    text: 'Chemical plants expose seals to aggressive fluids, acids, solvents and cleaning chemicals. FEP encapsulation gives a protective outer surface for compatible media.',
    items: ['Chemical transfer pumps', 'Dosing and metering equipment', 'Chemical storage systems', 'Process valves', 'Industrial mixing equipment'],
  },
  {
    key: 'food',
    icon: 'food',
    title: 'Food and beverage',
    photo: null,
    text: 'Food manufacturing involves cleaning agents, process fluids and repeated cleaning cycles. Suitability depends on the complete seal construction meeting the applicable food-contact requirements.',
    items: ['Beverage filling equipment', 'Food-processing machinery', 'Liquid transfer systems', 'Processing valves', 'CIP installations'],
  },
  {
    key: 'oilgas',
    icon: 'rig',
    title: 'Oil and gas',
    photo: null,
    text: 'Processing systems need seals that handle demanding fluids and conditions. FKM-core configurations are the usual starting point for compatible hydrocarbon and petrochemical environments.',
    items: ['Process valves', 'Chemical injection systems', 'Petrochemical equipment', 'Fluid-handling assemblies', 'Refinery process systems'],
  },
  {
    key: 'biotech',
    icon: 'lab',
    title: 'Biotechnology and life sciences',
    photo: null,
    text: 'High-purity process equipment needs carefully selected sealing materials to support cleanliness and process compatibility.',
    items: ['Bioprocess equipment', 'Laboratory systems', 'Fluid transfer assemblies', 'Process instrumentation', 'Specialised dosing systems'],
  },
  {
    key: 'pumps',
    icon: 'valve',
    title: 'Industrial pumps and valves',
    photo: null,
    text: 'A chemical-resistant sealing interface in suitable static and selected low-movement applications.',
    items: ['Pump housings', 'Valve assemblies', 'Chemical metering equipment', 'Process connections', 'Industrial fluid systems'],
  },
];

export const applicationsNote =
  'These are application areas, not approvals. Pharmaceutical and food-contact work needs the complete seal construction verified against the relevant FDA, USP or food-contact requirements before any compliance claim is made.';

// 08 - chemical compatibility
export const chemIntro =
  'Chemical compatibility is the main reason industries choose FEP encapsulated O-Rings. The jacket resists many aggressive chemicals and the core supplies the mechanical elasticity. But chemical resistance is never universal compatibility: some substances permeate the jacket over time and reach the elastomer inside.';

export const chemFactors = [
  'Chemical name and concentration',
  'Operating temperature',
  'Exposure duration',
  'Working pressure',
  'Chemical mixture composition',
  'Core material',
  'Jacket thickness',
  'Cleaning and sterilisation procedures',
];

export const chemNote =
  'Before choosing an encapsulated O-Ring for a critical application, verify compatibility with both the outer FEP jacket and the internal elastomeric core. For aggressive chemicals, long exposure or elevated temperatures, send us the details for an application-specific evaluation.';

// 09 - installation
export const installSteps = [
  { number: '01', title: 'Inspect the sealing groove', text: 'Check the groove for scratches, burrs, sharp edges, contamination and dimensional irregularities.' },
  { number: '02', title: 'Inspect the O-Ring', text: 'Check the FEP jacket for cuts, punctures, wrinkles or other visible damage before you fit it.' },
  { number: '03', title: 'Use the correct method', text: 'Avoid excessive stretching, twisting, or pulling the O-Ring across sharp edges. The jacket is tougher than rubber but less forgiving.' },
  { number: '04', title: 'Ensure correct alignment', text: 'Position the seal carefully within the designated groove without twisting or trapping the jacket.' },
  { number: '05', title: 'Assemble carefully', text: 'Avoid excessive compression and confirm the groove dimensions suit the encapsulated seal, which is not the same as a plain O-Ring groove.' },
  { number: '06', title: 'Verify sealing performance', text: 'After installation, run the appropriate system leak test according to the equipment manufacturer’s procedure.' },
];

export const maintenance = [
  'Inspect seals during planned maintenance',
  'Replace visibly damaged or permanently deformed seals',
  'Check groove and mating-surface conditions',
  'Review the chemical and temperature operating history',
  'Follow the equipment manufacturer’s recommended replacement intervals',
];

export const installWarning =
  'The FEP jacket can be damaged by rough handling, sharp edges or excessive deformation. Most encapsulated O-Ring failures start at installation, not in service.';

// 10 - quality
export const qualityParams = [
  { title: 'Material verification', text: 'Confirm the correct FEP jacket and elastomeric core materials.' },
  { title: 'Dimensional inspection', text: 'Check the inner diameter, outer diameter and cross-sectional dimensions.' },
  { title: 'Jacket integrity', text: 'Inspect the FEP surface for visible cuts, cracks, wrinkles and discontinuities.' },
  { title: 'Core consistency', text: 'Verify the intended core configuration and material identification.' },
  { title: 'Hardness testing', text: 'Where specified, check the core hardness against the approved material specification.' },
  { title: 'Compression behaviour', text: 'Evaluate compression and recovery against the required design specification.' },
];

export const qualityChecklist = [
  'Incoming material identification',
  'Core material verification',
  'FEP jacket inspection',
  'Dimensional verification',
  'Surface finish examination',
  'Cross-section inspection',
  'Compression and recovery evaluation',
  'Application-specific testing',
  'Final inspection',
  'Batch identification and traceability',
];

export const qualityNote =
  'Mithson holds ISO 9001:2015 and is QIMA audited. Inspection results and any further compliance claim are issued only where Mithson’s own manufacturing and quality records support them.';

// 11 - custom work
export const customOptions = [
  'Custom inner diameters',
  'Different cross-sectional dimensions',
  'Silicone and FKM core configurations',
  'Solid and hollow core options, where available',
  'Application-specific FEP jacket construction',
  'Custom sealing dimensions',
  'Specialised industrial configurations',
  'Drawing-based product development',
];

export const customAsks = [
  'Required inner diameter',
  'Required cross-sectional diameter',
  'Core material preference',
  'Operating temperature',
  'Operating pressure',
  'Chemical or process-fluid details',
  'Static or dynamic operating conditions',
  'Groove dimensions',
  'Equipment type',
  'Required quantity',
  'Engineering drawing or reference sample',
];

// 12 - why Mithson
export const whyMithson = [
  { icon: 'layers', title: 'Dual-component construction', text: 'A chemical-resistant fluoropolymer jacket combined with an elastic inner core.' },
  { icon: 'flask', title: 'Flexible material selection', text: 'Silicone or FKM core, chosen against your application rather than from a catalogue.' },
  { icon: 'thermo', title: 'Wide temperature capability', text: 'Two different ranges depending on which core you need.' },
  { icon: 'shield', title: 'Chemical-resistant protection', text: 'The FEP jacket resists many aggressive industrial chemicals.' },
  { icon: 'slide', title: 'Low-friction surface', text: 'The smooth outer surface supports easier installation and reduced adhesion.' },
  { icon: 'drawing', title: 'Custom engineering', text: 'Dimensions and configurations worked out from your drawings and requirements.' },
];

// 13 - FAQ
export const faqs = [
  { q: 'What is an FEP encapsulated O-Ring?', a: 'A dual-component sealing ring: an elastomeric core surrounded by a seamless FEP fluoropolymer jacket.' },
  { q: 'What is the main advantage?', a: 'It combines the chemical-resistant surface of a fluoropolymer with the elasticity of an elastomeric core.' },
  { q: 'What is the difference between FEP and PTFE?', a: 'Both are fluoropolymers with excellent chemical resistance. FEP is melt-processable and can be formed into seamless encapsulating jackets, while PTFE has different processing characteristics and generally higher continuous-temperature capability.' },
  { q: 'What core materials are available?', a: 'The two configurations shown on this page are silicone (VMQ) and FKM (Viton).' },
  { q: 'What is the temperature range of a silicone core?', a: 'The listed application range is −60°C to +205°C, subject to the specific compound and operating conditions.' },
  { q: 'What is the temperature range of an FKM core?', a: 'The listed application range is −20°C to +204°C, subject to the specific compound and operating conditions.' },
  { q: 'Can encapsulated O-Rings handle aggressive chemicals?', a: 'The FEP jacket resists many aggressive chemicals. Compatibility still has to be checked against the exact chemical, concentration, temperature, exposure duration and the possibility of permeation.' },
  { q: 'Can they be used in pharmaceutical applications?', a: 'They can suit selected pharmaceutical applications. The complete seal construction must be verified against the relevant FDA, USP or other applicable requirements before any compliance claim is made.' },
  { q: 'Can they be used in food-processing equipment?', a: 'They may suit compatible food-processing applications where the complete product has the necessary food-contact compliance documentation.' },
  { q: 'What is the difference between silicone and FKM cores?', a: 'Silicone is particularly useful where low-temperature flexibility is required. FKM is commonly selected for its compression-set and chemical characteristics in compatible industrial environments.' },
  { q: 'Are they suitable for dynamic applications?', a: 'They are primarily static seals, and may suit selected light-duty dynamic applications. High-speed reciprocating or rotary service needs careful evaluation because of the jacket’s friction, flexibility and wear limits.' },
  { q: 'Can Mithson manufacture custom sizes?', a: 'Custom dimensions and configurations can be discussed from engineering drawings, reference samples and application requirements.' },
  { q: 'What is the typical pressure capacity?', a: 'Up to 1,500 psi is shown as a typical reference. The permissible pressure has to be validated against your actual dimensions, groove, temperature, fluid and extrusion clearance.' },
  { q: 'How do I choose the right encapsulated O-Ring?', a: 'Consider the chemical medium, operating temperature, pressure, seal dimensions, core material, groove design and whether the application is static or dynamic.' },
];

export const closing = [
  'Ready to specify encapsulated O-Rings?',
  'Looking for dependable sealing for aggressive chemicals, high-purity processing or demanding industrial environments? Share your application, material requirements, operating conditions and dimensions with our engineering team. Whether you need a silicone core or an FKM core, we can help you evaluate a suitable configuration.',
];

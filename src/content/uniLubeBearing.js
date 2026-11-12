// UNI-LUBE Bearing page copy, from the approved text supplied by the user (November 2026).
// The text sets hard rules that are followed here:
//   - the five family names are kept exactly, and MSS-MF is never confused with MSS-MP;
//   - dry-running, pre-lubricated and oil/grease-lubricated constructions are distinguished;
//   - the -40°C to +300°C figure belongs to MSS-MB only and is badged as Mithson's own;
//   - no universal pressure, load or speed rating, and no invented PV limits or alloy grades.
// Temperature and load figures come from src/content/productItems.js.

export const ulHero = {
  label: 'Self-lubricating bearings',
  title: 'UNI-LUBE Bearing.',
  titleAccent: 'Less friction.',
  titleRest: 'Less lubrication.',
  lead:
    'Mithson UNI-LUBE is a family of self-lubricating and pre-lubricated bearing solutions developed for industrial applications involving sliding, rotational and oscillating motion. They reduce friction between moving mechanical components and help support reliable equipment operation while reducing dependence on frequent conventional lubrication.',
  lead2:
    'The family includes metal-polymer composite bearings, pre-lubricated bearings, bi-metal bushings, solid-lubricant embedded metal bushes and thermoplastic bushings.',
};

export const heroTags = [
  'Self-lubricating technologies',
  'Reduced friction and wear',
  'High-load options',
  'Rotational and oscillating movement',
  'Pre-lubricated and dry-running',
  'Standard and custom sizes',
];

export const heroChips = [
  { icon: 'layers', title: '5 families', text: 'MF, MP, BIM, MB and MITHLON' },
  { icon: 'rotate', title: 'Rotary & oscillating', text: 'Including start-stop duty' },
  { icon: 'drop', title: '4 lubrication types', text: 'Dry, pre-lubed, oil/grease, solid' },
  { icon: 'drawing', title: 'Made to drawing', text: 'Subject to availability' },
];

export const basicsIntro =
  'A bearing supports relative movement between two parts while reducing friction and controlling wear. In conventional arrangements, grease or oil maintains a lubricating film between the moving surfaces.';

export const basicsBody =
  'Self-lubricating bearings instead use specialised materials, lubricant-retaining structures or embedded solid lubricants to reduce friction and support sliding movement without continuous external lubrication in suitable operating conditions. Depending on construction they may use PTFE-based composite layers, porous bronze, lubricant-retaining pockets, graphite inserts or engineered thermoplastics.';

export const basicsNote =
  'Performance depends on the bearing design, applied load, sliding speed, temperature, shaft finish, operating environment and lubrication conditions.';

export const basicsPoints = [
  'Reduced friction between mating surfaces',
  'Reduced dependence on frequent lubrication',
  'Options for dry-running applications',
  'Support for rotational and oscillating movement',
  'Wear-resistant material configurations',
  'Reduced maintenance requirements in suitable applications',
  'Application-specific bearing constructions',
];

// The five families. `spec` keys match src/content/productItems.js; `photo` is the existing
// Mithson product image, `detail` one of the added construction photographs.
export const families = [
  {
    key: 'mf',
    number: '01',
    name: 'MSS-MF Self Lube',
    subtitle: 'Metal-polymer self-lubricating bearings',
    spec: 'MSS-MF Self Lube (MSS-DU Bush)',
    photo: 'mf',
    detail: 'mf-polymer',
    lube: 'Self-lubricating sliding layer',
    text: 'A metal-polymer self-lubricating bearing for applications requiring low-friction movement and reduced dependence on conventional lubrication. Its composite construction combines a metallic supporting structure with a specialised low-friction bearing layer.',
    note: 'The material combination supports stable sliding performance, wear resistance and dimensional reliability under suitable operating conditions.',
    points: [
      'Dry-lubrication capability in suitable applications',
      'Low-friction bearing surface',
      'Reduced maintenance requirements',
      'Low vibration and noise characteristics',
      'Wear resistance in suitable high-load, low-speed conditions',
      'Good dimensional stability',
      'Heat-transfer characteristics influenced by the composite construction',
    ],
    uses: 'Industrial machinery, hydraulic equipment, construction machinery, material-handling equipment, mechanical sliding systems and oscillating bearing arrangements.',
  },
  {
    key: 'mp',
    number: '02',
    name: 'MSS-MP Pre Lube',
    subtitle: 'Pre-lubricated metal-polymer bearings',
    spec: 'MSS-MP Pre Lube',
    photo: 'mp',
    detail: 'mp-pockets',
    lube: 'Lubricant-retaining structure',
    text: 'For applications involving low-speed movement, relatively high loads and intermittent operation. A lubricant-retaining structure keeps a small quantity of lubricant available within the bearing material, helping maintain lubrication over extended periods under suitable boundary-lubrication conditions.',
    note: 'MSS-MP is pre-lubricated, not universally oil-free. It carries an initial lubricant supply released during operation, where MSS-MF relies on its low-friction polymer layer.',
    points: [
      'Lubricant-retaining material structure',
      'Suitable for selected boundary-lubrication conditions',
      'High-load and low-speed capability, subject to rating',
      'Suitable for intermittent operation',
      'Rotational and oscillating movement',
      'Good damping behaviour',
      'Resistance to shock loading in suitable configurations',
    ],
    uses: 'Industrial machinery, agricultural equipment, construction equipment, material-handling systems, hydraulic equipment and mechanical pivot assemblies.',
  },
  {
    key: 'bim',
    number: '03',
    name: 'MSS-BIM Bi-Metal',
    subtitle: 'High-strength bearings for heavy-load applications',
    spec: 'MSS-BIM Bi-Metal',
    photo: 'bim',
    detail: 'bim-layers',
    lube: 'Oil or grease, as specified',
    text: 'A strong steel supporting structure with a specialised bronze-based bearing layer. The steel backing provides mechanical strength and rigidity, while the bearing layer provides the sliding characteristics. Bearing layers may include lead-bronze, lead-free bronze or lead-free bronze containing solid lubricants.',
    note: 'This family is recommended for lubricated operating conditions where specified. Not every MSS-BIM configuration is a dry-running bearing.',
    points: [
      'Strong steel backing',
      'High mechanical strength',
      'Good fatigue resistance',
      'Wear-resistant bearing layer',
      'Suitable for shock-load applications',
      'Good performance under oscillating movement',
      'Material configurations available for lubricated applications',
    ],
    uses: 'Textile machinery, pneumatic equipment, kingpin bushes, brake caliper bushes, mechanical handling equipment, lifting equipment and hydraulic cylinders.',
  },
  {
    key: 'mb',
    number: '04',
    name: 'MSS-MB Solid Bush',
    subtitle: 'Thick-wall single-metal bearings with embedded solid lubricants',
    spec: 'MSS-MB Solid Bush',
    photo: 'mb',
    detail: 'mb-graphite',
    lube: 'Embedded solid lubricant, such as graphite',
    text: 'For demanding applications with heavy mechanical loads, low-speed movement and reduced lubrication requirements. A metallic body incorporates solid lubricants such as graphite: the metal provides support and impact resistance, while the embedded lubricant reduces friction against the mating shaft.',
    note: 'The published application temperature range of -40°C to +300°C belongs to this family only. Actual operating limits depend on material grade, load, movement and operating conditions.',
    points: [
      'Thick-wall single-metal construction',
      'Embedded solid lubricants',
      'Low-friction sliding characteristics',
      'Suitable for high-load and low-speed applications',
      'Rotational and oscillating movement',
      'Suitable for frequent start-stop conditions',
      'Wear resistance',
      'Reduced external lubrication requirements',
    ],
    uses: 'Water, steam and gas turbines, iron foundries, steel and aluminium industries, industrial furnaces, blowers, pumps and compressors, sewage treatment, hot rolling mills, packaging, agricultural machinery and construction equipment.',
  },
  {
    key: 'mithlon',
    number: '05',
    name: 'MSS-MITHLON',
    subtitle: 'Engineering thermoplastic bushings',
    spec: 'MSS-MITHLON',
    photo: 'mithlon',
    detail: null,
    lube: 'Material-dependent self-lubricating behaviour',
    text: 'A thermoplastic bearing solution for applications where moisture exposure, low-friction movement and reduced maintenance matter. Thermoplastic bearing materials offer an alternative to conventional metal bushings in selected applications, including wet environments and underwater equipment where routine lubrication is difficult.',
    note: 'Not every thermoplastic grade suits every underwater, chemical or temperature condition. Material compatibility must be evaluated.',
    points: [
      'Thermoplastic bearing construction',
      'Low-friction characteristics',
      'Moisture-exposed application potential',
      'Suitable for selected underwater applications',
      'Reduced maintenance requirements in suitable installations',
      'Standard and custom size options, subject to availability',
    ],
    uses: 'Marine equipment, underwater machinery, industrial pumps, water-handling equipment, moisture-exposed mechanical systems and selected corrosion-sensitive applications.',
  },
];

export const comparison = [
  ['MSS-MF', 'Metal-polymer composite', 'Self-lubricating sliding layer', 'Low-friction applications and selected high-load, low-speed conditions', 'Industrial machinery and mechanical sliding systems'],
  ['MSS-MP', 'Pre-lubricated metal-polymer', 'Lubricant-retaining material structure', 'Intermittent and boundary-lubrication conditions', 'Low-speed machinery, oscillating systems and start-stop equipment'],
  ['MSS-BIM', 'Steel-backed bronze', 'Oil or grease lubrication as specified', 'Heavy mechanical loads and shock loading', 'Kingpin bushes, hydraulic cylinders and lifting equipment'],
  ['MSS-MB', 'Metallic with embedded solid lubricants', 'Graphite or other approved solid lubricants', 'High-load, low-speed and selected dry-running applications', 'Turbines, pumps, rolling mills and heavy industrial equipment'],
  ['MSS-MITHLON', 'Thermoplastic', 'Material-dependent self-lubricating behaviour', 'Selected wet and underwater environments', 'Marine and pump applications'],
];

export const comparisonNote =
  'The five families use different material constructions and lubrication mechanisms. They are not interchangeable. Correct selection requires consideration of load, speed, temperature, lubrication, shaft material and environmental conditions.';

export const workingIntro =
  "Self-lubricating plain bearings support movement by reducing friction between a shaft and the bearing's sliding surface. Depending on the construction, lubrication comes from a low-friction polymer layer, retained lubricant or embedded solid lubricant.";

export const workingStages = [
  { key: 'contact', label: 'Initial contact', name: 'Initial contact', text: 'The shaft is positioned within the bearing bore. The bearing supports the shaft while maintaining the required clearance and contact conditions.' },
  { key: 'movement', label: 'Movement', name: 'Movement', text: 'As the shaft rotates or oscillates, relative movement takes place at the bearing interface. The selected bearing material provides the intended low-friction characteristics.' },
  { key: 'lubrication', label: 'Lubrication', name: 'Lubrication support', text: 'Depending on the bearing type, lubrication is supplied by the polymer sliding layer, by retained oil, or by embedded solid lubricant carried to the shaft surface.' },
  { key: 'running', label: 'Continuous', name: 'Continuous operation', text: "The bearing supports repeated movement under its specified operating conditions. Wear, temperature and lubrication must be monitored according to the application and the manufacturer's recommendations." },
];

export const constructions = [
  { key: 'mf-polymer', title: 'Metal-polymer composites', text: 'A metallic backing carries the load while a bonded low-friction polymer or composite layer forms the sliding surface against the shaft.' },
  { key: 'mp-detail', title: 'Pre-lubricated composites', text: 'Pockets formed in the sliding surface hold a reserve of lubricant, which is released into the interface during operation and drawn back as the bearing cools.' },
  { key: 'bim-layers', title: 'Steel-backed bronze', text: 'A steel backing provides strength and rigidity; the bronze bearing layer provides the sliding characteristics and takes the wear.' },
  { key: 'mb-split', title: 'Graphite-embedded metal', text: 'Solid lubricant plugs set into the metal body transfer a lubricating film to the shaft as it moves, so the bearing does not rely on liquid lubrication alone.' },
  { key: null, title: 'Engineering thermoplastics', text: 'Selected thermoplastics provide a low-friction bearing surface in moisture-exposed applications where routine lubrication is impractical.' },
];

export const constructionsNote =
  'These describe how each construction works. Exact alloy grades, polymer formulations and layer thicknesses are confirmed against the approved datasheet for the selected product.';

export const advantages = [
  { icon: 'slide', title: 'Reduced friction', text: 'Appropriate bearing materials help reduce friction between moving surfaces and support efficient mechanical movement.' },
  { icon: 'drop', title: 'Lower lubrication requirements', text: 'Selected self-lubricating designs reduce the need for frequent conventional lubrication.' },
  { icon: 'shield', title: 'Wear resistance', text: 'Specialised bearing layers and solid-lubricant systems can improve wear behaviour under appropriate conditions.' },
  { icon: 'weight', title: 'High-load options', text: 'Different bearing families are available for selected heavy-load operating conditions.' },
  { icon: 'rotate', title: 'Oscillating movement', text: 'Suitable constructions support repeated angular movement and intermittent mechanical operation.' },
  { icon: 'impact', title: 'Shock-load resistance', text: 'Selected bi-metal and solid-metal constructions are designed for dynamic and impact loading.' },
  { icon: 'wave', title: 'Moisture-exposed applications', text: 'Selected thermoplastic bearing materials are suitable for evaluating wet and underwater environments.' },
  { icon: 'check', title: 'Maintenance optimisation', text: 'Appropriate bearing selection can reduce routine lubrication requirements and maintenance interruptions.' },
];

export const applications = [
  { icon: 'digger', title: 'Construction machinery', items: ['Excavators', 'Loaders', 'Backhoe equipment', 'Pivot joints', 'Boom and arm assemblies'], need: 'High mechanical loading, shock resistance, oscillating movement and wear resistance.' },
  { icon: 'hydraulic', title: 'Hydraulic equipment', items: ['Hydraulic cylinders', 'Piston and rod assemblies', 'Industrial actuators', 'Mechanical pivots'], need: 'Dimensional stability, sliding performance and resistance to operating loads.' },
  { icon: 'leaf', title: 'Agricultural machinery', items: ['Agricultural equipment', 'Mechanical linkages', 'Rotating and oscillating joints', 'Farm machinery'], need: 'Wear resistance, contamination management and reduced maintenance.' },
  { icon: 'wave', title: 'Marine industry', items: ['Marine pumps', 'Underwater equipment', 'Water-handling systems', 'Marine mechanical assemblies'], need: 'Moisture compatibility, corrosion resistance of the assembly and suitable material selection.' },
  { icon: 'compressor', title: 'Pumps and compressors', items: ['Pump assemblies', 'Compressor mechanisms', 'Shaft support systems', 'Rotating components'], need: 'Load capacity, operating speed, lubrication and temperature management.' },
  { icon: 'furnace', title: 'Steel and metal processing', items: ['Rolling mills', 'Steel production equipment', 'Aluminium processing', 'Industrial furnaces'], need: 'Mechanical loading, temperature exposure, wear and lubrication suitability.' },
  { icon: 'layers', title: 'Textile and packaging', items: ['Textile machinery', 'Packaging equipment', 'Repetitive motion assemblies', 'Mechanical guides'], need: 'Consistent movement, reduced vibration and wear control.' },
  { icon: 'turbine', title: 'Power generation', items: ['Water turbines', 'Steam turbines', 'Gas turbines', 'Blowers and auxiliary equipment'], need: 'Load, speed, temperature, lubrication and equipment-specific engineering validation.' },
];

export const applicationsNote =
  'These are application areas, not blanket product approvals. The most appropriate bearing family is identified only after reviewing the operating conditions.';

export const specIntro =
  'Bearing performance depends on the interaction between mechanical load, sliding velocity, temperature, material construction and lubrication conditions. Selection must consider the complete bearing system, not one isolated parameter.';

const ASK = 'Confirm with Technical Team';

export const specParameters = [
  ['Bearing family', 'One of the five UNI-LUBE families'],
  ['Product code', ASK],
  ['Bearing construction', 'Stated per family above'],
  ['Inner diameter', ASK],
  ['Outer diameter', ASK],
  ['Length', ASK],
  ['Wall thickness', ASK],
  ['Material grade', ASK],
  ['Bearing layer', 'Stated per family above'],
  ['Shaft material', 'Stated by the customer'],
  ['Shaft hardness', ASK],
  ['Shaft surface finish', ASK],
  ['Radial clearance', ASK],
  ['Maximum static load', ASK],
  ['Maximum dynamic load', ASK],
  ['Sliding speed', ASK],
  ['Pressure-velocity (PV) limit', ASK],
  ['Operating temperature', 'Published for MSS-MB; others confirmed per material'],
  ['Lubrication requirement', 'Stated per family above'],
  ['Movement type', 'Stated by the customer'],
  ['Environmental compatibility', ASK],
  ['Dimensional tolerance', ASK],
];

export const pvExplainer = {
  formula: 'PV = bearing pressure × sliding velocity',
  lines: [
    'Bearing pressure = applied load ÷ projected bearing area',
    'For a cylindrical plain bearing, projected area = shaft diameter × bearing length',
    'Use consistent units throughout the calculation',
  ],
  note:
    'The permissible PV limit depends on the exact bearing material, construction, lubrication and operating conditions, so no numerical limit is published here. The selection parameters are bearing pressure, sliding velocity, PV value, static load capacity, dynamic load capacity, shaft contact area, operating temperature and lubrication condition.',
};

export const selectionSteps = [
  { title: 'Applied load', text: 'Identify the radial load, axial load, static load, dynamic load and any impact loading.' },
  { title: 'Operating speed', text: 'Determine rotational speed, sliding velocity and expected movement frequency.' },
  { title: 'Movement type', text: 'Continuous rotation, oscillating movement, linear sliding, intermittent movement or frequent start-stop cycles.' },
  { title: 'Operating temperature', text: 'Determine minimum, normal and maximum operating temperatures.' },
  { title: 'Lubrication requirement', text: 'Dry-running, pre-lubricated, oil, grease or embedded solid lubrication.' },
  { title: 'Environment', text: 'Evaluate moisture, dust, dirt, corrosion exposure and possible chemical contact.' },
  { title: 'Dimensional requirements', text: 'Shaft diameter, bearing bore, outer diameter, length, wall thickness and installation clearance.' },
  { title: 'Shaft condition', text: 'Review shaft material, hardness, surface finish and alignment.' },
];

export const maintenance = [
  { icon: 'drawing', title: 'Dimensional verification', text: 'Check the shaft diameter, bearing bore, outside diameter and required clearances before installation.' },
  { icon: 'slide', title: 'Shaft surface condition', text: 'Verify shaft hardness, surface finish and alignment according to the selected bearing specification.' },
  { icon: 'check', title: 'Proper installation', text: 'Use the approved installation method and appropriate tools to prevent damage to the bearing surface.' },
  { icon: 'drop', title: 'Lubrication requirements', text: 'Follow the lubrication instructions for the selected family. Pre-lubricated, bi-metal and solid-lubricant bearings do not have identical requirements.' },
  { icon: 'gauge', title: 'Operating monitoring', text: 'Monitor abnormal noise, vibration, temperature, friction and wear.' },
  { icon: 'lab', title: 'Periodic inspection', text: 'Inspect bearing surfaces, shaft condition and dimensional wear according to the equipment maintenance schedule.' },
];

export const customStages = [
  { title: 'Application review', text: 'Understand the machinery, operating conditions and movement requirements.' },
  { title: 'Technical evaluation', text: 'Evaluate load, speed, temperature, PV limits and lubrication conditions.' },
  { title: 'Material selection', text: 'Identify suitable metal-polymer, pre-lubricated, bi-metal, solid-lubricant or thermoplastic constructions.' },
  { title: 'Dimensional engineering', text: 'Review the bore diameter, outside diameter, length, clearances and approved drawings.' },
  { title: 'Quality verification', text: 'Evaluate dimensional conformity and product requirements using approved inspection procedures.' },
];

export const troubleshooting = [
  { title: 'Excessive bearing wear', causes: ['Excessive contact pressure', 'High sliding velocity', 'Incorrect material selection', 'Contaminated sliding surfaces'] },
  { title: 'Overheating', causes: ['Excessive PV conditions', 'Inadequate lubrication', 'Incorrect clearance', 'Excessive friction'] },
  { title: 'Abnormal noise', causes: ['Shaft misalignment', 'Surface damage', 'Excessive clearance', 'Contamination'] },
  { title: 'Premature failure', causes: ['Shock loading', 'Incorrect installation', 'Incompatible operating conditions', 'Material mismatch'] },
  { title: 'Shaft damage', causes: ['Unsuitable shaft hardness', 'Poor surface finish', 'Abrasive contamination', 'Incorrect bearing pairing'] },
  { title: 'Lubrication failure', causes: ['Insufficient lubricant', 'Incorrect lubricant', 'Lubricant degradation', "Conditions outside the material's capability"] },
];

export const troubleshootingNote =
  'This is general engineering guidance. The actual cause of a bearing failure must be established through inspection and application-specific analysis.';

export const documents = [
  'UNI-LUBE product catalogue',
  'MSS-MF technical datasheet',
  'MSS-MP technical datasheet',
  'MSS-BIM technical datasheet',
  'MSS-MB technical datasheet',
  'MSS-MITHLON technical datasheet',
  'Bearing installation guidelines',
  'Bearing material selection guide',
  'Dimensional drawings',
  'Quality documentation',
];

export const documentsNote =
  'These are issued after a technical review of your application, so there is nothing to download here. Tell us which you need and the engineering team will send the approved version.';

export const faqs = [
  { q: 'What is a self-lubricating bearing?', a: 'A bearing that uses specialised materials or embedded lubrication to reduce friction between moving surfaces without requiring continuous external lubrication in suitable applications.' },
  { q: 'What is the difference between a self-lubricating and a pre-lubricated bearing?', a: 'A self-lubricating bearing uses a low-friction material or embedded lubricant to support movement. A pre-lubricated bearing contains an initial lubricant supply retained within the bearing structure and released during operation.' },
  { q: 'What is the MSS-MF bearing used for?', a: 'MSS-MF is a metal-polymer self-lubricating family designed for suitable low-friction industrial applications, including selected high-load and low-speed conditions.' },
  { q: 'What makes MSS-MP different from MSS-MF?', a: 'MSS-MP uses a lubricant-retaining construction and is intended for suitable boundary-lubrication and intermittent operating conditions.' },
  { q: 'What is a bi-metal bearing?', a: 'A bearing combining a strong metallic backing with a separate bearing layer, commonly bronze-based, to support mechanical loads and sliding movement.' },
  { q: 'What is a solid-lubricant bearing?', a: 'A bearing incorporating materials such as graphite within a metallic structure to provide lubrication at the sliding interface.' },
  { q: 'What is MSS-MITHLON?', a: 'A thermoplastic bushing family identified by Mithson for selected moisture-exposed, underwater, pump and marine applications.' },
  { q: 'Can self-lubricating bearings operate without oil?', a: 'Certain designs are suitable for dry-running operation. Others require initial lubrication or continued oil or grease lubrication. The requirement depends on the bearing family.' },
  { q: 'Are self-lubricating bearings suitable for heavy loads?', a: 'Selected constructions are designed for high-load applications. The correct choice depends on static load, dynamic load, speed, PV limit and operating conditions.' },
  { q: 'What is the PV limit of a bearing?', a: 'PV is the product of bearing pressure and sliding velocity. It is an important engineering parameter used to evaluate frictional loading and heat generation in plain bearings.' },
  { q: 'How do I select the right bearing?', a: 'Selection requires shaft dimensions, bearing dimensions, load, speed, temperature, movement type, lubrication and environmental conditions.' },
  { q: 'Are custom bearing dimensions available?', a: 'Application-specific dimensions can be evaluated based on technical drawings and manufacturing capabilities.' },
  { q: 'How can I request a quotation?', a: "Provide the bearing family, required dimensions, quantity, application, operating conditions and available technical drawings through Mithson's enquiry channel." },
];

export const closing = [
  'Every industrial bearing application has unique mechanical and environmental requirements.',
  'Whether you require metal-polymer self-lubricating bearings, pre-lubricated bushings, bi-metal bearings, solid-lubricant bushes or thermoplastic components, Mithson can help evaluate suitable bearing solutions for your equipment.',
];

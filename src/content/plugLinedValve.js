// Plug & Lined Valve page copy, from the approved text supplied by the user (November 2026).
// The text sets hard rules that are followed here:
//   - the -290°C figure from the old page is impossible and is NOT published;
//   - the 150-800 PSI figure is NOT published as a Mithson rating;
//   - anything without an approved figure reads "Confirm with Technical Team";
//   - filler families are presented as options, not as stocked products.
// Temperature and pressure for individual products come from src/content/productItems.js.

export const plHero = {
  label: 'PTFE plug valve components',
  title: 'Plug & Lined — Valve.',
  titleAccent: 'Low friction.',
  titleRest: 'Chemical resistance.',
  lead:
    'Mithson Sealing Solutions manufactures precision-engineered PTFE plugs, sleeves and lining components designed for demanding industrial valve applications. Our polymer sealing solutions form an essential part of sleeved plug valve assemblies, providing a controlled sealing interface between the rotating plug and valve body.',
  lead2:
    'Engineered using Virgin PTFE, Chemically Modified PTFE and specialised reinforced polymer compounds, our components are designed to deliver low-friction operation, chemical compatibility, dimensional stability and dependable sealing performance.',
};

export const heroTags = [
  'Virgin PTFE',
  'Modified PTFE',
  'Carbon-filled PTFE',
  'Glass-filled PTFE',
  'Bronze-filled PTFE',
  'Custom polymer components',
];

export const heroChips = [
  { icon: 'layers', title: '4 components', text: 'Sleeve, plug, liner, lined disc' },
  { icon: 'flask', title: '6 PTFE families', text: 'Virgin, modified and reinforced' },
  { icon: 'rotate', title: 'Quarter turn', text: 'Rotary sealing interface' },
  { icon: 'drawing', title: 'Made to drawing', text: 'Custom geometry on approval' },
];

export const overviewIntro =
  'Plug valve sealing systems require carefully engineered polymer components to provide a controlled interface between the rotating plug and valve body.';

export const overviewPoints = [
  { icon: 'seal', title: 'The sleeve decides the behaviour', text: 'Its material characteristics, dimensions and contact geometry influence friction, sealing performance, operating torque and wear.' },
  { icon: 'flask', title: 'Material is chosen per application', text: 'Mithson offers different PTFE-based formulations and precision component configurations to address varying industrial requirements.' },
  { icon: 'valve', title: 'Three different parts', text: 'A plug, a sleeve and a liner are not interchangeable. Each has its own job inside the valve.' },
];

// The important distinction the copy insists on
export const partsDistinction = [
  { key: 'plug', name: 'The plug', text: 'The rotating closure element that controls fluid flow.' },
  { key: 'sleeve', name: 'The sleeve', text: 'The polymer interface between the plug and the body in a sleeved plug valve.' },
  { key: 'liner', name: 'The liner', text: 'A protective polymer lining used in compatible valve constructions.' },
];

// `spec` keys match src/content/productItems.js; `image` keys match the page's existing assets.
export const products = [
  {
    key: 'sleeve',
    number: '01',
    name: 'PTFE Plug Valve Sleeves',
    spec: 'PTFE Sleeved Plug',
    image: 'sleeve',
    text: 'Precision-engineered polymer components installed between the rotating plug and the valve body in compatible sleeved plug valve designs. The sleeve provides the sealing interface while accommodating plug movement between open and closed positions.',
    note: "PTFE's low coefficient of friction supports smooth rotational movement and helps reduce the need for traditional lubricants in suitable valve designs.",
    points: [
      'Self-lubricating material characteristics',
      'Low-friction interface',
      'Chemical compatibility',
      'Precision internal and external geometry',
      'Application-specific dimensional stability',
      'Suitable configurations for bidirectional sealing',
      'Reduced maintenance requirements in suitable designs',
    ],
    uses: 'Sleeved plug valves, chemical processing plants, petrochemical systems, industrial fluid handling and corrosive media handling.',
  },
  {
    key: 'plug',
    number: '02',
    name: 'PTFE Plug Components',
    spec: 'PTFE Round Plug',
    image: 'plug',
    text: 'Polymer-based components used in compatible plug valve designs to provide the required closure or sealing interface. Depending on the valve construction, the plug may be manufactured from a polymer material or incorporate a polymer sealing surface.',
    points: [
      'Low-friction polymer surface',
      'Broad chemical resistance depending on grade',
      'Application-specific geometry',
      'Precision-machined profiles',
      'Reduced lubrication requirements in suitable configurations',
      'Custom dimensional requirements',
    ],
    uses: 'Industrial plug valve assemblies, chemical processing equipment, corrosive fluid-handling systems and specialised flow-control equipment.',
  },
  {
    key: 'liner',
    number: '03',
    name: 'PTFE Valve Liners',
    spec: 'PTFE Lined Plug',
    image: 'liner',
    text: 'A polymer lining within compatible valve assemblies. The liner creates a chemically compatible process-contact surface between the fluid medium and the supporting valve structure, helping reduce direct exposure of the supporting component to aggressive process media.',
    points: [
      'Chemical-resistant polymer contact surface',
      'Low-friction characteristics',
      'Application-specific liner geometry',
      'Controlled lining thickness',
      'Precision-engineered dimensions',
      'Compatibility with appropriate valve constructions',
    ],
    uses: 'PTFE-lined plug valves, chemical-processing equipment, corrosive fluid systems and specialised industrial process equipment.',
  },
  {
    key: 'disc',
    number: '04',
    name: 'PFA Lined Disc',
    spec: 'PFA Lined Disc',
    image: 'disc',
    text: 'A butterfly valve disc covered in PFA, so the process medium meets the lining rather than the metal underneath.',
    points: [
      'Fluoropolymer process-contact surface',
      'Metal core carries the mechanical load',
      'Application-specific disc geometry',
      'Controlled lining thickness',
    ],
    uses: 'Lined butterfly valves and compatible corrosive-service flow-control equipment.',
  },
];

export const materials = [
  {
    key: 'virgin',
    name: 'Virgin PTFE',
    short: 'Polytetrafluoroethylene',
    text: 'A high-performance fluoropolymer known for its low coefficient of friction, broad chemical resistance and non-stick characteristics. Commonly selected where chemical compatibility and low-friction operation are important.',
    points: ['Broad chemical resistance', 'Very low friction', 'Non-stick surface', 'Excellent electrical insulation', 'Good thermal stability', 'Useful cryogenic characteristics', 'High-purity options'],
    watch: 'Relatively limited resistance to creep and cold flow under sustained mechanical loading compared with many reinforced grades. Component geometry, mechanical support and operating conditions must be considered.',
  },
  {
    key: 'modified',
    name: 'Chemically Modified PTFE',
    short: 'Modified grades',
    text: 'Developed to improve selected characteristics of conventional PTFE. Depending on the formulation it may provide improved resistance to deformation, reduced permeation and better sealing behaviour under sustained loading.',
    points: ['Improved deformation resistance in suitable grades', 'Better dimensional behaviour', 'Enhanced sealing characteristics', 'Retains many PTFE chemical-resistance characteristics'],
    watch: 'Properties depend on the modification and the grade.',
  },
  {
    key: 'carbon',
    name: 'Carbon-Filled PTFE',
    short: 'Carbon reinforcement',
    text: 'Carbon-based fillers within a PTFE matrix. The addition of carbon can modify mechanical behaviour, improve wear characteristics and increase thermal conductivity.',
    points: ['Improved creep resistance in suitable compounds', 'Modified compressive strength', 'Improved wear properties', 'Increased thermal conductivity', 'Electrical conductivity depending on formulation'],
    watch: 'Chemical compatibility depends on the compound and the media.',
  },
  {
    key: 'glass',
    name: 'Glass-Filled PTFE',
    short: 'Glass-fibre reinforcement',
    text: 'Glass-fibre reinforcement to improve selected mechanical and wear-related properties. Commonly used to reduce creep and improve compressive strength.',
    points: ['Improved compressive strength', 'Better creep resistance', 'Improved wear resistance in suitable formulations', 'Enhanced dimensional stability under load'],
    watch: 'Can be more abrasive against certain mating surfaces, and may be unsuitable for some chemical environments, particularly strong bases or hydrofluoric acid.',
  },
  {
    key: 'bronze',
    name: 'Bronze-Filled PTFE',
    short: 'Bronze reinforcement',
    text: 'PTFE combined with bronze particles to modify mechanical and tribological performance. Bronze reinforcement can improve deformation resistance and load-bearing characteristics in suitable formulations.',
    points: ['Reduced deformation under load', 'Improved extrusion resistance in suitable designs', 'Increased thermal conductivity', 'Modified compressive behaviour'],
    watch: 'Not appropriate for every chemical environment. Bronze compatibility must be checked against the process medium.',
  },
  {
    key: 'special',
    name: 'Specialised Reinforced PTFE',
    short: 'Selected filler families',
    text: 'Formulations using selected fillers, or combinations of them, to modify material performance for particular industrial applications. Filler families include carbon, glass fibre, graphite, bronze and molybdenum disulfide.',
    points: ['Application-specific mechanical performance', 'Modified wear resistance', 'Formulation-dependent friction', 'Custom material configurations'],
    watch: 'These are material families and options, subject to actual manufacturing availability. Not every filler combination is a Mithson standard product.',
  },
];

export const comparison = [
  ['Virgin PTFE', 'Low friction and broad chemical resistance', 'Excellent chemical compatibility for many applications', 'Limited resistance to sustained mechanical deformation'],
  ['Modified PTFE', 'Improved deformation resistance in suitable formulations', 'Better dimensional and sealing behaviour', 'Properties depend on the modification and grade'],
  ['Carbon-filled PTFE', 'Modified mechanical properties and wear behaviour', 'Useful in selected sliding applications', 'Chemical compatibility depends on the compound and media'],
  ['Glass-filled PTFE', 'Improved creep resistance and compressive strength', 'Useful for load-bearing polymer applications', 'Can be more abrasive to mating surfaces'],
  ['Bronze-filled PTFE', 'Improved deformation resistance and load-bearing behaviour', 'Useful in selected mechanical applications', 'Bronze may be attacked by certain chemicals'],
  ['Graphite-filled PTFE', 'Low-friction and wear-related benefits', 'Useful in selected sliding applications', 'Performance depends on filler concentration and formulation'],
];

export const comparisonNote =
  'No single PTFE formulation is ideal for every application. Material selection must consider pressure, temperature, media compatibility, mechanical loading, movement and mating-surface characteristics.';

export const workingIntro =
  'A sleeved plug valve is a quarter-turn flow-control valve that uses a rotating plug and polymer sleeve to regulate the passage of process media. The sleeve provides the sealing interface between the plug and valve body, and the plug rotates approximately 90 degrees between open and closed positions.';

export const stages = [
  {
    key: 'open',
    label: 'Open',
    name: 'Open position',
    text: 'The plug rotates so that its internal flow passage aligns with the pipeline inlet and outlet. Process media flows through the valve, and the polymer sleeve maintains the intended sealing interface around the plug.',
  },
  {
    key: 'rotate',
    label: 'Rotate',
    name: 'Rotational movement',
    text: 'The plug rotates within the sleeve. The low-friction properties of PTFE support smooth movement in suitable designs. The valve design and sleeve geometry influence the operating torque.',
  },
  {
    key: 'closed',
    label: 'Closed',
    name: 'Closed position',
    text: 'The plug rotates to block the pipeline flow path. The sealing interface between the plug and sleeve helps prevent the process medium from passing through the closed valve.',
  },
];

export const advantages = [
  { icon: 'slide', title: 'Self-lubricating interface', text: "PTFE's low-friction characteristics help reduce friction between compatible mating surfaces, supporting smoother plug rotation and reducing the requirement for traditional lubrication in suitable valve designs." },
  { icon: 'flask', title: 'Chemical resistance', text: 'PTFE offers broad resistance to many industrial chemicals, acids, solvents and corrosive media. Material compatibility must be verified against the exact chemical, concentration and operating temperature.' },
  { icon: 'arrows', title: 'Bidirectional sealing', text: 'Appropriately designed sleeved plug valve configurations can provide sealing in both upstream and downstream directions. The actual sealing capability depends on valve geometry, pressure conditions and validated testing.' },
  { icon: 'rotate', title: 'Low-torque operation', text: 'The low-friction polymer interface can help reduce the torque required for plug rotation. Actual torque depends on valve size, pressure differential, temperature, media, sleeve design and operating conditions.' },
  { icon: 'seal', title: 'Cavity-free design', text: 'A suitably engineered sleeved plug valve can minimise internal cavities in which process media may become trapped, which matters for contamination control, media retention and cleaning requirements.' },
  { icon: 'shield', title: 'Reduced maintenance', text: 'Suitable self-lubricating designs can operate without traditional plug lubrication. Maintenance requirements still depend on the complete valve design, service conditions and inspection schedule.' },
];

export const applications = [
  { icon: 'flask', title: 'Chemical processing', text: 'Compatible valve assemblies handling acids, alkalis, solvents and industrial process chemicals.', focus: 'Chemical compatibility, sealing integrity and polymer selection.' },
  { icon: 'rig', title: 'Petrochemical industry', text: 'Compatible fluid-control equipment throughout petrochemical processing facilities.', focus: 'Process-fluid compatibility and reliable valve operation.' },
  { icon: 'valve', title: 'Oil & Gas', text: 'Polymer components for suitable fluid-control and industrial valve applications.', focus: 'Operating pressure, temperature, media compatibility and equipment requirements.' },
  { icon: 'lab', title: 'Pharmaceutical industry', text: 'High-purity polymer materials may be suitable for compatible process applications.', focus: 'Material purity, process compatibility and cleaning requirements. No FDA or pharmaceutical compliance is claimed without material-specific documentation.' },
  { icon: 'layers', title: 'Fertiliser industry', text: 'Polymer sealing components for compatible chemical and process-fluid systems.', focus: 'Chemical resistance and material selection.' },
  { icon: 'compressor', title: 'Power and process', text: 'Polymer components for selected industrial fluid-handling and flow-control applications.', focus: 'Thermal conditions, mechanical performance and operational requirements.' },
];

export const specIntro =
  'The operating performance of a PTFE plug valve sleeve or liner depends on the selected polymer formulation, component geometry and complete valve construction.';

export const productInfo = [
  ['Product family', 'PTFE plugs, sleeves and liners'],
  ['Base material', 'Virgin PTFE'],
  ['Modified material', 'Chemically Modified PTFE'],
  ['Reinforced materials', 'Carbon-filled, glass-filled and bronze-filled PTFE'],
  ['Application', 'Compatible industrial plug valves'],
  ['Operating movement', 'Rotary'],
  ['Sealing function', 'Plug-to-sleeve sealing interface'],
  ['Material characteristics', 'Low friction and application-dependent chemical resistance'],
  ['Custom geometry', 'Subject to approved technical drawings and manufacturing capabilities'],
];

const ASK = 'Confirm with Technical Team';

export const dataFields = [
  ['Product name', 'PTFE plug, sleeve or liner — state which'],
  ['Product code', ASK],
  ['Material grade', 'Virgin, modified or reinforced PTFE — selected per application'],
  ['Valve type', 'Sleeved plug valve, lined plug valve or lined butterfly'],
  ['Operating temperature', ASK],
  ['Operating pressure', ASK],
  ['Pressure class', ASK],
  ['Fluid media', 'Stated by the customer for compatibility checking'],
  ['Inner diameter', ASK],
  ['Outer diameter', ASK],
  ['Component length', ASK],
  ['Sleeve thickness', ASK],
  ['Surface finish', ASK],
  ['Dimensional tolerance', ASK],
  ['Applicable standards', ASK],
  ['Available drawings', 'Supplied on request after technical review'],
];

export const temperatureNote =
  'Some PTFE sealing compounds are used from cryogenic conditions up to around 300°C, but that is an independent material reference, not a Mithson plug valve sleeve rating. The usable temperature of a complete valve assembly is often lower, because the body, plug, geometry, loading and sealing design all limit it. The minimum temperature shown on the older page was not physically possible and has been removed pending confirmation from Mithson.';

export const pressureNote =
  'The operating pressure of a plug valve is determined by the complete assembly, not by the PTFE sleeve alone: valve body pressure class, plug geometry, sleeve material and retention, pressure differential, temperature, media, extrusion gaps, mechanical loading and the applicable design and testing standards. No portfolio-wide pressure figure is published here.';

export const selectionSteps = [
  { title: 'Operating temperature', text: 'Identify minimum, normal and maximum operating temperatures. Consider thermal expansion, dimensional stability and material behaviour.' },
  { title: 'Operating pressure', text: 'Identify working pressure, maximum differential pressure and pressure cycles. Evaluate extrusion risk and mechanical support.' },
  { title: 'Fluid media', text: 'Identify the process medium, chemical concentration and possible cleaning agents. Check material compatibility before selection.' },
  { title: 'Material formulation', text: 'Evaluate whether Virgin PTFE, Modified PTFE or a reinforced compound is more appropriate.' },
  { title: 'Valve geometry', text: 'Review plug diameter, sleeve thickness, contact surfaces and body dimensions.' },
  { title: 'Operating movement', text: 'Evaluate rotation frequency, operating torque and expected operating cycles.' },
  { title: 'Installation', text: 'Check assembly clearances, retention features, tolerances and surface conditions.' },
];

export const installation = [
  { icon: 'shield', title: 'Protect the polymer surface', text: 'Avoid scratches, cuts, dents and sharp contact during handling. Damage to the sealing surface may affect the interface between the plug and sleeve.' },
  { icon: 'drawing', title: 'Verify dimensional compatibility', text: 'Check the plug diameter, sleeve dimensions, valve body dimensions and required clearances. Ensure the component matches the approved drawing.' },
  { icon: 'check', title: 'Follow approved assembly procedures', text: "Use the valve manufacturer's approved installation method. Avoid excessive force and unsuitable tools that could damage or deform the polymer component." },
  { icon: 'lab', title: 'Inspect during maintenance', text: 'Look for surface wear, scratches, deformation, dimensional changes, chemical degradation, abnormal operating torque and leakage symptoms. Follow the valve manufacturer’s inspection schedule.' },
];

export const customStages = [
  { title: 'Application assessment', text: 'Review the valve configuration, operating environment and sealing requirements.' },
  { title: 'Material selection', text: 'Evaluate suitable PTFE formulations based on media compatibility, temperature, pressure and mechanical requirements.' },
  { title: 'Dimensional review', text: 'Review technical drawings, tolerances, sleeve profiles and mating surfaces.' },
  { title: 'Precision manufacturing', text: 'Produce polymer components according to approved engineering specifications and available manufacturing capabilities.' },
  { title: 'Quality inspection', text: 'Verify dimensional and visual conformity against applicable product requirements.' },
];

export const documents = [
  'PTFE plug valve product catalogue',
  'Material technical datasheets',
  'PTFE chemical compatibility information',
  'Product dimensional drawings',
  'Material comparison guide',
  'Installation and handling guidelines',
  'Quality inspection documentation',
  'Application-specific engineering documents',
];

export const documentsNote =
  'These documents are issued after a technical review of your application, so there is nothing to download here. Tell us which you need and the engineering team will send the approved version.';

export const faqs = [
  { q: 'What is a PTFE plug valve sleeve?', a: 'A polymer component installed between the rotating plug and valve body in a compatible sleeved plug valve. It provides the sealing interface and supports low-friction rotational movement.' },
  { q: 'What is the difference between a PTFE plug and a PTFE sleeve?', a: 'The plug is the rotating closure element that controls fluid flow. The sleeve is the polymer component fitted between the plug and valve body to provide the intended sealing interface.' },
  { q: 'What is a PTFE liner?', a: 'A polymer lining used in compatible valve constructions to provide a chemically resistant process-contact surface.' },
  { q: 'Why is PTFE used in plug valve applications?', a: 'PTFE is valued for its low friction, broad chemical resistance and non-stick characteristics, making it useful in many industrial sealing applications.' },
  { q: 'What is modified PTFE?', a: 'A specialised PTFE formulation designed to improve selected characteristics, such as resistance to deformation and sealing behaviour.' },
  { q: 'What is carbon-filled PTFE?', a: 'PTFE containing carbon-based fillers that modify its mechanical, wear and friction-related characteristics.' },
  { q: 'What is glass-filled PTFE?', a: 'PTFE containing glass reinforcement to improve selected mechanical properties, particularly creep resistance and compressive strength.' },
  { q: 'What is bronze-filled PTFE?', a: 'PTFE containing bronze particles to modify its mechanical, thermal and load-bearing properties.' },
  { q: 'Are PTFE sleeves suitable for aggressive chemicals?', a: 'PTFE offers broad chemical resistance, but compatibility must be evaluated against the exact chemical, concentration and operating temperature.' },
  { q: 'Can PTFE sleeves be used in cryogenic applications?', a: 'Certain PTFE grades can be used in cryogenic applications. The material grade, dimensional contraction, sealing geometry and operating conditions must be evaluated.' },
  { q: 'Can PTFE sleeves operate at high pressure?', a: 'The pressure capability depends on the material formulation, geometry, extrusion gap, mechanical support and complete valve design. Confirm the actual pressure rating using approved product documentation.' },
  { q: 'Are custom PTFE sleeves available?', a: 'Custom components can be evaluated according to approved technical drawings, dimensions and application requirements.' },
  { q: 'How can I request a quotation?', a: "Provide the product type, valve model, technical drawing, dimensions, material preference, operating conditions and required quantity through Mithson's enquiry channel." },
];

export const closing = [
  'Every industrial application has unique sealing requirements.',
  'Whether you require Virgin PTFE sleeves, Modified PTFE components or reinforced polymer liners, Mithson can help evaluate the appropriate material and component configuration for your equipment.',
];

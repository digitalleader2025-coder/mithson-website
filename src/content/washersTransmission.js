// Washers - Transmission page copy, from the approved text supplied by the user (November 2026).
// Hard rules the text sets, followed here:
//   - only the 250°C continuous figure is published, and only for the thrust washer it belongs to;
//   - no pressure rating, PV limit, wear rate, friction coefficient or load capacity is published;
//   - a PEEK split-lock washer is never offered as a universal replacement for metal locking hardware;
//   - PEEK is never claimed to be better than metal in general;
//   - the material comparison is qualitative, because the numbers depend on the formulation.
// Temperature data comes from src/content/productItems.js.

export const wtHero = {
  label: 'Transmission washers',
  title: 'Washers —',
  titleAccent: 'Transmission.',
  titleRest: 'Load in. Friction out.',
  lead:
    'Mithson manufactures precision-engineered polymer washers for demanding automotive transmission and industrial powertrain applications. Carbon-filled PEEK thrust washers and PEEK split-lock washers are developed to handle high axial loads, continuous friction, thermal cycling, vibration and mechanical wear.',
  lead2:
    'From planetary gear systems and thrust-bearing interfaces to specialised transmission mechanisms, Mithson supplies application-specific washers manufactured to your dimensional and performance requirements.',
};

export const heroTags = [
  'High-performance Carbon-Filled PEEK',
  'Wear and abrasion resistance',
  'Low-friction sliding characteristics',
  'High strength and dimensional stability',
  'Built for demanding transmission environments',
  'Custom dimensions and configurations',
];

export const heroChips = [
  { icon: 'thermo', title: 'Up to 250°C', text: 'Continuous, for the PEEK thrust washer' },
  { icon: 'flask', title: 'Carbon-filled PEEK', text: 'High-performance thermoplastic' },
  { icon: 'layers', title: 'Three product types', text: 'Thrust, split-lock and PTFE seals' },
  { icon: 'drawing', title: 'Made to drawing', text: 'Dimensions, thickness and geometry' },
];

export const heroSpecs = [
  ['Product category', 'Transmission washers'],
  ['Primary material', 'Carbon-filled PEEK'],
  ['Material family', 'High-performance thermoplastic'],
  ['Continuous temperature', 'Up to 250°C, as specified for the PEEK thrust washer'],
  ['Pressure rating', 'Application-dependent; confirmed by our engineering team'],
  ['Surface characteristics', 'Low friction and high wear resistance'],
  ['Product types', 'PEEK thrust washer, PEEK split-lock washer, PTFE transmission seals'],
  ['Manufacturing', 'Precision machining and application-specific manufacturing'],
  ['Customisation', 'Dimensions, thickness and geometry to drawing or sample'],
  ['Industry', 'Automotive and industrial transmission systems'],
];

// 01 - why a polymer washer at all
export const overviewIntro =
  'Transmission assemblies run under continuous mechanical stress. Rotating gears, shafts, clutch assemblies and supporting components generate axial forces, friction, vibration and heat. Depending on the operating conditions, a metal washer can suffer surface wear, friction losses, corrosion or unwanted contact with the parts around it.';

export const overviewText =
  'Mithson’s high-performance polymer washers are an alternative where reduced friction, wear resistance, lighter construction and reliable dimensional performance matter. They support moving interfaces, distribute mechanical loads and reduce direct contact between selected components.';

export const benefits = [
  { icon: 'slide', title: 'Reduced friction', text: 'Low-friction polymer surfaces help minimise resistance at sliding interfaces.' },
  { icon: 'shield', title: 'Wear resistance', text: 'Suitable material grades resist repeated sliding contact and abrasive wear.' },
  { icon: 'thermo', title: 'Thermal stability', text: 'High-temperature PEEK grades keep useful mechanical properties under demanding thermal conditions.' },
  { icon: 'strength', title: 'Mechanical strength', text: 'Reinforced PEEK grades provide enhanced stiffness and load-bearing capability.' },
  { icon: 'caliper', title: 'Dimensional stability', text: 'Helps hold component geometry and operating clearances when correctly designed for the service temperature.' },
  { icon: 'feather', title: 'Lighter construction', text: 'Polymer components can reduce component mass compared with selected metallic alternatives.' },
  { icon: 'flask', title: 'Corrosion resistance', text: 'PEEK resists many industrial fluids and chemicals, subject to grade and media compatibility.' },
];

// 02 - the product range. `spec` keys match src/content/productItems.js.
export const products = [
  {
    key: 'thrust',
    number: '01',
    name: 'PEEK Thrust Washer',
    short: 'Thrust Washer',
    subtitle: 'Precision axial load support and low-friction wear protection',
    job: 'Carries axial load between rotating and still parts',
    spec: 'PEEK-Thrust Washer',
    photo: 'thrust',
    detail: 'product1',
    text: 'Engineered for assemblies where axial forces act between rotating and stationary components. Installed at the designated thrust interface, the washer provides a protective sliding surface that reduces friction and wear while supporting the axial load. Carbon-filled PEEK suits applications needing mechanical stiffness, wear resistance, thermal performance and dimensional stability together.',
    principle:
      'When a shaft, gear or rotating assembly generates axial movement or thrust, the washer acts as an intermediate bearing surface. It distributes the contact load across the designed interface and reduces direct rubbing between the metal parts.',
    points: [
      'High mechanical strength',
      'Excellent wear resistance',
      'Low-friction sliding surface',
      'Improved stiffness through carbon reinforcement',
      'High-temperature capability',
      'Good dimensional stability',
      'Resistance to many oils and industrial fluids',
      'Custom inner diameter, outer diameter and thickness',
    ],
    uses: 'Automatic transmission assemblies, planetary gear carriers, gear and shaft thrust interfaces, automotive powertrain systems, rotating machinery, industrial gearbox assemblies, and pump and compressor thrust interfaces where properly engineered.',
    gains: [
      'Helps minimise friction-related wear',
      'Protects the mating surfaces',
      'Supports reliable axial positioning',
      'Can reduce maintenance requirements',
      'Helps improve component service life',
    ],
    asks: ['Inner diameter', 'Outer diameter', 'Thickness', 'Axial load', 'Rotational speed', 'Operating temperature', 'Lubrication'],
  },
  {
    key: 'split',
    number: '02',
    name: 'PEEK Split-Lock Washer',
    short: 'Split-Lock Washer',
    subtitle: 'Polymer locking support for specialised mechanical assemblies',
    job: 'A polymer locking interface for special joints',
    spec: 'PEEK-Split Lock Washer',
    photo: 'split',
    detail: 'split',
    text: 'Designed for fastening and assembly applications that need a specialised polymer locking interface. The split geometry gives a discontinuous, spring-like profile that can contribute to resistance against loosening when it is properly designed into a compatible joint. Engineering-grade PEEK brings mechanical strength, thermal performance, chemical resistance and light weight.',
    note: 'The locking performance of a split washer depends on the joint design, the clamping force, vibration, surface condition and operating temperature. A PEEK split-lock washer is not a universal replacement for metallic locking hardware, and application testing and engineering validation are recommended.',
    points: [
      'Split-lock geometry',
      'High-performance PEEK material',
      'Lightweight construction',
      'Thermal resistance',
      'Good chemical resistance',
      'Precision-engineered dimensions',
      'Suitable for specialised assembly configurations',
    ],
    uses: 'Automotive transmission assemblies, specialised mechanical fastening systems, equipment exposed to elevated temperatures, industrial machinery and polymer-based fastening interfaces.',
    asks: ['Bolt or shaft size', 'Inner diameter', 'Outer diameter', 'Thickness', 'Clamping force', 'Operating temperature', 'Vibration conditions'],
  },
  {
    key: 'seals',
    number: '03',
    name: 'PTFE Transmission Seals',
    short: 'PTFE Seals',
    subtitle: 'Low-friction sealing for transmission applications',
    job: 'Holds the fluid, with very little drag',
    spec: null,
    photo: 'seals',
    detail: 'seals',
    text: 'The transmission range also includes PTFE-based sealing components for applications needing fluid retention, controlled leakage and reduced sliding friction. PTFE is widely used in sealing because of its low coefficient of friction, chemical resistance and broad operating-temperature capability. Depending on the design, a transmission seal can be configured for a dynamic or a static interface.',
    points: [
      'Low-friction sealing surface',
      'Excellent chemical resistance',
      'Good wear characteristics with a suitable design',
      'Low moisture absorption',
      'Precision-engineered sealing geometry',
      'Application-specific material selection',
    ],
    uses: 'Automotive transmission systems, rotating shaft interfaces, hydraulic and lubrication circuits, and specialised mechanical assemblies.',
    asks: ['Shaft diameter', 'Housing bore', 'Groove dimensions', 'Dynamic or static duty', 'Fluid', 'Operating temperature', 'Surface finish'],
  },
];

// 03 - material technology
export const materialIntro =
  'PEEK is a high-performance engineering thermoplastic known for its mechanical strength, thermal performance, chemical resistance and wear characteristics. Carbon-fibre reinforcement improves stiffness and creep resistance, and can improve thermal conductivity compared with unfilled PEEK. For a washer in repeated sliding contact under axial load, the grade decides a great deal of the service life.';

export const carbonGains = [
  'Enhanced stiffness compared with unfilled PEEK',
  'Improved creep resistance',
  'Good wear resistance',
  'Improved thermal conductivity',
  'High mechanical strength',
  'Suitable for demanding bearing and sliding applications',
];

// The bar lengths are a reading aid for the words beside them, not measured data.
export const materialGrades = [
  { key: 'virgin', name: 'Virgin PEEK', use: 'General engineering' },
  { key: 'carbon', name: 'Carbon-filled PEEK', use: 'Sliding and bearing components' },
  { key: 'glass', name: 'Glass-filled PEEK', use: 'High-stiffness structural components' },
];

export const materialRows = [
  { property: 'Mechanical strength', virgin: ['High', 3], carbon: ['High', 3], glass: ['High', 3] },
  { property: 'Stiffness', virgin: ['Good', 2], carbon: ['Very good', 3], glass: ['Very good', 3] },
  { property: 'Wear performance', virgin: ['Grade-dependent', 2], carbon: ['Often improved', 3], glass: ['Application-dependent', 2] },
  { property: 'Thermal conductivity', virgin: ['Relatively low', 1], carbon: ['Improved', 3], glass: ['Generally lower than carbon-filled', 2] },
  { property: 'Creep resistance', virgin: ['Good', 2], carbon: ['Improved', 3], glass: ['Improved', 3] },
];

export const materialNote =
  'Material performance depends on the precise formulation, the reinforcement percentage, the counterface material, the lubrication and the operating conditions. These bars are a reading aid for the words beside them, not measured test data. Grades are selected against your application, not from a table.';

// 04 - how it works, and the with/without comparison
export const worksIntro =
  'A thrust washer does four things at once inside a transmission. Step through them, then use the switch to see what the interface looks like without one.';

export const worksCards = [
  { key: 'load', number: '01', title: 'Axial load support', text: 'The washer sits between selected rotating and stationary components to support axial loads and protect the designed contact interface.' },
  { key: 'friction', number: '02', title: 'Friction management', text: 'The polymer sliding surface reduces friction at the contact interface, depending on pressure, speed, surface finish and lubrication.' },
  { key: 'thermal', number: '03', title: 'Thermal performance', text: 'High-performance PEEK grades suit elevated-temperature environments, and carbon reinforcement can improve heat transfer and stiffness.' },
  { key: 'wear', number: '04', title: 'Wear protection', text: 'The washer is the replaceable wear interface, protecting more expensive mating components from direct contact and wear.' },
];

export const worksWithout =
  'Without the washer the gear face runs directly against the housing. Metal meets metal at the thrust face, friction and heat rise, and the wear goes into parts that cost far more to replace than a washer.';

export const worksWith =
  'With the washer in place the sliding happens on the polymer face. The load is spread across the designed contact area, the metal parts no longer touch, and the wearing part is the cheap one you can change at a service.';

// 05 - engineering parameters
export const parameters = [
  { icon: 'thermo', title: 'Temperature resistance', text: 'The PEEK thrust washer is specified for continuous operation up to 250°C. Actual limits depend on the PEEK formulation, mechanical loading, exposure duration and the application environment.', value: 'Up to 250°C continuous' },
  { icon: 'gauge', title: 'Pressure and load capacity', text: 'Performance depends on contact pressure, axial load distribution, contact area and material grade. We do not publish one universal pressure rating without validated test data for your geometry.', value: 'Calculated for your geometry' },
  { icon: 'speed', title: 'PV performance', text: 'PV means pressure multiplied by velocity. A washer running at high pressure and high sliding speed generates more frictional heat. Material grade, lubrication, counterface finish and cooling all change what is permissible.', value: 'Grade and condition dependent' },
  { icon: 'shield', title: 'Wear resistance', text: 'Carbon-reinforced PEEK can give improved stiffness and wear performance in suitable sliding applications. Actual wear rates have to be established under representative testing conditions.', value: 'Established by testing' },
  { icon: 'flask', title: 'Chemical compatibility', text: 'PEEK generally resists many oils, fuels, solvents and industrial chemicals. Compatibility is checked against the actual fluid composition, temperature and exposure duration.', value: 'Checked per fluid' },
  { icon: 'caliper', title: 'Dimensional stability', text: 'Inner diameter, outer diameter, thickness, flatness and running clearance are controlled to maintain correct installation and operating performance.', value: 'Controlled to drawing' },
];

export const parametersNote =
  'Mithson publishes the 250°C continuous figure because it belongs to the featured thrust washer. Pressure limits, PV limits, wear rates, friction coefficients and load capacity are not published as general numbers, because they depend on the geometry and the conditions your washer actually runs in.';

// 06 - applications
export const applications = [
  { icon: 'gear', title: 'Automatic transmission systems', text: 'Used at selected axial support and sliding interfaces inside automatic transmission assemblies.' },
  { icon: 'planet', title: 'Planetary gear systems', text: 'Thrust washers can support the axial loads generated within planetary gear arrangements, subject to the mechanical design.' },
  { icon: 'box', title: 'Gearbox assemblies', text: 'Provide protective sliding interfaces between selected rotating and stationary components.' },
  { icon: 'car', title: 'Automotive powertrain', text: 'For specialised mechanical interfaces needing reduced friction, high wear resistance and thermal performance.' },
  { icon: 'rotor', title: 'Industrial rotating machinery', text: 'Can be considered for suitable thrust-bearing and wear-interface applications in pumps, compressors and industrial equipment.' },
  { icon: 'anvil', title: 'Heavy-duty assemblies', text: 'Suitable material grades support demanding conditions involving repeated mechanical loading and elevated temperatures.' },
];

// 07 - what to consider
export const considerations = [
  {
    key: 'load',
    title: 'Load requirements',
    items: ['Axial load and contact pressure', 'Static and dynamic loading conditions', 'Load distribution across the washer surface', 'Expected mechanical shock and vibration'],
  },
  {
    key: 'conditions',
    title: 'Operating conditions',
    items: ['Continuous and peak operating temperature', 'Shaft rotational speed', 'Sliding velocity', 'Lubrication availability', 'Thermal cycling'],
  },
  {
    key: 'material',
    title: 'Material selection',
    items: ['Virgin or reinforced PEEK', 'Carbon-filled PEEK', 'Glass-filled PEEK', 'PTFE for compatible sealing applications'],
  },
  {
    key: 'dimensions',
    title: 'Dimensional requirements',
    items: ['Inner diameter', 'Outer diameter', 'Overall thickness', 'Flatness and parallelism', 'Surface finish', 'Running clearance and fit'],
  },
  {
    key: 'maintenance',
    title: 'Maintenance considerations',
    items: ['Wear inspection intervals', 'Lubricant condition', 'Mating surface condition', 'Replacement accessibility', 'Operating environment'],
  },
];

// 08 - manufacturing and quality
export const manufacturing = [
  'Precision polymer machining',
  'Component profiling and finishing',
  'Custom washer geometry',
  'Dimensional inspection',
  'Drawing-based manufacturing',
  'Sample-based development',
  'Application-specific material selection',
];

export const inspection = [
  'Inner and outer diameter verification',
  'Thickness measurement',
  'Flatness and parallelism inspection',
  'Surface finish evaluation',
  'Visual defect inspection',
  'Material-grade verification',
  'Application-specific performance testing',
];

export const qualityNote =
  'Mithson holds ISO 9001:2015 and is QIMA audited. Any other certificate, test standard or laboratory capability is stated only where Mithson can show the document for it.';

// 09 - custom work
export const customOptions = [
  'Custom inner and outer diameters',
  'Different washer thicknesses',
  'Special split-lock configurations',
  'Material-grade selection',
  'Custom profiles and geometry',
  'Precision tolerances',
  'Prototype and production requirements',
];

export const customAsks = [
  'Component drawing or sample',
  'Required material',
  'Operating temperature',
  'Axial load and pressure',
  'Rotational speed',
  'Lubrication conditions',
  'Chemical or fluid exposure',
  'Required quantity',
];

// 10 - FAQ
export const faqs = [
  { q: 'What is a PEEK thrust washer?', a: 'A high-performance polymer component used at an axial load-bearing interface. It reduces friction and wear between selected mechanical components.' },
  { q: 'What is the advantage of carbon-filled PEEK over standard PEEK?', a: 'Carbon reinforcement generally improves stiffness, creep resistance and thermal conductivity, and can improve wear performance in suitable applications.' },
  { q: 'Can PEEK washers withstand high temperatures?', a: 'Yes. PEEK is a high-temperature engineering thermoplastic, and the featured Mithson thrust washer is specified for continuous operation up to 250°C. Actual suitability depends on the grade, the load and the operating conditions.' },
  { q: 'Where are PEEK thrust washers used?', a: 'In automotive transmissions, gearboxes, planetary gear systems, pumps, compressors and other suitable rotating machinery.' },
  { q: 'What is the purpose of a split-lock washer?', a: 'It provides a spring-like fastening interface that can help resist loosening in compatible joint designs.' },
  { q: 'Are PEEK washers better than metal washers?', a: 'Not universally. PEEK can offer advantages in friction, weight, corrosion resistance and specialised thermal environments. Metal washers may be the better answer for other load, stiffness and cost requirements.' },
  { q: 'Can Mithson manufacture customised washers?', a: 'Custom dimensions and configurations can be discussed from engineering drawings, technical specifications or reference samples.' },
  { q: 'What information is required for a technical quotation?', a: 'The drawing, the material requirement, dimensions, operating temperature, load conditions, lubrication details and the quantity you need.' },
  { q: 'Do PEEK thrust washers require lubrication?', a: 'It depends on the material grade, contact pressure, sliding speed and operating environment. Some bearing-grade PEEK formulations support dry running within validated limits.' },
  { q: 'What is PV value in washer applications?', a: 'PV is contact pressure multiplied by sliding velocity. It helps engineers judge the frictional and thermal demand placed on a sliding component.' },
];

export const closing = [
  'Ready to specify transmission washers?',
  'Looking for reliable PEEK thrust washers, specialised split-lock washers or PTFE transmission seals? Share your operating conditions, material requirements, drawings and manufacturing specifications, and our engineering team will help identify a suitable polymer solution.',
];

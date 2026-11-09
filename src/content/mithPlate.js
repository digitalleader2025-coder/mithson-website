// MITH PLATE page copy, from the approved text supplied by the user (November 2026).
// The "typical reference" figures are generic material references, not Mithson guarantees:
// keep their wording and caveats intact. Never present them as MITH PLATE limits.

export const mithPlateHero = {
  label: 'MSS Polymer Valve Plates',
  title: 'MITH PLATE.',
  titleAccent: 'Precision polymer',
  titleRest: 'for the compressor.',
  lead:
    'Precision-engineered polymer valve plates for demanding reciprocating compressor applications, and an alternative to conventional metallic plates. Available in Carbon PTFE, Glass Filled PEEK and Nylon.',
};

export const envelope = [
  { icon: 'cold', label: 'Suction temperature', value: '−40°C' },
  { icon: 'heat', label: 'Discharge temperature', value: 'Up to 230°C' },
  { icon: 'gauge', label: 'Differential pressure', value: 'Up to 200 bar', note: 'depending on gas temperature' },
];

export const heroStats = [
  { icon: 'feather', value: 'Reduced', label: 'Moving mass' },
  { icon: 'layers', value: '3 options', label: 'Material grades' },
  { icon: 'slide', value: 'Low', label: 'Friction, in suitable grades' },
  { icon: 'drawing', value: 'To drawing', label: 'Component dimensions' },
];

export const overview = [
  'Reciprocating compressors depend on the controlled operation of suction and discharge valves to move gas through the compression cycle.',
  'Valve components repeatedly experience movement, pressure changes, mechanical impact and thermal exposure. Their material and design therefore play an important role in compressor operation.',
  'MITH PLATE offers polymer-based valve plate options designed to address application-specific requirements.',
];

export const characteristics = [
  'Polymer construction for reduced component mass compared with many conventional metal alternatives.',
  'Material options including Carbon PTFE, Glass Filled PEEK and Nylon.',
  'Low-friction characteristics in suitable material grades.',
  'Material-specific mechanical and thermal properties.',
  'Application-dependent sealing and damping characteristics.',
  'Component dimensions developed around customer requirements and valve design.',
];

export const materials = [
  {
    key: 'carbon-ptfe',
    name: 'Carbon PTFE',
    short: 'Low friction, chemical resistance',
    swatch: 'black',
    intro:
      'Carbon-filled PTFE combines the chemical resistance and low-friction characteristics of PTFE with improved mechanical properties from its carbon filler.',
    points: [
      'Low coefficient of friction.',
      'Improved deformation resistance compared with unfilled PTFE.',
      'Good chemical resistance for compatible media.',
      'Suitable wear characteristics for selected applications.',
      'Thermal performance dependent on the compound formulation.',
    ],
    reference:
      'Some commercially available carbon-filled PTFE grades specify service temperatures from approximately −200°C to +260°C. This is a generic material reference, not a guaranteed MITH PLATE operating range.',
  },
  {
    key: 'glass-peek',
    name: 'Glass Filled PEEK',
    short: 'Strength, stiffness, stability',
    swatch: 'tan',
    intro:
      'Glass-filled PEEK is an engineering thermoplastic reinforced with glass fibres to improve stiffness, strength and dimensional stability.',
    points: [
      'High mechanical strength.',
      'Improved stiffness compared with unfilled PEEK.',
      'Reduced thermal expansion in suitable grades.',
      'Good dimensional stability.',
      'Resistance to deformation under appropriate loading conditions.',
    ],
    reference:
      'Certain PEEK grades have continuous-use temperature references around 250–260°C. Actual performance depends on the formulation, loading and operating environment.',
  },
  {
    key: 'nylon',
    name: 'Nylon',
    short: 'Toughness and impact resistance',
    swatch: 'cream',
    intro:
      'Nylon is an engineering thermoplastic valued for its toughness, impact resistance and wear characteristics.',
    points: [
      'Good mechanical toughness.',
      'Wear resistance in suitable grades.',
      'Impact resistance.',
      'Machinability.',
      'Suitability for selected compressor applications.',
    ],
    warning:
      'Nylon grades have significantly different thermal capabilities. Standard PA6 grades commonly have lower continuous-use temperature limits than PEEK and carbon-filled PTFE. The exact grade must be evaluated against the compressor’s operating temperature and load.',
  },
];

export const conditions = [
  { icon: 'heat', title: 'Temperature', text: 'Influences strength, dimensional stability, deformation and wear. Consider suction and discharge temperatures, including startup, shutdown and changing operating conditions.' },
  { icon: 'gauge', title: 'Differential pressure', text: 'Drives the mechanical load on the plate. Evaluate it against plate design, material grade, dimensions, valve geometry and the compressor operating cycle.' },
  { icon: 'gas', title: 'Gas composition', text: 'Chemical exposure, moisture, contaminants and process conditions all affect material compatibility.' },
  { icon: 'cycle', title: 'Operating frequency', text: 'Valve parts see repeated movement and cyclic loading, so response, fatigue resistance and impact behaviour matter.' },
  { icon: 'oil', title: 'Lubrication conditions', text: 'Oil-lubricated and oil-free systems may need different materials and application evaluations.' },
  { icon: 'drop', title: 'Liquid carry-over', text: 'Liquids in the gas stream can affect valve operation and life. Treat it as an application risk, not a guaranteed material capability.' },
];

export const performance = [
  { icon: 'feather', title: 'Lower moving mass', text: 'Lower-density polymer can reduce plate mass against an equal-volume metal part, which can influence inertia and valve response.' },
  { icon: 'seal', title: 'Sealing interface', text: 'A suitable grade and an accurately made contact surface support sealing at the valve interface, depending on geometry, finish and loading.' },
  { icon: 'wave', title: 'Damping', text: 'Polymers can help manage impact and mechanical noise during repeated valve movement.' },
  { icon: 'shield', title: 'Wear and durability', text: 'Depends on formulation, contact conditions, temperature, gas composition and operating cycle.' },
  { icon: 'ruler', title: 'Dimensional stability', text: 'Accuracy under thermal and mechanical load keeps valve operation consistent, so material selection and tolerances are chosen together.' },
];

export const specNote =
  'These figures should be evaluated against the specific material grade and compressor design. They should not be interpreted as universal limits for every available material.';

export const validation = [
  'Material grade and compound formulation.',
  'Actual suction and discharge temperatures.',
  'Maximum differential pressure.',
  'Gas composition and chemical compatibility.',
  'Valve design and component geometry.',
  'Operating frequency and cyclic loading.',
  'Lubrication and liquid carry-over conditions.',
];

export const applications = [
  { icon: 'compressor', title: 'Industrial reciprocating compressors' },
  { icon: 'gas', title: 'Gas compression systems' },
  { icon: 'cycle', title: 'Process gas compressors' },
  { icon: 'seal', title: 'Compressor valve assemblies' },
  { icon: 'swap', title: 'Replacement valve plates' },
  { icon: 'drawing', title: 'Custom compressor valve components' },
];

export const applicationsNote =
  'Final application suitability should be confirmed against the equipment manufacturer’s requirements and the compressor operating conditions.';

export const developmentSteps = [
  { title: 'Application review', text: 'Understand the compressor model, operating conditions and valve requirements.' },
  { title: 'Material selection', text: 'Evaluate suitable polymer options and grade specifications.' },
  { title: 'Design and dimensions', text: 'Review component geometry, tolerances and contact surfaces.' },
  { title: 'Manufacturing', text: 'Develop the component to the approved drawing and manufacturing requirements.' },
  { title: 'Inspection', text: 'Verify applicable dimensions and product requirements.' },
  { title: 'Customer support', text: 'Coordinate technical documentation, samples and application discussions.' },
];

export const faqs = [
  { q: 'What is MITH PLATE?', a: "MITH PLATE is Mithson's polymer valve plate solution intended for reciprocating compressors." },
  { q: 'Which materials are available?', a: 'Carbon PTFE, Glass Filled PEEK and Nylon. Availability and grade selection should be confirmed with Mithson.' },
  { q: 'Can MITH PLATE operate at 230°C?', a: 'Mithson publishes a discharge-temperature figure of up to 230°C. Actual suitability depends on the specific material grade, mechanical loading and compressor design. Standard Nylon grades should not be assumed suitable for this temperature.' },
  { q: 'Can it withstand 200 bar differential pressure?', a: 'Mithson publishes a figure of up to 200 bar depending on gas temperature. This should be confirmed for the selected plate geometry, material and compressor configuration.' },
  { q: 'How do I select the right material?', a: "Material selection requires the compressor's operating temperatures, differential pressure, gas composition, lubrication conditions, operating frequency and valve design." },
  { q: 'Can MITH PLATE be manufactured to customer drawings?', a: 'Contact Mithson with the component drawing and specifications to discuss the manufacturing requirements and available options.' },
];

export const fittingCare = [
  'Inspect plates for cracks, edge wear and seat marks.',
  'Check seats are clean and flat before fitting new plates.',
  'Replace worn springs at the same time, because weak springs change valve timing.',
  'Investigate liquid carry-over if plates show repeated impact damage.',
];

export const closing = [
  'Share your compressor details, operating conditions and component requirements with our engineering team.',
  'We can discuss material suitability, dimensional requirements and the technical information needed to evaluate a suitable valve plate solution.',
];

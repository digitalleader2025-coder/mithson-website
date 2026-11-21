// The rest of the approved Oil & Gas brief (November 2026), so /oil-gas-seal carries all of it.
// Companion to industryOilGas.js. Same rules: product-specific pressure figures stay with their
// products, LNG is ~−162°C, standards are references, not certifications.

// Each family page's own summary line (from the API 6A, Well Service and API 6D pages), unchanged.
export const familyIntros = {
  wellhead: 'High-pressure, sour-gas and HPHT wellhead sealing — stem packing sets, stem seals, OD/ID face seals and BOP seals manufactured to API 6A.',
  'well-service': 'High-cycling, high-stress sealing for mud pumps, frac pumps and plunger pumps — plunger packing sets, pump packing, valve seat inserts and liner seals.',
  api6d: 'Gas transmission and cryogenic ball valve sealing — body-bonnet seals, PEEK seat rings and LNG seals for trunnion and floating ball valves.',
};

// Brief section 2: function, engineering benefits, material options and applications per product,
// keyed by the product name used with the product photos.
export const productBrief = {
  'Stem Packing Set': {
    function: 'Stem packing is installed around the valve stem to control leakage along the moving or reciprocating stem interface.',
    benefits: ['Helps prevent external fluid leakage', 'Supports pressure containment', 'Provides controlled friction during stem movement', 'Uses application-appropriate polymer and energizer materials', 'Supports demanding wellhead valve operating conditions'],
    materialOptions: 'Filled PTFE, PEEK and corrosion-resistant metallic spring or support components, according to design.',
    apps: ['API 6A gate valves', 'Wellhead equipment', 'Christmas tree valve assemblies'],
  },
  'Stem Seal': {
    function: 'A spring-energized seal uses a polymer sealing jacket and a metallic energizer spring to maintain sealing contact against the mating surface.',
    benefits: ['Consistent sealing contact', 'Low-friction performance', 'Suitable for dynamic or static sealing arrangements, depending on design', 'Helps compensate for changes in sealing contact', 'Supports demanding valve applications'],
    materialOptions: 'Filled PTFE, PEEK and Elgiloy or stainless-steel spring options, according to design.',
  },
  'OD/ID Face Seal': {
    function: 'Face seals are installed at the inner and outer sealing interfaces of valve seat assemblies to prevent leakage through the associated mating surfaces.',
    benefits: ['Supports valve seat sealing integrity', 'Provides controlled sealing contact', 'Offers chemical-resistant polymer options', 'Designed for specific seat geometries and pressure conditions'],
    materialOptions: 'PEEK, glass-filled PTFE and metallic energizer components, depending on the design.',
  },
  'BOP Seal': {
    function: 'Blowout preventer seals are used in BOP assemblies to help maintain sealing contact around the relevant ram, pipe or equipment interface.',
    benefits: ['Supports well-control equipment integrity', 'Helps prevent unwanted fluid escape', 'Designed for demanding oilfield operating environments', 'Available in application-specific elastomer compounds'],
    materialOptions: 'NBR and HNBR, subject to fluid compatibility and operating requirements.',
    apps: ['Blowout preventers', 'Well-control equipment', 'Drilling operations'],
  },
  'Plunger Packing Set': {
    function: 'Plunger packing seals the moving plunger within the pump packing assembly to minimise process-fluid leakage during reciprocating operation.',
    benefits: ['Supports high-pressure reciprocating service', 'Maintains sealing contact around the plunger', 'Helps control leakage during repeated operating cycles', 'Available in different material constructions', 'Designed around the pump and process-fluid requirements'],
    materialOptions: 'NBR/fabric, HNBR/fabric and FKM/fabric options, according to application.',
    apps: ['Oilfield plunger pumps', 'Well service pumps', 'High-pressure fluid pumping systems'],
  },
  'Pump Packing Set': {
    function: 'Pump packing provides sealing around moving pump elements and helps maintain fluid containment during pumping operations.',
    benefits: ['Designed for repeated mechanical movement', 'Helps reduce unwanted fluid leakage', 'Available in application-specific material constructions', 'Supports demanding pump service environments'],
    apps: ['Hydraulic fracturing equipment', 'Cementing pumps', 'Oilfield fluid pumping systems'],
  },
  'Body-Bonnet Seal': {
    function: 'The body-bonnet seal is installed between the valve body and bonnet or closure assembly to help prevent leakage through the pressure-containing joint.',
    benefits: ['Supports pressure containment', 'Provides application-specific sealing contact', 'Uses suitable polymer and spring materials', 'Designed around the valve geometry'],
    materialOptions: 'Carbon-filled PTFE and Elgiloy spring components, according to the published Mithson product configuration.',
    tag: 'Up to 10,000 psi · this configuration',
    note: 'Mithson publishes a pressure capability of up to 10,000 psi for this specified body-bonnet seal configuration. It is not a general API 6D rating.',
  },
  'Seat Retainer': {
    function: 'The seat retainer seal is positioned between the seat retainer or seat insert and the valve body to prevent fluid leakage behind the valve seat.',
    benefits: ['Supports the seat-retainer sealing interface', 'Helps maintain fluid containment', 'PEEK support elements can help resist deformation', 'Designed for application-specific pressure conditions'],
    materialOptions: 'PTFE, PEEK and Elgiloy spring components.',
    tag: 'Up to 10,000 psi · this configuration',
    note: 'A specific Mithson product configuration is published with a pressure capability of up to 10,000 psi; the actual valve configuration and design are confirmed for each application.',
  },
  'Peek Seat Ring': {
    function: 'The seat ring forms the sealing interface between the ball and valve seat assembly.',
    benefits: ['Supports reliable ball-seat contact', 'Provides mechanical strength', 'Offers wear and chemical resistance appropriate to the selected grade', 'Can be configured for spring-loaded or pressure-assisted seating arrangements'],
    apps: ['Trunnion-mounted ball valves', 'Floating ball valves'],
  },
  'LNG Seal': {
    function: 'Spring-energized seals provide sealing contact in cryogenic ball valve applications using a polymer jacket and metallic energizer.',
    benefits: ['Designed for low-temperature sealing applications', 'Helps maintain sealing contact during thermal cycling', 'Offers low-friction characteristics', 'Supports specialised cryogenic valve designs'],
    materialOptions: 'PTFE and corrosion-resistant Elgiloy spring components, according to the Mithson product configuration.',
    apps: ['LNG ball valves', 'Cryogenic gas-handling equipment'],
    tag: 'LNG at about −162°C',
    note: 'LNG is commonly stored and transported at approximately −162°C at atmospheric pressure. This is a general LNG reference, not a guaranteed minimum rating for every seal.',
  },
};

// Brief: well service also covers plunger sealing elements and a material guide.
export const wellServiceExtras = {
  element: {
    name: 'Plunger sealing elements',
    function: 'Specialised sealing elements maintain contact between the plunger and packing arrangement.',
    benefits: ['Controlled sealing performance', 'Resistance to process-fluid exposure', 'Application-dependent wear resistance', 'Suitable for repeated reciprocating operation'],
  },
  materials: [
    { name: 'NBR', text: 'Suitable for selected petroleum-oil and standard service environments.' },
    { name: 'HNBR', text: 'Improved heat, mechanical and selected sour-service performance compared with conventional NBR.' },
    { name: 'FKM', text: 'Suitable for many hydrocarbon and higher-temperature chemical environments, depending on compound formulation.' },
  ],
};

// Brief section 4: full description and key properties for each material (the material selector).
export const materialDetails = {
  ptfe: { full: 'Polytetrafluoroethylene', desc: 'A high-performance fluoropolymer recognised for its low friction, excellent chemical resistance and wide thermal operating capability.', props: ['Very low coefficient of friction', 'Excellent chemical resistance', 'Non-stick surface characteristics', 'Excellent electrical insulation', 'Good thermal stability', 'Low moisture absorption'], consider: 'Virgin PTFE can creep and deform under sustained mechanical load. Filled or modified grades may be considered where more wear resistance or dimensional stability is needed.' },
  filled: { full: 'Glass-, carbon- and bronze-filled PTFE, and modified PTFE grades', desc: 'Grades developed to improve selected mechanical and dimensional characteristics compared with unfilled PTFE.', props: ['Improved wear characteristics in suitable formulations', 'Better creep resistance in selected grades', 'Application-specific mechanical properties', 'Chemical resistance retained, depending on filler and formulation'], consider: 'Properties depend on the filler and the grade.' },
  peek: { full: 'Polyether ether ketone', desc: 'A high-performance engineering thermoplastic known for excellent mechanical strength, stiffness, wear resistance and thermal performance.', props: ['High mechanical strength', 'Good dimensional stability', 'High-temperature capability', 'Excellent wear performance in suitable grades', 'Good resistance to many chemicals', 'Good load-bearing characteristics'], consider: 'Chemical compatibility and temperature are checked for the grade.' },
  nbr: { full: 'Nitrile butadiene rubber', desc: 'A widely used oil-resistant elastomer for sealing applications involving petroleum-based fluids.', props: ['Good resistance to many petroleum oils', 'Good elasticity', 'Good sealing performance', 'Available in different hardness grades', 'Suitable for many conventional oilfield applications'], consider: 'Not universally suitable for high-temperature or sour-gas environments; the exact compound and fluid compatibility must be verified.' },
  hnbr: { full: 'Hydrogenated nitrile butadiene rubber', desc: 'A high-performance elastomer offering improved heat, mechanical and ageing performance compared with conventional NBR.', props: ['Improved thermal resistance compared with standard NBR', 'Good mechanical strength', 'Good wear resistance', 'Suitable for selected sour-gas applications', 'Specialised grades can offer rapid gas decompression resistance'], consider: 'Confirm compound-specific RGD and sour-service qualification.' },
  fkm: { full: 'Fluoroelastomer', desc: 'A fluorocarbon elastomer known for its resistance to many hydrocarbons, fuels, oils and elevated-temperature environments.', props: ['Good resistance to many hydrocarbons', 'Good thermal performance', 'Good resistance to many oils and fuels', 'Available in different compound formulations', 'Suitable for specialised oilfield applications'], consider: 'Compatibility varies a great deal with compound chemistry, steam, amines, sour gas and other fluids; not every FKM grade suits every sour-service application.' },
  fepm: { full: 'Tetrafluoroethylene-propylene elastomer', desc: 'A specialised fluoroelastomer used where resistance to selected chemicals, bases, amines and high-temperature process environments matters.', props: ['Good resistance to selected chemical environments', 'Useful high-temperature capability in suitable grades', 'Compatibility with selected sour-service fluids', 'Specialised performance in aggressive process environments'], consider: 'Verify compatibility against the exact process fluids.' },
  ffkm: { full: 'Perfluoroelastomer', desc: 'A high-performance elastomer designed for demanding chemical and thermal environments.', props: ['Excellent chemical resistance across a broad range of media', 'High-temperature capability in specialised grades', 'Low extractables in selected formulations', 'Suitable for specialised aggressive-fluid environments'], consider: 'A specialised material, selected on compound-specific chemical and temperature data.' },
};

// Brief section 7: pressure and temperature reference.
export const tempReference = {
  pressureRefs: [
    ['Body-Bonnet Seal', 'Up to 10,000 psi', 'Published for this specific configuration'],
    ['Seat Retainer Seal', 'Up to 10,000 psi', 'Published for this specific configuration'],
  ],
  confirm: [
    ['Minimum service temperature', 'Confirm by material grade'],
    ['Continuous service temperature', 'Confirm by material grade'],
    ['Intermittent temperature', 'Confirm by material grade'],
    ['Pressure-temperature relationship', 'Confirm by product design'],
    ['Cryogenic suitability', 'Confirm by qualified seal construction'],
  ],
  lng: 'Typical LNG temperature is approximately −162°C. This is a general LNG process reference, not a guaranteed minimum temperature rating for every Mithson seal.',
  thermal: [
    ['NBR', 'Moderate-temperature oilfield elastomer', 'Check exact compound limits and low-temperature flexibility'],
    ['HNBR', 'Improved thermal capability over conventional NBR in suitable compounds', 'Verify sour-service and RGD requirements'],
    ['FKM', 'Available in standard and high-temperature formulations', 'Verify low-temperature flexibility and chemical compatibility'],
    ['FEPM', 'Specialised chemical- and heat-resistant elastomer', 'Confirm process-fluid compatibility'],
    ['FFKM', 'Specialised high-performance elastomer with grade-dependent high-temperature capability', 'Confirm compound specifications'],
    ['PTFE', 'High-temperature fluoropolymer with excellent chemical resistance', 'Account for creep and pressure-related deformation'],
    ['PEEK', 'High-performance thermoplastic with high mechanical strength and thermal capability', 'Confirm grade and mechanical loading'],
  ],
  disclaimer: 'All values and performance descriptions must be verified against the actual material datasheet, product drawing, qualification test report and operating conditions. General material limits are not certified product ratings.',
};

// Brief section 11: engineering design and customisation.
export const customParams = ['Internal diameter', 'External diameter', 'Cross-sectional dimensions', 'Groove dimensions', 'Seal lip geometry', 'Spring configuration', 'Material formulation', 'Hardness requirements', 'Surface finish', 'Extrusion gap', 'Pressure direction', 'Static or dynamic operation', 'Installation arrangement'];

export const designConsiderations = [
  { icon: 'doc', title: 'Seal profile development', text: 'Select the appropriate sealing profile for the equipment interface and functional requirements.' },
  { icon: 'flask', title: 'Material selection', text: 'Evaluate the compatibility of polymer and elastomer grades against actual process conditions.' },
  { icon: 'gauge', title: 'Spring selection', text: 'For spring-energized seals, evaluate suitable spring materials and energizing characteristics.' },
  { icon: 'shield', title: 'Extrusion control', text: 'Evaluate suitable support and back-up ring arrangements.' },
  { icon: 'ruler', title: 'Dimensional accuracy', text: 'Manufacture to approved component drawings and applicable tolerances.' },
  { icon: 'check', title: 'Application review', text: 'Evaluate operating conditions before finalising the sealing arrangement.' },
];

// Brief section 20: the brand message.
export const brandMessage = {
  title: 'Engineered for pressure. Designed for reliability.',
  text: 'In demanding oil and gas environments, every sealing component plays an important role in equipment performance and operational integrity. With expertise in advanced polymer and elastomer materials, application-focused engineering and specialised sealing technologies, Mithson supports critical sealing requirements across wellhead equipment, well service operations, pipeline valves and LNG systems.',
};

// The elastomer temperature table drawn as bars: the same figures as the table text, in °C.
// `from` null means the table gives no lower figure; `to2` is the top of a quoted span; `open`
// means the table says "or higher".
export const elastomerBars = {
  NBR: { from: -30, to: 120 },
  HNBR: { from: -30, to: 150 },
  FKM: { from: null, to: 200, to2: 225 },
  FEPM: { from: null, to: 200 },
  FFKM: { from: null, to: 260, open: true },
  EPDM: { from: -50, to: 140, to2: 150 },
};

// Custom Molded Products page copy, from the approved text supplied by the user (November 2026).
// Hard rules the text sets, followed here:
//   - temperature ranges are indicative reference values for a material family, never product
//     guarantees, and the page says so next to every one of them;
//   - no size, tolerance, minimum quantity, hardness or test figure is invented: the twelve
//     technical parameters are explained, not populated;
//   - neither molding nor machining is claimed to be better in general;
//   - aerospace work is stated to need traceability, qualification and industry approvals;
//   - every capability is written as something to discuss and evaluate, not a standing offer.
// The existing hero image is untouched: it comes from customManufacturing.js.

export const cmHero = {
  label: 'Custom manufacturing',
  title: 'Custom Molded Products.',
  titleAccent: 'Your drawing.',
  titleRest: 'Our mold.',
  lead:
    'When a standard sealing product does not meet your equipment, your operating conditions or your design, Mithson manufactures the component to your specification. We work across engineering polymers, elastomers and advanced fluoropolymers to develop parts with application-specific geometry, dimensions and material characteristics.',
  lead2:
    'From the first design conversation and material selection through tooling, prototyping, precision molding and final inspection, the whole route is handled in one place. Send a drawing, a sample or just the conditions the part has to survive.',
};

export const heroTags = [
  'Custom component development',
  'Multiple polymer and elastomer materials',
  'Application-specific mold design',
  'Compression, transfer and injection molding',
  'PTFE compression molding',
  'Rubber-to-metal bonding',
  'Prototype and production support',
  'Engineering consultation',
];

export const heroChips = [
  { icon: 'mold', title: '5 molding routes', text: 'Chosen for your part, not for us' },
  { icon: 'flask', title: '6 material families', text: 'NBR, FKM, HNBR, EPDM, PU, PTFE' },
  { icon: 'drawing', title: 'From your drawing', text: 'Or a sample, or just conditions' },
  { icon: 'layers', title: 'Prototype to production', text: 'First sample through repeat orders' },
];

// 01 - what can be molded
export const categoriesIntro =
  'Mithson makes a wide variety of custom-molded polymer and elastomer components for specific industrial applications. The capability covers both simple geometries and complex designs: sealing elements, protective components, wear-resistant parts and specialised assemblies. Work can start from an existing drawing, a physical sample, a dimensional specification or just a description of the application.';

export const categories = [
  {
    key: 'seals',
    number: '01',
    name: 'Custom Molded Seals',
    short: 'Seals & Gaskets',
    job: 'Keeps the fluid where it belongs',
    photo: 'seals-gaskets',
    detail: 'gaskets-colour',
    text: 'Precision-molded sealing components that prevent fluid leakage, maintain pressure and provide a reliable sealing interface.',
    items: ['Custom O-Rings', 'Special-profile O-Rings', 'Custom rubber seals', 'Gaskets', 'Hydraulic seals', 'Static sealing components', 'Special-purpose sealing profiles'],
    uses: 'Hydraulic equipment, industrial pumps, valves, chemical-processing systems and fluid-handling equipment.',
  },
  {
    key: 'polymer',
    number: '02',
    name: 'Custom Polymer Components',
    short: 'Polymer Parts',
    job: 'Guides, spaces and protects',
    photo: 'polymer-bushes',
    detail: 'ptfe-bushes',
    text: 'Engineered polymer parts for mechanical, structural and industrial applications, where a metal part would be heavier, noisier or quicker to wear its neighbour.',
    items: ['Polymer bushes', 'Wear rings', 'Guide rings', 'Polymer spacers', 'Insulating components', 'Custom sleeves', 'Protective polymer components'],
    uses: 'Industrial machinery, automation equipment, engineering assemblies and mechanical systems.',
  },
  {
    key: 'diaphragms',
    number: '03',
    name: 'Diaphragms and Flexible Components',
    short: 'Diaphragms',
    job: 'Moves with the pressure',
    photo: 'diaphragms-group',
    detail: 'diaphragms-row',
    text: 'Flexible molded components that respond to pressure variation, fluid movement and mechanical actuation, flexing millions of times without tearing.',
    items: ['Rubber diaphragms', 'Pump diaphragms', 'Valve diaphragms', 'Flexible membranes', 'Custom molded flexible elements'],
    uses: 'Pumps, valves, pressure-control equipment and fluid-handling systems.',
  },
  {
    key: 'wear',
    number: '04',
    name: 'Wear and Abrasion-Resistant Parts',
    short: 'Wear Parts',
    job: 'Takes the damage instead',
    photo: 'pu-parts',
    detail: 'rubber-range',
    text: 'Specialised polymer and elastomer components built to withstand friction, repeated movement and mechanical wear, so that the expensive part next to them does not.',
    items: ['Wear pads', 'Bushings', 'Scraper components', 'Protective liners', 'Wear-resistant rings', 'Sliding components'],
    uses: 'Industrial machinery, hydraulic systems, mining equipment and mechanical assemblies.',
  },
  {
    key: 'bonded',
    number: '05',
    name: 'Rubber-to-Metal Bonded Components',
    short: 'Bonded Parts',
    job: 'Rubber and steel in one piece',
    photo: 'rubber-metal-bonded',
    detail: 'seals-range',
    text: 'Components that combine the flexibility of an elastomer with the strength and structural support of a metal insert, bonded during the molding cycle rather than assembled afterwards.',
    items: ['Rubber-bonded bushes', 'Vibration isolation components', 'Metal-reinforced seals', 'Bonded diaphragms', 'Custom rubber-metal assemblies'],
    uses: 'Automotive systems, industrial machinery, vibration-control equipment and mechanical assemblies.',
  },
  {
    key: 'ptfe',
    number: '06',
    name: 'PTFE and Fluoropolymer Components',
    short: 'PTFE Parts',
    job: 'Where chemicals eat everything else',
    photo: 'ptfe-machined',
    detail: 'ptfe-press',
    text: 'Precision fluoropolymer components for applications needing chemical resistance, low friction and dimensional stability.',
    items: ['PTFE molded components', 'PTFE seals', 'PTFE bushes', 'Custom fluoropolymer rings', 'Chemical-resistant components', 'Special-profile polymer parts'],
    uses: 'Chemical processing, semiconductor manufacturing, pharmaceutical equipment and specialised industrial systems.',
  },
];

export const categoriesClosing =
  'From a simple custom gasket to a complex engineered polymer assembly, the job is the same: turn your technical requirement into a part you can fit.';

// 02 - the molding processes, with a drawn mold for each
export const processIntro =
  'The right method depends on the component’s geometry, material, tolerances, production quantity and operating conditions. Step through the five and watch what happens inside the mold.';

export const processes = [
  {
    key: 'compression',
    number: '01',
    name: 'Compression Molding',
    subtitle: 'Controlled pressure and heat',
    photo: 'compression-tooling',
    text: 'A measured quantity of compound is placed into a heated mold cavity. The mold closes under controlled pressure and temperature, and the material fills the cavity and takes its shape. Thermoset elastomers cure or vulcanise; PTFE and similar materials go through their own compression, heating and sintering route.',
    points: [
      'Suits a wide variety of elastomer compounds',
      'Suits selected engineering polymers',
      'Useful for custom and low-to-medium-volume production',
      'Supports complex sealing geometries',
      'Flexible tooling configurations',
      'Suits larger and thicker components',
    ],
    uses: 'Custom O-Rings, diaphragms, rubber seals, gaskets, molded bushes and PTFE components.',
  },
  {
    key: 'transfer',
    number: '02',
    name: 'Transfer Molding',
    subtitle: 'Controlled material transfer',
    photo: null,
    text: 'A pre-measured charge goes into a transfer chamber. A plunger forces the material through runners and gates into the mold cavities, where it takes its final shape. The controlled distribution suits parts with more detail than compression molding handles comfortably.',
    points: [
      'Controlled material flow',
      'Suits complex component geometries',
      'Useful for multi-cavity tooling',
      'Suits rubber-to-metal bonded parts',
      'Supports consistent cavity filling',
      'Useful for intricate molded components',
    ],
    uses: 'Precision rubber seals, intricate molded components, bonded rubber-metal assemblies and specialised industrial parts.',
  },
  {
    key: 'injection',
    number: '03',
    name: 'Injection Molding',
    subtitle: 'Efficient and repeatable',
    photo: null,
    text: 'The material is prepared and injected into a closed mold cavity through an engineered runner and gate system. It fills the cavity and develops its geometry through cooling or curing. This is the route when repeatability, production efficiency and higher volumes matter most.',
    points: [
      'High production efficiency',
      'Repeatable component geometry',
      'Suits multi-cavity tooling',
      'Good process automation potential',
      'Reduced manual material handling',
      'Suits selected complex geometries',
    ],
    uses: 'Custom polymer components, precision elastomer parts, molded seals and production-grade engineering components.',
  },
  {
    key: 'bonding',
    number: '04',
    name: 'Rubber-to-Metal Bonding',
    subtitle: 'Elastomer flexibility, metal strength',
    photo: 'rubber-metal-bonded',
    text: 'An elastomer is bonded to a metal insert using a suitable bonding system and a controlled molding process. The metal provides structural support; the rubber provides flexibility, cushioning, sealing or vibration isolation. One part, not an assembly.',
    points: [
      'Integrated rubber and metal construction',
      'Improved structural support',
      'Custom bonding geometries',
      'Vibration isolation capabilities',
      'Application-specific mechanical properties',
      'Removes the need for separate assembly components',
    ],
    uses: 'Bonded bushes, vibration mounts, reinforced diaphragms, industrial supports and specialised mechanical assemblies.',
  },
  {
    key: 'ptfe',
    number: '05',
    name: 'PTFE Compression Molding',
    subtitle: 'Fluoropolymer processing',
    photo: 'ptfe-press',
    text: 'PTFE does not flow like rubber when heated, so it gets its own route: the powder is prepared, the mold is filled, controlled compression is applied, and the preform then goes through a sintering cycle that fuses the particles. The result is often a blank that is machined afterwards.',
    points: [
      'Excellent chemical resistance',
      'Very low friction',
      'Non-stick surface properties',
      'Good electrical insulation',
      'Useful thermal stability',
      'Suits specialised industrial components',
    ],
    uses: 'PTFE bushes, chemical-resistant seals, wear rings, insulating parts, polymer spacers and custom fluoropolymer components.',
  },
];

export const processClosing =
  'Every component needs a method that matches its material, its geometry and its application. Send the drawing and the quantity, and our engineers will say which route suits it.';

// 03 - materials. Temperature values are indicative reference ranges, never guarantees.
export const materialsIntro =
  'Material selection decides durability, flexibility, chemical resistance, temperature performance and mechanical properties. The right material is the one that suits your actual application, not the one with the highest number on the datasheet.';

// `traits` score each material 1-3 against what a customer might care about. The bars are a
// reading aid for the words beside them, not measured test data.
export const materials = [
  {
    key: 'nbr',
    name: 'NBR',
    full: 'Nitrile Butadiene Rubber',
    photo: 'rubber-range',
    text: 'A widely used elastomer known for resistance to petroleum-based oils, fuels and many hydraulic fluids. Flexibility, mechanical strength and oil resistance together make it a common industrial sealing choice.',
    points: ['Good resistance to mineral oils', 'Suits many hydraulic fluids', 'Good mechanical strength', 'Good abrasion resistance', 'Flexible sealing characteristics', 'Available in different hardness grades'],
    temperature: 'Approximately −30°C to +100°C, depending on the compound',
    uses: 'Hydraulic seals, oil seals, O-Rings, gaskets, industrial pumps and fuel-handling systems.',
    traits: { chemical: 2, temperature: 1, wear: 2, flexibility: 3 },
  },
  {
    key: 'fkm',
    name: 'FKM / Viton',
    full: 'Fluoroelastomer',
    photo: 'seals-range',
    text: 'A high-performance elastomer for elevated temperatures, oils, fuels and many aggressive industrial chemicals, with useful thermal stability depending on the formulation.',
    points: ['Good high-temperature performance', 'Resistance to many oils and fuels', 'Good chemical resistance', 'Useful compression-set characteristics', 'Good mechanical durability', 'Suits demanding industrial environments'],
    temperature: 'Approximately −20°C to +250°C for selected compounds and applications',
    uses: 'Oil and gas equipment, chemical-processing systems, automotive components, industrial pumps, high-temperature seals and fuel handling.',
    traits: { chemical: 3, temperature: 3, wear: 2, flexibility: 2 },
  },
  {
    key: 'hnbr',
    name: 'HNBR',
    full: 'Hydrogenated Nitrile Butadiene Rubber',
    photo: null,
    text: 'An enhanced nitrile developed for better resistance to heat, ageing, mechanical wear and demanding conditions. Particularly useful where oils, elevated temperatures and mechanical stress meet.',
    points: ['Improved heat resistance over conventional NBR', 'Good oil resistance', 'Good abrasion resistance', 'High mechanical strength', 'Improved resistance to ageing', 'Suits demanding hydraulic applications'],
    temperature: 'Approximately −30°C to +150°C, depending on the compound',
    uses: 'Oilfield equipment, hydraulic systems, automotive sealing, industrial pumps, heavy-duty machinery and high-performance O-Rings.',
    traits: { chemical: 2, temperature: 2, wear: 3, flexibility: 2 },
  },
  {
    key: 'epdm',
    name: 'EPDM',
    full: 'Ethylene Propylene Diene Monomer',
    photo: 'gaskets-colour',
    text: 'Widely used where water, steam, weather exposure and many polar chemicals are involved, with good resistance to ozone, UV and environmental ageing.',
    points: ['Excellent weather resistance', 'Good ozone resistance', 'Good resistance to water', 'Suits many steam applications', 'Good flexibility', 'Good ageing characteristics'],
    temperature: 'Approximately −40°C to +150°C, depending on compound and service',
    uses: 'Water systems, industrial gaskets, steam equipment, outdoor sealing, cooling systems and general industrial seals.',
    traits: { chemical: 2, temperature: 2, wear: 1, flexibility: 3 },
    watch: 'Not for hydrocarbon oils.',
  },
  {
    key: 'pu',
    name: 'PU',
    full: 'Polyurethane',
    photo: 'pu-parts',
    text: 'An engineering elastomer valued for mechanical strength, abrasion resistance and load-bearing capability, used where friction, repeated contact and wear would destroy a softer rubber.',
    points: ['Excellent abrasion resistance', 'High tensile strength', 'Good tear resistance', 'Good load-bearing capability', 'Good wear performance', 'Multiple hardness options'],
    temperature: 'Application and compound dependent — confirmed with our engineers',
    uses: 'Hydraulic seals, wear rings, industrial bushes, scraper components, rollers and heavy-duty machinery.',
    traits: { chemical: 1, temperature: 1, wear: 3, flexibility: 2 },
  },
  {
    key: 'ptfe',
    name: 'PTFE',
    full: 'Polytetrafluoroethylene',
    photo: 'ptfe-machined',
    text: 'A high-performance fluoropolymer known for excellent chemical resistance, very low friction and non-stick properties, used where conventional materials cannot survive the chemistry or the rubbing.',
    points: ['Excellent chemical resistance', 'Very low coefficient of friction', 'Non-stick characteristics', 'Good electrical insulation', 'Excellent thermal stability', 'Low moisture absorption'],
    temperature: 'Typically up to approximately +260°C for suitable virgin grades in continuous service',
    uses: 'Chemical-processing equipment, PTFE seals, bearings and bushes, insulating components, wear rings and pharmaceutical equipment.',
    traits: { chemical: 3, temperature: 3, wear: 2, flexibility: 1 },
    watch: 'Soft, and can creep under sustained load.',
  },
];

export const materialTraits = [
  { key: 'chemical', label: 'Chemical resistance' },
  { key: 'temperature', label: 'Temperature' },
  { key: 'wear', label: 'Wear and abrasion' },
  { key: 'flexibility', label: 'Flexibility' },
];

export const materialsNote =
  'Every temperature above is an indicative reference range for the material family, not a product guarantee. Compound formulation, hardness, chemical exposure, pressure and manufacturing conditions all change what a real part will do. The bars are a reading aid for the words beside them, not measured test data. Our engineers confirm the final material specification for each application.';

// 04 - the twelve parameters. Explained, deliberately not populated.
export const parameters = [
  ['Shore A hardness', 'How hard the elastomer is, which changes sealing force and installation'],
  ['Tensile strength', 'Resistance to pulling apart before failure'],
  ['Elongation at break', 'How far the material stretches before it tears'],
  ['Compression set', 'How much permanent deformation remains after being squeezed'],
  ['Abrasion resistance', 'How well the surface survives rubbing and sliding'],
  ['Chemical compatibility', 'Whether the material suits your actual process fluid'],
  ['Operating temperature', 'The thermal window the part can work in'],
  ['Dimensional tolerance', 'How closely the finished part matches the drawing'],
  ['Specific gravity', 'Material density, used for weight and batch checks'],
  ['Coefficient of friction', 'How much drag a sliding component produces'],
  ['Tear strength', 'Resistance to a tear spreading once it starts'],
  ['Fluid absorption', 'How much the part swells or changes in service'],
];

export const parametersNote =
  'Mithson does not publish a general figure for any of these. Each value belongs to an exact material grade, a specific compound and a named test method, so it is issued against your part, on your drawing, after review.';

// 05 - molded or machined
export const compareRows = [
  ['Best suited for', 'Repeated production of shaped parts', 'Custom shapes and precision profiles'],
  ['Tooling', 'Requires dedicated mold tooling', 'Uses machining tools and fixtures'],
  ['Production quantity', 'Often economical for repeat production', 'Useful for prototypes and small batches'],
  ['Design changes', 'May require mold modification', 'Often easier through programming changes'],
  ['Geometry', 'Excellent for repeatable geometries', 'Suits profiles that can be machined'],
  ['Material options', 'Depends on molding process and compound', 'Depends on machinable material grades'],
  ['Surface finish', 'Determined by mold and material', 'Determined by machining method'],
  ['Production economics', 'Tooling cost spread over volume', 'Machining time drives unit cost'],
];

export const chooseMolding = [
  'The component has a repeatable geometry',
  'Production quantities justify dedicated tooling',
  'The material suits the selected molding process',
  'A consistent production method is required',
  'The component has complex molded features',
];

export const chooseMachining = [
  'Only a small quantity is required',
  'A prototype is needed before tooling development',
  'The component has specialised profiles',
  'Tight dimensional control is needed on selected features',
  'Material removal is practical for the polymer',
];

export const compareNote =
  'Neither method is universally better. Send the drawing, the material requirement, the quantity and the operating conditions, and we will recommend a route — which is sometimes both, since PTFE parts are often molded into a blank and then machined to size.';

// 06 - industries
export const industries = [
  { key: 'oilgas', icon: 'rig', title: 'Oil and Gas', photo: 'oil-gas-skid', text: 'Custom sealing and polymer components for demanding fluid-handling and energy applications.', items: ['Valve seals', 'Pump components', 'Oilfield sealing elements', 'Wear rings', 'Chemical-resistant components', 'Custom rubber-metal assemblies'] },
  { key: 'automotive', icon: 'car', title: 'Automotive', photo: null, text: 'Precision-molded elastomer and polymer parts for vehicle systems and industrial automotive equipment.', items: ['Rubber bushes', 'Oil seals', 'Vibration isolators', 'Protective components', 'Custom gaskets', 'Fluid-handling seals'] },
  { key: 'life', icon: 'pharma', title: 'Life Sciences', photo: null, text: 'Specialised components for compatible pharmaceutical, laboratory and life-science equipment.', items: ['Process seals', 'Diaphragms', 'Chemical-resistant components', 'Fluid-handling seals', 'Specialised polymer parts'] },
  { key: 'mining', icon: 'mine', title: 'Mining', photo: null, text: 'Wear-resistant and mechanically durable components for equipment running under demanding conditions.', items: ['Wear pads', 'Scraper components', 'Polymer bushes', 'Protective liners', 'Abrasion-resistant parts'] },
  { key: 'semi', icon: 'chip', title: 'Semiconductor', photo: 'ptfe-bushes', text: 'High-performance fluoropolymer and polymer components for specialised equipment.', items: ['Chemical-resistant components', 'PTFE parts', 'Precision polymer components', 'Insulating components', 'Specialised sealing elements'] },
  { key: 'robotics', icon: 'robot', title: 'Robotics', photo: null, text: 'Custom polymer and elastomer components for automation and precision mechanical assemblies.', items: ['Polymer bushes', 'Flexible components', 'Protective seals', 'Vibration-control parts', 'Custom mechanical interfaces'] },
  { key: 'aero', icon: 'plane', title: 'Aerospace', photo: null, text: 'Specialised engineering polymer and elastomer components for compatible aerospace applications.', items: ['Custom sealing components', 'Insulating parts', 'Specialised polymer components', 'Application-specific elastomer assemblies'], note: 'All aerospace work requires material traceability, qualification and the applicable industry approvals.' },
];

// 07 - drawing to delivery
export const steps = [
  { number: '01', title: 'Share your requirement', text: 'Send your component drawing, reference sample, dimensions or application details. We review the functional requirements, the operating conditions and the intended use.' },
  { number: '02', title: 'Engineering review', text: 'Our engineers evaluate the design, material selection, geometry, manufacturing feasibility and dimensional requirements, and suggest changes where they would improve manufacturability or performance.' },
  { number: '03', title: 'Quotation and approval', text: 'The material, manufacturing method, tooling requirements, quantities and expected delivery schedule go to you for approval before anything is cut or built.' },
  { number: '04', title: 'Manufacture and inspection', text: 'The component goes through the agreed process, and the finished parts are inspected against the approved drawing, dimensions and quality requirements.' },
  { number: '05', title: 'Delivery and support', text: 'Parts are prepared, dispatched and delivered to the agreed schedule, and our team stays available for application questions and repeat production.' },
];

// 08 - what to send
export const checklist = [
  '2D drawing or 3D CAD model',
  'Physical sample, if available',
  'Overall dimensions and critical tolerances',
  'Material preference or required specification',
  'Operating temperature',
  'Operating pressure or mechanical load',
  'Chemical or fluid exposure',
  'Required hardness, where applicable',
  'Wear, friction and abrasion requirements',
  'Static or dynamic operating conditions',
  'Annual or batch production quantity',
  'Required delivery date',
  'Industry and equipment details',
  'Applicable regulatory or certification requirements',
];

export const fileFormats = ['PDF', 'DWG', 'DXF', 'STEP', 'STP', 'IGES', 'IGS', 'SolidWorks'];

export const checklistNote =
  'Not sure which material or method suits your application? Send what you have. Half a drawing and a description of the conditions is enough for our engineers to start.';

// 09 - why Mithson
export const whyMithson = [
  { icon: 'drawing', title: 'Application-based engineering', text: 'Solutions developed around the actual operating conditions and functional requirements of your equipment.' },
  { icon: 'flask', title: 'Multiple material options', text: 'A range of elastomers, engineering polymers and advanced fluoropolymers to choose between.' },
  { icon: 'mold', title: 'Manufacturing flexibility', text: 'Support for different molding methods and custom component configurations.' },
  { icon: 'layers', title: 'Design and development support', text: 'Engineering discussion based on drawings, samples and component specifications.' },
  { icon: 'check', title: 'Quality-focused production', text: 'Inspection and verification against the agreed dimensional and technical requirements.' },
  { icon: 'rocket', title: 'Prototype to production', text: 'Support for component development, initial samples and repeat production.' },
  { icon: 'globe', title: 'Industry experience', text: 'Custom sealing and polymer components across several demanding industrial sectors.' },
  { icon: 'support', title: 'Technical support', text: 'Application-focused guidance throughout the development process.' },
];

// 10 - FAQ
export const faqs = [
  { q: 'What are custom molded products?', a: 'Components manufactured using purpose-designed mold cavities to achieve specific shapes, dimensions and material characteristics according to your requirements.' },
  { q: 'What types of components can Mithson manufacture?', a: 'Molded seals, O-Rings, gaskets, diaphragms, polymer bushes, wear components, PTFE parts and rubber-to-metal bonded components, subject to manufacturing capability and project evaluation.' },
  { q: 'Which materials are available?', a: 'Common families are NBR, FKM, HNBR, EPDM, polyurethane and PTFE, along with other engineering polymers and elastomers depending on the application.' },
  { q: 'What is compression molding?', a: 'A measured quantity of material is placed into a mold cavity and shaped using controlled heat and pressure.' },
  { q: 'What is the difference between compression, transfer and injection molding?', a: 'Compression molding shapes material directly inside the cavity. Transfer molding moves material from a transfer chamber into the cavity. Injection molding injects prepared material into a closed mold through a runner and gate system.' },
  { q: 'Can Mithson manufacture parts from customer drawings?', a: 'Yes. Share engineering drawings, CAD models or reference samples for technical evaluation and custom component development.' },
  { q: 'Can custom dimensions be manufactured?', a: 'Dimensions and geometries are evaluated against the design, the material, the tooling and the manufacturing requirements.' },
  { q: 'Is molding better than machining?', a: 'Neither is universally better. Molding is often more economical for repeat production; machining suits prototypes, low quantities and specialised profiles.' },
  { q: 'Can Mithson manufacture prototypes?', a: 'Prototype requirements can be discussed with the engineering team to evaluate suitable materials and manufacturing methods.' },
  { q: 'What information is required for a quotation?', a: 'A drawing or sample, material requirements, dimensions, tolerances, operating conditions and the estimated production quantity.' },
  { q: 'Can different materials be used for the same design?', a: 'Alternative materials may be evaluated where the geometry and the process support them. The final choice depends on application compatibility and performance.' },
  { q: 'Does Mithson support rubber-to-metal bonding?', a: 'Bonded component requirements can be discussed based on the metal insert design, the elastomer compound, the bonding requirements and the intended operating conditions.' },
  { q: 'Can PTFE components be custom manufactured?', a: 'Custom PTFE components are evaluated on dimensions, material grade, operating conditions and the required manufacturing process.' },
  { q: 'How are molded components inspected?', a: 'Inspection may include dimensional verification, visual inspection, material identification and application-specific testing against the approved quality requirements.' },
  { q: 'How do I start a custom manufacturing project?', a: 'Share your drawing, reference sample or technical requirements. Our engineering team reviews the application and discusses the next steps.' },
];

export const closing = [
  'Have a custom component requirement?',
  'Whether you need a custom seal, a molded polymer component, a rubber diaphragm, a PTFE part or a specialised rubber-to-metal assembly, share your drawings, dimensions and application details with our engineering team to begin.',
];

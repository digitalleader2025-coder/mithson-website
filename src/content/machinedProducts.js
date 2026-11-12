// Machined Products page copy, from the approved text supplied by the user (November 2026).
// Hard rules the text sets, followed here:
//   - temperature values are indicative material-level references, never guaranteed component
//     operating limits, and the page repeats that wherever a number appears;
//   - no machine model, capacity, tolerance, production quantity, certification, test capability
//     or delivery timeline is invented;
//   - molding and machining are explained as different routes, never confused;
//   - polymer is never claimed to replace metal in general: suitability is evaluated per case.
// The existing hero image is untouched: it comes from customManufacturing.js.

export const mpHero = {
  label: 'Custom manufacturing',
  title: 'Machined Products.',
  titleAccent: 'Cut to your drawing,',
  titleRest: 'from solid polymer.',
  lead:
    'Mithson manufactures precision-machined engineering polymer components for demanding industrial requirements. From a simple cylindrical bush or sealing ring to a complex custom-engineered component, parts are machined to your dimensions, material and operating conditions.',
  lead2:
    'Built from advanced engineering thermoplastics and fluoropolymers for chemical resistance, mechanical strength, dimensional stability, low friction and wear resistance. Prototype, specialised replacement or production batch — work starts from your drawing, CAD model or sample.',
};

export const heroTags = [
  'Precision CNC machining',
  'Custom drawing-based manufacturing',
  'Advanced engineering polymers',
  'Prototype and production components',
];

export const heroChips = [
  { icon: 'lathe', title: 'CNC turning & milling', text: 'Plus drilling, threading and boring' },
  { icon: 'flask', title: '8 material families', text: 'PTFE through UHMW-PE' },
  { icon: 'drawing', title: 'From your drawing', text: '2D, 3D CAD or a sample' },
  { icon: 'caliper', title: 'Inspected to drawing', text: 'Dimensional and visual' },
];

export const heroSpecs = [
  ['Material options', 'PTFE, modified PTFE, PEEK, POM, UHMW-PE, Nylon, PFA and other compatible engineering polymers'],
  ['Manufacturing', 'CNC turning, CNC milling, drilling, threading, boring and precision finishing'],
  ['Component types', 'Bushes, sleeves, spacers, washers, valve seats, sealing rings, wear rings, guides and custom profiles'],
  ['Operating conditions', 'Application-dependent. Temperature, chemical exposure, mechanical loading and dimensions are evaluated for each material grade and component'],
];

// 01 - what can be machined
export const categoriesIntro =
  'Engineering plastics can be machined into a wide variety of shapes and geometries. These are the eight kinds of component that come up most often, but the list is a starting point, not a limit: if it can be drawn and the polymer can be cut, it can be discussed.';

export const categories = [
  { key: 'bushes', number: '01', name: 'Precision Polymer Bushes', photo: 'parts-bushes-black', text: 'Cylindrical components that support moving shafts, reduce friction and provide a wear-resistant interface inside a mechanical assembly.', uses: ['Industrial machinery', 'Rotating equipment', 'Automotive assemblies', 'Pumps and valves', 'Mechanical guide systems'], materials: 'PEEK, PTFE, POM and Nylon' },
  { key: 'sleeves', number: '02', name: 'PTFE and PEEK Sleeves', photo: 'parts-pfa', text: 'Precision-machined sleeves for insulation, spacing, protection and low-friction mechanical duty.', uses: ['Pump assemblies', 'Valve systems', 'Industrial equipment', 'Chemical processing machinery'], materials: 'PTFE, PEEK and PFA' },
  { key: 'washers', number: '03', name: 'Washers and Spacers', photo: 'parts-ptfe-white', text: 'Custom washers and spacers that hold clearances, distribute load and provide electrical or thermal isolation where the design calls for it.', uses: ['Mechanical assemblies', 'Fastening systems', 'Industrial equipment', 'Electrical insulation'], materials: 'PTFE, POM and PEEK' },
  { key: 'seats', number: '04', name: 'Valve Seats and Sealing Components', photo: 'parts-filled-ptfe', text: 'Precision sealing components that give reliable contact, fluid control and chemical compatibility inside industrial valve assemblies.', uses: ['Ball valves', 'Plug valves', 'Industrial control valves', 'Chemical processing equipment'], materials: 'PTFE, modified PTFE and filled PTFE' },
  { key: 'wear', number: '05', name: 'Wear Rings and Guide Rings', photo: 'parts-wear-ring', text: 'Polymer wear components that control movement, keep metal from touching metal and extend the life of the assembly around them.', uses: ['Hydraulic systems', 'Industrial cylinders', 'Pump assemblies', 'Sliding equipment'], materials: 'Filled PTFE, PEEK and UHMW-PE' },
  { key: 'profiles', number: '06', name: 'Custom Polymer Profiles', photo: 'parts-uhmw-strips', text: 'Profiles machined to your drawing, application and geometry, where nothing standard fits the space.', uses: ['Specialised machinery', 'Custom equipment', 'Industrial automation', 'Engineering assemblies'], materials: 'UHMW-PE, POM and Nylon' },
  { key: 'inserts', number: '07', name: 'Precision Inserts and Bushings', photo: 'parts-nylon-bushes', text: 'Custom polymer inserts for equipment integration, insulation, friction control and specialised mechanical functions.', uses: ['Equipment integration', 'Electrical insulation', 'Friction control', 'Specialised mechanisms'], materials: 'Nylon, POM and PEEK' },
  { key: 'complex', number: '08', name: 'Complex CNC Components', photo: 'parts-custom-blocks', text: 'Components with specialised profiles, grooves, internal bores, recesses, threads and dimensional features, machined to approved engineering specifications.', uses: ['Multi-feature components', 'Internal bores and recesses', 'Threaded assemblies', 'Specialised geometries'], materials: 'POM, PEEK and engineering polymers' },
];

// 02 - the machining sequence. The part is drawn losing material as you step through.
export const processIntro =
  'A machined part starts as a solid rod, tube, plate or molded blank, and every operation takes material away. Step through the sequence and watch the blank become a finished bush.';

export const processSteps = [
  {
    key: 'blank',
    number: '00',
    name: 'The blank',
    photo: 'stock-ptfe',
    text: 'Everything starts as stock: a rod, a tube, a plate or a molded blank. The material grade is chosen before a single cut is made, because it decides how the part will behave in service and how it will behave on the machine.',
    points: ['Rod, tube, plate or molded blank', 'Material grade chosen for the application', 'Stress-relieved where the material needs it'],
  },
  {
    key: 'turning',
    number: '01',
    name: 'CNC turning',
    photo: 'cnc-turning',
    text: 'The polymer workpiece spins against a cutting tool, which forms cylindrical and rotational features. This is the main operation for round parts.',
    points: ['Bushes', 'Sleeves', 'Spacers', 'Cylindrical sealing rings', 'Wear rings', 'Precision inserts'],
  },
  {
    key: 'milling',
    number: '02',
    name: 'CNC milling',
    photo: 'cnc-milling-peek',
    text: 'Rotating cutters move across the material to create flat surfaces, pockets, slots, grooves and the geometries that are not round.',
    points: ['Custom profiles', 'Polymer plates', 'Specialised inserts', 'Mounting components', 'Complex engineering parts'],
  },
  {
    key: 'drilling',
    number: '03',
    name: 'Drilling and threading',
    photo: 'cnc-drilling',
    text: 'Drilling puts accurate holes where the drawing wants them; threading cuts internal or external threads to the specified form.',
    points: ['Mounting holes', 'Threaded polymer inserts', 'Fluid passages', 'Assembly interfaces'],
  },
  {
    key: 'boring',
    number: '04',
    name: 'Boring and internal profiling',
    photo: 'cnc-milling-cad',
    text: 'Boring enlarges and finishes an existing hole to reach the required internal diameter, alignment and surface condition — the operations that decide whether a seal actually seals.',
    points: ['Internal diameter to drawing', 'Bore alignment', 'Internal grooves and recesses', 'Surface condition inside the bore'],
  },
  {
    key: 'inspection',
    number: '05',
    name: 'Finishing and inspection',
    photo: 'inspection',
    text: 'Edges are cleaned up, sealing surfaces are checked, and the finished component is measured against the approved drawing before it leaves.',
    points: ['Outer diameter', 'Inner diameter', 'Overall length', 'Groove dimensions', 'Surface finish', 'Thread accuracy', 'Geometrical tolerances'],
  },
];

export const processNote =
  'Polymers machine very differently from metal. They expand more with heat, and softer grades such as PTFE move under the pressure of clamping and cutting. Sharp tools, gentle holding and controlled heat are what keep a part at the size the drawing asks for.';

// 03 - materials. The radar scores are a reading aid, not measured test data.
export const materialsIntro =
  'Material selection is the most important decision in precision polymer machining. Each engineering plastic offers a different combination of mechanical strength, chemical resistance, thermal stability, friction and dimensional performance. Pick up to three and compare them side by side.';

export const materialAxes = [
  { key: 'chemical', label: 'Chemical resistance' },
  { key: 'temperature', label: 'Temperature' },
  { key: 'strength', label: 'Strength & stiffness' },
  { key: 'wear', label: 'Wear resistance' },
  { key: 'friction', label: 'Low friction' },
  { key: 'stability', label: 'Dimensional stability' },
];

export const materials = [
  {
    key: 'ptfe',
    name: 'PTFE',
    full: 'Polytetrafluoroethylene',
    photo: 'parts-ptfe-white',
    stock: 'stock-ptfe',
    strength: 'Chemical resistance and low friction',
    text: 'A high-performance fluoropolymer known for an exceptionally low coefficient of friction, excellent chemical resistance and non-stick characteristics.',
    points: ['Excellent chemical resistance', 'Very low friction', 'Non-stick surface characteristics', 'Excellent electrical insulation', 'Good thermal stability', 'Suits chemical and fluid-handling environments'],
    uses: 'Valve seats, sealing rings, pump components, chemical processing equipment, insulation components and low-friction sliding parts.',
    temperature: 'Grade dependent. Virgin PTFE is commonly used up to approximately 260°C in continuous service under suitable conditions.',
    watch: 'Soft, and can creep under sustained load.',
    scores: { chemical: 5, temperature: 5, strength: 2, wear: 2, friction: 5, stability: 2 },
  },
  {
    key: 'peek',
    name: 'PEEK',
    full: 'Polyether Ether Ketone',
    photo: 'parts-peek-range',
    stock: 'stock-peek',
    strength: 'Mechanical strength and thermal performance',
    text: 'A high-performance engineering thermoplastic offering excellent mechanical strength, stiffness, wear resistance and thermal performance.',
    points: ['High mechanical strength', 'Excellent dimensional stability', 'Good wear resistance', 'Strong fatigue performance', 'Good chemical resistance', 'High-temperature capability'],
    uses: 'Precision bushes, bearing components, industrial wear parts, valve components, automotive components and semiconductor equipment.',
    temperature: 'Many standard PEEK grades carry continuous service ratings around 250°C.',
    scores: { chemical: 4, temperature: 5, strength: 5, wear: 4, friction: 3, stability: 5 },
  },
  {
    key: 'modified',
    name: 'Modified PTFE',
    full: 'Modified polytetrafluoroethylene',
    photo: 'parts-filled-ptfe',
    stock: null,
    strength: 'Improved creep and dimensional characteristics',
    text: 'Grades designed to improve selected properties of conventional PTFE by modifying the polymer structure, without giving up its chemistry.',
    points: ['Improved creep resistance in suitable grades', 'Better dimensional stability in suitable grades', 'Excellent chemical resistance', 'Low friction', 'Improved sealing performance in suitable applications'],
    uses: 'Precision sealing components, valve seats, chemical processing equipment and industrial sealing systems.',
    temperature: 'Depends on the modification and the grade.',
    scores: { chemical: 5, temperature: 5, strength: 3, wear: 3, friction: 5, stability: 3 },
  },
  {
    key: 'pfa',
    name: 'PFA',
    full: 'Perfluoroalkoxy',
    photo: 'parts-pfa',
    stock: null,
    strength: 'Chemical resistance and high purity',
    text: 'A high-performance fluoropolymer offering excellent chemical resistance, high-purity characteristics and thermal stability.',
    points: ['Excellent chemical resistance', 'High-purity characteristics', 'Thermal stability', 'Suits semiconductor and chemical equipment'],
    uses: 'Chemical processing, semiconductor equipment, fluid-handling components and specialised chemical-resistant parts.',
    temperature: 'Many grades support continuous service around 260°C.',
    scores: { chemical: 5, temperature: 5, strength: 2, wear: 2, friction: 4, stability: 3 },
  },
  {
    key: 'pom',
    name: 'POM',
    full: 'Acetal / Delrin',
    photo: 'parts-pom-gears',
    stock: 'stock-pom',
    strength: 'Stiffness and machinability',
    text: 'An engineering thermoplastic known for stiffness, dimensional stability, low moisture absorption and excellent machinability — it cuts cleanly and holds size.',
    points: ['Good mechanical strength', 'Excellent machinability', 'Good dimensional stability', 'Low moisture absorption', 'Good fatigue resistance'],
    uses: 'Precision bushes, gears, spacers, mechanical guides and industrial fittings.',
    temperature: 'Common grades have substantially lower continuous temperature ratings than PEEK.',
    scores: { chemical: 2, temperature: 2, strength: 4, wear: 3, friction: 3, stability: 5 },
  },
  {
    key: 'nylon',
    name: 'Nylon',
    full: 'Polyamide',
    photo: 'parts-nylon-bushes',
    stock: null,
    strength: 'Toughness and mechanical strength',
    text: 'An engineering thermoplastic offering good mechanical strength, toughness, wear resistance and impact performance at an economical price.',
    points: ['Good mechanical strength', 'Good wear resistance', 'High toughness', 'Good machinability'],
    uses: 'Bushes, rollers, wear components, mechanical supports and industrial guides.',
    temperature: 'Grade dependent. Moisture and temperature both influence performance.',
    watch: 'Moisture absorption must be considered during design.',
    scores: { chemical: 2, temperature: 3, strength: 4, wear: 4, friction: 3, stability: 2 },
  },
  {
    key: 'uhmw',
    name: 'UHMW-PE',
    full: 'Ultra-high-molecular-weight polyethylene',
    photo: 'parts-uhmw-strips',
    stock: null,
    strength: 'Abrasion and impact resistance',
    text: 'Known for excellent abrasion resistance, impact resistance and low-friction sliding — the material you reach for when something abrasive keeps moving across it.',
    points: ['High wear resistance', 'Excellent impact resistance', 'Low moisture absorption', 'Good sliding characteristics', 'Good chemical resistance'],
    uses: 'Wear strips, guide rails, conveyor components, sliding pads and industrial liners.',
    temperature: 'Generally suitable for lower-temperature applications than PEEK.',
    scores: { chemical: 4, temperature: 1, strength: 2, wear: 5, friction: 4, stability: 3 },
  },
  {
    key: 'custom',
    name: 'Other polymers',
    full: 'Application-specific grades',
    photo: 'parts-custom-blocks',
    stock: null,
    strength: 'Whatever the application actually needs',
    text: 'Filled grades, reinforced grades and other engineering polymers can be evaluated where none of the families above is the right answer for the chemistry, the load or the temperature.',
    points: ['Filled and reinforced grades', 'Application-specific compounds', 'Evaluated against your conditions', 'Availability confirmed per enquiry'],
    uses: 'Specialised components where a standard grade does not meet the requirement.',
    temperature: 'Confirmed per grade with our engineering team.',
    scores: { chemical: 3, temperature: 3, strength: 3, wear: 3, friction: 3, stability: 3 },
  },
];

export const materialsNote =
  'Every temperature above is an indicative material-level reference, not a guaranteed component operating limit. Actual suitability depends on the grade, pressure, mechanical load, chemical exposure, continuous or intermittent operation and the design itself. The radar scores are a reading aid for the words beside them, not measured test data.';

// 04 - molded or machined
export const compareRows = [
  ['Design flexibility', 'Suits components that can be produced from a defined mold design', 'Custom geometries produced directly from polymer stock'],
  ['Tooling', 'Requires dedicated tooling and mold development', 'Typically uses standard machining fixtures and cutting tools'],
  ['Production quantity', 'Often economical for larger volumes once tooling is paid for', 'Particularly useful for prototypes, small batches and specials'],
  ['Design changes', 'Changes may require modifying the mold', 'Often a change to the machining program or the drawing'],
  ['Material selection', 'Depends on available molding grades and process compatibility', 'Depends on suitable polymer stock and machining feasibility'],
  ['Dimensional capability', 'Depends on material, geometry, process and quality control', 'Depends on material, geometry, process and quality control'],
];

export const compareNote =
  'Machining is an excellent option for custom components, prototypes, specialised profiles and anywhere tooling flexibility matters. Molding may be more economical for suitable high-volume production. Many PTFE parts use both: the material is molded into a blank, then machined to size.';

// 05 - industries
export const industries = [
  { key: 'oilgas', icon: 'rig', title: 'Oil & Gas', photo: null, items: ['Valve seats', 'Pump bushes', 'Sealing rings', 'Wear components', 'Chemical-resistant inserts'] },
  { key: 'automotive', icon: 'car', title: 'Automotive', photo: 'ind-transmission', items: ['Transmission components', 'Precision spacers', 'Polymer bushes', 'Sliding components', 'Wear-resistant parts'] },
  { key: 'life', icon: 'pharma', title: 'Life Sciences', photo: null, items: ['Chemical-resistant components', 'PTFE parts', 'Specialised fluid-handling components', 'Precision polymer fittings'] },
  { key: 'semi', icon: 'chip', title: 'Semiconductor', photo: 'ind-semiconductor', items: ['PEEK components', 'PTFE components', 'PFA components', 'Electrical insulation components', 'Chemical-resistant parts'] },
  { key: 'mining', icon: 'mine', title: 'Mining', photo: null, items: ['UHMW-PE wear strips', 'Industrial liners', 'Sliding pads', 'Wear-resistant bushes'] },
  { key: 'aero', icon: 'plane', title: 'Aerospace', photo: null, items: ['Lightweight engineering polymer parts', 'Specialised precision components', 'Wear-resistant mechanical interfaces'] },
  { key: 'robotics', icon: 'robot', title: 'Robotics & Automation', photo: null, items: ['Polymer bearings', 'Precision guides', 'Bushes and spacers', 'Sliding components'] },
];

// 06 - the twelve engineering parameters
export const parameters = [
  ['Dimensional tolerance', 'The acceptable dimensional variation specified on the drawing'],
  ['Surface finish', 'The quality of the finished surface, which drives friction, sealing contact and how parts interact'],
  ['Hardness', 'Resistance to indentation and surface deformation'],
  ['Tensile strength', 'The ability to withstand pulling forces'],
  ['Compressive strength', 'The ability to withstand compressive loading'],
  ['Coefficient of friction', 'How much drag arises between contacting surfaces'],
  ['Wear resistance', 'Resistance to material loss during sliding or repeated contact'],
  ['Thermal expansion', 'How much the component changes size when the temperature changes'],
  ['Chemical compatibility', 'Suitability when exposed to specific chemicals and process fluids'],
  ['Moisture absorption', 'How much moisture the material takes up, which affects dimensional stability'],
  ['Creep resistance', 'Resistance to gradual deformation under sustained load'],
  ['Dimensional stability', 'The ability to hold required dimensions under real operating conditions'],
];

export const parametersNote =
  'Precision is more than dimensions. Mithson does not publish a general figure for any of these, because each value belongs to an exact material grade and a named test method; it is issued against your part, after review.';

// 07 - drawing to delivery
export const steps = [
  { number: '01', title: 'Share your requirement', text: 'Provide your engineering drawing, 3D CAD model, sample or component specifications.' },
  { number: '02', title: 'Engineering review', text: 'Our team reviews the material, geometry, dimensions, tolerances and intended application.' },
  { number: '03', title: 'Quotation and approval', text: 'You receive the manufacturing proposal and quotation for review and approval before work starts.' },
  { number: '04', title: 'Manufacturing and inspection', text: 'The approved component goes through the applicable process and dimensional inspection.' },
  { number: '05', title: 'Delivery and support', text: 'Finished components are prepared for dispatch, with inspection documentation where applicable.' },
];

// 08 - what to send
export const checklist = [
  '2D engineering drawing with dimensions and tolerances',
  '3D CAD model, if available',
  'Required polymer material or preferred grade',
  'Operating temperature',
  'Operating pressure and mechanical loading',
  'Chemical or process-fluid exposure',
  'Friction and wear requirements',
  'Static or dynamic operating conditions',
  'Required surface finish',
  'Component quantity',
  'Expected production frequency',
  'Special inspection or documentation requirements',
];

export const checklistNote =
  'The more we know about the application, the better we can evaluate the material, the machining process and the manufacturing requirements. A partial drawing plus a description of the conditions is enough to start.';

// 09 - FAQ
export const faqs = [
  { q: 'What are machined products?', a: 'Components manufactured by removing material from engineering polymer stock using precision machining processes.' },
  { q: 'Which materials can be used?', a: 'Common materials include PTFE, PEEK, modified PTFE, POM, UHMW-PE, Nylon and PFA. The selection depends on the intended application.' },
  { q: 'What is the difference between PTFE and PEEK?', a: 'PTFE is known for excellent chemical resistance and low friction. PEEK offers higher mechanical strength, stiffness and wear performance in many engineering applications.' },
  { q: 'Can you manufacture to customer drawings?', a: 'Custom components are evaluated from 2D drawings, 3D CAD models, physical samples and dimensional specifications.' },
  { q: 'What is CNC turning?', a: 'A machining process for cylindrical components such as bushes, sleeves, spacers and sealing rings, where the workpiece spins against the cutting tool.' },
  { q: 'What is CNC milling?', a: 'Rotating cutting tools create slots, pockets, flat surfaces and complex geometries that turning cannot produce.' },
  { q: 'Can machined PTFE be used in chemical applications?', a: 'PTFE resists many chemicals. Suitability still has to be evaluated against the specific chemical, its concentration, the temperature and the mechanical conditions.' },
  { q: 'Is PEEK suitable for high-temperature applications?', a: 'PEEK is a high-performance thermoplastic with excellent thermal and mechanical properties. The actual operating limit depends on the grade and the component design.' },
  { q: 'What is the difference between virgin and filled PTFE?', a: 'Virgin PTFE contains no reinforcing fillers. Filled PTFE incorporates selected additives to improve properties such as wear resistance, creep resistance or dimensional stability.' },
  { q: 'Can polymer components replace metal ones?', a: 'In suitable applications, engineering polymers can reduce weight, friction, corrosion issues and maintenance. Whether that applies to your part has to be established by mechanical and application-specific analysis, not assumed.' },
  { q: 'What information is needed for a quotation?', a: 'A technical drawing, material preference, dimensions, tolerances, operating conditions and the required quantity.' },
  { q: 'Can you manufacture prototypes?', a: 'Prototype and small-batch requirements can be discussed, depending on material availability, component complexity and manufacturing feasibility.' },
  { q: 'Why is dimensional inspection important?', a: 'It verifies that the finished component meets the approved dimensional requirements and will fit its intended assembly.' },
  { q: 'Which industries use machined polymer components?', a: 'Oil & Gas, Automotive, Life Sciences, Semiconductor, Mining, Aerospace, Robotics and Industrial Automation, among others.' },
];

export const closing = [
  'Ready to manufacture your precision machined component?',
  'Whether you need a precision PTFE valve seat, a PEEK bush, a specialised sealing ring, a polymer spacer, a wear-resistant component or a complex custom-machined part, share your technical drawings, CAD models or reference samples. We will review the requirement and discuss material selection, machining feasibility and the right manufacturing approach.',
];

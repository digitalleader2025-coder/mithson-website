// Industries > Energy - Oil & Gas page copy, from the approved text supplied by the user
// (November 2026). Hard rules the text sets, followed here:
//   - no pressure or temperature figure is applied across the whole portfolio: the three
//     published pressure references stay attached to the products they belong to;
//   - LNG is referenced at approximately -162°C. -253°C is liquid hydrogen, not LNG, and
//     does not appear anywhere on this page;
//   - API, NORSOK, BAM and ISO are described as the standards the equipment and the material
//     qualification refer to, never as certifications Mithson holds for every product;
//   - only ISO 9001:2015 and the QIMA audit are stated as Mithson's own certifications;
//   - no test facility, qualification report or sour-service approval is invented.

export const ogHero = {
  label: 'Oil & gas sealing solutions',
  title: 'Oil & Gas',
  titleAccent: 'Sealing Solutions.',
  titleRest: 'Precision-engineered for critical oilfield applications.',
  lead:
    'In oil and gas, sealing reliability decides equipment integrity, operational safety and process efficiency. Mithson supplies specialised polymer and elastomer sealing for wellhead equipment, Christmas tree valves, blowout preventers, well service pumps, pipeline valves and LNG systems.',
  lead2:
    'The materials — PTFE, modified PTFE, PEEK, NBR, HNBR, FKM, FEPM and FFKM — are selected against the pressure, temperature, chemistry, mechanical loading and fluid your equipment actually sees, not from a catalogue.',
};

export const heroTags = [
  'High-pressure sealing components',
  'High-temperature sealing solutions',
  'Sour-gas-compatible material options',
  'Chemical-resistant polymer seals',
  'Spring-energized sealing technology',
  'RGD-resistant elastomer options',
  'Cryogenic sealing applications',
  'Custom-engineered sealing components',
];

export const heroChips = [
  { icon: 'rig', title: '12 oil & gas products', text: 'Wellhead, well service and pipeline valve' },
  { icon: 'flask', title: '8 material families', text: 'PTFE through FFKM' },
  { icon: 'book', title: 'API 6A & API 6D', text: 'The equipment these parts go into' },
  { icon: 'snow', title: 'LNG at ~−162°C', text: 'Cryogenic valve sealing' },
];

// 01 - the three oil & gas product families, each linking to its existing page.
// Downhole tools has its own page (/industries/downhole-tools) and is kept off this one.
// `image` is the key of the existing Mithson product photo; `label` matches productItems.oilGasItems.
export const familiesIntro =
  'Three product families cover the equipment from the wellhead and the pump pad to the pipeline and the LNG terminal. Every part shown is a real Mithson product, and each one is explained in full further down this page.';

export const families = [
  {
    key: 'wellhead',
    number: '01',
    name: 'API 6A Wellhead Equipment Seals',
    tagline: 'Precision sealing for wellhead and Christmas tree equipment',
    path: '/oil-gas-seal/api-6a-wellhead-equipment-seal',
    text: 'Wellhead and Christmas tree equipment runs under demanding pressure, temperature and fluid conditions, and the sealing components hold the pressure boundary, stop external leakage and protect the equipment interfaces.',
    products: [
      { name: 'Stem Packing Set', image: 'stemPacking', job: 'Controls leakage along the moving valve stem', materials: 'PEEK, Elgiloy / stainless-steel spring, filled PTFE', where: 'Wellhead gate valve' },
      { name: 'Stem Seal', image: 'stemSeal', job: 'A polymer jacket plus a spring that holds sealing contact on the stem', materials: 'PEEK, Elgiloy / stainless-steel spring, filled PTFE', where: 'Wellhead gate valve' },
      { name: 'OD / ID Face Seal', image: 'faceSeal', job: 'Seals the inner and outer faces of the seat assembly', materials: 'PEEK, Elgiloy / stainless-steel spring, filled PTFE', where: 'Wellhead gate valve' },
      { name: 'BOP Seal', image: 'bop', job: 'Holds sealing contact around the ram, pipe or equipment interface', materials: 'NBR, HNBR', where: 'Blowout preventer' },
    ],
    uses: 'API 6A gate valves, wellhead equipment, Christmas tree valve assemblies, blowout preventers and well-control equipment.',
  },
  {
    key: 'well-service',
    number: '02',
    name: 'Well Service Equipment Seals',
    tagline: 'Reliable sealing for high-cycle pump operations',
    path: '/oil-gas-seal/well-service-equipment-seal',
    text: 'Hydraulic fracturing, cementing and fluid pumping put reciprocating pump components through repeated movement, pressure swings, abrasive fluids and constant contact with the sealing surfaces.',
    products: [
      { name: 'Plunger Packing Set', image: 'plunger', job: 'Seals the moving plunger against process-fluid leakage', materials: 'NBR / fabric, FKM / fabric, HNBR / fabric', where: 'Plunger pump' },
      { name: 'Pump Packing Set', image: 'pumpPacking', job: 'Seals around the moving pump elements during operation', materials: 'NBR, HNBR, FKM, filled PTFE', where: 'Mud and frac pump' },
      { name: 'Valve Seat Insert', image: 'valveSeat', job: 'Seals the pump valve against its seat on every stroke', materials: 'PU', where: 'Mud and frac pump' },
      { name: 'Mud Pump Liner Seal', image: 'linerSeal', job: 'Seals the liner in the mud pump fluid end', materials: 'PU, NBR, HNBR', where: 'Mud pump' },
    ],
    uses: 'Oilfield plunger pumps, well service pumps, hydraulic fracturing equipment, cementing pumps and high-pressure fluid pumping systems.',
    note: 'Fabric-reinforced packing and elastomer compounds are selected against the pump design, process fluid, pressure, temperature and cycling, not chosen from a shelf.',
  },
  {
    key: 'api6d',
    number: '03',
    name: 'API 6D Ball Valve & LNG Seals',
    tagline: 'Pipeline, ball valve and cryogenic sealing',
    path: '/oil-gas-seal/api-6d-ball-valve-lng-seal',
    text: 'Ball valves in gas transmission, pipelines and LNG facilities need reliable sealing at several interfaces at once: body, bonnet, seat retainer and the ball-seat contact, through pressure, temperature swings and repeated cycles.',
    products: [
      { name: 'Body-Bonnet Seal', image: 'bodyBonnet', job: 'Seals the pressure-containing joint between body and bonnet', materials: 'Carbon-filled PTFE, Elgiloy spring', where: 'Trunnion ball valve', pressure: 'Up to 10,000 psi, published for this configuration' },
      { name: 'Seat Retainer', image: 'seatRetainer', job: 'Stops fluid leaking behind the valve seat', materials: 'PTFE, Elgiloy spring, PEEK', where: 'Trunnion ball valve', pressure: 'Up to 10,000 psi, published for this configuration' },
      { name: 'PEEK Seat Ring', image: 'seatRing', job: 'Forms the sealing interface between ball and seat', materials: 'PEEK', where: 'Trunnion and floating ball valve' },
      { name: 'LNG Seal', image: 'lngSeal', job: 'Holds sealing contact through cryogenic thermal cycling', materials: 'PTFE, Elgiloy spring', where: 'LNG ball valve', pressure: 'Around −162°C service' },
    ],
    uses: 'Trunnion-mounted and floating ball valves, gas transmission systems, LNG ball valves and cryogenic gas-handling equipment.',
  },
];

export const pressureNote =
  'The 10,000 psi figures above are published references for those specific API 6D configurations, not ratings for the whole portfolio. Final limits depend on the design, the material grade, the operating temperature, the installation and the qualification.';

// 02 - the six sealing types, with a drawn cross-section each
export const sealingIntro =
  'Different sealing components do different jobs depending on where they sit, how the equipment is built and what it runs in. Six arrangements cover almost everything in an oilfield.';

export const sealingTypes = [
  {
    key: 'static',
    name: 'Static sealing',
    short: 'Static',
    text: 'Prevents leakage between two stationary mating surfaces. Nothing moves, so the seal only has to resist the pressure and the chemistry.',
    examples: ['O-rings', 'Face seals', 'Body-bonnet seals', 'Gaskets', 'Static seat seals'],
  },
  {
    key: 'dynamic',
    name: 'Dynamic sealing',
    short: 'Dynamic',
    text: 'Holds sealing contact between components that move relative to each other, so friction, wear and the surface finish all matter as much as the pressure.',
    examples: ['Stem seals', 'Plunger packings', 'Piston seals', 'Rod seals'],
  },
  {
    key: 'spring',
    name: 'Spring-energized sealing',
    short: 'Spring-energized',
    text: 'A metallic spring inside a polymer jacket supplies an energizing force, so the seal keeps pushing against the mating surface even as pressure, temperature and wear change the fit.',
    examples: ['Gate valve stem seals', 'Ball valve seals', 'LNG cryogenic seals'],
  },
  {
    key: 'antiextrusion',
    name: 'Anti-extrusion sealing',
    short: 'Anti-extrusion',
    text: 'A rigid back-up ring sits beside the primary seal and blocks the clearance gap, so pressure cannot force the softer seal out through it.',
    examples: ['High-pressure valves', 'Wellhead gate valves', 'Hydraulic and oilfield systems'],
  },
  {
    key: 'rgd',
    name: 'RGD-resistant sealing',
    short: 'RGD-resistant',
    text: 'Specialised elastomer compounds resist the damage caused when high-pressure gas absorbed into the rubber is released faster than it can diffuse back out.',
    examples: ['Sour gas systems', 'High-pressure wellhead equipment', 'Gas compression equipment'],
  },
  {
    key: 'cryogenic',
    name: 'Cryogenic sealing',
    short: 'Cryogenic',
    text: 'Polymer arrangements designed for low-temperature service and thermal cycling, where the metal and the polymer shrink by different amounts on the way down.',
    examples: ['LNG valves', 'Cryogenic pipelines', 'Gas transfer systems'],
  },
];

// 03 - materials
export const materialsIntro =
  'Oilfield sealing materials face different combinations of pressure, temperature, chemical exposure, gas decompression, mechanical load and movement. These eight cover the range Mithson works with.';

export const materials = [
  { key: 'ptfe', name: 'PTFE', family: 'Fluoropolymer', strength: 'Chemical resistance and low friction', uses: 'Valve seats, spring-energized seals, seat retainer seals, stem seals, LNG jackets and packing', watch: 'Creep and extrusion under sustained load must be designed around.' },
  { key: 'filled', name: 'Modified / filled PTFE', family: 'Fluoropolymer composite', strength: 'Improved mechanical and dimensional behaviour', uses: 'Valve seats, chevron packing, spring-energized seals and anti-friction components', watch: 'Properties depend on the filler and the grade.' },
  { key: 'peek', name: 'PEEK', family: 'Engineering thermoplastic', strength: 'Mechanical strength and wear performance', uses: 'Back-up rings, valve seat rings, precision sealing components and pump parts', watch: 'Chemical compatibility and temperature must be checked per grade.' },
  { key: 'nbr', name: 'NBR', family: 'Elastomer', strength: 'Petroleum-oil compatibility', uses: 'O-rings, pump packing, packer elements and BOP seals', watch: 'Not universally suitable for high-temperature or sour-gas service.' },
  { key: 'hnbr', name: 'HNBR', family: 'Elastomer', strength: 'Strength with improved thermal performance', uses: 'RGD O-rings, BOP seals, plunger packing, wellhead and pump seals', watch: 'Confirm compound-specific RGD and sour-service qualification.' },
  { key: 'fkm', name: 'FKM', family: 'Elastomer', strength: 'Hydrocarbon and temperature resistance', uses: 'O-rings, packer elements, wellhead seals and chemical-resistant components', watch: 'Compatibility varies a great deal with compound chemistry, steam, amines and sour gas.' },
  { key: 'fepm', name: 'FEPM', family: 'Elastomer', strength: 'Selected aggressive chemical environments', uses: 'Chemical-resistant O-rings, specialised oilfield seals and high-temperature process equipment', watch: 'Verify compatibility against the exact process fluids.' },
  { key: 'ffkm', name: 'FFKM', family: 'Perfluoroelastomer', strength: 'Broad chemical and thermal performance', uses: 'Specialised high-performance O-rings and critical aggressive-fluid service', watch: 'A specialised grade: select on compound-specific chemical and temperature data.' },
];

export const materialSteps = [
  'Identify the operating fluid',
  'Determine operating and peak temperatures',
  'Establish working pressure and pressure cycling',
  'Identify sour-gas exposure and H₂S concentration',
  'Evaluate rapid gas decompression requirements',
  'Consider mechanical movement and friction',
  'Assess extrusion gaps and dimensional requirements',
  'Check compound-specific compatibility documentation',
];

export const materialsNote =
  'No single pressure or temperature rating applies to every seal. Minimum, continuous and intermittent service temperatures, the pressure-temperature relationship and cryogenic suitability are all confirmed by material grade and seal construction, against the actual datasheet, drawing and qualification report.';

// 04 - operating conditions
export const conditions = [
  { icon: 'gauge', title: 'Pressure capability', text: 'Working pressure, peak pressure, pressure cycling, differential pressure, extrusion clearance, seal geometry and how the material deforms under all of it.' },
  { icon: 'thermo', title: 'Temperature performance', text: 'Minimum, continuous and maximum intermittent temperature, thermal cycling, heat generated in service, and how the material properties shift across that range.' },
  { icon: 'flask', title: 'Chemical compatibility', text: 'Crude oil, natural gas, H₂S, CO₂, drilling and completion fluids, brines, hydraulic fluids, fracturing fluids, methanol, amines and process chemicals — checked against the exact composition, concentration, temperature and exposure time.' },
  { icon: 'burst', title: 'Rapid gas decompression', text: 'Gas absorbed into an elastomer under pressure is released faster than it can diffuse out, causing internal blistering, cracking and cavities. Compound selection and qualification testing are the only answers.' },
  { icon: 'shield', title: 'Extrusion resistance', text: 'Under pressure an elastomer deforms into the clearance gap. Material hardness, seal geometry, the gap itself, PEEK back-up rings and support elements all control it.' },
  { icon: 'snow', title: 'Cryogenic performance', text: 'Low-temperature service needs materials and designs that keep their mechanical and sealing properties through cooling and repeated thermal cycling.' },
];

// 05 - standards
export const standardsIntro =
  'Oilfield sealing components are designed and selected with reference to the equipment specification, the material requirements, the operating environment and the applicable industry standards.';

export const standards = [
  { key: 'api6a', code: 'API 6A', full: 'Specification for Wellhead and Tree Equipment', text: 'Sets requirements for the performance, design, materials, testing and inspection of wellhead and Christmas tree equipment.', applies: 'Wellhead equipment, Christmas tree assemblies, associated gate valves and pressure-containing equipment.' },
  { key: 'api6d', code: 'API 6D', full: 'Specification for Pipeline and Piping Valves', text: 'Covers design, manufacturing, materials, quality control, assembly, testing and documentation for pipeline valves.', applies: 'Ball valves, gate valves, check valves and plug valves.' },
  { key: 'norsok', code: 'NORSOK M-710', full: 'Qualification of non-metallic sealing materials', text: 'A recognised qualification reference for non-metallic sealing materials in demanding petroleum service, including sour-gas and rapid gas decompression testing.', applies: 'Elastomer qualification, RGD-resistant compounds and sour-service material evaluation.' },
  { key: 'iso2', code: 'ISO 23936-2', full: 'Non-metallic materials in contact with media related to oil and gas production — Elastomers', text: 'Requirements and guidance for elastomeric materials exposed to oilfield production media.', applies: 'Elastomer selection and evaluation.' },
  { key: 'iso1', code: 'ISO 23936-1', full: 'Non-metallic materials — Thermoplastics', text: 'Covers thermoplastic materials used in contact with oil and gas production media.', applies: 'PTFE, PEEK and other thermoplastic sealing components.' },
  { key: 'bam', code: 'BAM', full: 'Material approval or assessment', text: 'Shown only where the specific compound or material holds the applicable documented approval.', applies: 'Named materials with documentation, not the portfolio.' },
];

export const standardsNote =
  'Designing a component for API-related equipment is not the same as that component being API certified. Mithson holds ISO 9001:2015 and is QIMA audited. A compound being qualified, a product being tested, and a facility holding a certification are three different things, and this page states only the ones Mithson can show the document for.';

// 06 - the value chain
export const valueChain = [
  {
    key: 'upstream',
    name: 'Upstream',
    subtitle: 'Exploration and production',
    photo: 'offshore',
    text: 'Drilling, well completion, production and well-control equipment, exposed to demanding pressure, temperature and fluid conditions.',
    items: ['Wellhead gate valves', 'Christmas tree assemblies', 'Blowout preventers', 'Plunger pumps', 'Mud and frac pumps', 'Well service equipment'],
    materials: 'HNBR, FKM, FFKM, PTFE and PEEK, according to the application.',
  },
  {
    key: 'midstream',
    name: 'Midstream',
    subtitle: 'Transportation and storage',
    photo: 'lng',
    text: 'Moving, processing and storing crude oil and natural gas, including the cryogenic end of the chain.',
    items: ['Pipeline ball valves', 'Pipeline gate valves', 'Gas transmission systems', 'Compressor equipment', 'LNG transfer systems', 'Storage and isolation valves'],
    materials: 'PTFE, PEEK, FKM and specialised elastomers, depending on the equipment and media.',
  },
  {
    key: 'downstream',
    name: 'Downstream',
    subtitle: 'Refining and processing',
    photo: 'refinery',
    text: 'Refining, gas processing and chemical production, where the seal has to stay compatible with complex process fluids at temperature.',
    items: ['Process valves', 'Chemical handling equipment', 'Pump systems', 'Refinery equipment', 'Hydrocarbon processing systems', 'High-temperature fluid handling'],
    materials: 'PTFE, modified PTFE, PEEK, FKM and FFKM, according to the actual chemistry.',
  },
];

// 07 - equipment matrix
export const equipment = [
  { key: 'tree', title: 'Christmas tree valves', components: ['Stem packing', 'Spring-energized stem seals', 'Seat seals', 'Elastomer O-rings'], purpose: 'Maintain sealing integrity in wellhead gate valve assemblies.' },
  { key: 'bop', title: 'Blowout preventers', components: ['BOP elastomer seals', 'Specialised sealing elements'], purpose: 'Support the sealing functions of well-control equipment.' },
  { key: 'pumps', title: 'Well service pumps', components: ['Plunger packing sets', 'Pump packing sets', 'Valve seat inserts', 'Mud pump liner seals'], purpose: 'Control leakage around reciprocating pumping components.' },
  { key: 'ball', title: 'Ball valves', components: ['PEEK seat rings', 'Body-bonnet seals', 'Seat retainer seals'], purpose: 'Maintain sealing contact at the critical valve interfaces.' },
  { key: 'lng', title: 'LNG valves', components: ['Spring-energized PTFE seals', 'Cryogenic sealing arrangements'], purpose: 'Support sealing performance in low-temperature gas-handling equipment.' },
];

// 08 - how we work
export const steps = [
  { number: '01', title: 'Understand the application', text: 'The equipment, the operating conditions, the process media and what the seal actually has to do.' },
  { number: '02', title: 'Material evaluation', text: 'Review suitable polymer and elastomer options against the operating environment, not against a default.' },
  { number: '03', title: 'Design review', text: 'Evaluate the seal geometry, dimensions, interfaces and installation requirements.' },
  { number: '04', title: 'Manufacturing', text: 'Manufacture the approved component to the applicable drawing and process requirements.' },
  { number: '05', title: 'Quality review', text: 'Carry out the applicable inspection and documentation activities against the approved requirements.' },
  { number: '06', title: 'Customer support', text: 'Stay available for technical clarification throughout the project and for repeat orders.' },
];

// 09 - what to send
export const checklist = [
  { title: 'Equipment details', items: ['Equipment manufacturer', 'Equipment model', 'Valve or pump type', 'Application location'] },
  { title: 'Component information', items: ['Existing seal part number', 'Drawing or CAD file', 'Dimensions', 'Groove details', 'Reference sample, if available'] },
  { title: 'Operating conditions', items: ['Normal working pressure', 'Maximum pressure', 'Minimum and maximum temperatures', 'Pressure cycling', 'Static or dynamic movement'] },
  { title: 'Process media', items: ['Crude oil', 'Natural gas', 'H₂S exposure', 'CO₂ exposure', 'Brine', 'Drilling and fracturing fluids', 'Other chemicals'] },
  { title: 'Material requirements', items: ['Preferred polymer or elastomer', 'Required hardness', 'RGD qualification requirements', 'Chemical compatibility requirements'] },
  { title: 'Commercial requirements', items: ['Required quantity', 'Prototype or production', 'Expected delivery schedule', 'Documentation requirements'] },
];

// 10 - FAQ
export const faqs = [
  { q: 'What are oil and gas seals?', a: 'Components that prevent unwanted leakage of liquids or gases in equipment used for drilling, production, processing, transportation and storage.' },
  { q: 'What is the difference between API 6A and API 6D?', a: 'API 6A covers wellhead and tree equipment; API 6D covers pipeline and piping valves. Both address equipment-level design and performance, but for different equipment.' },
  { q: 'What materials are commonly used?', a: 'PTFE, modified PTFE, PEEK, NBR, HNBR, FKM, FEPM and FFKM. The choice depends on temperature, pressure, process media and mechanical requirements.' },
  { q: 'What is a spring-energized seal?', a: 'A polymer sealing jacket with a metallic spring inside that supplies an energizing force to help maintain sealing contact.' },
  { q: 'What is an RGD-resistant O-ring?', a: 'An O-ring made from a specialised compound designed to resist damage caused by rapid gas decompression after exposure to high-pressure gas.' },
  { q: 'Why is HNBR used in oilfield sealing?', a: 'In suitable formulations it offers better mechanical and thermal performance than conventional NBR, and certain qualified compounds suit demanding sour-gas and RGD environments.' },
  { q: 'What is the difference between FKM and FFKM?', a: 'FKM is a fluoroelastomer for hydrocarbon and higher-temperature service. FFKM is a perfluoroelastomer for more demanding chemical and thermal environments. Suitability depends on the compound.' },
  { q: 'What is a PEEK back-up ring?', a: 'A rigid ring that supports the primary elastomer seal and helps prevent extrusion into the clearance gap under pressure.' },
  { q: 'What is a BOP seal?', a: 'A specialised sealing component used in blowout preventer equipment to support well-control sealing functions.' },
  { q: 'What does a ball valve seat ring do?', a: 'It creates the sealing interface between the ball and the valve seat assembly, controlling the flow of process media.' },
  { q: 'What is a cryogenic seal?', a: 'A seal designed for very low temperatures, where material flexibility, thermal contraction and sealing contact all have to be considered together.' },
  { q: 'What temperature is required for LNG sealing?', a: 'LNG is commonly stored and transported at approximately −162°C. The actual valve and seal requirements depend on the equipment design and operating conditions.' },
  { q: 'Can PTFE be used in high-pressure valves?', a: 'It is widely used, but creep, extrusion and deformation have to be designed around. Filled PTFE, modified PTFE, PEEK support components and suitable seal geometry are the usual answers.' },
  { q: 'What causes seal failure in oilfield equipment?', a: 'Incorrect material selection, excessive pressure, temperature exposure, chemical incompatibility, extrusion, wear, installation damage and rapid gas decompression.' },
  { q: 'What is sour-gas service?', a: 'Applications involving hydrogen sulphide. Material selection and qualification have to account for the specific H₂S environment and the applicable requirements.' },
  { q: 'Can Mithson provide custom sealing components?', a: 'Submit drawings, samples and equipment specifications for engineering evaluation and a custom component enquiry.' },
  { q: 'How do I request a quotation?', a: 'Share the component drawing, material preference, operating conditions and required quantity through the enquiry section or the sales email.' },
];

export const disclaimer =
  'All application guidance on this page is indicative. Final material selection, pressure ratings, temperature limits and product suitability must be confirmed against the exact product design, material grade, equipment specification and operating conditions.';

export const closing = [
  'Looking for reliable oil & gas sealing?',
  'From high-pressure wellhead equipment to well service pumps and cryogenic valve applications, share your technical drawing, equipment details and operating conditions, and our engineering team will review them.',
];

// Unsplash photographs, used under the Unsplash licence. Credit is shown on the page.
export const photoCredits = [
  { photo: 'Offshore platforms', by: 'Ben Wicks', on: 'Unsplash' },
  { photo: 'Refinery', by: 'Maksym Kaharlytskyi', on: 'Unsplash' },
  { photo: 'Gas processing plant', by: 'Buddy AN', on: 'Unsplash' },
  { photo: 'LNG terminal', by: 'Markus Kammermann', on: 'Unsplash' },
  { photo: 'Pipeline valve', by: '夜 咔罗', on: 'Unsplash' },
];

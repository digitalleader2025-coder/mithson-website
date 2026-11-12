// Diaphragm - AODD page copy, from the approved text supplied by the user (November 2026).
// Hard rules the text sets, followed here:
//   - the pump and its components are kept apart: Mithson supplies components, not complete pumps;
//   - the diaphragm connecting shaft and the air-valve pilot mechanism are named as different things;
//   - check balls and valve seats are always explained as a working pair;
//   - PTFE is never described as behaving like an elastomer;
//   - no pressure rating, universal temperature limit, product code, dimension or certification
//     is invented: anything unconfirmed reads "Contact Mithson for confirmed specifications";
//   - no claim of universal chemical compatibility, FDA or ATEX compliance.
// Temperature and material data come from src/content/productItems.js.

export const aoddHero = {
  label: 'AODD pump components',
  title: 'Diaphragm — AODD.',
  titleAccent: 'Air in.',
  titleRest: 'Fluid through.',
  lead:
    'Mithson offers specialised components and sealing solutions for Air-Operated Double Diaphragm pumps, supporting reliable fluid transfer across demanding industrial environments. The range includes diaphragms, pilot shafts, PTFE balls, PTFE valve seats, PTFE O-rings and associated sealing components.',
  lead2:
    'These components perform the essential jobs inside the pumping assembly: fluid separation, reciprocating movement, directional flow control and sealing. Material selection depends on the pumped medium, temperature, pressure, mechanical loading and pump design.',
};

export const heroTags = [
  'AODD diaphragm components',
  'PTFE check balls and valve seats',
  'Pilot shafts and sealing components',
  'Fluoropolymer engineering materials',
  'Chemical-resistant component options',
  'Application-specific replacement solutions',
];

export const heroChips = [
  { icon: 'thermo', title: 'Temperature', text: 'Application and material dependent' },
  { icon: 'gauge', title: 'Pressure', text: 'Set by the pump model and component design' },
  { icon: 'flask', title: 'Materials', text: 'PTFE and other confirmed options' },
  { icon: 'layers', title: 'Components', text: 'Six families, supplied to your pump' },
];

// 01 - what an AODD pump is, before the components that go in it
export const techIntro =
  'An Air-Operated Double Diaphragm pump is a positive displacement pump powered by compressed air. It uses two flexible diaphragms connected through a central shaft assembly. Compressed air is supplied to one diaphragm chamber while the opposite chamber exhausts, and that alternating movement creates suction and discharge inside the two liquid chambers.';

export const techCycle = [
  {
    title: 'The suction stroke',
    text: 'The diaphragm moves away from the liquid chamber. The chamber volume increases, internal pressure falls, and the pressure difference allows liquid in through the suction check valve.',
  },
  {
    title: 'The discharge stroke',
    text: 'The diaphragm moves toward the liquid chamber. The chamber volume decreases and the liquid is pushed out through the discharge check valve.',
  },
  {
    title: 'Direction control',
    text: 'Check balls and valve seats regulate the direction of liquid movement and help prevent reverse flow. The complete cycle repeats continuously while compressed air is supplied.',
  },
];

export const techAdvantages = [
  'Compressed-air-powered operation',
  'Positive displacement pumping',
  'Self-priming capability under suitable installation conditions',
  'Ability to handle many viscous fluids',
  'Suitable for various chemical-transfer applications',
  'No electric motor directly driving the pumping mechanism',
  'Adaptable material configurations',
  'Intermittent operation capability',
];

export const techNote =
  'Mithson supplies components for these pumps. Mithson does not manufacture complete AODD pumps, and nothing on this page is a specification for any pump manufacturer’s assembly.';

// 02 - the interactive cut-away hotspots. `at` is a position on the drawing, in %.
export const hotspots = [
  { key: 'air', name: 'Air inlet and distribution valve', at: [50, 34], text: 'Compressed air enters here. The air-distribution system directs it alternately to one air chamber and then the other, which is what makes the pump cycle.' },
  { key: 'diaphragm', name: 'Diaphragms', at: [37.5, 52], text: 'Two flexible membranes, one each side, separating the air chamber from the liquid chamber. Mithson supplies these.', mithson: true },
  { key: 'shaft', name: 'Connecting shaft', at: [50, 51], text: 'Links the two diaphragms so that as one performs its discharge stroke the other performs its suction stroke. Mithson supplies these.', mithson: true },
  { key: 'ball-s', name: 'Check balls, suction side', at: [26, 81], text: 'Lift from their seats to let liquid into the chamber, and close to stop it returning. Mithson supplies these.', mithson: true },
  { key: 'ball-d', name: 'Check balls, discharge side', at: [74, 23], text: 'Lift to let liquid out into the discharge manifold, and close during the suction stroke. Mithson supplies these.', mithson: true },
  { key: 'seat', name: 'Valve seats', at: [26, 27], text: 'The contact surface each ball closes against. Ball and seat always work as a matched pair. Mithson supplies these.', mithson: true },
  { key: 'manifold-s', name: 'Suction manifold', at: [50, 91], text: 'Carries the pumped liquid into the two liquid chambers. Part of the pump body, not a Mithson component.' },
  { key: 'manifold-d', name: 'Discharge manifold', at: [50, 9], text: 'Collects the pumped liquid from both chambers and carries it out of the pump. Part of the pump body, not a Mithson component.' },
];

// 03 - the component families. `spec` keys match src/content/productItems.js.
export const components = [
  {
    key: 'diaphragm',
    number: '01',
    name: 'AODD Pump Diaphragms',
    short: 'Diaphragms',
    subtitle: 'Flexible pumping membranes for controlled fluid transfer',
    job: 'Separates air from liquid, and moves the fluid',
    spec: 'Diaphragm',
    photo: 'diaphragm',
    detail: 'diaphragm-face',
    text: 'Diaphragms create a flexible barrier between the compressed-air chamber and the liquid chamber. Their reciprocating movement changes the volume of the liquid chamber, creating the pressure differences required for suction and discharge. Two diaphragms are connected through a central shaft arrangement so they move in coordinated opposite directions.',
    note: 'The diaphragm must withstand repeated flexing, pressure variation, mechanical loading and exposure to the pumped fluid, so it directly influences the reliability and operating life of the pump.',
    points: [
      'Flexible reciprocating membrane',
      'Separation of air and liquid chambers',
      'Alternating suction and discharge',
      'Chemical-resistant material options',
      'Repeated flex-cycle performance',
      'Application-specific diaphragm construction',
      'Dimensional compatibility with the pump model',
    ],
    materials: ['PTFE', 'PTFE with NBR backing', 'PTFE with EPDM backing', 'PTFE with FKM backing', 'EPDM', 'NBR', 'TPE and other confirmed constructions'],
    materialsNote: 'Not every construction is available in every size. Availability is confirmed per enquiry.',
    uses: 'Chemical transfer, industrial fluid handling, paint and coating transfer, chemical processing, compatible pharmaceutical and process-fluid applications, and general industrial pumping.',
    asks: ['Pump make and model', 'Outer diameter', 'Inner diameter', 'Overall thickness', 'Mounting arrangement', 'Wetted material', 'Backing material', 'Pumped fluid'],
  },
  {
    key: 'shaft',
    number: '02',
    name: 'AODD Pump Pilot Shafts',
    short: 'Pilot Shafts',
    subtitle: 'Precision components for coordinated pump movement',
    job: 'Transfers the movement between both diaphragms',
    spec: 'Pilot Shaft',
    photo: 'shaft',
    detail: 'shaft-detail',
    text: 'The central shaft arrangement transfers reciprocating movement between the two diaphragm assemblies. As the air-distribution system changes the pressure between the air chambers, the diaphragm assembly moves and carries that motion through the connected shaft, which is what makes the suction and discharge alternate across both liquid chambers.',
    note: 'The diaphragm connecting shaft and the pilot mechanism inside an air-distribution valve are different components in many pump designs. Tell us which one you need, and the pump model it belongs to.',
    points: [
      'Precision dimensional requirements',
      'Mechanical movement transfer',
      'Assembly compatibility',
      'Corrosion-resistant material options where specified',
      'Suitable surface finish',
      'Application-specific dimensions',
    ],
    uses: 'AODD pump assemblies, diaphragm connection arrangements, and replacement or maintenance assemblies.',
    asks: ['Shaft diameter', 'Overall length', 'Thread configuration', 'Material grade', 'Surface finish', 'Pump model compatibility'],
  },
  {
    key: 'ball',
    number: '03',
    name: 'PTFE Check Balls',
    short: 'PTFE Balls',
    subtitle: 'Reliable one-way flow control',
    job: 'Opens and closes so fluid moves one way only',
    spec: 'PTFE Ball',
    photo: 'ball',
    detail: 'balls-group',
    text: 'Check balls operate with their corresponding valve seats to control the direction of liquid flow. On the suction stroke the suction-side ball lifts from its seat and fluid enters the chamber, while the discharge-side valve stays closed. On the discharge stroke the suction-side ball closes and the discharge-side ball lifts, so the liquid moves into the discharge manifold.',
    note: 'A ball is never specified on its own. Its diameter, surface quality, density and seat geometry together decide whether the valve seals.',
    points: [
      'One-way flow control',
      'Chemical resistance for compatible fluids',
      'Low-friction surface',
      'Dimensional accuracy',
      'Suitable sealing contact',
      'Application-specific ball sizes',
      'Repeated operating-cycle capability',
    ],
    uses: 'AODD chemical pumps, industrial fluid transfer, chemical processing, compatible corrosive-fluid applications and industrial liquid-handling systems.',
    asks: ['Ball diameter', 'Material grade', 'Density', 'Specific gravity', 'Dimensional tolerance', 'Surface finish', 'Fluid compatibility', 'Operating temperature'],
  },
  {
    key: 'seat',
    number: '04',
    name: 'PTFE Valve Seats',
    short: 'PTFE Valve Seats',
    subtitle: 'Precision seating surfaces for reliable check valve operation',
    job: 'The surface the ball closes against',
    spec: 'PTFE Seat',
    photo: 'seat',
    detail: 'seat-detail',
    text: 'Valve seats provide the contact surface against which the check balls close. They sit within the pump’s check-valve assembly and work together with the balls to regulate liquid flow. Through every cycle the balls lift from and return to their seats, so the seating surface must keep a suitable contact geometry to prevent reverse flow and internal leakage.',
    note: 'Correct selection depends on the pumped fluid, the ball material, the operating conditions and the pump construction. A seat and the ball that runs on it are chosen together.',
    points: [
      'Precision seating geometry',
      'Chemical resistance for compatible fluids',
      'Low-friction characteristics',
      'Compatible ball-to-seat interface',
      'Dimensional stability',
      'Application-specific seat profiles',
    ],
    uses: 'AODD check-valve assemblies, chemical transfer pumps, industrial process-fluid pumps and compatible corrosive-fluid systems.',
    asks: ['Inner diameter', 'Outer diameter', 'Overall height', 'Seating angle', 'Contact geometry', 'Material grade', 'Surface finish', 'Pump model compatibility'],
  },
  {
    key: 'oring',
    number: '05',
    name: 'PTFE O-Rings and Sealing Components',
    short: 'PTFE O-Rings',
    subtitle: 'Reliable sealing at critical assembly interfaces',
    job: 'Seals the joints between pump parts',
    spec: 'PTFE O-Ring',
    photo: 'oring',
    detail: 'oring-detail',
    text: 'O-rings and other sealing components prevent unwanted leakage between stationary mating surfaces inside the pump assembly, at compatible interfaces between housings, manifolds, valve assemblies and other components. PTFE sealing elements offer chemical resistance and low friction.',
    note: 'PTFE does not behave like a conventional elastomer and has limited elastic recovery. Depending on the design, modified PTFE, an encapsulated construction or an elastomer-based arrangement may be the right answer instead.',
    points: [
      'Chemical resistance for compatible media',
      'Low-friction properties',
      'Dimensional stability',
      'Stationary interface sealing',
      'Application-specific geometry',
      'Suitable sealing construction',
    ],
    uses: 'Housing, manifold and valve-assembly interfaces within compatible AODD pump assemblies.',
    asks: ['Inner diameter', 'Outer diameter', 'Cross-sectional diameter', 'Material grade', 'Groove dimensions', 'Installation compression', 'Fluid compatibility'],
  },
  {
    key: 'assembly',
    number: '06',
    name: 'The Complete Component Assembly',
    short: 'Working Together',
    subtitle: 'How the five families form one pumping system',
    job: 'Five parts, one coordinated pumping action',
    spec: null,
    photo: 'balls-group',
    detail: 'pumps-installed',
    text: 'None of these components works alone. The diaphragms create the volume change; the shaft makes the two sides work in opposition; the balls and seats turn that movement into one-way flow; the O-rings keep the assembled joints tight. A fault in any one of them shows up as a performance problem in the pump as a whole.',
    note: 'This is why a replacement enquiry starts with the pump make and model, not with a single part number.',
    points: [
      'Diaphragms change the liquid chamber volume',
      'The shaft keeps both sides in opposition',
      'Balls and seats set the direction of flow',
      'O-rings seal the stationary joints',
      'All of it repeats while air is supplied',
    ],
    uses: 'Replacement and refurbishment of compatible AODD pump assemblies.',
    asks: ['Pump manufacturer', 'Series and model', 'Original part numbers', 'Pumped fluid and concentration', 'Operating conditions'],
  },
];

// 04 - components found in complete pumps, clearly marked
export const extras = [
  { key: 'gaskets', title: 'Pump gaskets', text: 'Seal between stationary assembly interfaces, including housings, covers and manifolds. Material selection depends on fluid compatibility, temperature and assembly compression.' },
  { key: 'backup', title: 'Back-up elements', text: 'Some diaphragm constructions incorporate a supporting elastomeric layer that provides flexibility and mechanical support behind the wetted face.' },
  { key: 'supports', title: 'Valve ball supports', text: 'Selected pump configurations use extra components, sometimes called ball cages, to keep the check balls correctly positioned as they move.' },
  { key: 'fluid-seals', title: 'Fluid-side seals', text: 'Prevent unwanted leakage at compatible wetted interfaces within the liquid section of the pump.' },
  { key: 'plates', title: 'Diaphragm support plates', text: 'Distribute mechanical loading and assist diaphragm attachment in designs that incorporate them.' },
];

export const extrasNote =
  'These components exist in complete AODD pump designs. Which of them Mithson can supply depends on the part, the pump model and the drawing, so ask rather than assume.';

// 05 - the two-stroke demonstration
export const strokeIntro =
  'The two diaphragms are mechanically connected through a shaft arrangement, so as one performs its discharge stroke the other performs its suction stroke. The pump repeats that process to create continuous alternating fluid transfer. Step through the cycle, or let it run.';

export const strokeStages = [
  { key: 'air', label: 'Air supply', name: '01 — Air supply', highlight: 'air', side: 'left', text: 'Compressed air enters the pump through the air inlet and the air-distribution system directs it into one air chamber.' },
  { key: 'move', label: 'Diaphragm movement', name: '02 — First diaphragm movement', highlight: 'diaphragm', side: 'left', text: 'Air pressure pushes the first diaphragm toward its liquid chamber. The connected shaft moves the opposite diaphragm in the reverse direction.' },
  { key: 'suction', label: 'Suction', name: '03 — Suction', highlight: 'ball-s', side: 'left', text: 'The opposite liquid chamber increases in volume. The resulting pressure difference allows liquid in through the suction-side check ball.' },
  { key: 'discharge', label: 'Discharge', name: '04 — Discharge', highlight: 'ball-d', side: 'left', text: 'The first liquid chamber decreases in volume and liquid is pushed through the discharge-side check valve into the discharge manifold.' },
  { key: 'reversal', label: 'Reversal', name: '05 — Reversal', highlight: 'air', side: 'right', text: 'At the end of the stroke the air-distribution mechanism switches the compressed-air supply to the opposite chamber.' },
  { key: 'cycle', label: 'Alternating cycle', name: '06 — Alternating cycle', highlight: 'shaft', side: 'right', text: 'The direction of diaphragm movement reverses, and the suction and discharge operations exchange sides. The cycle then repeats.' },
];

// 06 - materials
export const materials = [
  {
    key: 'ptfe',
    name: 'PTFE',
    full: 'Polytetrafluoroethylene',
    text: 'A fluoropolymer widely used in industrial sealing and chemical handling because of its broad chemical resistance and low-friction characteristics.',
    points: ['Excellent resistance to many chemicals', 'Low coefficient of friction', 'Low moisture absorption', 'Good thermal stability', 'Low surface energy', 'Limited elastic recovery compared with conventional elastomers'],
    uses: 'PTFE diaphragms, check balls, valve seats and sealing components.',
    watch: 'Cold flow, deformation and construction',
  },
  {
    key: 'nbr',
    name: 'NBR',
    full: 'Nitrile rubber',
    text: 'An elastomer commonly selected where compatibility with many petroleum-based oils and suitable mechanical flexibility are required.',
    points: ['Elasticity', 'Oil resistance for compatible fluids', 'Good general-purpose sealing behaviour', 'Different compound formulations'],
    uses: 'Diaphragm backing, gaskets, O-rings and compatible pump seals.',
    watch: 'Chemical and temperature compatibility',
  },
  {
    key: 'epdm',
    name: 'EPDM',
    full: 'Ethylene propylene diene monomer',
    text: 'An elastomer commonly used where resistance to water, steam and many compatible aqueous chemical environments is required.',
    points: ['Good weather resistance', 'Good ozone resistance', 'Suitable water and steam compatibility in selected grades', 'Flexible elastomeric construction'],
    uses: 'Diaphragm backing, gaskets and elastomeric sealing elements.',
    watch: 'Avoid unsuitable hydrocarbon exposure',
  },
  {
    key: 'fkm',
    name: 'FKM',
    full: 'Fluoroelastomer',
    text: 'Used in selected industrial sealing applications where thermal and chemical resistance are important.',
    points: ['Good thermal resistance', 'Chemical resistance for compatible media', 'Industrial sealing performance', 'Different compound formulations'],
    uses: 'Compatible diaphragm backing, gaskets and specialised sealing components.',
    watch: 'Confirm specific chemical compatibility',
  },
  {
    key: 'tpe',
    name: 'TPE / TPV',
    full: 'Thermoplastic elastomers',
    text: 'Combine selected elastomeric and thermoplastic characteristics in one material.',
    points: ['Flexible construction', 'Elastic recovery', 'Different hardness options', 'Application-dependent chemical resistance'],
    uses: 'Selected diaphragm constructions and pump sealing components.',
    watch: 'Compound-specific fluid and temperature compatibility',
  },
];

export const materialsCompare = [
  ['PTFE', 'Chemical resistance and low friction', 'Cold flow, deformation and construction'],
  ['NBR', 'Oil resistance and elasticity', 'Chemical and temperature compatibility'],
  ['EPDM', 'Water and steam resistance in suitable grades', 'Avoid unsuitable hydrocarbon exposure'],
  ['FKM', 'Thermal and chemical resistance', 'Confirm specific chemical compatibility'],
  ['TPE / TPV', 'Flexibility and elasticity', 'Compound-specific fluid and temperature compatibility'],
];

export const materialsNote =
  'No material here is universally compatible. Every selection has to be validated against the actual chemical, its concentration, the temperature, the pressure and the operating cycle.';

// 07 - applications
export const applications = [
  { icon: 'flask', title: 'Chemical processing', items: ['Chemical transfer', 'Acid and alkali handling', 'Chemical dosing', 'Process-fluid transfer'], need: 'Chemical compatibility, appropriate wetted materials and reliable sealing.' },
  { icon: 'paint', title: 'Paint and coatings', items: ['Paint transfer', 'Coating materials', 'Industrial colourants', 'Compatible solvents and process fluids'], need: 'Chemical compatibility, material suitability and consistent fluid handling.' },
  { icon: 'pharma', title: 'Pharmaceutical processing', items: ['Compatible process liquids', 'Specialised fluid transfer', 'Production support systems'], need: 'Appropriate material selection, cleanability and documented regulatory compliance where required.' },
  { icon: 'food', title: 'Food and beverage', items: ['Compatible food-processing fluids', 'Liquid ingredient transfer', 'Processing support systems'], need: 'Suitable wetted materials, cleanability and applicable food-contact approvals.' },
  { icon: 'mine', title: 'Mining and minerals', items: ['Slurry transfer', 'Dewatering', 'Process-liquid movement', 'Compatible abrasive-fluid applications'], need: 'Appropriate wear-resistant materials and valve geometry.' },
  { icon: 'rig', title: 'Oil and gas', items: ['Compatible industrial fluid transfer', 'Lubrication fluids', 'Process-liquid handling'], need: 'Chemical compatibility, pressure suitability and application-specific component materials.' },
  { icon: 'water', title: 'Water and wastewater', items: ['Water transfer', 'Chemical dosing', 'Wastewater treatment', 'Compatible industrial liquids'], need: 'Corrosion resistance and fluid-compatible seals.' },
  { icon: 'layers', title: 'General manufacturing', items: ['Industrial liquid transfer', 'Process equipment', 'Production support', 'Machinery maintenance'], need: 'Reliable operation and compatible replacement components.' },
];

export const applicationsNote =
  'These are application areas, not blanket approvals. Pharmaceutical and food-contact work needs documented approvals for the specific material grade, which Mithson confirms per order.';

// 08 - specification tables. Everything unconfirmed says the same thing.
const ASK = 'Contact Mithson for confirmed specifications';

export const specTables = [
  {
    key: 'diaphragm',
    title: 'Diaphragm specifications',
    rows: [
      ['Product code', ASK], ['Diaphragm type', ASK], ['Outer diameter', ASK], ['Inner diameter', ASK],
      ['Overall thickness', ASK], ['Mounting configuration', ASK], ['Wetted material', 'PTFE and other confirmed options'],
      ['Backing material', 'NBR, EPDM, FKM or TPE, where the construction uses one'],
      ['Operating temperature', 'Published against the component below'], ['Compatible fluids', 'Checked against the stated fluid'],
      ['Pump model compatibility', ASK], ['Flex-cycle requirements', ASK],
    ],
  },
  {
    key: 'shaft',
    title: 'Pilot shaft specifications',
    rows: [
      ['Product code', ASK], ['Material grade', ASK], ['Overall length', ASK], ['Shaft diameter', ASK],
      ['Thread configuration', ASK], ['Surface finish', ASK], ['Dimensional tolerance', ASK], ['Assembly compatibility', ASK],
    ],
  },
  {
    key: 'ball',
    title: 'PTFE check ball specifications',
    rows: [
      ['Product code', ASK], ['Ball diameter', ASK], ['Material grade', 'PTFE'], ['Density', ASK],
      ['Specific gravity', ASK], ['Dimensional tolerance', ASK], ['Surface finish', ASK], ['Chemical compatibility', 'Checked against the stated fluid'],
    ],
  },
  {
    key: 'seat',
    title: 'PTFE valve seat specifications',
    rows: [
      ['Product code', ASK], ['Material grade', 'PTFE'], ['Inner diameter', ASK], ['Outer diameter', ASK],
      ['Height', ASK], ['Seating angle', ASK], ['Surface finish', ASK], ['Dimensional tolerance', ASK], ['Ball compatibility', 'Confirmed with the matching ball'],
    ],
  },
  {
    key: 'oring',
    title: 'PTFE O-ring specifications',
    rows: [
      ['Product code', ASK], ['Material grade', 'PTFE'], ['Inner diameter', ASK], ['Outer diameter', ASK],
      ['Cross-section', ASK], ['Groove dimensions', ASK], ['Dimensional tolerance', ASK], ['Fluid compatibility', 'Checked against the stated fluid'],
    ],
  },
];

export const specParameters = [
  ['Operating temperature', 'Depends on the material formulation and the pump configuration.'],
  ['Pressure', 'Depends on the complete pump design, component geometry and operating conditions.'],
  ['Flow rate', 'Depends on pump size, air supply, discharge pressure, fluid viscosity and installation.'],
  ['Maximum operating speed', 'Confirmed from the pump manufacturer’s own specifications.'],
  ['Chemical compatibility', 'Evaluated for the actual fluid and the actual material grade.'],
];

export const specNote =
  'Mithson does not publish a pressure or temperature rating for an AODD component on its own, because the figure belongs to the complete pump, not to the part. Where a value is needed it comes from a confirmed Mithson datasheet for that component.';

// 09 - chemical compatibility enquiry
export const chemIntro =
  'Chemical compatibility is the first thing to settle. The diaphragm, check balls, valve seats, O-rings and every other wetted component has to withstand exposure to the pumped fluid, under the conditions it actually runs in.';

export const chemFactors = [
  'Chemical name', 'Chemical concentration', 'Fluid temperature', 'Operating pressure',
  'Exposure duration', 'Fluid viscosity', 'Presence of suspended solids', 'Cleaning chemicals', 'Cyclic mechanical movement',
];

export const chemFields = [
  { key: 'chemical', label: 'Chemical or fluid name', placeholder: 'For example: sodium hypochlorite' },
  { key: 'concentration', label: 'Chemical concentration', placeholder: 'For example: 12%' },
  { key: 'temperature', label: 'Operating temperature', placeholder: 'Minimum, normal and maximum' },
  { key: 'pressure', label: 'Pumping pressure', placeholder: 'Operating and maximum' },
  { key: 'component', label: 'Required component', options: ['Diaphragm', 'Pilot shaft', 'PTFE check ball', 'PTFE valve seat', 'PTFE O-ring', 'Several components'] },
  { key: 'pump', label: 'Pump manufacturer and model', placeholder: 'Make, series and model' },
];

export const chemResult =
  'Material compatibility must be verified against the specific chemical concentration, operating temperature and component construction. Send these details to our engineers and they will come back with a reviewed recommendation rather than a generic compatibility claim.';

// 10 - selection guide
export const selectionSteps = [
  { title: 'Pump model', text: 'Identify the original pump manufacturer, series and model.' },
  { title: 'Component type', text: 'Select diaphragm, pilot shaft, PTFE ball, valve seat or O-ring.' },
  { title: 'Component dimensions', text: 'Provide the original part dimensions and, where you have one, the drawing.' },
  { title: 'Pumped fluid', text: 'Identify the chemical name and its concentration.' },
  { title: 'Temperature', text: 'Provide minimum, normal and maximum operating temperature.' },
  { title: 'Pressure', text: 'Provide the operating and maximum permitted pressure.' },
  { title: 'Material', text: 'Specify the existing material or the material grade you need.' },
  { title: 'Operating cycle', text: 'Provide the operating frequency and the expected service conditions.' },
  { title: 'Installation', text: 'Verify the mounting arrangement and component compatibility.' },
];

// 11 - maintenance
export const maintenance = [
  { icon: 'diaphragm', title: 'Diaphragm inspection', text: 'Inspect for cracks, deformation, swelling, chemical attack and fatigue.' },
  { icon: 'shaft', title: 'Shaft inspection', text: 'Check for dimensional wear, surface damage and alignment problems.' },
  { icon: 'ball', title: 'Check ball inspection', text: 'Inspect the balls for surface damage, deformation and contamination.' },
  { icon: 'seat', title: 'Valve seat inspection', text: 'Check the seating surface for wear, scratches, chemical damage and deposits.' },
  { icon: 'ring', title: 'O-ring inspection', text: 'Check sealing elements for cuts, compression damage, deformation and chemical deterioration.' },
  { icon: 'check', title: 'Assembly verification', text: 'Verify component compatibility, correct installation, fastening and assembly alignment.' },
];

export const maintenanceSafety =
  'Always isolate the compressed-air supply, depressurise the pump and follow the original equipment manufacturer’s maintenance instructions before disassembly.';

// 12 - troubleshooting
export const troubleshooting = [
  { title: 'Diaphragm failure', causes: ['Excessive flex fatigue', 'Chemical incompatibility', 'Incorrect operating conditions', 'Mechanical damage', 'Improper installation'] },
  { title: 'Check ball leakage', causes: ['Ball deformation', 'Foreign particles', 'Damaged seating surface', 'Incorrect ball dimensions', 'Material degradation'] },
  { title: 'Valve seat damage', causes: ['Abrasive particles', 'Chemical attack', 'Mechanical wear', 'Incorrect ball-to-seat geometry'] },
  { title: 'O-ring leakage', causes: ['Incorrect dimensions', 'Chemical swelling', 'Installation damage', 'Compression problems', 'Material incompatibility'] },
  { title: 'Shaft wear', causes: ['Misalignment', 'Mechanical wear', 'Incorrect installation', 'Surface damage'] },
  { title: 'Reduced pump performance', causes: ['Damaged diaphragms', 'Incorrect check-valve operation', 'Blocked suction lines', 'Air supply problems', 'Excessive discharge pressure', 'Fluid viscosity outside the operating capability'] },
];

export const troubleshootingNote =
  'This is general engineering guidance. An actual failure cause has to be established by inspecting the complete pump assembly, not the failed part alone.';

// 13 - custom work
export const customStages = [
  { title: 'Component identification', text: 'Identify the required diaphragm, shaft, ball, seat or sealing component.' },
  { title: 'Dimensional review', text: 'Evaluate component drawings, dimensions and installation interfaces.' },
  { title: 'Material selection', text: 'Review suitable PTFE and compatible elastomeric material options.' },
  { title: 'Application validation', text: 'Evaluate fluid compatibility, pressure, temperature and mechanical conditions.' },
  { title: 'Quality verification', text: 'Inspect the component against the approved drawing and product requirements.' },
];

// 14 - documents
export const documents = [
  'AODD diaphragm technical datasheet',
  'PTFE check ball datasheet',
  'PTFE valve seat datasheet',
  'PTFE O-ring datasheet',
  'Pilot shaft dimensional drawing',
  'PTFE material compatibility guide',
  'AODD component installation guide',
  'Component inspection checklist',
];

export const documentsNote =
  'These are issued after a technical review of your application, so there is nothing to download here. Tell us which you need and the engineering team will send the approved version.';

// 15 - FAQ
export const faqs = [
  { q: 'What is an AODD pump?', a: 'An Air-Operated Double Diaphragm pump is a positive displacement pump that uses compressed air to move two connected diaphragms and transfer fluid through alternating suction and discharge strokes.' },
  { q: 'What is the function of an AODD diaphragm?', a: 'The diaphragm separates the compressed-air chamber from the liquid chamber and creates the movement needed for fluid suction and discharge.' },
  { q: 'Why are PTFE diaphragms used?', a: 'PTFE offers chemical resistance across many compatible chemical environments and is used where wetted-material compatibility matters.' },
  { q: 'What is the function of PTFE check balls?', a: 'PTFE check balls work with valve seats to control one-way fluid movement and prevent reverse flow.' },
  { q: 'What is the function of a PTFE valve seat?', a: 'A valve seat provides the contact surface against which the check ball closes to control liquid movement.' },
  { q: 'What is the purpose of an AODD pilot shaft?', a: 'Depending on the component design, the shaft assembly transfers reciprocating movement between the diaphragm assemblies. In some pump designs the connecting shaft and the air-valve pilot mechanism are distinct components, so tell us which one you need.' },
  { q: 'Why are O-rings required in AODD pumps?', a: 'O-rings provide sealing between compatible stationary assembly interfaces and help prevent leakage.' },
  { q: 'Which material is best for chemical applications?', a: 'There is no single material suitable for every chemical. PTFE, EPDM, NBR and FKM have different chemical and temperature compatibility characteristics.' },
  { q: 'Can PTFE components handle corrosive chemicals?', a: 'PTFE has broad chemical resistance, but actual compatibility must be verified for the specific chemical, its concentration and the temperature.' },
  { q: 'How do I select the correct replacement diaphragm?', a: 'Provide the pump manufacturer, model, diaphragm dimensions, original part number, fluid type and operating conditions.' },
  { q: 'What causes diaphragm failure?', a: 'Common causes include fatigue, chemical incompatibility, incorrect operating conditions, mechanical damage and improper installation.' },
  { q: 'What causes AODD pump check-valve leakage?', a: 'Potential causes include damaged balls, worn seats, contamination, incorrect dimensions and unsuitable material selection.' },
  { q: 'Can Mithson provide application-specific components?', a: 'You can submit your component drawings and application requirements for technical evaluation and confirmation of manufacturing capabilities.' },
  { q: 'How can I request a quotation?', a: 'Share the component type, part number, dimensions, material, quantity and operating conditions through the Mithson enquiry channel.' },
];

export const closing = [
  'Ready to specify AODD components?',
  'Reliable fluid transfer begins with the right pump components. Whether you require AODD diaphragms, pilot shafts, PTFE check balls, valve seats or sealing elements, Mithson can help evaluate suitable component solutions for your technical requirements. Share your pump model, component drawings, dimensions and operating conditions with our team.',
];

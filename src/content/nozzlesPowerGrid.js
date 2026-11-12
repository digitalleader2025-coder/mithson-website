// Nozzles - Power Grid page copy, from the approved text supplied by the user (November 2026).
// Hard rules the text sets, followed here:
//   - no temperature, pressure, voltage or current-interruption rating is published, because
//     those come from validated material data and circuit-breaker qualification tests;
//   - the arcing nozzle and the insulating nozzle are kept apart, and the page says the exact
//     distinction depends on the breaker architecture;
//   - PTFE ablation under arc exposure is described as a designed behaviour, not a defect;
//   - the nozzle is always presented as part of the complete interruption system;
//   - only ISO 9001:2015 and the QIMA audit are stated as Mithson certifications.

export const nzHero = {
  label: 'High-voltage switchgear',
  title: 'Nozzles —',
  titleAccent: 'Power Grid.',
  titleRest: 'Where the arc is quenched.',
  lead:
    'Mithson manufactures high-performance PTFE nozzles for demanding high-voltage electrical switching. The range of arcing and insulating nozzles is developed for SF₆ gas-insulated circuit breakers, where electrical insulation, controlled gas flow, arc interruption and dimensional precision decide whether the switchgear works.',
  lead2:
    'When contacts separate under load an electrical arc forms. The nozzle directs insulating gas through that arcing region, helping cool the arc and supporting interruption. Made from high-purity PTFE using Cold Isostatic Pressing, for consistent density and dimensional quality.',
};

export const heroTags = [
  'High-purity PTFE material',
  'For SF₆ gas circuit breakers',
  'Arc-quenching and insulating duty',
  'Cold Isostatic Pressing',
  'Precision internal geometry',
  'Excellent dielectric characteristics',
  'Built for demanding thermal environments',
  'Application-specific dimensions',
];

export const heroChips = [
  { icon: 'bolt', title: 'SF₆ breakers', text: 'High-voltage interruption chambers' },
  { icon: 'flask', title: 'High-purity PTFE', text: 'And specialised formulations' },
  { icon: 'press', title: 'Cold Isostatic Pressing', text: 'Uniform density in the blank' },
  { icon: 'drawing', title: 'Made to drawing', text: 'Throat, contour and profile' },
];

export const heroSpecs = [
  ['Product category', 'Power grid nozzles'],
  ['Primary material', 'PTFE'],
  ['Material options', 'High-purity PTFE and specialised polymer composites'],
  ['Application', 'SF₆ high-voltage circuit breakers'],
  ['Product types', 'Arcing nozzles and insulating nozzles'],
  ['Manufacturing technology', 'Cold Isostatic Pressing (CIP)'],
  ['Temperature rating', 'Application-specific; confirmed by our engineering team'],
  ['Pressure rating', 'Application-specific; confirmed by our engineering team'],
  ['Electrical properties', 'High dielectric insulation characteristics'],
  ['Manufacturing', 'Precision polymer processing'],
  ['Customisation', 'Drawing-based and application-specific'],
];

// 01 - why the nozzle matters
export const introText = [
  'High-voltage circuit breakers protect electrical transmission and distribution networks. They interrupt fault currents and isolate circuits when abnormal conditions occur.',
  'During a switching or fault-interruption event an electrical arc develops between the separating contacts. The energy in that arc creates extreme thermal and electrical stress inside the interruption chamber, and the nozzle sits right in it. Its geometry controls how the insulating gas moves around the arcing region.',
];

export const whyMatters = [
  { icon: 'flow', title: 'Controlled gas flow', text: 'The nozzle geometry guides insulating gas through the arcing region, supporting the cooling and interruption process.' },
  { icon: 'bolt', title: 'Arc-quenching support', text: 'The nozzle contributes to the controlled thermal and fluid-dynamic environment needed to interrupt an electrical arc.' },
  { icon: 'shield', title: 'Electrical insulation', text: 'PTFE has excellent dielectric properties, which suits it to specialised electrical insulation components.' },
  { icon: 'thermo', title: 'Thermal resistance', text: 'The material is selected for intense, short-duration thermal exposure during switching operations.' },
  { icon: 'caliper', title: 'Dimensional precision', text: 'Accurate internal contours, throat dimensions and external profiles hold the intended gas-flow characteristics.' },
  { icon: 'layers', title: 'Material consistency', text: 'Consistent density and structural integrity through the blank support reliable component manufacturing.' },
];

// 02 - the two nozzle types
export const nozzles = [
  {
    key: 'arcing',
    number: '01',
    name: 'PTFE Arc-Quenching Nozzles',
    short: 'Arcing Nozzles',
    subtitle: 'Precision gas-flow components for circuit-breaker interruption systems',
    job: 'Sits in the arc, directs the gas',
    photo: 'nozzle1',
    detail: 'nozzle2',
    text: 'Designed for use inside gas circuit-breaker interruption assemblies, where controlled gas flow and thermal performance are critical. During interruption the separating contacts strike an arc; the nozzle surrounds that arcing region and directs the insulating gas along the required flow path. Its internal geometry, throat profile and material characteristics shape the gas-flow behaviour and the thermal interaction.',
    note: 'High-purity PTFE is widely used here because of its dielectric properties and its characteristic response to intense arc exposure.',
    points: [
      'High-purity PTFE construction',
      'Precision-engineered internal profile',
      'Suitable for arc-exposed environments',
      'Excellent dielectric insulation characteristics',
      'Controlled nozzle throat geometry',
      'Application-specific material formulation',
      'Dimensional consistency',
      'Customised configurations',
    ],
    gains: [
      'Supports insulating gas flow through the arcing region',
      'Helps facilitate arc cooling',
      'Contributes to electrical interruption performance',
      'Provides a designed insulating interface',
      'Supports reliable circuit-breaker operation when correctly integrated',
    ],
    uses: 'SF₆ gas circuit breakers, high-voltage switchgear assemblies, power transmission substations, electrical protection systems and gas-insulated switching equipment.',
    asks: ['Circuit-breaker type', 'Throat diameter', 'Internal contour', 'Overall length', 'Insulating gas', 'Switching duty'],
  },
  {
    key: 'insulating',
    number: '02',
    name: 'PTFE Insulating Nozzles',
    short: 'Insulating Nozzles',
    subtitle: 'Polymer components for electrical insulation and gas management',
    job: 'Insulates, and holds the gas passage',
    photo: 'nozzle2',
    detail: 'nozzle3',
    text: 'Developed for specialised gas circuit-breaker assemblies needing electrical insulation, precision geometry and reliable material performance. These components provide an insulating polymer interface within the assembly while maintaining the required gas-flow passage and component clearances.',
    note: 'PTFE’s high dielectric strength, low dielectric loss and chemical resistance make it an established choice for demanding electrical insulation.',
    points: [
      'Excellent dielectric characteristics',
      'High-purity PTFE material',
      'Precision internal and external geometry',
      'Low moisture absorption',
      'Chemical resistance',
      'Dimensional stability',
      'Custom component profiles',
      'Suitable for specialised switchgear assemblies',
    ],
    gains: [
      'Provides electrical insulation within designated assemblies',
      'Supports a controlled gas-flow passage',
      'Helps maintain designed component separation',
      'Provides a chemically resistant polymer interface',
      'Supports long-term reliability under specified operating conditions',
    ],
    uses: 'High-voltage circuit-breaker assemblies, gas-insulated switchgear, electrical insulation systems, power transmission equipment and specialised switching mechanisms.',
    asks: ['Circuit-breaker type', 'Internal diameter', 'External diameter', 'Overall length', 'Clearances', 'Material specification'],
  },
];

export const nozzlesDistinction =
  'Arcing nozzles are exposed to the arc-interruption environment. Insulating nozzle configurations may perform different insulation and gas-management functions. The design and the material formulation are selected according to the specific circuit-breaker architecture, so the exact distinction belongs to your breaker, not to a general definition.';

// 03 - PTFE properties
export const materialIntro =
  'PTFE is a high-performance fluoropolymer used across electrical, chemical-processing and industrial applications. For a high-voltage circuit-breaker nozzle the material choice matters more than usual, because the component sees electrical fields, insulating gases, thermal radiation and transient mechanical stress all at once.';

export const ptfeProperties = [
  { icon: 'shield', title: 'Electrical insulation', text: 'Excellent dielectric properties and low dielectric loss, which suits PTFE to electrical insulation components.' },
  { icon: 'flask', title: 'Chemical resistance', text: 'The fluoropolymer structure resists many chemicals and industrial substances. Compatibility is still evaluated for the intended gas and operating environment.' },
  { icon: 'thermo', title: 'Thermal stability', text: 'PTFE keeps useful properties across a broad temperature range. Short-duration arc exposure is a different condition from continuous service temperature and is evaluated separately.' },
  { icon: 'slide', title: 'Low friction', text: 'A low coefficient of friction, which helps at component interfaces and during assembly handling.' },
  { icon: 'drop', title: 'Low moisture absorption', text: 'Low water absorption helps hold electrical and dimensional characteristics under appropriate environmental conditions.' },
  { icon: 'bolt', title: 'Arc-exposure behaviour', text: 'PTFE can undergo controlled ablation under intense arc exposure. That behaviour is part of how certain self-blast breaker designs build pressure, and it has to be considered during nozzle engineering.' },
];

export const materialCompare = [
  ['Virgin PTFE', 'Excellent dielectric properties, chemical resistance and low friction', 'Insulating components'],
  ['Modified PTFE', 'Formulation-dependent improvements in mechanical or dimensional properties', 'Specialised insulating components'],
  ['Filled PTFE', 'Tailored mechanical, thermal and wear characteristics', 'Application-specific nozzle components'],
  ['PEEK', 'High stiffness, mechanical strength and thermal capability', 'Structural polymer components'],
  ['Glass-filled polymers', 'Increased stiffness depending on formulation', 'Selected structural and insulating applications'],
];

export const materialNote =
  'A material that performs well as static electrical insulation will not necessarily give the right ablation response in an arc-exposed nozzle. The final formulation is evaluated against the actual interruption mechanism, the electrical requirements, the gas environment and the expected switching duty.';

// 04 - the CIP process
export const cipIntro =
  'Mithson makes its PTFE nozzles using Cold Isostatic Pressing: PTFE powder is placed in a flexible mould and pressure is transmitted through a liquid medium from every direction at once. Unlike conventional one-direction pressing, that isostatic pressure acts all around the mould, so the compacted blank comes out more uniform.';

export const cipSteps = [
  { key: 'powder', number: '01', title: 'Raw material selection', text: 'High-quality PTFE powder is selected according to the required material formulation and the product application.' },
  { key: 'mould', number: '02', title: 'Mould preparation', text: 'The powder is loaded into a flexible mould designed for the required blank geometry.' },
  { key: 'press', number: '03', title: 'Isostatic compaction', text: 'Pressure is applied uniformly around the mould, compacting the polymer powder into a dense preform.' },
  { key: 'sinter', number: '04', title: 'Sintering', text: 'The compacted preform goes through controlled thermal processing to develop the required material structure.' },
  { key: 'machine', number: '05', title: 'Precision machining', text: 'The consolidated blank is machined into the required nozzle profile, throat dimensions and external geometry.' },
  { key: 'inspect', number: '06', title: 'Inspection', text: 'Finished components are checked against the dimensional and visual requirements before dispatch.' },
];

export const cipGains = [
  'More uniform compaction than conventional one-direction pressing',
  'Suitable for producing complex polymer blanks',
  'Supports consistent material density',
  'Enables precision-machined nozzle geometries',
  'Helps improve structural consistency',
  'Supports specialised industrial component manufacturing',
];

// 05 - the four-stage interruption
export const workingIntro =
  'A gas circuit breaker interrupts current by separating its contacts and managing the arc that follows. The nozzle sits around the arcing region and directs the insulating gas through the chamber. Step through the four stages, or let the sequence run.';

export const workingStages = [
  {
    key: 'separate',
    label: 'Contact separation',
    number: '01',
    title: 'Contact separation',
    text: 'The breaker receives an opening command and the moving contact begins separating from the fixed contact. Because the contacts are still carrying current as they part, an electrical arc forms between them.',
  },
  {
    key: 'flow',
    label: 'Gas flow',
    number: '02',
    title: 'Gas flow initiation',
    text: 'The breaker mechanism creates the gas-flow conditions through its puffer, thermal-expansion or self-blast arrangement, depending on the design. The nozzle directs the insulating gas towards and through the arcing region.',
  },
  {
    key: 'cool',
    label: 'Arc cooling',
    number: '03',
    title: 'Arc cooling and energy removal',
    text: 'The flowing gas removes heat from the arc region and reduces the electrical conductivity of the hot gas. In certain self-blast designs, controlled PTFE nozzle ablation also contributes to the pressure-building mechanism.',
  },
  {
    key: 'clear',
    label: 'Interruption',
    number: '04',
    title: 'Current interruption and dielectric recovery',
    text: 'At the appropriate current-zero condition the arc is extinguished, provided the breaker has removed enough energy and the contact gap has recovered enough dielectric strength to withstand the transient recovery voltage. The faulted circuit is then isolated.',
  },
];

export const workingFactors = [
  'Nozzle throat diameter',
  'Internal contour and expansion geometry',
  'Gas pressure and flow velocity',
  'Arc energy and duration',
  'Contact movement and opening speed',
  'PTFE material formulation',
  'Thermal and dielectric recovery conditions',
];

export const workingNote =
  'All of those interact, which is why a nozzle has to be engineered as part of the complete circuit-breaker interruption system, not as an independent polymer component.';

// 06 - design and performance parameters
export const designGroups = [
  {
    key: 'dielectric',
    icon: 'shield',
    title: 'Dielectric performance',
    text: 'The dielectric properties of PTFE hold the electrical insulation in the designated component geometry.',
    items: ['Dielectric strength', 'Relative permittivity', 'Dielectric dissipation factor', 'Electrical clearance', 'Surface condition', 'Moisture and contamination exposure'],
  },
  {
    key: 'thermal',
    icon: 'bolt',
    title: 'Thermal and arc performance',
    text: 'Nozzles see intense, transient thermal conditions every time the breaker operates.',
    items: ['Arc radiation exposure', 'Material ablation behaviour', 'Thermal degradation', 'Repeated switching cycles', 'Nozzle throat erosion', 'Post-interruption dimensional condition'],
  },
  {
    key: 'flow',
    icon: 'flow',
    title: 'Gas-flow performance',
    text: 'The internal geometry controls how gas passes through the nozzle and meets the arcing region.',
    items: ['Throat diameter', 'Inlet and outlet profiles', 'Internal surface finish', 'Gas passage area', 'Flow direction', 'Pressure and velocity distribution'],
  },
  {
    key: 'mechanical',
    icon: 'caliper',
    title: 'Mechanical and dimensional',
    text: 'The nozzle has to hold its geometry and integrity through handling, assembly and operation.',
    items: ['Overall length', 'Internal diameter', 'External diameter', 'Throat dimensions', 'Concentricity', 'Roundness', 'Surface finish', 'Profile accuracy'],
  },
];

export const specTable = [
  ['Material', 'High-purity PTFE'],
  ['Material variants', 'Specialised PTFE formulations and composites'],
  ['Manufacturing', 'Cold Isostatic Pressing'],
  ['Electrical properties', 'High dielectric insulation characteristics'],
  ['Thermal performance', 'Application-specific'],
  ['Arc exposure', 'Designed for the specified interruption conditions'],
  ['Gas compatibility', 'Confirmed for the actual insulating medium'],
  ['Pressure performance', 'Circuit-breaker design dependent'],
  ['Nozzle geometry', 'Customised profile'],
  ['Quality inspection', 'Dimensional and visual verification'],
];

export const specNote =
  'Mithson does not publish a temperature, pressure, voltage or current-interruption rating for a nozzle. Those values come from validated material data and circuit-breaker qualification tests on the complete interrupter, not from the polymer component on its own.';

// 07 - applications
export const applications = [
  { icon: 'bolt', title: 'SF₆ gas circuit breakers', text: 'For interruption chambers where insulating gas supports arc extinction and electrical insulation.' },
  { icon: 'tower', title: 'High-voltage switchgear', text: 'Polymer nozzle components integrated into specialised switching assemblies in substations and transmission infrastructure.' },
  { icon: 'box', title: 'Gas-insulated switching equipment', text: 'Precision polymer components supporting the insulation and gas-management requirements of compatible designs.' },
  { icon: 'grid', title: 'Transmission substations', text: 'Circuit-breaker components within protection systems that isolate faulted sections and protect connected infrastructure.' },
  { icon: 'factory', title: 'Industrial power distribution', text: 'Specialised circuit-breaker components in industrial power systems requiring reliable switching and protection.' },
  { icon: 'wind', title: 'Renewable energy infrastructure', text: 'High-voltage switching equipment within the electrical collection and transmission systems of wind and solar installations.' },
];

// 08 - why precision matters
export const precisionIntro =
  'Nozzle performance is strongly influenced by geometry and material consistency. Even a small deviation in the internal throat profile can change the gas-flow characteristics and the behaviour of the interruption process.';

export const precisionPoints = [
  { title: 'Material density', text: 'Uniform compaction gives consistent material characteristics throughout the blank.' },
  { title: 'Internal profile accuracy', text: 'The throat and internal contour conform to the approved engineering drawing.' },
  { title: 'Concentricity', text: 'The internal and external profiles hold the specified alignment.' },
  { title: 'Surface finish', text: 'The internal surface meets the required finishing specification, avoiding unwanted geometric irregularities.' },
  { title: 'Dimensional inspection', text: 'Critical dimensions are checked against the approved product drawing.' },
  { title: 'Material traceability', text: 'Raw-material and manufacturing records are maintained where the quality system supports it.' },
];

export const inspectionChecklist = [
  'Raw-material identification and verification',
  'Material batch documentation',
  'CIP process verification',
  'Sintering process documentation',
  'Overall dimensional measurement',
  'Internal throat diameter inspection',
  'Concentricity and roundness checks',
  'Surface finish inspection',
  'Visual defect examination',
  'Final drawing compliance verification',
];

export const validationOptions = [
  'Dielectric testing',
  'Material density evaluation',
  'Thermal testing',
  'Mechanical testing',
  'Dimensional stability assessment',
  'Arc-exposure evaluation',
  'Prototype and type-test support',
];

export const qualityNote =
  'Mithson holds ISO 9001:2015 and is QIMA audited. The validation options above are arranged where a customer or a qualification programme specifies them, through Mithson or a qualified testing facility; they are not claimed as in-house capabilities.';

// 09 - custom work
export const customOptions = [
  'Custom internal throat profiles',
  'Different inlet and outlet geometries',
  'Application-specific external profiles',
  'Custom overall length and diameters',
  'Virgin and specialised PTFE formulations',
  'Precision-machined nozzle components',
  'Drawing-based manufacturing',
  'Prototype and production development',
];

export const customAsks = [
  'Engineering drawing or reference sample',
  'Circuit-breaker type and configuration',
  'Required material specification',
  'Internal and external dimensions',
  'Nozzle throat dimensions',
  'Insulating gas specification',
  'Rated voltage and current-interruption requirements',
  'Operating pressure and temperature conditions',
  'Expected switching duty',
  'Required quantity',
];

// 10 - challenges
export const challenges = [
  { challenge: 'Extreme arc exposure', problem: 'Electrical arcs create intense thermal conditions that can affect nozzle geometry and material properties.', answer: 'High-performance PTFE material selection and application-specific nozzle engineering.' },
  { challenge: 'Gas-flow consistency', problem: 'Nozzle geometry influences how gas is distributed through the arcing region.', answer: 'Precision-machined internal profiles and dimensional inspection.' },
  { challenge: 'Electrical insulation requirements', problem: 'Circuit-breaker components must hold the required electrical insulation characteristics.', answer: 'High-purity PTFE and specialised polymer formulations selected for the application.' },
  { challenge: 'Manufacturing consistency', problem: 'Complex nozzle geometries need controlled material preparation and manufacturing.', answer: 'Cold Isostatic Pressing, controlled thermal processing and precision machining.' },
  { challenge: 'Application-specific designs', problem: 'Different circuit-breaker architectures need different nozzle configurations.', answer: 'Drawing-based and customised polymer component manufacturing.' },
];

// 11 - FAQ
export const faqs = [
  { q: 'What is a PTFE nozzle in a circuit breaker?', a: 'A polymer component installed around the arcing region of certain gas circuit breakers. It helps direct insulating gas through the arc-interruption chamber.' },
  { q: 'Why is PTFE used in SF₆ circuit-breaker nozzles?', a: 'PTFE offers excellent dielectric properties and useful thermal and material characteristics for arc-exposed applications. Its controlled ablation behaviour also matters to certain self-blast breaker designs.' },
  { q: 'What is the function of an arcing nozzle?', a: 'It directs insulating gas through the region where the electrical arc develops, supporting cooling and interruption.' },
  { q: 'What is the difference between an arcing nozzle and an insulating nozzle?', a: 'An arcing nozzle is designed for the arc-exposed interruption region. An insulating nozzle configuration primarily provides electrical insulation and gas-management functions. The precise distinction depends on the circuit-breaker design.' },
  { q: 'What is Cold Isostatic Pressing?', a: 'A manufacturing process in which pressure is transmitted through a liquid medium around a flexible mould, compacting material powder into a uniform preform.' },
  { q: 'Why is CIP important for PTFE nozzles?', a: 'It produces compacted polymer blanks with consistent density and structural characteristics, which is what precision machining afterwards depends on.' },
  { q: 'Does the nozzle experience arc erosion?', a: 'Yes. In certain breaker designs the PTFE nozzle is exposed to intense arc radiation and can undergo material ablation. How much depends on arc energy, duration, material formulation and nozzle geometry.' },
  { q: 'Can Mithson manufacture customised PTFE nozzles?', a: 'Customised dimensions, material requirements and nozzle configurations can be discussed from drawings or reference samples.' },
  { q: 'Can PTFE nozzles be used in alternative insulating gases?', a: 'That depends on the gas composition, arc behaviour, material formulation and breaker design. Compatibility and interruption performance have to be validated for the intended gas system.' },
  { q: 'What information is required to select a suitable nozzle?', a: 'Circuit-breaker configuration, nozzle dimensions, insulating gas, operating pressure, electrical ratings, switching duty and material requirements.' },
];

export const closing = [
  'Ready to specify nozzles — power grid?',
  'Looking for precision-engineered PTFE nozzles for high-voltage circuit breakers? Share your nozzle geometry, material specifications and application requirements with our engineering team. From specialised arcing nozzles to insulating polymer components, we support customised engineering and manufacturing for power-grid applications.',
];

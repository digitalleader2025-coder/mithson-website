// M-UNI Seal page copy, from the approved text supplied by the user (November 2026).
// That text repeatedly flags which items are general industry options rather than confirmed
// Mithson offerings. Those caveats are kept on the page: do not quietly turn them into claims,
// and add no numerical ratings or size ranges until Mithson supplies its datasheets.

export const mUniHero = {
  label: 'Spring-energised polymer seals',
  title: 'M-UNI Seal.',
  titleAccent: 'Precision sealing.',
  titleRest: 'Controlled contact.',
  lead:
    "M-UNI Seal is Mithson's spring-energised polymer sealing solution, designed around the requirements of demanding industrial sealing applications. A precision-engineered polymer sealing jacket works with a metallic spring energiser to maintain contact with mating surfaces under suitable operating conditions.",
};

export const heroChips = [
  { icon: 'spring', title: 'Spring loaded', text: 'Initial sealing force' },
  { icon: 'gauge', title: 'Pressure-assisted', text: 'In suitable profiles' },
  { icon: 'slide', title: 'Low friction', text: 'With suitable jackets' },
  { icon: 'layers', title: '5 variants', text: 'Canti, Coil, Heli, ID and OD face' },
];

export const anatomy = [
  {
    icon: 'jacket',
    title: 'Polymer sealing jacket',
    text: 'Forms the primary sealing interface between the mating components. Made from a suitable engineering polymer such as PTFE or an application-specific filled compound.',
    note: 'The jacket profile determines how the sealing lips contact the mating surfaces and how the component behaves during operation.',
  },
  {
    icon: 'spring',
    title: 'Metallic spring energiser',
    text: 'Sits inside the polymer jacket and supplies the initial force needed to keep contact with the sealing surfaces.',
    note: 'It helps compensate for changes in contact caused by wear, dimensional variation and temperature, within the design limits.',
  },
];

export const stages = [
  { title: 'Installation', text: 'The seal is installed into its designed gland or housing, with jacket and spring positioned for the intended contact with the mating surface.' },
  { title: 'Initial contact', text: 'The spring applies a preload to the polymer jacket, helping the sealing lips stay in contact even when system pressure is low.' },
  { title: 'Operating pressure', text: 'In pressure-energised designs, system pressure acts on the appropriate jacket surfaces and increases the sealing contact force.' },
  { title: 'Continuous operation', text: 'During suitable operating conditions, the spring helps maintain contact as the interface sees movement, wear and changing conditions.' },
];

export const stagesNote =
  'The actual sealing mechanism depends on the jacket profile, pressure direction, installation orientation and seal design.';

// The five variants Mithson already shows photographs for
export const sealTypes = [
  { key: 'canti', name: 'Canti Seals', image: 'Canti Seals', text: 'A cantilever spring, V-shaped in cross-section, that loads the jacket like a leaf spring. It gives a progressive load, which suits many dynamic sealing arrangements.' },
  { key: 'coil', name: 'Coil Seals', image: 'Coil Seals', text: 'A slanted coil spring deflects across a wide range at a relatively steady load, which helps keep sealing contact with controlled friction.' },
  { key: 'heli', name: 'Heli Seals', image: 'Heli Seals', text: 'A wound helical spring concentrates its contact load, commonly considered for static and selected low-speed sealing positions.' },
  { key: 'id-face', name: 'ID Face Seals', image: 'ID Face Seals', text: 'A face-sealing arrangement energised towards the inside diameter, for sealing between two opposing surfaces.' },
  { key: 'od-face', name: 'OD Face Seals', image: 'OD Face Seals', text: 'A face-sealing arrangement energised towards the outside diameter, selected for the required contact force, pressure and movement.' },
];

export const sealTypesNote =
  'Actual variants shown for the seal type you select. Confirm the profile, dimensions and spring with Mithson before specifying a product.';

export const profiles = [
  {
    key: 'u-cup',
    name: 'U-cup / U-jacket',
    image: 'profile-u-cup',
    text: 'A U-shaped polymer jacket can house an energising spring and, in suitable designs, let pressure act inside the jacket to supplement spring force.',
    watch: 'The opening and orientation must be matched to the pressure direction and gland design.',
  },
  {
    key: 'lip',
    name: 'Lip seal',
    image: 'seal-anatomy',
    text: 'A polymer jacket with one or more sealing lips designed to contact a mating surface.',
    watch: 'Potential applications include suitable rod, piston and rotary sealing arrangements, depending on the profile.',
  },
  {
    key: 'face',
    name: 'Face seal',
    image: 'seal-cutaway',
    text: 'A face-sealing arrangement provides sealing contact between two opposing surfaces.',
    watch: 'The jacket and spring arrangement must be selected for the required contact force, pressure and movement conditions.',
  },
  {
    key: 'custom',
    name: 'Custom profile',
    image: 'spring-v',
    text: 'Application-specific profiles can be considered where standard seal geometries do not meet the equipment requirements.',
    watch: 'Final dimensions, profile geometry and spring selection must be confirmed through engineering review.',
  },
];

export const profilesNote =
  'These are general spring-energised seal design categories rather than a confirmed list of M-UNI commercial variants. Confirm with Mithson which profiles it manufactures and supplies.';

export const springs = [
  { key: 'v', name: 'V-spring / cantilever', image: 'spring-v', text: 'A formed spring with a V-shaped cross-section. It can provide a progressive spring load and is commonly considered for dynamic sealing applications where suitable.' },
  { key: 'helical', name: 'Helical spring', image: 'spring-helical', text: 'A wound spring designed to provide a relatively concentrated contact load. Commonly considered for static and selected low-speed sealing applications.' },
  { key: 'slanted', name: 'Slanted coil spring', image: 'seal-cutaway', text: 'A coil spring configuration that can provide a relatively consistent load across its deflection range, where sealing contact with controlled friction matters.' },
];

export const springsNote =
  'Spring selection depends on seal geometry, pressure, temperature, movement, friction requirements and media compatibility. Availability of these spring designs in the M-UNI range must be confirmed with Mithson.';

export const jacketMaterials = [
  {
    key: 'ptfe',
    name: 'PTFE',
    short: 'Low friction, broad chemical resistance',
    image: 'ptfe-rod',
    text: 'Polytetrafluoroethylene is widely used in spring-energised seals because of its low friction and broad chemical resistance. Depending on the compound, it can provide useful wear resistance and thermal performance.',
    points: ['Low friction', 'Broad chemical resistance', 'Wear and thermal performance depend on the compound'],
  },
  {
    key: 'filled-ptfe',
    name: 'Filled PTFE',
    short: 'Added wear and load capability',
    image: 'filled-ptfe',
    text: 'PTFE can be modified with suitable fillers to improve selected properties such as wear resistance, stiffness, creep resistance and load-bearing behaviour.',
    points: ['Carbon and graphite fillers', 'Glass fillers', 'Other application-specific additives'],
  },
  {
    key: 'peek',
    name: 'PEEK',
    short: 'Strength and dimensional stability',
    image: 'ptfe-rods',
    text: 'Polyether ether ketone is a high-performance engineering thermoplastic that can provide mechanical strength, stiffness and dimensional stability in demanding applications.',
    points: ['Mechanical strength', 'Stiffness', 'Dimensional stability'],
  },
  {
    key: 'other',
    name: 'Other engineering polymers',
    short: 'Application-specific compounds',
    image: 'ptfe-rods',
    text: 'Other polymer compounds may be considered when the application requires particular mechanical, chemical or thermal characteristics.',
    points: ['Selected for the application', 'Confirmed against the approved catalogue'],
  },
];

export const jacketNote =
  "Final material availability for M-UNI Seal must be confirmed against Mithson's approved material catalogue.";

export const springMaterials = ['300-series stainless steel', '316 stainless steel', '17-7 PH stainless steel', 'Nickel-based alloys such as Inconel'];

export const springMaterialNote =
  'The correct material depends on temperature, chemical exposure, corrosion risk, spring loading and operating life. These are general industry options and should be confirmed before being treated as standard M-UNI offerings.';

export const advantages = [
  { icon: 'slide', title: 'Low-friction sealing', text: 'Suitable polymer jacket materials can provide low-friction characteristics, helping reduce frictional resistance in compatible dynamic applications.' },
  { icon: 'spring', title: 'Initial spring loading', text: 'The spring maintains initial contact between the sealing jacket and mating surface, including during low-pressure conditions within the design limits.' },
  { icon: 'gauge', title: 'Pressure-assisted sealing', text: 'In suitable pressure-energised profiles, system pressure can supplement the mechanical spring force.' },
  { icon: 'layers', title: 'Material compatibility', text: 'PTFE-based and other engineering polymer compounds can be selected for different chemical and environmental requirements.' },
  { icon: 'seal', title: 'Controlled sealing contact', text: 'The spring and jacket work together to provide the required sealing contact, subject to geometry and installation conditions.' },
  { icon: 'drawing', title: 'Application-specific design', text: 'Different profiles, dimensions and material combinations can be evaluated to meet specific equipment requirements.' },
];

export const equipment = [
  { icon: 'rig', title: 'Oil & gas equipment', text: 'Sealing arrangements for selected valves, wellhead equipment and other process equipment.' },
  { icon: 'valve', title: 'Industrial valves', text: 'Stem, seat and other sealing positions where the selected profile is suitable.' },
  { icon: 'compressor', title: 'Pumps and compressors', text: 'Selected reciprocating, rotary and static sealing arrangements, subject to equipment design.' },
  { icon: 'hydraulic', title: 'Hydraulic systems', text: 'Suitable piston, rod and other sealing applications where the seal design and material meet the system requirements.' },
  { icon: 'flask', title: 'Chemical processing', text: 'Applications involving chemically aggressive media, where the selected polymer and spring materials are compatible.' },
  { icon: 'drawing', title: 'Specialised equipment', text: 'Custom sealing arrangements developed around specific equipment geometry and operating conditions.' },
];

export const equipmentNote =
  'These are potential industry application areas, not a claim that every M-UNI configuration is suitable for every application.';

export const selectionFactors = [
  { title: 'Operating temperature', text: 'Minimum and maximum temperatures, including thermal cycling and transient conditions.' },
  { title: 'Operating pressure', text: 'Maximum pressure, pressure direction and pressure variations influence the jacket design and extrusion resistance.' },
  { title: 'Movement type', text: 'Static, reciprocating, rotary, oscillating or face-sealing conditions.' },
  { title: 'Sealing media', text: 'The fluid or gas must be compatible with the polymer jacket and the spring material.' },
  { title: 'Surface finish', text: 'The mating surface finish can influence friction, leakage and wear.' },
  { title: 'Hardware dimensions', text: 'Shaft diameter, bore diameter, groove width, groove depth and extrusion clearance.' },
  { title: 'Installation requirements', text: 'Seal orientation, installation tools, groove design and possible damage during installation.' },
];

export const enquiryTable = [
  ['Seal type', 'Confirmed M-UNI profile'],
  ['Jacket material', 'Approved polymer grade'],
  ['Spring type', 'Selected spring configuration'],
  ['Spring material', 'Corrosion-compatible alloy'],
  ['Operating temperature', 'Minimum and maximum'],
  ['Operating pressure', 'Minimum and maximum'],
  ['Pressure direction', 'Unidirectional or bidirectional'],
  ['Movement', 'Static, reciprocating, rotary or oscillating'],
  ['Media', 'Gas, liquid or chemical composition'],
  ['Shaft / bore', 'Actual component dimensions'],
  ['Groove', 'Width, depth and geometry'],
  ['Surface finish', 'Mating hardware requirements'],
];

export const enquiryNote =
  'Verified numerical ratings and available size ranges are published only after review against Mithson product datasheets and engineering documentation.';

export const installation = [
  {
    title: 'Before installation',
    items: ['Verify the seal dimensions and profile.', 'Inspect the sealing jacket for damage.', 'Check the spring energiser and its positioning.', 'Clean the gland and mating surfaces.', 'Confirm the installation orientation.'],
  },
  {
    title: 'During installation',
    items: ['Follow the approved installation method.', 'Avoid sharp edges and excessive stretching.', 'Use suitable installation tools where required.', 'Avoid twisting or damaging the sealing lips.', 'Ensure the seal is correctly seated in the gland.'],
  },
  {
    title: 'During maintenance',
    items: ['Inspect the sealing surface for wear or damage.', 'Check for extrusion, deformation or chemical degradation.', 'Review operating conditions if leakage or premature wear occurs.', 'Replace the seal when it no longer meets the equipment requirements.'],
  },
];

export const installationNote =
  'Actual installation procedures should follow the approved M-UNI drawing and product instructions.';

export const faqs = [
  { q: 'What is a spring-energised seal?', a: 'It is a polymer sealing component that uses a spring to maintain contact between its sealing jacket and the mating surface.' },
  { q: 'What is the purpose of the spring?', a: "The spring supplies initial contact force and helps compensate for changes in sealing contact within the design's operating limits." },
  { q: 'Is M-UNI Seal suitable for rotary and reciprocating applications?', a: 'Suitability depends on the actual jacket profile, spring configuration, surface speed, pressure, lubrication and material. Confirm the intended M-UNI configuration with Mithson.' },
  { q: 'Which materials are available?', a: "PTFE and filled PTFE compounds are common spring-energised seal jacket materials. Other materials, including PEEK, may be considered for suitable designs. Confirm Mithson's actual M-UNI material options before selecting a product." },
  { q: 'Can the seal operate at high temperatures?', a: 'The maximum operating temperature depends on the jacket compound, spring alloy, pressure, frictional heating and mechanical loading. A specific rating should be confirmed for the selected product configuration.' },
  { q: 'Can M-UNI Seal be manufactured to custom dimensions?', a: 'Provide the equipment drawing, groove dimensions and application conditions so Mithson can assess the required configuration and manufacturing feasibility.' },
  { q: 'How do I select the right M-UNI Seal?', a: 'Provide the operating temperature, pressure, media, movement type, hardware dimensions and surface finish for engineering evaluation.' },
];

export const closing = [
  'Every sealing application has different operating requirements.',
  "Share your equipment drawing, operating conditions and dimensional details with Mithson's team to discuss a suitable M-UNI Seal configuration. Our team can review the application requirements, material options, sealing profile and dimensional considerations.",
];

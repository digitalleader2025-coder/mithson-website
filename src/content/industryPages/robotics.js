// Industries > Robotics, from the approved brief (November 2026).
// Rules the brief sets: no robotics-specific certifications; no temperature, pressure, speed or
// load ratings; no maintenance-free or service-life promises; Mithson makes components, not robots.
import hero from '../../assets/industries/Robotics.webp';
import robotArm from '../../assets/industries/robotics/robot-arm-white.jpg';
import robotLine from '../../assets/industries/robotics/robot-line.jpg';
import * as img from './images';

const { PATHS } = img;

export default {
  docTitle: 'Robotics Sealing & Polymer Components',
  hero: {
    label: 'Industries / Robotics',
    title: 'Robotics.',
    accent: 'Precision polymer components',
    rest: 'for reliable industrial motion.',
    lead:
      'Robotic systems need precision, repeatability and dependable performance over thousands or millions of cycles. From articulated arms and automated lines to actuators and motion-control assemblies, every moving part must run smoothly with controlled friction, minimal wear and reliable support.',
    lead2:
      'Mithson manufactures polymer seals, bearings, bushes and custom-machined components in PTFE, PEEK, POM (Delrin), nylon, PU and engineered elastomers, designed for the application. Mithson supplies components; it does not build robots.',
    tags: ['Low-friction motion', 'Precision and repeatability', 'Joint and actuator sealing', 'Bearings and bushes', 'Made to your drawing'],
    image: hero,
    imageAlt: 'Industrial robots on an automated production line',
    chips: [
      { icon: 'gear', title: '8 product families', text: 'Seals, wear rings, bearings, parts' },
      { icon: 'flask', title: '8 materials', text: 'PTFE, PEEK, POM, nylon, PU, FKM, HNBR' },
      { icon: 'cycle', title: '8 application areas', text: 'Arm joints to hydraulic robots' },
      { icon: 'clock', title: '25+ years', text: 'Polymer engineering heritage through the group' },
    ],
  },

  challenges: {
    title: 'Reliable motion starts with the right components',
    intro:
      'Robots combine movement, controlled force, precision positioning and continuous operation. Seals and bearings protect moving assemblies, control friction and keep performance consistent.',
    items: [
      { icon: 'cycle', title: 'Continuous mechanical movement', text: 'Repeated rotation, reciprocation and oscillation cause friction and gradual wear. Suitable polymers support reliable movement and part life.' },
      { icon: 'wind', title: 'Low-friction performance', text: 'Joints, sliding interfaces and actuators need materials chosen for their friction behaviour under the actual conditions.' },
      { icon: 'ruler', title: 'Precision and dimensional stability', text: 'Robots depend on accurate dimensions, controlled clearances and consistent mechanical behaviour.' },
      { icon: 'dust', title: 'Dust and environmental protection', text: 'Dust, particles, moisture and process contaminants are kept out of internal mechanisms by the right sealing arrangement.' },
      { icon: 'weight', title: 'Vibration and mechanical loads', text: 'Acceleration and changing loads need parts with suitable wear resistance and mechanical properties.' },
      { icon: 'clock', title: 'Reduced maintenance', text: 'Good material selection and design help reduce premature wear, leakage and maintenance interruptions.' },
    ],
  },

  products: {
    title: 'Engineered polymer products for robotic applications',
    intro: 'Real Mithson products with their own photographs. None is presented as a certified robotics-specific design; each is evaluated for your equipment.',
    items: [
      { name: 'Spring Energized Lip Seals', image: img.springSeal, path: PATHS.valve,
        desc: 'A PTFE-based seal with an energizing element that maintains contact under appropriate conditions, for selected rotary and reciprocating duty.',
        uses: 'Rotary actuators, motion-control assemblies, shaft sealing.' },
      { name: 'M-UNI Spring Energized Seals', image: img.mUni, path: PATHS.mUni,
        desc: 'Spring-energized design with jacket options to suit, for dynamic and static sealing, sized to your drawing.',
        uses: 'Actuator assemblies, compact fluid control, precision mechanisms.' },
      { name: 'PTFE Seals', image: img.ptfeParts, path: PATHS.machined,
        desc: 'Low friction and broad chemical resistance in application-specific geometries.',
        uses: 'Linear actuators, sliding mechanisms, fluid handling.' },
      { name: 'PEEK Components', image: img.peekParts, path: PATHS.machined,
        desc: 'High strength, good wear in suitable designs and chemical resistance, machined to precision.',
        uses: 'Structural supports, wear parts, precision spacers.' },
      { name: 'Hydraulic Seals', image: img.pistonSeal, path: PATHS.hydraulic,
        desc: 'Piston, rod and wiper seals that control leakage, retain pressure and keep contaminants out.',
        uses: 'Hydraulic robotic actuators, manipulators, heavy automated machinery.' },
      { name: 'Hydraulic Wear Rings', image: img.wearRing, path: PATHS.hydraulic,
        desc: 'Guide piston and rod, manage side load and reduce metal-to-metal contact.',
        uses: 'Hydraulic positioning systems, industrial actuators.' },
      { name: 'Polymer Bearings and Bushes', image: img.mssSelfLube, path: PATHS.uniLube,
        desc: 'MSS-MF Self Lube, MSS-MP Pre Lube, MSS-BIM Bi-Metal, MSS-MB Solid Bushes and Mithlon Bushes, for sliding and rotating duty.',
        uses: 'Pivot points, linkages, guided movement, rotary interfaces.' },
      { name: 'Custom Molded and Machined Products', image: img.machined, path: PATHS.machined,
        desc: 'Non-standard geometries, profiles and materials, for prototypes and production, made to your drawing.',
        uses: 'Any robotic part outside a standard range.' },
    ],
  },

  applications: {
    title: 'Where Mithson polymer components can be used',
    intro: 'Potential component applications, each subject to engineering validation. Select an area of the robotic system.',
    items: [
      { title: 'Robotic arm joints', photo: robotArm, photoAlt: 'White industrial robot arm showing its joints',
        text: 'Joints need controlled movement and dependable interfaces. Polymer bushes and bearings may be considered for selected pivot and sliding arrangements.',
        parts: ['Polymer bushes', 'MSS bearings', 'PTFE seals'] },
      { title: 'Rotary actuators',
        text: 'Mechanical or fluid power becomes rotation. The right seals manage leakage and protect internal parts.',
        parts: ['Spring energized lip seals', 'M-UNI seals', 'Wear rings'] },
      { title: 'Linear actuators',
        text: 'Controlled straight-line movement. PTFE seals, hydraulic seals and wear rings may be considered, depending on the design.',
        parts: ['PTFE seals', 'Hydraulic seals', 'Wear rings'] },
      { title: 'Robotic grippers',
        text: 'Repetitive gripping and release. Precision polymer parts suit selected guiding, sliding and pneumatic or hydraulic interfaces.',
        parts: ['Machined PEEK parts', 'PTFE guides', 'Small seals'] },
      { title: 'Automated guided vehicles',
        text: 'Repeated motion, steering and positioning. Bushes and bearings may be considered for selected mechanical assemblies.',
        parts: ['Bushes', 'Bearings', 'Custom polymer parts'] },
      { title: 'Industrial automation equipment', photo: robotLine, photoAlt: 'Robotic production line in a modern factory',
        text: 'Automated machinery needs dependable moving interfaces and fluid control. Components are evaluated against the operating conditions.',
        parts: ['Seals', 'Bearings and bushes', 'Machined parts'] },
      { title: 'Robotic positioning systems',
        text: 'Consistent movement and suitable wear behaviour, with load, speed and tolerances accounted for.',
        parts: ['Wear rings', 'Polymer bearings', 'Precision spacers'] },
      { title: 'Hydraulic robotic systems',
        text: 'Hydraulic actuators need suitable piston, rod and wiper sealing to contain fluid and protect the system.',
        parts: ['Piston seals', 'Rod seals', 'Wiper seals', 'Wear rings'] },
    ],
  },

  sections: [
    {
      id: 'materials',
      label: 'Material engineering',
      title: 'Selecting the right polymer for every movement',
      intro: 'The right material depends on load, movement, temperature, speed, lubrication, chemical exposure and required service life.',
      table: {
        cols: ['Material', 'Important characteristics', 'Potential applications'],
        rows: [
          ['PTFE', 'Low friction and broad chemical resistance', 'Dynamic seals, sliding components'],
          ['Modified PTFE', 'Improved mechanical properties, depending on grade', 'Precision seals and wear parts'],
          ['PEEK', 'High strength, stiffness and thermal performance', 'Precision machined parts and wear parts'],
          ['POM / Delrin', 'Dimensional stability and machinability', 'Bushes, guides and mechanical parts'],
          ['Nylon', 'Strength and wear properties in suitable conditions', 'Bushes and structural parts'],
          ['PU', 'Elasticity and abrasion resistance in suitable grades', 'Hydraulic seals and wear duty'],
          ['FKM / Viton', 'Elastomeric sealing; resists many oils and fuels', 'Selected static and dynamic seals'],
          ['HNBR', 'Strength and oil resistance in suitable environments', 'Industrial sealing'],
        ],
      },
      note: 'These are general material characteristics, not guaranteed product performance. The grade, filler, temperature, pressure, load, speed and environment are reviewed by Mithson engineering.',
    },
    {
      id: 'construction',
      label: 'How they are built',
      title: 'Inside a spring-energized seal',
      intro: 'Drawn cross-sections of the spring-energized and encapsulated sealing constructions in this range.',
      diagrams: ['spring', 'encap'],
    },
    {
      id: 'process',
      label: 'Component development',
      title: 'From engineering requirements to precision components',
      steps: [
        { title: 'Application understanding', text: 'Function, movement type, speed and cycle frequency, load and environment.' },
        { title: 'Engineering review', text: 'The drawing, dimensions, installation arrangement and conditions.' },
        { title: 'Material recommendation', text: 'Polymer or elastomer grades from mechanical, thermal, chemical and friction needs.' },
        { title: 'Manufacturing', text: 'Polymer machining or moulding, depending on the design.' },
        { title: 'Quality inspection', text: 'Dimensions, surface finish and requirements against the approved specification.' },
        { title: 'Delivery and support', text: 'Coordinated delivery and application support.' },
      ],
    },
    {
      id: 'capabilities',
      label: 'Capabilities',
      title: 'Precision manufacturing backed by polymer expertise',
      intro: 'Over 25 years of polymer engineering heritage through the Fluoro Carbon Seals Group.',
      cards: [
        { icon: 'gear', title: 'Custom polymer machining', text: 'Parts made to your drawings and specified dimensions.' },
        { icon: 'drop', title: 'Custom moulded products', text: 'Moulded polymer and elastomer parts for suitable applications.' },
        { icon: 'flask', title: 'Advanced material processing', text: 'Engineering thermoplastics, fluoropolymers and elastomers.' },
        { icon: 'ruler', title: 'Precision development', text: 'Application-specific geometries and component designs.' },
        { icon: 'shield', title: 'Quality inspection', text: 'Inspection against agreed dimensional and product requirements.' },
        { icon: 'doc', title: 'Engineering support', text: 'Material selection, design review and application evaluation.' },
      ],
    },
    {
      id: 'parameters',
      label: 'What to send us',
      title: 'Help us understand your robotic application',
      table: {
        cols: ['Parameter', 'Information required'],
        rows: [
          ['Application', 'Robotic arm, actuator, gripper, joint or automated machinery'],
          ['Movement type', 'Rotary, linear, reciprocating or oscillating'],
          ['Operating temperature', 'Minimum, normal and maximum'],
          ['Operating speed', 'Rotational speed or linear velocity'],
          ['Mechanical load', 'Radial load, axial load or contact pressure'],
          ['Pressure', 'Operating and maximum system pressure, where applicable'],
          ['Lubrication', 'Dry running, grease, oil or hydraulic fluid'],
          ['Environment', 'Dust, moisture, chemicals and cleaning agents'],
          ['Dimensions', 'Inner and outer diameter, width and profile'],
          ['Material preference', 'PTFE, PEEK, POM, nylon, PU or other'],
          ['Quantity', 'Prototype, small batch or production'],
          ['Drawing', '2D technical drawing or 3D CAD file'],
        ],
      },
      note: 'Not sure which material or product fits? Share your application details and drawing, and Mithson engineering will recommend a suitable solution.',
      cta: true,
    },
  ],

  faqTitle: 'Robotics sealing questions',
  faqs: [
    { q: 'Which Mithson products suit robotic applications?', a: 'Depending on the design: spring-energized seals, PTFE seals, PEEK components, hydraulic seals, wear rings, polymer bearings and custom-machined parts. Final suitability follows an engineering review.' },
    { q: 'Which material is best for robotic joints?', a: 'No single material suits every joint. PTFE, PEEK, POM and nylon may be considered, depending on load, movement, friction, temperature, wear and dimensions.' },
    { q: 'Can Mithson make custom polymer components for robots?', a: 'Yes. Custom moulded and machined parts are made from your drawings and specifications after engineering evaluation.' },
    { q: 'Are PTFE components suitable for continuous movement?', a: 'PTFE is common in dynamic sealing and sliding for its low friction, but speed, load, surface finish, temperature and formulation are evaluated.' },
    { q: 'Can Mithson supply parts for hydraulic robotic actuators?', a: 'The hydraulic range includes piston, rod and wiper seals and wear rings, which can be evaluated for compatible actuators.' },
    { q: 'What should I provide for a quotation?', a: 'Drawing, dimensions, temperature, pressure, movement type, speed, media, material preference and quantity.' },
    { q: 'Can Mithson help with material selection?', a: 'Yes. Mithson reviews the application conditions and advises on suitable polymers and elastomers.' },
    { q: 'Does Mithson offer prototype development?', a: 'Prototype and custom-development requirements are discussed with the engineering team, based on the design, manufacturing route and project.' },
  ],

  closing: {
    title: 'Build more reliable robotic systems with Mithson',
    text: 'Looking for precision polymer seals, low-friction bearings or custom-machined parts? Mithson works with you to understand the application, evaluate materials and develop the right component, standard or custom.',
  },
  disclaimer: 'Typical material properties are shown for guidance and are not verified product operating limits. Robotics applications are potential uses, subject to engineering validation.',
  credits: [
    { photo: 'Robot arm', by: 'ZHENYU LUO' },
    { photo: 'Robotic production line', by: 'Simon Kadula' },
  ],
};

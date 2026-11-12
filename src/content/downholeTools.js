// Industries > Downhole Tools, from the approved brief (November 2026).
// Rules the brief sets: 15,000 PSI belongs to the Unified Stack Seal design only; the PEEK
// back-up ring's -60°C to +260°C is a typical PEEK reference and its pressure is application-
// specific; API, NORSOK and ISO are standards the equipment refers to, never certifications
// claimed for every Mithson product; temperature ranges are indicative material-family values.
import imgUnifiedStack from '../assets/downhole/Unified Stack Seal.png';
import imgPacker from '../assets/downhole/Packer.png';
import imgRgdOring from '../assets/downhole/RGD O-Ring.png';
import imgPeekBackup from '../assets/downhole/Peek Back-Up Ring.png';
import imgValve from '../pages/Products/Seals-Valve/assets/Peek Seat Ring.png';
import imgPlugLined from '../pages/Products/Plug-Lined-Valve/assets/PFA Lined Disc.png';
import imgHydraulic from '../pages/Products/Seals-Hydraulic/assets/Piston Seals.png';
import imgUniLube from '../pages/Products/UNI-LUBE-Bearing/assets/Main Image.png';
import imgDiaphragm from '../pages/Products/Diaphragm-AODD/assets/Diaphragm.png';
import imgMolded from '../pages/Products/CustomManufacturing/assets/molded/seals-range.webp';
import imgMachined from '../pages/Products/CustomManufacturing/assets/machined/parts-custom-blocks.webp';

export const dhIntro = [
  'Mithson supplies polymer-based sealing components for critical downhole oil and gas applications: Unified Stack Seals, Packer Elements, Rapid Gas Decompression (RGD) resistant O-rings and PEEK anti-extrusion back-up rings, for subsurface safety valves, sliding sleeves, liner hangers, packers and well-intervention equipment.',
  'Downhole equipment sees high temperature, high differential pressure, aggressive hydrocarbons, sour gas, pressure cycling and rapid decompression. The right material and geometry decide equipment integrity, leakage and reliability.',
];

export const dhCapabilities = [
  'High-pressure, high-temperature sealing',
  'Resistance to aggressive oilfield fluids',
  'Anti-extrusion protection',
  'RGD-resistant elastomer options',
  'Custom sealing profiles',
  'Made to drawings and requirements',
];

export const dhProducts = [
  { name: 'Unified Stack Seal', tag: 'Up to 15,000 PSI · this design only', image: imgUnifiedStack,
    desc: 'A compact, mechanically locked, bi-directional sealing assembly that holds pressure from either direction and reduces installation errors. The 15,000 PSI figure is Mithson’s published reference for this design, not a rating for every configuration.',
    materials: 'Filled PTFE, PEEK', uses: 'Sliding sleeves, liner hangers, pressure-control tools.' },
  { name: 'Packer Elements', tag: 'Zonal isolation', image: imgPacker,
    desc: 'Elastomer elements that expand or compress against the casing or wellbore when set, isolating zones during production, testing, stimulation and intervention.',
    materials: 'NBR, HNBR, FKM', uses: 'Production packers, liner hangers, completion and workover equipment.' },
  { name: 'RGD-Resistant O-Rings', tag: 'Gas service', image: imgRgdOring,
    desc: 'Compounds chosen to resist blistering and cracking when absorbed gas expands during a sudden pressure drop, selected to the gas, pressure, temperature and decompression profile.',
    materials: 'Selected HNBR, FKM, FFKM', uses: 'Wellheads, subsurface safety valves, BOPs, gas connections.' },
  { name: 'PEEK Back-up Rings', tag: '−60°C to +260°C typical PEEK', image: imgPeekBackup,
    desc: 'Support the primary O-ring and close the extrusion gap. Uncut, scarf-cut and spiral-cut. A supporting part, not a primary seal; pressure capability is application-specific.',
    materials: 'PEEK', uses: 'Subsurface safety valves, pressure-control equipment.' },
];

export const dhHowItWorks = [
  { icon: 'shield', title: 'Pressure containment', text: 'Seals stop fluid migrating between pressure zones; the geometry must suit the differential pressure and the equipment.' },
  { icon: 'ruler', title: 'Anti-extrusion protection', text: 'Back-up rings restrict the clearance gap the elastomer would otherwise deform into.' },
  { icon: 'flask', title: 'Chemical compatibility', text: 'Materials are chosen to the actual fluids: hydrocarbons, water, treatment chemicals, gases and corrosives.' },
  { icon: 'thermo', title: 'Temperature stability', text: 'Properties and dimensions must hold across the full range, including thermal cycling.' },
];

export const dhConditions = [
  { icon: 'gauge', title: 'High and differential pressure', text: 'Pressure forces elastomers into clearances, causing extrusion and nibbling.', list: ['Differential pressure', 'Extrusion clearance', 'Hardness and geometry', 'Pressure cycling'] },
  { icon: 'thermo', title: 'High temperature', text: 'Heat changes hardness, compression set, chemical resistance and stability.', list: ['Continuous temperature', 'Short excursions', 'Thermal cycling', 'Load at temperature'] },
  { icon: 'drop', title: 'Aggressive chemicals', text: 'Crude, gas, condensate, produced water, drilling and completion fluids, treatment chemicals.', list: ['Assessed against actual composition', 'Exposure conditions'] },
  { icon: 'alert', title: 'Sour gas and H₂S', text: 'H₂S affects elastomers and metals alike.', list: ['H₂S and CO₂ concentration', 'Water content', 'Pressure, temperature, duration', 'Qualification requirements'] },
  { icon: 'spark', title: 'Rapid pressure changes', text: 'Absorbed gas expands on sudden depressurisation. RGD-resistant compounds and qualification testing address it.' },
];

export const dhMaterials = [
  { title: 'PEEK', text: 'Back-up rings, structural sealing parts, polymer inserts.', list: ['High strength', 'Good creep resistance', 'Dimensional stability', 'Precision-machined anti-extrusion parts'] },
  { title: 'PTFE', text: 'Unified stack seals, dynamic elements, low-friction interfaces.', list: ['Very low friction', 'Excellent chemical resistance', 'Filled grades for strength'] },
  { title: 'HNBR', text: 'Packer elements, RGD O-rings, static and dynamic seals.', list: ['Oil and fuel resistance', 'Better heat than NBR', 'Abrasion resistance', 'Compound-dependent sour service'] },
  { title: 'FKM', text: 'RGD O-rings, downhole elastomer seals, high-temperature assemblies.', list: ['Good high-temperature capability', 'Resists many oils and fuels'] },
  { title: 'FFKM', text: 'Specialised chemical service and critical static seals.', list: ['Very broad chemical resistance', 'Excellent thermal capability in suitable grades'] },
  { title: 'NBR', text: 'General-purpose packer elements, oilfield O-rings, static seals.', list: ['Resists many petroleum oils', 'Economical option'] },
];

export const dhCompare = {
  cols: ['Material', 'Primary strength', 'Typical application'],
  rows: [
    ['PEEK', 'Mechanical strength and dimensional stability', 'Back-up rings'],
    ['PTFE', 'Low friction and chemical resistance', 'Unified stack seals'],
    ['HNBR', 'Oilfield compatibility and mechanical strength', 'Packers and RGD O-rings'],
    ['FKM', 'Hydrocarbon resistance and heat performance', 'Downhole O-rings'],
    ['FFKM', 'Broad chemical resistance', 'Specialised high-performance seals'],
    ['NBR', 'General oil resistance and cost efficiency', 'Packer elements'],
  ],
};

export const dhApplications = [
  { icon: 'shield', title: 'Subsurface safety valves', text: 'Safety-critical valves controlling hydrocarbon flow in production wells.', list: ['PEEK back-up rings', 'O-rings', 'Unified stack seals'] },
  { icon: 'cycle', title: 'Sliding sleeve assemblies', text: 'Selectively open or close communication paths in the completion.', list: ['Unified stack seals', 'PTFE sealing elements', 'PEEK components'] },
  { icon: 'weight', title: 'Packer assemblies', text: 'Isolate wellbore zones in production, testing and intervention.', list: ['Packer elements', 'HNBR seals', 'FKM seals'] },
  { icon: 'gear', title: 'Liner hanger systems', text: 'Support and seal liner assemblies in the wellbore.', list: ['Unified stack seals', 'Packer elements', 'Supporting elastomer seals'] },
  { icon: 'alert', title: 'Blowout preventers', text: 'Well control during drilling and intervention, to the equipment specification.', list: ['RGD-resistant O-rings', 'HNBR compounds', 'FKM compounds'] },
  { icon: 'gauge', title: 'Wellhead and pressure control', text: 'Dependable sealing interfaces for pressure containment.', list: ['RGD-resistant O-rings', 'PEEK back-up rings', 'Polymer sealing elements'] },
];

export const dhSteps = [
  { title: 'Application assessment', text: 'Equipment, pressure, temperature, fluid composition, movement and sealing requirement.' },
  { title: 'Material selection', text: 'Elastomers and thermoplastics matched to the service and mechanical needs.' },
  { title: 'Design and dimensional review', text: 'Drawings, grooves, tolerances, extrusion clearances and assembly.' },
  { title: 'Manufacturing', text: 'Precision manufacturing processes with quality controls.' },
  { title: 'Inspection and verification', text: 'Dimensions, material requirements and inspection criteria.' },
  { title: 'Technical support', text: 'Material selection, installation considerations and specifications.' },
];

export const dhChecklist = [
  { title: 'Operating', items: ['Minimum and maximum temperature', 'Working and differential pressure', 'Pressure cycling and spikes', 'Static or dynamic movement'] },
  { title: 'Chemical', items: ['Crude oil and gas composition', 'H₂S and CO₂ concentrations', 'Produced water and salinity', 'Completion and stimulation chemicals'] },
  { title: 'Mechanical', items: ['Groove dimensions', 'Extrusion clearance', 'Surface finish', 'Required hardness', 'Thermal expansion and tolerances'] },
  { title: 'Documentation', items: ['Equipment drawing', 'Material grade and compound', 'Qualification standards', 'Inspection, testing and traceability'] },
];

export const dhStandards = [
  { icon: 'doc', title: 'API 6A', text: 'Wellhead and tree equipment. Compliance is established for the particular application; Annex F requirements are considered where relevant.' },
  { icon: 'doc', title: 'API 11D1', text: 'Qualification of packers and bridge plugs used in well operations.' },
  { icon: 'doc', title: 'NORSOK M-710', text: 'Qualification of non-metallic sealing materials, including elastomer testing and RGD resistance.' },
  { icon: 'doc', title: 'ISO 23936-1', text: 'Non-metallic materials in contact with oil and gas production media: thermoplastics.' },
  { icon: 'doc', title: 'ISO 23936-2', text: 'Elastomeric materials in contact with oil and gas production media.' },
];

export const dhQuality = ['Material identification and verification', 'Dimensional inspection', 'Visual inspection', 'Hardness testing for elastomers', 'Application-specific pressure testing', 'Chemical compatibility evaluation', 'RGD testing where required', 'Documentation and traceability'];

export const dhFaqs = [
  { q: 'What are downhole seals used for?', a: 'They stop unwanted fluid migration and keep pressure isolation in subsurface equipment such as safety valves, packers, sliding sleeves and liner hangers.' },
  { q: 'What does a PEEK back-up ring do?', a: 'It supports the primary elastomer seal and helps prevent extrusion into the clearance gap at high pressure.' },
  { q: 'Does a PEEK back-up ring seal on its own?', a: 'No. A conventional back-up ring is a supporting anti-extrusion part that works alongside a primary seal such as an O-ring.' },
  { q: 'What is RGD in oil and gas sealing?', a: 'Rapid gas decompression: gas absorbed into an elastomer expands quickly after a sudden pressure drop, causing blistering, cracking and internal damage.' },
  { q: 'Which materials suit downhole applications?', a: 'PEEK, PTFE, HNBR, FKM, FFKM and NBR, among others. The choice depends on pressure, temperature, fluid chemistry and equipment design.' },
  { q: 'Can Mithson make customised sealing components?', a: 'Yes. Submit drawings, dimensions and application requirements for engineering evaluation and manufacturing feasibility.' },
  { q: 'What information is needed to select a seal?', a: 'Equipment type, temperature, pressure, fluid composition, dimensions, groove configuration and movement.' },
  { q: 'Are all PEEK back-up rings suitable for 15,000 PSI?', a: 'No. Pressure capability depends on the PEEK grade, geometry, clearance gap, dimensions and assembly design, and is confirmed for each configuration.' },
];

export const dhRelated = [
  { name: 'Seals – Valve', image: imgValve, path: '/products/seals-valve', desc: 'PTFE, PEEK and other polymer sealing components for industrial valves.' },
  { name: 'Plug & Lined Valve', image: imgPlugLined, path: '/products/plug-lined-valve', desc: 'PTFE plug-valve sleeves, liners and sealing components.' },
  { name: 'Seals – Hydraulic', image: imgHydraulic, path: '/products/seals-hydraulic', desc: 'Sealing components for pressure-operated hydraulic equipment.' },
  { name: 'UNI-LUBE Bearing', image: imgUniLube, path: '/products/uni-lube-bearing', desc: 'Self-lubricating polymer bearing solutions.' },
  { name: 'Diaphragm – AODD', image: imgDiaphragm, path: '/products/diaphragm-aodd', desc: 'Diaphragm pump sealing components.' },
  { name: 'Custom Molded Products', image: imgMolded, path: '/products/custom-molded-products', desc: 'Application-specific molded polymer components.' },
  { name: 'Machined Products', image: imgMachined, path: '/products/machined-products', desc: 'Precision-machined polymer engineering components.' },
];

// Custom Molded and Machined Products. The wording is original and the processes are general
// industry practice, so everything here is awaiting Mithson's validation. Materials come from
// company.js. Do not add sizes, tolerances or minimum quantities until Mithson confirms them.
// Photos are Mithson's own images of similar parts: change one `image` import to swap a photo.

import { elastomerRanges } from './typicalSpecs';

import imgORing from '../pages/Products/Seals-Valve/assets/Elastomer O-Ring.png';
import imgPacker from '../assets/downhole/Packer.png';
import imgBopSeal from '../assets/api6a/BOP Seal.png';
import imgDiaphragm from '../pages/Products/Diaphragm-AODD/assets/Diaphragm.png';
import imgPumpSeal from '../assets/wellservice/Mud Pump Liner Seal.png';
import imgEncapsulated from '../pages/Products/Encapsulated-O-Ring/assets/Encapsulated O-Ring.png';

import imgSeatRing from '../assets/api6d/Peek Seat Ring.png';
import imgBackUpRing from '../assets/downhole/Peek Back-Up Ring.png';
import imgThrustWasher from '../pages/Products/Washers-Transmission/assets/PEEK-Thrust Washer.png';
import imgWearRing from '../pages/Products/Seals-Hydraulic/assets/Wear Rings.png';
import imgBall from '../pages/Products/Diaphragm-AODD/assets/PTFE Ball.png';
import imgNozzle from '../pages/Products/Nozzles-Power-Grid/assets/PTFE Nozzles-1.png';
import imgRetainer from '../assets/api6d/Seat Retainer.png';
import imgSpringSeal from '../pages/Products/Seals-Valve/assets/Spring Energized Seals.png';

const typicalTemperature = (material) =>
  elastomerRanges.rows.find((row) => row.material === material)?.temperature;

export const manufacturingSteps = [
  { title: 'Share your requirement', text: 'Send a drawing, a sample or a description of the part and where it will be used.' },
  { title: 'Engineering review', text: 'Our engineers review the design, working conditions and quantity, then recommend a material.' },
  { title: 'Quotation and approval', text: 'You receive a quotation. Any tooling, samples and inspection needs are agreed before work starts.' },
  { title: 'Manufacture and inspection', text: 'The parts are made and checked against your drawing and the agreed requirements.' },
  { title: 'Delivery and support', text: 'Parts are packed and delivered, and our team stays available for questions and repeat orders.' },
];

export const quoteChecklist = [
  'Drawing or sample, with dimensions and any tolerances',
  'Fluid, gas or chemical the part will touch',
  'Working temperature, minimum and maximum',
  'Working pressure and any pressure changes',
  'Movement: static, rotating or sliding, with speed if known',
  'Quantity needed, now and for repeat orders',
  'Material, industry or test requirements',
  'Required delivery date',
];

export const processComparison = {
  rows: [
    { topic: 'Best suited to', molded: 'Flexible rubber parts and shapes that are hard to cut', machined: 'Rigid polymer parts and precise features' },
    { topic: 'Tooling', molded: 'Usually needs a mold made for the part', machined: 'Usually needs no part-specific mold' },
    { topic: 'Quantity', molded: 'Often better value for repeat production', machined: 'Often suits prototypes and smaller batches' },
    { topic: 'Design changes', molded: 'A change may mean altering the mold', machined: 'Often a change to the machine program' },
    { topic: 'Material use', molded: 'Material is formed close to the final shape', machined: 'Material is cut away from a larger piece' },
  ],
  note: 'Many parts can be made either way, and PTFE parts often use both: the material is first molded into a blank, then machined to size. Our engineers can advise on your part.',
};

export const customManufacturing = {
  'custom-molded-products': {
    id: 'custom-molded-products',
    slug: 'custom-molded-products',
    name: 'Custom Molded Products',
    path: '/products/custom-molded-products',
    category: 'custom',
    custom: true,
    image: imgDiaphragm,
    tagline: 'Elastomer and polymer parts formed in a mold for your application.',
    homeText: 'O-rings, diaphragms, packers and other seals shaped to fit your equipment, in the rubber or polymer your conditions demand.',
    materials: ['HNBR', 'FKM/Viton', 'FFKM', 'EPDM', 'PU', 'PTFE'],
    intro:
      'When a standard seal does not fit your equipment or survive your conditions, a molded part can be made around your design. We work with you to match the shape, material and performance to the job.',
    what: {
      title: 'What are custom molded products?',
      paragraphs: [
        'Molding forms a part by pressing material into a shaped cavity, usually with heat and pressure. With rubber, the heat also cures the material, turning it from a soft compound into a tough, elastic part that keeps its shape and springs back after being squeezed.',
        'This makes molding a natural choice for seals. A rubber part can be formed in one piece, with curved lips, ribs and thick and thin sections that would be difficult or wasteful to cut from solid material.',
        'A custom part starts from your drawing or sample. The shape and rubber compound are chosen for your fluid, temperature, pressure and movement, and the mold allows the part to be repeated from one order to the next.',
      ],
    },
    makes: {
      title: 'What can be molded',
      items: [
        { name: 'O-rings', image: imgORing, desc: 'Round sealing rings in special sizes and compounds, including grades for gas service where sudden pressure drops can damage ordinary rubber.' },
        { name: 'Encapsulated O-rings', image: imgEncapsulated, desc: 'An elastic core inside a chemically resistant outer jacket, for fluids that would attack a standard O-ring.', path: '/products/encapsulated-o-ring' },
        { name: 'Diaphragms', image: imgDiaphragm, desc: 'Flexible barriers that separate the pumped fluid from the drive side of air-operated pumps and similar equipment.', path: '/products/diaphragm-aodd' },
        { name: 'Packer elements', image: imgPacker, desc: 'Heavy rubber sealing elements that expand to close off the space between tools and the well bore.', path: '/industries/downhole-tools' },
        { name: 'BOP seals', image: imgBopSeal, desc: 'Large, rugged seals that help blowout preventers hold back well pressure, often combining rubber with metal parts.', path: '/oil-gas-seal/api-6a-wellhead-equipment-seal' },
        { name: 'Pump and liner seals', image: imgPumpSeal, desc: 'Sealing rings for mud pumps and other equipment that handles abrasive fluids under repeated pressure.', path: '/oil-gas-seal/well-service-equipment-seal' },
      ],
    },
    processes: {
      title: 'How molded parts are made',
      intro: 'The right method depends on the shape, material and quantity. These are the main methods used across the industry.',
      items: [
        { name: 'Compression molding', text: 'Measured rubber is placed in an open mold, which then closes under heat and pressure. It suits larger, simpler parts such as gaskets, seals and diaphragms, and tooling is usually lower in cost.' },
        { name: 'Transfer molding', text: 'Rubber is held in a chamber and pushed into a closed mold through small channels. It suits more detailed shapes and parts that hold a metal insert.' },
        { name: 'Injection molding', text: 'Heated rubber is forced into a tightly closed mold. It suits detailed parts and repeat production, where a consistent result across many parts matters.' },
        { name: 'Rubber-to-metal bonding', text: 'A prepared metal part goes into the mold with the rubber, and the two bond as the rubber cures. The result is one strong part with rubber sealing and metal support.' },
        { name: 'PTFE compression molding', text: 'PTFE does not flow like rubber when heated. Its powder is pressed into shape and then heated in an oven so the particles fuse, often making a blank that is machined afterwards.' },
      ],
    },
    materialTable: {
      title: 'Materials for molded parts',
      intro: 'The material decides how a seal handles heat, chemicals and gas. These are the materials Mithson works with for this kind of part.',
      rows: [
        { material: 'HNBR', temperature: typicalTemperature('HNBR'), why: 'Better resistance to heat, H₂S and rapid gas decompression than standard nitrile rubber.' },
        { material: 'FKM / Viton', temperature: typicalTemperature('FKM'), why: 'Good for high temperatures, hydrocarbons, fuels and many solvents.' },
        { material: 'FFKM', temperature: typicalTemperature('FFKM'), why: 'For the hottest, harshest service, with very wide chemical resistance.' },
        { material: 'EPDM', temperature: typicalTemperature('EPDM'), why: 'Suits steam, hot water and polar solvents, but not hydrocarbon oils.' },
        { material: 'PU', why: 'Tough and wear-resistant, often chosen for hydraulic and abrasive service.' },
        { material: 'PTFE', why: 'Very low friction and wide chemical resistance. Compression molded rather than rubber-molded.' },
      ],
    },
    uses: ['Valves and actuators', 'Pumps and compressors', 'Hydraulic systems', 'Wellhead and downhole tools', 'Well service equipment', 'Chemical and fluid handling equipment'],
    industries: ['Oil & Gas', 'Automotive', 'Life Science', 'Mining', 'Semiconductor', 'Robotics', 'Aerospace'],
  },

  'machined-products': {
    id: 'machined-products',
    slug: 'machined-products',
    name: 'Machined Products',
    path: '/products/machined-products',
    category: 'custom',
    custom: true,
    image: imgSeatRing,
    tagline: 'Precision polymer parts cut to your drawing from high-performance materials.',
    homeText: 'Seat rings, back-up rings, thrust washers and other precision parts, machined from PTFE, PEEK and other engineering polymers.',
    materials: ['PTFE', 'RTFE', 'Modified PTFE (TFM & NXT)', 'VICTREX PEEK', 'VESPEL', 'PFA', 'Nylon', 'Delrin/POM'],
    intro:
      'Machined parts are cut to your drawing from high-performance polymers. This route suits rigid parts, precise features, prototypes and smaller batches, because the design can be made without building a mold first.',
    what: {
      title: 'What are machined products?',
      paragraphs: [
        'Machining starts with solid material, such as a rod, tube, plate or molded blank, and cuts away everything that is not the part. Computer-controlled lathes and mills follow a program made from your drawing, so the same part can be repeated.',
        'Polymers are very different to machine than metal. They expand more with heat, and softer grades such as PTFE can move under the pressure of clamping or cutting. Sharp tools, gentle holding and controlled heat all help keep a part at the right size.',
        'High-performance polymers can also carry internal stress from how the raw material was made. Harder materials like PEEK are often stress-relieved by controlled heating and cooling, so the finished part stays stable.',
      ],
    },
    makes: {
      title: 'What can be machined',
      items: [
        { name: 'Valve seat rings', image: imgSeatRing, desc: 'Rigid polymer rings that seal against a ball or gate in high-pressure valves, including LNG and pipeline service.', path: '/products/seals-valve' },
        { name: 'Seat retainers', image: imgRetainer, desc: 'Precise rings that hold seats and seals in position inside a valve.', path: '/oil-gas-seal/api-6d-ball-valve-lng-seal' },
        { name: 'Back-up rings', image: imgBackUpRing, desc: 'Stiff rings that sit beside a softer seal and stop it from being forced into the gap under pressure.', path: '/industries/downhole-tools' },
        { name: 'Spring-energized seal jackets', image: imgSpringSeal, desc: 'Polymer jackets machined to shape for spring-energized seals, where lip shape and finish affect sealing.', path: '/products/m-uni-seal' },
        { name: 'Thrust washers', image: imgThrustWasher, desc: 'Flat wear parts that take sideways load between moving parts in transmissions, with less friction than metal on metal.', path: '/products/washers-transmission' },
        { name: 'Wear and guide rings', image: imgWearRing, desc: 'Rings that keep pistons and rods centered in hydraulic cylinders and stop metal parts from touching.', path: '/products/seals-hydraulic' },
        { name: 'PTFE balls', image: imgBall, desc: 'Smooth chemical-resistant balls for check valves and air-operated pumps.', path: '/products/diaphragm-aodd' },
        { name: 'Nozzles', image: imgNozzle, desc: 'Filled-PTFE nozzles for electrical switchgear, where shape and material both affect performance.', path: '/products/nozzles-power-grid' },
      ],
    },
    processes: {
      title: 'How machined parts are made',
      intro: 'A part may pass through several of these steps. These are the main methods used across the industry.',
      items: [
        { name: 'CNC turning', text: 'The material spins while a cutting tool shapes it. This is the main method for round parts such as rings, seats, bushes and seals.' },
        { name: 'CNC milling', text: 'A rotating cutter moves across the material to make flats, slots, pockets and other features that are not round.' },
        { name: 'Drilling and threading', text: 'Holes and threads are added for fluid paths, mounting and fastening.' },
        { name: 'Stress relieving', text: 'Controlled heating and cooling before or between cuts lets internal stress settle, so the part keeps its size over time.' },
        { name: 'Finishing and inspection', text: 'Edges are cleaned up and sealing surfaces are checked. Finished parts are measured against the drawing.' },
      ],
    },
    materialTable: {
      title: 'Materials for machined parts',
      intro: 'Each polymer offers a different balance of strength, friction, heat and chemical resistance. These are the materials Mithson works with for this kind of part.',
      rows: [
        { material: 'PTFE', why: 'Very low friction and wide chemical resistance, but soft and can creep under load.' },
        { material: 'RTFE', why: 'Reinforced PTFE, with better wear and load resistance than plain PTFE.' },
        { material: 'Modified PTFE (TFM & NXT)', why: 'Keeps the chemical resistance of PTFE, with less creep and a smoother finish.' },
        { material: 'VICTREX PEEK', temperature: 'Up to 260°C continuous', why: 'Strong and stiff, with good resistance to wear, chemicals and high temperature.' },
        { material: 'VESPEL', why: 'A polyimide for high heat and wear, where parts must hold their shape.' },
        { material: 'PFA', why: 'A fluoropolymer with chemical resistance similar to PTFE, used where purity matters.' },
        { material: 'Nylon', why: 'Tough and economical, with good wear resistance for general engineering parts.' },
        { material: 'Delrin / POM', why: 'Stiff and easy to machine accurately, with low friction and low moisture uptake.' },
      ],
    },
    uses: ['Valve seats, seals and retainers', 'Transmission and drive systems', 'Hydraulic cylinders', 'Compressors and pumps', 'Downhole tools', 'Electrical switchgear'],
    industries: ['Oil & Gas', 'Automotive', 'Life Science', 'Mining', 'Semiconductor', 'Robotics', 'Aerospace'],
  },
};

export const customProducts = Object.values(customManufacturing);

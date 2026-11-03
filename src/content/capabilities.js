// Capability and company pages. Visible text only repeats what Mithson's website already states.
// Anything else is `pending-validation`, so it stays hidden until Mithson confirms it.
// Do not add equipment, sizes, lead times or test ranges without Mithson's approval.
import { company } from './company';
import imgPeekRing from '../pages/Products/Seals-Valve/assets/Peek Seat Ring.png';
import imgSpringSeal from '../pages/Products/Seals-Valve/assets/Spring Energized Seals.png';
import imgPistonSeal from '../pages/Products/Seals-Hydraulic/assets/Piston Seals.png';
import imgWearRing from '../pages/Products/Seals-Hydraulic/assets/Wear Rings.png';
import imgElastomerRing from '../pages/Products/Seals-Valve/assets/Elastomer O-Ring.png';

const pending = 'pending-validation';

export const capabilitySteps = [
  { title: 'Material', text: 'Choose a polymer that suits the temperature, pressure and media.', path: '/capabilities/materials' },
  { title: 'Design', text: 'Review your application and shape the seal around it.', path: '/capabilities/engineering-simulation' },
  { title: 'Prototype', text: 'Check the idea with parts before production.', path: '/capabilities/prototyping-samples' },
  { title: 'Manufacture', text: 'Make parts by molding and machining.', path: '/capabilities/manufacturing' },
  { title: 'Test', text: 'Inspect and test parts against your requirements.', path: '/capabilities/in-house-testing' },
  { title: 'Support', text: 'Stay in touch with our team after delivery.', path: '/capabilities/customer-support' },
];

export const capabilityPages = {
  manufacturing: {
    label: 'Capabilities',
    title: 'Manufacturing',
    photo: 'manufacturing',
    image: imgPistonSeal,
    intro: 'Mithson makes seals and polymer components by molding and machining, chosen to suit the part, the material and your drawing.',
    description: 'How Mithson manufactures molded and machined seals and polymer components.',
    sections: [
      {
        title: 'Choosing the right route',
        items: [
          { title: 'Part shape', text: 'Molding suits flexible parts and complex rubber shapes. Machining suits rigid parts and precise features.' },
          { title: 'Quantity', text: 'Machining suits prototypes and smaller runs, while molding can suit repeat production once tooling is ready.' },
          { title: 'Material', text: 'Elastomers, fluoropolymers and thermoplastics each need a suitable forming method.' },
          { title: 'Quality needs', text: 'Tolerances, finish and inspection requirements all influence the route.' },
        ],
      },
      {
        title: 'How we make parts',
        items: [
          { title: 'Custom molding', text: 'Forming flexible rubber parts and shapes that are hard to cut.', path: '/products/custom-molded-products' },
          { title: 'Precision machining', text: 'Cutting rigid polymer parts, prototypes and precise features to your drawing.', path: '/products/machined-products' },
          { title: 'Finishing and control', text: 'Quality checks at each stage of machining, molding and finishing.', path: '/who-we-are/hsse-and-quality' },
          { title: 'Cold Isostatic Pressing', text: 'Used for PTFE nozzles, with even pressure from all sides to achieve high density and structural integrity.' },
          { title: 'PTFE processing', text: 'Details of PTFE forming and sintering.', status: pending },
          { title: 'Assembly and kitting', text: 'Grouping parts into ready-to-use sets.', status: pending },
          { title: 'Large-diameter parts', text: 'Largest sizes Mithson can make.', status: pending },
          { title: 'Urgent supply', text: 'Fast-turnaround service details.', status: pending },
        ],
      },
    ],
  },
  'engineering-simulation': {
    label: 'Capabilities',
    title: 'Engineering & Simulation',
    photo: 'engineering-simulation',
    image: imgSpringSeal,
    intro: 'A good seal starts with a clear picture of its job. Our engineers look at how your application works, then match the seal shape and material to it.',
    description: 'How Mithson reviews sealing applications, from operating conditions to design recommendations.',
    diagram: true,
    sections: [
      {
        title: 'Our engineering approach',
        items: [
          { title: 'Understand the job', text: 'We begin with how the equipment works and what could cause a seal to fail.' },
          { title: 'Match the material', text: 'We compare elastomers, fluoropolymers and thermoplastics for the media and temperature.' },
          { title: 'Shape the design', text: 'Seal profile, spring load, hardware fit and clearances are reviewed together.' },
          { title: 'Check and improve', text: 'Prototypes, testing and field feedback help confirm the design.' },
        ],
      },
      {
        title: 'What we need from you',
        items: [
          { title: 'Temperature', text: 'Lowest, normal, highest and test temperatures.' },
          { title: 'Pressure', text: 'Normal, highest and test pressures, and which way pressure acts.' },
          { title: 'Media', text: 'The liquids and gases the seal will touch.' },
          { title: 'Motion', text: 'Static, rotating or reciprocating, with speed and travel.' },
          { title: 'Dimensions', text: 'Hardware sizes, clearances and any drawings.' },
        ],
      },
      {
        title: 'What a review looks at',
        items: [
          { title: 'Contact pressure', text: 'Whether the seal presses evenly enough to hold the media.' },
          { title: 'Extrusion', text: 'Whether pressure could push the seal into a gap.' },
          { title: 'Temperature change', text: 'How heat and cold change the fit of the seal and hardware.' },
          { title: 'Finite element analysis', text: 'FE software, who performs it and a sample result.', status: pending },
        ],
      },
    ],
    note: 'Ask our engineers which analysis suits your application.',
  },
  'in-house-testing': {
    label: 'Capabilities',
    title: 'In-House Testing',
    photo: 'in-house-testing',
    image: imgElastomerRing,
    intro: 'Testing and inspection run through Mithson\'s quality process, from incoming material to the finished part.',
    description: 'How Mithson inspects and tests materials, prototypes and finished parts.',
    sections: [
      {
        title: 'Why testing matters',
        items: [
          { title: 'Confirm the material', text: 'Checks help show the supplied material matches its approved specification.' },
          { title: 'Reduce risk', text: 'Finding a problem at prototype stage costs less than finding it in service.' },
          { title: 'Support documentation', text: 'Quality records help customers trace and review what was supplied.' },
        ],
      },
      {
        title: 'Checks in our quality process',
        items: [
          { title: 'Incoming material inspection', text: 'Raw polymers and metals are checked against approved specifications.' },
          { title: 'Prototype testing', text: 'Dimensional, mechanical and chemical testing before production approval.' },
          { title: 'In-process checks', text: 'Quality checks at each stage of machining, molding and finishing.' },
          { title: 'Final inspection', text: 'Dimensional, visual and functional verification against customer drawings.' },
        ],
      },
    ],
    tests: [
      { name: 'Hardness', method: 'ASTM D2240', proves: 'Material hardness' },
      { name: 'Tensile', method: 'ASTM D412 or D638', proves: 'Strength and stretch' },
      { name: 'Compression set', method: 'ASTM D395', proves: 'Rubber recovery after squeeze' },
      { name: 'Fluid ageing', method: 'Agreed test plan', proves: 'Resistance to fluids' },
      { name: 'Ozone', method: 'Agreed test plan', proves: 'Rubber resistance to ozone' },
      { name: 'Thermal analysis', method: 'DSC, TGA, DMA', proves: 'Behaviour under heat' },
      { name: 'Material identity', method: 'FTIR', proves: 'Correct material' },
      { name: 'Gas decompression', method: 'NORSOK M-710 or ISO 23936', proves: 'Rubber resistance in high-pressure gas' },
      { name: 'Dimensional inspection', method: 'Customer drawing', proves: 'Size accuracy' },
      { name: 'Pressure or functional test', method: 'Agreed test plan', proves: 'Real sealing behaviour' },
    ].map((test) => ({ ...test, unit: 'To confirm', range: 'To confirm', where: 'To confirm', status: pending })),
    materialRecords: true,
  },
  'prototyping-samples': {
    label: 'Capabilities',
    title: 'Prototyping & Samples',
    photo: 'prototyping-samples',
    image: imgPeekRing,
    intro: 'Prototypes let you check a design before production. Machining suits this stage because parts can be cut to your drawing.',
    description: 'How Mithson moves a new seal or polymer part from drawing to approved sample.',
    sections: [
      {
        title: 'Why start with a prototype',
        items: [
          { title: 'Check fit', text: 'A physical part confirms the dimensions and assembly before production.' },
          { title: 'Compare materials', text: 'Samples help compare options in real or test conditions.' },
          { title: 'Find problems early', text: 'Design changes are easier before tooling and production begin.' },
        ],
      },
      {
        title: 'From drawing to approval',
        ordered: true,
        items: [
          { title: 'Share your drawing', text: 'Send your drawing, sample details and application data.' },
          { title: 'Choose the material', text: 'Agree a material that suits the conditions.' },
          { title: 'Build the prototype', text: 'Make parts to review the design.' },
          { title: 'Test the prototype', text: 'Carry out dimensional, mechanical and chemical testing.' },
          { title: 'Approve for production', text: 'Move to production once the prototype is approved.' },
          { title: 'Sample lead times', text: 'Typical time to supply samples.', status: pending },
          { title: 'PPAP', text: 'Production part approval support.', status: pending },
        ],
      },
    ],
  },
  'customer-support': {
    label: 'Capabilities',
    title: 'Customer Support',
    image: imgWearRing,
    intro: 'Talk to Mithson in the way that suits you, whether you have a finished drawing or an early question.',
    description: 'Ways to contact Mithson for sealing enquiries, application reviews and meetings.',
    sections: [
      {
        title: 'Support at every stage',
        items: [
          { title: 'Before you order', text: 'Pre-sales support helps you define requirements and choose a suitable solution.' },
          { title: 'During the project', text: 'Our team stays responsive as drawings, samples and details develop.' },
          { title: 'After delivery', text: 'Post-sales support and field feedback feed into continuous improvement.' },
        ],
      },
      {
        title: 'How to reach us',
        items: [
          { title: 'Send application data', text: 'Share operating conditions and drawings in one form.', path: '/connect-with-us/application-data' },
          { title: 'Book a meeting', text: 'Choose a time for a Microsoft Teams or Google Meet call.', path: '/book-a-meeting' },
          { title: 'Send an enquiry', text: 'Ask a question or upload your files.', path: '/connect-with-us' },
          { title: 'After delivery', text: 'Share field feedback so issues can be reviewed and corrected.' },
          { title: 'Installation guidance', text: 'Installation help and guides.', status: pending },
          { title: 'Failure review', text: 'How a returned or failed part is reviewed.', status: pending },
          { title: 'On-site training', text: 'Training topics and locations.', status: pending },
          { title: 'Distributors and sales regions', text: 'Where Mithson has local partners.', status: pending },
        ],
      },
    ],
  },
};

export const companyPages = {
  facilities: {
    label: 'Company',
    title: 'Facilities',
    photo: 'facilities',
    intro: `${company.name} operates from a corporate office and a manufacturing location in Tamil Nadu, India.`,
    description: 'Mithson Sealing Solutions office and Unit-II locations in Tamil Nadu, India.',
    sections: [
      {
        title: 'Our locations',
        items: [
          ...company.offices.map(({ label, address }) => ({ title: label, text: address.slice(1).join(' ') })),
          { title: 'Work at each site', text: 'Processes, machine groups and size limits for each location.', status: pending },
        ],
      },
    ],
  },
  sustainability: {
    label: 'Company',
    title: 'Sustainability',
    photo: 'sustainability',
    intro: 'Mithson is working towards Net Zero through green initiatives that aim to reduce its carbon footprint across Scope 1, Scope 2 and Scope 3 emissions.',
    description: 'Mithson Sealing Solutions sustainability actions and carbon reduction goals.',
    sections: [
      {
        title: 'Our actions',
        items: company.sustainability.map((title) => ({ title })),
      },
    ],
  },
};

// Facilities page copy, from the approved text supplied by the user (November 2026).
// Do not add floor areas, machine lists, headcounts or capacities until Mithson confirms them.
import { company } from './company';

const mapLink = (lines) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(', '))}`;
const [corporate, unit2] = company.offices;

export const facilitiesIntro = [
  'Mithson Sealing Solutions operates from its corporate office in Chennai and its Unit-II facility in Thiruporur, Chengalpattu, Tamil Nadu, India. Together, these locations support the company\'s activities in polymer engineering, sealing solution development, manufacturing coordination and customer engagement.',
  'With a heritage of more than 25 years in polymer engineering through the Fluoro Carbon Seals Group, Mithson focuses on developing precision sealing components and polymer solutions for demanding industrial applications.',
  'Our facilities support our commitment to understanding customer requirements, developing application-specific solutions and delivering products that meet agreed specifications.',
];

export const facilityFacts = [
  { icon: 'gear', title: '25+ Years', text: 'Polymer engineering heritage' },
  { icon: 'pin', title: '2 Locations', text: 'Corporate office & manufacturing' },
  { icon: 'layers', title: 'Advanced Materials', text: 'PTFE, PEEK, FKM, HNBR & more' },
  { icon: 'people', title: 'End-to-End Support', text: 'Engineering to post-delivery' },
];

export const locations = [
  {
    id: '01',
    tag: 'Registered & Corporate Office',
    name: 'Fluoro Carbon Tower, Chennai',
    address: ['3/748, Fluoro Carbon Tower,', 'Pillaiyar Kovil Street,', 'Mettukuppam, Chennai,', 'Tamil Nadu 600097, India.'],
    text: [
      "The corporate office serves as the company's registered and corporate address. It provides a point of contact for business enquiries, customer communication, coordination and corporate activities.",
      'Customers and business partners can contact the team here to discuss product requirements, commercial enquiries, technical discussions and potential business collaborations.',
    ],
    directions: mapLink(corporate.address.slice(1)),
    action: { label: 'Contact Our Team', to: '/connect-with-us' },
  },
  {
    id: '02',
    tag: 'Unit-II — Manufacturing Facility',
    name: 'Thiruporur, Chengalpattu',
    address: ['238/3, Venbedu Main Road,', 'Vembedu Bus Stop, Thiruporur,', 'Chengalpattu,', 'Tamil Nadu 603110, India.'],
    text: [
      "Unit-II is Mithson's manufacturing location in the Thiruporur region of Chengalpattu. It supports the company's industrial sealing and polymer component operations.",
      "The facility forms part of Mithson's manufacturing operations, supporting the development and production of polymer-based sealing solutions for industrial applications. Its role is connected to the wider engineering and manufacturing activities required to meet customer product specifications.",
    ],
    directions: mapLink(unit2.address.slice(1)),
    action: { label: 'Discuss a Manufacturing Requirement', to: '/connect-with-us/application-data' },
  },
];

export const capabilityCards = [
  { icon: 'cube', title: 'Polymer Component Manufacturing', path: '/capabilities/manufacturing', image: 'manufacturing', text: 'Development and manufacture of polymer-based sealing components for valves, pumps, compressors, hydraulic systems and other industrial equipment.' },
  { icon: 'layers', title: 'Material Expertise', path: '/capabilities/materials', image: 'materials', text: 'Material selection depends on the intended application, operating environment and customer requirements.', chips: ['PTFE', 'RTFE', 'Modified PTFE', 'PEEK', 'PFA', 'FEP', 'Nylon', 'FKM', 'HNBR', 'FFKM', 'EPDM', 'POM'] },
  { icon: 'chart', title: 'Engineering and Simulation', path: '/capabilities/engineering-simulation', image: 'engineering-simulation', text: 'Engineering activities support the evaluation of product geometry, material behaviour and application requirements during product development.' },
  { icon: 'ruler', title: 'Prototyping and Samples', path: '/capabilities/prototyping-samples', image: 'seals', text: 'Prototype and sample development supports design evaluation and customer review before proceeding with approved production requirements.' },
  { icon: 'flask', title: 'In-House Testing', path: '/capabilities/in-house-testing', image: 'records', text: 'Testing and verification activities support product evaluation against applicable specifications and agreed requirements. The specific tests performed depend on the product and its application.' },
  { icon: 'headset', title: 'Customer Support', path: '/capabilities/customer-support', image: 'capabilities-overview', text: 'Technical and customer support helps coordinate product requirements, application information, documentation and post-delivery communication.' },
];

export const facilityIndustries = [
  { title: 'Oil & Gas', image: 'Oil & Gas', icon: 'rig', path: '/oil-gas-seal', text: 'Sealing components for wellhead equipment, valves, downhole applications and other demanding oil and gas systems.' },
  { title: 'Automotive', image: 'Automotive', icon: 'car', path: '/industries/automotive', text: 'Polymer components and sealing solutions for relevant automotive systems and applications.' },
  { title: 'Life Sciences', image: 'Life Science', icon: 'flask', path: '/industries/life-science', text: 'Specialised polymer components for applications where material properties and operating requirements must be carefully considered.' },
  { title: 'Mining', image: 'Mining', icon: 'truck', path: '/industries/mining', text: 'Sealing solutions for equipment operating in demanding industrial and material-handling environments.' },
  { title: 'Semiconductor', image: 'Semiconductor', icon: 'chip', path: '/industries/semiconductor', text: 'Polymer components for applications where material selection, cleanliness and chemical compatibility may be important.' },
  { title: 'Aerospace & Robotics', image: 'Aerospace', icon: 'plane', path: '/industries/aerospace', text: 'Engineered polymer components for specialised applications requiring appropriate material and dimensional characteristics.' },
];

export const facilityMaterials = [
  { name: 'PTFE / RTFE', text: 'Fluoropolymer materials used in a range of sealing and component applications.' },
  { name: 'Modified PTFE', text: 'Specialised PTFE formulations selected for application-specific performance requirements.' },
  { name: 'PEEK', text: 'An engineering thermoplastic used in demanding mechanical and thermal environments.' },
  { name: 'PFA / FEP', text: 'Fluoropolymers used where chemical resistance and other application-specific properties are required.' },
  { name: 'Nylon / POM', text: 'Engineering thermoplastics used for selected mechanical components.' },
  { name: 'FKM / FFKM', text: 'Fluoroelastomers used in applications requiring appropriate chemical and temperature resistance.' },
  { name: 'HNBR / EPDM', text: 'Elastomer materials selected according to the operating environment.' },
  { name: 'Other Specialised Materials', text: 'Including VESPEL, Devlon, MoS₂-filled materials and other application-specific compounds.' },
];

export const developmentSteps = [
  { title: 'Understand the Requirement', image: 'engineering-simulation', text: 'Review customer drawings, specifications, operating conditions and component requirements.' },
  { title: 'Evaluate the Material', image: 'materials', text: 'Identify suitable polymer or elastomer options based on application conditions and material properties.' },
  { title: 'Engineer the Component', image: 'capabilities-overview', text: 'Develop the component design around the required dimensions, geometry and intended function.' },
  { title: 'Prototype and Review', image: 'seals', text: 'Where required, prepare prototypes or samples for evaluation against agreed requirements.' },
  { title: 'Manufacture and Verify', image: 'manufacturing', text: 'Carry out manufacturing and applicable inspection or testing activities in accordance with product requirements.' },
  { title: 'Deliver and Support', image: 'building', text: 'Coordinate product documentation, delivery requirements and post-delivery customer support.' },
];

export const qualityCommitment = [
  "Mithson's approach to quality extends across product development and manufacturing. The company identifies material selection, process monitoring, inspection and post-delivery support as important parts of its quality approach.",
  'The focus is to maintain alignment between customer requirements, material specifications, engineering decisions and finished product expectations.',
];

// Resources section. Add approved brochures and datasheets to `approvedDocuments` with a file
// `href`, and case studies or installation guides with their content when Mithson supplies them.
import { products } from './products';

export const resourceTabs = [
  { label: 'Document Center', path: '/resources' },
  { label: 'Guides', path: '/resources/guides' },
  { label: 'Technical Support', path: '/resources/technical-support' },
  { label: 'FAQs', path: '/resources/faqs' },
  { label: 'Glossary', path: '/resources/glossary' },
];

const INDUSTRY_BY_CATEGORY = { oilfield: 'Oil & Gas', valves: 'Oil & Gas', power: 'Power Grid' };
const requestLink = (subject) => `/connect-with-us?subject=${encodeURIComponent(subject)}`;

const approvedDocuments = [];

const productRequests = products.map(({ name }) => ({ name }));

export const documents = [
  ...approvedDocuments,
  ...products.map((product) => ({
    title: `${product.name} technical information`,
    type: 'Product information',
    product: product.name,
    industry: INDUSTRY_BY_CATEGORY[product.category] ?? 'General',
    href: requestLink(`Technical information: ${product.name}`),
  })),
  { title: 'Certificate copies', type: 'Certificates', product: 'All products', industry: 'General', href: requestLink('Certificate copies') },
  { title: 'Material traceability records', type: 'Quality records', product: 'All products', industry: 'General', href: requestLink('Material traceability records') },
];

export const documentProducts = ['All products', ...productRequests.map(({ name }) => name)];

export const guides = [
  { title: 'Choosing a seal material', text: 'Compare the main polymers and what each one does well.', path: '/capabilities/materials' },
  { title: 'Molded or machined?', text: 'See which route suits your part, quantity and material.', path: '/products/custom-molded-products' },
  { title: 'What to send for a seal review', text: 'List the conditions and dimensions our engineers need.', path: '/connect-with-us/application-data' },
  { title: 'How we check quality', text: 'Follow the steps from incoming material to final inspection.', path: '/who-we-are/hsse-and-quality' },
];

export const faqs = [
  { q: 'What should I send for a new seal?', a: 'Send your drawing, temperature, pressure, media, motion and hardware dimensions. The Application Data Form lists everything in one place.' },
  { q: 'Can Mithson make parts to my drawing?', a: 'Yes. Custom molded and machined parts are made to customer requirements. Upload your drawing with your enquiry.' },
  { q: 'What file types can I upload?', a: 'PDF, DWG, DXF, STEP, STP, IGS, IGES, PNG and JPG files, up to 20 MB each.' },
  { q: 'Which materials do you work with?', a: 'Our range covers elastomers, fluoropolymers and thermoplastics, including PTFE, PEEK, FKM, HNBR, FFKM and EPDM.' },
  { q: 'How do I get certificate copies?', a: 'Ask through the Document Center or the Enquire Now form, and name the product or material you need.' },
  { q: 'Can I speak to someone directly?', a: 'Yes. Book a meeting on Microsoft Teams or Google Meet at a time that suits your location.' },
];

export const glossary = [
  ['AODD pump', 'Air-operated double diaphragm pump, which moves fluid with two flexing diaphragms.'],
  ['Back-up ring', 'A stiff ring that stops a softer seal being pushed into a gap.'],
  ['Compression set', 'How much a rubber part stays squashed after pressure is removed.'],
  ['Creep', 'Slow change of shape in a material under constant load.'],
  ['Durometer', 'A measure of how hard a rubber or plastic is.'],
  ['Elastomer', 'A rubber-like material that returns to its shape after stretching.'],
  ['Extrusion', 'Damage caused when pressure forces a seal into a clearance gap.'],
  ['FE analysis', 'A computer method that predicts stress and movement in a part.'],
  ['Filler', 'A material added to a polymer to change its wear, strength or friction.'],
  ['Fluoropolymer', 'A plastic containing fluorine, such as PTFE, known for chemical resistance.'],
  ['Gland', 'The groove or space in hardware that holds a seal.'],
  ['HPHT', 'High pressure, high temperature service.'],
  ['Media', 'The liquid or gas a seal keeps in or out.'],
  ['RGD', 'Rapid gas decompression, which can damage rubber when gas pressure falls quickly.'],
  ['Sour service', 'Oilfield conditions containing hydrogen sulfide.'],
  ['Spring-energized seal', 'A polymer seal with a metal spring that keeps it pressed against the surface.'],
  ['Thermoplastic', 'A plastic that softens when heated and hardens again when cooled.'],
  ['Traceability', 'Records that link a finished part to its material and production steps.'],
].map(([term, meaning]) => ({ term, meaning }));

const round = (value) => Number(value.toPrecision(6));

export const unitConverters = [
  {
    id: 'temperature',
    label: 'Temperature',
    units: ['°C', '°F', 'K'],
    convert: (value, from) => {
      const celsius = from === '°C' ? value : from === '°F' ? (value - 32) * 5 / 9 : value - 273.15;
      return { '°C': round(celsius), '°F': round(celsius * 9 / 5 + 32), K: round(celsius + 273.15) };
    },
  },
  {
    id: 'pressure',
    label: 'Pressure',
    units: ['bar', 'psi', 'MPa', 'kPa'],
    factors: { bar: 1, psi: 1 / 14.5037738, MPa: 10, kPa: 0.01 },
  },
  {
    id: 'length',
    label: 'Length',
    units: ['mm', 'inch', 'µm'],
    factors: { mm: 1, inch: 25.4, µm: 0.001 },
  },
];

export function convertUnits(converter, value, from) {
  if (converter.convert) return converter.convert(value, from);
  const base = value * converter.factors[from];
  return Object.fromEntries(converter.units.map((unit) => [unit, round(base / converter.factors[unit])]));
}

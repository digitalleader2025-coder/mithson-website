// Oil & Gas Seal overview (/oil-gas-seal) on the shared industry template. The family texts, the
// products and their photos are the existing ones, unchanged; Downhole Tools now has its own page.
import hero from '../../assets/industries/Oil & Gas.webp';
import { api6aItems, api6dItems, wellServiceItems } from '../oilGasProducts';
import { CONFIRM_NOTE, elastomerRanges, oilGasSpringSeals } from '../typicalSpecs';

const families = [
  {
    title: 'API 6A Wellhead Equipment Seal',
    path: '/oil-gas-seal/api-6a-wellhead-equipment-seal',
    desc: 'Stem packing sets, stem seals, OD/ID face seals and BOP seals for wellhead gate valves and BOP applications.',
    items: api6aItems,
  },
  {
    title: 'Well Service Equipment Seal',
    path: '/oil-gas-seal/well-service-equipment-seal',
    desc: 'Plunger packing, pump packing, valve seat inserts and liner seals for mud, frac and plunger pump service.',
    items: wellServiceItems,
  },
  {
    title: 'API 6D Ball Valve & LNG Seal',
    path: '/oil-gas-seal/api-6d-ball-valve-lng-seal',
    desc: 'Body-bonnet seals, seat retainers, PEEK seat rings and LNG seals for trunnion and floating ball valves.',
    items: api6dItems,
  },
];

export default {
  docTitle: 'Oil & Gas Seal',
  hero: {
    label: 'Oil & Gas',
    title: 'Oil & Gas',
    accent: 'Seal.',
    rest: '',
    lead: 'API-qualified sealing solutions for wellhead, well service and ball valve applications.',
    lead2: 'Materials: PTFE, PEEK, FKM, HNBR and perfluoro elastomers. Standards: API, NORSOK, BAM, ISO.',
    tags: families.map((f) => f.title),
    image: hero,
    imageAlt: 'Offshore oil and gas platform at sunset',
    chips: [
      { icon: 'gear', title: '3 product families', text: 'Wellhead, well service, ball valve & LNG' },
      { icon: 'shield', title: '12 products', text: 'Each shown with its own photo' },
      { icon: 'flask', title: 'PTFE, PEEK, FKM, HNBR', text: 'And perfluoro elastomers' },
      { icon: 'doc', title: 'API, NORSOK, BAM, ISO', text: 'Standards' },
    ],
  },

  products: {
    title: 'Every oil & gas seal, by family',
    intro: 'Twelve products across the three families. Select a card for the full product page.',
    items: families.flatMap((f) => f.items.map((item) => ({
      name: item.label,
      tag: f.title,
      image: item.image,
      desc: item.desc,
      materials: item.materials,
      uses: item.application,
      path: f.path,
    }))),
  },

  applications: {
    title: 'Three product families',
    intro: 'Select a family to see its products, then open its full page.',
    items: families.map((f) => ({
      title: f.title,
      text: f.desc,
      parts: f.items.map((i) => i.label),
      partsLabel: 'Products in this family',
      photo: f.items[0].image,
      photoAlt: `Mithson ${f.items[0].label}`,
      path: f.path,
      pathLabel: 'View the family page',
    })),
  },

  sections: [
    {
      id: 'spring-range',
      label: 'Typical values',
      title: oilGasSpringSeals.title,
      table: { cols: ['Property', 'Typical range'], rows: oilGasSpringSeals.rows.map((r) => [r.label, r.value]) },
      note: CONFIRM_NOTE,
    },
    {
      id: 'elastomers',
      label: 'Temperature reference',
      title: 'Typical elastomer temperature ranges',
      table: {
        cols: ['Material', 'Temperature', 'Best suited to'],
        rows: elastomerRanges.rows.map((r) => [r.material, r.temperature, r.use]),
      },
      note: CONFIRM_NOTE,
    },
  ],

  closing: {
    title: 'Need an oil & gas seal for your equipment?',
    text: 'Share your drawing, the equipment and its operating conditions, and Mithson engineering will recommend the right seal.',
  },
  disclaimer: CONFIRM_NOTE,
  credits: [],
};

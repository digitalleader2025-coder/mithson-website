// Oil & Gas Seal (/oil-gas-seal) on the shared industry template. Everything the three family pages
// said is shown here (family summary, product text, photos and figures), unchanged, so a visitor
// never needs to leave this page; Downhole Tools has its own page.
import hero from '../../assets/industries/Oil & Gas.webp';
import { api6aItems, api6dItems, wellServiceItems } from '../oilGasProducts';
import { CONFIRM_NOTE, elastomerRanges, oilGasSpringSeals } from '../typicalSpecs';
import { oilGasItems } from '../productItems';

const families = [
  {
    title: 'API 6A Wellhead Equipment Seal',
    desc: 'Stem packing sets, stem seals, OD/ID face seals and BOP seals for wellhead gate valves and BOP applications.',
    intro: 'High-pressure, sour-gas and HPHT wellhead sealing — stem packing sets, stem seals, OD/ID face seals and BOP seals manufactured to API 6A.',
    items: api6aItems,
  },
  {
    title: 'Well Service Equipment Seal',
    desc: 'Plunger packing, pump packing, valve seat inserts and liner seals for mud, frac and plunger pump service.',
    intro: 'High-cycling, high-stress sealing for mud pumps, frac pumps and plunger pumps — plunger packing sets, pump packing, valve seat inserts and liner seals.',
    items: wellServiceItems,
  },
  {
    title: 'API 6D Ball Valve & LNG Seal',
    desc: 'Body-bonnet seals, seat retainers, PEEK seat rings and LNG seals for trunnion and floating ball valves.',
    intro: 'Gas transmission and cryogenic ball valve sealing — body-bonnet seals, PEEK seat rings and LNG seals for trunnion and floating ball valves.',
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
      { icon: 'shield', title: '12 products', text: 'Each with its photo and figures' },
      { icon: 'flask', title: 'PTFE, PEEK, FKM, HNBR', text: 'And perfluoro elastomers' },
      { icon: 'doc', title: 'API, NORSOK, BAM, ISO', text: 'Standards' },
    ],
  },

  products: {
    title: 'Oil & gas seals, by family',
    intro: 'Choose a family, then a product, to see its description, figures, materials and application.',
    families,
    specs: oilGasItems,
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

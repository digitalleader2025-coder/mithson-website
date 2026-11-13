// Industries > Downhole Tools, on the shared industry template. Every text and figure comes from
// content that was already on the page (src/content/downholeTools.js, the product gallery data in
// src/content/oilGasProducts.js and the elastomer table); only the layout changed.
import hero from '../../assets/industries/Downhole Tools.webp';
import { downholeItems } from '../oilGasProducts';
import { CONFIRM_NOTE, elastomerRanges } from '../typicalSpecs';
import {
  dhApplications, dhCapabilities, dhChecklist, dhCompare, dhConditions, dhFaqs, dhHowItWorks, dhIntro,
  dhMaterials, dhProducts, dhQuality, dhRelated, dhStandards, dhSteps,
} from '../downholeTools';
import { ExtrusionExplainer, Packer, Rgd } from '../../pages/OilGasSeal/Downhole/DownholeSections';

const photo = Object.fromEntries(downholeItems.map((p) => [p.label, p.image]));
// each application shows the product photo of the part it relies on most
const APP_PHOTO = {
  'Subsurface safety valves': 'PEEK Back-up Ring',
  'Sliding sleeve assemblies': 'Unified Stack Seal',
  'Packer assemblies': 'Packer',
  'Liner hanger systems': 'Unified Stack Seal',
  'Blowout preventers': 'RGD O-Ring',
  'Wellhead and pressure control': 'RGD O-Ring',
};

export default {
  docTitle: 'Downhole Tools',
  hero: {
    label: 'Oil & Gas industry | Downhole sealing technology',
    title: 'Downhole Tools.',
    accent: 'Precision sealing',
    rest: 'for extreme well conditions.',
    lead: dhIntro[0],
    lead2: dhIntro[1],
    tags: dhCapabilities,
    image: hero,
    imageAlt: 'Oil well pumping unit and wellhead at sunset',
    chips: [
      { icon: 'gauge', title: 'Up to 15,000 PSI', text: 'Unified Stack Seal design only' },
      { icon: 'gear', title: '4 product families', text: 'Stack seals, packers, RGD O-rings, back-up rings' },
      { icon: 'flask', title: '6 materials', text: 'PEEK, PTFE, HNBR, FKM, FFKM, NBR' },
      { icon: 'doc', title: 'API, NORSOK, ISO', text: 'Standards the equipment refers to' },
    ],
  },

  challenges: {
    label: 'How it works',
    title: 'Engineering reliability at every sealing interface',
    items: dhHowItWorks,
  },

  products: {
    title: 'Complete sealing solutions for downhole equipment',
    intro: 'Each product does a specific job in the sealing assembly.',
    items: downholeItems.map((item, i) => ({
      name: item.label,
      tag: dhProducts[i].tag,
      image: item.image,
      desc: item.desc,
      materials: item.materials,
      uses: item.application,
    })),
  },

  applications: {
    title: 'Precision sealing for critical oilfield equipment',
    intro: 'Select a piece of equipment to see which Mithson products it uses.',
    items: dhApplications.map((a) => ({
      title: a.title,
      text: a.text,
      parts: a.list,
      partsLabel: 'Relevant Mithson products',
      photo: photo[APP_PHOTO[a.title]],
      photoAlt: `Mithson ${APP_PHOTO[a.title]}`,
    })),
  },

  sections: [
    {
      id: 'extrusion',
      label: 'Anti-extrusion, explained',
      title: 'Understanding the role of the back-up ring',
      intro: 'Step through what happens to an O-ring under pressure, with and without a PEEK back-up ring.',
      component: ExtrusionExplainer,
    },
    { id: 'conditions', label: 'Operating conditions', title: 'Engineered for challenging oilfield environments', cards: dhConditions },
    { id: 'rgd', label: 'Rapid gas decompression', title: 'What RGD does to an elastomer', component: Rgd },
    { id: 'packer', label: 'Packer elements', title: 'How a packer isolates the well', component: Packer },
    {
      id: 'materials',
      label: 'Material technology',
      title: 'Advanced materials for reliable downhole sealing',
      cards: dhMaterials,
      table: dhCompare,
      note: 'Properties and limits depend on the exact formulation, grade, hardness, geometry and exposure. This is a selection guide, not a product certification or guaranteed specification.',
    },
    {
      id: 'temperatures',
      label: 'Temperature reference',
      title: 'Typical elastomer temperature ranges',
      table: {
        cols: ['Material', 'Temperature', 'Best suited to'],
        rows: elastomerRanges.rows.map((r) => [r.material, r.temperature, r.use]),
      },
      note: CONFIRM_NOTE,
    },
    { id: 'process', label: 'Engineering and manufacturing', title: 'From application requirements to precision sealing components', steps: dhSteps },
    { id: 'selection', label: 'Selection parameters', title: 'What to consider before selecting a downhole seal', checklist: dhChecklist, cta: true },
    {
      id: 'standards',
      label: 'Quality and standards',
      title: 'Quality-focused engineering for critical sealing',
      intro: 'Depending on the equipment and your requirements, these standards and qualification frameworks may apply. They are listed as references, not as certifications held for every Mithson product.',
      cards: dhStandards,
      chips: dhQuality,
    },
    { id: 'related', label: 'Related products', title: 'Explore more polymer sealing solutions', products: dhRelated },
  ],

  faqTitle: 'Common technical questions',
  faqs: dhFaqs,

  closing: {
    title: 'Looking for reliable downhole sealing solutions?',
    text: 'Whether you need PEEK back-up rings, unified stack seals, packer elements or RGD-resistant O-rings, send your technical requirements, drawings or sample components to start an engineering discussion.',
  },
  disclaimer: 'The 15,000 PSI figure is Mithson’s published reference for the Unified Stack Seal design, not a rating for every configuration. Temperature ranges are indicative material-family values; confirm limits with Mithson engineering.',
  credits: [],
};

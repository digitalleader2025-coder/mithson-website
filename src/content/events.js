// Exhibition archive, from the approved copy supplied by the user (November 2026).
// Only the year and venue are known for each event: never add dates, stand numbers or
// visitor figures. These are past events, so the page presents them as an archive.
import imgExpo2025 from '../assets/events/expo 2025/expo 2025.avif';
import imgBauma from '../assets/events/expo 2024/Bauma Conexpo India 2024 - Delhi.avif';
import imgOpes from '../assets/events/expo 2024/OPES 2024 - Oman.avif';
import imgValveMumbai from '../assets/events/expo 2024/Valve World Mumbai 2024.avif';
import imgAutomation from '../assets/events/expo 2023/Automation Expo 2023 - Mumbai, India.avif';
import imgOtc from '../assets/events/expo 2023/Offshore Technology Conference 2023 NRG Park, Houston, Texas, USA.avif';
import imgValveSeAsia from '../assets/events/expo 2023/Valve World Southeast Asia Expo 2023 - Singapore.avif';

export const eventsIntro = [
  'Mithson Sealing Solutions participates in industrial exhibitions and trade events to connect with customers, engineering professionals, business partners and industry stakeholders.',
  'These events provide opportunities to showcase our polymer sealing solutions, discuss application requirements, exchange technical knowledge and build relationships across global industrial markets.',
];

export const eventValues = [
  { icon: 'handshake', title: 'Connect', text: 'with our team' },
  { icon: 'layers', title: 'Explore', text: 'our solutions' },
  { icon: 'gear', title: 'Discuss', text: 'application needs' },
  { icon: 'people', title: 'Build', text: 'industry partnerships' },
];

export const eventYears = [
  {
    year: '2025',
    slug: 'oil-and-gas-expo-2025',
    path: '/events/oil-and-gas-expo-2025',
    title: 'Oil & Gas Expo 2025',
    summary: 'Our presence at an industry event focused on the oil and gas sector.',
    intro:
      "Mithson's listed 2025 exhibition entry highlights its presence at an industry event focused on the oil and gas sector. The event provides a relevant platform to connect with industry professionals and discuss sealing solutions for valves, wellhead equipment and other demanding applications.",
    cover: imgExpo2025,
    events: [
      {
        name: 'Oil & Gas Expo 2025',
        venue: 'Hall 4, Bombay Exhibition Centre, Goregaon (East)',
        place: 'Mumbai, India',
        image: imgExpo2025,
      },
    ],
  },
  {
    year: '2024',
    slug: 'expo-2024',
    path: '/events/expo-2024',
    title: 'Industry Exhibitions 2024',
    summary: 'Three exhibitions across industrial equipment, valve technologies and the energy sector.',
    intro:
      'These exhibitions represent opportunities to connect with professionals across industrial equipment, valve technologies and the wider energy sector.',
    cover: imgValveMumbai,
    events: [
      { name: 'bauma CONEXPO INDIA 2024', venue: 'Construction and off-highway equipment', place: 'Delhi, India', image: imgBauma },
      { name: 'Valve World Mumbai', venue: 'Valve and fluid control technologies', place: 'Mumbai, India', image: imgValveMumbai },
      { name: 'OPES 2024', venue: 'Oil, petroleum and energy sector', place: 'Oman', image: imgOpes },
    ],
  },
  {
    year: '2023',
    slug: 'expo-2023',
    path: '/events/expo-2023',
    title: 'Industry Exhibitions 2023',
    summary: 'Valve technology, industrial automation and offshore technology events.',
    intro:
      "These events provide a historical overview of Mithson's listed participation across valve technology, industrial automation and offshore technology sectors.",
    cover: imgValveSeAsia,
    events: [
      { name: 'Valve World Southeast Asia Expo', venue: 'Valve technology', place: 'Singapore', image: imgValveSeAsia },
      { name: 'Automation Expo', venue: 'Industrial automation', place: 'Mumbai, India', image: imgAutomation },
      { name: 'Offshore Technology Conference (OTC) 2023', venue: 'NRG Park, offshore technology', place: 'Houston, Texas, USA', image: imgOtc },
    ],
  },
];

export const showcase = [
  {
    icon: 'rig',
    title: 'Oil & Gas Sealing Solutions',
    text: 'Sealing components for valves, wellhead equipment, downhole applications and other oil and gas systems.',
    path: '/oil-gas-seal',
  },
  {
    icon: 'mould',
    title: 'Custom Moulded Products',
    text: 'Application-specific polymer components developed around customer drawings and requirements.',
    path: '/products/custom-molded-products',
  },
  {
    icon: 'tools',
    title: 'Machined Polymer Components',
    text: 'Precision-machined polymer products made to specified dimensions and material requirements.',
    path: '/products/machined-products',
  },
  {
    icon: 'layers',
    title: 'Advanced Engineering Materials',
    text: 'An overview of PTFE, modified PTFE, PEEK, engineering thermoplastics and specialised elastomers.',
    path: '/capabilities/materials',
  },
];

export const showcaseNote =
  'At industry exhibitions, Mithson can introduce visitors to its product and engineering capabilities, subject to the products and displays available at each event.';

export const meetTheTeam = [
  'Whether you are exploring a new sealing requirement, evaluating materials or looking for a custom polymer component, industry exhibitions provide an opportunity to start a technical conversation with Mithson.',
  'If you are planning to attend an upcoming exhibition where Mithson is participating, contact our team to discuss meeting availability.',
];

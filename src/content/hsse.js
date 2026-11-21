// HSSE & Quality content. Wording for test records matches the text printed on each file in
// src/assets/certificates. Do not call these company certifications: they cover named materials.
import imgIso from '../assets/certificates/ISO.png';
import imgApi2B from '../assets/certificates/API 6A FC002B.png';
import imgApi4G from '../assets/certificates/API 6A FC004G.png';
import imgApi5C from '../assets/certificates/API 6A FC005C.png';
import imgApi21A from '../assets/certificates/API 6A FC021A.png';
import imgNorsok1 from '../assets/certificates/NORSOK E1001.png';
import imgNorsok4 from '../assets/certificates/NORSOK E1004.png';
import imgBam2B from '../assets/certificates/BAM FC002B.png';
import imgBam5C from '../assets/certificates/BAM FC005C.png';
import imgQima from '../assets/certificates/QIMA.png';

const pending = 'pending-validation';
const API = 'API 6A / ISO 10423 sour fluid (FF/HH) resistance';
const NORSOK = 'NORSOK M-710 rapid gas decompression resistance';
const BAM = 'BAM oxygen compatibility';

export const companyCertificates = [
  { name: 'ISO 9001:2015', scope: 'Certified quality management system', image: imgIso },
  { name: 'QIMA', scope: 'QIMA audited', image: imgQima },
];

export const materialRecords = [
  { name: 'FC002B Modified PTFE', scope: API, image: imgApi2B },
  { name: 'FC004G Glass/Moly Filled PTFE', scope: API, image: imgApi4G },
  { name: 'FC005C Carbon/Graphite Filled PTFE', scope: API, image: imgApi5C },
  { name: 'FC021A Virgin PEEK', scope: API, image: imgApi21A },
  { name: 'E1001 FKM H90 RGD', scope: NORSOK, image: imgNorsok1 },
  { name: 'E1004 HNBR H90 LT-RGD', scope: NORSOK, image: imgNorsok4 },
  { name: 'FC002B Modified PTFE', scope: BAM, image: imgBam2B },
  { name: 'FC005C Carbon/Graphite Filled PTFE', scope: BAM, image: imgBam5C },
];

export const qualityProcess = [
  { step: '01', title: 'Material Selection', desc: 'Rigorous incoming inspection of raw polymers and metals against approved material specifications.' },
  { step: '02', title: 'Prototype & Testing', desc: 'Dimensional, mechanical and chemical testing of prototypes before production approval.' },
  { step: '03', title: 'Production Control', desc: 'In-process quality checks at each manufacturing stage: machining, molding and finishing.' },
  { step: '04', title: 'Final Inspection', desc: 'Complete dimensional, visual and functional verification against customer drawings.' },
  { step: '05', title: 'Post-Delivery Support', desc: 'Field feedback and continuous improvement through corrective and preventive action.' },
];

export const hssePillars = [
  { title: 'Health', text: 'Workplace health and hygiene practices.', status: pending },
  { title: 'Safety', text: 'Protective equipment, machine safety, training and incident reporting.', status: pending },
  { title: 'Security', text: 'Site access, drawing confidentiality and data protection.', status: pending },
];

export const integrityItems = [
  { title: 'Code of conduct', text: 'How Mithson expects people to work.', status: pending },
  { title: 'Reporting a concern', text: 'Who to contact and how concerns are handled.', status: pending },
  { title: 'Supplier expectations', text: 'What Mithson expects from suppliers.', status: pending },
];

export const productSafetyNotice =
  'The right seal depends on the full application. Temperature, pressure, media, motion and hardware all affect performance, so customers should confirm that a product suits their use. Mithson engineers can review your application data before you decide.';

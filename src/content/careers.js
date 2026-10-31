// Career page content and application rules, shared by the page and the /api application functions.
// Facts come from company.js and Mithson's own website. Do not add salary, benefits, training or
// open positions until Mithson HR confirms them.

export const APPLICATION = {
  maxResumeBytes: 10 * 1024 * 1024, // 10 MB
  extensions: ['pdf', 'doc', 'docx'],
  rateLimit: 5, // applications allowed from one address per hour
  linkDays: 30, // how long the resume link in the HR email keeps working
};

const extension = (name = '') => name.split('.').pop().toLowerCase();

/** A message saying why this resume can't be uploaded, or null when it is fine. */
export function resumeProblem({ name, size }) {
  if (!APPLICATION.extensions.includes(extension(name))) return 'Upload your resume as a PDF, DOC or DOCX file.';
  if (!size) return 'That file is empty.';
  if (size > APPLICATION.maxResumeBytes) return 'Your resume must be 10 MB or smaller.';
  return null;
}

export const careerStats = [
  { value: '1996', label: 'Group founded in Chennai' },
  { value: '25+', label: 'Years of polymer engineering' },
  { value: '7', label: 'Industry sectors served' },
  { value: '2', label: 'Sites in Tamil Nadu' },
];

export const whatWeDo = [
  {
    title: 'We engineer seals and polymer components',
    text: 'Mithson designs and manufactures high-performance seals and precision polymer parts for valves, pumps, compressors and hydraulic systems.',
  },
  {
    title: 'We solve demanding problems',
    text: 'Our parts protect equipment where pressure, heat, chemicals and wear are serious challenges, from oil wells to precision instruments.',
  },
  {
    title: 'We work with advanced materials',
    text: 'Our teams work with elastomers, fluoropolymers and thermoplastics, including PTFE, PEEK, FKM, FFKM and HNBR.',
  },
  {
    title: 'We partner with customers',
    text: 'We work closely with customers before and after a sale, and many parts are made to their exact requirements.',
  },
];

export const whyJoin = [
  {
    title: 'See your work matter',
    text: 'The parts we make go into equipment for energy, automotive, life science, aerospace and more, where reliability really counts.',
  },
  {
    title: 'Learn a specialist field',
    text: 'Polymer sealing combines materials, design, manufacturing and quality. It is a technical field with few shortcuts and a lot to learn.',
  },
  {
    title: 'Join an established group',
    text: 'Mithson is part of the Fluoro Carbon Seals Group, which has been building its experience in polymer engineering since 1996.',
  },
  {
    title: 'Grow with an engineering mindset',
    text: 'We are driven by engineering, quality and customer satisfaction, with a vision to become a global leader in polymer engineering technology.',
  },
  {
    title: 'Work with an eye on the future',
    text: 'Our sustainability work includes solar energy, electric vehicles for goods movement, scrap reduction and sustainable agriculture.',
  },
  {
    title: 'Freshers and experienced people',
    text: 'Whether you are starting out or bringing years of experience, tell us about your skills and the kind of work you are looking for.',
  },
];

export const careerAreas = [
  'Design and application engineering',
  'Production and machining',
  'Molding and materials',
  'Quality and inspection',
  'Sales and customer support',
  'Purchasing, stores and logistics',
  'Accounts, HR and administration',
];

export const hiringSteps = [
  { title: 'Apply', text: 'Share your details, skills and resume using this form.' },
  { title: 'Confirmation', text: 'You receive an email confirming that we have your application.' },
  { title: 'Review', text: 'Our hiring team compares applications with the needs of the role.' },
  { title: 'Next steps', text: 'If your background is a match, our team contacts you directly.' },
];

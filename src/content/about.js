// About Us page content, from the approved copy supplied by the user (November 2026).
// Do not add figures, dates or claims that are not in that copy or in company.js.

export const aboutStats = [
  { value: 1996, label: 'Group founded in Chennai', plain: true },
  { value: 25, suffix: '+', label: 'Years of polymer engineering heritage' },
  { value: 7, suffix: '+', label: 'Industry sectors served' },
  { value: 2, label: 'Sites in Tamil Nadu' },
];

export const whoWeAre = [
  'Mithson Sealing Solutions is a member of the Fluoro Carbon Seals Group, specializing in the design and manufacture of high-performance polymer seals and precision-engineered components for critical industrial applications.',
  'With over 25 years of polymer engineering heritage through the group, we bring extensive material knowledge and application-focused engineering experience to the development of sealing solutions for valves, pumps, compressors, hydraulic systems, and other demanding equipment.',
  'Our approach combines material expertise, engineering design, and manufacturing knowledge to develop components that meet specific operating requirements. From standard sealing products to application-specific components, we focus on dimensional precision, material suitability, reliability, and consistent quality.',
  'We serve industries where equipment performance, sealing integrity, and operational reliability are essential, including Oil & Gas, Automotive, Life Sciences, Semiconductor, Mining, Aerospace, and other industrial sectors.',
];

export const journey = [
  { key: '1996', tag: 'Group heritage', title: 'Fluoro Carbon Seals established', text: 'Our story is connected to the legacy of Fluoro Carbon Seals, established in Chennai in 1996 with a focus on manufacturing PTFE components.' },
  { key: 'Expansion', tag: 'Group heritage', title: 'Broader material expertise', text: 'Over the years, the group developed its expertise in advanced polymer materials and precision sealing components, expanding its product knowledge across valve, pump, hydraulic, and pneumatic applications.' },
  { key: 'Mithson', tag: 'Mithson Sealing Solutions', title: 'Continuing the heritage', text: 'Mithson Sealing Solutions continues this engineering heritage by focusing on high-performance sealing products and polymer components for modern industrial requirements.' },
  { key: 'Today', tag: 'Mithson Sealing Solutions', title: 'Application-driven development', text: 'Today, our focus remains on combining established material knowledge with application-driven product development to support customers across diverse industries.' },
];

export const philosophy = [
  'Application-specific product selection and design.',
  'Material compatibility with operating environments.',
  'Dimensional accuracy and component consistency.',
  'Functional performance under demanding conditions.',
  'Continuous improvement in product and process quality.',
];

// `product` is the products.jsx id whose photo represents the group
export const manufactureGroups = [
  { title: 'Valve Sealing Solutions', product: 'seals-valve', path: '/products/seals-valve', text: 'Sealing components for gate, ball, globe, plug, butterfly, and diaphragm valve applications, including spring-energized seals, seat seals, stem packing, and polymer components.' },
  { title: 'Hydraulic Seals and Components', product: 'seals-hydraulic', path: '/products/seals-hydraulic', text: 'Piston seals, rod seals, wiper seals, and wear rings designed to support sealing, guidance, and contamination control in hydraulic cylinder systems.' },
  { title: 'Oil & Gas Sealing Components', product: 'hammer-union-seal', path: '/oil-gas-seal', text: 'Specialized sealing solutions for wellhead equipment, Christmas tree valves, hammer union connections, and downhole applications.' },
  { title: 'Compressor Components', product: 'mith-plate', path: '/products/mith-plate', text: 'MITH PLATE compressor valve plates developed for reciprocating compressor applications, using selected thermoplastic materials.' },
  { title: 'Pump and Diaphragm Components', product: 'diaphragm-aodd', path: '/products/diaphragm-aodd', text: 'Polymer components for air-operated double diaphragm pumps, including diaphragms, PTFE balls, seats, and O-rings.' },
  { title: 'Bearings, Washers and Other Polymer Components', product: 'uni-lube-bearing', path: '/products', text: 'Engineered components for applications requiring wear resistance, reduced friction, dimensional stability, and material compatibility.' },
];

// Notes are general material guidance; names match materials.js where it has an entry
export const materialFamilies = [
  {
    family: 'Fluoropolymers',
    items: [
      { name: 'PTFE', match: 'PTFE' },
      { name: 'Modified PTFE (TFM and NXT)', match: 'Modified PTFE (TFM & NXT)' },
      { name: 'PFA', match: 'PFA' },
      { name: 'FEP', strengths: 'Inert, smooth fluoropolymer that can be melt-processed', uses: 'Seamless jackets on encapsulated O-rings' },
    ],
  },
  {
    family: 'High-Performance Thermoplastics',
    items: [
      { name: 'PEEK', match: 'VICTREX PEEK' },
      { name: 'VESPEL', match: 'VESPEL' },
      { name: 'POM (Delrin)', match: 'Delrin/POM' },
      { name: 'Nylon', match: 'Nylon' },
      { name: 'Devlon', strengths: 'Engineering polymer used for tough valve sealing faces', uses: 'Valve seat rings and insert seats' },
    ],
  },
  {
    family: 'Elastomers',
    items: [
      { name: 'HNBR', match: 'HNBR' },
      { name: 'FKM', match: 'FKM/Viton' },
      { name: 'FFKM', match: 'FFKM' },
      { name: 'EPDM', match: 'EPDM' },
      { name: 'PU', match: 'PU' },
    ],
  },
  {
    family: 'Other Engineered Materials',
    items: [
      { name: 'RTFE', match: 'RTFE' },
      { name: 'Carbon-filled PTFE', strengths: 'PTFE with carbon filler for better wear and creep resistance', uses: 'Valve plates, seats and packing' },
      { name: 'Glass-filled PEEK', strengths: 'PEEK reinforced with glass for added stiffness', uses: 'Compressor valve plates' },
      { name: 'MoS₂-filled materials', match: 'MOS2' },
    ],
  },
];

export const lifecycle = [
  { title: 'Application Understanding', text: 'Understanding equipment configuration, operating conditions, and customer specifications before selecting an appropriate solution.' },
  { title: 'Material Selection', text: 'Identifying suitable polymer or elastomer materials based on operating requirements and compatibility.' },
  { title: 'Product Design and Engineering', text: 'Developing product designs that consider dimensional requirements, sealing geometry, and application conditions.' },
  { title: 'Prototyping and Samples', text: 'Supporting product development through prototypes and sample components for customer evaluation.' },
  { title: 'Manufacturing', text: 'Producing polymer sealing components and engineered products according to defined specifications and quality requirements.' },
  { title: 'Quality and Customer Support', text: 'Maintaining a focus on product quality, customer communication, and support before and after delivery.' },
];

export const aboutIndustries = [
  { title: 'Oil & Gas', image: 'Oil & Gas', path: '/oil-gas-seal', text: 'Sealing components for wellhead equipment, valves, downhole tools, and high-pressure applications.' },
  { title: 'Automotive', image: 'Automotive', path: '/industries/automotive', text: 'Polymer sealing and wear-related components for demanding automotive systems.' },
  { title: 'Life Sciences', image: 'Life Science', path: '/industries/life-science', text: 'Material-specific components for applications where chemical compatibility and product requirements are important.' },
  { title: 'Semiconductor', image: 'Semiconductor', path: '/industries/semiconductor', text: 'Precision polymer components for specialized equipment and demanding process environments.' },
  { title: 'Aerospace', image: 'Aerospace', path: '/industries/aerospace', text: 'Engineered polymer components for applications requiring carefully selected materials and dimensional precision.' },
  { title: 'Mining', image: 'Mining', path: '/industries/mining', text: 'Wear-resistant polymer components for equipment operating in demanding industrial environments.' },
  { title: 'Industrial Processing', path: '/industries', text: 'Sealing solutions for fluid handling, pumps, compressors, and process equipment.' },
];

export const qualityFocus = [
  'Material selection and verification.',
  'Dimensional and product conformity.',
  'Process monitoring and continuous improvement.',
  'Customer specification compliance.',
  'Product development and quality review.',
];

export const qualityCredentials = [
  { title: 'ISO 9001:2015', text: 'Certified quality management system' },
  { title: 'QIMA', text: 'Audited' },
  { title: 'API-6A', text: 'Material-related reference' },
  { title: 'NORSOK', text: 'Material-related reference' },
  { title: 'BAM', text: 'Material-related reference' },
];

export const whyMithson = [
  { title: 'Application-focused engineering', text: 'We understand the operating conditions before choosing the material and design.' },
  { title: 'Advanced material knowledge', text: 'Experience across fluoropolymers, high-performance thermoplastics and elastomers.' },
  { title: 'Custom components', text: 'From standard sealing products to application-specific components.' },
  { title: 'Customer collaboration', text: 'We work closely with customers to understand specifications and requirements.' },
  { title: 'Support before and after delivery', text: 'A focus on communication and support at every stage.' },
];

export const values = [
  { title: 'Quality', text: 'Maintaining a consistent focus on product and process quality.' },
  { title: 'Reliability', text: 'Developing components designed around application requirements and dependable performance.' },
  { title: 'Innovation', text: 'Applying material knowledge and engineering thinking to evolving industrial challenges.' },
  { title: 'Customer Collaboration', text: 'Working closely with customers to understand specifications and application requirements.' },
  { title: 'Continuous Improvement', text: 'Strengthening processes, products, and customer support through ongoing improvement.' },
];

export const sustainabilityInitiatives = ['Scrap reduction initiatives.', 'Sustainable agriculture practices.'];

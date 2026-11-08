// Sustainability page copy, from the approved text supplied by the user (November 2026).
// The editorial notes in that text (what to publish once confirmed) are left out on purpose.
// Never add targets, baseline years or measured figures here until Mithson supplies approved data.

export const sustainabilityIntro = [
  'At Mithson Sealing Solutions, we recognise that responsible manufacturing involves more than delivering high-performance products. It also means being conscious of how energy, materials, transportation and natural resources are used throughout our operations.',
  'As a member of the Fluoro Carbon Seals Group, Mithson brings more than 25 years of group heritage in polymer engineering. We are committed to supporting industrial customers while encouraging responsible resource use, operational efficiency and environmental awareness.',
  'Our published sustainability initiatives include solar energy adoption, electric vehicles for goods movement, scrap reduction and sustainable agriculture practices. These initiatives form part of our approach to reducing our environmental footprint across Scope 1, Scope 2 and Scope 3 emissions.',
];

export const focusLine = 'Better resource utilisation. Responsible operations. Continuous environmental improvement.';

export const pillars = [
  { icon: 'solar', title: 'Renewable Energy', text: 'Increasing the use of renewable energy through solar energy adoption.' },
  { icon: 'ev', title: 'Cleaner Transportation', text: 'Supporting lower-emission goods movement through electric vehicles.' },
  { icon: 'recycle', title: 'Material Efficiency', text: 'Reducing manufacturing scrap and improving material utilisation.' },
  { icon: 'leaf', title: 'Sustainable Agriculture', text: 'Supporting sustainable agriculture practices.' },
];

export const approach = [
  'Sustainability is a continuous process that involves understanding environmental impacts, identifying opportunities for improvement and making responsible operational choices.',
  'These initiatives reflect our commitment to considering environmental responsibility alongside manufacturing quality, engineering performance and customer requirements.',
  'Our long-term focus is to encourage more efficient resource use and progressively reduce the environmental impact associated with our operations and value chain.',
];

// `image` names a file in src/assets/site-images; a missing one falls back to a drawn panel
export const initiatives = [
  {
    icon: 'solar',
    title: 'Solar Energy Adoption',
    lead: 'Supporting the transition towards cleaner energy',
    image: 'sustainability-solar',
    credit: 'Photo: Bernd Dittrich / Unsplash',
    text: [
      "Energy is an important resource in industrial manufacturing. Solar energy adoption is one of Mithson's published sustainability initiatives, supporting the use of renewable energy as part of its environmental approach.",
      'Solar power can help reduce dependence on conventional electricity sources and lower associated greenhouse gas emissions, depending on the amount of renewable energy generated and consumed.',
    ],
    points: [
      'Supporting the adoption of renewable energy.',
      'Encouraging more responsible electricity consumption.',
      'Improving awareness of energy efficiency.',
      'Exploring opportunities to reduce the environmental impact of energy use.',
    ],
  },
  {
    icon: 'ev',
    title: 'Electric Vehicles for Goods Movement',
    lead: 'Encouraging cleaner transportation',
    image: 'sustainability-ev',
    credit: 'Photo: Netze BW / Unsplash',
    text: [
      'Transportation plays an important role in the movement of materials, products and goods. Mithson identifies electric vehicles for goods movement as one of its environmental initiatives.',
      'Electric vehicles can reduce direct tailpipe emissions compared with conventional fuel-powered vehicles. The overall benefit depends on vehicle usage, electricity sources, charging arrangements and the transportation activities being replaced.',
    ],
    points: [
      'Supporting electric mobility for goods movement.',
      'Encouraging more efficient transportation practices.',
      'Reducing dependence on conventional fuel-powered transport where practical.',
      'Considering transportation-related environmental impacts.',
    ],
  },
  {
    icon: 'recycle',
    title: 'Scrap Reduction and Material Efficiency',
    lead: 'Making better use of engineering materials',
    image: 'manufacturing',
    illustrative: true,
    text: [
      'In polymer manufacturing, efficient material utilisation is an important part of responsible production. Processes involving polymer blocks, rods, sheets and other raw materials may generate offcuts or production scrap.',
      'Reducing avoidable material waste helps improve resource efficiency, lowers unnecessary consumption of raw materials and supports more responsible manufacturing.',
    ],
    points: [
      'Improving material planning and utilisation.',
      'Reducing avoidable production scrap.',
      'Encouraging efficient machining and manufacturing practices.',
      'Identifying opportunities to minimise material losses.',
      'Promoting appropriate segregation and handling of manufacturing waste.',
    ],
  },
  {
    icon: 'leaf',
    title: 'Sustainable Agriculture Practices',
    lead: 'Recognising environmental responsibility beyond manufacturing',
    image: 'sustainability-agriculture',
    credit: 'Photo: Dan Meyers / Unsplash',
    text: [
      "Mithson's published sustainability initiatives also include sustainable agriculture practices.",
      'Responsible agricultural practices can contribute to soil health, efficient water use, biodiversity and the long-term management of natural resources. This initiative reflects a broader environmental focus beyond the company’s direct manufacturing activities.',
    ],
    points: [
      'Supporting responsible farming practices.',
      'Efficient use of natural resources.',
      'Promoting soil health and biodiversity.',
      'A broader environmental focus.',
    ],
  },
];

export const scopes = [
  {
    icon: 'factory',
    title: 'Scope 1',
    subtitle: 'Direct Emissions',
    text: 'Direct greenhouse gas emissions from sources owned or controlled by an organisation.',
    points: [
      'Fuel combustion in company-controlled vehicles.',
      'Fuel used in on-site boilers or generators.',
      'Direct emissions from company-controlled equipment or processes, where applicable.',
    ],
  },
  {
    icon: 'bolt',
    title: 'Scope 2',
    subtitle: 'Purchased Energy',
    text: 'Indirect emissions associated with the generation of purchased electricity, steam, heating and cooling.',
    points: [
      'Electricity consumption at our facilities is an important area to consider.',
      'Solar energy adoption may reduce the electricity sourced from the grid, depending on actual generation and consumption.',
    ],
  },
  {
    icon: 'chain',
    title: 'Scope 3',
    subtitle: 'Value Chain',
    text: "Other indirect emissions that occur across an organisation's value chain.",
    points: [
      'Purchased raw materials and polymer compounds.',
      'Transportation and distribution.',
      'Waste generated during operations.',
      'Business travel and employee commuting.',
      'Upstream and downstream activities associated with products.',
    ],
  },
];

export const carbonNote =
  'Understanding these three categories provides a framework for identifying emission sources and prioritising future improvements. Specific reduction targets, baseline years and measured achievements will be published once supported by approved emissions data.';

export const lifecycle = [
  { icon: 'layers', title: 'Material Selection and Utilisation', text: 'Selecting appropriate material grades and planning raw material requirements helps avoid unnecessary consumption. Selection considers application requirements, product specifications and the expected service environment.' },
  { icon: 'gear', title: 'Manufacturing Efficiency', text: 'Well-planned manufacturing operations help reduce avoidable material losses. Process review and production planning identify opportunities to improve efficiency while maintaining the required product quality.' },
  { icon: 'recycle', title: 'Scrap Management', text: 'Manufacturing scrap is identified, segregated and handled according to applicable requirements. Where technically suitable and permitted by product specifications, reuse or recycling may be evaluated — never at the cost of traceability, product quality or customer requirements.' },
  { icon: 'shield', title: 'Product Reliability and Service Life', text: 'A sealing component correctly selected for its application contributes to dependable equipment operation. Suitability and expected service life must be evaluated for the specific application rather than assumed for every operating environment.' },
];

export const resources = [
  { icon: 'bolt', title: 'Energy Efficiency', text: 'Encouraging efficient energy use and supporting renewable energy adoption helps reduce the impact associated with electricity consumption.' },
  { icon: 'layers', title: 'Material Efficiency', text: 'Efficient material planning, controlled production and scrap reduction improve the utilisation of polymer materials.' },
  { icon: 'ev', title: 'Transportation', text: 'Electric vehicles for goods movement form part of our published initiatives. More efficient logistics planning also helps avoid unnecessary transportation.' },
  { icon: 'waste', title: 'Waste Awareness', text: 'Identifying different waste streams and handling them appropriately supports responsible manufacturing operations.' },
  { icon: 'water', title: 'Water and Natural Resources', text: 'Responsible resource management also involves understanding water consumption and identifying opportunities to avoid unnecessary use.' },
];

export const valueChain = [
  'Understanding the environmental impact of purchased materials.',
  'Considering transportation and logistics efficiency.',
  'Improving awareness of material utilisation.',
  'Identifying relevant supplier environmental information.',
  'Evaluating opportunities for more responsible resource use.',
];

export const valueChainText = [
  "A manufacturing organisation's environmental footprint can extend beyond the activities taking place within its facilities. Raw material sourcing, supplier operations, transportation, distribution and product-related activities may all contribute to environmental impacts.",
  'Collaboration with suppliers, logistics partners and customers can help identify opportunities to improve environmental performance throughout the value chain.',
];

export const industriesText = [
  'Mithson supplies polymer sealing solutions for a variety of industrial applications. Across these industries, the selection of an appropriate sealing material and component design is important for equipment performance.',
  'Reliable sealing components can support equipment integrity and help reduce avoidable maintenance or premature component replacement when correctly specified and used.',
];

export const industriesNote =
  'Environmental performance depends on the complete product and application lifecycle. It should not be assumed from the material name or product category alone.';

export const sustainabilityIndustries = [
  { title: 'Oil & Gas', image: 'Oil & Gas', path: '/oil-gas-seal' },
  { title: 'Automotive', image: 'Automotive', path: '/industries/automotive' },
  { title: 'Life Sciences', image: 'Life Science', path: '/industries/life-science' },
  { title: 'Mining', image: 'Mining', path: '/industries/mining' },
  { title: 'Semiconductor', image: 'Semiconductor', path: '/industries/semiconductor' },
  { title: 'Robotics', image: 'Robotics', path: '/industries/robotics' },
  { title: 'Aerospace', image: 'Aerospace', path: '/industries/aerospace' },
];

// Indicators we could report as environmental measurement develops. No values: none are measured yet.
export const indicators = [
  { title: 'Energy', icon: 'bolt', items: ['Electricity consumption in kWh.', 'Renewable electricity generated or consumed in kWh.', 'Percentage of electricity sourced from renewable energy, where measured.'] },
  { title: 'Transportation', icon: 'ev', items: ['Number of electric vehicles used for goods movement.', 'Distance travelled by electric vehicles.', 'Fuel consumption and transportation-related emissions, where tracked.'] },
  { title: 'Material Efficiency', icon: 'layers', items: ['Total raw material consumed.', 'Manufacturing scrap generated by material type.', 'Scrap as a percentage of material input.', 'Material recovery or recycling quantities, where documented.'] },
  { title: 'Carbon Emissions', icon: 'factory', items: ['Scope 1 emissions in tonnes of CO₂ equivalent.', 'Scope 2 emissions in tonnes of CO₂ equivalent.', 'Relevant Scope 3 emissions in tonnes of CO₂ equivalent.'] },
  { title: 'Resource Management', icon: 'water', items: ['Water consumption, where measured.', 'Waste generated and its documented treatment route.', 'Other relevant environmental performance indicators.'] },
];

export const indicatorsNote =
  'Publishing a baseline year, calculation methodology and reporting period makes environmental information more meaningful and allows customers to understand the progress being made.';

export const commitment = [
  'At Mithson Sealing Solutions, we recognise that environmental responsibility is an ongoing journey. Through our published initiatives in solar energy adoption, electric vehicles for goods movement, scrap reduction and sustainable agriculture, we aim to encourage more responsible practices across our activities.',
  'We continue to recognise the importance of efficient material utilisation, energy awareness and understanding our environmental footprint across the wider value chain.',
];

export const commitmentLines = ['Engineering for performance.', 'Operating with responsibility.', 'Building a more sustainable future.'];

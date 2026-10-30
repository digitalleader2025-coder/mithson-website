// Typical industry ranges for each seal type, taken from published competitor and
// supplier data. These are NOT Mithson ratings: the site shows them as typical values
// until Mithson engineering confirms them. Keep the numbers exactly as published.
// `source` is for internal checking only and is never shown on the site.

const SOURCES = {
  omnisealSpring: 'https://www.omniseal-solutions.com/sealing-solutions/spring-energized-seals',
  omnisealOilGas: 'https://www.omniseal-solutions.com/industries/energy-oil-gas',
  parkerChevron: 'https://ph.parker.com/us/en/product-list/ptfe-chevron-stacks-praedifa',
  mfpHammer: 'https://www.mfpseals.com/ss/42/flowline-hammer-union-seals.html',
  savvyHammer: 'https://savvyrubber.com/hammer-union-seals/',
  habonimSeats: 'https://habonim.com/wp-content/uploads/2024/11/Seat-Characteristics-v2.pdf',
  vahnTechPlug: 'https://www.johnbrooks.ca/product/vahn-tech-ptfe-sleeve-plug-valves',
  skfBushings: 'https://cdn.skfmediahub.skf.com/api/public/0901d19680090e01/pdf_preview_medium/0901d19680090e01_pdf_preview_medium.pdf',
  trelleborgStepseal: 'https://www.trelleborg.com/en/seals/products-and-solutions/hydraulic-piston-seals/turcon-stepseal-2k',
  hoerbigerPlates: 'https://www.hoerbiger.com/en/products-and-services/reciprocating-compressor-components/profiled-plate-valves.html',
  victrexEnergy: 'https://www.victrex.com/~/media/cd3d8fdd782540d98735162f99655961.pdf',
  marcoEncapsulated: 'https://www.marcorubber.com/teflon-encapsulated-o-rings.htm/',
  kcPackerHandbook: 'https://kcseals.ca/engineering-handbook-on-rubber-packer-elements/',
};

export const typicalSpecs = {
  'mith-plate': {
    rows: [
      { label: 'Differential pressure', value: 'Up to 200 bar, depending on gas temperature', source: SOURCES.hoerbigerPlates },
      { label: 'Minimum suction temperature', value: '-40°C', source: SOURCES.hoerbigerPlates },
      { label: 'Maximum discharge temperature', value: '230°C', source: SOURCES.hoerbigerPlates },
    ],
  },
  'm-uni-seal': {
    rows: [
      { label: 'Temperature', value: '-268°C to +316°C (-450°F to +600°F)', source: SOURCES.omnisealSpring },
      { label: 'Pressure', value: 'Vacuum to 50,000 psi', source: SOURCES.omnisealSpring },
      { label: 'Surface speed', value: 'Up to 1 m/s', source: SOURCES.omnisealSpring },
      { label: 'Jacket materials', value: 'PTFE, PEEK, UHMW-PE', source: SOURCES.omnisealSpring },
    ],
  },
  'hammer-union-seal': {
    rows: [
      { label: 'Working pressure', value: '15,000 psi (Fig 1502 union)', source: SOURCES.mfpHammer },
      { label: 'Test pressure', value: '22,500 psi', source: SOURCES.mfpHammer },
      { label: 'Temperature', value: '-40°C to +300°C, depending on material', source: SOURCES.savvyHammer },
    ],
  },
  'seals-x-mas-tree': {
    rows: [
      { label: 'Stem packing temperature', value: '-260°C to +315°C', source: SOURCES.parkerChevron },
      { label: 'Stem packing pressure', value: '30,000 psi (2,068 bar)', source: SOURCES.parkerChevron },
      { label: 'Surface speed', value: 'Under 5 m/s', source: SOURCES.parkerChevron },
    ],
  },
  'seals-valve': {
    rows: [
      { label: 'PTFE seat', value: '-60°C to +230°C, up to 70 bar', source: SOURCES.habonimSeats },
      { label: 'PEEK seat', value: '-40°C to +260°C, up to Class 2500', source: SOURCES.habonimSeats },
      { label: 'Devlon seat', value: '-60°C to +125°C long term, +200°C short term, up to Class 2500', source: SOURCES.habonimSeats },
      { label: 'PTFE chevron packing', value: '-260°C to +315°C, 30,000 psi (2,068 bar)', source: SOURCES.parkerChevron },
    ],
  },
  'plug-lined-valve': {
    rows: [
      { label: 'Pressure rating', value: 'Class 150 to 600', source: SOURCES.vahnTechPlug },
      { label: 'Working temperature', value: '-29°C to +150°C (-20°F to +302°F)', source: SOURCES.vahnTechPlug },
    ],
  },
  'uni-lube-bearing': {
    rows: [
      { label: 'PTFE composite bushing', value: '-200°C to +250°C, up to 80 N/mm² at low speed', source: SOURCES.skfBushings },
      { label: 'Solid bronze bushing', value: '-40°C to +250°C, up to 25 N/mm²', source: SOURCES.skfBushings },
      { label: 'Wrapped bronze bushing', value: '-40°C to +150°C, up to 40 N/mm²', source: SOURCES.skfBushings },
    ],
  },
  'seals-hydraulic': {
    rows: [
      { label: 'Pressure', value: 'Up to 60 MPa (8,700 psi)', source: SOURCES.trelleborgStepseal },
      { label: 'Temperature', value: '-45°C to +200°C (-49°F to +392°F)', source: SOURCES.trelleborgStepseal },
      { label: 'Speed', value: 'Up to 15 m/s', source: SOURCES.trelleborgStepseal },
    ],
    note: 'Values shown are for a PTFE-based, O-ring energized piston seal.',
  },
  'diaphragm-aodd': {
    rows: [
      { label: 'PTFE in AODD pumps', value: '4°C to 107°C (40°F to 225°F)', source: 'https://ftiair.com/temperature-guide/' },
    ],
  },
  'washers-transmission': {
    rows: [
      { label: 'PEEK continuous use', value: 'Up to 260°C (500°F)', source: SOURCES.victrexEnergy },
    ],
  },
  'encapsulated-o-ring': {
    rows: [
      { label: 'Pressure', value: 'Up to 1,500 psi', source: SOURCES.marcoEncapsulated },
    ],
  },
};

export const oilGasSpringSeals = {
  title: 'Typical range for spring-energized oil & gas seals',
  rows: [
    { label: 'Pressure', value: 'Up to 20,000 psi (1,378 bar)', source: SOURCES.omnisealOilGas },
    { label: 'Temperature', value: 'Up to 250°C (482°F)', source: SOURCES.omnisealOilGas },
    { label: 'Cryogenic service', value: 'Down to -253°C', source: SOURCES.omnisealOilGas },
  ],
};

export const elastomerRanges = {
  source: SOURCES.kcPackerHandbook,
  rows: [
    { material: 'NBR', temperature: '-30°C to 120°C', use: 'General service with oils; lower gas pressures' },
    { material: 'HNBR', temperature: '-30°C to 150°C', use: 'Better heat, H₂S and rapid gas decompression resistance than NBR' },
    { material: 'FKM', temperature: 'Up to 200-225°C', use: 'High temperature, hydrocarbons, fuels and many solvents' },
    { material: 'FEPM', temperature: 'Up to 200°C', use: 'Bases, amines, H₂S, steam and high-pH fluids' },
    { material: 'FFKM', temperature: '260°C to 327°C', use: 'Ultra-HPHT service and the widest chemical resistance' },
    { material: 'EPDM', temperature: '-50°C to 140-150°C', use: 'Steam, hot water and polar solvents; not for hydrocarbon oils' },
  ],
};

// The headline numbers shown for each product on cards, the compare table and page heroes.
// `origin: 'mithson'` is Mithson's own published figure; 'typical' is an industry value
// from `typicalSpecs` above. `scope` says which part of the family the figure describes.
// A null entry means no reliable figure exists yet, so the site says to ask engineers.
export const productSummaries = {
  'mith-plate': {
    temperature: { value: '-40°C suction to 230°C discharge', origin: 'typical', scope: 'PEEK valve plate' },
    pressure: { value: 'Up to 200 bar differential', origin: 'typical', scope: 'Depends on gas temperature' },
  },
  'm-uni-seal': {
    temperature: { value: '-268°C to +316°C', origin: 'typical' },
    pressure: { value: 'Vacuum to 50,000 psi', origin: 'typical' },
  },
  'hammer-union-seal': {
    temperature: { value: '-40°C to +300°C', origin: 'typical', scope: 'Depends on material' },
    pressure: { value: '15,000 psi working', origin: 'typical', scope: 'Fig 1502 union' },
  },
  'seals-x-mas-tree': {
    temperature: { value: '-260°C to +315°C', origin: 'typical', scope: 'Stem packing' },
    pressure: { value: '30,000 psi (2,068 bar)', origin: 'typical', scope: 'Stem packing' },
  },
  'seals-valve': {
    temperature: { value: '-40°C to +260°C', origin: 'typical', scope: 'PEEK seat' },
    pressure: { value: 'Up to Class 2500', origin: 'typical', scope: 'PEEK seat' },
  },
  'plug-lined-valve': {
    temperature: { value: '-29°C to +150°C', origin: 'typical', scope: 'PTFE sleeved plug valve' },
    pressure: { value: 'Class 150 to 600', origin: 'typical', scope: 'PTFE sleeved plug valve' },
  },
  'uni-lube-bearing': {
    temperature: { value: '-40°C to +300°C', origin: 'mithson', scope: 'MSS-MB Solid Bush' },
    pressure: { label: 'Load', value: 'Up to 80 N/mm²', origin: 'typical', scope: 'PTFE composite, low speed' },
  },
  'seals-hydraulic': {
    temperature: { value: '-45°C to +200°C', origin: 'typical', scope: 'PTFE piston seal' },
    pressure: { value: 'Up to 60 MPa (8,700 psi)', origin: 'typical', scope: 'PTFE piston seal' },
    materials: ['High-performance polymers'],
  },
  'diaphragm-aodd': {
    temperature: { value: '4°C to 107°C', origin: 'typical', scope: 'PTFE in AODD pumps' },
    pressure: null,
  },
  'washers-transmission': {
    temperature: { value: 'Up to 250°C continuous', origin: 'mithson' },
    pressure: null,
  },
  'nozzles-power-grid': {
    temperature: null,
    pressure: null,
  },
  'encapsulated-o-ring': {
    temperature: { value: '-60°C to +205°C', origin: 'mithson', scope: 'Silicone core' },
    pressure: { value: 'Up to 1,500 psi', origin: 'typical' },
  },
};

export function getProductSummary(product) {
  const summary = productSummaries[product.slug] ?? { temperature: null, pressure: null };
  return { ...summary, materials: product.materials ?? summary.materials ?? [] };
}

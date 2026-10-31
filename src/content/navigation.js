// Navigation structure — exact labels from AGENT.md / website-content.txt
export const navigation = [
  {
    label: 'Who We Are',
    path: '/who-we-are',
    activePaths: ['/who-we-are', '/events'],
    children: [
      { label: 'About Us', path: '/who-we-are/about-us' },
      { label: 'Quality & Certification', path: '/who-we-are/quality-and-certification' },
      { label: 'Events', path: '/events' },
    ],
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      {
        label: 'Custom Manufacturing',
        path: '/products/custom-manufacturing',
        children: [
          { label: 'Custom Molded Products', path: '/products/custom-molded-products' },
          { label: 'Machined Products', path: '/products/machined-products' },
        ],
      },
      { label: 'MITH PLATE', path: '/products/mith-plate' },
      { label: 'M-UNI Seal', path: '/products/m-uni-seal' },
      { label: 'Hammer Union Seal', path: '/products/hammer-union-seal' },
      { label: 'Seals - X-Mas Tree', path: '/products/seals-x-mas-tree' },
      { label: 'Seals - Valve', path: '/products/seals-valve' },
      { label: 'Plug & Lined - Valve', path: '/products/plug-lined-valve' },
      { label: 'UNI-LUBE Bearing', path: '/products/uni-lube-bearing' },
      { label: 'Seals - Hydraulic', path: '/products/seals-hydraulic' },
      { label: 'Diaphragm - AODD', path: '/products/diaphragm-aodd' },
      { label: 'Washers - Transmission', path: '/products/washers-transmission' },
      { label: 'Nozzles - Power Grid', path: '/products/nozzles-power-grid' },
      { label: 'Encapsulated O-Ring', path: '/products/encapsulated-o-ring' },
    ],
  },
  {
    label: 'Industries',
    path: '/industries',
    activePaths: ['/industries', '/oil-gas-seal'],
    children: [
      { label: 'Oil & Gas Seal', path: '/oil-gas-seal' },
      { label: 'Downhole Tools', path: '/industries/downhole-tools' },
      { label: 'Life Science', path: '/industries/life-science' },
      { label: 'Semiconductor', path: '/industries/semiconductor' },
      { label: 'Aerospace', path: '/industries/aerospace' },
      { label: 'Automotive', path: '/industries/automotive' },
    ],
  },
  {
    label: 'Career',
    path: '/careers',
    children: [],
  },
  {
    label: 'Product Gallery',
    path: '/product-gallery',
    children: [],
  },
  {
    label: 'Enquire Now',
    path: '/connect-with-us',
    children: [],
  },
];

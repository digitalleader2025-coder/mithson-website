// Navigation structure — exact labels from AGENT.md / website-content.txt
export const navigation = [
  {
    label: 'Who We Are',
    path: '/who-we-are',
    children: [
      { label: 'About Us', path: '/who-we-are/about-us' },
      { label: 'Quality & Certification', path: '/who-we-are/quality-and-certification' },
    ],
  },
  {
    label: 'Products',
    path: '/products',
    children: [
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
    children: [
      { label: 'Energy - Oil & Gas', path: '/industries/energy-oil-gas' },
    ],
  },
  {
    label: 'Oil & Gas Seal',
    path: '/oil-gas-seal',
    children: [
      { label: 'API 6A Wellhead Equipment Seal', path: '/oil-gas-seal/api-6a-wellhead-equipment-seal' },
      { label: 'Well Service Equipment Seal', path: '/oil-gas-seal/well-service-equipment-seal' },
      { label: 'Downhole Tool Seal', path: '/oil-gas-seal/downhole-tool-seal' },
      { label: 'API 6D Ball Valve & LNG Seal', path: '/oil-gas-seal/api-6d-ball-valve-lng-seal' },
    ],
  },
  {
    label: 'Product Gallery',
    path: '/product-gallery',
    children: [],
  },
  {
    label: 'More',
    path: '/more',
    children: [
      { label: 'Connect With Us', path: '/connect-with-us' },
      {
        label: 'Events',
        path: '/events',
        children: [
          { label: 'Oil & Gas Expo 2025', path: '/events/oil-and-gas-expo-2025' },
          { label: 'Expo 2024', path: '/events/expo-2024' },
          { label: 'Expo 2023', path: '/events/expo-2023' },
        ],
      },
    ],
  },
];

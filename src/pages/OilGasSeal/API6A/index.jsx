import OilGasSealTemplate from '../OilGasSealTemplate';

const products = [
  { name: 'Stem Packing Set', materials: ['PEEK', 'Elgiloy/SS Steel', 'Filled PTFE'], application: 'Wellhead Gate Valve', spec: 'API 6A' },
  { name: 'Stem Seal', materials: ['PTFE', 'Corrosion-resistant metal spring'], application: 'Wellhead Gate Valve — spring-energized', spec: 'API 6A' },
  { name: 'OD/ID Face Seal', materials: ['PEEK jacket', 'Glass-filled PTFE'], application: 'Valve seat — spring-loaded lip seal', spec: 'API 6A' },
  { name: 'BOP Seal', materials: ['NBR', 'HNBR'], application: 'Blowout Preventer (BOP)', spec: 'BOP Rated' },
];

export default function API6APage() {
  return (
    <OilGasSealTemplate
      title="API 6A Wellhead Equipment Seal"
      subtitle="High-pressure, sour-gas and HPHT wellhead sealing — stem packing sets, stem seals, OD/ID face seals and BOP seals manufactured to API 6A."
      products={products}
      label="Oil & Gas Seal"
      pageId="api6a"
    />
  );
}

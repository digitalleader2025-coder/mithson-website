import OilGasSealTemplate from '../OilGasSealTemplate';

const products = [
  { name: 'Body-Bonnet Seal', materials: ['CFT', 'Elgiloy Spring'], application: 'Trunnion Mount Ball Valve', notes: 'Source states up to 10,000 PSI', spec: '10,000 PSI' },
  { name: 'Seat Retainer', materials: ['PTFE', 'Elgiloy Spring', 'PEEK'], application: 'Trunnion Mount Ball Valve', notes: 'Source states up to 10,000 PSI', spec: '10,000 PSI' },
  { name: 'PEEK Seat Ring', materials: ['PEEK'], application: 'Trunnion Mount & Floating Ball Valves', spec: 'API 6D' },
  { name: 'LNG Seal', materials: ['PTFE', 'Elgiloy Spring'], application: 'Ball Valve — LNG cryogenic service', notes: 'LNG service around -162°C / -260°F', spec: 'Cryogenic' },
];

export default function API6DPage() {
  return (
    <OilGasSealTemplate
      title="API 6D Ball Valve & LNG Seal"
      subtitle="Gas transmission and cryogenic ball valve sealing — body-bonnet seals, PEEK seat rings and LNG seals for trunnion and floating ball valves."
      products={products}
      label="Oil & Gas Seal"
      pageId="api6d"
    />
  );
}

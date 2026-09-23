import OilGasSealTemplate from '../OilGasSealTemplate';

const products = [
  { name: 'Unified Stack Seal', materials: ['Filled PTFE', 'PEEK'], application: 'Sliding Sleeves / Liner Hanger Seal', notes: 'Source states up to 15,000 PSI', spec: '15,000 PSI' },
  { name: 'Packer', materials: ['NBR', 'HNBR', 'FKM'], application: 'Line Hangers / Liners', spec: 'Downhole' },
  { name: 'RGD O-Ring', materials: ['HNBR', 'FKM', 'FFKM'], application: 'Wellhead, Packers, BOP', spec: 'Rapid Gas' },
  { name: 'PEEK Back-up Ring', materials: ['PEEK'], application: 'Subsurface Safety Valve', spec: 'Deep-Well' },
];

export default function DownholePage() {
  return (
    <OilGasSealTemplate
      title="Downhole Tool Seal"
      subtitle="Aggressive fluids, high temperature and deep-well pressure — unified stack seals, packers, RGD O-rings and PEEK back-up rings for demanding downhole environments."
      products={products}
      label="Oil & Gas Seal"
      pageId="downhole"
    />
  );
}

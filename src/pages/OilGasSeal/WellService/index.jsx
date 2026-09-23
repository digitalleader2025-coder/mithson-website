import OilGasSealTemplate from '../OilGasSealTemplate';

const products = [
  { name: 'Plunger Packing Set', materials: ['NBR/Fabric', 'FKM/Fabric', 'HNBR/Fabric'], application: 'Plunger Pump', spec: 'High-Cycle' },
  { name: 'Pump Packing Set', materials: ['NBR', 'HNBR', 'FKM', 'Filled PTFE'], application: 'Mud Pump & Frac Pump', spec: 'Frac Rated' },
  { name: 'Valve Seat Insert', materials: ['PU'], application: 'Mud Pump & Frac Pump', spec: 'Frac Rated' },
  { name: 'Mud Pump Liner Seal', materials: ['PU', 'NBR', 'HNBR'], application: 'Mud Pump', spec: 'High-Pressure' },
];

export default function WellServicePage() {
  return (
    <OilGasSealTemplate
      title="Well Service Equipment Seal"
      subtitle="High-cycling, high-stress sealing for mud pumps, frac pumps and plunger pumps — plunger packing sets, pump packing, valve seat inserts and liner seals."
      products={products}
      label="Oil & Gas Seal"
      pageId="well-service"
    />
  );
}

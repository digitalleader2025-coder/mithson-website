// Product data for the Oil & Gas Seal family pages, moved here unchanged from each page so the
// Oil & Gas Seal and Downhole Tools overview pages can show the same products and photos.
import imgStemPacking from '../assets/api6a/Stem Packing Set.png';
import imgStemSeal from '../assets/api6a/Stem Seal.png';
import imgFaceSeal from '../assets/api6a/ID OD Seal.png';
import imgBopSeal from '../assets/api6a/BOP Seal.png';

export const api6aItems = [
  { 
    image: imgStemPacking, 
    label: 'Stem Packing Set', 
    desc: "Engineered for reliability, our valve stem packing delivers exceptional sealing performance under pressure and across a wide temperature range. Crafted from premium materials that meet strict API standards, it's the trusted choice for demanding applications.",
    materials: 'PEEK, Elgiloy/SS steel, Filled PTFE',
    application: 'Wellhead Gate Valve'
  },
  { 
    image: imgStemSeal, 
    label: 'Stem Seal', 
    desc: "Spring-energized stem seals play a critical role in valve performance—securing internal fluids while blocking external contaminants. Designed for durability and precision, they are ideal for use in API 6A valves and API 6D ball valves, ensuring reliable sealing in high-demand environments.",
    materials: 'PEEK, Elgiloy/SS steel, Filled PTFE',
    application: 'Wellhead Gate Valve'
  },
  { 
    image: imgFaceSeal, 
    label: 'OD/ID Face Seal', 
    desc: "The OD/ID Face Seal for FLS Gate Valves is a spring-loaded lip seal designed to enhance the performance and service life of the gate and seat. Specifically used for the valve seat, it ensures reliable sealing under demanding conditions. The seal jacket is typically made of high-performance PEEK for superior durability, with a cost-effective alternative available in glass-filled PTFE. Typically, the ID and OD face seal of the valve seat are used together.",
    materials: 'PEEK, Elgiloy/SS steel, Filled PTFE',
    application: 'Wellhead Gate Valve'
  },
  { 
    image: imgBopSeal, 
    label: 'BOP Seal', 
    desc: "Outer BOP seals are critical components used in oil and gas wellhead blowout preventers (BOPs). They are designed to form a reliable seal around the drill pipe, effectively preventing oil and gas leaks and ensuring wellhead safety during drilling operations.",
    materials: 'NBR , HNBR',
    application: 'BOP (Blowout Preventers)'
  }
];

import imgPlungerPacking from '../assets/wellservice/Plunger Packing Set.png';
import imgPumpPacking from '../assets/wellservice/Pump Packing Set.png';
import imgValveSeat from '../assets/wellservice/Valve Seat Insert.png';
import imgMudPumpLiner from '../assets/wellservice/Mud Pump Liner Seal.png';

export const wellServiceItems = [
  { 
    image: imgPlungerPacking, 
    label: 'Plunger Packing Set', 
    desc: "A plunger pump packing set is a critical sealing assembly designed to prevent high-pressure fluid from leaking as the plunger reciprocates within the pump cylinder.",
    materials: 'Nitrile/Fabric (NBR, Buna-N), Viton (FKM)/Fabric, HNBR/Fabric',
    application: 'Plunger Pump'
  },
  { 
    image: imgPumpPacking, 
    label: 'Pump Packing Set', 
    desc: "Hydraulic fracturing (fracking) and cementing activities in the oilfield require high-pressure pumps, where effective sealing around the pump's plunger or piston is essential to prevent fluid leakage. High-performance well service pump packings are available in a wide range of materials to suit specific well conditions and operating parameters.",
    materials: 'NBR, HNBR, FKM, filled PTFE',
    application: 'Mud Pump, Frac Pump'
  },
  { 
    image: imgValveSeat, 
    label: 'Valve Seat Insert', 
    desc: "The valve insert seal is specifically designed to seal the valve seat in fracturing pumps. Manufactured from advanced, modified polyurethane, it offers outstanding resistance to extrusion, puncture, and fatigue—ensuring dependable performance across a wide range of demanding fracturing conditions.",
    materials: 'PU (Poly Urethane)',
    application: 'Mud Pump, Frac Pump'
  },
  { 
    image: imgMudPumpLiner, 
    label: 'Mud Pump Liner Seal', 
    desc: "A liner seal in a mud pump is a sealing component placed between the liner and the pump housing (fluid end module) to prevent drilling fluid (mud) from leaking around the outside of the liner. The most important part of a mud pump with the function of ensuring mud circulation is the piston. Without a functioning liner seal, mud can leak into unwanted areas, reducing efficiency and increasing wear.",
    materials: 'PU (Poly Urethane) , NBR , HNBR',
    application: 'Mud Pump'
  }
];

import imgBodyBonnet from '../assets/api6d/Body-Bonnet Seal.png';
import imgSeatRetainer from '../assets/api6d/Seat Retainer.png';
import imgPeekSeatRing from '../assets/api6d/Peek Seat Ring.png';
import imgLngSeal from '../assets/api6d/LNG Seal.png';

export const api6dItems = [
  { 
    image: imgBodyBonnet, 
    label: 'Body-Bonnet Seal', 
    desc: "In a Trunnion-mounted ball valve, the seal located between the valve body and the bonnet (or closure) serves as the primary pressure-containing seal. Its main function is to prevent internal fluid—whether liquid or gas—from escaping through the joint between the valve body and the bonnet or closure. This seal is capable of withstanding pressures up to 10,000 PSI.",
    materials: 'CFT, Elgiloy Spring',
    application: 'Trunnion Mount Ball Valve'
  },
  { 
    image: imgSeatRetainer, 
    label: 'Seat Retainer', 
    desc: "The seat retainer seal, a primary seal, is positioned between the seat retainer (or seat insert) and valve body to prevent process fluid leakage behind the valve seat. It ensures full flow containment through the ball-seat interface and maintains pressure integrity in Trunnion-mounted ball valves. A PEEK T-ring enhances support and energizing force, helping the PTFE lip maintain consistent sealing by compensating for cold flow and deformation under varying conditions. This seal is capable of withstanding pressures up to 10,000 PSI.",
    materials: 'PTFE, Elgiloy Spring, PEEK',
    application: 'Trunnion Mount Ball Valve'
  },
  { 
    image: imgPeekSeatRing, 
    label: 'Peek Seat Ring', 
    desc: "The seat ring in a ball valve is a key sealing component positioned between the valve ball and body. It creates a tight seal around the ball to allow or block flow. In trunnion-mounted designs, seat rings are typically spring-loaded or pressure-energized to maintain sealing even at low pressure. In floating ball valves, line pressure pushes the ball against the downstream seat ring, which acts as the primary sealing surface.",
    materials: 'PEEK',
    application: 'Trunnion Mount Ball Valve, Floating Ball Valve'
  },
  { 
    image: imgLngSeal, 
    label: 'LNG Seal', 
    desc: "Spring-energized seals are critical sealing elements used in Ball valves operating in LNG (Liquefied Natural Gas) applications. LNG processes involve cryogenic temperatures around –162°C (–260°F), requiring sealing systems that perform reliably under extreme cold, pressure variations, and thermal cycling—conditions where conventional elastomeric seals would fail.",
    materials: 'PTFE, Elgiloy Spring',
    application: 'Ball Valve'
  }
];

import imgUnifiedStack from '../assets/downhole/Unified Stack Seal.png';
import imgPacker from '../assets/downhole/Packer.png';
import imgRgdOring from '../assets/downhole/RGD O-Ring.png';
import imgPeekBackup from '../assets/downhole/Peek Back-Up Ring.png';

export const downholeItems = [
  { 
    image: imgUnifiedStack, 
    label: 'Unified Stack Seal', 
    desc: "The unified bi-directional seal is a reliable and proven sealing solution, especially well-suited for extreme HPHT (High Pressure High Temperature) environments. Its compact design occupies less space compared to traditional seal stacks, while the mechanically locked configuration helps minimize installation errors. It is ideal for well tools such as sliding sleeves, which enable infinitely adjustable switching. This seal is capable of withstanding pressures up to 15,000 PSI.",
    materials: 'Filled PTFE, PEEK',
    application: 'Sliding Sleeves, Liner Hanger Seal'
  },
  { 
    image: imgPacker, 
    label: 'Packer', 
    desc: "Packer elements are flexible elastomeric components designed to create a seal between the outer diameter of the production tubing and the surrounding casing, liner, or wellbore. They are engineered to withstand harsh downhole environments and must deliver reliable zonal isolation to ensure the integrity and performance of oil and gas wells.",
    materials: 'NBR, HNBR, FKM',
    application: 'Line Hangers, Liners'
  },
  { 
    image: imgRgdOring, 
    label: 'RGD O-Ring', 
    desc: "Rapid Gas Decompression (RGD) O-rings are specialized seals engineered to resist the failure of elastomer materials caused by sudden pressure drops. To enhance RGD resistance, these O-rings are typically made from harder, high-modulus elastomer compounds that can better withstand the stresses associated with rapid decompression.",
    materials: 'HNBR, FKM, FFKM',
    application: 'Wellhead, Packers, BOP'
  },
  { 
    image: imgPeekBackup, 
    label: 'PEEK Back-up Ring', 
    desc: "PEEK back-up rings are utilized in subsurface safety valves (SSVs) as secondary sealing components, working in conjunction with primary seals such as O-rings. Their primary function is to prevent the extrusion of elastomeric seals under high-pressure and high-temperature conditions, thereby enhancing the seal integrity and reliability of the valve. These back-up rings are available in uncut, scarf-cut, and spiral-cut configurations.",
    materials: 'PEEK',
    application: 'Subsurface Safety Valve'
  }
];

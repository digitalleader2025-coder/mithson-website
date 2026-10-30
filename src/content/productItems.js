// Details for each individual item inside a product family, shown under its carousel
// or gallery. `origin: 'mithson'` is Mithson's own published figure; 'typical' is an
// industry value kept exactly as published. `source` is for checking only and is never
// shown on the site. A null temperature or pressure means no reliable figure was found,
// so the site says to ask engineers. Never fill a gap with an estimate.

const SRC = {
  parkerGuide: 'https://www.parker.com/content/dam/parker/na/united-states/industries/off-road/pdfs-offroad/PTFE%20Seal%20Design%20Guide.pdf',
  parkerChevron: 'https://ph.parker.com/us/en/product-list/ptfe-chevron-stacks-praedifa',
  omnisealSpring: 'https://www.omniseal-solutions.com/sealing-solutions/spring-energized-seals',
  omnisealOilGas: 'https://www.omniseal-solutions.com/industries/energy-oil-gas',
  ahpSlantCoil: 'https://ahpseals.com/spring-energized-ptfe-seals/',
  habonimSeats: 'https://habonim.com/wp-content/uploads/2024/11/Seat-Characteristics-v2.pdf',
  kcHandbook: 'https://kcseals.ca/engineering-handbook-on-rubber-packer-elements/',
  vahnTechPlug: 'https://www.johnbrooks.ca/product/vahn-tech-ptfe-sleeve-plug-valves',
  skfBushings: 'https://cdn.skfmediahub.skf.com/api/public/0901d19680090e01/pdf_preview_medium/0901d19680090e01_pdf_preview_medium.pdf',
  slidura: 'https://www.bimetalbushings.com/technical-data-design-guide/',
  cnfesoda: 'https://cnfesoda.com/bimetal-bushing/',
  trelleborgRod: 'https://www.trelleborg.com/en/seals/products-and-solutions/hydraulic-rod-seals/turcon-stepseal-2a',
  trelleborgPiston: 'https://www.trelleborg.com/en/seals/products-and-solutions/hydraulic-piston-seals/turcon-stepseal-2k',
  trelleborgWear: 'https://www.trelleborg.com/en/seals/products-and-solutions/hydraulic-wear-rings/turcite-slydring',
  ftiAir: 'https://ftiair.com/temperature-guide/',
  victrexEnergy: 'https://www.victrex.com/~/media/cd3d8fdd782540d98735162f99655961.pdf',
};

const typical = (value, source, scope) => ({ value, source, scope, origin: 'typical' });
const mithson = (value, scope) => ({ value, scope, origin: 'mithson' });

const helicalSpec = {
  temperature: typical('-260°C to +315°C', SRC.parkerGuide),
  pressure: typical('Up to 55 MPa', SRC.parkerGuide, 'Rod or piston seal'),
  speed: typical('Up to 15 m/s', SRC.parkerGuide),
};
const faceSpec = {
  temperature: typical('-260°C to +315°C', SRC.parkerGuide),
  pressure: typical('Up to 140 MPa', SRC.parkerGuide, 'Helical spring, static face seal'),
  speed: typical('Up to 0.005 m/s', SRC.parkerGuide),
};
const chevronSpec = {
  temperature: typical('-260°C to +315°C', SRC.parkerChevron, 'PTFE chevron set'),
  pressure: typical('30,000 psi (2,068 bar)', SRC.parkerChevron, 'PTFE chevron set'),
  speed: typical('Under 5 m/s', SRC.parkerChevron),
};
const oilGasSpringSpec = {
  temperature: typical('Up to 250°C', SRC.omnisealOilGas),
  pressure: typical('Up to 20,000 psi (1,378 bar)', SRC.omnisealOilGas),
};
const peekSeatSpec = {
  temperature: typical('-40°C to +260°C', SRC.habonimSeats, 'PEEK seat'),
  pressure: typical('Up to Class 2500', SRC.habonimSeats, 'PEEK seat'),
};
const devlonSeatSpec = {
  temperature: typical('-60°C to +125°C long term, +200°C short term', SRC.habonimSeats, 'Devlon seat'),
  pressure: typical('Up to Class 2500', SRC.habonimSeats, 'Devlon seat'),
};
const elastomerRange = (scope) => typical('NBR -30°C to 120°C, HNBR -30°C to 150°C, FKM up to 200-225°C', SRC.kcHandbook, scope);
const ptfeMaterial = typical('Up to 260°C continuous', SRC.parkerGuide, 'Virgin PTFE material');
const aoddPtfe = typical('4°C to 107°C (40°F to 225°F)', SRC.ftiAir, 'PTFE in AODD pumps');

const ELASTOMER_O_RING = {
  description: 'A one-piece elastomer ring that seals by being squeezed in its groove. The right compound depends on the fluid, temperature and gas pressure in your valve.',
  temperature: elastomerRange('Depends on elastomer'),
  pressure: null,
  materials: ['NBR', 'HNBR', 'FKM'],
};

const SPRING_ENERGIZED_VALVE = {
  description: 'A polymer jacket held against the sealing surface by a corrosion-resistant metal spring. System pressure adds to the sealing force, so it stays tight at low and high pressure.',
  temperature: typical('-268°C to +316°C', SRC.omnisealSpring),
  pressure: typical('Vacuum to 50,000 psi', SRC.omnisealSpring),
  materials: ['PTFE jacket', 'Corrosion-resistant metal spring'],
};

export const productItems = {
  'm-uni-seal': {
    'Canti Seals': {
      description: 'Uses a cantilever spring, a V-shaped strip that flexes like a set of fingers. It gives a light, even load with large spring travel, which suits moving rods, pistons and shafts.',
      temperature: typical('-260°C to +315°C', SRC.parkerGuide),
      pressure: typical('Up to 20 MPa', SRC.parkerGuide, 'Rod or piston seal'),
      speed: typical('Up to 5 m/s', SRC.parkerGuide),
      materials: ['PTFE jacket', 'Corrosion-resistant metal spring'],
    },
    'Coil Seals': {
      description: 'Uses a slanted coil spring that keeps a nearly constant load as the seal compresses. This helps it tolerate wear and small changes in gap over a long service life.',
      temperature: typical('-200°C to 260°C', SRC.ahpSlantCoil),
      pressure: typical('Up to 10,000 psi (700 bar)', SRC.ahpSlantCoil, 'Slanted coil seal'),
      materials: ['PTFE jacket', 'Corrosion-resistant metal spring'],
    },
    'Heli Seals': {
      description: 'Uses a flat helical ribbon spring that gives a high load over a short travel. It is a strong choice for high pressure and for gases that are hard to contain.',
      ...helicalSpec,
      materials: ['PTFE jacket', 'Corrosion-resistant metal spring'],
    },
    'ID Face Seals': {
      description: 'A face seal that sits in a groove and seals against a flat surface, with its lips arranged for pressure acting from the inside. Used for flanges and static joints.',
      ...faceSpec,
      materials: ['PTFE jacket', 'Corrosion-resistant metal spring'],
    },
    'OD Face Seals': {
      description: 'A face seal with its lips arranged for pressure acting from the outside. Used where the higher pressure sits around the seal rather than inside it.',
      ...faceSpec,
      materials: ['PTFE jacket', 'Corrosion-resistant metal spring'],
    },
  },

  'seals-x-mas-tree': {
    'Spring Energized Seals': {
      description: 'A PTFE jacket with a corrosion-resistant spring for Christmas Tree gate valves. It keeps sealing force steady through pressure and temperature cycles.',
      ...oilGasSpringSpec,
      materials: ['PTFE jacket', 'Corrosion-resistant metal spring'],
    },
    'Stem Packing': {
      description: 'A stack of rings around the gate valve stem that stops leakage as the valve opens and closes, while keeping operating torque manageable.',
      ...chevronSpec,
      materials: ['PTFE', 'Filled PTFE'],
    },
    'Seat Seal': {
      description: 'Seals between the valve seat and body, so fluid cannot bypass the seat when the gate is closed.',
      ...peekSeatSpec,
      materials: ['High-performance polymers'],
    },
    'Elastomer O-Ring': ELASTOMER_O_RING,
  },

  'seals-valve': {
    'Devlon Insert Metal Seat': {
      description: 'A metal seat ring with a Devlon insert. The insert gives a tight seal and the metal carries the load, which suits high-pressure ball valves.',
      ...devlonSeatSpec,
      materials: ['Devlon insert', 'Metal seat'],
    },
    'Devlon Seat Ring': {
      description: 'A one-piece Devlon ring for ball valve seats, chosen for its toughness under pressure.',
      ...devlonSeatSpec,
      materials: ['Devlon'],
    },
    'Elastomer O-Ring': ELASTOMER_O_RING,
    'PTFE Carbon Graphite Chevron Packing': {
      description: 'V-shaped packing rings filled with carbon and graphite for lower friction and better wear. The stacked rings press outward as pressure rises.',
      ...chevronSpec,
      materials: ['PTFE', 'Carbon', 'Graphite'],
    },
    'PTFE Carbon Graphite Seat': {
      description: 'A seat made from carbon-filled PTFE. The filler adds strength and wear resistance compared with virgin PTFE.',
      temperature: typical('-200°C to +230°C', SRC.habonimSeats, 'Carbon-filled PTFE seat'),
      pressure: typical('Up to Class 800', SRC.habonimSeats, 'Carbon-filled PTFE seat'),
      materials: ['PTFE', 'Carbon', 'Graphite'],
    },
    'PTFE Cavity Seat': {
      description: 'A seat shaped to fill the empty space around the ball, so media cannot collect and solidify inside the valve body.',
      temperature: typical('-60°C to +230°C', SRC.habonimSeats, 'Filled PTFE seat'),
      pressure: typical('Up to Class 800', SRC.habonimSeats, 'Filled PTFE seat'),
      materials: ['PTFE'],
    },
    'PTFE Chevron Packing': {
      description: 'V-shaped PTFE rings stacked around a valve stem. Pressure spreads the rings outward so they seal harder as the load rises.',
      ...chevronSpec,
      materials: ['PTFE'],
    },
    'PTFE Seat': {
      description: 'A virgin PTFE seat with very low friction and wide chemical resistance. A good fit for lower-pressure valves.',
      temperature: typical('-60°C to +230°C', SRC.habonimSeats, 'Virgin PTFE seat'),
      pressure: typical('Up to 70 bar (1,015 psi)', SRC.habonimSeats, 'Virgin PTFE seat'),
      materials: ['Virgin PTFE'],
    },
    'Peek Insert Metal Seat': {
      description: 'A metal seat ring with a PEEK insert. It handles higher temperature and pressure than softer seats while the metal keeps the shape stable.',
      ...peekSeatSpec,
      materials: ['PEEK insert', 'Metal seat'],
    },
    'Peek Seat Ring': {
      description: 'A one-piece PEEK ring for ball valve seats. PEEK stays strong at high temperature and resists extrusion under pressure.',
      ...peekSeatSpec,
      materials: ['PEEK'],
    },
    'Spring Energized Seals': SPRING_ENERGIZED_VALVE,
    'Stem Packing API 6A': {
      description: 'A complete packing set for valve stems, combining PTFE sealing rings with support rings that stop the softer material being forced into gaps.',
      ...chevronSpec,
      materials: ['PTFE', 'PEEK'],
    },
  },

  'plug-lined-valve': {
    'PTFE Plug Valve Sleeve': {
      description: 'A PTFE sleeve between the plug and body that seals all the way around. It needs no lubricant and removes the cavity where media could collect.',
      temperature: typical('-29°C to +150°C', SRC.vahnTechPlug, 'PTFE sleeved plug valve'),
      pressure: typical('Class 150 to 600', SRC.vahnTechPlug, 'PTFE sleeved plug valve'),
      materials: ['Virgin PTFE', 'Chemically Modified PTFE', 'Carbon-Filled PTFE', 'Glass-Filled PTFE', 'Bronze-Filled PTFE'],
    },
    'PTFE Bushings and Sleeves': {
      description: 'Machined PTFE parts that guide moving components and reduce friction without lubricant, in chemical service where metal would corrode.',
      temperature: ptfeMaterial,
      pressure: null,
      materials: ['Virgin PTFE', 'Carbon-Filled PTFE', 'Glass-Filled PTFE', 'Bronze-Filled PTFE'],
    },
    'PTFE Valve Liners': {
      description: 'A PTFE lining that keeps corrosive media away from the metal valve body, so the body provides strength and the liner provides chemical resistance.',
      temperature: ptfeMaterial,
      pressure: null,
      materials: ['Virgin PTFE', 'Chemically Modified PTFE'],
    },
  },

  'uni-lube-bearing': {
    'MSS-MF Self Lube': {
      temperature: typical('-200°C to +250°C', SRC.skfBushings, 'PTFE composite bushing'),
      pressure: typical('Up to 80 N/mm²', SRC.skfBushings, 'PTFE composite, low speed'),
      pressureLabel: 'Load',
      materials: ['Metal-polymer composite'],
    },
    'MSS-MP Pre Lube': {
      temperature: typical('-40°C to +110°C', SRC.skfBushings, 'POM composite bushing'),
      pressure: typical('Up to 120 N/mm²', SRC.skfBushings, 'POM composite, low speed'),
      pressureLabel: 'Load',
      materials: ['Metal-polymer composite'],
    },
    'MSS-BIM Bi-Metal': {
      temperature: typical('-40°C to +250°C', SRC.slidura, 'Steel-backed bimetal bushing'),
      pressure: typical('Up to 140 MPa', SRC.cnfesoda, 'Steel-backed bimetal bushing'),
      pressureLabel: 'Load',
      materials: ['Steel backing', 'Bronze bearing layer'],
    },
    'MSS-MB Solid Bush': {
      temperature: mithson('-40°C to +300°C'),
      pressure: null,
      pressureLabel: 'Load',
      materials: ['Metal structure', 'Graphite solid lubricant'],
    },
    'MSS-MITHLON': {
      temperature: typical('-30°C to +110°C', SRC.skfBushings, 'Thermoplastic bushing'),
      pressure: typical('Up to 40 N/mm²', SRC.skfBushings, 'Thermoplastic bushing'),
      pressureLabel: 'Load',
      materials: ['Thermoplastic'],
    },
  },

  'seals-hydraulic': {
    'Wear Rings': {
      temperature: typical('-60°C to +200°C', SRC.trelleborgWear, 'PTFE-based wear ring'),
      pressure: typical('Up to 15 MPa', SRC.trelleborgWear, 'PTFE-based wear ring'),
      speed: typical('Up to 15 m/s', SRC.trelleborgWear),
      materials: ['High-performance polymers'],
    },
    'PISTON SEALS': {
      temperature: typical('-45°C to +200°C', SRC.trelleborgPiston, 'PTFE piston seal'),
      pressure: typical('Up to 60 MPa (8,700 psi)', SRC.trelleborgPiston, 'PTFE piston seal'),
      speed: typical('Up to 15 m/s', SRC.trelleborgPiston),
      materials: ['High-performance polymers'],
    },
    'WIPER SEALS': {
      temperature: null,
      pressure: null,
      materials: ['High-performance polymers'],
    },
    'Rod Seals': {
      temperature: typical('-45°C to +200°C', SRC.trelleborgRod, 'PTFE rod seal'),
      pressure: typical('Up to 60 MPa (8,700 psi)', SRC.trelleborgRod, 'PTFE rod seal'),
      speed: typical('Up to 15 m/s', SRC.trelleborgRod),
      materials: ['High-performance polymers'],
    },
  },

  'diaphragm-aodd': {
    Diaphragm: {
      description: 'The flexible wall that moves fluid through the pump as air pressure pushes it back and forth. It must resist the chemical being pumped and survive constant flexing.',
      temperature: aoddPtfe,
      pressure: null,
      materials: ['PTFE', 'Fluoropolymers'],
    },
    'Pilot Shaft': {
      description: 'Part of the air valve system that shifts the pump between strokes, so the two diaphragms keep working in turn.',
      temperature: null,
      pressure: null,
      materials: ['PTFE', 'Fluoropolymers'],
    },
    'PTFE Ball': {
      description: 'The check valve ball that opens and closes on each stroke, so fluid flows one way through the pump.',
      temperature: aoddPtfe,
      pressure: null,
      materials: ['PTFE'],
    },
    'PTFE O-Ring': {
      description: 'Seals the joints between pump parts and stands up to chemicals that would attack rubber.',
      temperature: aoddPtfe,
      pressure: null,
      materials: ['PTFE'],
    },
    'PTFE Seat': {
      description: 'The surface the check ball closes against. A good fit between ball and seat stops fluid flowing backward.',
      temperature: aoddPtfe,
      pressure: null,
      materials: ['PTFE'],
    },
  },

  'washers-transmission': {
    'PEEK-Split Lock Washer': {
      description: 'A split PEEK washer for transmission assemblies that reduces friction and prevents metal-to-metal wear.',
      temperature: typical('Up to 260°C (500°F)', SRC.victrexEnergy, 'PEEK continuous use'),
      pressure: null,
      materials: ['Carbon-filled PEEK'],
    },
    'PEEK-Thrust Washer': {
      description: 'Takes the axial load between rotating parts in high-torque automatic transmissions, with low friction during cold starts and hard shifts.',
      temperature: mithson('Up to 250°C (482°F) continuous'),
      pressure: null,
      materials: ['Carbon-filled PEEK'],
    },
  },
};

// Oil & gas gallery items already have descriptions and materials on their own pages.
export const oilGasItems = {
  'Stem Packing Set': chevronSpec,
  'Stem Seal': oilGasSpringSpec,
  'OD/ID Face Seal': faceSpec,
  'BOP Seal': { temperature: typical('NBR -30°C to 120°C, HNBR -30°C to 150°C', SRC.kcHandbook, 'Depends on elastomer'), pressure: null },
  'Plunger Packing Set': { temperature: elastomerRange('Depends on elastomer'), pressure: null },
  'Pump Packing Set': { temperature: elastomerRange('Depends on elastomer'), pressure: null },
  'Valve Seat Insert': { temperature: null, pressure: null },
  'Mud Pump Liner Seal': { temperature: typical('NBR -30°C to 120°C, HNBR -30°C to 150°C', SRC.kcHandbook, 'Depends on elastomer'), pressure: null },
  'Unified Stack Seal': { temperature: null, pressure: mithson('Up to 15,000 PSI') },
  Packer: { temperature: elastomerRange('Depends on elastomer'), pressure: null },
  'RGD O-Ring': { temperature: typical('HNBR -30°C to 150°C, FKM up to 200-225°C, FFKM 260°C to 327°C', SRC.kcHandbook, 'Depends on elastomer'), pressure: null },
  'PEEK Back-up Ring': { temperature: typical('-60°C to 260°C', SRC.victrexEnergy, 'PEEK continuous use'), pressure: null },
  'Body-Bonnet Seal': { temperature: null, pressure: mithson('Up to 10,000 PSI') },
  'Seat Retainer': { temperature: null, pressure: mithson('Up to 10,000 PSI') },
  'Peek Seat Ring': peekSeatSpec,
  'LNG Seal': { temperature: mithson('Around -162°C (-260°F)'), pressure: null },
};

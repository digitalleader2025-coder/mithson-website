// Detailed product explanations. Facts about Mithson products come from Mithson-text-file.txt;
// the rest is general sealing guidance in our own words. Do not add ratings, sizes or test
// results here unless Mithson engineering supplies them. Figures live in typicalSpecs.js.

export const productDetails = {
  'mith-plate': {
    overview: [
      'Compressor valves are often called the heart of a reciprocating compressor. Suction and discharge valves must open and close at exactly the right moment, thousands of times, or the machine loses efficiency.',
      'MITH PLATE valve plates replace rigid metal plates with precision polymer plates in Carbon PTFE, Glass-Filled PEEK or Nylon. The right choice depends on the gas, pressure, temperature and operating speed.',
    ],
    howItWorks: [
      { title: 'Micro-sealing', text: 'A polymer plate conforms to the valve seat more closely than rigid metal, which helps improve sealing and volumetric efficiency.' },
      { title: 'Lower inertia', text: 'Plates are 70% lighter than steel, so they respond faster to pressure changes and help reduce valve flutter at high speed.' },
      { title: 'Liquid tolerance', text: 'The natural damping of polymer helps plates survive liquid slugs that can damage metal alternatives.' },
      { title: 'Oil-free ready', text: 'Self-lubricating properties suit oil-free air duties in medical, food and pharmaceutical service.' },
    ],
    selection: [
      'Gas type, including any moisture, liquids or solid particles',
      'Suction and discharge pressure, and the pressure difference across the plate',
      'Discharge temperature and how quickly it changes',
      'Compressor speed and how often the machine starts and stops',
      'Whether the air or gas must remain oil-free',
    ],
    care: [
      'Inspect plates at planned valve overhauls and look for cracks, edge wear and seat marks',
      'Check that seats are clean and flat before fitting new plates',
      'Replace worn springs at the same time, because weak springs change valve timing',
      'Investigate liquid carry-over if plates show repeated impact damage',
    ],
    faqs: [
      { q: 'Can polymer plates replace metal plates?', a: 'In many reciprocating compressors they can, but the operating conditions need checking first. Share your valve drawing and conditions for a review.' },
      { q: 'Which material should I choose?', a: 'Carbon PTFE, Glass-Filled PEEK and Nylon suit different duties. Our engineers recommend one after reviewing your gas, pressure and temperature.' },
    ],
  },
  'm-uni-seal': {
    overview: [
      'M-UNI is a spring-energized lip seal for jobs where ordinary rubber seals reach their limits. It pairs a PTFE or other polymer jacket with a corrosion-resistant metal spring.',
      'The jacket partly encloses the spring, which keeps the lips pressed against the sealing surfaces. System pressure then adds extra sealing force, so the seal keeps working as conditions change.',
    ],
    howItWorks: [
      { title: 'Spring load', text: 'At low or zero pressure, the spring supplies the initial force that keeps the lips in contact.' },
      { title: 'Pressure assist', text: 'As pressure rises, it acts inside the seal and pushes the lips harder against the surface.' },
      { title: 'Polymer jacket', text: 'The jacket provides the sealing lip, with low friction and wide chemical resistance.' },
      { title: 'Wear compensation', text: 'The spring keeps pushing as the lip wears, which helps maintain contact over the seal\'s life.' },
    ],
    selection: [
      'Static, rotating or reciprocating motion, with speed and stroke',
      'Media, temperature and pressure, including any pressure reversal',
      'Spring style: Canti, Coil or Heli, plus ID or OD face seal options',
      'Hardware surface finish and hardness',
      'Clearance gaps that could cause extrusion',
    ],
    care: [
      'Keep the seal clean and protect the lip from sharp edges and threads',
      'Use chamfers or fitting tools to avoid cutting the jacket',
      'Do not stretch the seal more than its design allows',
      'Check spring and hardware materials against the media',
    ],
    faqs: [
      { q: 'Why use a spring-energized seal instead of an O-ring?', a: 'It suits duties where rubber may swell, harden or lack resistance to the media, temperature or motion.' },
      { q: 'Can the seal be custom made?', a: 'Yes. Mithson designs precision solutions to customer requirements. Send your groove and operating details.' },
    ],
  },
  'hammer-union-seal': {
    overview: [
      'Hammer unions join oilfield pipes quickly in high-pressure service. The seal sits between the male and female subs and creates the leak-proof joint.',
      'Mithson hammer union seals are made from elastomeric or PTFE materials for high pressure, extreme temperature and aggressive fluids. They are commonly offered from 1 inch to 6 inch inner diameter.',
    ],
    howItWorks: [
      { title: 'Between the subs', text: 'The seal is located between the male and female subs inside the connection.' },
      { title: 'Compressed on make-up', text: 'Tightening the wing nut brings the subs together and loads the seal.' },
      { title: 'Blocks the leak path', text: 'The seal closes the joint so fluid or gas cannot escape at the connection.' },
    ],
    selection: [
      'Union figure and connection size',
      'Inner diameter, outer diameter and overall height',
      'Working pressure and fluid type',
      'Temperature, including cold starts',
      'Presence of sour gas, abrasive solids or chemicals',
    ],
    care: [
      'Clean the seal seat before each make-up',
      'Inspect the seal for cuts, swelling, hardening or extrusion',
      'Check the sub faces for damage',
      'Replace a seal that shows damage rather than reusing it',
      'Always follow site safety procedures and release pressure before breaking a union',
    ],
    faqs: [
      { q: 'What should I send for a quotation?', a: 'Send the union size and figure, or the seal ID, OD and height, plus the fluid, pressure and temperature.' },
      { q: 'Elastomer or PTFE?', a: 'The right choice depends on the fluid and temperature. Our team reviews both before recommending one.' },
    ],
  },
  'seals-x-mas-tree': {
    overview: [
      'A Christmas tree is the valve assembly on top of a well. It controls flow, so its valves must seal reliably through pressure, temperature changes and long service.',
      'Mithson offers a full range for these valves: spring-energized lip seals, stem packing, seat seals and O-rings. Products use high-performance polymers and are associated with API 6A Appendix F requirements.',
    ],
    howItWorks: [
      { title: 'Spring-energized lip seals', text: 'A PTFE jacket and corrosion-resistant metal spring hold sealing contact across changing conditions.' },
      { title: 'Stem packing', text: 'Packing surrounds the gate valve stem and prevents leakage where the stem moves through the body.' },
      { title: 'Seat seals', text: 'These seal the path between the gate and valve seat to support shut-off.' },
      { title: 'O-rings', text: 'Elastomer O-rings seal static joints, using compounds chosen for the well fluids.' },
    ],
    selection: [
      'Valve size, pressure class and temperature class',
      'Sour service and well fluid composition',
      'Whether the valve is manual or actuated, and its cycle count',
      'Stem finish, stuffing box dimensions and seal groove size',
      'Material records needed for your project',
    ],
    care: [
      'Keep seals sealed and clean until fitting',
      'Inspect stem and bore surfaces during overhauls',
      'Use the correct packing order and direction',
      'Follow the valve maker\'s procedures and test requirements',
    ],
    faqs: [
      { q: 'Why does PTFE suit these valves?', a: 'PTFE offers low friction, high- and low-temperature capability and resistance to many chemicals.' },
      { q: 'Can you match an existing valve?', a: 'Send your drawing or sample details and our team will review it.' },
    ],
  },
  'seals-valve': {
    overview: [
      'Valve seals control leakage in two main places: past the closed valve and along the moving stem. A small seal failure can stop a process or create a safety problem.',
      'Mithson\'s range uses high-performance thermoplastics such as PTFE and PEEK. It covers gate, ball, globe, plug, butterfly and diaphragm valves, with parts that include seats, stem packing, lip seals, O-rings, plugs and sleeves.',
    ],
    howItWorks: [
      { title: 'Seats', text: 'Seat rings press against the closure member to stop flow when the valve is shut.' },
      { title: 'Stem packing', text: 'PTFE and carbon-graphite chevron rings seal around the stem as it moves.' },
      { title: 'Lip seals', text: 'Spring-energized seals hold contact as pressure and temperature change.' },
      { title: 'Insert seats', text: 'PEEK or Devlon inserts in metal seats combine a polymer sealing face with metal support.' },
    ],
    selection: [
      'Valve type, size and pressure class',
      'Media, including abrasive particles or aggressive chemicals',
      'Operating and shut-off temperature',
      'Torque limits, cycle frequency and actuator size',
      'Soft-seated or metal-backed design',
    ],
    care: [
      'Keep seats free from weld spatter and line debris',
      'Replace chevron rings as a complete set',
      'Tighten packing evenly and avoid over-compression',
      'Check stem and ball surfaces for scoring',
    ],
    faqs: [
      { q: 'PTFE, PEEK or Devlon?', a: 'Each suits a different balance of chemical resistance, stiffness and temperature. Our engineers can compare them for your valve.' },
      { q: 'Do you make special seat designs?', a: 'Yes. Share your drawing and we will review it.' },
    ],
  },
  'plug-lined-valve': {
    overview: [
      'A plug valve opens and closes by turning a plug inside the body. PTFE plugs and sleeves form the sealing interface, aiming for bubble-tight shut-off under demanding process conditions.',
      'The design avoids traditional lubrication and supports low-torque operation. Options include Virgin PTFE, chemically modified PTFE, and carbon-, glass- or bronze-filled reinforced grades.',
    ],
    howItWorks: [
      { title: 'Self-lubricating interface', text: 'Very low friction reduces actuator torque and helps prevent sticking after a valve has stood idle.' },
      { title: 'Chemical resistance', text: 'PTFE resists many industrial chemicals, solvents and corrosive media.' },
      { title: 'Bi-directional sealing', text: 'Dimensionally stable liners seal across upstream and downstream ports.' },
      { title: 'Cavity-free design', text: 'A close plug and sleeve fit reduces spaces where media can collect or stagnate.' },
    ],
    selection: [
      'Virgin PTFE for maximum chemical purity and low friction',
      'Modified PTFE for better resistance to cold flow',
      'Reinforced grades for high-pressure cycles and abrasive wear',
      'Line media, temperature and pressure',
      'Port shape, valve size and cycle frequency',
    ],
    care: [
      'Keep sleeves clean and protect sealing surfaces during assembly',
      'Tighten the top assembly as the valve maker specifies',
      'Check torque trends, because rising torque can signal wear or build-up',
      'Inspect sleeves and liners at planned maintenance',
    ],
    faqs: [
      { q: 'Does the valve need lubricant?', a: 'The PTFE sleeve design is intended for oilless operation, which helps avoid contaminating the process.' },
      { q: 'Which grade should I choose?', a: 'It depends on the chemicals, pressure cycles and wear. Send your process details for a review.' },
    ],
  },
  'uni-lube-bearing': {
    overview: [
      'A bearing controls movement and reduces friction between moving parts. The simplest plain bearing is a bushing, and self-lubricating materials allow it to run with little or no added oil.',
      'The UNI-LUBE family covers five types: MSS-MF Self Lube, MSS-MP Pre Lube, MSS-BIM Bi-Metal, MSS-MB Solid Bush and MSS-Mithlon thermoplastic bushings. Together they suit dry, lubricated, wet and high-load duties.',
    ],
    howItWorks: [
      { title: 'MSS-MF Self Lube (MSS-DU Bush)', text: 'Metal-polymer bearing with dry lubrication, low friction, low noise and long maintenance-free life.' },
      { title: 'MSS-MP Pre Lube', text: 'Retaining pockets hold lubricant for high-load, low-speed, stop-start and oscillating movement.' },
      { title: 'MSS-BIM Bi-Metal', text: 'Steel-backed bushing for lubricated operation under heavy load, shock and low-speed oscillation.' },
      { title: 'MSS-MB Solid Bush', text: 'Solid metal bearing with embedded solid lubricant, for long service without added lubrication. Source range: -40°C to +300°C.' },
      { title: 'MSS-Mithlon', text: 'Thermoplastic bushing for moist and underwater duties, where regular maintenance is difficult.' },
    ],
    selection: [
      'Load, including shock loads',
      'Speed, and whether motion is rotating, oscillating or stop-start',
      'Available lubrication: dry, grease, oil or water',
      'Temperature and corrosion exposure',
      'Shaft material, finish and housing size',
    ],
    care: [
      'Press bearings in squarely with the correct tool',
      'Keep shafts clean, smooth and within size',
      'Do not add lubricant to a dry bearing unless the design allows it',
      'Keep bi-metal bearings correctly greased or oiled',
    ],
    faqs: [
      { q: 'Which bearing suits a place that is hard to grease?', a: 'Self-lubricating types such as MSS-MF and MSS-MB are usually the first to compare.' },
      { q: 'Do you offer custom sizes?', a: 'MSS-Mithlon is available in standard and custom sizes. Ask us about your size for the other families.' },
    ],
  },
  'seals-hydraulic': {
    overview: [
      'Hydraulic cylinders work under high pressure, repeated movement and often dirty conditions. Each seal has its own job, and the system depends on them working together.',
      'Mithson offers polymer designs with strong mechanical properties and chemical compatibility with hydraulic fluids, covering rod seals, piston seals, wiper seals and wear rings.',
    ],
    howItWorks: [
      { title: 'Rod seals', text: 'One of the most critical seals. They hold pressure, keep fluid inside and prevent external leakage.' },
      { title: 'Piston seals', text: 'These stop fluid passing the piston in single- or double-acting cylinders, and support the lubrication film.' },
      { title: 'Wiper seals', text: 'These keep contaminants out, which is a major cause of cylinder failure, and help return the oil film.' },
      { title: 'Wear rings', text: 'These guide the piston and rod, and prevent metal-to-metal contact.' },
    ],
    selection: [
      'System pressure, including pressure spikes',
      'Cylinder speed, stroke and duty cycle',
      'Hydraulic fluid type and temperature',
      'Dirty, dusty or outdoor working conditions',
      'Groove dimensions, rod finish and side loads',
    ],
    care: [
      'Keep hydraulic oil clean and filters in good condition',
      'Check rods for scratches and dents',
      'Replace seals in sets during a rebuild',
      'Protect seals from threads and sharp edges during assembly',
    ],
    faqs: [
      { q: 'Why is my cylinder leaking?', a: 'Common causes are rod damage, worn seals, contamination, extrusion, or fluid and temperature problems.' },
      { q: 'Can you replace seals on an existing cylinder?', a: 'Send the groove dimensions, or a sample if available, with your pressure and fluid details.' },
    ],
  },
  'diaphragm-aodd': {
    overview: [
      'Air-operated double diaphragm pumps move liquids with compressed air and two flexing diaphragms. They often handle chemicals, slurries and viscous products, so their wetted parts matter.',
      'Mithson offers the full component range, including diaphragms, pilot shafts, PTFE balls, valves, seats and O-rings. Fluoropolymer and PTFE materials provide chemical resistance, low friction and reduced wear.',
    ],
    howItWorks: [
      { title: 'Diaphragm', text: 'Air moves the diaphragm back and forth, drawing liquid in and pushing it out.' },
      { title: 'Balls and seats', text: 'These act as check valves that keep liquid moving in one direction.' },
      { title: 'Pilot shaft', text: 'This helps control the air valve, so the pump changes stroke.' },
      { title: 'O-rings', text: 'These seal static joints against leaks.' },
    ],
    selection: [
      'Pump brand, model and size',
      'Fluid chemistry, viscosity and solid content',
      'Fluid temperature',
      'Air pressure and cycle rate',
      'Whether the pump runs continuously or intermittently',
    ],
    care: [
      'Check diaphragms for cracks, swelling and pin holes at planned intervals',
      'Replace balls and seats when they show wear',
      'Flush the pump as your site procedure requires',
      'Always isolate air and release pressure before service',
    ],
    faqs: [
      { q: 'What should I do if a diaphragm fails early?', a: 'Check chemical compatibility, solids, air pressure and dry running. Share the failed part details with our team.' },
      { q: 'Are these parts suited to different pressures?', a: 'The range covers low- and high-pressure environments. Confirm your pump and duty with us.' },
    ],
  },
  'washers-transmission': {
    overview: [
      'Automatic transmissions in commercial and industrial vehicles face repeated torque and heat cycles. Thrust washers carry axial load between rotating parts, often with limited lubrication.',
      'Mithson\'s Carbon-Filled PEEK thrust and split-lock washers are designed to replace traditional metal and glass-filled plastics. They combine bearing-like durability with the versatility of a high-performance thermoplastic.',
    ],
    howItWorks: [
      { title: 'Thermal management', text: 'Carbon fibres improve thermal conductivity, moving heat away from the friction surface. Structural integrity is stated at continuous temperatures up to 250°C.' },
      { title: 'High PV capability', text: 'Pressure multiplied by velocity is a key wear measure. Carbon-filled PEEK is stated to handle nearly double the PV load of glass-filled alternatives.' },
      { title: 'Self-lubricating reliability', text: 'Carbon acts as a solid lubricant during cold starts and high-torque shifts, helping prevent galling.' },
    ],
    selection: [
      'Axial load and shaft speed',
      'Oil type, temperature and flow',
      'Mating surface material and finish',
      'Washer size, thickness and anti-rotation design',
      'Location: planetary carrier, output shaft or pump wear plate',
    ],
    care: [
      'Clean mating faces before assembly',
      'Fit washers the correct way round',
      'Check end play after assembly',
      'Inspect for scoring or heat marks during overhaul',
    ],
    faqs: [
      { q: 'Why carbon-filled instead of virgin PEEK?', a: 'Carbon fibres add stiffness, heat transfer and low friction for heavy thrust duties.' },
      { q: 'Where are these washers used?', a: 'Common positions include planetary gear carriers, output shaft thrust positions and high-pressure pump wear plates.' },
    ],
  },
  'nozzles-power-grid': {
    overview: [
      'High-voltage SF6 circuit breakers interrupt electrical faults by quenching an arc. The nozzle directs gas around that arc, so it faces extreme heat and electrical stress.',
      'Mithson makes arcing and insulating nozzles from high-purity PTFE and specialized polymer composites. They are manufactured by Cold Isostatic Pressing to achieve high density and structural integrity.',
    ],
    howItWorks: [
      { title: 'Arcing nozzle', text: 'Guides gas flow at the point where the arc forms and is quenched.' },
      { title: 'Insulating nozzle', text: 'Supports gas flow while helping maintain electrical insulation.' },
      { title: 'Cold Isostatic Pressing', text: 'Even pressure from all sides compacts the material, which helps give it uniform density.' },
    ],
    selection: [
      'Breaker model and voltage class',
      'Drawing dimensions and tolerances',
      'PTFE or filled composite grade',
      'Inspection and documentation needs',
      'Quantity and replacement schedule',
    ],
    care: [
      'Store nozzles clean, dry and protected from damage',
      'Avoid touching sealing or critical surfaces with contaminated hands or tools',
      'Inspect for erosion at planned breaker maintenance',
      'Follow the breaker maker\'s SF6 handling procedures',
    ],
    faqs: [
      { q: 'Can you make a nozzle from my drawing?', a: 'Yes. Send the drawing and breaker details for review.' },
      { q: 'Why is density important?', a: 'Uniform, dense material helps the nozzle withstand the thermal and electrical stress of arc quenching.' },
    ],
  },
  'encapsulated-o-ring': {
    overview: [
      'An encapsulated O-ring combines a rubber core with a seamless FEP jacket. The core provides elasticity, and the jacket protects it from the media.',
      'A silicone core suits extreme-temperature flexibility, while an FKM core offers compression-set resistance. These O-rings are used in chemical, pharmaceutical, food, beverage and oil and gas service.',
    ],
    howItWorks: [
      { title: 'Elastic core', text: 'The core acts as a continuous spring and maintains sealing pressure.' },
      { title: 'Seamless FEP jacket', text: 'The jacket forms a chemical barrier that protects the core from swelling and hardening.' },
      { title: 'Non-stick surface', text: 'The smooth FEP surface reduces stiction at start-up and helps installation.' },
    ],
    selection: [
      'Silicone core: -60°C to +205°C',
      'FKM (Viton) core: -20°C to +204°C',
      'Chemicals and cleaning processes such as CIP and SIP',
      'Static use or slow movement',
      'Groove size, and whether a split groove is available',
    ],
    care: [
      'Do not overstretch the O-ring, because the jacket stretches less than rubber',
      'Warm the ring in clean hot water if the fitting procedure allows it',
      'Avoid sharp edges and twisting during fitting',
      'Check the groove surface finish before installation',
    ],
    faqs: [
      { q: 'When should I use one instead of a rubber O-ring?', a: 'Consider it when the chemicals would attack rubber but you still need elastic sealing force.' },
      { q: 'Which core should I choose?', a: 'Silicone suits wider temperature flexibility, and FKM suits compression-set resistance.' },
    ],
  },
};

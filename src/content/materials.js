// General material guidance for the materials Mithson lists in company.js.
// No figures here: grades differ, so limits are confirmed for each application.
export const MATERIAL_FAMILIES = ['All', 'Fluoropolymer', 'Thermoplastic', 'Elastomer', 'Filler'];

export const materials = [
  { name: 'PTFE', family: 'Fluoropolymer', strengths: 'Very low friction and wide chemical resistance', watch: 'Can creep under load, so it often needs a filler or spring', uses: 'Seal jackets, seats, rings' },
  { name: 'RTFE', family: 'Fluoropolymer', strengths: 'Better strength and wear than unfilled PTFE', watch: 'Filler must suit the media', uses: 'Valve seats, seals, bearings' },
  { name: 'Modified PTFE (TFM & NXT)', family: 'Fluoropolymer', strengths: 'Less creep and a denser structure than standard PTFE', watch: 'Grade must suit the application', uses: 'Seats, liners, diaphragms' },
  { name: 'PFA', family: 'Fluoropolymer', strengths: 'Chemical resistance close to PTFE, and it can be melt-processed', watch: 'Softer than rigid engineering plastics', uses: 'Liners and molded parts' },
  { name: 'VICTREX PEEK', family: 'Thermoplastic', strengths: 'Strong and stiff at high temperature', watch: 'Rigid, so it needs a design that suits it', uses: 'Back-up rings, seats, washers' },
  { name: 'VESPEL', family: 'Thermoplastic', strengths: 'Polyimide that holds its shape at high temperature', watch: 'Check suitability for the media', uses: 'Seats, bushes, wear parts' },
  { name: 'Nylon', family: 'Thermoplastic', strengths: 'Tough with good wear resistance', watch: 'Absorbs moisture, which can change its size', uses: 'Rings, back-ups, bushes' },
  { name: 'Delrin/POM', family: 'Thermoplastic', strengths: 'Stiff, machines well and has low friction', watch: 'Limited resistance to strong acids', uses: 'Precision machined parts' },
  { name: 'PU', family: 'Elastomer', strengths: 'High wear and tear resistance', watch: 'Check suitability for hot water and steam', uses: 'Hydraulic seals, wipers' },
  { name: 'HNBR', family: 'Elastomer', strengths: 'Good oil resistance and toughness', watch: 'Not for every aggressive chemical', uses: 'Oilfield O-rings and seals' },
  { name: 'FKM/Viton', family: 'Elastomer', strengths: 'Good resistance to heat, oils and many chemicals', watch: 'Low-temperature limits depend on grade', uses: 'O-rings, valve and oilfield seals' },
  { name: 'FFKM', family: 'Elastomer', strengths: 'Very wide chemical resistance at high temperature', watch: 'Higher cost, so it is kept for demanding duty', uses: 'Critical O-rings and seals' },
  { name: 'EPDM', family: 'Elastomer', strengths: 'Good with water, steam and weathering', watch: 'Not suitable for mineral oils', uses: 'Water and steam seals' },
  { name: 'MOS2', family: 'Filler', strengths: 'Molybdenum disulfide added to help lubrication', watch: 'Benefit depends on base material', uses: 'Filled polymer grades' },
];

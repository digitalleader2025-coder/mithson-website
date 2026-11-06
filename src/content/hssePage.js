// HSSE & Quality page copy, from the approved text supplied by the user (November 2026).
// Editorial notes in that text (what to publish later) are left out. Do not add certificate
// bodies, dates, audit scopes, targets or safety records until Mithson supplies the documents.

export const hsseIntro = [
  'At Mithson Sealing Solutions, quality and reliability are essential to the performance of every sealing component we manufacture. Our approach focuses on understanding application requirements, selecting suitable materials, maintaining manufacturing control and supporting customers throughout the product lifecycle.',
  'As a member of the Fluoro Carbon Seals Group, we draw on more than 25 years of group experience in polymer engineering. We serve demanding industrial applications where material performance, dimensional accuracy, sealing integrity and product consistency are important.',
  'Our commitment extends beyond the finished product. We also recognise the importance of responsible workplace practices, environmental awareness and continuous improvement throughout our operations.',
];

export const hsseFacts = [
  { icon: 'gear', title: '25+ Years', text: 'Group polymer engineering experience' },
  { icon: 'shield', title: 'ISO 9001:2015', text: 'Certified company' },
  { icon: 'clipboard', title: 'QIMA', text: 'Audited' },
  { icon: 'layers', title: 'API 6A / NORSOK / BAM', text: 'Material-related references' },
];

export const qualityApproach = [
  { icon: 'search', title: 'Application Understanding', text: 'We review customer drawings, specifications, operating conditions and application requirements to understand the purpose and expected performance of each component.' },
  { icon: 'layers', title: 'Material Selection', text: "We consider the material's mechanical, thermal and chemical properties when selecting polymers, thermoplastics and elastomers. The selection is based on the intended application and specified operating conditions." },
  { icon: 'cube', title: 'Engineering and Product Development', text: 'Product design and development focus on dimensional requirements, material behaviour, component geometry and functional suitability. Prototypes and samples can be evaluated against agreed specifications before production approval.' },
  { icon: 'gear', title: 'Manufacturing Process Control', text: 'Manufacturing activities are monitored to maintain consistency with approved drawings, material specifications and process requirements. Appropriate inspection stages help identify deviations during production.' },
  { icon: 'shield', title: 'Inspection and Customer Support', text: 'Finished components are checked against applicable requirements before dispatch. Customer feedback and post-delivery support contribute to corrective action and ongoing improvement.' },
];

export const isoText = [
  'Mithson identifies itself as an ISO 9001:2015 certified company. ISO 9001 is an international quality management system standard that provides a framework for consistent processes, customer focus, documented controls and continual improvement.',
  'For customers, a quality management system helps establish a structured approach to managing product requirements, manufacturing processes, inspection activities and customer feedback.',
];

export const qimaText = 'Mithson identifies itself as a QIMA-audited company. An audit provides an assessment against the scope and criteria defined for that audit.';

export const standards = [
  { icon: 'rig', title: 'API 6A', text: 'A specification associated with wellhead and Christmas tree equipment used in the oil and gas industry. Relevant sealing components may need to meet specific equipment, material and application requirements.' },
  { icon: 'wave', title: 'NORSOK', text: 'A set of Norwegian petroleum industry standards addressing requirements in areas such as materials, design and operational performance. The relevant standard and revision must be identified for each application.' },
  { icon: 'flask', title: 'BAM', text: 'A reference associated with material compatibility and qualification activities. The exact BAM test, approval or material record should be identified rather than treating the term as a general certification.' },
];

export const standardsNote = 'Product-specific compliance or qualification should be supported by the corresponding certificate, test report, material record or customer-approved specification.';

export const lifecycleSteps = [
  {
    title: 'Application and Specification Review',
    text: "The process begins with understanding the customer's requirements. This review helps establish the requirements that guide material selection and product development.",
    listTitle: 'Relevant information may include',
    list: ['Component drawings and dimensional tolerances', 'Operating temperature and pressure', 'Process media and chemical exposure', 'Static or dynamic sealing conditions', 'Movement, friction and wear considerations', 'Installation space and mating hardware', 'Applicable industry or customer specifications'],
  },
  {
    title: 'Material Selection and Verification',
    text: 'Different polymers and elastomers behave differently under temperature, pressure, chemical exposure and mechanical loading. Selection considers chemical compatibility, thermal limits, wear resistance, friction, compression behaviour and dimensional stability, and material identity and traceability are maintained to the applicable specification.',
    listTitle: 'Material options may include',
    list: ['PTFE and modified PTFE', 'Filled PTFE compounds', 'PEEK and other engineering thermoplastics', 'PFA and FEP', 'Nylon and POM', 'HNBR, FKM and other elastomers', 'Other specialised polymer and composite materials'],
  },
  {
    title: 'Design, Engineering and Prototyping',
    text: 'Engineering translates application requirements into a component design, considering seal geometry, dimensions, material characteristics, mating surfaces and installation conditions. Where required, prototypes or samples can be developed for customer evaluation, helping to identify dimensional or functional issues before production approval.',
  },
  {
    title: 'Manufacturing and Process Monitoring',
    text: "Manufacturing control helps ensure that components remain consistent with approved requirements. The inspection plan is matched to the product, its critical dimensions and the customer's requirements.",
    listTitle: 'Relevant controls may include',
    list: ['Review of approved drawings and specifications', 'Control of material and production identification', 'Monitoring of machining, moulding or finishing operations', 'Dimensional checks at defined production stages', 'Identification and segregation of non-conforming products', 'Review of process deviations and corrective actions'],
  },
  {
    title: 'Final Inspection and Verification',
    text: 'Before dispatch, finished components are evaluated against the applicable product requirements. Additional testing is performed where required by the product specification, contract or approved inspection plan.',
    listTitle: 'Inspection activities may include',
    list: ['Dimensional verification', 'Visual inspection for surface defects and manufacturing irregularities', 'Verification of material or batch identification', 'Review of specified inspection records', 'Confirmation of customer-specific requirements'],
  },
  {
    title: 'Documentation, Delivery and Post-Delivery Support',
    text: 'Product documentation helps customers verify that supplied components correspond to the agreed requirements. Depending on the order and product, documents may include inspection reports, material certificates, dimensional reports, test reports and product identification records. Customer feedback and post-delivery discussions help identify opportunities for corrective action, product improvement and future application support.',
  },
];

export const environment = [
  { icon: 'sun', title: 'Solar Energy Adoption', text: "The adoption of solar energy is part of Mithson's stated sustainability initiatives. Renewable energy can help reduce dependence on conventional grid electricity and support lower operational emissions, depending on the energy generated and consumed." },
  { icon: 'truck', title: 'Electric Vehicles for Goods Movement', text: "Electric vehicles for goods movement are included among Mithson's published green initiatives. Electrified transport can reduce direct vehicle emissions compared with conventional fuel-powered vehicles, depending on vehicle use and charging arrangements." },
  { icon: 'recycle', title: 'Scrap Reduction and Material Efficiency', text: 'Reducing production scrap supports more efficient use of raw materials. Better material planning, controlled manufacturing processes and waste segregation can help reduce avoidable material losses.' },
  { icon: 'leaf', title: 'Sustainable Agriculture Practices', text: 'Mithson also identifies sustainable agriculture practices as part of its sustainability initiatives. This reflects a broader interest in environmental responsibility beyond manufacturing operations.' },
];

export const emissionScopes = [
  { title: 'Scope 1', text: 'Direct emissions from sources owned or controlled by the organisation, such as fuel combustion in company-controlled vehicles or equipment.' },
  { title: 'Scope 2', text: 'Indirect emissions associated with purchased electricity, steam, heating or cooling.' },
  { title: 'Scope 3', text: 'Other indirect emissions across the value chain, such as purchased materials, transportation, business travel and waste generated in operations.' },
];

export const safety = [
  { icon: 'alert', title: 'Workplace Risk Awareness', text: 'Manufacturing environments may involve machinery, moving components, electrical equipment, material handling and other operational hazards. Identifying potential risks is an important part of maintaining a safe workplace.' },
  { icon: 'gear', title: 'Machinery and Equipment Safety', text: 'Appropriate operating procedures, equipment safeguards and maintenance practices help manage risks associated with manufacturing machinery. Equipment is to be used only in accordance with authorised operating procedures and training.' },
  { icon: 'helmet', title: 'Personal Protective Equipment', text: 'Personal protective equipment is selected according to the hazards associated with each task. Depending on the activity, this may include safety footwear, eye protection, gloves, hearing protection or other task-specific equipment.' },
  { icon: 'people', title: 'Employee Awareness and Safe Working Practices', text: 'Safety awareness helps employees recognise workplace hazards, follow established procedures and report unsafe conditions.' },
  { icon: 'siren', title: 'Emergency Preparedness', text: "Emergency arrangements should be appropriate to the facility's identified risks, such as emergency contacts, evacuation arrangements, first-aid resources and emergency response procedures." },
];

export const applicationFactors = [
  { icon: 'thermo', title: 'Temperature', text: 'Operating and transient temperatures can influence material strength, flexibility, dimensional stability and long-term performance.' },
  { icon: 'gauge', title: 'Pressure', text: 'System pressure, pressure cycling and the possibility of extrusion must be considered when selecting a seal design and material.' },
  { icon: 'flask', title: 'Chemical Compatibility', text: "The process medium may affect a material's physical properties. Compatibility should be evaluated using the actual fluid composition, concentration, temperature and exposure conditions." },
  { icon: 'arrows', title: 'Movement, Friction and Wear', text: 'Static and dynamic sealing applications have different requirements. Sliding speed, surface finish, lubrication, friction and wear can influence component life and performance.' },
  { icon: 'tools', title: 'Installation and Hardware', text: 'Groove dimensions, mating surfaces, clearances, installation methods and surrounding hardware can affect sealing performance. Incorrect installation or unsuitable hardware may damage a component or reduce its effectiveness.' },
  { icon: 'headset', title: 'Application Engineering Support', text: 'Mithson can review customer drawings and application information to help assess material and component suitability. Final selection should be based on complete operating data, applicable specifications and engineering evaluation.' },
];

export const improvementLoop = ['Review', 'Analyze', 'Improve', 'Implement'];

export const improvementActivities = [
  'Reviewing customer feedback and product performance',
  'Evaluating inspection findings and process deviations',
  'Identifying opportunities to reduce manufacturing waste',
  'Reviewing material and product development requirements',
  'Taking corrective action where non-conformities are identified',
  'Evaluating the effectiveness of implemented improvements',
];

export const documents = [
  { icon: 'drawing', title: 'Product Drawings', text: 'Product drawings and dimensional details' },
  { icon: 'layers', title: 'Material Specifications', text: 'Material specifications' },
  { icon: 'certificate', title: 'Material Certificates', text: 'Material certificates and traceability records' },
  { icon: 'clipboard', title: 'Inspection Reports', text: 'Inspection and dimensional reports' },
  { icon: 'flask', title: 'Test Reports', text: 'Applicable test reports' },
  { icon: 'shield', title: 'Compliance Documentation', text: 'Product-specific compliance documentation' },
  { icon: 'book', title: 'Installation Guidance', text: 'Application and installation guidance' },
];

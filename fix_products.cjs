const fs = require('fs');
let content = fs.readFileSync('src/content/products.jsx', 'utf8');

const regex = /shortDescription:\s*'Two-part construction:[^']*',/;

const replacement = `shortDescription: 'Two-part construction: silicone or FKM/Viton elastomer core enclosed in a seamless FEP jacket.',
    heroDescription: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>Our <strong>Encapsulated O-Rings</strong> feature a dual-component construction combining a high-performance <strong>Silicone or FKM (Viton) core</strong> with a seamless <strong>FEP jacket</strong>. The elastomeric core maintains sealing pressure, while the FEP jacket provides exceptional <strong>chemical resistance, low friction, and non-stick performance</strong>.</p>
        <p>Designed for demanding environments, these seals offer excellent <strong>temperature resistance</strong>, with Silicone cores operating from <strong>–60°C to +205°C</strong> and FKM cores from <strong>–20°C to +204°C</strong>. Their high-purity properties make them suitable for <strong>Pharmaceutical, Chemical Processing, Oil & Gas, Food & Beverage, and Biotech applications</strong>, including <strong>CIP and SIP systems</strong>.</p>
      </div>
    ),`;

content = content.replace(regex, replacement);

const regexImg = /folder: 'Encapsulated-O-Ring',\s*accent: '#3b7bd4',/;
const replaceImg = `folder: 'Encapsulated-O-Ring',
    accent: '#3b7bd4',
    image: eoImg1,`;

content = content.replace(regexImg, replaceImg);

fs.writeFileSync('src/content/products.jsx', content);

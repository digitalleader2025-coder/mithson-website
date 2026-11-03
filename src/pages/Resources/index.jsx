import { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import usePageMeta from '../../shared/hooks/usePageMeta';
import {
  convertUnits,
  documentProducts,
  documents,
  faqs,
  glossary,
  guides,
  resourceTabs,
  unitConverters,
} from '../../content/resources';
import { ItemCard, PageActions, PageHero } from '../Capabilities/CapabilityPage';
import '../Capabilities/Capabilities.css';

const unique = (items, key) => ['All', ...new Set(items.map((item) => item[key]))];

function DocumentCenter() {
  const [type, setType] = useState('All');
  const [product, setProduct] = useState('All products');
  const [industry, setIndustry] = useState('All');

  const rows = useMemo(() => documents.filter((doc) =>
    (type === 'All' || doc.type === type)
    && (product === 'All products' || doc.product === product || doc.product === 'All products')
    && (industry === 'All' || doc.industry === industry)), [type, product, industry]);

  return (
    <>
      <div className="capability-tools">
        <label>
          Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {unique(documents, 'type').map((name) => <option key={name}>{name}</option>)}
          </select>
        </label>
        <label>
          Product
          <select value={product} onChange={(e) => setProduct(e.target.value)}>
            {documentProducts.map((name) => <option key={name}>{name}</option>)}
          </select>
        </label>
        <label>
          Industry
          <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            {unique(documents, 'industry').map((name) => <option key={name}>{name}</option>)}
          </select>
        </label>
      </div>
      <div className="capability-grid" aria-live="polite">
        {rows.map((doc) => (
          <Link key={doc.title} to={doc.href} className="capability-card">
            <h3>{doc.title}</h3>
            <p>{doc.type} · {doc.industry}</p>
            <span className="capability-more">Request →</span>
          </Link>
        ))}
      </div>
      {!rows.length && <p className="capability-empty">No documents match these filters.</p>}
    </>
  );
}

function UnitConverter({ converter }) {
  const [value, setValue] = useState('1');
  const [from, setFrom] = useState(converter.units[0]);
  const number = Number(value);
  const ready = value.trim() !== '' && Number.isFinite(number);
  const results = ready ? convertUnits(converter, number, from) : null;

  return (
    <section className="unit-card" aria-labelledby={`${converter.id}-title`}>
      <h2 id={`${converter.id}-title`}>{converter.label}</h2>
      <div className="unit-inputs">
        <input type="number" step="any" value={value} aria-label={`${converter.label} value`} onChange={(e) => setValue(e.target.value)} />
        <select value={from} aria-label={`${converter.label} unit`} onChange={(e) => setFrom(e.target.value)}>
          {converter.units.map((unit) => <option key={unit}>{unit}</option>)}
        </select>
      </div>
      <div className="unit-results" aria-live="polite">
        {results
          ? converter.units.filter((unit) => unit !== from).map((unit) => (
            <span key={unit}><strong>{results[unit].toLocaleString('en-IN', { maximumFractionDigits: 6 })}</strong> {unit}</span>
          ))
          : <span>Enter a number.</span>}
      </div>
    </section>
  );
}

const VIEWS = {
  documents: {
    title: 'Document Center',
    intro: 'Request product information, certificates and quality records from Mithson.',
    render: () => <DocumentCenter />,
  },
  guides: {
    title: 'Guides',
    intro: 'Practical starting points for choosing materials and preparing a seal enquiry.',
    render: () => (
      <div className="capability-grid">{guides.map((guide) => <ItemCard key={guide.title} item={guide} />)}</div>
    ),
  },
  support: {
    title: 'Technical Support',
    intro: 'Quick engineering tools to help you prepare your application data.',
    render: () => (
      <div className="unit-grid">{unitConverters.map((converter) => <UnitConverter key={converter.id} converter={converter} />)}</div>
    ),
  },
  faqs: {
    title: 'FAQs',
    intro: 'Answers to common questions about working with Mithson.',
    render: () => (
      <div className="faq-list">
        {faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    ),
  },
  glossary: {
    title: 'Glossary',
    intro: 'Plain meanings for common sealing and polymer terms.',
    render: () => (
      <dl className="glossary-list">
        {glossary.map(({ term, meaning }) => <div key={term}><dt>{term}</dt><dd>{meaning}</dd></div>)}
      </dl>
    ),
  },
};

export default function ResourcesPage({ view = 'documents' }) {
  const page = VIEWS[view];
  usePageMeta(page.title, page.intro);

  return (
    <div className="page-wrapper">
      <PageHero label="Resources" title={page.title} intro={page.intro} photo="resources" />
      <section className="section">
        <div className="container">
          <nav className="resource-tabs" aria-label="Resources">
            {resourceTabs.map(({ label, path }) => <NavLink key={path} to={path} end>{label}</NavLink>)}
          </nav>
          <div className="capability-heading">{page.render()}</div>
          <PageActions />
        </div>
      </section>
    </div>
  );
}

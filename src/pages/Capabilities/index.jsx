import { useMemo, useState } from 'react';
import usePageMeta from '../../shared/hooks/usePageMeta';
import { capabilitySteps } from '../../content/capabilities';
import { MATERIAL_FAMILIES, materials } from '../../content/materials';
import { ItemCard, PageActions, PageHero } from './CapabilityPage';
import './Capabilities.css';

export function CapabilitiesOverview() {
  usePageMeta('Capabilities', 'How Mithson takes a sealing part from material choice to delivery and support.');

  return (
    <div className="page-wrapper">
      <PageHero
        label="Capabilities"
        title="From material to delivered part"
        photo="capabilities-overview"
        intro="See how Mithson approaches each stage of a seal or polymer component."
      />
      <section className="section">
        <div className="container">
          <div className="capability-steps capability-heading">
            {capabilitySteps.map((step, index) => <ItemCard key={step.title} item={step} number={index + 1} />)}
          </div>
          <PageActions />
        </div>
      </section>
    </div>
  );
}

export function MaterialsPage() {
  usePageMeta('Materials', 'Compare the elastomers, fluoropolymers and thermoplastics used by Mithson.');
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState('All');

  const rows = useMemo(() => {
    const text = query.trim().toLowerCase();
    return materials.filter((material) =>
      (family === 'All' || material.family === family)
      && (!text || Object.values(material).join(' ').toLowerCase().includes(text)));
  }, [query, family]);

  return (
    <div className="page-wrapper">
      <PageHero
        label="Capabilities"
        title="Materials"
        photo="materials"
        intro="The right material depends on temperature, pressure, media and motion. Use this guide to compare the main options."
      />
      <section className="section">
        <div className="container">
          <div className="capability-tools">
            <label>
              Search materials
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="For example, PEEK or oil" />
            </label>
            <label>
              Material family
              <select value={family} onChange={(e) => setFamily(e.target.value)}>
                {MATERIAL_FAMILIES.map((name) => <option key={name}>{name}</option>)}
              </select>
            </label>
          </div>

          <div className="capability-table-wrap capability-heading" tabIndex={0} role="region" aria-label="Material comparison" aria-live="polite">
            {rows.length ? (
              <table className="capability-table">
                <thead>
                  <tr>
                    {['Material', 'Family', 'Main strengths', 'Watch for', 'Common uses'].map((h) => <th key={h} scope="col">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((material) => (
                    <tr key={material.name}>
                      <th scope="row">{material.name}</th>
                      <td>{material.family}</td>
                      <td>{material.strengths}</td>
                      <td>{material.watch}</td>
                      <td>{material.uses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <p className="capability-empty">No materials match your search.</p>}
          </div>

          <p className="capability-lead">General guidance only. Grades differ, so Mithson engineers confirm the limits for each application.</p>
          <PageActions />
        </div>
      </section>
    </div>
  );
}

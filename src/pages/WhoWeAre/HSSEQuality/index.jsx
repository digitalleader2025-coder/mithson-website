import { Link } from 'react-router-dom';
import { company } from '../../../content/company';
import {
  companyCertificates,
  hssePillars,
  integrityItems,
  materialRecords,
  productSafetyNotice,
  qualityProcess,
} from '../../../content/hsse';
import { visible } from '../../../content/validation';
import usePageMeta from '../../../shared/hooks/usePageMeta';
import CircularCarousel from '../../../shared/components/CircularCarousel';
import { ItemCard, PageHero } from '../../Capabilities/CapabilityPage';
import '../../Capabilities/Capabilities.css';

const certImages = [...companyCertificates, ...materialRecords].map(({ name, scope, image }, index) => ({
  id: index + 1,
  url: image,
  alt: `${name}: ${scope}`,
}));

export default function HSSEQualityPage() {
  usePageMeta('HSSE & Quality', 'Mithson quality process, ISO 9001:2015 certification, material test records and environmental actions.');
  const pillars = visible(hssePillars);
  const integrity = visible(integrityItems);

  return (
    <div className="page-wrapper">
      <PageHero
        label="Company"
        title="HSSE & Quality"
        photo="hsse-quality"
        intro="See how Mithson approaches quality, the records behind its materials and the actions it is taking on the environment."
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title capability-heading">Quality process</h2>
          <ol className="quality-steps">
            {qualityProcess.map((step) => (
              <li key={step.step}>
                <span aria-hidden="true">{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section capability-tint">
        <div className="container">
          <h2 className="section-title capability-heading">Certifications and material test records</h2>
          <p className="capability-lead">ISO 9001:2015 and QIMA apply to Mithson. The other records cover the named materials and compounds.</p>
          <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <CircularCarousel
              items={certImages}
              cardWidth={200}
              aspectRatio={1.45}
              speed={14}
              tilt={-5}
              perspective={2500}
              direction="left"
              gap={25}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title capability-heading">Environment</h2>
          <div className="capability-grid">
            {company.sustainability.map((title) => <ItemCard key={title} item={{ title }} />)}
          </div>
          {pillars.length > 0 && (
            <>
              <h2 className="section-title capability-heading" style={{ marginTop: 'var(--space-12)' }}>Health, safety and security</h2>
              <div className="capability-grid">
                {pillars.map((item) => <ItemCard key={item.title} item={item} />)}
              </div>
            </>
          )}
          {integrity.length > 0 && (
            <>
              <h2 className="section-title capability-heading" style={{ marginTop: 'var(--space-12)' }}>Integrity & compliance</h2>
              <div className="capability-grid">
                {integrity.map((item) => <ItemCard key={item.title} item={item} />)}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section capability-tint">
        <div className="container">
          <h2 className="section-title capability-heading">Product safety</h2>
          <p className="capability-notice">{productSafetyNotice}</p>
          <div className="capability-actions" style={{ marginTop: 'var(--space-6)' }}>
            <Link to="/connect-with-us?subject=Certificate%20copies" className="btn btn-navy">Request Documents</Link>
            <Link to="/connect-with-us/application-data" className="btn btn-outline">Send Application Data</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { company } from '../../content/company';
import './Careers.css';

export default function CareersPage() {
  useEffect(() => {
    document.title = 'Career | Mithson Sealing Solutions';
    return () => { document.title = 'Mithson Sealing Solutions'; };
  }, []);

  return (
    <div className="page-wrapper careers-page">
      <section className="careers-hero">
        <div className="container">
          <h1 className="section-title">Career at Mithson</h1>
          <p className="section-subtitle">
            Join the {company.group} team in Chennai and work on high-performance seals and polymer
            components for Oil &amp; Gas, Automotive, Aerospace and more.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container careers-body">
          <div className="glass-card careers-card">
            <h2 className="careers-card-title">Interested in joining us?</h2>
            <p>
              Tell us about your experience and the role you are looking for. Our team will get back
              to you when a suitable position opens.
            </p>
            <Link to="/connect-with-us" className="btn btn-primary">
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

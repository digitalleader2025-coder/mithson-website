import { elastomerRanges } from '../../content/typicalSpecs';
import './TypicalSpecs.css';

const CONFIRM_NOTE =
  'Typical values for this type of product, not guaranteed Mithson ratings. Limits depend on material, size and operating conditions, so confirm your application with Mithson engineers.';

export default function TypicalSpecs({ specs }) {
  return (
    <section className="typical-specs">
      <h3 className="typical-specs-title">{specs.title ?? 'Typical range for this seal type'}</h3>
      <dl className="typical-specs-list">
        {specs.rows.map((row) => (
          <div key={row.label} className="typical-specs-row">
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
      {specs.note && <p className="typical-specs-note">{specs.note}</p>}
      <p className="typical-specs-note">{CONFIRM_NOTE}</p>
    </section>
  );
}

export function ElastomerRanges() {
  return (
    <section className="typical-specs">
      <h3 className="typical-specs-title">Typical elastomer temperature ranges</h3>
      <div className="typical-specs-table-wrap">
        <table className="typical-specs-table">
          <thead>
            <tr>
              <th scope="col">Material</th>
              <th scope="col">Temperature</th>
              <th scope="col">Best suited to</th>
            </tr>
          </thead>
          <tbody>
            {elastomerRanges.rows.map((row) => (
              <tr key={row.material}>
                <th scope="row">{row.material}</th>
                <td>{row.temperature}</td>
                <td>{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="typical-specs-note">{CONFIRM_NOTE}</p>
    </section>
  );
}

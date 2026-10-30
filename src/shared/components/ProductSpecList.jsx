import { getProductSummary } from '../../content/typicalSpecs';
import './ProductSpecList.css';

function SpecRow({ label, spec }) {
  return (
    <div className="spec-row">
      <dt>{spec?.label ?? label}</dt>
      <dd>
        {spec ? (
          <>
            <span className="spec-value">{spec.value}</span>
            <span className="spec-context">
              <span className={`spec-origin spec-origin--${spec.origin}`}>
                {spec.origin === 'mithson' ? 'Mithson' : 'Typical'}
              </span>
              {spec.scope && <span>{spec.scope}</span>}
            </span>
          </>
        ) : (
          <span className="spec-missing">Ask our engineers</span>
        )}
      </dd>
    </div>
  );
}

/** Temperature, pressure, speed and materials for one item inside a product family. */
export function ItemSpecList({ spec }) {
  return (
    <dl className="spec-list spec-list--item">
      <SpecRow label="Temperature" spec={spec.temperature} />
      <SpecRow label={spec.pressureLabel ?? 'Pressure'} spec={spec.pressure} />
      {spec.speed && <SpecRow label="Speed" spec={spec.speed} />}
      {spec.materials && (
        <div className="spec-row">
          <dt>Materials</dt>
          <dd>
            <ul className="spec-materials">
              {spec.materials.map((material) => <li key={material}>{material}</li>)}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  );
}

export default function ProductSpecList({ product, variant = 'card' }) {
  const { temperature, pressure, materials } = getProductSummary(product);

  return (
    <dl className={`spec-list spec-list--${variant}`}>
      <SpecRow label="Temperature" spec={temperature} />
      <SpecRow label="Pressure" spec={pressure} />
      {variant !== 'compact' && (
        <div className="spec-row">
          <dt>Materials</dt>
          <dd>
            <ul className="spec-materials">
              {materials.map((material) => <li key={material}>{material}</li>)}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  );
}

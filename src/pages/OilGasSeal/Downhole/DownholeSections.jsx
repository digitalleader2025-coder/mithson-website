import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Icon, Reveal } from '../../Industries/industryParts';
import './Downhole.css';

// Interactive drawings for the Downhole Tools page, shown inside the shared industry template.
const EASE = [0.22, 1, 0.36, 1];

function Stepper({ label, steps, active, onPick }) {
  return (
    <div className="dh-steps" role="tablist" aria-label={label}>
      {steps.map((s, i) => (
        <button key={s} type="button" role="tab" aria-selected={active === i} onClick={() => onPick(i)}>
          <b>{i + 1}</b> {s}
        </button>
      ))}
    </div>
  );
}

const EXTRUSION = [
  { title: 'Primary seal installed', text: 'An elastomer O-ring sits in a precision-machined groove between two mating parts, lightly squeezed.' },
  { title: 'Pressure applied', text: 'Pressure pushes the O-ring against the far wall of the groove. At high pressure it starts to flow into the clearance gap between the parts: extrusion. Repeated, it nibbles the seal away.' },
  { title: 'Back-up ring protection', text: 'A PEEK back-up ring on the low-pressure side bridges the clearance gap, so the O-ring is supported and has nowhere to extrude.' },
];

/** signature: the extrusion mechanism in three stages, drawn in section */
function Extrusion() {
  const [stage, setStage] = useState(0);
  const reduce = useReducedMotion();
  const t = { duration: reduce ? 0 : 0.6, ease: EASE };
  // pushed to the low-pressure wall in stage 2, held off it by the back-up ring in stage 3
  const ringX = [150, 186, 170][stage];
  const ringRx = stage === 0 ? 20 : 18;
  return (
    <div className="dh-interactive">
      <Stepper label="Extrusion stages" steps={EXTRUSION.map((e) => e.title)} active={stage} onPick={setStage} />
      <div className="dh-int-grid">
        <div className="dh-art">
          <svg viewBox="0 0 320 190" role="img" aria-label={`O-ring and back-up ring, stage ${stage + 1}: ${EXTRUSION[stage].title}`}>
            {/* housing with the groove cut into it, and the moving part below the clearance gap */}
            <path className="dh-metal" d="M20 20h280v62H206V44H112v38H20Z" />
            <rect className="dh-metal" x="20" y="90" width="280" height="70" rx="2" />
            <rect className="dh-gap" x="20" y="82" width="280" height="8" />
            <text className="dh-label" x="300" y="178" textAnchor="end">Clearance gap (exaggerated)</text>

            {/* pressure side */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: stage > 0 ? 1 : 0 }} transition={t}>
              <path className="dh-arrow" d="M40 63h52M84 56l8 7-8 7" />
              <text className="dh-label" x="40" y="44">Pressure</text>
            </motion.g>

            {/* the O-ring */}
            <motion.ellipse
              className="dh-oring"
              cx={ringX} cy="64" rx={ringRx} ry="18"
              initial={{ cx: ringX, rx: ringRx }}
              animate={{ cx: ringX, rx: ringRx }}
              transition={t}
            />
            {/* the extruded tongue in stage 2 */}
            <motion.path
              className="dh-extrude"
              d="M196 80h48c4 0 4 10 0 10h-48Z"
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 1 ? 1 : 0 }}
              transition={t}
            />
            {/* the PEEK back-up ring in stage 3 */}
            <motion.rect
              className="dh-backup"
              x="190" y="44" width="16" height="46" rx="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 2 ? 1 : 0 }}
              transition={t}
            />
            <text className="dh-label dh-label--strong" x="150" y="36" textAnchor="middle">
              {stage === 2 ? 'O-ring + PEEK back-up ring' : 'O-ring in groove'}
            </text>
          </svg>
        </div>
        <motion.div key={stage} className="dh-int-text" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <span className="mp-label">Stage {stage + 1} of 3</span>
          <h3>{EXTRUSION[stage].title}</h3>
          <p>{EXTRUSION[stage].text}</p>
          {stage === 2 && (
            <ul className="mp-checks dh-benefits">
              {['Reduced risk of elastomer extrusion', 'Better support at high differential pressure', 'Better protection of the primary seal', 'More reliable sealing system'].map((b) => (
                <li key={b}><Icon name="check" size={16} /> {b}</li>
              ))}
            </ul>
          )}
          <p className="dh-small">A back-up ring does not replace correct gland design, extrusion clearance or material selection. Drawn illustration, not to scale.</p>
        </motion.div>
      </div>
    </div>
  );
}

// gas molecules: fixed positions so the drawing is identical on every render
const GAS = [[-22, -14], [14, -22], [24, 8], [-6, 20], [-26, 10], [6, -4], [18, 24], [-14, -26]];

function RgdRing({ x, damaged, stage }) {
  return (
    <g transform={`translate(${x} 80)`}>
      <circle className="dh-rgd-ring" r="44" />
      {GAS.map(([gx, gy], i) => {
        const outside = stage === 0 && i % 2 === 0;
        const r = stage === 1 ? (damaged ? 5 + (i % 3) : 2) : 2.4;
        const px = outside ? gx * 2.1 : gx;
        const py = outside ? gy * 2.1 : gy;
        return (
          <motion.circle
            key={i}
            className={stage === 1 && damaged ? 'dh-blister' : 'dh-gas'}
            cx={px} cy={py} r={r}
            initial={{ cx: px, cy: py, r }}
            animate={{ cx: px, cy: py, r }}
            transition={{ duration: 0.6, ease: EASE }}
          />
        );
      })}
      {stage === 1 && damaged && <path className="dh-crack" d="M-30 -30l12 10-4 8 10 6M20 -34l-6 12 8 6M26 22l-10-4-4 10" />}
    </g>
  );
}

function Rgd() {
  const [stage, setStage] = useState(0);
  const text = [
    'Under high pressure, gas diffuses into the elastomer until it is saturated.',
    'When pressure drops suddenly, the absorbed gas expands faster than it can escape. A conventional elastomer can blister, crack and rupture inside; an appropriately RGD-qualified compound is formulated to resist that damage.',
  ];
  return (
    <div className="dh-interactive">
      <Stepper label="RGD stages" steps={['High-pressure stage', 'Rapid decompression']} active={stage} onPick={setStage} />
      <div className="dh-int-grid">
        <div className="dh-art">
          <svg viewBox="0 0 320 170" role="img" aria-label={`Rapid gas decompression, ${stage === 0 ? 'high-pressure stage' : 'rapid decompression stage'}`}>
            <RgdRing x={82} damaged stage={stage} />
            <RgdRing x={238} damaged={false} stage={stage} />
            <text className="dh-label dh-label--strong" x="82" y="152" textAnchor="middle">Conventional elastomer</text>
            <text className="dh-label dh-label--strong" x="238" y="152" textAnchor="middle">RGD-qualified compound</text>
          </svg>
        </div>
        <motion.div key={stage} className="dh-int-text" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <span className="mp-label">Stage {stage + 1} of 2</span>
          <h3>{stage === 0 ? 'Gas enters the elastomer' : 'Gas expands on decompression'}</h3>
          <p>{text[stage]}</p>
          <p className="dh-small">Mithson offers selected HNBR, FKM and FFKM compounds, chosen to the gas, pressure, temperature and decompression profile. Drawn illustration, not to scale.</p>
        </motion.div>
      </div>
    </div>
  );
}

function Packer() {
  const [set, setSet] = useState(false);
  const w = set ? 34 : 20;
  return (
    <div className="dh-interactive">
      <Stepper label="Packer state" steps={['Before setting', 'After setting']} active={set ? 1 : 0} onPick={(i) => setSet(i === 1)} />
      <div className="dh-int-grid">
        <div className="dh-art">
          <svg viewBox="0 0 320 212" role="img" aria-label={`Packer element ${set ? 'set against the casing' : 'before setting'}`}>
            <rect className="dh-metal" x="30" y="10" width="22" height="180" />
            <rect className="dh-metal" x="268" y="10" width="22" height="180" />
            <rect className="dh-tubing" x="126" y="10" width="68" height="180" rx="3" />
            {[-1, 1].map((side) => {
              const x = side < 0 ? 126 - w : 194;
              return (
                <motion.rect
                  key={side}
                  className="dh-element"
                  x={x} y={set ? 74 : 64} width={w} height={set ? 52 : 72} rx="6"
                  initial={{ x, y: set ? 74 : 64, width: w, height: set ? 52 : 72 }}
                  animate={{ x, y: set ? 74 : 64, width: w, height: set ? 52 : 72 }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              );
            })}
            {set && <path className="dh-arrow" d="M76 100h-14M244 100h14" />}
            <text className="dh-label" x="41" y="204" textAnchor="middle">Casing</text>
            <text className="dh-label" x="160" y="204" textAnchor="middle">Tubing</text>
            <text className="dh-label dh-label--strong" x="160" y="58" textAnchor="middle">Elastomer element</text>
          </svg>
        </div>
        <div className="dh-int-text">
          <span className="mp-label">Packer element</span>
          <h3>{set ? 'Set: zones isolated' : 'Running in'}</h3>
          <p>{set
            ? 'The setting mechanism compresses the element, which expands radially until it seals against the casing. Fluid can no longer move between the zones above and below.'
            : 'The element runs in clear of the casing. It is set by a mechanical, hydraulic or other packer-setting mechanism.'}</p>
          <p className="dh-small">Element options: NBR, HNBR and FKM, chosen to temperature, pressure and fluids. Drawn illustration, not to scale.</p>
        </div>
      </div>
    </div>
  );
}

function BackupDesigns() {
  const designs = [
    { name: 'Uncut', text: 'A continuous ring for assemblies that allow it to be fitted whole.', art: <circle className="dh-ring" r="34" /> },
    { name: 'Scarf-cut', text: 'An angled split eases installation while keeping anti-extrusion support.', art: <><path className="dh-ring" d="M-6 -34A34 34 0 1 0 6 -34" /><path className="dh-cut" d="M-6 -42l12 16" /></> },
    { name: 'Spiral-cut', text: 'A spiral form gives installation flexibility in suitable arrangements.', art: <><circle className="dh-ring" r="34" /><circle className="dh-ring dh-ring--back" r="34" transform="translate(5 5)" /></> },
  ];
  return (
    <div className="dh-designs">
      {designs.map((d, i) => (
        <Reveal key={d.name} delay={i * 0.06} className="dh-design">
          <svg viewBox="-50 -50 100 100" role="img" aria-label={`${d.name} PEEK back-up ring`}>{d.art}</svg>
          <h3>{d.name}</h3>
          <p>{d.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** the anti-extrusion section: the three-stage drawing plus the three back-up ring cuts */
export function ExtrusionExplainer() {
  return (
    <>
      <Extrusion />
      <BackupDesigns />
      <p className="dh-band-note">The right design depends on the assembly, installation method, groove dimensions and pressure direction.</p>
    </>
  );
}

export { Rgd, Packer };

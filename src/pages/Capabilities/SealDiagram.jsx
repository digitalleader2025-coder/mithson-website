// Simple animated cross-section of a spring-energized seal. It is an illustration, not a result.
export default function SealDiagram() {
  return (
    <figure className="seal-diagram">
      <svg viewBox="0 0 640 300" role="img" aria-label="Illustration of pressure pushing a spring-energized seal against the shaft and housing">
        <rect x="40" y="30" width="560" height="50" className="seal-metal" />
        <rect x="40" y="220" width="560" height="50" className="seal-metal" />
        <text x="320" y="60" className="seal-label seal-label--light">Housing</text>
        <text x="320" y="250" className="seal-label seal-label--light">Shaft</text>
        <path d="M350 80 H250 Q235 80 235 95 V110 L285 122 V178 L235 190 V205 Q235 220 250 220 H350 Z" className="seal-jacket" />
        <circle cx="315" cy="150" r="30" className="seal-spring" />
        <circle cx="315" cy="150" r="18" className="seal-spring seal-spring--inner" />
        {[120, 150, 180].map((y) => (
          <path key={y} d={`M430 ${y} H372 m12 -9 l-12 9 12 9`} className="seal-arrow" />
        ))}
        <text x="505" y="155" className="seal-label">Pressure</text>
        <text x="125" y="155" className="seal-label">Sealed side</text>
      </svg>
      <figcaption>Illustration only. It shows how pressure helps press a seal against the surfaces.</figcaption>
    </figure>
  );
}

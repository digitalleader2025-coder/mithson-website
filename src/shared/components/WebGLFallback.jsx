/**
 * WebGLFallback — static content shown when WebGL is unavailable.
 * Maintains brand experience without any 3D dependency.
 */
export default function WebGLFallback({ message }) {
  return (
    <div
      className="webgl-fallback"
      role="img"
      aria-label="3D scene unavailable — WebGL not supported"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        background: 'radial-gradient(ellipse at center, #1a2238 0%, #07090f 70%)',
        color: 'var(--color-muted)',
        fontSize: 'var(--text-sm)',
      }}
    >
      {/* Abstract geometric fallback visual */}
      <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="none" stroke="#42A4FF" strokeWidth="2" opacity="0.4" />
        <circle cx="40" cy="40" r="24" fill="none" stroke="#0336A3" strokeWidth="1.5" opacity="0.3" />
        <circle cx="40" cy="40" r="12" fill="#42A4FF" opacity="0.2" />
        <line x1="4"  y1="40" x2="76" y2="40" stroke="#42A4FF" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="4"  x2="40" y2="76" stroke="#42A4FF" strokeWidth="1" opacity="0.3" />
      </svg>
      <span>{message || 'Interactive 3D requires WebGL support'}</span>
    </div>
  );
}

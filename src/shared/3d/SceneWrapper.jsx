import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ErrorBoundary } from 'react-error-boundary';
import WebGLFallback from '../components/WebGLFallback';

function CanvasError() {
  return <WebGLFallback />;
}

/**
 * SceneWrapper — standardised <Canvas> with Suspense + Error Boundary.
 * Use this for every 3D scene to ensure consistent performance and fallback behaviour.
 */
export default function SceneWrapper({
  children,
  fallback,
  className = '',
  style = {},
  camera = { position: [0, 0, 5], fov: 50 },
  gl = { antialias: true, alpha: true, powerPreference: 'high-performance' },
  dpr = [1, 1.25],
}) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(true);
  
  // Use a safer default for mobile/tablets to prevent lag
  const [activeDpr, setActiveDpr] = useState([1, 1.25]);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setActiveDpr(1);
    }
  }, []);

  // Pause WebGL rendering when off-screen to massively improve scroll performance
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: '0px', threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const wrapperStyle = {
    width: '100%',
    height: '100%',
    ...style,
  };

  const loadingFallback = fallback ?? (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="scene-loader" aria-label="Loading 3D scene" />
    </div>
  );

  return (
    <div ref={containerRef} className={`scene-wrapper ${className}`} style={wrapperStyle}>
      <ErrorBoundary FallbackComponent={CanvasError}>
        <Suspense fallback={loadingFallback}>
          <Canvas
            frameloop={inView ? 'always' : 'demand'}
            camera={camera}
            gl={gl}
            dpr={activeDpr}
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
          >
            {children}
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

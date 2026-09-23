import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/**
 * ProductViewer — 2.5D image-based viewer that auto-upgrades to a live 3D
 * GLB model when one is provided via `modelSrc`.
 *
 * Props:
 *   imageSrc  — path to hero JPG (shown when no GLB)
 *   modelSrc  — path to .glb (optional; when supplied, replaces image)
 *   alt       — accessible description
 *   accent    — hex accent color for frame / glow
 */

function ModelMesh({ src }) {
  const { scene } = useGLTF(src);
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.4;
  });
  return <primitive ref={ref} object={scene} dispose={null} />;
}

function ImagePlane({ src, alt, accent }) {
  // Fallback 2.5D representation when no image supplied
  if (!src) {
    return (
      <mesh>
        <boxGeometry args={[2.6, 2.6, 0.08]} />
        <meshStandardMaterial
          color={accent || '#42A4FF'}
          metalness={0.7}
          roughness={0.3}
          emissive={accent || '#42A4FF'}
          emissiveIntensity={0.15}
        />
      </mesh>
    );
  }
  // Use Html to show image in 3D space (parallax tilt applied by parent)
  return (
    <Html center style={{ width: 320, height: 320, pointerEvents: 'none' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: 12,
          filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.6))',
        }}
      />
    </Html>
  );
}

export default function ProductViewer({ imageSrc, modelSrc, alt = 'Product', accent = '#42A4FF' }) {
  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
      <Suspense fallback={null}>
        {modelSrc ? (
          <ModelMesh src={modelSrc} />
        ) : (
          <ImagePlane src={imageSrc} alt={alt} accent={accent} />
        )}
      </Suspense>
    </>
  );
}

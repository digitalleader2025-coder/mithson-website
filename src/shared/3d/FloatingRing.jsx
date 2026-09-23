import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, MeshDistortMaterial, Float } from '@react-three/drei';

/**
 * FloatingRing — animated O-ring / seal geometry.
 * Used as decorative 3D element on product and section backgrounds.
 */
export default function FloatingRing({
  position = [0, 0, 0],
  scale = 1,
  color = '#0336A3',
  emissive = '#0a1f40',
  speed = 0.5,
  tubeRadius = 0.06,
  rotateX = 0.3,
}) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.elapsedTime * speed * 0.4;
      meshRef.current.rotation.x = rotateX + Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.4}>
      <Torus
        ref={meshRef}
        args={[1, tubeRadius, 32, 80]}
        position={position}
        scale={scale}
      >
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.15}
          envMapIntensity={1.0}
        />
      </Torus>
    </Float>
  );
}

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * HeroOrb — animated metallic distorted sphere for hero sections.
 * Provides premium 3D depth without heavy assets.
 */
export default function HeroOrb({
  position = [0, 0, 0],
  scale = 1,
  speed = 0.4,
  distort = 0.35,
  color = '#42A4FF',
  emissive = '#5a3a0a',
}) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        position={position}
        scale={scale}
      >
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.4}
          metalness={0.85}
          roughness={0.12}
          distort={distort}
          speed={speed}
          envMapIntensity={1.2}
        />
      </Sphere>
    </Float>
  );
}

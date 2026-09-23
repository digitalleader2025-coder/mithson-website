import { Environment, ContactShadows } from '@react-three/drei';

/**
 * EnvironmentLight — standard HDR environment + directional lights.
 * Reuse in every scene for consistent premium look.
 */
export default function EnvironmentLight({
  preset = 'city',
  shadowOpacity = 0.25,
  ambientIntensity = 1.0,
  directionalIntensity = 0.8,
  directionalPosition = [5, 8, 5],
  accentPosition = [-5, 3, -5],
  accentColor = '#42A4FF',
  accentIntensity = 0.6,
}) {
  return (
    <>
      <Environment preset={preset} />
      <ambientLight intensity={ambientIntensity} color="#c8d8ff" />
      <directionalLight
        intensity={directionalIntensity}
        position={directionalPosition}
        color="#fff4e0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight
        intensity={accentIntensity}
        position={accentPosition}
        color={accentColor}
        distance={18}
        decay={2}
      />
      <ContactShadows
        position={[0, -2, 0]}
        opacity={shadowOpacity}
        scale={10}
        blur={2}
        far={4}
      />
    </>
  );
}

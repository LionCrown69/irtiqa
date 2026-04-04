import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;

    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0 + time * 1.5) * 0.05 * intensity;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vec2 uv = vUv;

    float noise = sin(uv.x * 20.0 + time) * cos(uv.y * 15.0 + time * 0.8);
    noise += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;

    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity);

    float glow = 1.0 - length(uv - 0.5) * 2.0;
    glow = pow(glow, 2.0);

    gl_FragColor = vec4(color * glow, glow * 0.8);
  }
`;

type ShaderPlaneProps = {
  position: [number, number, number];
  color1?: string;
  color2?: string;
};

type EnergyRingProps = {
  radius?: number;
  position?: [number, number, number];
};

type PaperShaderSceneProps = {
  className?: string;
  color1?: string;
  color2?: string;
  ringColor?: string;
  minHeight?: number | string;
};

export function ShaderPlane({
  position,
  color1 = '#ff5722',
  color2 = '#ffffff'
}: ShaderPlaneProps) {
  const mesh = useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 1.0 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) }
    }),
    [color1, color2]
  );

  useFrame((state) => {
    if (!mesh.current) return;
    uniforms.time.value = state.clock.elapsedTime;
    uniforms.intensity.value = 1.0 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function EnergyRing({
  radius = 1,
  position = [0, 0, 0]
}: EnergyRingProps) {
  const mesh = useRef<THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = state.clock.elapsedTime;
    mesh.current.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <ringGeometry args={[radius * 0.8, radius, 32]} />
      <meshBasicMaterial color="#ff5722" transparent opacity={0.6} side={THREE.DoubleSide} />
    </mesh>
  );
}

export function BackgroundPaperShaders({
  className,
  color1 = '#1641F5',
  color2 = '#FAFAF8',
  ringColor = '#1641F5',
  minHeight = '420px'
}: PaperShaderSceneProps) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight,
        overflow: 'hidden',
        borderRadius: '24px',
        background:
          'radial-gradient(circle at top, rgba(22,65,245,0.10), rgba(250,250,248,0.92) 45%, rgba(244,243,238,0.96) 100%)'
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <ShaderPlane position={[-1.2, 0.35, 0]} color1={color1} color2={color2} />
        <ShaderPlane position={[1.15, -0.4, -0.4]} color1={color2} color2={color1} />
        <group>
          <EnergyRing position={[-1.45, 0.95, 0.25]} radius={0.42} />
          <EnergyRing position={[1.55, -0.85, 0.15]} radius={0.56} />
        </group>
        <color attach="background" args={['#fafaf8']} />
        <fog attach="fog" args={['#fafaf8', 3, 8]} />
      </Canvas>

      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(250,250,248,0.18), rgba(250,250,248,0.04) 30%, rgba(250,250,248,0.20) 100%)'
        }}
      />

      <div
        aria-hidden="true"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          boxShadow: `inset 0 0 0 1px rgba(12,12,11,0.08), inset 0 32px 72px rgba(22,65,245,0.04), inset 0 -24px 56px rgba(12,12,11,0.03)`
        }}
      />

      <div
        aria-hidden="true"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '18px',
          right: '18px',
          width: '96px',
          height: '96px',
          borderRadius: '999px',
          background: ringColor,
          opacity: 0.06,
          filter: 'blur(36px)'
        }}
      />
    </div>
  );
}

export default BackgroundPaperShaders;

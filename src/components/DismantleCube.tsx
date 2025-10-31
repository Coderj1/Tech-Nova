// src/DismantleCube.tsx
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function CubePiece({ position, color, hover }: { position: [number, number, number], color: string, hover: boolean }) {
  const ref = useRef<THREE.Mesh>(null!)
  const [initialPos] = useState(() => new THREE.Vector3(...position))

  useFrame((_, delta) => {
    // Smooth animation for dismantle effect
    if (ref.current) {
      const target = hover
        ? initialPos.clone().multiplyScalar(2.0) // move outward on hover
        : initialPos.clone()
      ref.current.position.lerp(target, delta * 5)
      ref.current.rotation.x += delta * 0.2
      ref.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial color={color} metalness={0.1} roughness={0.9} />
    </mesh>
  )
}

function DismantleCubeGroup() {
  const [hovered, setHovered] = useState(false)
  const cubePositions: [number, number, number][] = []

  // Create 3x3x3 cube (27 small cubes)
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubePositions.push([x, y, z])
      }
    }
  }

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {cubePositions.map((pos, i) => (
        <CubePiece
          key={i}
          position={pos}
          color={hovered ? '#A020F0' : '#0077ff'}
          hover={hovered}
        />
      ))}
    </group>
  )
}

export default function DismantleCube() {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 50 }}
      style={{ width: '100%', height: '100vh', background: '#0a0a0a' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.9} />

      <DismantleCubeGroup />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

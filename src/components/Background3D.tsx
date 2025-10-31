// src/Background3D.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Floating from '../components/Float';

export default function Background3D() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} />
          <Floating />
          <OrbitControls enableZoom={false} />
        </Canvas>
    </div>
  )
}

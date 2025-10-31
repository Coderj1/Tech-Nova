import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Points } from 'three'

const Floating = () => {
  
  const points = useRef<Points>(null!)

  const { geometry, material } = useMemo(() => {
    const count = 9000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 10
      const angle = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 10

      positions[i3] = Math.cos(angle) * radius
      positions[i3 + 1] = y
      positions[i3 + 2] = Math.sin(angle) * radius

      // Start color near cyan
      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.6 + 0.2, 1.0, 0.6)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    })

    return { geometry, material }
  }, [])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    points.current.rotation.y += delta * 0.08
    points.current.rotation.x = Math.sin(t * 0.2) * 0.4

    // Shift hues over time
    const colors = points.current.geometry.attributes.color
    for (let i = 0; i < colors.count; i++) {
      const h = ((i / colors.count) + t * 0.02) % 1
      const color = new THREE.Color().setHSL(h, 1.0, 0.6)
      colors.setXYZ(i, color.r, color.g, color.b)
    }
    colors.needsUpdate = true
  })

  return <points ref={points} geometry={geometry} material={material} />

}

export default Floating;
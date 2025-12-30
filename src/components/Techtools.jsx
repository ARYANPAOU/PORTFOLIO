import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";


// Configuration
const CONFIG = {
  sphereRadius: 0.45,
  sphereScale: 0.055,
  sphereRotation: [0, -Math.PI / 2, 0],
  sphereColor: 0x808080,
  decalSize: 0.3,
  decalPosition: { theta: Math.PI / 2, phi: Math.PI / 5 },
  floatSpeed: 4,
  floatHeight: 0.1,
};

function Model({ pngTexture, title }) {
  const groupRef = useRef();
  const { scene } = useGLTF("/skillballhex/scene.gltf");
  const [hovered, setHovered] = useState(false);

  // Clone the scene
  const clonedScene = scene.clone(true);

  // Apply grey color
  clonedScene.traverse((child) => {
    if (child.isMesh) {
      child.material = child.material.clone();
      child.material.color.set(CONFIG.sphereColor);
    }
  });

  // Floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * CONFIG.floatSpeed) *
        CONFIG.floatHeight;
    }
  });

  // Decal position
  const { theta, phi } = CONFIG.decalPosition;
  const x = CONFIG.sphereRadius * Math.sin(phi) * Math.cos(theta);
  const y = CONFIG.sphereRadius * Math.sin(phi) * Math.sin(theta);
  const z = CONFIG.sphereRadius * Math.cos(phi);
  const position = new THREE.Vector3(x, y, z);

  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 0, 1),
    position.clone().normalize()
  );

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive
        object={clonedScene}
        scale={CONFIG.sphereScale}
        rotation={CONFIG.sphereRotation}
      />
      {pngTexture && (
        <mesh position={position} quaternion={quaternion}>
          <planeGeometry args={[CONFIG.decalSize, CONFIG.decalSize]} />
          <meshBasicMaterial
            map={pngTexture}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {hovered && title && (
        <Html
          position={[0, CONFIG.sphereRadius + 0.1, 0]}
          center
          style={{
            background: "rgba(198, 198, 198, 0.7)",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "0.7rem",
            color: "#ffffffff",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Html>
      )}
    </group>
  );
}

export default function Techtools({ image, light, title }) {
  const texture = image ? new THREE.TextureLoader().load(image) : null;

  return (
    <div className="w-64 h-64 overflow-hidden">
      <Canvas camera={{ position: [0, 1, 2], fov: 50 }}>
        <ambientLight intensity={1} color={light} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <directionalLight position={[0, -10, 0]} intensity={0.5} />
        <directionalLight position={[-10, 0, 0]} intensity={1.5} />
        <Suspense fallback={null}>
          <Model pngTexture={texture} title={title} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}  
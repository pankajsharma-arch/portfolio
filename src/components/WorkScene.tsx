import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

const FloatingIcon = ({ position, color, text, speed = 1 }: any) => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.position.y += Math.sin(t) * 0.002;
    mesh.current.rotation.x = Math.cos(t / 4) / 4;
    mesh.current.rotation.y = Math.sin(t / 4) / 4;
    mesh.current.rotation.z = Math.sin(t / 4) / 4;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <Sphere args={[0.4, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={0.4}
            radius={1}
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/outfit/v11/QGYsz_MVcBeNP4NJtEtq.woff"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
};

const WorkScene = () => {
  return (
    <div className="work-3d-bg">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <FloatingIcon position={[-3, 2, -2]} color="#4285F4" text="Google" speed={0.5} />
        <FloatingIcon position={[3, -1, -3]} color="#0668E1" text="Meta" speed={0.7} />
        <FloatingIcon position={[-2, -2, -1]} color="#FF4F00" text="Zapier" speed={0.6} />
        <FloatingIcon position={[4, 2, -4]} color="#00C4CC" text="Canva" speed={0.8} />
        
        <mesh position={[0, 0, -10]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#0b080c" transparent opacity={0.5} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default WorkScene;

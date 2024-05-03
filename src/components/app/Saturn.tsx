/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import React, { useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import {
  DoubleSide,
  TextureLoader,
  CubeReflectionMapping,
  ClampToEdgeWrapping,
  EquirectangularRefractionMapping,
  CubeUVReflectionMapping,
  Vector2,
  RepeatWrapping,
} from "three";
import * as THREE from "three";
import { OrbitControls, useTexture } from "@react-three/drei";

interface SaturnProps {
  width?: string;
  height?: string;
}

const SaturnModel: React.FC = () => {
  const colorMap = useTexture("/saturn.jpg");
  const ringsTexture = useTexture("/saturn-rings.png");
  const ringGeometry = new THREE.RingGeometry(2, 5, 128);
  const pos = ringGeometry.attributes.position!;
  const v3 = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v3.fromBufferAttribute(pos, i);
    ringGeometry.attributes.uv!.setXY(i, v3.length() < 4 ? 0 : 1, 1);
  }

  const saturnRef = useRef<THREE.Mesh>();

  useFrame(() => {
    if (saturnRef.current) {
      saturnRef.current.rotation.y += 0.01; // Adjust the speed of rotation here
    }
  });

  return (
    <>
      {/* @ts-expect-error Works lol*/}
      <mesh ref={saturnRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 64, 128]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        position={[0, 0, 0]}
        geometry={ringGeometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          map={ringsTexture}
          side={2}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
    </>
  );
};

const Saturn: React.FC<
  SaturnProps & React.HTMLAttributes<HTMLCanvasElement>
> = ({ width = "500px", height = "500px", ...props }) => {
  return (
    /* @ts-expect-error */
    <Canvas
      style={{ width, height, background: "transparent" }}
      camera={{ position: [5.75, 5.5, 0] }}
      {...props}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <SaturnModel />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default Saturn;

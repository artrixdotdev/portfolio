"use client";
import React, { useRef, useMemo, forwardRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { ThemeColors } from "@heroui/theme";
import { semanticColors } from "@heroui/theme/colors";

interface SpaceObject {
  mass: number;
  volume: number;
}

interface OrbitingSpheresProps {
  objects: SpaceObject[];
}

const Sphere = forwardRef<THREE.Group, { radius: number; color: string }>(
  ({ radius, color }, ref) => {
    const separation = 10;
    const rotationSpeed = useRef(Math.random() * 0.05 - 0.5); // Random rotation speed between -0.25 and 0.25

    // Generate sphere points
    const points = useMemo(() => {
      const pointsArray = [];
      for (let s = 0; s <= 180; s += separation) {
        const radianS = (s * Math.PI) / 180;
        const pZ = radius * Math.cos(radianS);

        for (let t = 0; t < 360; t += separation) {
          const radianT = (t * Math.PI) / 180;
          const pX = radius * Math.sin(radianS) * Math.cos(radianT);
          const pY = radius * Math.sin(radianS) * Math.sin(radianT);

          pointsArray.push({ x: pX, y: pY, z: pZ });
        }
      }
      return pointsArray;
    }, [radius, separation]);

    // Add rotation
    useFrame(() => {
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.rotation.y += rotationSpeed.current;
        ref.current.rotation.x += rotationSpeed.current;
      }
    });

    return (
      <group ref={ref}>
        {points.map((point, index) => (
          <mesh key={index} position={[point.x, point.y, point.z]}>
            <sphereGeometry args={[radius * 0.015]} />
            <meshBasicMaterial color={color} />
          </mesh>
        ))}
      </group>
    );
  },
);

const OrbitingSystem: React.FC<OrbitingSpheresProps> = ({ objects }) => {
  const { theme } = useTheme();
  const colors = semanticColors[theme as "dark" | "light"] as ThemeColors;
  const sphereColor = colors?.foreground[900] || "#000000";

  const refs = useRef<THREE.Group[]>([]);
  const angles = useRef<number[]>([]);
  const comRef = useRef<THREE.Vector3>(new THREE.Vector3());

  // Initialize angles and positions
  useEffect(() => {
    if (objects.length !== 2) {
      console.error("This implementation supports exactly 2 bodies");
      return;
    }

    const [body1, body2] = objects;
    const totalMass = body1.mass + body2.mass;

    // Calculate true Center of Mass
    const totalRadius = 150; // Increased orbital radius

    // Precise mass-weighted positioning
    const r1 = totalRadius * (body2.mass / totalMass);
    const r2 = totalRadius * (body1.mass / totalMass);

    // Initial positioning around COM
    if (refs.current[0] && refs.current[1]) {
      refs.current[0].position.set(r1, 0, 0);
      refs.current[1].position.set(-r2, 0, 0);

      // Store COM reference
      comRef.current.set(0, 0, 0);
    }

    // Initial angle distribution
    angles.current = [0, Math.PI];
  }, [objects]);

  // Orbital motion
  useFrame(() => {
    if (objects.length !== 2 || !refs.current[0] || !refs.current[1]) return;

    const [body1, body2] = objects;
    const totalMass = body1.mass + body2.mass;
    const totalRadius = 150;

    // Calculate precise radii based on mass
    const r1 = totalRadius * (body2.mass / totalMass);
    const r2 = totalRadius * (body1.mass / totalMass);

    // Update angles (orbital motion speed)
    angles.current[0] += 0.02;

    // Update positions around fixed COM
    refs.current[0].position.set(
      r1 * Math.cos(angles.current[0]),
      0,
      r1 * Math.sin(angles.current[0]),
    );

    refs.current[1].position.set(
      -r2 * Math.cos(angles.current[0]),
      0,
      -r2 * Math.sin(angles.current[0]),
    );
  });

  return (
    <>
      {objects.map((obj, i) => {
        const radius = Math.pow((3 * obj.volume) / (4 * Math.PI), 1 / 3) * 5;
        return (
          <Sphere
            ref={(el) => {
              refs.current[i] = el!;
            }}
            key={i}
            radius={radius * 10}
            color={sphereColor}
          />
        );
      })}
    </>
  );
};

export const OrbitingSpheres = React.forwardRef<
  HTMLCanvasElement,
  React.RefAttributes<HTMLCanvasElement> & OrbitingSpheresProps
>(({ objects, ...props }, ref) => {
  return (
    <Canvas
      camera={{
        position: [200, 300, 200], // Top-down view
        fov: 45,
      }}
      ref={ref}
      onCreated={({ scene }) => {
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 100);
        scene.add(light);
      }}
      {...props}
    >
      <OrbitingSystem objects={objects} />
    </Canvas>
  );
});

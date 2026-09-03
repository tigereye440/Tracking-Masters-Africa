import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useGLTF } from "@react-three/drei";
import type { Mesh } from "three";

// ---------------------------------------------------------------------------
// Swap this out for your own model:
//   const { scene } = useGLTF("/models/your-model.glb");
//   return <primitive object={scene} />;
// Put the .glb file in your Next.js /public folder and point the path at it.
// ---------------------------------------------------------------------------
function DemoModel({ color, wireframe, spin }) {
  const meshRef = useRef<Mesh | null>(null);

  useFrame((_, delta) => {
    if (spin && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <torusKnotGeometry args={[1, 0.32, 200, 32]} />
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        metalness={0.35}
        roughness={0.25}
      />
    </mesh>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshBasicMaterial color="#666" wireframe />
    </mesh>
  );
}

export default function ModelViewer() {
  const [color, setColor] = useState("#7c9cff");
  const [wireframe, setWireframe] = useState(false);
  const [spin, setSpin] = useState(true);

  return (
    <div className="w-full h-full min-h-140 bg-neutral-950 rounded-xl overflow-hidden relative flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
        <span className="text-neutral-300 text-sm tracking-wide">3D model viewer</span>
        <span className="text-neutral-500 text-xs">drag to orbit · scroll to zoom</span>
      </div>

      <div className="flex-1 relative">
        <Canvas
          shadows
          camera={{ position: [3, 2, 4], fov: 45 }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[4, 6, 3]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          <Suspense fallback={<Loader />}>
            <DemoModel color={color} wireframe={wireframe} spin={spin} />
            <Environment preset="city" />
          </Suspense>

          <ContactShadows position={[0, -1.4, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
          <OrbitControls enablePan={false} minDistance={2} maxDistance={8} />
        </Canvas>
      </div>

      <div className="flex items-center gap-4 px-5 py-3 border-t border-neutral-800 bg-neutral-900/60">
        <label className="flex items-center gap-2 text-neutral-300 text-sm">
          Color
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-7 h-7 rounded cursor-pointer bg-transparent border border-neutral-700"
          />
        </label>

        <button
          onClick={() => setWireframe((w) => !w)}
          className={`text-sm px-3 py-1.5 rounded border transition-colors ${
            wireframe
              ? "bg-neutral-200 text-neutral-900 border-neutral-200"
              : "text-neutral-300 border-neutral-700 hover:border-neutral-500"
          }`}
        >
          Wireframe
        </button>

        <button
          onClick={() => setSpin((s) => !s)}
          className={`text-sm px-3 py-1.5 rounded border transition-colors ${
            spin
              ? "bg-neutral-200 text-neutral-900 border-neutral-200"
              : "text-neutral-300 border-neutral-700 hover:border-neutral-500"
          }`}
        >
          Auto-rotate
        </button>
      </div>
    </div>
  );
}

// Preload example — uncomment when you point DemoModel at a real file:
// useGLTF.preload("/models/your-model.glb");

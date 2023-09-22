/* eslint-disable react/no-unknown-property */

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Earth = () => {
  //   const earth = useGLTF("./planet/scene.gltf");
  const earth = useGLTF("src/assets/house.glb");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        // shadow-mapSize={1024}
        shadow-mapSize={[2048, 2048]} // Increase shadow map size
        shadow-bias={-0.0005} // Adjust shadow bias
      />
      <pointLight intensity={5} />
      <primitive
        object={earth.scene}
        scale={1}
        // rotation={[-0.01, -0.2, -0.1]}
        position={[0, -3, 0]}
      />
    </mesh>
  );
};

const House = () => {
  return (
    // <Canvas
    //   linear
    //   shadows
    //   frameloop="demand"
    //   dpr={[1.5, 2]}
    //   gl={{ preserveDrawingBuffer: true }}
    //   camera={{
    //     fov: 45,
    //     near: 0.1,
    //     far: 200,
    //     position: [-4, 3, 6],
    //   }}
    // >
    //   {/* <fog attach="fog" args={["#272730", 16, 30]} /> */}
    //   {/* <ambientLight intensity={1} color="#FFFFFF" />
    //   <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={30}>
    //     <pointLight intensity={0.2} position={[-10, -25, -10]} />
    //     <spotLight
    //       castShadow
    //       intensity={1}
    //       angle={0.2}
    //       penumbra={1}
    //       position={[-25, 20, -15]}
    //       shadow-mapSize={[1024, 1024]}
    //       shadow-bias={-0.0001}
    //     />
    //   </PerspectiveCamera> */}
    //   <Suspense fallback={null}>
    //     {/* <Model /> */}
    //     <Earth />
    //   </Suspense>
    //   <OrbitControls
    //     // autoRotate
    //     enableZoom={false}
    //     maxPolarAngle={Math.PI / 2}
    //     minPolarAngle={Math.PI / 2}
    //   />
    //   <Preload all />
    // </Canvas>

    // <Canvas
    //   linear
    //   shadows // Enable shadows
    //   frameloop="demand"
    //   dpr={[1.5, 2]}
    //   gl={{ preserveDrawingBuffer: true }}
    //   // camera={{
    //   //   fov: 45,
    //   //   near: 0.1,
    //   //   far: 200,
    //   //   position: [-4, 3, 6],
    //   // }}
    //   camera={{ position: [20, 3, 5], fov: 25 }}
    // >
    //   {/* <fog attach="fog" args={["#272730", 16, 30]} /> */}
    //   <ambientLight intensity={1} color="#FFFFFF" />
    //   <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={20}>
    //     <pointLight intensity={0.2} position={[-10, -25, -10]} />

    <Canvas
      frameloop="demand"
      shadows
      dpr={[1.5, 2]}
      camera={{ position: [20, 3, 5], fov: 18 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      {/* <Stars radius={100} depth={10} count={1000} factor={10} /> */}

      <Preload all />
    </Canvas>
  );
};

export { House };

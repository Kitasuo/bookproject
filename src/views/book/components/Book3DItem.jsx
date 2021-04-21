import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Book.gltf');

  // Animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = 0.5 - (1 + Math.sin(t / 1.5)) / 5;
    group.current.rotation.x = Math.cos(t / 4) / 6;
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 6;
  });

  // Load textures for material
  const newTexture = useLoader(THREE.TextureLoader, `/${props.imageid}.jpg`);
  const normals = useLoader(THREE.TextureLoader, '/normal.jpg');
  const roughness = useLoader(THREE.TextureLoader, '/roughness.jpg');
  newTexture.anisotropy = 4;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Pages.geometry} material={materials.PagesMaterial} position={[-0.01, -0.12, -0.01]} />
      <mesh geometry={nodes.Cover.geometry} position={[0.01, 0, -0.01]}>
        <meshStandardMaterial
          attach="material"
          map={newTexture}
          normalMap={normals}
          roughnessMap={roughness}
          envMapIntensity={4}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/Book.gltf');

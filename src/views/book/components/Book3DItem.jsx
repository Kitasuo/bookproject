/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Book.gltf');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = 0.5 - (1 + Math.sin(t / 1.5)) / 5;
    group.current.rotation.x = Math.cos(t / 4) / 6;
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 6;
  });
  materials.CoverMaterial.map.anisotropy = 4;
  materials.CoverMaterial.envMapIntensity = 5;
  materials.PagesMaterial.envMapIntensity = 5;
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pages.geometry}
        material={materials.PagesMaterial}
        position={[-0.01, -0.12, -0.01]}
        // rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cover.geometry}
        material={materials.CoverMaterial}
        position={[0.01, 0, -0.01]}
        // rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload('/Book.gltf');
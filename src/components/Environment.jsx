import { useEffect } from 'react';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader';
import { useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Environment = ({ background = false }) => {
  const { gl, scene } = useThree();
  const [cubeMap] = useLoader(
    HDRCubeTextureLoader,
    [['px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr']],
    (loader) => {
      loader.setDataType(THREE.UnsignedByteType);
      loader.setPath('/hdri/');
    },
  );

  useEffect(() => {
    const gen = new THREE.PMREMGenerator(gl);
    gen.compileEquirectangularShader();
    const hdrCubeRenderTarget = gen.fromCubemap(cubeMap);
    cubeMap.dispose();
    gen.dispose();
    if (background) scene.background = hdrCubeRenderTarget.texture;
    scene.environment = hdrCubeRenderTarget.texture;
    return () => (scene.environment = scene.background = null);
  });
  return null;
};

export default Environment;

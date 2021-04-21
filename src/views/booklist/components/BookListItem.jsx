import image from '../../../assets/images/book.png';
import * as THREE from 'three';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Book3DItem from 'views/book/components/Book3DItem';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader';

const BookListItem = ({ book }) => {
  // Environment map for Canvas
  function Environment({ background = false }) {
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
  }

  return (
    <div>
      <div className="gridItem">
        <Link to={`/book/${book.id}`}>
          <Canvas className="listCanvas" camera={{ fov: 75, position: [0, 3, 0] }}>
            <OrbitControls
              maxDistance={5}
              minDistance={2}
              rotateSpeed={0.3}
              enableDamping={true}
              maxPolarAngle={1.5}
              screenSpacePanning={false}
              zoomSpeed={0.5}
              enablePan={false}
              enableZoom={false}
            />
            <Suspense fallback={<Html>loading..</Html>}>
              <ContactShadows
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, -1, 0]}
                opacity={0.5}
                width={40}
                height={40}
                blur={1}
                far={9}
              />
              <Environment />
              <Book3DItem imageid={book.id} />
            </Suspense>
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <directionalLight position={[-10, -10, -5]} intensity={1} />
          </Canvas>
          <p className="listTitle">{book.title}</p>
          <p className="listAuthor">{book.author}</p>
        </Link>
      </div>
    </div>
  );
};

export default BookListItem;

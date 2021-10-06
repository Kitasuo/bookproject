import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';
import Environment from '../../components/Environment';
import Book3DItem from '../../components/Book3DItem';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import { Link } from 'react-router-dom';

import './Landing.css';

const Landing = () => {
  const [id, setId] = useState(7);

  //randomize book to show
  useEffect(() => {
    let min = 7;
    let max = 14;
    min = Math.ceil(min);
    max = Math.floor(max);
    setId(Math.floor(Math.random() * (max - min + 1)) + min);
  }, []);

  const book = useFetchBooks(id);
  if (book === null) {
    return null;
  }

  return (
    <div className="landingContainer">
      <div className="discoverText">
        Discover
        <div className="rightText">The Right Book</div>
        <Link to={`/`}>
          <button className="enterButton">Enter site</button>
        </Link>
      </div>
      <Canvas className="landingCanvas" camera={{ fov: 75, position: [0, 3, 0] }}>
        <OrbitControls
          maxDistance={5}
          minDistance={2}
          rotateSpeed={0.3}
          enableDamping={true}
          maxPolarAngle={1.5}
          screenSpacePanning={false}
          zoomSpeed={0.5}
        />
        <Suspense fallback={<Html>Loading...</Html>}>
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
    </div>
  );
};

export default Landing;

import React, { Suspense, useEffect } from 'react';
import * as THREE from 'three';
import './Book.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import Book3DItem from 'views/book/components/Book3DItem';
import { OrbitControls, Html } from '@react-three/drei';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader';
import { ContactShadows } from '@react-three/drei';

const Book = () => {
  const [book, setBook] = React.useState(null);

  // Hae URL:stä id
  const { id } = useParams();

  // Tietokantakutsu
  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://kimmobook.azurewebsites.net/api/Books/${id}`, { method: 'GET' });
      const data = await response.json();
      setBook(data);
    };
    fetchBooks();
  }, [id]);

  if (book === null) {
    return null;
  }

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

  // id's for uttons
  function buttonPrevious() {
    if (book.id > 1) {
      return book.id - 1;
    } else {
      return book.id;
    }
  }
  console.log(book);

  function buttonNext() {
    if (book.id < 7) {
      return book.id + 1;
    } else {
      return book.id;
    }
  }

  return (
    <div>
      <div className="header">
        <Link to="/">
          <p className="topText">The Right Book</p>
        </Link>
        <p className="topRightText">Discover</p>
      </div>
      <div className="gridContainer">
        <Canvas className="bookCanvas" camera={{ fov: 75, position: [0, 3, 0] }}>
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
        <div className="textContainer">
          <div className="bookTitle">{book.title}</div>
          <div className="bookAuthor">{book.author}</div>
          <div className="bookDescription">{book.description}</div>
          <div className="rating">
            {[...Array(book.stars)].map((_, i) => (
              <span className="rating" key={i}>
                ★
              </span>
            ))}
            <span className="finished">Finished reading {book.finishedReading.slice(0, 10)}</span>
          </div>
          <div className="buttonsWrap">
            <Link to={`/book/${buttonPrevious()}`}>
              <button className="bookButton1">← Previous Book</button>
            </Link>
            <Link to={`/book/${buttonNext()}`}>
              <button className="bookButton1">Next Book →</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

import React, { Suspense } from 'react';
import './Book.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Book3DItem from '../../components/Book3DItem';
import { OrbitControls, Html } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';
import Environment from '../../components/Environment';
import { useFetchBooks } from 'hooks/useFetchBooks';

const Book = () => {
  // Get id from URL
  const { id } = useParams();

  // Call database
  const book = useFetchBooks(id);

  if (book === null) {
    return null;
  }

  // id's for next and previous buttons
  function buttonPrevious() {
    if (book.id > 7) {
      return book.id - 1;
    } else {
      return book.id;
    }
  }

  function buttonNext() {
    if (book.id < 14) {
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

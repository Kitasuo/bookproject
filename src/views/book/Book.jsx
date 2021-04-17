import React from 'react';
import './Book.css';
import image2Large from '../../assets/images/book2_large.png';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Book = () => {
  const [book, setBook] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://localhost:44396/api/Books/${id}`, { method: 'GET' });
      const data = await response.json();
      setBook(data);
      //console.log(data);
    };
    fetchBooks();
  }, [id]);

  if (book === null) {
    return null;
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
        <canvas className="bookCanvas"></canvas>
        {/* <img src={image2Large} alt="book2Large" className="image"></img> */}
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
            <Link to={`/book/${book.id - 1}`}>
              <button className="bookButton1">← Previous Book</button>
            </Link>
            <Link to={`/book/${book.id + 1}`}>
              <button className="bookButton1">Next Book →</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

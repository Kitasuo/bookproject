import React from 'react';
import './Book.css';
import image2Large from '../../assets/images/book2_large.png';
import { useParams } from 'react-router-dom';

const Book = () => {
  const [book, setBook] = React.useState(null);

  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://localhost:44396/api/Books/${id}`, { method: 'GET' });
      const data = await response.json();
      setBook(data);
      console.log(data);
    };
    fetchBooks();
  }, [id]);

  if (book === null) {
    return null;
  }

  return (
    <div>
      <div className="header">
        <p className="topText">The Right Book</p>
        <p className="topRightText">Discover</p>
      </div>
      <div className="gridContainer">
        <img src={image2Large} alt="book2Large" className="image"></img>
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
            <span className="finished">Finished reading {book.finishedReading}</span>
          </div>
          <div className="buttonsWrap">
            <button className="bookButton1">← Previous Book</button>{' '}
            <button className="bookButton2">Next Book →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

import React from 'react';
import './BookList.css';
import image from '../../assets/images/book.png';
import image2 from '../../assets/images/book2.png';

const BookList = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://localhost:44396/api/Books', { method: 'GET' });
      const data = await response.json();
      setBooks(data);
      console.log(data);
    };
    fetchBooks();
  }, []);

  console.log('booksState', books);

  return (
    <div>
      <div className="header">
        <p className="topText">The Right Book</p>
        <p className="topRightText">Discover</p>
      </div>

      <div className="listContainer">
        <div className="gridItem">
          <div>
            <img src={image} alt="book1" className="bookImage" />
          </div>
          <p className="listTitle">All the Light We Cannot See</p>
          <p className="listAuthor">Anthony Doerr</p>
        </div>
        <div className="gridItem">
          <div>
            <img src={image} alt="book1" className="bookImage" />
          </div>
          <p className="listTitle">All the Light We Cannot See</p>
          <p className="listAuthor">Anthony Doerr</p>
        </div>
        <div className="gridItem">
          <div>
            <img src={image} alt="book1" className="bookImage" />
          </div>
          <p className="listTitle">All the Light We Cannot See</p>
          <p className="listAuthor">Anthony Doerr</p>
        </div>
        <div className="gridItem">
          <div>
            <img src={image} alt="book1" className="bookImage" />
          </div>
          <p className="listTitle">All the Light We Cannot See</p>
          <p className="listAuthor">Anthony Doerr</p>
        </div>
      </div>
    </div>
  );
};

export default BookList;

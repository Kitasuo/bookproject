import React from 'react';
import './BookList.css';
import BookListItem from './components/BookListItem';

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

  return (
    <div>
      <div className="header">
        <p className="topText">The Right Book</p>
        <p className="topRightText">Discover</p>
      </div>

      <div className="listContainer">
        {books.map((book) => (
          <BookListItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;

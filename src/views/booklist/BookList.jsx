import React from 'react';
import './BookList.css';
import BookComponent from './components/BookComponent';

const BookList = ({ books }) => {
  return (
    <div>
      <div className="header">
        <p className="topText">The Right Book</p>
        <p className="topRightText">Discover</p>
      </div>
      <div className="listContainer">
        {books.map((book) => (
          <BookComponent key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;

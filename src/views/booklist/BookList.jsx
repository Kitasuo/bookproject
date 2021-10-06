import React from 'react';
import './BookList.css';
import BookListItem from './components/BookListItem';

const BookList = () => {
  const [books, setBooks] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredBooks, setFilteredBooks] = React.useState(books);

  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://localhost:44396/api/Books', { method: 'GET' });
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const result = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredBooks(result);
  }, [searchTerm, books]);

  return (
    <div>
      <div className="header">
        <p className="topText">The Right Book</p>
        <section className="search">
          <input
            type="text"
            className="searchInput"
            placeholder="Search books"
            value={searchTerm}
            onChange={handleSearchTermChange}
            autoFocus
          />
        </section>
        <p className="topRightText">Discover</p>
      </div>

      <div className="listContainer">
        {filteredBooks.map((book) => (
          <BookListItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;

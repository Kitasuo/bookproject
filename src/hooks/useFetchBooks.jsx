import { useState, useEffect } from 'react';

export const useFetchBooks = (id) => {
  const [book, setBook] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://localhost:44396/api/Books/${id}`, { method: 'GET' });
      const data = await response.json();
      setBook(data);
    };
    fetchBooks();
  }, [id]);

  return book;
};

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from 'views/booklist/BookList';
import Book from 'views/book/Book';
import NotFound from 'views/notfound/NotFound';
import './App.css';
import Layout from 'components/Layout';
import React from 'react';

function App() {
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
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <BookList books={books} />
          </Route>

          <Route path="/books/:id" exact>
            <Book />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

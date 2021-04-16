import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from 'views/booklist/BookList';
import Book from 'views/book/Book';
import NotFound from 'views/notfound/NotFound';
import './App.css';
import Layout from 'components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <BookList />
          </Route>

          <Route path="/book/:id" exact>
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

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from 'views/booklist/BookList';
import Book from 'views/book/Book';
import NotFound from 'views/notfound/NotFound';
import Landing from 'views/landing/Landing';
import './App.css';
import Layout from 'components/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/landing/" exact>
          <Landing />
        </Route>
        <Layout>
          <Route path="/" exact>
            <BookList />
          </Route>
          <Route path="/book/:id" exact>
            <Book />
          </Route>

          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;

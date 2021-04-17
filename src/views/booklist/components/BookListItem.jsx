import image from '../../../assets/images/book.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const BookListItem = ({ book }) => {
  return (
    <div>
      <div className="gridItem">
        <Link to={`/book/${book.id}`}>
          <img src={image} alt="book1" className="bookImage" />
          <p className="listTitle">{book.title}</p>
          <p className="listAuthor">{book.author}</p>
        </Link>
      </div>
    </div>
  );
};

export default BookListItem;

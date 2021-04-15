import image from '../../../assets/images/book.png';

const BookComponent = ({ book }) => {
  return (
    <div>
      <div className="gridItem">
        <img src={image} alt="book1" className="bookImage" />
        <p className="listTitle">{book.title}</p>
        <p className="listAuthor">{book.author}</p>
      </div>
    </div>
  );
};

export default BookComponent;

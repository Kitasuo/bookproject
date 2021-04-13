import React from 'react';
import './BookList.css';
import image from '../../assets/images/book.png';
import image2 from '../../assets/images/book2.png';

const BookList = () => {
  return (
    <div>
      <p className="topText">The Right Book</p>
      <p className="topRightText">Discover</p>

      <div className="listContainer">
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">All the Light We Cannot See</td>
              </tr>
              <tr>
                <td className="listAuthor">Anthony Doerr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image2} alt="book2" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">The Princess Bride</td>
              </tr>
              <tr>
                <td className="listAuthor">author</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">Title</td>
              </tr>
              <tr>
                <td className="listAuthor">author</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image2} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">Title</td>
              </tr>
              <tr>
                <td className="listAuthor">author</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">Title</td>
              </tr>
              <tr>
                <td className="listAuthor">author</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image2} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">Title</td>
              </tr>
              <tr>
                <td className="listAuthor">author</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">Title</td>
              </tr>
              <tr>
                <td className="listAuthor">author</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image2} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">All the Light We Cannot See</td>
              </tr>
              <tr>
                <td className="listAuthor">author</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">All the Light We Cannot See</td>
              </tr>
              <tr>
                <td className="listAuthor">Anthony Doerr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gridItem">
          <table className="bookTable">
            <tbody>
              <tr>
                <th className="imageContainer">
                  <img src={image2} alt="book1" className="bookImage" />
                </th>
              </tr>
              <tr>
                <td className="listTitle">All the Light We Cannot See</td>
              </tr>
              <tr>
                <td className="listAuthor">Anthony Doerr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookList;

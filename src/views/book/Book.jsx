import React from 'react';
import './Book.css';
import image2Large from '../../assets/images/book2_large.png';

const Book = () => {
  return (
    <div>
      <div className="header">
        <p className="topText">The Right Book</p>
        <p className="topRightText">Discover</p>
      </div>
      <div className="gridContainer">
        <img src={image2Large} alt="book2Large" className="image"></img>
        <div className="textContainer">
          <div className="bookTitle">
            The Princess
            <br />
            Bride
          </div>
          <div className="bookAuthor">William Goldman</div>
          <div className="bookDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat urna non convallis varius. Maecenas
            a lacus nec nibh dictum auctor. Etiam scelerisque risus quis leo feugiat sodales. Proin placerat urna non
            convallis varius. Sed mollis elit ac diam rutrum, ut sodales enim finibus. Aenean neque augue, gravida sed
            metus sit amet, bibendum convallis nibh. Duis faucibus leo in eros posuere. <br /> <br /> Consectetur
            adipiscing elit. Proin placerat urna non convallis varius. Maecenas a lacus nec nibh dictum auctor. Etiam
            scelerisque risus quis leo feugiat sodales.
          </div>
          <div className="rating">
            ★★★★★ <span className="finished">Finished reading 24.3.2021</span>
          </div>
          <div className="buttonsWrap">
            <button className="bookButton1">← Previous Book</button>{' '}
            <button className="bookButton2">Next Book →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

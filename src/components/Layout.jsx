import React from 'react';
import './Layout.css';
import '../views/booklist/BookList.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="pageBottom">
        <p className="copyRight">@Copyright or something</p>
      </div>
      <div className="container">
        <div className="sheet">
          <div className="content">{children}</div>
          <div className="sideText"> The Right Book</div>
        </div>
      </div>
    </>
  );
};

export default Layout;

import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="background">
      <div className="pageBottom">
        <p className="copyRight">@Copyright or something</p>
      </div>
      <div className="container">
        <div className="sheet">
          <div className="content">{children}</div>
        </div>
        <div className="sideText">
          <div>The Right Book</div>
          <div className="sideTextSub">Personal reading list</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

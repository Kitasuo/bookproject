import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="wrapText" style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <p className="topText">What you read</p>
      <div
        className="wrapTitle"
        style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 className="title">Page Not Found</h2>
        <p className="mainText">We have to go back.</p>
      </div>
    </div>
  );
};

export default NotFound;

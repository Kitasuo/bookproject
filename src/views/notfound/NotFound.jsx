import React from 'react';
import './NotFound.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <p className="topText">The Right Book</p>{' '}
        </Link>
        <p className="topRightText">Discover</p>
      </div>
      <h2 className="title">Page Not Found</h2>
      <p className="mainText">We have to go back.</p>
    </>
  );
};

export default NotFound;

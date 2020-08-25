import React from "react";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <header className="header">
      <div className="banner">
        <h1 className="heading-primary heading-primary--banner">
          Page Not Found
        </h1>
       
        <Link to="/" className="btn">
          go back home
        </Link>
      </div>
    </header>
  );
};

export default Error;

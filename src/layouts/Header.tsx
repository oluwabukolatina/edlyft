import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="app-name">
        <Link className="app-link" to="/">
          DEMO Streaming
        </Link>
      </div>
      <p className="login">Log in</p>
      <div className="signup-container">
        <p>Start your free trial</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;

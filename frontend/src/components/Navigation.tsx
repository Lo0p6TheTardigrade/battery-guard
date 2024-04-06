import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-container">
      Navigation{' '}
      <ul className="nav-list-container">
        <Link to="/">
          <li className="nav-list-item">Home</li>
        </Link>
        <Link to="/my-lipo">
          <li className="nav-list-item">My Lipo</li>
        </Link>
        <Link to="/help">
          <li className="nav-list-item">Help</li>
        </Link>
        <Link to="/about">
          <li className="nav-list-item">About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;

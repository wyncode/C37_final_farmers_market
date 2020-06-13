import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <header className="navbar">
      <div className="navbar-left">
        <div className="nav-items">
          <Link to="/">
            <div className="navbar__title navbar__item">The Market</div>
          </Link>
          <Link to="/produce">
            <div className="navbar__item_left">Produce</div>
          </Link>
          <Link to="/farms">
            <div className="navbar__item_left">Farms</div>
          </Link>
          <Link to="/community">
            <div className="navbar__item_left">Community</div>
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <div className="nav-items">
          <Link to="/help">
            <div className="navbar__item">Help</div>
          </Link>
          <Link to="/account">
            <div className="navbar__item">Account</div>
          </Link>
          <Link to="/cart">
            <div className="navbar__item">Cart</div>
          </Link>
        </div>
      </div>
    </header>
  </div>
);
export default Navbar;

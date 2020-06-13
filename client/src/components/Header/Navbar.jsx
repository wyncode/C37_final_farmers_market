import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div>
    <header className="navbar">
      <div className="navbar__title navbar__item">The Market</div>
      <div className="navbar__item_left">Produce</div>
      <div className="navbar__item_left">Farms</div>
      <div className="navbar__item_left">Community</div>
      <div className="navbar__item">Help</div>
      <div className="navbar__item">Account</div>
      <div className="navbar__item">Cart</div>
    </header>
  </div>
);
export default Navbar;

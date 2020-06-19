import React, { useContext, useState } from 'react';
import './navbartwo.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import logoGB from '../../assets/images/logoGB.png';
import cartB from '../../assets/images/cartB.png';
import CartDropDown from './CartDropdown';

const NavbarTwo = () => {
  const { shoppingCart } = useContext(AppContext);

  const [toggleCart, setToggleCart] = useState(false);

  const cartCount = Object.values(shoppingCart).reduce(
    (acc, item) => acc + item.count,
    0
  );
  return (
    <div>
      <header className="navbartwo">
        <div className="navbartwo-left">
          <div className="navtwo-items">
            <Link to="/">
              <div className="logo-gb">
                <img src={logoGB} alt="logo"></img>
              </div>
            </Link>
            <Link to="/produce">
              <div className="navbartwo__item_left">Produce</div>
            </Link>
            <Link to="/farms">
              <div className="navbartwo__item_left">Farms</div>
            </Link>
            <Link to="/community">
              <div className="navbartwo__item_left">Community</div>
            </Link>
          </div>
        </div>
        <div className="navbartwo-right">
          <div className="navtwo-items">
            <Link to="/help">
              <div className="navbartwo__item">Help</div>
            </Link>
            <Link to="/account">
              <div className="navbartwo__item">Account</div>
            </Link>
            <Link to="#">
              <div
                onClick={() => setToggleCart(!toggleCart)}
                className="navbartwo__item"
              >
                <img
                  src={cartB}
                  style={{ height: '41px', width: '46px' }}
                ></img>
                <span>{cartCount || ''}</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
      {toggleCart ? (
        <div className="cart-dropdown">
          <CartDropDown />
        </div>
      ) : null}
    </div>
  );
};
export default NavbarTwo;

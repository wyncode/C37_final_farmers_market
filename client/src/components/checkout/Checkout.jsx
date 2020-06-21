import React, { useContext } from 'react';
import CheckoutOne from './CheckoutOne';
import Cart from './Cart';
import CheckoutLoggedIn from './CheckoutLoggedIn';
import NavbarTwo from '../header/NavbarTwo';
import { AppContext } from '../../context/AppContext';
import Footer from '../footer/Footer';
import './cart.css';

const Checkout = () => {
  const { systemMessage, loggedIn } = useContext(AppContext);

  return (
    <div classname="full-checkout-div">
      {loggedIn ? (
        <div className="checkout-issue-div">
          <NavbarTwo />
          <CheckoutLoggedIn />
          <Cart />
          {systemMessage ? systemMessage : null}
          <Footer />
        </div>
      ) : (
        <div className="checkout-issue-div">
          <NavbarTwo />
          <CheckoutOne />
          <Cart />
          {systemMessage ? systemMessage : null}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Checkout;

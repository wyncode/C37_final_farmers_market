import React, { useContext } from 'react';
import CheckoutOne from './CheckoutOne';
import Cart from './Cart';
import LoggedIn from './LoggedIn'
import NavbarTwo from '../header/NavbarTwo';
import { AppContext } from '../../context/AppContext';

const Checkout = () => {
  const { systemMessage } = useContext(AppContext);
  return (
    <div>
      <NavbarTwo />
      <CheckoutOne />
      <LoggedIn />
      <Cart />
      {systemMessage ? systemMessage : null}
    </div>
  );
};

export default Checkout;

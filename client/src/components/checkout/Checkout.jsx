import React, { useContext } from 'react';
import CheckoutOne from './CheckoutOne';
import Cart from './Cart';
import LoggedIn from './LoggedIn'
import Navbar from '../header/Navbar';
import { AppContext } from '../../context/AppContext';

const Checkout = () => {
  const { systemMessage } = useContext(AppContext);
  return (
    <div>
      <Navbar />
      <CheckoutOne />
      <LoggedIn />
      <Cart />
      {systemMessage ? systemMessage : null}
    </div>
  );
};

export default Checkout;

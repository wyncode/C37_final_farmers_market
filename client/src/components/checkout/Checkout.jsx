import React, { useContext } from 'react';
import CheckoutOne from './CheckoutOne';
import Cart from './Cart';
import NavbarTwo from '../header/NavbarTwo';
import { AppContext } from '../../context/AppContext';

const Checkout = () => {
  const { systemMessage } = useContext(AppContext);
  return (
    <div>
      <NavbarTwo />
      <CheckoutOne />
      <Cart />
      {systemMessage ? systemMessage : null}
    </div>
  );
};

export default Checkout;

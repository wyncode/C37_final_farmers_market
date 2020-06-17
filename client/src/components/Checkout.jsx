import React, {useContext} from 'react';
import CheckoutOne from './CheckoutOne';
import Cart from './Cart';
import Navbar from './Header/Navbar';
import {AppContext} from "../context/AppContext"

const Checkout = () => {
  const {systemMessage} = useContext(AppContext)
  return (
    <div>
      <Navbar />
      <CheckoutOne />
      <Cart />
      {systemMessage ? systemMessage : null}
    </div>
  );
};

export default Checkout;

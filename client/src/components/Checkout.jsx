import React from 'react';
import CheckoutOne from './CheckoutOne';
import Cart from './Cart';
import Navbar from './Header/Navbar';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <CheckoutOne />
      <Cart />
      <button></button>
    </div>
  );
};

export default Checkout;

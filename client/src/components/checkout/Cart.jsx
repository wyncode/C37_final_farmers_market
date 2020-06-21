import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Cart = () => {
  const { shoppingCart } = useContext(AppContext);

  return (
    <div>
      {Object.values(shoppingCart).map((item) => {
        return <div></div>;
      })}
    </div>
  );
};

export default Cart;

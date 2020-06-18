import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Cart = () => {
  const { shoppingCart } = useContext(AppContext);

  return (
    <div>
      {shoppingCart &&
        shoppingCart.map((item) => {
          return <div>{item.name}</div>;
        })}
    </div>
  );
};

export default Cart;

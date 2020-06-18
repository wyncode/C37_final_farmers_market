import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Cart = () => {
  const { shoppingCart } = useContext(AppContext);

  return (
    <div>
      {Object.values(shoppingCart).map((item) => {
        return (
          <div>
            {item.produce.name} - {item.count}
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
const CartDrodown = () => {
  const { shoppingCart } = useContext(AppContext);

  return (
    <div className="order-container">
      <h2>Order Summary</h2>
      {Object.values(shoppingCart).map((item) => {
        return (
          <div>
            <div className="item-block">
              <div>
                <img src="" alt="product image" />
              </div>
              <div>
                <p>{item.produce.name}</p>
                <p>${item.produce.price}</p>
                <div>{item.count}</div>
              </div>
              <div>{item.produce.price * item.count}</div>
            </div>
            {/* {item.produce.name} - {item.count} */}
          </div>
        );
      })}
      <p className="subtotal">Subtotal: total</p>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};
export default CartDrodown;
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
<<<<<<< HEAD
import './CartDropdown.css';
import axios from 'axios';

const CartDrodown = () => {
  const { shoppingCart } = useContext(AppContext);

  // const getTotal = () => {
  //   const total = Object.keys(shoppingCart).length;
  //   const subTotal = item.produce.price;
  //   return subTotal * total;
  // };
  // console.log(getTotal);
  const sendOrder = async (e) => {
    const prodIds = Object.values(shoppingCart).reduce((acc, item) => {
      for (let i = 0; i < item.count; i++) {
        acc.push(item.produce.id);
      }
      return acc;
    }, []);
    const token = localStorage.getItem('token');
    await axios({
      method: 'POST',
      url: `/orders`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        products: prodIds
      }
    }).then(({ data }) => {
      console.log(data);
    });
  };
  return (
    <div className="order-container">
      <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
      {Object.values(shoppingCart).map((item) => {
        const total = item.produce.price * item.count;
        const subTotal = Object.keys(shoppingCart).length;

=======
const CartDrodown = () => {
  const { shoppingCart } = useContext(AppContext);

  return (
    <div className="order-container">
      <h2>Order Summary</h2>
      {Object.values(shoppingCart).map((item) => {
>>>>>>> 4fe2100298d62c888b5214b0d6f183c77897bf71
        return (
          <div>
            <div className="item-block">
              <div>
                <img src="" alt="product image" />
              </div>
<<<<<<< HEAD
              <div className="item-div">
                <p>{item.produce.name}</p>
                <p>${item.produce.price}</p>
                <div className="count">{item.count}</div>
              </div>
              <div>${total}</div>
=======
              <div>
                <p>{item.produce.name}</p>
                <p>${item.produce.price}</p>
                <div>{item.count}</div>
              </div>
              <div>{item.produce.price * item.count}</div>
>>>>>>> 4fe2100298d62c888b5214b0d6f183c77897bf71
            </div>
            {/* {item.produce.name} - {item.count} */}
          </div>
        );
      })}
<<<<<<< HEAD
      <div className="checkout-div">
        <p className="subtotal" style={{ textAlign: 'center' }}>
          Subtotal: $
        </p>
        <button className="checkout-button" onClick={sendOrder}>
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CartDrodown;
=======
      <p className="subtotal">Subtotal: total</p>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};
export default CartDrodown;
>>>>>>> 4fe2100298d62c888b5214b0d6f183c77897bf71

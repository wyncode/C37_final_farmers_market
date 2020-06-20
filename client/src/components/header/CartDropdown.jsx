import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './CartDropdown.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const CartDrodown = () => {
  const { shoppingCart } = useContext(AppContext);
  const history = useHistory()

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

        return (
          <div>
            <div className="item-block">
              <div>
                <img src="" alt="product image" />
              </div>
              <div className="item-div">
                <p>{item.produce.name}</p>
                <p>${item.produce.price}</p>
                <div className="count">{item.count}</div>
              </div>
              <div>${total}</div>
            </div>
            {/* {item.produce.name} - {item.count} */}
          </div>
        );
      })}
      <div className="checkout-div">
        <p className="subtotal" style={{ textAlign: 'center' }}>
          Subtotal: $
        </p>
        <button 
        className="checkout-button" 
        onClick={sendOrder}
        onClick={() => history.push(`/checkout`)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CartDrodown;

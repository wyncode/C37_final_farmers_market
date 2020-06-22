import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CartDropdown from '../header/CartDropdown';
import './cart.css';

const CheckoutLoggedIn = () => {
  const {
    user,
    setUser,
    shoppingCart,
    setShoppingCart,
    setSystemMessage
  } = useContext(AppContext);
  const [updateUser, setUpdateUser] = useState(false);
  const history = useHistory();

  const [name, setName] = useState(user && user.name);
  const [address, setAddress] = useState(user && user.address);
  const [city, setCity] = useState(user && user.city);
  const [apt, setApt] = useState(user && user.apt);
  const [state, setState] = useState(user && user.state);
  const [zipcode, setZipcode] = useState(user && user.zipcode);
  const [cardNumber, setCardNumber] = useState(user && user.cardNumber);
  const [cardName, setCardName] = useState(user && user.cardName);
  const [expirationDate, setExpirationDate] = useState(
    user && user.expirationDate
  );

  const cardDigits = user && user.cardNumber.split('');
  const lastDigits = cardDigits && cardDigits.splice(cardDigits.lenght - 4, 4);

  const updateUserInfo = async (
    name,
    address,
    apt,
    city,
    state,
    zipcode,
    cardName,
    cardNumber,
    expirationDate,
    e
  ) => {
    e.preventDefault();
    await axios({
      method: 'PATCH',
      url: `/users/${user && user._id}`,
      data: {
        name,
        address,
        apt,
        city,
        state,
        zipcode,
        cardName,
        cardNumber,
        expirationDate
      }
    })
      .then(({ data }) => {
        setUser(data);
      })
      .catch((e) => {
        console.log(e.message.toString(), 'Credentials Error');
      });
  };

  useEffect(() => {
    setUpdateUser(false);
  }, [user]);

  const sendOrder = async (e) => {
    const token = localStorage.getItem('token');
    const products = Object.values(shoppingCart).reduce((acc, item) => {
      for (let i = 0; i < item.count; i++) {
        acc.push(item.produce._id);
      }
      return acc;
    }, []);
    await axios({
      method: 'POST',
      url: `/orders`,
      headers: { Authorization: `Bearer ${token}` },
      data: { products }
    }).then(({ data }) => {
      setShoppingCart({});
      history.push(`/confirm/${data._id}`);
    });
  };

  return (
    <div
      className="full-checkout-div"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {updateUser ? (
        <div className="loggedInCheckout">
          <p style={{ fontSize: '35px' }}>Hey {user && user.name}!</p>
          <p>Your veggies have been waiting for this moment.</p>
          <br></br>
          <h3>Please confirm your info below</h3>
          <form
            className="updateCheckoutInfo"
            onSubmit={(e) =>
              updateUserInfo(
                name,
                address,
                apt,
                city,
                state,
                zipcode,
                cardName,
                cardNumber,
                expirationDate,
                e
              )
            }
          >
            <div>
              <label htmlFor="Contact">Contact</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="Delivery">Delivery</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                value={apt}
                onChange={(e) => setApt(e.target.value)}
              />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="Payment">Payment Info</label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                type="text"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </div>
            <button type="submit">Change</button>
          </form>
        </div>
      ) : (
        <div className="loggedInCheckoutInfo">
          <p style={{ fontSize: '35px', marginBottom: '50px' }}>
            Hey {user && user.name}!
          </p>
          <p
            style={{ fontSize: '22px', marginBottom: '30px', color: '#7F7F7F' }}
          >
            Your veggies have been waiting for this moment.
          </p>
          <hr></hr>
          <p
            style={{
              fontSize: '18px',
              marginBottom: '52px',
              color: '#7F7F7F',
              textAlign: 'center'
            }}
          >
            Please confirm your info below
          </p>
          <div className="confirm-info-div">
            <div>
              <div className="contact-flex">
                <h3>Contact: </h3>
                <p>{user && user.name}</p>
              </div>
              <div className="contact-flex">
                <h3>Address:</h3>
                <p>
                  {user && user.address}, {user && user.apt} {user && user.city}{' '}
                  {user && user.zipcode}
                </p>
              </div>
              <div className="contact-flex">
                <h3>Payment Info </h3>
                <p>Card ending in {lastDigits}</p>
              </div>
            </div>
          </div>
          <button
            className="pay-now-button"
            onClick={() => setUpdateUser(true)}
          >
            Change
          </button>
          <div>
            <button
              className="pay-now-button"
              type="submit"
              onClick={sendOrder}
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
      <CartDropdown />
    </div>
  );
};

export default CheckoutLoggedIn;

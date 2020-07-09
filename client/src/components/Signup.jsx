import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import './signup.css';
import Footer from './footer/Footer';
import NavbarTwo from './header/NavbarTwo';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [apt, setApt] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const history = useHistory();

  const form1 = (e) => {
    e.preventDefault();
    document.getElementById('form1').classList.add('hide');
    document.getElementById('form2').classList.remove('hide');
  };

  const form2 = (e) => {
    e.preventDefault();
    document.getElementById('form2').classList.add('hide');
    document.getElementById('form3').classList.remove('hide');
  };

  const form3 = async (e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `/users`,
      data: {
        name,
        email,
        password,
        address,
        city,
        apt,
        state,
        zipcode,
        phoneNumber,
        cardName,
        cardNumber,
        expirationDate
      }
    })
      .then(({ data }) => {
        setUser(data.user);
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
      })
      .catch((e) => console.log(e.message.toString()));
  };

  const signUp = async (
    name,
    email,
    password,
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
      method: 'POST',
      url: `/users`,
      data: {
        name,
        email,
        password,
        address,
        city,
        apt,
        state,
        zipcode,
        cardName,
        cardNumber,
        expirationDate
      }
    })
      .then(({ data }) => {
        setUser(data.user);
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
        history.push('/account');
      })
      .catch((e) => console.log(e.message.toString()));
  };

  return (
    <div>
      <NavbarTwo />
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to the Market!</h1>
        <p>
          Sign up below and shop the best produce from the best farmers and
          artisanal vendors around Miami.
        </p>
      </div>
      <div>
        <div className="static-signup-div">
          <div className="miniformdiv">
            <form id="form1" onSubmit={form1}>
              <div className="payment-cycle">
                <p>
                  <b>1. Information </b>&nbsp;
                </p>
                <p>2. Billing Address &nbsp;</p>
                <p>3. Payment Info</p>
              </div>
              <br></br>
              <h2>Contact Information</h2>
              <br></br>
              <p style={{ fontSize: '22px' }}>
                Already have an account?
                <Link to="/account">
                  <b>Log in</b>
                </Link>
              </p>

              <div>
                <label htmlFor="name">Name*</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number (optional)</label>
                <input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <button className="checkout-button" type="submit">
                Next
              </button>
            </form>

            <form className="hide" id="form2" onSubmit={form2}>
              <div>
                <div className="payment-cycle">
                  <p>1. Information&nbsp;</p>
                  <p>
                    <b>2. Billing Address</b> &nbsp;
                  </p>
                  <p>3. Payment Info</p>
                </div>
                <br></br>
                <div className="delivery-div">
                  <div className="benjaminButton">
                    <button className="delivery-button">Delivery</button>
                    <button className="delivery-button">Pick up</button>
                  </div>
                  <h5>
                    Delivery available in Miami Dade Country. Minimum order $50,
                    &nbsp; $7 fee. Free delivery for $150+
                  </h5>
                </div>
                <h5>
                  Delivery available in Miami Dade Country. Minimum order $50,
                  $7 fee. Free delivery for $150+
                </h5>
                <div>
                  <label htmlFor="address">Street address*</label>
                  <input
                    type="street address"
                    name="street address"
                    id="street address"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city">City*</label>
                  <input
                    type="city"
                    name="city"
                    id="city"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city">State*</label>
                  <input
                    type="state"
                    name="state"
                    id="state"
                    placeholder="Enter State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="bldg">Bldg/Apt(optional)</label>
                  <input
                    type="apt"
                    name="apt"
                    id="apt"
                    placeholder="apt"
                    value={apt}
                    onChange={(e) => setApt(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="zipcode">Zip code*</label>
                  <input
                    type="zipcode"
                    name="zipcode"
                    id="zipcode"
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                  />
                </div>
                <button className="checkout-button" type="submit">
                  Continue to Payment Info
                </button>
              </div>
            </form>

            <form id="form3" className="hide" onSubmit={form3}>
              <div className="payment-cycle">
                <p>1. Information&nbsp;</p>
                <p>2. Billing Address&nbsp;</p>
                <p>
                  <b>3. Payment Info</b>
                </p>
              </div>
              <br></br>
              <div>
                <label htmlFor="name">Name on card</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="Card Number"
                  name="Card Number"
                  id="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Expiration Date</label>
                <input
                  type="Expiration Date"
                  name="Expiration Date"
                  id="Expiration Date"
                  placeholder="MM/YY"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  required
                />
              </div>
              <button
                className="checkout-button"
                type="submit"
                onClick={(e) =>
                  signUp(
                    name,
                    email,
                    password,
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
                Complete Signup
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

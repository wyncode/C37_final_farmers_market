import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import './signup.css';
import Footer from './footer/Footer';
import NavbarTwo from './header/NavbarTwo';

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

  const signUp = async (
    name,
    email,
    password,
    address,
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
        state,
        zipcode,
        cardName,
        cardNumber,
        expirationDate
      }
    })
      .then(({ data }) => {
        setUser(data.user);
        setLoggedIn(true);
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');
        localStorage.setItem('token', data.token);
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
      <form
        onSubmit={(e) =>
          signUp(
            name,
            email,
            password,
            address,
            city,
            state,
            zipcode,
            cardName,
            cardNumber,
            expirationDate,
            e
          )
        }
        className="signup-form"
      >
        <h1>Sign Up</h1>
        <div className="signup-input">
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
        <div className="signup-input">
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
        <div className="signup-input">
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
        <div className="signup-input">
          <label htmlFor="phoneNumber">Phone Number (optional)</label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="signup-input">
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
        <div className="signup-input">
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
        <div className="signup-input">
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
        <div className="signup-input">
          <label htmlFor="state">State*</label>
          <input
            type="state"
            name="state"
            id="state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="signup-input">
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
        <div className="signup-input">
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
        <div className="signup-input">
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
        <div className="signup-input">
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
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Signup;

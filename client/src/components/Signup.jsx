import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

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
        <div>
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="password">Password:</label>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

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
  const [phoneNumber, setPhoneNumber] = useState('');

  const signUp = async (name, email, password, address, city, zipcode, e) => {
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
        zipcode
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
          signUp(name, email, password, address, city, zipcode, e)
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

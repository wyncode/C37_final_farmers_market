import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Login from './Login';

const CheckoutOne = () => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async (name, email, password, e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `/users`,
      data: {
        name,
        email,
        password
      }
    })
      .then(({ data }) => {
        setUser(data.user);
        setLoggedIn(true);
        setName('');
        setEmail('');
        setPassword('');
        localStorage.setItem('token', data.token);
      })
      .catch((e) => console.log(e.message.toString()));
  };

  return (
    <div>
      <h1>Contact Information</h1>
      <h2>
        Have an account? <Login>Log in</Login>
      </h2>
      <h3>or continue as guest</h3>
      <form onSubmit={(e) => signUp(name, email, password, e)}>
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
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default CheckoutOne;

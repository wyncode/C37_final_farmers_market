import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Login = () => {
  const { user, setUser, setLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async (email, password, e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `/users/login`,
      data: {
        email,
        password
      }
    })
      .then(({ data }) => {
        setUser(data.user);
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        setEmail('');
        setPassword('');
      })
      .catch((e) => {
        console.log(e.message.toString(), 'Credentials Error');
      });
  };

  return (
    <>
      <h1>One click is all it takes...</h1>
      <form onSubmit={(e) => logIn(email, password, e)}>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="enter your secret passcode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">LOG IN</button>({user.name ? user.name : ''})
      </form>
    </>
  );
};

export default Login;

import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import './login.css';

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
        setEmail('');
        setPassword('');
        setLoggedIn(true);
      })
      .catch((e) => {
        console.log(e.message.toString(), 'Credentials Error');
      });
  };

  return (
    <div className="login">
      <h1>Log In</h1>
      <div className="loginFlex">
        <form
          onSubmit={(e) => logIn(email, password, e)}
          className="login-form"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            LOG IN
          </button>
          ({user.name ? user.name : ''})
        </form>
      </div>
    </div>
  );
};

export default Login;

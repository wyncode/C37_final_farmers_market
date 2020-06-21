import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import './login.css';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const { user, setUser, setLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

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
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
            style={{ marginBottom: '25px' }}
          />
          <button type="submit" className="login-button">
            Log in
          </button>
          <div>
            <h3 style={{ marginTop: '25px' }}>
              Don't have an account? &nbsp;
              <Link onClick={() => history.push(`/signup`)}>Sign Up</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

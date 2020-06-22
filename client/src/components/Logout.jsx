import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import './login.css';

const Logout = () => {
  const { setUser, setLoggedIn } = useContext(AppContext);

  const logOut = async () => {
    const token = localStorage.getItem('token');
    await axios({
      method: 'POST',
      url: `/users/logout`,
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(({ data }) => {
        localStorage.removeItem('token');
        setUser({});
        setLoggedIn(false);
      })
      .catch((e) => console.log(e.message.toString()));
  };

  return (
    <button className="logout-button" onClick={logOut}>
      LOG OUT
    </button>
  );
};

export default Logout;

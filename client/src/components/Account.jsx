import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Login from './Login';
import Logout from './Logout';
import NavbarTwo from './header/NavbarTwo';
import Footer from './footer/Footer';
import './account.css';

const Account = () => {
  const { user, loggedIn } = useContext(AppContext);

  return (
    <div className="accountWhole">
      <NavbarTwo className="accountNav" />

      <div className="accountPage">
        <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
          Welcome {user.name ? user.name : ''}
        </h1>
        {loggedIn ? (
          <div className="logout-div">
            <Logout />
          </div>
        ) : (
          <div className="logdiv">
            <Login />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Account;

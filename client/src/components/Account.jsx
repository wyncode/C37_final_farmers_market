import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import NavbarTwo from './header/NavbarTwo';
import './account.css';

const Account = () => {
  const { user, loggedIn } = useContext(AppContext);

  return (
    <div>
      <NavbarTwo />
      <div className="accountPage">
        {loggedIn ? (
          <div className="">
            {user.name}
            <Logout />
          </div>
        ) : (
          <div className="logdiv">
            <Login />
            <Signup />
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;

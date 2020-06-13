import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';

const Account = () => {
  const { user, loggedIn } = useContext(AppContext);

  return (
    <div>
      {loggedIn ? (
        <div>
          {user.name}
          <Logout />
        </div>
      ) : (
        <div>
          <Login />
          <Signup />
        </div>
      )}
    </div>
  );
};

export default Account;

import React, { useContext } from 'react';
// import { AppContextProvider } from '../context/AppContext';
import { AppContext } from '../context/AppContext';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';

const Home = () => {
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
          <span>Log in</span>
          <Signup />
        </div>
      )}
    </div>
  );
};

export default Home;

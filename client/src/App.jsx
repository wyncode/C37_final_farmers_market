import React from 'react';
import { AppContextProvider } from './context/AppContext';
// import Login from './components/Login';
// import Logout from './components/Logout';
// import Signup from './components/Signup';
import Home from './components/Home';

const App = () => {
  return (
    <AppContextProvider>
      <div>
        <h1>This is where we take over the world!!!</h1>
        <Home />
      </div>
    </AppContextProvider>
  );
};

export default App;

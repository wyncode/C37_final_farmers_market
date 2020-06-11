import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Login from './components/Login';
import Logout from './components/Logout';

const App = () => {
  return (
    <AppContextProvider>
      <div>
        <h1>This is where we take over the world!!!</h1>
        <Login />
        <Logout />
      </div>
    </AppContextProvider>
  );
};

export default App;

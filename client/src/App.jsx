import React from 'react';
import { AppContextProvider } from './context/AppContext';
// import Login from './components/Login';
// import Logout from './components/Logout';
// import Signup from './components/Signup';
// import Home from './components/Home';
import Navbar from './components/Header/Navbar';

const App = () => {
  return (
    <AppContextProvider>
      <div>
        <Navbar />
        {/* <Home /> */}
      </div>
    </AppContextProvider>
  );
};

export default App;

import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Login from "./components/Login"

const App = () => {

  return (
    <AppContextProvider>
      <div>
        <h1>this is the app</h1>
        <Login /> 
      </div>
    </AppContextProvider>
  );
};

export default App;
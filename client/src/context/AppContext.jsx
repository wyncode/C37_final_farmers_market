import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <AppContext.Provider
      value={{
        user, setUser, loggedIn, setLoggedIn
      }}
    >
      {children}
    </AppContext.Provider>
  );
};



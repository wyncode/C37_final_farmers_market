import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [farmers, setFarmers] = useState([]);
  const [produceList, setProduceList] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      axios
        .get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(({ data }) => {
          setUser(data);
          setLoggedIn(true);
        })
        .catch((e) => console.log(e.message.toString()));
    }
  }, [token]);

  useEffect(() => {
    const getProducts = async () => {
      await axios({
        method: 'GET',
        url: `/products`
      })
        .then(({ data }) => {
          setProduceList(data);
        })
        .catch((e) => console.log(e.message.toString()));
    };
    getProducts();

    const getStores = async () => {
      await axios({
        method: 'GET',
        url: `/stores`
      })
        .then(({ data }) => {
          setFarmers(data);
        })
        .catch((e) => console.log(e.message.toString()));
    };
    getStores();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        farmers,
        setFarmers,
        produceList,
        setProduceList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

import React from 'react';
import { AppContextProvider } from './context/AppContext';

import './App.css';
import Produce from './pages/produce_page'

// import Login from './components/Login';
// import Logout from './components/Logout';
// import Signup from './components/Signup';
import Navbar from './components/Header/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import Farms from './components/Farms';
import Produce from './components/Produce';

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/produce" component={Produce} />
          <Route exact path="/farms" component={Farms} />
          <Route exact path="/account" component={Account} />
          {/* <Home /> */}
        </Switch>
      </AppContextProvider>
    </Router>
  );
};

export default App;

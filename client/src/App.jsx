import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import Produce from './pages/ProducePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import Farms from './components/Farms';
import SingleFarm from './components/FarmComponents/SingleFarm'
import IdProduct from './pages/IdProductPage';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/produce" component={Produce} />
          <Route exact path="/produce/:id" component={IdProduct} />
          <Route exact path="/farms" component={Farms} />
          <Route exact path="/farms/:id" component={SingleFarm} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </AppContextProvider>
    </Router>
  );
};

export default App;

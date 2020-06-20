import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import Produce from './components/produce/ProducePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homepage/Home';
import Account from './components/Account';
import Farms from './components/farmcomponents/Farms';
import SingleFarm from './components/farmcomponents/SingleFarm';
import IdProduct from './components/produce/IdProductPage';
import Checkout from './components/checkout/Checkout';
import Help from './components/Help';
<<<<<<< HEAD
import Signup from './components/Signup';
=======
import Confirmation from './components/checkout/Confirmation'
>>>>>>> 8d70eaa... confirmation done

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
          <Route exact path="/help" component={Help} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/checkout" component={Checkout} />
<<<<<<< HEAD
          <Route exact path="/signup" component={Signup} />
=======
          <Route exact path="/confirm/:id" component={Confirmation} />
>>>>>>> 8d70eaa... confirmation done
        </Switch>
      </AppContextProvider>
    </Router>
  );
};

export default App;

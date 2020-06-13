import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import Produce from './pages/produce_page'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Login from './components/Login';
// import Logout from './components/Logout';
// import Signup from './components/Signup';
import Home from './components/Home';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
      <div>
        <h1>This is where we take over the world!!!</h1>
        <Route exact path='/' component={Home} />
        <Route exact path='/produce' component={Produce} />
      </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;

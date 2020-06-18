import React from 'react';
import './healthways.css';
import Navbar from '../header/Navbar';
import { useHistory } from 'react-router-dom';

const Healthyways = () => {
  const history = useHistory();

  console.log('test');
  return (
    <div className="healthways-hero">
      <Navbar />
      <div className="hero-left">
        <h1>Local, seasonal, fresh.</h1>
        <h2>Your one-stop access to farmers and food-artisans in the 305.</h2>
        <button onClick={() => history.push(`./produce`)}>Shop Produce</button>
      </div>
    </div>
  );
};
export default Healthyways;

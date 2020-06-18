import React from 'react';
import './HowWorks.css';
import Avocado from '../assets/images/avocado.svg';
import Farmer from '../assets/images/farmer.svg';
import Utensils from '../assets/images/utensils.svg';

const HowWorks = () => {
  return (
    <div className="theBox">
      <h2 className="howTitle">How it works</h2>
      <img src={Farmer} className="howImg"></img>
      <img src={Avocado} className="howImg"></img>
      <img src={Utensils} className="howImg"></img>

      <button type="button" className="howButton">
        See Details
      </button>
    </div>
  );
};

export default HowWorks;

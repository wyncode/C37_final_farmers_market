import React from 'react';
import './HowWorks.css';
import Avocado from '../assets/images/Avocado.png';
import Farmer from '../assets/images/Farmer.png';
import utensils from '../assets/images/utensils.png';

const HowWorks = () => {
  return (
    <div className="theBox">
      <h2 className="howTitle">How it works</h2>
      <div className="howitwork">
        <img src={Farmer} className="howImg"></img>
        <img src={Avocado} className="howImg"></img>
        <img src={utensils} className="howImg"></img>
      </div>
      <button type="button" className="howButton">
        See Details
      </button>
    </div>
  );
};

export default HowWorks;

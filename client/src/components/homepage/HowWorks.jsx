import React from 'react';
import './HowWorks.css';
import Avocado from '../../assets/images/Avocado.png';
import Farmer from '../../assets/images/Farmer.png';
import utensils from '../../assets/images/utensils.png';

const HowWorks = () => {
  return (
    <div className="theBox">
      <h2 className="howTitle">How it works</h2>
      <div className="howitwork">
        <div>
          <img src={Farmer} className="howImg"></img>
          <p>
            We partner with local food providers to create a one stop hub for
            you
          </p>
        </div>
        <div>
          <img src={Avocado} className="howImg"></img>
          <p>You fill your cart with goods from various vendors</p>
        </div>
        <div>
          <img src={utensils} className="howImg"></img>
          <p>
            Select pick up or delivery at checkout. We deliver throughout Dade
            County
          </p>
        </div>
      </div>
      <button type="button" className="howButton">
        See Details
      </button>
    </div>
  );
};

export default HowWorks;

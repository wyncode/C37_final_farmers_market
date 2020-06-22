import React from 'react';
import './HowWorks.css';
import Avocado from '../../assets/images/Avocado.png';
import Farmer from '../../assets/images/Farmer.png';
import utensils from '../../assets/images/utensils.png';
import { useHistory } from 'react-router-dom';

const HowWorks = () => {
  const history = useHistory();

  return (
    <div className="theBox">
      <h2 className="howTitle">How it works</h2>
      <div className="howitwork">
        <div>
          <img src={Farmer} className="howImg" alt="farmer"></img>
          <p className="p-works">
            We partner with local food providers to create a one stop hub for
            you
          </p>
        </div>
        <div>
          <img
            src={Avocado}
            alt="avocado"
            className="howImg"
            style={{ marginBottom: '15px' }}
          ></img>
          <p className="p-works">
            You fill your cart with goods from various vendors
          </p>
        </div>
        <div>
          <img src={utensils} className="howImg" alt="utensils"></img>
          <p className="p-works">
            Select pick up or delivery at checkout. We deliver throughout Dade
            County
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => history.push(`/account`)}
        className="howButton"
      >
        See Details
      </button>
    </div>
  );
};

export default HowWorks;

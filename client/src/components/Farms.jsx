import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import './Farms.css';

const Farms = () => {
  const [expanded, setExpanded] = useState(false);

  //some sort of onClick that will be attached the image,
  // once the user clicks the image, it will change to a different div
  return (
    <div className="grid">
      <div
        className={expanded ? 'grid-item-1 expanded' : 'grid-item-1'}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="background-image" />
        <div className="info">
          <h2 className="farmdiv">Joe's Organics</h2>
        </div>
      </div>
      <div className="grid-item-2">
        <img src={logo} alt="farmer" width="300" height="420" />
        <h2 className="farmdiv">Joe's Organics</h2>
      </div>
      <div className="grid-item-3">
        <img src={logo} alt="farmer" width="300" height="420" />
        <h2 className="farmdiv">Joe's Organics</h2>
      </div>
      <div className="grid-item-4">
        <img src={logo} alt="farmer" width="300" height="420" />
        <h2 className="farmdiv">Joe's Organics</h2>
      </div>
      <div className="grid-item-5">
        <img src={logo} alt="farmer" width="300" height="420" />
        <h2 className="farmdiv">Joe's Organics</h2>
      </div>
      <div className="grid-item-6">
        <img src={logo} alt="farmer" width="300" height="420" />
        <h2 className="farmdiv">Joe's Organics</h2>
      </div>
    </div>
  );
};

export default Farms;

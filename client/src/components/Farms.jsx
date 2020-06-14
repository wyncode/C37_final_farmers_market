import React from 'react';
import logo from '../assets/images/logo.png';
import './Farms.css';

const Farms = () => {
  //some sort of onClick that will be attached the image,
  // once the user clicks the image, it will change to a different div
  return (
    <div className="grid-container">
      <div>
        <img src={logo} alt="farmer" width="300" height="420" />
      </div>
      <div>
        <h2>Joe's Organics</h2>
      </div>
      <div>
        <img src={logo} alt="farmer" width="300" height="420" />
      </div>
      <div>
        <h2>Verde Farm</h2>
      </div>
      <div>
        <img src={logo} alt="farmer" width="300" height="420" />
      </div>
      <div>
        <h2>Arrow Farm</h2>
      </div>
      <div>
        <img src={logo} alt="farmer" width="300" height="420" />
      </div>
      <div>
        <h2>On the Vine</h2>
      </div>
      <div>
        <img src={logo} alt="farmer" width="300" height="420" />
      </div>
      <div>
        <h2>Backyard Eggs</h2>
      </div>
      <div>
        <img src={logo} alt="farmer" width="300" height="420" />
      </div>
      <div>
        <h2>Finca Fresca</h2>
      </div>
      <div>
        <img src={logo} alt="farmer" width="300" height="420" />
      </div>
      <div>
        <h2>Sisters Farm</h2>
      </div>
      <div>
        <img src={logo} alt="farmer" width="300" height="420" />
      </div>
      <div>
        <h2>Tropical Farm</h2>
      </div>
    </div>
  );
};

export default Farms;

import React from 'react';
import womanFarmer from '../assets/images/woman_farmer.jpg';
const Healthyways = () => {
  console.log('test');
  return (
    <div>
      <h3 className="subtitle">Healthy habits make for Health Living</h3>
      <img src={womanFarmer} alt="woman farmer" width="279"></img>
      <p>
        <b>Quality Products</b>
        <b>Support a High Energy Lifestyle</b>
      </p>
      <button>Healthy Ways</button>
    </div>
    )
  }; 
  export default Healthyways;
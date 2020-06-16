import React from 'react';
import womanFarmer from '../assets/images/woman_farmer.jpg';
import "./Healthways.css"
import Navbar from "./Header/Navbar"

const Healthyways = () => {
  console.log('test');
  return (
    <div className="healthways-hero">
      <Navbar />
      <div className="hero-left">
        <h1>Local, seasonal, fresh.</h1>
        <h2>Your one-stop access to farmers and food-artisans in the 305.</h2>
        <button>Shop Produce</button>
      </div>

      
      
    </div>
    )
  }; 
  export default Healthyways;
import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import '../Farms.css';

const FarmCard = (props) => {

  //some sort of onClick that will be attached the image,
  // once the user clicks the image, it will change to a different div
  return (
    <div
        className={props.currentSelection === "closed" ? "farm-card" : "full-card"}
        onClick={props.setCurrentSelection}
      >
          <div className="background-image" />
          <div className="info">
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <h2>{props.name}</h2>
                <h2>{props.currentSelection === "closed" ? null : "X"}</h2>
              </div>
          </div>
    </div>
  );
};

export default FarmCard;
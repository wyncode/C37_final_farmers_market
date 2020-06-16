import React, { useState } from 'react';
import '../Farms.css';
import FarmCard from "./FarmCard"

const FarmRow = (props) => {
  const [currentSelection, setCurrentSelection] = useState("closed")

  let display = null

  if(currentSelection === "closed"){
    display =   
    <div className={`farm-row ${!props.farm2 ? "start" : ""}`}>
      {props.farm1 ? <FarmCard farm={props.farm1} setCurrentSelection={() => setCurrentSelection("left")} currentSelection={currentSelection} /> : null }
      {props.farm2 ? <FarmCard farm={props.farm2} setCurrentSelection={() => setCurrentSelection("right")} currentSelection={currentSelection} /> : null }
   </div> 
  }
  else if (currentSelection === "left"){
    display =
    <div className={`farm-row ${!props.farm2 ? "start" : ""}`}>
    {props.farm1 ? <FarmCard farm={props.farm1} setCurrentSelection={() => setCurrentSelection("closed")} currentSelection={currentSelection}/> : null }
 </div> 
  }
  else if (currentSelection === "right"){
    display =
    <div className={`farm-row ${!props.farm2 ? "start" : ""}`}>
    {props.farm2 ? <FarmCard farm={props.farm2} setCurrentSelection={() => setCurrentSelection("closed")} currentSelection={currentSelection}/> : null }
 </div> 
  }

  return(
    display
  )  
}

export default FarmRow;
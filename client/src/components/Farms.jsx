import React, { useState } from 'react';
import './Farms.css';
import FarmContainer from "./FarmComponents/FarmContainer";
import FarmRow from "./FarmComponents/FarmRow";

const Farms = () => {
  const [farmNames, setFarmNames] = useState(["bobs farm", "joes farm", "rubens farm", "katie farm", "laz farm"]);

  const rows = []
  for(let i=0; i < farmNames.length; i+=2){
    rows.push({farm1: farmNames[i], farm2:farmNames[i+1]})
  }
  console.log(rows)
  return (
    <FarmContainer>
     {
       rows.map(row=>{
         return(
           <FarmRow farm1={row.farm1} farm2={row.farm2} />
         )
       })
     }
    </FarmContainer>
  );
};

export default Farms;

import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext'
import './Farms.css';
import FarmRow from './FarmComponents/FarmRow';
import Navbar from "../components/Header/Navbar"

const Farms = () => {
  const { farmers } = useContext(AppContext)
  const [farmNames, setFarmNames] = useState([]);

  useEffect(() => {
    farmers && farmers.map(farmer =>  setFarmNames(farmer.storeName))
  },[])



  console.log(farmNames)
  

  const rows = [];


  for (let i = 0; i < farmers.length; i += 2) {
    rows.push({ farm1: farmNames[i], farm2: farmNames[i + 1] });
  }
  
  // console.log(rows);
  return (
    <>
    <Navbar />
    <div className="farm-container">
      {rows.map((row) => {
        return <FarmRow farm1={farmNames} farm2={farmNames} />;
      })}
    </div>
    </>
  );
};

export default Farms;

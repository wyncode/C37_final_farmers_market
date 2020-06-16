import React, { useState } from 'react';
import './Farms.css';
import FarmRow from './FarmComponents/FarmRow';
import Navbar from "../components/Header/Navbar"

const Farms = () => {
  const [farmNames, setFarmNames] = useState([
    'bobs farm',
    'joes farm',
    'rubens farm',
    'katie farm',
    'laz farm'
  ]);

  const rows = [];
  for (let i = 0; i < farmNames.length; i += 2) {
    rows.push({ farm1: farmNames[i], farm2: farmNames[i + 1] });
  }
  console.log(rows);
  return (
    <>
    <Navbar />
    <div className="farm-container">
      {rows.map((row) => {
        return <FarmRow farm1={row.farm1} farm2={row.farm2} />;
      })}
    </div>
    </>
  );
};

export default Farms;

import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './farms.css';
import FarmRow from './FarmRow';
import Navbar from '../header/Navbar';

const Farms = () => {
  const { farmers } = useContext(AppContext);

  const rows = [];

  for (let i = 0; i < farmers.length; i += 2) {
    rows.push({ farm1: farmers[i], farm2: farmers[i + 1] });
  }

  console.log(farmers);
  console.log(rows, 'rows');

  return (
    <>
      <Navbar />
      <div className="farm-container">
        {rows.length > 0 &&
          rows.map((row, i) => {
            return <FarmRow key={i} farm1={row.farm1} farm2={row.farm2} />;
          })}
      </div>
    </>
  );
};

export default Farms;

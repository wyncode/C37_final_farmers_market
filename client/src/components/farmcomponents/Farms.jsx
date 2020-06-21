import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './farms.css';
import FarmRow from './FarmRow';
import NavbarTwo from '../header/NavbarTwo';
import Footer from '../footer/Footer';

const Farms = () => {
  const { farmers } = useContext(AppContext);

  const rows = [];

  for (let i = 0; i < farmers.length; i += 2) {
    rows.push({ farm1: farmers[i], farm2: farmers[i + 1] });
  }

  return (
    <div>
      <NavbarTwo />
      <div className="top-farm-cont">
        <div className="farm-container">
          {rows.length > 0 &&
            rows.map((row, i) => {
              if (i % 2){
                return(
                  <FarmRow 
                    key={i} 
                    farm1={row.farm1} 
                    farm2={row.farm2} 
                    background1={"#595454"} 
                    background2={"#FFDD9D"} 
                    color1={"#FFFFFF"}
                    color2={"#595454"}
                  />
                ) 
              } else {
                return(
                  <FarmRow 
                    key={i} 
                    farm1={row.farm1} 
                    farm2={row.farm2} 
                    background1={"#FFDD9D"} 
                    background2={"#595454"} 
                    color1={"#595454"}
                    color2={"#FFFFFF"}
                  />
                ) 
              }
              
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Farms;

import React, { useState } from 'react';
import './farms.css';
import FarmCard from './FarmCard';

const FarmRow = (props) => {
  const [currentSelection, setCurrentSelection] = useState('closed');

  let display = null;

  if (currentSelection === 'closed') {
    display = (
      <div className={`farm-row ${!props.farm2 ? 'start' : ''}`}>
        {props.farm1 ? (
          <FarmCard
            farm={props.farm1}
            setCurrentSelection={() => setCurrentSelection('left')}
            currentSelection={currentSelection}
            background={props.background1}
            color={props.color1}
          />
        ) : null}
        {props.farm2 ? (
          <FarmCard
            farm={props.farm2}
            setCurrentSelection={() => setCurrentSelection('right')}
            currentSelection={currentSelection}
            background={props.background2}
            color={props.color2}
          />
        ) : null}
      </div>
    );
  } else if (currentSelection === 'left') {
    display = (
      <div className={`farm-row ${!props.farm2 ? 'start' : ''}`}>
        {props.farm1 ? (
          <FarmCard
            farm={props.farm1}
            setCurrentSelection={() => setCurrentSelection('closed')}
            currentSelection={currentSelection}
            background={props.background1}
            color={props.color1}
          />
        ) : null}
      </div>
    );
  } else if (currentSelection === 'right') {
    display = (
      <div className={`farm-row ${!props.farm2 ? 'start' : ''}`}>
        {props.farm2 ? (
          <FarmCard
            farm={props.farm2}
            setCurrentSelection={() => setCurrentSelection('closed')}
            currentSelection={currentSelection}
            background={props.background2}
            color={props.color2}
          />
        ) : null}
      </div>
    );
  }

  return display;
};

export default FarmRow;

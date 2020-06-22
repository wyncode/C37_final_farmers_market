import React from 'react';
import './farms.css';
import { useHistory } from 'react-router-dom';

const FarmCard = (props) => {
  const history = useHistory();
  console.log(props.farm);
  return (
    <div
      className={
        props.currentSelection === 'closed' ? 'farm-card' : 'full-card'
      }
      onClick={props.setCurrentSelection}
      style={{ backgroundColor: `${props.background}` }}
    >
      <div
        style={{ backgroundImage: `url(${props.farm.storeImage})` }}
        className="background-image"
        alt="farm-image"
      />
      <div className="info">
        <div className="x-div" style={{ color: `${props.color}` }}>
          <p>{props.farm.storeName}</p>
          <p className="x-button">
            {props.currentSelection === 'closed' ? null : 'X'}
          </p>
        </div>
        <div className="addInfo">
          <p style={{ textAlign: 'center', color: `${props.color}` }}>
            {props.currentSelection === 'closed'
              ? null
              : props.farm.description}
          </p>
          <p
            className="link"
            onClick={() => history.push(`/farms/${props.farm._id}`)}
          >
            {props.currentSelection === 'closed' ? null : 'Visit The Store'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;

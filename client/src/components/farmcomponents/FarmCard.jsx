import React from 'react';
import './farms.css';
import { useHistory } from 'react-router-dom';

const FarmCard = (props) => {
  const history = useHistory();
console.log(props.farm)
  return (
    <div
      className={
        props.currentSelection === 'closed' ? 'farm-card' : 'full-card'
      }
      onClick={props.setCurrentSelection}
    >
      <div
        style={{backgroundImage:`url(${props.farm.storeImage})`}}
        className="background-image"
        alt="farm-image"
      />
      <div className="info">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>{props.farm.storeName}</h2>
          <h2>{props.currentSelection === 'closed' ? null : 'X'}</h2>
        </div>
        <div className="addInfo">
          <h3>
            {props.currentSelection === 'closed' ? null : props.farm.address}
          </h3>
          <h4
            className="link"
            onClick={() => history.push(`/farms/${props.farm._id}`)}
          >
            {props.currentSelection === 'closed' ? null : 'Visit The Store'}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;

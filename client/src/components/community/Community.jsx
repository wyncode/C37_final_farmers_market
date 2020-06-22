import React from 'react';
import comPic from './gardenkids.jpg';
import './Community.css';

const Community = () => {
  return (
    <div>
      <h2 className="comm-title" style={{ textAlign: 'center' }}>
        Community Connection
      </h2>
      <div className="community-connection">
        <img src={comPic} className="comPicture"></img>
        <div className="small-div">
          <p>
            We believe in healthy food accessible to all. We offer educational
            programs and veggie boxes for families.
          </p>
          <button type="button" className="community-button">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;

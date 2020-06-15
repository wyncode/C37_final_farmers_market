import React, { useState } from 'react';
import '../Farms.css';

const FarmContainer = ({children}) => {
  const [expanded, setExpanded] = useState(false);

  //some sort of onClick that will be attached the image,
  // once the user clicks the image, it will change to a different div
  return (
    <div className="farm-container">
      {children}
    </div>
  );
};

export default FarmContainer;
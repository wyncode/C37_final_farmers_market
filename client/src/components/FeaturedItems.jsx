import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const FeaturedItems = () => {
  const { produceList } = useContext(AppContext);
  return (
    <div>
      <h1>Featured Items</h1>
    </div>
  );
};

export default FeaturedItems;

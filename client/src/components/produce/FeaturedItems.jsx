import React, { useContext, useMemo } from 'react';
import { AppContext } from '../../context/AppContext';
import './FeatureItems.css';
import logo from '../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';

const FeaturedItems = () => {
  const { produceList, farmers } = useContext(AppContext);
  const history = useHistory()

  const getRandomItemRecursive = (acc) => {
    const randomIndex = Math.floor(Math.random() * produceList.length);
    const randomItem = produceList[randomIndex];
    const isDuplicate = acc.some((produce) => produce._id === randomItem._id);
    if (isDuplicate) return getRandomItemRecursive(acc);
    return randomItem;
  };

  const featuredItems = useMemo(
    () =>
      produceList.slice(0, 2).reduce((acc) => {
        acc.push(getRandomItemRecursive(acc));
        return acc;
      }, []),
    [produceList]
  );

  return (
    <div>
      <h1>Featured Items</h1>
      <div className="featured">
        {featuredItems.map((item) => (
          <div>
            <div>
              <img src={item.images || logo} alt="product image"/>
              <h1>{item.name}</h1>
              <h3>{item.description}</h3>
              <h3>{farmers && farmers.map(farm => {if(farm._id === item.farmerStore){return farm.storeName}})}</h3>
              <p
              className="link"
              onClick={() => history.push(`/produce/${item._id}`)}
              >Tell me more</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;

import React, { useContext, useMemo } from 'react';
import { AppContext } from '../../context/AppContext';
import './FeatureItems.css';
import logo from '../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';

const FeaturedItems = () => {
  const { produceList, farmers } = useContext(AppContext);
  const history = useHistory();

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
      <h1 style={{ marginLeft: '200px' }}>Featured Items</h1>
      <div className="featured">
        {featuredItems.map((item) => (
          <div>
            <div className="featuredItemDiv">
              <div>
                <img
                  style={{
                    height: '214px',
                    width: '480px',
                    marginBottom: '10px'
                  }}
                  src={item.images || logo}
                  alt="product image"
                  className="featuredItemImg"
                />
                <h1 style={{ fontSize: '25px' }}>
                  {item.name} ${item.price}
                </h1>
                <h3 style={{ fontSize: '22px' }}>{item.description}</h3>
                <h3 style={{ fontSize: '22px', color: '#7F7F7F' }}>
                  {farmers &&
                    farmers.map((farm) => {
                      if (farm._id === item.farmerStore) {
                        return farm.storeName;
                      }
                    })}
                </h3>
                <p
                  className="link"
                  onClick={() => history.push(`/produce/${item._id}`)}
                >
                  Tell me more
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;

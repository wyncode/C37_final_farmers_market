import React, { useContext, useMemo } from 'react';
import { AppContext } from '../../context/AppContext';
import './FeatureItems.css';
import { Card, Button } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const FeaturedItems = () => {
  const { produceList } = useContext(AppContext);

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
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={item.images || logo} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.farmerStore}</Card.Text>
              <Link>Tell me more</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;

import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import './FeatureItems.css';
import { Card, Button } from 'react-bootstrap';

const FeaturedItems = () => {
  const { produceList } = useContext(AppContext);

  const featuredItem = produceList.map((item) => item.name);

  return (
    <div>
      <h1>Featured Items</h1>
      <div className="featured">
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{featuredItem[0]}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{featuredItem[1]}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedItems;

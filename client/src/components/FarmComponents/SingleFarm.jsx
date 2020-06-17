import React from 'react';
import Breadcrumb from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap';

const Farm = () => {
  const history = useHistory();

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Farms</Breadcrumb.Item>
        <Breadcrumb.Item active>Farmer Poo</Breadcrumb.Item>
      </Breadcrumb>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="left" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Farm;

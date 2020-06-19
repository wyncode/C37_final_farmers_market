import React, { useContext } from 'react';
import { Breadcrumb, Card, Button, Container, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import './farms.css';

const SingleFarm = () => {
  const history = useHistory();
  const { id } = useParams();
  const { farmers, produceList, shoppingCart, setShoppingCart } = useContext(AppContext);

  const farm = farmers.find((farm) => farm._id === id);

  const newProduceList = produceList.filter((item) => {
    return item.farmerStore === id;
  });

  const handleUpdateCart = (produce) => {
    const currentItemInCart = shoppingCart[produce._id];

    if (!currentItemInCart) {
      return setShoppingCart({
        ...shoppingCart,
        [produce._id]: { count: 1, produce }
      });
    }

    setShoppingCart({
      ...shoppingCart,
      [produce._id]: { count: currentItemInCart.count + 1, produce }
    });
  };

  const decrementUpdateCart = (produce) => {
    let currentItemInCart = shoppingCart[produce._id];
  

    if (currentItemInCart.count === 1) { 
      
      currentItemInCart= ({...shoppingCart,[produce._id]: { count: 0, produce }})
        delete currentItemInCart[produce._id]
        return setShoppingCart(currentItemInCart)
      }
  if (currentItemInCart) {
        return setShoppingCart({
          ...shoppingCart,
          [produce._id]: { count: currentItemInCart.count - 1, produce }
    })
  }
  }

  const currentItemCart = (product) => {
    const currentItemInCart = shoppingCart[product._id];
    if(currentItemInCart) {
      return true
    } else {
      return false
    }
  }

  const noImg =
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  const farmImg =
    'https://www.vhv.rs/dpng/d/226-2261166_farm-cartoon-png-transparent-png.png';

  return (
    <div>
      <Navbar />
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => history.push(`/farms`)}>
          Farms
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{farm && farm.storeName}</Breadcrumb.Item>
      </Breadcrumb>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="left" src={farmImg} />
        <Card.Body>
          <Card.Title>{farm && farm.storeName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Container>
        <Row>
          {newProduceList &&
            newProduceList.map((item) => (
              <Col lg="4">
                <Card
                  key={item.id}
                  style={{
                    width: 200,
                    height: 350,
                    margin: 5,
                    overflow: 'hidden'
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={noImg}
                    alt={item.description}
                    width={200}
                    onClick={() => history.push(`/produce/${item._id}`)}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                  </Card.Body>
                  <button onClick={() => handleUpdateCart(item)}>
                      Add to Cart
                    </button>
                    {currentItemCart(item) ? <button onClick={() => decrementUpdateCart(item)}>Remove</button> : null}
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SingleFarm;

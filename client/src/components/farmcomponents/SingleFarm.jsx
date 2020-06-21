import React, { useContext } from 'react';
import { Breadcrumb, Card, Button, Container, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import NavbarTwo from '../header/NavbarTwo';
import Footer from '../footer/Footer';
import './farms.css';
import './singlefarm.css';
import '../produce/producepage.css';
import farm_img from '../../assets/images/farm_img.jpg';

const SingleFarm = () => {
  const history = useHistory();
  const { id } = useParams();
  const { farmers, produceList, shoppingCart, setShoppingCart } = useContext(
    AppContext
  );

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
      currentItemInCart = {
        ...shoppingCart,
        [produce._id]: { count: 0, produce }
      };
      delete currentItemInCart[produce._id];
      return setShoppingCart(currentItemInCart);
    }
    if (currentItemInCart) {
      return setShoppingCart({
        ...shoppingCart,
        [produce._id]: { count: currentItemInCart.count - 1, produce }
      });
    }
  };

  const currentItemCart = (product) => {
    const currentItemInCart = shoppingCart[product._id];
    if (currentItemInCart) {
      return true;
    } else {
      return false;
    }
  };

  const noImg =
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  const farmImg =
    'https://www.vhv.rs/dpng/d/226-2261166_farm-cartoon-png-transparent-png.png';

  return (
    <div>
      <NavbarTwo />
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => history.push(`/farms`)}>
          Farms
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{farm && farm.storeName}</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <div className="singlefarminfo">
          <img
            className="farmPic"
            src={farm_img}
            style={{ textAlign: 'center' }}
          ></img>
          <div className="minifarminfo">
            <h1>{farm && farm.storeName}</h1>
            <h3>{farm && farm.address}</h3>
            <h4>{farm && farm.phoneNumber}</h4>
            <p>About the farm: {farm && farm.description}</p>
          </div>
        </div>
      </div>
      <br></br>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        Check out {farm && farm.storeName}s fresh items!
      </h1>
      <Container className="farm-items-div">
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
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleUpdateCart(item)}
                  >
                    +
                  </button>
                  {currentItemCart(item) ? (
                    <button
                      className="remove-from-cart-button"
                      onClick={() => decrementUpdateCart(item)}
                    >
                      -
                    </button>
                  ) : null}
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

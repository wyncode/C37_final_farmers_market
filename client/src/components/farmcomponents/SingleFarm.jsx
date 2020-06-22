import React, { useContext } from 'react';
import { Breadcrumb, Card, Container, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import NavbarTwo from '../header/NavbarTwo';
import Footer from '../footer/Footer';
import './farms.css';
import './singlefarm.css';
import '../produce/producepage.css';

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
            alt="storeImage"
            src={farm && farm.storeImage}
            style={{ textAlign: 'center' }}
          ></img>
          <div className="minifarminfo">
            <h1 style={{ marginBottom: '30px' }}>{farm && farm.storeName}</h1>
            <h3 style={{ color: '#595454', marginBottom: '20px' }}>
              {farm && farm.address}
            </h3>
            <h4 style={{ marginBottom: '30px' }}>{farm && farm.phoneNumber}</h4>
            <p>
              <b>About the farm:</b> {farm && farm.description}
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <h1
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
          height: '200px',
          backgroundColor: '#FFDD9D'
        }}
      >
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
                    src={item.images[0]}
                    alt="product picture"
                    style={{ maxHeight: '50%' }}
                    onClick={() => history.push(`/produce/${item._id}`)}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Card.Text>
                      {shoppingCart[item._id]
                        ? shoppingCart[item._id].count
                        : 0}
                    </Card.Text>
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

      <h2
        style={{
          textAlign: 'center',
          marginBottom: '35px',
          marginTop: '50px',
          fontSize: '30px'
        }}
      >
        #themarketmiami
      </h2>
      <div className="socialMedia">
        <img
          className="insta"
          src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579572/radish_reduced_size_lifpjd.jpg"
          alt="produce"
        />
        <img
          className="insta"
          src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579678/anna-earl-cTtE2FlIRoU-unsplash_jkkndf.jpg"
          alt="produce"
        />
        <img
          className="insta"
          src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579567/dragon_fruit_reduced_size_ygqhy6.jpg"
          alt="produce"
        />
        <img
          className="insta"
          src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579588/carrots_reduced_size_bgfpqr.jpg"
          alt="produce"
        />
        <img
          className="insta"
          src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579581/local-farmers-market-shopping-1068x713_za74xp.jpg"
          alt="produce"
        />
      </div>
      <Footer />
    </div>
  );
};

export default SingleFarm;

import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Breadcrumb } from 'react-bootstrap';
import NavbarTwo from '../header/NavbarTwo';
import Footer from '../footer/Footer';
import './IdProduce.css';

const IdProduct = () => {
  const history = useHistory();

  const { produceList, farmers, shoppingCart, setShoppingCart } = useContext(
    AppContext
  );
  const { id } = useParams();

  const product = produceList.find((product) => product._id === id);
  const farm =  product && farmers.find((farm) => farm._id === product.farmerStore);

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

  const currentItemCart = (produce) => {
    const currentItemInCart = shoppingCart[produce._id];
    if(currentItemInCart) {
      return true
    } else {
      return false;
    }
  };

  const prodImg =
    'https://pluspng.com/img-png/vegetable-png-hd-vegetable-png-transparent-image-1799.png';

  return (
    <div>
      <NavbarTwo />
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => history.push(`/produce`)}>
          Produce
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product && product.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div id="layoutProduct">
        <div className="imageFlex">
          <img id="productImage" src={prodImg} alt="" />
          <img id="productImage" src={prodImg} alt="" />
          <img id="productImage" src={prodImg} alt="" />
          <img id="productImage" src={prodImg} alt="" />
        </div>
        <div id="productInfo">
          <h1>{product && product.name}</h1>
          <h3>${product && product.price}</h3>
          <h3>{product && product.count}</h3>
          <button
            className="addtocart"
            onClick={() => handleUpdateCart(product)}
          >
            Add to Cart
          </button>
          { product && currentItemCart(product) ? (
            <button onClick={() => decrementUpdateCart(product)}>Remove</button>
          ) : null}
          <h3>{product && product.description}</h3>
          <h3>Contributing Farm</h3>
          <h3
            className="link"
            onClick={() => history.push(`/farms/${farm._id}`)}
          >
            {farm && farm.storeName}
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IdProduct;

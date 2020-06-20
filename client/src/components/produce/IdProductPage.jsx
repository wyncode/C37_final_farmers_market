import React, { useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Breadcrumb } from 'react-bootstrap';
import NavbarTwo from '../header/NavbarTwo';
import Reviews from '../../assets/images/Reviews.png';
import './IdProduce.css';
import cuteLogo from '../../assets/images/cuteLogo.png';

const IdProduct = () => {
  const history = useHistory();

  const { produceList, farmers, shoppingCart, setShoppingCart } = useContext(
    AppContext
  );
  const { id } = useParams();

  const product = produceList.find((product) => product._id === id);
  const farm =
    product && farmers.find((farm) => farm._id === product.farmerStore);

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
    if (currentItemInCart) {
      return true;
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
      <div className="layout-product">
        <div className="imageFlex">
          <img className="product-image" src={prodImg} alt="" />
          <img className="product-image" src={prodImg} alt="" />
          <img className="product-image" src={prodImg} alt="" />
          <img className="product-image" src={prodImg} alt="" />
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
          {product && currentItemCart(product) ? (
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
      <div className="product-detail-block">
        <div className="good-for-you">
          <ul>
            <li>Good for you because:</li>
            <li>{product && product.name} is heart healthy.</li>
            <li>It has minerals known to improve health!</li>
          </ul>
        </div>
        <div className="health-card">
          <ul>
            <li className="product-title">{product && product.name}</li>
            <li>134% of your daily vitamin C intake!</li>
            <li>Loaded with cancer fighting antioxidents</li>
            <li>Another cute random fact about this veggie!</li>
          </ul>
        </div>
      </div>
      <div className="yellow-block">
        <img src={cuteLogo} alt="cute logo" />
        <div className="yb-info">
          <h3>Organic because:</h3>
          <p>It's muy delicious</p>
        </div>
      </div>
      <div className="recipe-block">
        <div>
          <img src="" alt="recipe pic" />
          <Link>Recipe title</Link>
        </div>
        <div>
          <img src="" alt="recipe pic" />
          <Link>Recipe title</Link>
        </div>
      </div>
      <div className="enjoywith-block">
        <div>
          <img src="" alt="produce" />
          <Link>Produce title</Link>
        </div>
        <div>
          <img src="" alt="produce" />
          <Link>Produce title</Link>
        </div>
      </div>
      <div>
        <img src={Reviews} alt="reviews" />
      </div>
    </div>
  );
};

export default IdProduct;

import React, { useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Breadcrumb } from 'react-bootstrap';
import NavbarTwo from '../header/NavbarTwo';
import Reviews from '../../assets/images/Reviews.png';
import './IdProduce.css';
import cuteLogo from '../../assets/images/cuteLogo.png';
import Footer from '../footer/Footer';

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
      <div style={{ height: '100px' }}>
        <h2 style={{ textAlign: 'center', marginTop: '10px' }}>
          Smart choice! Get that brain food in!
        </h2>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => history.push(`/produce`)}>
          Produce
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product && product.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="layout-product">
        <div className="imageFlex">
          <img
            className="product-image"
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579564/marisa-morton-GunHGc3Xxu8-unsplash_Copy_urzwwp.png"
            alt=""
          />
          <img
            className="product-image"
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579564/marisa-morton-GunHGc3Xxu8-unsplash_Copy_urzwwp.png"
            alt=""
          />
          <img
            className="product-image"
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579564/marisa-morton-GunHGc3Xxu8-unsplash_Copy_urzwwp.png"
            alt=""
          />
          <img
            className="product-image"
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579564/marisa-morton-GunHGc3Xxu8-unsplash_Copy_urzwwp.png"
            alt=""
          />
        </div>
        <div id="productInfo">
          <h1 style={{ fontSize: '50px' }}>{product && product.name}</h1>
          <h3 style={{ fontSize: '25px' }}>${product && product.price}/lb</h3>
          <p style={{ fontSize: '22px', maxWidth: '438px' }}>
            {product && product.description}
          </p>
          <br></br>
          <h3 style={{ fontSize: '25px' }}>{product && product.category}</h3>
          <br></br>
          <h3 style={{ fontSize: '25px' }}>Contributing Farm</h3>
          <p
            className="link"
            onClick={() => history.push(`/farms/${farm._id}`)}
          >
            {farm && farm.storeName}
          </p>
          <button
            className="addtocart"
            onClick={() => handleUpdateCart(product)}
          >
            Add to Cart
          </button>
          {product && currentItemCart(product) ? (
            <button onClick={() => decrementUpdateCart(product)}>Remove</button>
          ) : null}
        </div>
      </div>
      <div className="product-detail-block">
        <div className="good-for-you">
          <ul>
            <li>
              <b style={{ fontSize: '40px' }}>Good for you because:</b>
            </li>
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
          <Link>Recipe Title</Link>
        </div>
        <div>
          <img src="" alt="recipe pic" />
          <Link>Recipe title</Link>
        </div>
      </div>
      <div className="enjoywith-block">
        <div className="lilpairflex">
          <img
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579591/mango_on_grn_tile_xpcocb.png"
            alt="mango"
          />
          <Link>Mango</Link>
        </div>
        <div className="lilpairflex">
          <img
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579594/cauliflower_on_blue_tile_dcq7px.png"
            alt="cauliflower"
          />
          <Link>Cauliflower</Link>
        </div>
        <div className="lilpairflex">
          <img
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579557/cabbage_on_coral_tile_dsfa7i.png"
            alt="cabbage"
          />
          <Link>Cabbage</Link>
        </div>
        <div className="lilpairflex">
          <img
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579561/garlic_on_brwm_tile_s2mfac.png"
            alt="garlic"
          />
          <Link>Garlic</Link>
        </div>
      </div>

      <div className="review">
        <img src={Reviews} alt="reviews" />
      </div>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '35px',
          marginTop: '50px',
          fontSize: '25px'
        }}
      >
        Follow us on social media #themarketmiami
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

export default IdProduct;

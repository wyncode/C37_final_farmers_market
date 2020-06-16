import React, { useState } from 'react';
import axios from 'axios';

const CheckoutTwo = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [apt, setApt] = useState('');
  const [zipcode, setZipcode] = useState('');

  const delivery = async (address, apt, city, zipcode, e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `/users`,
      data: {
        address,
        apt,
        city,
        zipcode
      }
    })
      .then(({ data }) => {
        // setUser(data.user);
        // setLoggedIn(true);
        setAddress('');
        setApt('');
        setCity('');
        setZipcode('');
        localStorage.setItem('token', data.token);
      })
      .catch((e) => console.log(e.message.toString()));
  };

  return (
    <div>
      <form onSubmit={(e) => delivery(address, apt, city, zipcode, e)}>
        <button>Delivery</button>
        <button>Pick up</button>
        <p>
          Delivery available in Miami Dade Country. Minimum order $50, $7 fee.
          Free delivery for $150+
        </p>
        <div>
          <label htmlFor="address">Street address*</label>
          <input
            type="street address"
            name="street address"
            id="street address"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City*</label>
          <input
            type="city"
            name="city"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bldg">Bldg/Apt(optional)</label>
          <input
            type="apt"
            name="apt"
            id="apt"
            placeholder="Zip Code"
            value={zipcode}
            onChange={(e) => setApt(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zip code*</label>
          <input
            type="zipcode"
            name="zipcode"
            id="zipcode"
            placeholder="Zip Code"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Continue to Payment</button>
      </form>
    </div>
  );
};

export default CheckoutTwo;

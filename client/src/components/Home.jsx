import React from 'react';
import Loveus from './Loveus';
import Footer from './footer/Footer';
import Healthways from './Healthways'; 

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the homepage</h1>
      <Healthways/>
      <Loveus />
      <Footer/>
    </div>
  );
};

export default Home;

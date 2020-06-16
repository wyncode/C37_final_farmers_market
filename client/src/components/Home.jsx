import React from 'react';
import Loveus from './Loveus';
import Footer from './footer/Footer';


const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the homepage</h1>
      <Loveus />
      <Footer/>
    </div>
  );
};

export default Home;

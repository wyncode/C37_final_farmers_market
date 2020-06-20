import React from 'react';
import Loveus from './Loveus';
import Footer from '../footer/Footer';
import Healthways from './Healthways';
import HowWorks from '../HowWorks';
import Community from '../community/Community';
import Aboutus from '../Aboutus';

const Home = () => {
  return (
    <div className="home">
      <Healthways />
      <Loveus />
      <HowWorks />

      <Aboutus />

      <Community />

      <Footer />
    </div>
  );
};

export default Home;

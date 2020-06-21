import React from 'react';
import Loveus from './Loveus';
import Footer from '../footer/Footer';
import Healthways from './Healthways';
import HowWorks from './HowWorks';
import Community from '../community/Community';


const Home = () => {
  return (
    <div className="home">
      <Healthways />
      <Loveus />
      <HowWorks />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;

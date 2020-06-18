import React from 'react';
import Loveus from './Loveus';
import Footer from './footer/Footer';
import Healthways from './Healthways'; 
import HowWorks from './HowWorks';
import Community from '../components/Community/Community'


const Home = () => {
  return (
    <div className="home">
      <Healthways/>
      <Loveus />
      <Community/>
      <HowWorks />
      <Footer/> 
    </div>
  );
};

export default Home;

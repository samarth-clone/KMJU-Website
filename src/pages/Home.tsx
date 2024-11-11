import React from 'react';

import Navbar  from '../components/Navbar';
import FlagBanner  from '../components/FlagBanner';
import Footer from '../components/Footer';


const Home: React.FC = () => {
  return (
    <div>
      Hello
      <FlagBanner />
      <Navbar />
      <Footer />
    </div>
  );
};



export default Home;

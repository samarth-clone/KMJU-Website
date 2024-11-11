import React from 'react';
import Navbar  from '../components/Navbar';
import FlagBanner  from '../components/FlagBanner';
import Footer from '../components/Footer';
import About from './About';
import Events from './Events';
import News from './News';
import Membership from './Membership';
import Contact from './Contact';
import './styles/globals.css';

const Home: React.FC = () => {
  return (
    <div>
      <FlagBanner />
      <Navbar />
      <main className="container">
        <About />
        <Events />
        <News />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

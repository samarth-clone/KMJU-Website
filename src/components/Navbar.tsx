import React from 'react';
import '../styles/Navbar.module.css';

const Navbar: React.FC = () => (
  <nav>
    <a href="#about">About Us</a>
    <a href="#events">Events</a>
    <a href="#news">News</a>
    <a href="#membership">Membership</a>
    <a href="#contact">Contact Us</a>
  </nav>
);

export default Navbar

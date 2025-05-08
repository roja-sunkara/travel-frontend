import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">✈️ TravelAssistant</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/search">Flights</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/chatbot">Assistant</Link>
        <Link to="/gps">GPS</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

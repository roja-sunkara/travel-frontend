import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>✈️ Travel Assistant</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;


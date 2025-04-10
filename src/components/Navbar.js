import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = async () => {
    try {
      await fetch("https://travel-backend-uqyt.onrender.com/logout", {
        method: "GET",
        credentials: "include"
      });
      localStorage.removeItem("isLoggedIn");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">Travel Assistant</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn ? (
          <>
            <span className="navbar-user">👤 Logged In</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

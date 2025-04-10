import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Travel Assistant 🧳✨</h1>
      <p>
        Plan your entire trip with a few clicks — Book tickets, find hotels, and get instant answers!
      </p>

      <div className="home-buttons">
        <button className="home-btn" onClick={() => navigate("/search")}>
          🎫 Search Tickets
        </button>
        <button className="home-btn" onClick={() => navigate("/hotels")}>
          🏨 Find Hotels
        </button>
        <button className="home-btn" onClick={() => navigate("/chatbot")}>
          🤖 Ask Chatbot
        </button>
      </div>

      <div className="feature-cards">
        <div className="card">
          <h3>🎫 Ticket Booking</h3>
          <p>Search trains and buses easily and plan your route with comfort.</p>
        </div>
        <div className="card">
          <h3>🏨 Hotel Finder</h3>
          <p>Explore top-rated hotels, budget stays, and best deals around.</p>
        </div>
        <div className="card">
          <h3>🤖 Smart Chatbot</h3>
          <p>Need help planning? Our AI assistant is here 24/7 for you.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;




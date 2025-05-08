import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">🌍 Welcome to Travel Assistant 🧳</h1>
      <p className="home-subtitle">
        Plan your entire journey with a few clicks — book tickets, explore hotels, chat with AI, and navigate in real-time!
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
        <button className="home-btn" onClick={() => navigate("/gps")}>
          📍 GPS Navigation
        </button>
      </div>

      <div className="feature-section">
        <h2 className="section-title">✨ Key Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>🎫 Ticket Booking</h3>
            <p>Search and book trains or buses easily with flexible travel options.</p>
          </div>
          <div className="card">
            <h3>🏨 Hotel Finder</h3>
            <p>Discover hotels that match your style, budget, and comfort.</p>
          </div>
          <div className="card">
            <h3>🤖 Smart Chatbot</h3>
            <p>Get travel tips, answers, and instant help from your AI travel buddy.</p>
          </div>
          <div className="card">
            <h3>📍 GPS Navigation</h3>
            <p>Track your location and navigate with real-time directions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

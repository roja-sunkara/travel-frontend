// src/App.js
import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TicketSearch from './components/TicketSearch';
import HotelSearch from './components/HotelSearch';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import GPSNavigation from './components/GPSNavigation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<TicketSearch />} />
        <Route path="/hotels" element={<HotelSearch />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gps" element={<GPSNavigation />} />
      </Routes>
    </Router>
  );
}

export default App;
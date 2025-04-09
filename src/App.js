import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TicketSearch from "./components/TicketSearch";
import HotelSearch from "./components/HotelSearch";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer"; // ✅ Add this

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<TicketSearch />} />
          <Route path="/hotels" element={<HotelSearch />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* ✅ Add this just below Routes */}
      </div>
    </BrowserRouter>
  );
}

export default App;








import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TicketSearch from "./components/TicketSearch";
import HotelSearch from "./components/HotelSearch";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./ProtectedRoute"; // ✅ Import this

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={
          <ProtectedRoute>
            <TicketSearch />
          </ProtectedRoute>
        } />
        <Route path="/hotels" element={
          <ProtectedRoute>
            <HotelSearch />
          </ProtectedRoute>
        } />
        <Route path="/chatbot" element={
          <ProtectedRoute>
            <Chatbot />
          </ProtectedRoute>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;











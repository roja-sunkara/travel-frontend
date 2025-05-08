import React, { useState } from "react";
import "./HotelSearch.css";
import config from '../config';

const HotelSearch = () => {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!city) {
      alert("Please enter a city");
      return;
    }
    
    setLoading(true);
    fetch(`${config.backendUrl}/api/HotelSearch?city=${city}&check_in=${checkIn}&check_out=${checkOut}`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setHotels(data.hotels || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching hotels:", err);
        setLoading(false);
        alert("Failed to fetch hotels. Please try again.");
      });
  };

  return (
    <div className="hotel-search-container">
      <h2>Search Hotels</h2>
      <div className="search-filters">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g., Chennai)"
          required
        />
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          placeholder="Check-in Date"
        />
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          placeholder="Check-out Date"
        />
        <button 
          onClick={handleSearch} 
          disabled={!city || loading}
        >
          {loading ? "Searching..." : "Find Hotels"}
        </button>
      </div>

      {loading && <div className="loading-spinner">Loading...</div>}

      <div className="hotels-list">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <h3>{hotel.name}</h3>
            <p><strong>Location:</strong> {hotel.address || city}</p>
            <p><strong>Price:</strong> ₹{hotel.price} per night</p>
            <p><strong>Rating:</strong> {hotel.rating}/5</p>
            {hotel.amenities && (
              <p><strong>Amenities:</strong> {hotel.amenities.join(", ")}</p>
            )}
          </div>
        ))}
        {!loading && hotels.length === 0 && (
          <p className="no-results">No hotels found. Try a different city.</p>
        )}
      </div>
    </div>
  );
};

export default HotelSearch;
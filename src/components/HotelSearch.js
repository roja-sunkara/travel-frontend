// Hotel.js
import React, { useState } from 'react';
import config from '../config'; // ✅ Import config.js

const Hotel = () => {
  const [city, setCity] = useState('');
  const [hotels, setHotels] = useState([]);

  const handleSearch = () => {
    fetch(`${config.backendUrl}/search_hotels`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city })
    })
      .then((res) => res.json())
      .then((data) => setHotels(data.hotels || []))
      .catch((err) => console.error("Error fetching hotels:", err));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Search Hotels</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border rounded p-2 m-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <ul className="mt-4">
        {hotels.map((hotel, index) => (
          <li key={index} className="p-2 border-b">{hotel}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hotel;


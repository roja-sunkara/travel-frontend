import React, { useState } from 'react';
import config from '../config'; // ✅ Importing backend URL

const HotelSearch = () => {
  const [city, setCity] = useState('');
  const [hotels, setHotels] = useState([]);

  const handleSearch = () => {
    // ✅ Use GET request with query parameter
    fetch(`${config.backendUrl}/search_hotels?city=${city}`)
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
          <li key={index} className="p-2 border-b">
            {hotel.name} - Rs.{hotel.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelSearch;


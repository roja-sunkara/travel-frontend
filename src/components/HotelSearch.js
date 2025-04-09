import React, { useState } from "react";
import "./HotelSearch.css";

function HotelSearch() {
  const [location, setLocation] = useState("");
  const [hotels, setHotels] = useState([]);

  const searchHotels = () => {
    setHotels([
      { id: 1, name: "Taj Hotel", price: "$120/night" },
      { id: 2, name: "Oberoi", price: "$150/night" },
    ]);
  };

  return (
    <div className="hotel-search">
      <h2>Search Hotels</h2>
      <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button onClick={searchHotels}>Search</button>
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card">
          <p>{hotel.name} - {hotel.price}</p>
        </div>
      ))}
    </div>
  );
}

export default HotelSearch;


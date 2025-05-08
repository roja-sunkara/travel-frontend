import React, { useState } from "react";
import "./TicketSearch.css";

function TicketSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sample ticket data - will show when you search
  const sampleTickets = [
    {
      id: 1,
      airline: "Air India",
      source: "Chennai",
      destination: "Bangalore",
      departure: "2025-05-20T08:00:00",
      arrival: "2025-05-20T10:30:00",
      price: 4500,
      duration: "2h 30m",
      seats: 5
    },
    {
      id: 2,
      airline: "IndiGo",
      source: "Delhi",
      destination: "Mumbai",
      departure: "2025-05-20T11:45:00",
      arrival: "2025-05-20T14:15:00",
      price: 5200,
      duration: "2h 30m",
      seats: 3
    },
    {
      id: 3,
      airline: "SpiceJet",
      source: "Kolkata",
      destination: "Hyderabad",
      departure: "2025-05-20T16:20:00",
      arrival: "2025-05-20T18:50:00",
      price: 3800,
      duration: "2h 30m",
      seats: 7
    }
  ];

  const searchTickets = () => {
    if (!from || !to) {
      alert("Please enter both 'From' and 'To' locations");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const filteredTickets = sampleTickets.filter(ticket => 
        ticket.source.toLowerCase().includes(from.toLowerCase()) && 
        ticket.destination.toLowerCase().includes(to.toLowerCase())
      );
      
      setTickets(filteredTickets);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="ticket-search-container">
      <h2>Search Tickets</h2>
      <div className="search-controls">
        <input
          type="text"
          placeholder="From (e.g., Chennai)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="To (e.g., Bangalore)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={searchTickets} disabled={loading}>
          {loading ? "Searching..." : "Search Tickets"}
        </button>
      </div>

      {loading && <div className="loading-spinner">Loading tickets...</div>}

      <div className="tickets-list">
        {tickets.length > 0 ? (
          tickets.map(ticket => (
            <div key={ticket.id} className="ticket-card">
              <div className="ticket-header">
                <h3>{ticket.airline}</h3>
                <span className="price">₹{ticket.price}</span>
              </div>
              <div className="ticket-route">
                <span>{ticket.source} → {ticket.destination}</span>
                <span className="seats">{ticket.seats} seats left</span>
              </div>
              <div className="ticket-timing">
                <div>
                  <span>Departure:</span>
                  <strong>{new Date(ticket.departure).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</strong>
                </div>
                <div>
                  <span>Arrival:</span>
                  <strong>{new Date(ticket.arrival).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</strong>
                </div>
                <div>
                  <span>Duration:</span>
                  <strong>{ticket.duration}</strong>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="no-results">No tickets found. Try a different search.</p>
        )}
      </div>
    </div>
  );
}

export default TicketSearch;
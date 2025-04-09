import React, { useState } from "react";
import "./TicketSearch.css";

function TicketSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tickets, setTickets] = useState([]);

  const searchTickets = () => {
    // Dummy ticket data for now
    setTickets([
      { id: 1, airline: "Air India", price: "$300" },
      { id: 2, airline: "IndiGo", price: "$280" },
    ]);
  };

  return (
    <div className="ticket-search">
      <h2>Search Tickets</h2>
      <input placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={searchTickets}>Search</button>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="ticket-card">
          <p>{ticket.airline} - {ticket.price}</p>
        </div>
      ))}
    </div>
  );
}

export default TicketSearch;



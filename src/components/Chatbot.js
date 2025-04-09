import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await axios.post("http://localhost:5000/chat", { message: userInput });
    setResponse(res.data.response);
  };

  return (
    <div className="chatbot-container">
      <h2>AI Chatbot 🤖</h2>
      <textarea placeholder="Ask something..." value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <div className="response">{response}</div>
    </div>
  );
}

export default Chatbot;


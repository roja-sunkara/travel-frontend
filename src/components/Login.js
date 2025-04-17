import React, { useState } from 'react';
import "./Auth.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://travel-backend-uqyt.onrender.com/login",
        { email, password },
        { withCredentials: true }
      );

      setMessage(res.data.message);
      setIsError(res.data.message !== "Login successful");

      if (res.data.message === "Login successful") {
        localStorage.setItem("userEmail", email);
        setTimeout(() => navigate('/hotel-search'), 1000);
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("Login failed");
      setIsError(true);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && (
        <div className={`auth-message ${isError ? 'error' : 'success'}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import "./Auth.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://travel-backend-uqyt.onrender.com/register",
        { name, email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      setMessage(res.data.message);
      if (res.data.message === "User registered successfully") {
        setTimeout(() => navigate('/login'), 1000);
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
      </form>
      <p className="auth-message">{message}</p>
    </div>
  );
}

export default Register;

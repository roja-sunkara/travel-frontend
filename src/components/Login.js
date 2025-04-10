import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://travel-backend-uqyt.onrender.com/login', {
        email,
        password,
      }, { withCredentials: true });

      setMessage(res.data.message);

      if (res.data.message === "Login successful") {
        setTimeout(() => {
          navigate("/");
        }, 1000); // Wait 1 second before redirecting
      }
    } catch (err) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;



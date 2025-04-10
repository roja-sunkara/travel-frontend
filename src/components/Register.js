import React, { useState } from 'react';
import "./Auth.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://travel-backend-uqyt.onrender.com/login", ..., {
        email,
        password,
      });

      setMessage(res.data.message);

      if (res.data.message === "User registered successfully") {
        setTimeout(() => {
          navigate('/');
        }, 1000); // Redirect after 1 second
      }
    } catch (err) {
      setMessage('Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Register;



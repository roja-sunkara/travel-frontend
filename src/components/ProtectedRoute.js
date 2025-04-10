import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios.get("https://travel-backend-uqyt.onrender.com/user", { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(!!res.data.email);
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) return <p>Loading...</p>;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

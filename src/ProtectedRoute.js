// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // If you removed authentication, just return children directly
  return children;
  
  /* If you still want protection logic:
  const isAuthenticated = false; // Replace with your auth check
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Changed from "/login" to "/"
  }
  return children;
  */
};

export default ProtectedRoute;
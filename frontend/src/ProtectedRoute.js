// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Checking if token exists (simple method)

  if (!token) {
    return <Navigate to="/signin" />; // if no token, go to SignIn
  }

  return children;
};

export default ProtectedRoute;

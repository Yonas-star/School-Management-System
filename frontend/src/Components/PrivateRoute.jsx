import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/login" />;

  const decoded = jwtDecode(token); // Correct function name
  if (decoded.role !== role) return <Navigate to="/unauthorized" />;

  return children;
};

export default PrivateRoute;

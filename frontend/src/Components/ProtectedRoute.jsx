import { Navigate, Outlet } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: true,
  role: 'admin', // Change this to 'teacher' or 'student' for testing
};

const ProtectedRoute = ({ role }) => {
  return fakeAuth.isAuthenticated && fakeAuth.role === role ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;

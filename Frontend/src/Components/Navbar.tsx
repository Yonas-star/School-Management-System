import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">School Management</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
      <Link className="login-button" to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
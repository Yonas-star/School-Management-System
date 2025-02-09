// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div className="container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="/jvsa.jpg"
          alt="JVSA Logo"
          className="rounded-circle shadow-sm me-2"
          style={{ height: '50px', width: '50px', objectFit: 'cover' }}
        />
        <span className="fw-bold text-white">JVSA School</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

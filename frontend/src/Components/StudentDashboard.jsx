import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Routes, Route, Link } from "react-router-dom";
import DashboardHeader from "../student-dashboard/Header";

const Profile = () => (
  <div>
    <h2>Profile</h2>
    <p>Manage your personal details here.</p>
  </div>
);
const Results = () => (
  <div>
    <h2>Results</h2>
    <p>View your academic results.</p>
  </div>
);
const Announcements = () => (
  <div>
    <h2>Announcements</h2>
    <p>Stay updated with the latest news.</p>
  </div>
);
const Schedule = () => (
  <div>
    <h2>Schedule</h2>
    <p>Check your class schedule.</p>
  </div>
);

const StudentDashboard = () => {
  const [user, setUser] = useState({ username: "", role: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUser({ username: decoded.username, role: decoded.role });
    }
  }, []);

  return (
    <>
      <DashboardHeader />
      <div style={{ display: "flex" }}>
        <nav style={{ width: "200px", background: "#f4f4f4", padding: "20px" }}>
          <h3>Welcome, {user.username}</h3>
          <p>Role: {user.role}</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/student-dashboard/profile">Profile</Link>
            </li>
            <li>
              <Link to="/student-dashboard/results">Results</Link>
            </li>
            <li>
              <Link to="/student-dashboard/announcements">Announcements</Link>
            </li>
            <li>
              <Link to="/student-dashboard/schedule">Schedule</Link>
            </li>
          </ul>
        </nav>

        <main style={{ padding: "20px", flexGrow: 1 }}>
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="results" element={<Results />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="schedule" element={<Schedule />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default StudentDashboard;

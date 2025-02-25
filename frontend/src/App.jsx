import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';               // ✅ Import Home Component
import Login from './Components/Login';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './Components/StudentDashboard';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './student-dashboard/Profile';
import Announcements from './student-dashboard/Announcements';
import Results from './student-dashboard/Results';
import Schedule from './student-dashboard/Schedule';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />        {/* ✅ Home Page Route */}
        <Route path="/login" element={<Login />} />

        <Route path="/contact" element={<Contact/>} />
        <Route
          path="/admin-dashboard"
          element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>}
        />
        <Route
          path="/teacher-dashboard"
          element={<PrivateRoute role="teacher"><TeacherDashboard /></PrivateRoute>}
        />
      <Route path="/student-dashboard/*" element={<PrivateRoute role="student"><StudentDashboard /></PrivateRoute>} />
           <Route
          path="/student-dashboard/profile"
          element={<PrivateRoute role="student"><Profile /></PrivateRoute>}
        />
          <Route
          path="/student-dashboard/Announcments"
          element={<PrivateRoute role="student"><Announcements /></PrivateRoute>}
        />

      <Route
          path="/student-dashboard/Results"
          element={<PrivateRoute role="student"><Results /></PrivateRoute>}
        />
         <Route
          path="/student-dashboard/Schedule"
          element={<PrivateRoute role="student"><Schedule /></PrivateRoute>}
        /></Routes>
    </Router>
  );
}

export default App;

// src/components/Home.jsx
import React from 'react';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom'; // ✅ Added import
import "./Home.css"
import Navbar from './Navbar';
import StudentRegistration from './Studentregistration';
const Home = () => {
  const navigate = useNavigate(); // ✅ Correct placement

  return (
    <>
        <Navbar/>
    <div className="container mt-5">
      {/* Header Section */}
      <section className="text-center mb-5" style={{ marginBottom: '80px' }}>
        <img
          src="/jvsa.jpg"
          alt="JVSA School Logo"
          className="logo mb-4 rounded rounded-pill"
          style={{ maxHeight: '200px', width: 'auto' }}
        />
        <h1 className="display-4">Welcome to JVSA School</h1>
        <p className="lead">Empowering the Future, One Student at a Time</p>
        <Button type="primary" size="large" onClick={() => navigate('/login')}>Signin</Button> {/* ✅ Fixed */}
      </section>

      {/* About Us Section */}
      <section className="mb-5" style={{ marginBottom: '80px' }}>
        <h2>About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <p>
              Located in Addis Ababa, Kolfe Keranio, Ayer Tena, JVSA School is dedicated to nurturing young minds through quality education and innovative learning methods. Our goal is to equip students with the knowledge and skills necessary to thrive in a rapidly changing world.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/about-us.jpg"
              alt="About Us"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="mb-5" style={{ marginBottom: '80px' }}>
        <h2>Our Programs</h2>
        <div className="row">
          <div className="col-md-4">
            <Card title="Primary Education" bordered={false}>
              Building strong academic foundations and fostering a love for learning.
            </Card>
          </div>
          <div className="col-md-4">
            <Card title="Secondary Education" bordered={false}>
              Preparing students for future success with advanced learning methods.
            </Card>
          </div>
          <div className="col-md-4">
            <Card title="Extracurricular Activities" bordered={false}>
              Fostering creativity, teamwork, and leadership through various activities.
            </Card>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="mb-5" style={{ marginBottom: '80px' }}>
        <h2>Our Achievements</h2>
        <div className="row">
          <div className="col-md-6">
            <p>
              We take pride in our students' outstanding academic performances, sports achievements, and community engagement. Our school is a hub for creativity, critical thinking, and leadership.
            </p>
            <ul>
              <li>Top Academic Performers in National Exams</li>
              <li>Champions in Regional Sports Tournaments</li>
              <li>Active Participation in Community Service and Outreach Programs</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src="/achievements.jpg"
              alt="Our Achievements"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="mb-5" style={{ marginBottom: '80px' }}>
        <h2>What Our Students Say</h2>
        <div className="row">
          <div className="col-md-6">
            <Card bordered={false} className="mb-3">
              <p>"JVSA School has transformed my life with exceptional teachers and a friendly environment." - Student A</p>
            </Card>
            <Card bordered={false}>
              <p>"I love the extracurricular activities and supportive staff at JVSA." - Student B</p>
            </Card>
          </div>
          <div className="col-md-6">
            <img
              src="/testimonials.jpg"
              alt="Student Testimonials"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mb-5" style={{ marginBottom: '80px' }}>
        <h2>Join Us Today!</h2>
        <p>Be a part of our growing family. Together, we can create a brighter future for the next generation.</p>
        <Button type="primary" size="large" onClick={() => navigate('/login')}>Signin</Button> {/* ✅ Added onClick */}
      </section>
    </div>
    <StudentRegistration/>
    </>

  );
};

export default Home;

import React from "react";
import "../App.css";
import schoolLogo from "../../public/JVSA.jpg"; // Ensure the logo is in the assets folder
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <img src={schoolLogo} alt="JVSA School Logo" className="logo" />
          <h1 className="title">Joint Vision Success Academy</h1>
          <p className="subtitle">Shaping Future Leaders</p>
          <Link to="/login" className="cta-button">Login</Link>
          <Link to="/register" className="cta-button">Register</Link>
          </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p>
            At JVSA, located in Addis Ababa, Ethiopia, we are dedicated to providing world-class education that not only imparts academic knowledge but also nurtures the holistic development of students. Our approach blends innovation, tradition, and values to shape tomorrow's leaders.
          </p>
          <p>
            Our experienced educators foster a collaborative environment where students learn, grow, and thrive. Our campus facilities are designed to empower students to reach their full potential.
          </p>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="admissions" id="admissions">
        <div className="admissions-content">
          <h2 className="section-title">Admissions</h2>
          <p>
            We invite students to be part of our vibrant community. At JVSA, we provide an inclusive, dynamic, and intellectually stimulating environment that inspires growth, excellence, and leadership.
          </p>
          <p>
            We are accepting applications for the upcoming academic year. Start your journey with us and experience the transformative power of education at JVSA.
          </p>
          <a href="mailto:yonaskassahunyoka@gmail.com" className="cta-button">Apply Now</a>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="contact" id="contact">
        <div className="contact-content">
          <h2 className="section-title">Contact Us</h2>
          <p>
            We’d love to hear from you! Whether you have questions about our programs, admissions, or anything else, feel free to reach out.
          </p>
          <p>Email: <a href="mailto:yonaskassahunyoka@gmail.com">yonaskassahunyoka@gmail.com</a></p>
          <p>Location: Kolfe Keranio, Ayer Tena, Addis Ababa, Ethiopia</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

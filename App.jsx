import React from "react";
import "./App.css";
import {
  FaHome,
  FaUserFriends,
  FaPenFancy,
  FaUsers,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import collegeImage from "./assets/college.jpeg"; 

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">CampusConnect</div>
          <ul className="nav-links">
            <li><FaHome /> Home</li>
            <li><FaUserFriends /> Connect</li>
            <li><FaPenFancy /> Storyboard</li>
            <li><FaUsers /> People</li>
            <li><FaEnvelope /></li>
            <li><FaUserCircle /></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h1>Connect,<br />Learn<br />and Grow</h1>
          </div>
          <div className="hero-image">
            <img src={collegeImage} alt="College" />
          </div>
        </section>

        {/* Alumni Stories */}
        <section className="stories-section">
          <h2>Successful Alumni Stories</h2>
          <div className="story-containers">
            <div className="story-box">
              <h3>Sneha Reddy</h3>
              <p>Sneha graduated in 2018 and is now a Product Manager at Google. Her journey from a coding enthusiast to a leader in tech is an inspiration to all.</p>
            </div>
            <div className="story-box">
              <h3>Arjun Varma</h3>
              <p>After graduating in 2019, Arjun founded his own cybersecurity startup that was acquired by a leading MNC. He credits the community for his early growth.</p>
            </div>
            <div className="story-box">
              <h3>Divya Patel</h3>
              <p>Divya, a data scientist at Microsoft, has published multiple research papers and is a mentor for students aspiring to enter AI and ML fields.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

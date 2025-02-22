import React from 'react';
import { FaLeaf, FaHandshake, FaBolt } from "react-icons/fa";
import "./css/team.css";

function Team() {
  return (
    <div className="team">
      <h1>Team</h1> 
      <h2>Meet the Visionaries Behind Our Mission</h2> 
      <p>
        Our team is passionate about sustainability and innovation. With expertise in waste management, 
        logistics, and renewable energy, we work tirelessly to connect hotels and FPUs, 
        ensuring a smooth and efficient process.
      </p>

      <h3>Our Core Values:</h3>
      <ul className="core-values">
        <li><FaLeaf className="icon" /> <strong>Sustainability</strong> – Driving eco-friendly waste solutions.</li>
        <li><FaHandshake className="icon" /> <strong>Collaboration</strong> – Building strong partnerships for a greener future.</li>
        <li><FaBolt className="icon" /> <strong>Innovation</strong> – Leveraging technology for efficient waste-to-energy conversion.</li>
      </ul>

      <p className="join-mission">💡 <strong>Want to join our mission? Connect with us today!</strong></p>
    </div>
  );
}

export default Team;
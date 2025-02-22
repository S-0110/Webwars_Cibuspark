import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import "./css/home.css"

function Home() {
   return (
      <div className="hotel">
        <h1>Hotels</h1> 
        <h2>Sustainable Food Waste Management for Hotels</h2> 
        <p>
          Hotels generate large amounts of food waste daily. Instead of sending it to landfills, 
          partner with us to turn waste into energy. We offer a hassle-free solution to collect and 
          deliver your excess food to food processing units, ensuring a responsible and eco-friendly approach.
        </p>
  
        <h3>Why Partner With Us?</h3>
        <ul className="check-list">
          <li><FaCheckCircle className="icon" /> Easy Waste Management – We handle the logistics of food waste collection.</li>
          <li><FaCheckCircle className="icon" /> Cost-Effective – Reduce disposal costs and contribute to sustainability.</li>
          <li><FaCheckCircle className="icon" /> Eco-Friendly Practices – Support green initiatives and enhance your brand’s reputation.</li>
        </ul>
  
        <p>💡 <strong>Join our network and make a difference today!</strong></p>
      </div>
    );
}

export default Home;
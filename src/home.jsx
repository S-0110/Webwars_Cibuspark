import React from 'react';
import "./css/home.css";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1> 
      <h2>Bridging the Gap Between Hotels & Food Processing Units for a Sustainable Future</h2> 
      <p>
        Food waste is a growing challenge, but it also presents an opportunity. We connect hotels with food processing 
        units (FPUs) to ensure that excess food is not wasted but transformed into valuable energy. 
        Our platform streamlines food waste collection, transportation, and processing, making sustainability effortless for businesses.
      </p>

      <p className="join-message">💡 <strong>Join us in reducing waste and generating renewable energy!</strong></p>
    </div>
  );
}

export default Home;
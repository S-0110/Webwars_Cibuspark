import React from 'react'
import './styles.css';


const About = () => {
  return (
    <div><div className="container" id="about">
    <div className="content">
      <h5 className="section-title">ABOUT THE CAFE</h5>
      <p>The Cafe was founded in blabla by Mr. Smith...</p>
      <p>We serve fresh made-to-order breakfast...</p>
      <div className="panel">
        <p><i>"Use products from nature for what it's worth..."</i></p>
        <p>Chef, Coffeeist and Owner: Liam Brown</p>
      </div>
      <img src="./assets/2175358.png" alt="Cafe" />
      <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
      <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
    </div>
  </div></div>
  )
}

export default About
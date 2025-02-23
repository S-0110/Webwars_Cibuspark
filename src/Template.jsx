import React from "react";
import "./css/styles.css";
import imga from "./assets/frame.jpg";
// import Navbar from "./Navbar.jsx"

const Template = () => {
  return (
    <div className="container">
      
      {/* Header */}
      <header className="header">
        <h1 className="logo">Cibuspark</h1>
        <nav className="nav">
          <a href="./home">Home</a>
          <a href="./hotel">Hotel</a>
          <a href="./Fpu">Fpus</a>
          <a href="/Team">Team</a>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="hero">
            <img src={imga} alt="" />
        
       
      </section>
      
      

      {/* Services Section */}
      <section className="services">
        <h2>CIBUSPARK</h2>
        <div className="service-grid">
          <div className="service-card">
           
            <h3>HOTELS</h3>
            <a href="/hotel">
        <button>Know More</button>
            </a>
          </div>
          <div className="service-card">
            <h3>FPUs</h3>
            <a href="/fpu">
            <button>Know More</button>
            </a>
          </div>
          <div className="service-card">
            <h3>Vision</h3>
            <a href="/home">
            <button>Know More</button>
            </a>
          </div>
          <div className="service-card">
            <h3>Our Team</h3>
            <a href="/Team"> 
            <button>Know More</button> 
            </a> 
            </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch Today!</h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScEq1NlgwGrny1VzMRDoGdXyulhTGK7Zl56rPo1Q3hjn1IMCw/viewform?usp=dialog">
        <button className="cta">Contact Us</button>
        </a>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>© Cibuspark All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Template;

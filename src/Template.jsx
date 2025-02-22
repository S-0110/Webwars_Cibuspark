import React from "react";
import "./css/styles.css";
import imga from "./assets/frame.jpg";

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
      
      {/* Stats Section
      <section className="stats">
        <div>
          <h3>2000+</h3>
          <p>Companies Served</p>
        </div>
        <div>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>800+</h3>
          <p>Hours of Digital Content</p>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="services">
        <h2>CIBUSPARK</h2>
        <div className="service-grid">
          <div className="service-card">
           
            <h3>HOTELS</h3>
        <button>Know More</button>
          </div>
          <div className="service-card">
            <h3>FPUs</h3>
            <button>Know More</button>
          </div>
          <div className="service-card">
            <h3>Vision</h3>
            <button>Know More</button>
          </div>
          <div className="service-card">
            <h3>Our Team</h3>
            <button>Know More</button>          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch Today!</h2>
        <button className="cta">Contact Us</button>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>© Cibuspark All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Template;

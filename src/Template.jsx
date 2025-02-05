import React, { useState } from "react";
import './styles.css';
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Home from './Homediv.jsx'
// import Menu from './menu.jsx'

const Template = () => {
  const [activeMenu, setActiveMenu] = useState("Eat");

  const openMenu = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar/>      

      {/* Header */}
      <Header/>

      {/* Home */}
      <Home/>
      {/* About Section */}
      <About/>
      

      {/* Menu Section */}
      
      <div className="container" id="menu">
        <div className="content">
          <h5 className="section-title">Contact Form</h5>
          <div className="tabs">
            <div className={`tab ${activeMenu === 'eat' ? 'active' : ''}`} onClick={() => openMenu('eat')}>
              Customer
            </div>
            <div className={`tab ${activeMenu === 'Drinks' ? 'active' : ''}`} onClick={() => openMenu('Drinks')}>
              Organization
            </div>
          </div>

          {/* Eat Menu */}
          <div>  {activeMenu === 'eat' && (
        <div className="menu-section">
          <h5>Benefits for Hotels</h5>
          <p>1. Waste Reduction: Decrease the volume of food waste sent to landfills, contributing to environmental conservation.</p>
          <p>2. Cost Savings: Potentially lower waste disposal costs through our efficient collection services.</p>
          <p>3. Sustainability Commitment: Enhance your hotel's reputation by participating in eco-friendly initiatives.</p>
          
        </div>
      )}</div>

          {/* Drinks Menu */}
          {activeMenu === 'Drinks' && (
            <div className="menu-section">
              <h5>Benefits for Food Processing Units:</h5>
              <p>1. Reliable Supply: Access a consistent source of organic material suitable for biofuel production.
              </p>
              <p>2. Quality Assurance: Receive high-quality feedstock, ensuring optimal processing efficiency.
              </p>
              <p>3. Environmental Impact: Play a crucial role in reducing greenhouse gas emissions by diverting food waste from landfills.</p>
             
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
     

      {/* Footer */}
    
    </div>
  );
};

export default Template;

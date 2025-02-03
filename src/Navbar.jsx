import React from 'react'
import './styles.css';


const Navbar = () => {
  return (
    <div><div className="navbar">
    <div className="navbar-link">
      <a href="#">HOME</a>
    </div>
    <div className="navbar-link">
      <a href="#about">ABOUT</a>
    </div>
    <div className="navbar-link">
      <a href="#menu">MENU</a>
    </div>
    <div className="navbar-link">
      <a href="#where">WHERE</a>
    </div>
  </div></div>
  )
}

export default Navbar;
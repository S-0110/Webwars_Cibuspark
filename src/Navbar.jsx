import React from 'react'
import './css/navbar.css';


const Navbar = () => {
  return (
    <div><div className="navbar">
    <div className="navbar-link btn">
      <a href="#">HOME</a>
    </div>
    <div className="navbar-link btn">
      <a href="#about">ABOUT</a>
    </div>
    <div className="navbar-link btn">
      <a href="#menu">MENU</a>
    </div>
    <div className="navbar-link btn">
      <a href="#where">WHERE</a>
    </div>
  </div></div>
  )
}

export default Navbar;
import React, { useState } from "react";
import './styles.css';
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
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

      {/* About Section */}
      <About/>
      

      {/* Menu Section */}
      
      <div className="container" id="menu">
        <div className="content">
          <h5 className="section-title">THE MENU</h5>
          <div className="tabs">
            <div className={`tab ${activeMenu === 'Eat' ? 'active' : ''}`} onClick={() => openMenu('Eat')}>
              Eat
            </div>
            <div className={`tab ${activeMenu === 'Drinks' ? 'active' : ''}`} onClick={() => openMenu('Drinks')}>
              Drink
            </div>
          </div>

          {/* Eat Menu */}
          <div>  {activeMenu === 'Eat' && (
        <div className="menu-section">
          <h5>Bread Basket</h5>
          <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
          <h5>Honey Almond Granola with Fruits</h5>
          <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
          <h5>Belgian Waffle</h5>
          <p>Vanilla flavored batter with malted flour 7.50</p>
          <h5>Scrambled eggs</h5>
          <p>Scrambled eggs with green onions 7.50</p>
          <h5>Blueberry Pancakes</h5>
          <p>With syrup, butter and lots of berries 8.50</p>
        </div>
      )}</div>

          {/* Drinks Menu */}
          {activeMenu === 'Drinks' && (
            <div className="menu-section">
              <h5>Coffee</h5>
              <p>Regular coffee 2.50</p>
              <h5>Chocolato</h5>
              <p>Chocolate espresso with milk 4.50</p>
              <h5>Corretto</h5>
              <p>Whiskey and coffee 5.00</p>
              <h5>Iced tea</h5>
              <p>Hot tea, except not hot 3.00</p>
              <h5>Soda</h5>
              <p>Coke, Sprite, Fanta, etc. 2.50</p>
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

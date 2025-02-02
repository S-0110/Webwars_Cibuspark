import React, { useState } from 'react';
import './styles.css';

const Cafe = () => {
  const [activeMenu, setActiveMenu] = useState('Eat');

  return (
    <div>
      <div className="top-nav">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#menu">MENU</a>
        <a href="#where">WHERE</a>
      </div>

      <header className="bgimg" id="home">
        <div className="overlay">Open from 6am to 5pm</div>
        <div className="center-text">the<br />Cafe</div>
        <div className="overlay right">15 Adr street, 5015</div>
      </header>

      <div className="container" id="about">
        <h2>ABOUT THE CAFE</h2>
        <p>The Cafe was founded by Mr. Smith...</p>
        <blockquote>"Use products from nature for what it's worth - but never too early, nor too late." - Liam Brown</blockquote>
        <img src="/w3images/coffeeshop.jpg" alt="Cafe" className="image" />
        <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
        <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
      </div>

      <div className="container" id="menu">
        <h2>THE MENU</h2>
        <div className="menu-tabs">
          <button onClick={() => setActiveMenu('Eat')} className={activeMenu === 'Eat' ? 'active' : ''}>Eat</button>
          <button onClick={() => setActiveMenu('Drink')} className={activeMenu === 'Drink' ? 'active' : ''}>Drink</button>
        </div>
        {activeMenu === 'Eat' && (
          <div className="menu-content">
            <h3>Bread Basket</h3>
            <p>Assortment of fresh baked fruit breads and muffins - $5.50</p>
          </div>
        )}
        {activeMenu === 'Drink' && (
          <div className="menu-content">
            <h3>Coffee</h3>
            <p>Regular coffee - $2.50</p>
          </div>
        )}
      </div>

      <div className="container" id="where">
        <h2>WHERE TO FIND US</h2>
        <p>Find us at some address...</p>
        <img src="/w3images/map.jpg" alt="Map" className="image" />
        <form>
          <input type="text" placeholder="Name" required />
          <input type="number" placeholder="How many people" required />
          <input type="datetime-local" required />
          <input type="text" placeholder="Message / Special requirements" required />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>

      <footer>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a></p>
      </footer>
    </div>
  );
};

export default Cafe;

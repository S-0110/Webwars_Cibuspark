import React from 'react'
import './styles.css';
import myVideo from './assets/food.mp4';


const Header = () => {
  return (
    <div className='images'>
          <header className="bgimg">
          <video  loop autoPlay muted  width="640" height="360"><source src={myVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            
        <div className="header-bottomleft">
          {/* <span className="header-tag">Open from 6am to 5pm</span> */}
        </div>
        <div className="header-middle">
          <span className="header-text harsh">CibusPark</span>
        </div>
        <div className="header-bottomright">
          {/* <span className="header-text">15 Adr street, 5015</span> */}
        </div>
      </header>
    </div>
  )
}

export default Header
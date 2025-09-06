import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        {/* Left column */}
        <div className="footer-content-left">
          <img src={assets.logo} alt=''/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            perferendis praesentium accusamus excepturi saepe at placeat nemo quis vitae quo.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt=''/>
          </div>
        </div>

        {/* Center column */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>0414898989</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>

      </div>

     <hr/>
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer

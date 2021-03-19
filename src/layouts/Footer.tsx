import React from 'react';
import { ReactComponent as Facebook } from '../assets/social/facebook-white.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="items">
        <p>Home</p>
        <p>Terms And Conditions</p>
        <p>Privacy Policy</p>
        <p>Collection Statement</p>
        <p>Help</p>
        <p>Manage Account</p>
      </div>
      <div className="socials-store">
        <div className="socials">
          <div>
            <Facebook />
          </div>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="store">
          <p>App</p>
          <p>Play</p>
          <p>Microsoft</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

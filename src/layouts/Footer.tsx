import React from 'react';
import Facebook from '../assets/social/facebook-white.svg';
import Twitter from '../assets/social/twitter-white.svg';
import Instagram from '../assets/social/instagram-white.svg';
import AppStore from '../assets/store/app-store.svg';
import PlayStore from '../assets/store/play-store.svg';
import Windows from '../assets/store/windows-store.svg';

const Footer = () => {
  return (
    <footer>
      <div className="items">
        <p>Home</p>
        <span className="vertical-line" />
        <p>Terms And Conditions</p>
        <span className="vertical-line" />

        <p>Privacy Policy</p>
        <span className="vertical-line" />

        <p>Collection Statement</p>
        <span className="vertical-line" />

        <p>Help</p>
        <span className="vertical-line" />

        <p>Manage Account</p>
      </div>
      <div>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</div>
      <div className="socials-store">
        <div className="socials">
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagram} alt="instagram" />
        </div>
        <div className="store">
          <img src={AppStore} alt="app store" />
          <img src={PlayStore} alt="play store" />
          <img src={Windows} alt="window store" className="windows" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

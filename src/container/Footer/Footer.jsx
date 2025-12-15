import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensanss">sujalilong@gmail.com</p>
        <p className="p__opensanss">Dimapur,Nagaland</p>
        <p className="p__opensanss">797112</p>
      </div>

      <div className="app__footer-links_logo">
       
        <p className="p__opensanss">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='https://www.instagram.com/suja_thonger?igsh=MWg1aWtrdWV6aDRzbA=='>
          <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensanss">Monday-Friday:</p>
        <p className="p__opensanss">010:00 am - 06:00 pm</p>
        <p className="p__opensanss">Saturday-Sunday:</p>
        <p className="p__opensanss">12:00 pm - 7:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensanss">2025 Suja Sangtam. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;

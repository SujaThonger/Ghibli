import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Hello, my name is Suja. I am a web developer and I specialize in creating clean, responsive, and user-friendly websites.
I currently offer custom website development services at affordable rates, making professional web solutions accessible for individuals and small businesses. I am committed to delivering high-quality work tailored to each client’s needs.</p>
       {/* <a href=''><button type="button" className="custom__button">Link to your website or socials</button></a> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Intro</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Your website is your digital first impression — make it count. I create modern, responsive portfolio websites designed to highlight your work and elevate your online presence — simple, stylish, and purpose-driven.</p>
        {/* <a href=''><button type="button" className="custom__button">Know More</button></a> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
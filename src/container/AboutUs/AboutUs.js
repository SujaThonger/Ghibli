import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">From the hills of Nagaland, hails a wandering soul looking to find his own place in the world. To fulfill his destiny and finish the race as a faithful servant of the Lord.</p>
       <a href=''><button type="button" className="custom__button">Know More</button></a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Intro</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Hello, dear reader. If you are here, then this moment exists. I created this space to leave a trace of myself in a world that moves relentlessly forward. It may be lost, unread, forgotten—but does that diminish its meaning? I think not. Existence does not require an audience to be real. Even so, I felt compelled to leave something tangible behind, a quiet proof of presence.</p>
        <a href=''><button type="button" className="custom__button">Know More</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;
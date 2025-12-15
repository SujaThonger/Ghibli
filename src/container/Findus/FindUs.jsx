import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Suja Thonger</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Thank you for visiting and giving me your time. I coded this website on my own using React. If you liked it and want a custom made website of your own, you can reach me through my email or through my socials.</p>
        <p className="p__cormorant" style={{ color: '#2E4A5A', margin: '2rem 0' }}>Email</p>
        <p className="p__opensans">sujalilong@gmail.com</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;

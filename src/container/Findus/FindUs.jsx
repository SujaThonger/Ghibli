import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Suja Sangtam</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Thanks for stopping by! This website was built entirely by me using React. If you liked what you see and want your own custom website, reach out to me through email or my social media — let’s create something amazing together!</p>
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

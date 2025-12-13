import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="SushiTech" />
      <h1 className="headtext__cormorant">Thank you for visiting</h1>
      <p className="p__opensans">“Once you’ve met someone, you never really forget them.” — "Spirited Away", 2001</p>
    </div>
  </div>
);

export default Newsletter;

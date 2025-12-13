import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Founder.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Director's word" />
      <h1 className="headtext__cormorant">What he believes in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Many of my movies have strong female leads- brave, self-sufficient</p>
        </div>
        <p className="p__opensans">girls that don't think twice about fighting for what they believe with all their heart. They'll need a friend, or a supporter, but never a savior. Any woman is just as capable of being a hero as any man.</p>
      </div>

      <div className="app__chef-sign">
        <p>Hayao Miyazaki</p>
        <p className="p__opensans">Founder & Director</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
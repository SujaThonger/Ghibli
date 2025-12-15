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
      <SubHeading title="Author's word" />
      <h1 className="headtext__cormorant">What I believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">The world has seen all the movies, heard all the songs, </p>
        </div>
        <p className="p__opensans">read all the poems, experienced everything there ever was and yet it calls you by name to watch you do it all over again your way.</p>
      </div>

      <div className="app__chef-sign">
        <p>Suja Sangtam</p>
        <p className="p__opensans"></p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
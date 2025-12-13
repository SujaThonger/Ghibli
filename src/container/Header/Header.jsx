import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Perfecting the art" />
      <h1 className="app__header-h1">The World Of Ghibli</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>"Whenever someone creates something with all of their heart, then that creation is given a soul." <br /> - The Baron</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

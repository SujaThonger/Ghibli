import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="The Art of Life" />
      <h1 className="app__header-h1">Suja Sangtam</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>"It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection." <br /> - Bhagavad Gita</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

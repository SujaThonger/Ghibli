import React from 'react';

import { SubHeading, MovieItem } from '../../components';
import { data, images } from '../../constants';
import './Movies.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="movies">
    <div className="app__specialMenu-title">
      <SubHeading title="Life goes on" />
      <h1 className="headtext__cormorant">Projects</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MovieItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      
    </div>

    <div style={{ marginTop: 15 }}>
      <a href='https://greensort.in/'><button type="button" className="custom__button">View</button></a>
    </div>
  </div>
);

export default SpecialMenu;

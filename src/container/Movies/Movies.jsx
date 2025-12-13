import React from 'react';

import { SubHeading, MovieItem } from '../../components';
import { data, images } from '../../constants';
import './Movies.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="movies">
    <div className="app__specialMenu-title">
      <SubHeading title="Movies that stir your heart" />
      <h1 className="headtext__cormorant">Ghibli Movies</h1>
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

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MovieItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <a href='https://en.wikipedia.org/wiki/List_of_Studio_Ghibli_works'><button type="button" className="custom__button">View More</button></a>
    </div>
  </div>
);

export default SpecialMenu;

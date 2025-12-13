import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Ghibli</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Studio Ghibli's films often explore themes of nature, technology, friendship, and the struggles of growing up, while also highlighting the importance of environmentalism and pacifism. The studio has a distinct art style and a reputation for meticulously detailed animation, often creating rich, immersive landscapes and complex characters.</p>
       <a href='https://en.wikipedia.org/wiki/Studio_Ghibli'><button type="button" className="custom__button">Know More</button></a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Ghibli History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Studio Ghibli is a renowned Japanese animation film studio founded in 1985 by directors Hayao Miyazaki and Isao Takahata, and producer Toshio Suzuki. The studio gained international acclaim with films such as "My Neighbor Totoro" (1988), "Spirited Away" (2001), which won an Academy Award for Best Animated Feature, "Princess Mononoke" (1997), and "Howl's Moving Castle" (2004).</p>
        <a href='https://en.wikipedia.org/wiki/Studio_Ghibli'><button type="button" className="custom__button">Know More</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;
import React from 'react';

import { AboutUs, FindUs, Footer, Founder, Gallery, Header, Intro, Laurels, Movies,} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Movies />
    <Founder />
    {/* <Intro /> */}
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
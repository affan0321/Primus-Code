import React from 'react';
import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import Partner from './componentes/Partner';
import Work from './componentes/Work';
import Banner from './componentes/Banner';
import Projects from './componentes/Projects';
import Offer from './componentes/Offer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partner />
      <Work />
      <Banner />
      <Projects />
      <Offer />
    </div>
  );
};

export default App;
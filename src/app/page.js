import React from 'react';
import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import Partner from './componentes/Partner';
import Work from './componentes/Work';
import Banner from './componentes/Banner';
import Projects from './componentes/Projects';
import Offer from './componentes/Offer';
import Company from './componentes/Company';
import Comments from './componentes/TestimonialSlider';
import Questions from './componentes/Questions';
import Build from './componentes/Build';
import Footer from './componentes/Footer';
import TestimonialSlider from './componentes/TestimonialSlider';
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
      <Company />
      <TestimonialSlider />
      <Questions />
      <Build />
      <Footer />
    </div>
  );
};

export default App;
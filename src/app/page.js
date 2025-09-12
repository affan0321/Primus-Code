// import React from 'react';
// import Navbar from './componentes/Navbar';
// import Hero from './componentes/Hero';
// import Work from './componentes/Work';
// import Banner from './componentes/Banner';
// import Projects from './componentes/Projects';
// import Offer from './componentes/Offer';
// import Company from './componentes/Company';
// import Questions from './componentes/Questions';
// import Build from './componentes/Build';
// import Footer from './componentes/Footer';
// import TestimonialSlider from './componentes/TestimonialSlider';
// import StatsOdometer from './componentes/StatsOdometer';
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <StatsOdometer />
//       <Work />
//       <Banner />
//       <Projects />
//       <Offer />
//       <Company />
//       <TestimonialSlider />
//       <Questions />
//       <Build />
//       <Footer />
//     </div>
//   );
// };

// export default App;

"use client";  // ✅ mark this file as Client Component

import React from 'react';
import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import Work from './componentes/Work';
import Banner from './componentes/Banner';
import Projects from './componentes/Projects';
import Offer from './componentes/Offer';
import Company from './componentes/Company';
import Questions from './componentes/Questions';
import Build from './componentes/Build';
import Footer from './componentes/Footer';
import TestimonialSlider from './componentes/TestimonialSlider';
import dynamic from 'next/dynamic';

// ✅ Dynamically import StatsOdometer with no SSR
const StatsOdometer = dynamic(() => import('./componentes/StatsOdometer'), {
  ssr: false,
});

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsOdometer />
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

import React from 'react';
import { HomeIntro, Services, Contact, Bestsellers } from '../components'

const HomePage = () => {
  return (
    <main className="content">
      <HomeIntro />
      <Bestsellers />
      <Services />
      <Contact />
    </main>
  );
}

export default HomePage;

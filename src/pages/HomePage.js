import React from 'react';
import { HomeIntro, Services, Contact } from '../components'

const HomePage = () => {
  return (
    <main className="content">
      <HomeIntro />
      <Services />
      <Contact />
    </main>
  );
}

export default HomePage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
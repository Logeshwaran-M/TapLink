import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import StatsSection from './State';
import Services from './Services';
import Process from './Process';
import HomeGallery from './HomeGallery';
import About from './About';
import Reviews from './Reviews';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import MeetExpert from './Process';
import ProcessSplit from './Process';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <Services />
      <Process/>
      <HomeGallery />
      <About />
      <Reviews />
      <Footer />
      <FloatingContact />
    </>
  );
};



export default Home;

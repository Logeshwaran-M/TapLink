import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import StatsSection from './State';
import Services from './Services';
import Process from './Process';
import HomeGallery from './HomeGallery';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <Services />
      <Process />
      <HomeGallery />
      <About />
      <Contact />
      <Footer />
      <FloatingContact />
    </>
  );
};



export default Home;

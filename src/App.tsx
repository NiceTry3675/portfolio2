import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';

import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioDetail from './components/PortfolioDetail';
import Particles from '@tsparticles/react';
import './App.css';

const MainPage = () => (
  <>
    <Header />
    <main>
      <Element name="home">
        <Home />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: '#1d1d1d',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: 'bounce',
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio-detail" element={<PortfolioDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

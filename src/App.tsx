import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import LinkedInPosts from './components/LinkedInPosts';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="linkedin-posts"><LinkedInPosts /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
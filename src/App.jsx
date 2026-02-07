import React, { useEffect } from 'react';
import Hero from './components/Hero';
import SystemOutputs from './components/SystemOutputs';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Verification from './components/Verification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Simple scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Hero />
      <div className="reveal">
        <SystemOutputs />
      </div>
      <div className="reveal">
        <Problem />
      </div>
      <div className="reveal">
        <Solution />
      </div>
      <div className="reveal">
        <Verification />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

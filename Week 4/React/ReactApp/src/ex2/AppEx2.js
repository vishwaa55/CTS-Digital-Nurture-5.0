import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './AppEx2.css';

function AppEx2() {
  return (
    <div className="ex2-container">
      <h2>Student Management Portal Sections</h2>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default AppEx2;

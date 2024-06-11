// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';

const Home = () => (
  <>
    <Header />
    <main>
      <About />
      <Project title="Project 1" description="Description of project 1" link="#" />
      <Project title="Project 2" description="Description of project 2" link="#" />
      <Contact />
    </main>
  </>
);

export default Home;

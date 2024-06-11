// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const LeftSection = styled.div`
  flex: 0 0 300px; // Adjust width as needed
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 20px;
  position: fixed;
  height: 100%;
`;

const RightSection = styled.div`
  margin-left: 300px; // Same width as LeftSection
  padding: 20px;
  overflow-y: scroll;
  height: 100%;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const Header = styled.header`
  margin-bottom: 50px;
`;

const About = styled.section`
  margin-bottom: 50px;
`;

const Experience = styled.section`
  margin-bottom: 50px;
`;

const Projects = styled.section`
  margin-bottom: 50px;
`;

const Contact = styled.section`
  margin-bottom: 50px;
`;

const Home = () => (
  <Container>
    <LeftSection>
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </LeftSection>
    <RightSection>
      <Header>
        <h2>Welcome to My Portfolio</h2>
      </Header>
      <About id="about">
        <h2>About Me</h2>
        <p>Your bio goes here...</p>
      </About>
      <Experience id="experience">
        <h2>Experience</h2>
        <p>Your experience goes here...</p>
      </Experience>
      <Projects id="projects">
        <h2>Projects</h2>
        <p>Your projects go here...</p>
      </Projects>
      <Contact id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
      </Contact>
    </RightSection>
  </Container>
);

export default Home;

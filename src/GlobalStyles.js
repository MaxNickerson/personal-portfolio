import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const LeftSection = styled.div`
  flex: 0 0 50%;
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 20px;
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightSection = styled.div`
  margin-left: 50%; // Same width as LeftSection
  padding: 20px;
  overflow-y: scroll;
  height: 100%;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const Header = styled.header`
  margin-bottom: 50px;
`;

const Section = styled.section`
  margin-bottom: 50px;
  h2 {
    font-size: 2rem;
    color: #64ffda;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    color: #8892b0;
  }
`;

const Home = () => (
  <Container>
    <LeftSection>
      <h1>oo</h1>
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
      <Section id="about">
        <h2>About Me</h2>
        <p>Your bio goes here...</p>
      </Section>
      <Section id="experience">
        <h2>Experience</h2>
        <p>Your experience goes here...</p>
      </Section>
      <Section id="projects">
        <h2>Projects</h2>
        <p>Your projects go here...</p>
      </Section>
      <Section id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
      </Section>
    </RightSection>
  </Container>
);

export default Home;

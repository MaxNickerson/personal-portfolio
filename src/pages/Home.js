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
  justify-content: flex-start;
  align-items: flex-start;
  
`;

const Name = styled.h1`
  margin: 0;
  font-size: 3rem; // Adjust font size as needed
  color: #ccd6f6;
  text-align: center;

`;

const Nav = styled.nav`
  margin-top: 20px; // Space between name and nav
  ul {
    padding: 0;
    list-style: none;
    li {
      margin-bottom: 10px;
      a {
        color: #64ffda;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const RightSection = styled.div`
  margin-left: 50%;
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
      <Name>Max Nickerson</Name>
      <Nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Nav>
    </LeftSection>
    <RightSection>
      <Header>
        <h2>Welcome to My Portfolio</h2>
      </Header>
      <Section id="about">
        <h2>About Me</h2>
        <p>I got my hands on my first computer during middle school, and it ignited a lifelong fascination with the digital world. This fascination led me to pursue a Computer Science Degree with a Data Analytics minor at Arcadia University and learn multiple programming languages, including Java, Python, HTML and JavaScript.

Aside from Computer Science, I have a deep passion for weightlifting, music and esports. Feel free to connect with me if you're interested in exploring the endless possibilities of technology and gaming or simply want to chat about music taste. Let's embark on an exciting journey of growth and discovery!
  </p>
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

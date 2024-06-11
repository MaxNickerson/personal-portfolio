import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background: #0a192f;

  h2 {
    color: #64ffda;
  }

  p {
    max-width: 600px;
    color: #8892b0;
  }
`;

const About = () => (
  <AboutContainer id="about">
    <h2>About Me</h2>
    <p>Your bio goes here...</p>
  </AboutContainer>
);

export default About;

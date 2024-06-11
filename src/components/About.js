// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  /* styles for about section */
`;

const About = () => (
  <AboutContainer id="about">
    <h2>About Me</h2>
    <p>Your bio goes here...</p>
  </AboutContainer>
);

export default About;

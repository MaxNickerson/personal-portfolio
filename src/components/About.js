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
    <p>I got my hands on my first computer during middle school, and it ignited a lifelong fascination with the digital world. This fascination led me to pursue a Computer Science Degree with a Data Analytics minor at Arcadia University and learn multiple programming languages, including Java, Python, HTML and JavaScript.

Aside from Computer Science, I have a deep passion for weightlifting, music and esports. Feel free to connect with me if you're interested in exploring the endless possibilities of technology and gaming or simply want to chat about music taste. Let's embark on an exciting journey of growth and discovery!</p>
  </AboutContainer>
);

export default About;

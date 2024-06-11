import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: #0a192f;
  text-align: center;

  h2 {
    color: #64ffda;
  }

  p {
    color: #8892b0;
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <h2>Contact</h2>
    <p>Email: your.email@example.com</p>
  </ContactContainer>
);

export default Contact;

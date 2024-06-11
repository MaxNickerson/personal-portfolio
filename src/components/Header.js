import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #0a192f;

  h1 {
    color: #64ffda;
  }

  nav ul {
    display: flex;
    gap: 1.5rem;
  }

  nav a {
    color: #ccd6f6;
    font-weight: bold;
    &:hover {
      color: #64ffda;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>Your Name</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </HeaderContainer>
);

export default Header;

import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.section`
  padding: 4rem 2rem;
  background: #0a192f;

  h3 {
    color: #ccd6f6;
  }

  p {
    color: #8892b0;
  }

  a {
    color: #64ffda;
    &:hover {
      color: #8892b0;
    }
  }
`;

const Project = ({ title, description, link }) => (
  <ProjectContainer id="projects">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link}>View Project</a>
  </ProjectContainer>
);

export default Project;

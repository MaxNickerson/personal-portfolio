// src/components/Project.js
import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.section`
  /* styles for project section */
`;

const Project = ({ title, description, link }) => (
  <ProjectContainer>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link}>View Project</a>
  </ProjectContainer>
);

export default Project;

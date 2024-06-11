// src/components/Project.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectContainer = styled(motion.section)`
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
  <ProjectContainer
    id="projects"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link}>View Project</a>
  </ProjectContainer>
);

export default Project;

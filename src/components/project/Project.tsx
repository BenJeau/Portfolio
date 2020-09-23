import React from 'react';

import './Project.scss';

interface ProjectProps {
  name: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ name, description }) => (
  <div className="project">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default Project;

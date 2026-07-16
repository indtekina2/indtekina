import React from 'react'
import './project.css'

import projects from '../../assets/data';

import Card from '../../Components/Card'

function Projects() {
  return (
    <div className="projectContainer">
      <div className="spacer"></div>
      <div className="project_hero">
        {projects.map((project) => (
          <Card
            key={project.id}
            img_src={project.img}
            name={project.name}
            description={project.description}
            lessons={project.lessons}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects
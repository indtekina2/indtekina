import React from 'react'
import './project.css'

import projects from '../../assets/data';

import Card from '../../Components/Card'

function Projects() {
  return (
    <div className="projectContainer">
      <header className="projects_intro">
        <p className="projects_eyebrow">A FEW THINGS I’VE BUILT</p>
        <div className="projects_heading">
          <div>
            <h2>Selected projects</h2>
            <p className="projects_summary">
              A collection of practical ideas brought to life with thoughtful
              design and full-stack development.
            </p>
          </div>
          <span className="project_count">
            {projects.length} projects
          </span>
        </div>
      </header>
      <div className="project_hero">
        {projects.map((project) => (
          <Card
            key={project.id}
            img_src={project.img}
            name={project.name}
            description={project.description}
            lessons={project.lessons}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects
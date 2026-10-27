import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

import projects from "../../assets/data";
import Card from "../../Components/Card";
import SEO from "../../Components/SEO";

function Projects() {
  return (
    <div className="projectContainer">
      <SEO
        title="Projects by indtekina | LinkUp, Study Tracker & Web Apps"
        description="Explore full-stack projects built by indtekina, including LinkUp, a chat application, and Study Tracker, a student progress dashboard."
        path="/projects"
      />
      <div className="spacer"></div>
      <section className="project_hero" aria-labelledby="projects-heading">
        <div className="projects-intro">
          <h1 id="projects-heading">Projects built by indtekina</h1>
          <p>
            Explore full-stack applications, including{" "}
            <Link to="/projects/linkup">LinkUp, a chat application</Link> and{" "}
            <Link to="/projects/study-tracker">Study Tracker, a student progress dashboard</Link>.
          </p>
        </div>
        {projects.map((project) => (
          <Card
            key={project.id}
            img_src={project.img}
            name={project.name}
            description={project.description}
            lessons={project.lessons}
            link={project.link}
            detailUrl={project.detailUrl}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;

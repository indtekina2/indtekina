import React from "react";
import "./About.css";
import { TypeAnimation } from "react-type-animation";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../../Components/SEO";
import resume from "../../assets/Resume.pdf";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about_container">
      <SEO
        title="About indtekina | Full-Stack Developer"
        description="Learn about indtekina, a full-stack developer interested in building useful web applications with React, Node.js, Express, and MongoDB."
        path="/about"
      />
      <div className="about">
        <div className="about_hero">
          <h1>Hi, I'm indtekina</h1>
          <h2>
            I{" "}
            <TypeAnimation
              sequence={[
                "build full-stack apps...",
                1000,
                "solve real-world problems...",
                1000,
                "learn relentlessly...",
                1000,
                "turn ideas into reality...",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h2>

          <p>
            I'm a full-stack developer passionate about building useful,
            user-focused web applications with React, Node.js, Express, and
            MongoDB. My projects include{" "}
            <Link to="/projects/linkup">LinkUp</Link>, a chat application, and{" "}
            <Link to="/projects/study-tracker">Study Tracker</Link>, a student
            progress dashboard.
          </p>

          <div className="about_buttons">
            <a href={resume} download className="full_button">Resume</a>
            <button
              className="secondary_btn empty_button"
              onClick={() => navigate("/projects")}
            >
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

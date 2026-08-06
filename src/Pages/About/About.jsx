import React from "react";
import "./About.css";
import { TypeAnimation } from "react-type-animation";
import resume from "../../assets/Resume.pdf";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about_container">
      <div className="about">
        <div className="about_hero">
          <h2>Hi, I'm Indtekina</h2>
          <h3>
            <span>
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
            </span>
          </h3>

          <p>
            I'm a full-stack developer passionate about building fast, scalable,
            and user-focused web applications with React, Node.js, Express, and
            MongoDB. I enjoy solving real-world problems and continuously
            learning new technologies to craft better software.
          </p>

          <div className="about_buttons">
            <a href={resume} download>
              <button className="full_button">Resume</button>
            </a>

            <button
              className="secondary_btn empty_button"
              onClick={() => navigate("/projects")}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

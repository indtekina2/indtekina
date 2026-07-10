import React from "react";
import "./About.css"
import { TypeAnimation } from "react-type-animation";
import resume from '../../assets/Resume.pdf';
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
  return (
    <div className="about_container">
      <div className="about">
        <div className="about_hero">
          <h2>Hi, I am Indtekina</h2>
          <h3>
            <span>
              I{" "}
              <TypeAnimation
                sequence={[
                  "build websites...",
                  1000,
                  "solve problems...",
                  1000,
                  "learn fast...",
                  1000,
                  "turn ideas into code...",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </span>
          </h3>
          <p>
            I enjoy building modern, responsive web applications and
            continuously learning new technologies to become a better full-stack
            developer.{" "}
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

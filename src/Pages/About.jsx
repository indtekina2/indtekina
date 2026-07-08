import React from "react";
import "./About.css"
import { TypeAnimation } from "react-type-animation";

function About() {
  return (
    <div className="about_container">
      <div className="about">
        <div className="about_text">
          <h2>Hi, I am Indtekina</h2>
          <h3>
            <span>I <TypeAnimation
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
        </div>
      </div>
    </div>
  );
}

export default About;

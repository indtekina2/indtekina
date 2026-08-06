import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import profile_img from "../../assets/Last_Pic.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="hero_container">
      <section className="hero">
        <div className="hero_text">
          <h2>I build full-stack web applications that solve real problems.</h2>

          <p>
            I create modern, responsive, and scalable applications using React,
            Node.js, Express, and MongoDB, with a focus on performance and user
            experience.
          </p>

          <br />

          <div className="hero_buttons">
            <button
              className="full_button"
              onClick={() => {
                navigate("/projects");
              }}
            >
              Projects
            </button>
            <button
              className="secondary_btn empty_button"
              onClick={() => {
                navigate("/about");
              }}
            >
              About Me
            </button>
          </div>
        </div>

        <div className="hero_image">
          <img src={profile_img} alt="hero image" />
        </div>
      </section>
    </div>
  );
}

export default Home;

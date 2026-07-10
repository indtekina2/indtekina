import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import profile_img from "../../assets/Last_Pic.png"

function Home() {
  const navigate = useNavigate();
  return (
    <div className="hero_container">
      <section className="hero">
        <div className="hero_text">
          <h2>I build modern websites and interfaces.</h2>

          <p>
            Frontend developer learning and creating clean, responsive, and
            professional websites.
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
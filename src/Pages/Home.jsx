import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";



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
              View Projects
            </button>
            <button
              className="secondary_btn empty_button"
              onClick={() => {
                navigate("/projects");
              }}
            >
              Services
            </button>
          </div>
        </div>

        <div className="hero_image">
          <img src="https://picsum.photos/500/350" alt="hero image" />
        </div>
      </section>
    </div>
  );
}

export default Home;

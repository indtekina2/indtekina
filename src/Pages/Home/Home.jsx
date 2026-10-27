import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../../Components/SEO";
import profile_img from "../../assets/Last_Pic.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="hero_container">
      <SEO
        title="indtekina | Full-Stack Developer — LinkUp & Study Tracker"
        description="I'm indtekina, a full-stack developer building web applications with React, Node.js, Express, and MongoDB. Explore LinkUp and Study Tracker."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: "indtekina — Full-Stack Developer",
          url: "https://indtekina.vercel.app/",
          mainEntity: {
            "@type": "Person",
            name: "Aniket Das",
            alternateName: "indtekina",
            url: "https://indtekina.vercel.app/",
            sameAs: ["https://github.com/indtekina2"]
          }
        }}
      />
      <section className="hero">
        <div className="hero_text">
          <h1>I'm indtekina — I build full-stack web applications.</h1>

          <p>
            I'm a full-stack developer working with React, Node.js, Express,
            and MongoDB. Explore my projects, including{" "}
            <Link to="/projects/linkup">LinkUp</Link> and{" "}
            <Link to="/projects/study-tracker">Study Tracker</Link>.
          </p>

          <br />

          <div className="hero_buttons">
            <button className="full_button" onClick={() => navigate("/projects")}>
              Explore Projects
            </button>
            <button className="secondary_btn empty_button" onClick={() => navigate("/about")}>
              About Me
            </button>
          </div>
        </div>

        <div className="hero_image">
          <img src={profile_img} alt="indtekina, full-stack developer" />
        </div>
      </section>
    </div>
  );
}

export default Home;

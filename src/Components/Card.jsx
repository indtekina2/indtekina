import React from 'react'
import './card.css'
import logo from '../assets/logo.png'

function Card({ img_src, name, description, lessons, link }) {
  return (
    <div className="card">
      <img src={img_src} alt={name} />
      <h3>{name}</h3>

      <p>
        <i>
          <b>Description:</b>
        </i>{" "}
        {description}
      </p>

      <br />

      <ul>
        {lessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>

      <br />

      <button
        className="full_button"
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      >
        View Project
      </button>
    </div>
  );
}

export default Card
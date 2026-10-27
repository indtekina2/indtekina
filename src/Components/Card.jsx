import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ img_src, name, description, lessons, link, detailUrl }) {
  return (
    <article className="card">
      <img src={img_src} alt={`${name} project by indtekina`} loading="lazy" />
      <h3>{name}</h3>

      <p>
        <i><b>Description:</b></i>{" "}
        {description}
      </p>

      <br />

      <ul>
        {lessons.map((lesson) => (
          <li key={lesson}>{lesson}</li>
        ))}
      </ul>

      <br />

      {detailUrl && (
        <p>
          <Link to={detailUrl}>Read the {name} project overview</Link>
        </p>
      )}

      <a className="full_button" href={link} target="_blank" rel="noreferrer">
        {detailUrl ? "Open live demo / repository" : "View project"}
      </a>
    </article>
  );
}

export default Card;

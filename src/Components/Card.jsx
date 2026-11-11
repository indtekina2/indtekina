import React from 'react'
import './Card.css'

function Card({ img_src, name, description, lessons, tech, link }) {
  return (
    <article className="card">
      <div className="card_image">
        <img src={img_src} alt={`${name} project preview`} loading="lazy" />
      </div>
      <div className="card_content">
        <div className="card_title">
          <h3>{name}</h3>
          <span className="card_label">PROJECT</span>
        </div>

        <p className="card_description">{description}</p>

        <ul className="card_tech" aria-label="Technologies used">
          {tech.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
          {tech.length > 4 && <li className="card_more_tech">+{tech.length - 4}</li>}
        </ul>

        <details className="card_details">
          <summary>What I learned</summary>
          <ul className="card_lessons">
            {lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </details>

        <a className="card_link" href={link} target="_blank" rel="noopener noreferrer">
          View project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default Card
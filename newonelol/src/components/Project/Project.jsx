/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import './Project.scss';
import {
  AiOutlineGithub, AiOutlineTwitter,
} from 'react-icons/ai';

export default function Project({
  name, image, description, languages, id, live, github,
}) {
  return (
    <li className="project-container">
      <div
        className="project-image-container"
        style={{
          backgroundImage: `url(${(image)})`,
        }}
      />
      <div className="project-info">
        <p className="project-title">
          {name}
        </p>
        <p className="project-description">{description}</p>
      </div>
      <ul className="languages-list">
        {
          languages.map((language) => (
            <li key={language} className="language-container">{language}</li>
          ))
        }
      </ul>
      <div className="project-links-container">
        <a className="project-link github-project-link" href={github} target="_blank" rel="noreferrer">
          <AiOutlineGithub />
        </a>
        <a className="project-link" href={live} target="_blank" rel="noreferrer">Live</a>
      </div>
    </li>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import profilePic1 from '../../images/profile_pic1.jpg';
import './Navbar.scss';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (

    <nav className="navbar">
      <Link
        spy
        smooth
        offset={-50}
        duration={500}
        to="hero"
        className="logo-text"
      >
        <div className="logo-and-text">
          <img alt="logo" src={profilePic1} className="logo-img" />
          <p>
            Giuseppe T.
          </p>
        </div>
      </Link>
      <ul className={isActive ? 'links-list-active links-list' : 'links-list'}>
        <li className="link1">
          <Link
            spy
            smooth
            offset={-50}
            duration={500}
            to="hero"
            className="link"
          >
            HOME
          </Link>
        </li>
        <li className="link3">
          <Link
            spy
            smooth
            offset={-100}
            duration={500}
            to="about"
            className="link"
          >
            ABOUT
          </Link>
        </li>
        <li className="link2">
          <Link
            spy
            smooth
            offset={-70}
            duration={500}
            to="projects"
            className="link"
          >
            PROJECTS
          </Link>
        </li>
        <li className="link4">
          <Link
            spy
            smooth
            offset={-200}
            duration={500}
            to="media"
            className="link"
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <button type="button" className={isActive ? 'active hamburger' : 'hamburger'} onClick={handleClick}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
}

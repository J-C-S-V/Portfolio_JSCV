import React, { useEffect } from 'react';
import './Hero.scss';
import Aos from 'aos';
import { Link } from 'react-scroll';

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="section" id="hero">
      <div className="hero" data-aos="fade-up">
        <p className="hero-greeting">Hello, my name is</p>
        <h1 className="hero-name">Juan Sanchez</h1>
        <h2 className="hero-title">I create good quality projects the web.</h2>
        <p className="hero-description">
          I am a full-stack web developer with a passion for backend. Currently,
          I am building this portfolio website to showcase my projects and land
          my first job in this field.
        </p>
        <Link
          spy
          smooth
          offset={-70}
          duration={500}
          to="projects"
          className="link"
        >
          <button className="hero-button" type="button">
            See my projects!
          </button>
        </Link>
      </div>
    </section>
  );
}

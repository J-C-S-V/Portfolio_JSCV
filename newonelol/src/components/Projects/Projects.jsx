import React, { useEffect } from 'react';
import Aos from 'aos';
import Slider from 'react-slick';
import projects from '../../projectsData/projects';
import './Projects.scss';
import Project from '../Project/Project';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projectsList = projects.projects;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section" id="projects">
      <div className="projects">
        <div className="section-title" data-aos="fade-right">
          <h2 className="projects-title">Projects</h2>
          <span className="line-span" />
        </div>
        <ul className="projects-list" data-aos="fade-up">
          <Slider {...settings}>
            {
              projectsList.map((project, index) => (

                <Project
                  key={project.id}
                  index={index}
                  id={project.id}
                  name={project.name}
                  live={project.live}
                  github={project.github}
                  description={project.description}
                  languages={project.languages}
                  image={project.image}
                />
              ))
            }
          </Slider>
        </ul>
      </div>

    </section>
  );
}

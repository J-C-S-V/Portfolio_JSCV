import React, { useEffect } from 'react';
import Aos from 'aos';
import profilePic2 from '../../images/profile_pic2.jpeg';
import './About.scss';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="section" id="about">
      <div className="about">
        <div className="section-title" data-aos="fade-right">
          <h2 className="about-title">About Me</h2>
          <span className="line-span" />
        </div>
        <div className="about-description" data-aos="fade-up">
          <div className="description-text">
            <p>
              Hello! My name is Giuseppe and I enjoy creating things for the web.
              My interest in development started back in 2018 when I participated in a
              {' '}
              <span className="purple-text">game jam </span>
              and see how the developers make video games work properly. Turns out I learned
              some code by seeing how the team was programming the music I made for the game.
            </p>
            <p>
              I joined
              {' '}
              <span className="purple-text">Microverse, </span>
              an online school for remote software developers,
              where I worked on different projects with other students doing pair programming.
              I also became a
              {' '}
              <span className="purple-text">mentor and code reviewer</span>
              {' '}
              at the same school.
              This improved my communication and remote working skills.
            </p>
            <p>
              With time, I started to realize my passion for
              {' '}
              <span className="purple-text">UI/UX</span>
              {' '}
              and making easy-to-use,
              responsive, and accessible apps. I am an enthusiastic learner and open to getting out
              of my comfort zone if that means an improvement in my career.
            </p>
            <p>Here are some few technologies I&apos;ve been using:</p>
            <ul className="about-list">
              <li>HTML</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>CSS</li>
              <li>Jest</li>
              <li>Git/GitHub</li>
              <li>Netlify</li>
              <li>VSCode</li>
            </ul>
          </div>
          <div className="about-image-container" style={{ backgroundImage: `url(${profilePic2})` }} data-aos="fade-left" />
        </div>
      </div>
    </section>
  );
}

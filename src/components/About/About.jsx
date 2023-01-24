import React, { useEffect } from 'react';
import Aos from 'aos';
// import profilePic2 from '../../images/profilePic2.jpg';
import './About.scss';

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
              Hello! My name is Juan Sanchez, I'm a musician that started to
              love coding once I saw the good we can do to others with it. I was
              always sorounded by computers in my childhood and teens, then I
              had to decide to study something between music and system
              engineering, I chose music, It was a beautiful journey, I finished
              my 5 years career and worked on it for about 3 years teaching in
              some schools. Now I have decided to change careers and achieve
              something that was pending in my teens.
            </p>
            <p>
              One of my skills is to teach myself. Back in 2016 I completed a
              course in coursera called &quot;Learning how to learn: Powerful
              mental tools to help you master tough subjects&quot;
            </p>
            <p>
              My goal right now is to gain experience and knowledge to help
              other people and make this world a better place to live for
              everyone
            </p>
            <p>
              Here are some few technologies and languages I&apos;ve been using:
            </p>
            <ul className="about-list">
              <li>HTML</li>
              <li>Javascript</li>
              <li>React</li>
              <li>CSS</li>
              <li>Git/GitHub</li>
              <li>VSCode</li>
            </ul>
          </div>
          {/* <div
            className='about-image-container'
            style={{ backgroundImage: `url(${profilePic2})` }}
            data-aos='fade-left'
          /> */}
        </div>
      </div>
    </section>
  );
}

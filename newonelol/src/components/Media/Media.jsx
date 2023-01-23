import React, { useRef, useEffect } from 'react';
import Aos from 'aos';
import {
  AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter,
} from 'react-icons/ai';
import './Media.scss';
import 'aos/dist/aos.css';

export default function Media() {
  const mediaSection = useRef();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="media-section" id="media" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="media-title-container">
        <span className="contact-line" />
        <h2 className="media-title">
          Contact
        </h2>
        <span className="contact-line" />
      </div>
      <p>Email: giusetomasini@gmail.com</p>
      <div className="icon-container" id="media" ref={mediaSection}>
        <a href="https://www.linkedin.com/in/giuseppe-tomasini-g/" target="_blank" className="icon linkedin" rel="noreferrer">
          <AiOutlineLinkedin className="i" />
        </a>

        <a href="https://github.com/GiuseppeTG" target="_blank" className="icon github" rel="noreferrer">
          <AiOutlineGithub className="i" />
        </a>

        <a href="https://www.instagram.com/giusetomasini/" target="_blank" className="icon instagram" rel="noreferrer">
          <AiOutlineInstagram className="i" />
        </a>

        <a href="https://twitter.com/giusetomasini" target="_blank" className="icon twitter" rel="noreferrer">
          <AiOutlineTwitter className="i" />
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import Hero from '../components/Hero/Hero';
import Media from '../components/Media/Media';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Media />
    </>
  );
}

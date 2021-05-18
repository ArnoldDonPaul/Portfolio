import React, { Component } from 'react';

import './Main.scss';

import Nav from '../components/nav/nav'
import Hero from '../components/hero/hero';
import Projects from '../components/projects/projects'
import About from '../components/about/about'
import TypingGame from '../components/typingGame/typingGame'
import Footer from '../components/footer/footer'

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className='heroMain'>
          <Hero />
        </div>
        <Projects />
        <About />
        <TypingGame />
        <Footer />
      </>
    );
  }
}

export default Main;
import React, { Component } from 'react';

import './Main.scss';

import Nav from '../components/nav/nav'
import Hero from '../components/hero/hero';


class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className='heroMain'>
          <Hero />
        </div>
      </>
    );
  }
}

export default Main;
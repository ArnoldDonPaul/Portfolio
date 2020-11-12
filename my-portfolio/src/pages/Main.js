import React from 'react';
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import '../styles/pages/Main/Main.scss';

import Hero from '../components/hero';


function Main() {
  return (
    <BrowserRouter>
      <div className="navComponent">
        <Route component={Hero} />
      </div>
    </BrowserRouter>
  );
}

export default Main;
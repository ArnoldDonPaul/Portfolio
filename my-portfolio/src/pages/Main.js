import React from 'react';
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Hero from '../components/hero';
import '../styles/styles.css';

function Main() {
  return (
    <BrowserRouter>
      <Route component={Hero} />
    </BrowserRouter>
  );
}

export default Main;
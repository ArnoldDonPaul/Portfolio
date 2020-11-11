import React from 'react';
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Main from './pages/Main';
import './styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Route component={Main} />
    </BrowserRouter>
  );
}

export default App;

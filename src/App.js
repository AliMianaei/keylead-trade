import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Main from './Main';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Main/>
    </Router>
  )
}

export default App;
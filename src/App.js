import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './components/Homepage';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage';
import StaffDetails from './components/StaffDetails';
import StaffDirectory from './components/StaffDirectory';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/staff" component={StaffDirectory} />
          <Route path="/info/:id" component={StaffDetails} />
        </div>
      </Router>
    );
  }
}

export default App;

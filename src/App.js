import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage';
import StaffCreation from './components/StaffCreate';
import StaffUpdate from './components/StaffUpdate';
import StaffDetails from './components/StaffDetails';
import StaffDirectory from './components/StaffDirectory';
import ClockIn from './components/ClockIn';
import ClockOut from './components/ClockOut';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/staff" component={StaffDirectory} />
          <Route path="/info/:id" component={StaffDetails} />
          <Route path="/create" component={StaffCreation} />
          <Route path="/update/:id" component={StaffUpdate} />
          <Route path="/clock-in" component={ClockIn} />
          <Route path="/clock-out" component={ClockOut} />
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import './App.css';

// *COMPONENT imports
import Login from './components/Login';
import DashBoard from './components/DashBoard';

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" exact component={DashBoard} />
              <Route path="/login" component={Login}/>
          </Switch>
      </Router>
  );
}

export default App;

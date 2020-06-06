import React from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';

import './App.css';

// *COMPONENT imports
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import Register from './components/Register';
import PostPage from './components/PostPage/PostPage';
// import Navbar from './components/Navbar';

function App() {
  return (
      <>
      <Router>
          <Switch>
              <PrivateRoute exact path="/" component={DashBoard} />
              <PrivateRoute exact path="/posts/:postid" component={PostPage} />
              <Route path="/login" component={Login}/>
              <Route path='/register' component={Register}/>
          </Switch>
      </Router>
      </>
  );
}

export default App;

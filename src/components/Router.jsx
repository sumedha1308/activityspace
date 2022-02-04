/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage.jsx';
import LoginSignup from './HomePage/LoginSigup/LoginSignup.jsx';
import SignUp from './HomePage/LoginSigup/SignUp.jsx';
import Profile from './HomePage/LoginSigup/Profile.jsx';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginSignup} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default AppRouter;

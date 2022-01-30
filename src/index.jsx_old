/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Profile from './Profile.jsx';

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
// import axios from 'axios';
import './NavBar.css';

class Navbar extends React.Component {
  handleLogout = () => {
    this.props.handleLogout();
  };

  render() {
    const activitiesClick = (activity) => (window.location = `/api/activities/${encodeURIComponent(activity)}`);
    const logoClick = () => (window.location = `/`);
    const logoutclick = () => {
      localStorage.clear();
      fetch('/api/sessions/me/', {
        method: 'DELETE',
      }).then((res) => {
        if (res.status === 204) {
          window.location = '/';
        }
      });
    };
    const loginclick = () => (window.location = '/login');
    const temp = 'Log-in/Sign-up';
    const logout = 'logout';
    return (
      <React.Fragment>
        {/* {console.log('this.props.loginStatus', this.props.loginStatus)} */}
        <header className="navbar">
          <div className="companyLogo" onClick={logoClick}>
            <div>
              <img className="companyLogo-icon" src="Logo-Full.jpg" />
            </div>
            <span className="logoSpace">Activity</span>Space
          </div>
          <div className="activities-login">
            <div className="dropdown-nav activities-dropdown">
              Activities{' '}
              <span>
                <img className="dropdown-arrow" src="/activityPics/down-arrow.svg" />
              </span>
              <div className="dropdown-content">
                <span onClick={() => activitiesClick('1')}>Corporate Meetings</span>
                <span onClick={() => activitiesClick('2')}>Conferences</span>
                <span onClick={() => activitiesClick('3')}>Performance</span>
                <span onClick={() => activitiesClick('4')}>Party</span>
                <span onClick={() => activitiesClick('5')}>Date</span>
                <span onClick={() => activitiesClick('6')}>Wedding</span>
                <span onClick={() => activitiesClick('7')}>Baby Shower</span>
                <span onClick={() => activitiesClick('8')}>Family get-together</span>
              </div>
            </div>
            <div className="dropdown-nav login-dropdown">
              <img className="user-icon" src="/activityPics/user-login-icon.png" />
              <div className="dropdown-content">
                {!this.props.loginStatus ? (
                  <span className="box" onClick={loginclick}>
                    {temp}
                  </span>
                ) : (
                  <div>
                    <span className="box">{`Hello, ${this.props.userName}`}</span>
                    <span className="box" onClick={logoutclick}>
                      {logout}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;

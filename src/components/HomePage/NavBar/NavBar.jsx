/* eslint-disable no-useless-constructor */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/order */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line no-return-assign
    const activitiesClick = (activity) => (window.location = `/api/activities/${encodeURIComponent(activity)}`);

    const logoClick = () => (window.location = `/`);

    const logoutclick = () => {
      localStorage.clear();
      fetch('/api/sessions/me', {
        method: 'DELETE',
      }).then((res) => {
        if (res.status === 204) {
          window.location = '/';
        }
      });
    };

    const loginclick = () => (window.location = '/login');

    let temp = '';
    const loggedInUser = localStorage.getItem('user');
    let logout;
    if (loggedInUser) {
      temp = `Hi, ${loggedInUser}`;
      logout = 'Logout';
    } else {
      temp = 'Log-in/Sign-up';
    }

    return (
      <header className="navbar">
        <div className="companyLogo" onClick={logoClick}>
          <img className="companyLogo-icon" src="Logo-Full.jpg" />
          <span className="logoSpace">Activity</span>Space
        </div>
        <div className="dropdown-nav">
          Activities{' '}
          <span>
            <img className="dropdown-arrow" src="/activityPics/down-arrow.svg" />
          </span>
          <div className="dropdown-content">
            <span onClick={() => activitiesClick('Corporate Meetings')}>Corporate Meetings</span>
            <span onClick={() => activitiesClick('Conferences')}>Conferences</span>
            <span onClick={() => activitiesClick('Performance')}>Performance</span>
            <span onClick={() => activitiesClick('Party')}>Party</span>
            <span onClick={() => activitiesClick('Date')}>Date</span>
            <span onClick={() => activitiesClick('Wedding')}>Wedding</span>
            <span onClick={() => activitiesClick('Baby Shower')}>Baby Shower</span>
            <span onClick={() => activitiesClick('Family get-together')}>Family get-together</span>
          </div>
        </div>
        <div className="dropdown-nav">
          <img className="user-icon" src="/activityPics/user-login-icon.png" />
          <div className="dropdown-content">
            <span className="box" onClick={loginclick}>
              {temp}
            </span>
            <span className="box" onClick={logoutclick}>
              {logout}
            </span>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;

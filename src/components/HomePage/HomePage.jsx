/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Banner from './Banner/Banner.jsx';
import Space from './Spaces/spaces.jsx';
import DateTime from './DateTime/DateTime.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isLoggedIn: false,
      userName: 'unknown',
    };
  }

  getLoginStatus = () => {
    this.setState({
      isLoaded: false,
    });
    axios
      .get('/api/users/me/')
      .then((response) => {
        this.setState({
          isLoaded: true,
          isLoggedIn: true,
          userName: response.data.userName,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          isLoggedIn: false,
        });
      });
  };

  componentDidMount() {
    this.getLoginStatus();
  }

  handleLogout = () => {
    axios
      .delete('/api/users/me')
      .then((response) => {
        this.getLoginStatus();
      })
      .catch((error) => {
        // console.log('some issue occured');
      });
  };

  render() {
    // eslint-disable-next-line no-return-assign
    return (
      <div className="HomePage">
        <div style={{ minHeight: 'calc(100vh - 31px)' }}>
          <NavBar loginStatus={this.state.isLoggedIn} handleLogout={this.handleLogout} userName={this.state.userName} />
          <Banner />
          <Space />
          <DateTime />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

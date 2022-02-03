/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

import React from 'react';
import './LoginSignup.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../../Footer/Footer.jsx';
// import './index.css';

class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      error: null,
      errorCode: null,
      userName: '',
    };
  }

  checkLoginStatus = async () => {
    axios
      .get('/api/users/me/')
      .then((response) => {
        this.props.history.goBack();
      })
      .catch(() => {
        this.setState({
          isLoggedIn: false,
        });
      });
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    if (this.state.email === '' || this.state.password === '' || this.state.userName === '') {
      this.setState({
        error: 'all fields are mandatory',
        errorCode: null,
      });
      return false;
    }

    const emRegex = /[a-zA-Z]\w*@\w*\.\D+/;

    if (!emRegex.test(this.state.email)) {
      this.setState({
        error: 'Email Id needs to be of the form abc@xyz.com',
        errorCode: null,
      });
      return false;
    }
    return true;
  };

  onLoginClick = (e) => {
    e.preventDefault();
    if (this.validate()) {
      axios
        .post('/api/sessions/', {
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password,
        })
        .then((response) => {
          this.props.history.replace('/home');
        })
        .catch((error) => {
          this.setState({
            error: error.response.data.error,
            errorCode: error.response.status,
          });
        });
    }
  };

  onSignupClick = (e) => {
    e.preventDefault();
    window.location = '/signup';
  };

  handleLogout = () => {
    axios
      .delete('/api/users/me')
      .then((response) => {
        this.setState({
          isLoggedIn: false,
        });
      })
      .catch((error) => {
        // console.log('some issue occured');
      });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div style={{ minHeight: 'calc(100vh - 31px)' }}>
            <NavBar loginStatus={this.state.isLoggedIn} handleLogout={this.handleLogout} />
            <div className="login_div">
              <form className="login_form">
                <div className="loginEmail">
                  UserName:{' '}
                  <input
                    placeholder="userName"
                    name="userName"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.userName}
                  ></input>
                </div>
                <div className="loginEmail">
                  Email:{' '}
                  <input
                    placeholder="email"
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  ></input>
                </div>

                <div className="loginPass">
                  Password:{' '}
                  <input
                    placeholder="password"
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  ></input>
                </div>

                <div>
                  <input className="loginBtn" type="submit" onClick={this.onLoginClick} value="Login"></input>

                  <input className="signupBtn" type="submit" onClick={this.onSignupClick} value="SignUp"></input>
                </div>
              </form>
            </div>
          </div>
          {this.state.error !== null ? (
            <p style={{ color: 'red', fontSize: '16px' }}>
              {this.state.error}
              {this.state.errorCode === 401 ? <a href="/signup">Signup</a> : null}
            </p>
          ) : (
            ''
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default LoginSignup;

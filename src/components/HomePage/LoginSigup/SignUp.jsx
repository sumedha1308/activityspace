/* eslint-disable no-unused-vars */

import React from 'react';
import './Signup.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../../Footer/Footer.jsx';
// import './index.css';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      isLoggedIn: false,
    };
  }

  checkLoginStatus = async () => {
    axios
      .get('/api/users/me/')
      .then((response) => {
        this.props.history.goBack();
      })
      .catch((error) => {
        this.setState({
          isLoggedIn: false,
        });
      });
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  onInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    const { userName } = this.state;
    const { email } = this.state;
    const { password } = this.state;

    if (userName === '' || email === '' || password === '') {
      this.setState({
        error: 'All fields are mandatory!',
      });
      return false;
    }

    const unRegex = /^[1-9]|\s+/;

    if (unRegex.test(userName)) {
      this.setState({
        error: 'User Name can not start with Numbers and can not contain spaces',
      });
      return false;
    }

    const emRegex = /[a-zA-Z]\w*@\w*\.\D+/;

    if (!emRegex.test(email)) {
      this.setState({
        error: 'Email Id needs to be of the form abc@xyz.com',
      });
      return false;
    }

    if (password.includes(' ')) {
      this.setState({
        error: 'Password can not contain spaces',
      });
      return false;
    }

    this.setState({
      validationError: '',
    });
    return true;
  };

  handleSignupClick = (e) => {
    if (this.validate()) {
      e.preventDefault();
      const { userName, email, password } = this.state;
      fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ userName, email, password }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      window.location = '/login';
    }
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
            <div className="signup_tagline">
              Get bored with covid? Want to celebrate your event? You are in right place to find a good place for good
              moments. Please signup to make your memories priceless.
            </div>
            <div className="signup_div">
              <form className="signup_form">
                <div className="signupFname">
                  User Name:{' '}
                  <input
                    placeholder="User name"
                    name="userName"
                    type="text"
                    onInput={this.onInput}
                    value={this.state.userName}
                  ></input>
                </div>
                <div className="signupEmail">
                  Email:{' '}
                  <input
                    placeholder="email"
                    name="email"
                    type="email"
                    onInput={this.onInput}
                    value={this.state.email}
                  ></input>
                </div>
                <div className="signupPass">
                  Password:{' '}
                  <input
                    placeholder="password"
                    name="password"
                    type="password"
                    onInput={this.onInput}
                    value={this.state.password}
                  ></input>
                </div>

                <div>
                  <input
                    className="signupformBtn"
                    type="submit"
                    onClick={this.handleSignupClick}
                    value="Sign up"
                  ></input>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;

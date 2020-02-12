import React, { Component } from 'react';
import axios from 'axios';
import Entry from './Entry';

import {Redirect} from 'react-router-dom';

class Login extends Component {
  state = {
    loggedIn: false,
  };

  login = async (username, password) => {
    try {
      const result = await axios.post(`/user/login`, {
        credentials: {
          username,
          password
        }
      });
      // global.userId = result.data.data;
      this.setState({loggedIn: true});
    } catch (e) {
      const response = e.response.data;
      if (response.data) {
        if (response.data.username) {
          console.log("Empty Username Field")
        }
        if (response.data.password) {
          console.log("Empty Password Field")
        }
      } else {
        console.log("invalid login");
      }
    }
  }

  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return  <Redirect  to="/Home" userId="asdf"/>
    }
    return (
      <Entry title="Sign In" buttonPress={this.login} linkUrl="/CreateAccount" linkTitle="Create Account" />
    );
  }
}

export default Login;

import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Entry from './Entry';

class CreateAccount extends Component {
  state = {
    accountMade: false,
  };

  createAccount = async (username, password) => {
    try {
      await axios.post(`/user`, {
        credentials: {
          username,
          password
        }
      });
      this.setState({accountMade: true});
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
        console.log("Sign Up Failed");
      }
    }
  }

  render() {
    const { accountMade } = this.state;
    if (accountMade) {
      return  <Redirect  to="/Login" />
    }
    return (
      <Entry title="Create Account" buttonPress={this.createAccount} linkUrl="/Login" linkTitle="Login" />

    );
  }
}

export default CreateAccount;

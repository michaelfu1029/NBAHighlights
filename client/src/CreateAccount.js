import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ip_address } from './Constants';
import {Redirect} from 'react-router-dom';

class CreateAccount extends Component {
  state = {
    username: "",
    password: "",
    accountMade: false,
    emptyUsername: false,
    emptyPassword: false,
  };

  createAccount = async () => {
    try {
      await axios.post(`${ip_address}user`, {
        credentials: {
          username: this.state.username,
          password: this.state.password
        }
      });
      this.setState({accountMade: true});
    } catch (e) {
      const response = e.response.data;
      if (response.data) {
        if (response.data.username) {
          this.setState({ emptyUsername: true});
          console.log("Empty Username Field")
        }
        if (response.data.password) {
          this.setState({ emptyPassword: true});
          console.log("Empty Password Field")
        }
      } else {
        console.log("Sign Up Failed");
      }
    }
  }

  render() {
    const { emptyUsername, emptyPassword, accountMade } = this.state;
    if (accountMade) {
      return  <Redirect  to="/Login" />
    }
    return (
      <div>
        <h1>Create An Account</h1>
        <div>
          <div className="flexbox-container">
            <input 
              type="text"
              onChange={(e) => this.setState({ username: e.target.value, emptyUsername: false })}
              placeholder="Username"
            />
            <div>{emptyUsername ? "Cannot be blank": ""} </div>
          </div>
          <div className="flexbox-container">
            <input
              type="text"
              onChange={(e) => this.setState({ password: e.target.value, emptyPassword: false })}
              placeholder="Password"
            />
            <div>{emptyPassword ? "Cannot be blank": ""} </div>
          </div>
          <div style={{ padding: '10px' }}>
            <button
              onClick={() =>
                this.createAccount()
              }
            >
              Sign Up
            </button>
            <Link to="/Login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;

import React, { Component } from 'react';
import axios from 'axios';
import { ip_address } from './Constants';
import { Link } from 'react-router-dom';
import './Login.css';

import {Redirect} from 'react-router-dom';

class Login extends Component {
  state = {
    username: "",
    password: "",
    emptyUsername: false,
    emptyPassword: false,
    loggedIn: false,
  };

  login = async () => {
    try {
      const result = await axios.post(`${ip_address}user/login`, {
        credentials: {
          username: this.state.username,
          password: this.state.password
        }
      // },
      // {
      //   withCredentials: true
      });
      global.userId = result.data.data;
      // console.log(result.data.data);
      this.setState({loggedIn: true});
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
        console.log("invalid login");
      }
    }
  }

  render() {
    const { emptyUsername, emptyPassword, loggedIn } = this.state;
    if (loggedIn) {
      return  <Redirect  to="/Home" userId="asdf"/>
    }
    return (
      <div>
        <h1>Sign In</h1>
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
                this.login()
              }
            >
              Log In
            </button>
            <Link to="/CreateAccount">Create Account</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import axios from 'axios';
import { ip_address } from './Constants';
import { Link } from 'react-router-dom';
import './Login.css';

import {Redirect} from 'react-router-dom';

class Entry extends Component {
  state = {
    username: "",
    password: "",
  };


  render() {
    return (
      <div className="login-container">
        <h1>{this.props.title}</h1>
        <div className="inputs">
          <div className="flexbox-container">
            <input 
              type="text"
              onChange={(e) => this.setState({ username: e.target.value, emptyUsername: false })}
              placeholder="Username"
            />
            {/* <div>{emptyUsername ? "Cannot be blank": ""} </div> */}
          </div>
          <div className="flexbox-container">
            <input
              type="text"
              onChange={(e) => this.setState({ password: e.target.value, emptyPassword: false })}
              placeholder="Password"
            />
            {/* <div>{emptyPassword ? "Cannot be blank": ""} </div> */}
          </div>
          <div style={{ padding: '10px' }}>
            <button
              onClick={() =>
                this.props.buttonPress(this.state.username, this.state.password)
              }
            >
              {this.props.title}
            </button>
            <Link to={this.props.linkUrl}>{this.props.linkTitle}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;

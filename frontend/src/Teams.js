import React, { Component } from 'react';
import './Login.css';
import Video from "./Video";
import axios from 'axios';
import {ip_address, teamList} from './Constants'
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Teams extends Component {
    render() {
        return (
            <div>
                {teamList.map((item) => 
                    <div>
                        <Link to={`/teams/${item}`}>{item}</Link>
                    </div>
                )}

            </div>
            
        );
    }
}

export default Teams;

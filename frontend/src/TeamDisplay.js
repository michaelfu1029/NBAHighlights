import React, { Component } from 'react';
import './Login.css';
import Video from "./Video";
import axios from 'axios';
import {ip_address, teamList} from './Constants'

class TeamDisplay extends Component {
    state = {
       team: "",
       teamVideos: [],
    };

    componentDidMount() {
        const { team } = this.props.match.params
        this.setState({team})
        this.getTeamVideos(team);
    }

    getTeamVideos = async (team) => {
        try {
            console.log(`${ip_address}video/${team}`);
            const response = await axios.get(`${ip_address}video/${team}`);
            console.log(response);
            this.setState({teamVideos: response.data.data});
        } catch (e) {
            console.log("User does not exist in database");
        }
    }

    render() {
        const { team, teamVideos } = this.state;
        return (
            <div>
                <h1>{team}</h1>
                
                {teamVideos.map((item) => 
                    <div>
                        <h3>{item.title}</h3>
                        <Video videoId={item.videoId} />
                    </div>
                )}

            </div>
            
        );
    }
}

export default TeamDisplay;

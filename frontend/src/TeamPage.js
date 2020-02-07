import React, { Component, useState, useEffect } from 'react';
import './Login.css';
import Video from "./Video";
import axios from 'axios';
import {ip_address, teamList} from './Constants'
import VideoDisplay from './VideoDisplay'
import { useHistory, Link, NavLink } from 'react-router-dom';



// const TeamDisplay = ({ match }) => {
//     // console.log(props.match.params.page)
//   const [teamState, setTeamState] = useState(match.params.page);
//   const [teamVideosState, setTeamVideosState] = useState([]);
//     const history = useHistory();
//   useEffect(() => {
//       console.log("changed")
//       setTeamState(match.params.page);
//       getTeamVideos(match.params.page);
//   }, [match.params.page])

//   const getTeamVideos = async (team) => {
//     try {
//         const response = await axios.get(`${ip_address}video/${team}`);
//         setTeamVideosState(response.data.data);
//     } catch (e) {
//         console.log("Could not find videos in database");
//     }
//   }
//   return (
//     <div>
//         {/* <h1>{teamState}</h1> */}
//         <VideoDisplay videos={teamVideosState}/>
//         {/* <button onClick={ () => { history.go(-1)}}>go back</button> */}
//     </div>
//   );  
// };
// // }
class TeamPage extends Component {
    state = {
       team: "",
       teamVideos: [],
    };

    componentDidMount() {
        const { page } = this.props.match.params
        this.setState({team: page})
    }

    getTeamVideos = async (team) => {
        try {
            const response = await axios.get(`${ip_address}video/${team}`);
            this.setState({teamVideos: response.data.data});
        } catch (e) {
            console.log("Could not find videos in database");
        }
    }

    render() {
        const { team, teamVideos } = this.state;
        let { page } = this.props.match.params;
        if (page !== team) {
            this.setState({team: page});
            this.getTeamVideos(page);
        }
        return (
            <div>
                {/* <NavLink style={{ textDecoration: 'none'  }} to='/Home'>{team}</NavLink> */}
                {/* <button onClick={()=>}>{team}</button> */}
                <h1>{team}</h1>
                <VideoDisplay videos={teamVideos}/>
            </div>
            
        );
    }
}

export default TeamPage;

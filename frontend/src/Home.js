import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import {ip_address} from './Constants'
import './VideoDisplay.css'
import VideoDisplay from './VideoDisplay';

class Home extends Component {
    state = {
        username: "",
        loggedOut: false,
        videos: [],
    };

    componentDidMount() {
        this.getVideos();
        this.getUsername(global.userId);
    }

    getUsername = async (userId) => {
        try {
            if (!userId) {
                this.setState({loggedOut: true});
                return
            }
            console.log(`${ip_address}user/${userId}`);
            const response = await axios.get(`${ip_address}user/${userId}`);
            console.log(response);
            this.setState({username: response.data.data});
        } catch (e) {
            console.log("User does not exist in database");
        }
    }

    getVideos = async () => {
        try {
            const response = await axios.get(`${ip_address}video`);
            this.setState({videos: response.data.data});
        } catch (e) {
            console.log("Error getting videos");
        }
    }

    render() {
        const { username, loggedOut, videos } = this.state;
        console.log("videos", videos);
        
        // if (loggedOut) {
        //     return <Redirect to="/Login"/>
        // }
        return (
            // <div class="container">
            //     <div class="inner">
                
            //     <div>
            //         {/* <h1>{`Welcome ${username}`}</h1> */}
                    
            //         {videos.map((item) => 
            //             <div>
            //                 <h3>{item.title}</h3>
            //                 <Video videoId={item.videoId} />
            //             </div>
            //         )}
            //     </div>
            //     <div class="sidebar">
            //         <Teams />
            //     </div>
            // </div>
                
            // </div>
            <div>
                <h1>Home</h1>
                <VideoDisplay videos={videos}/>
            </div>
            
            
            
        );
    }
}

export default Home;

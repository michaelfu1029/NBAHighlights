import React, { Component } from 'react';
import './Login.css';
import Video from "./Video";
import Sidebar from "./Sidebar"
import './VideoDisplay.css'

class VideoPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <div class="inner">
                <div>
                    {this.props.videos.map((item) => 
                        <div>
                            <h3>{item.title}</h3>
                            <Video videoId={item.videoId} />
                        </div>
                    )}
                </div>
                <div class="sidebar">
                    <Sidebar />
                </div>
            </div>
                
            </div>
            
            
            
        );
    }
}

export default VideoPage;

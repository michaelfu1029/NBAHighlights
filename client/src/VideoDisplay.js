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
            <div>
                <div class="sidebar">
                        <Sidebar />
                    </div>
                <div class="container">
                <div class="inner">
                    <div>
                        {this.props.videos.map((item) => 
                            <div class="video">
                                <h3>{item.title}</h3>
                                <Video videoId={item.videoId} />
                            </div>
                        )}
                    </div>
                    
                </div>   
            </div>
            </div>
            
            
            
            
        );
    }
}

export default VideoPage;

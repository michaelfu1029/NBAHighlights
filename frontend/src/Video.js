import React, { Component } from 'react';
import './Login.css';

class Video extends Component {
  render() {
    return (
        <iframe 
            width="560" 
            height="315" 
            src={"https://www.youtube.com/embed/" + this.props.videoId}
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    );
  }
}

export default Video;

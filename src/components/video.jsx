import React, { Component } from "react";
import YouTube from 'react-youtube';

export class Video extends Component {
  state = {};

  render() {
    const opts = {
      playerVars: { 
        autoplay: 1, 
        controls: 0,
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
      }
    };

    return (
      <div className="video_banner">
        <YouTube
          className="video_yt"
          videoId="bqJWBD8VmcY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          listType="user_uploads"
          opts={opts}
        />
      </div>
    );
  }
}

export default Video;

import React, { Component } from "react";

export class Video extends Component {
  state = {};

  render() {
    return (
      <div className="video_banner">
        <iframe
          className="video_yt"
          src="https://www.youtube.com/embed/bqJWBD8VmcY?&theme=dark&autohide=2&showinfo=0&autoplay=1&modestbranding=1&rel=0&controls=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Video;

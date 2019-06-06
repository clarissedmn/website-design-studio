import React, { Component } from "react";
import landscape from "..//img/landscape.jpeg";

class Banner extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="textintro">
          <h1 className="title">Discover Taïwan</h1>
          <p className="intro">
            Welcome to my web site ! Here is the report from an intercultural
            workshop that take place in Taïwan in April 2019 between Taiwanese,
            German and French students.{" "}
            <span className="emojis"> 🇹🇼 🇩🇪 🇫🇷</span>
          </p>
        </div>
        <img className="landscape" src={landscape} alt="Landscape" />
      </div>
    );
  }
}

export default Banner;

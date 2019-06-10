import React, { Component } from "react";
import fb from "..//img/facebook.svg";
import insta from "..//img/instagram.svg";
import linkedin from "..//img/linkedin.svg";
import flickr from "..//img/flickr.svg";
import github from "..//img/github.svg";

export class Footer extends Component {
  state = {
    load: false
  };

  render() {
    return (
      <div className="footer">
        <div className="container_footer">
          <span className="emoticone">👷🏼‍♀</span>
          <p className="credit_text">
            {" "}
            Site Built & Designed by Clarisse Damon @2019{" "}
          </p>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/clarisse.damon" target="_blank">
            <img
              className="icon"
              src={fb}
              alt="Facebook Icon"
              onClick={() => this.setState({ load: true })}
            />
          </a>
          <a href="https://www.instagram.com/clarissedmn/" target="_blank">
            <img
              className="icon"
              src={insta}
              alt="Instagram Icon"
              onClick={() => this.setState({ load: true })}
            />
          </a>
          <a href="https://www.linkedin.com/in/clarisse-damon/" target="_blank">
            <img
              className="icon"
              src={linkedin}
              alt="Linkedin Icon"
              onClick={() => this.setState({ load: true })}
            />
          </a>
          <a href="https://www.flickr.com/photos/clarisse_damon/" target="_blank">
            <img
              className="icon"
              src={flickr}
              alt="Flickr Icon"
              onClick={() => this.setState({ load: true })}
            />
          </a>
          <a href="https://github.com/clarissedmn" target="_blank">
            <img
              className="icon"
              src={github}
              alt="Github Icon"
              onClick={() => this.setState({ load: true })}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;

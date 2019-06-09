import React, { Component } from "react";

class Contact extends Component {
  state = { color: "black" };

  listenScrollEvent = e => {
    if (window.scrollY > 119) {
      this.setState({ color: "white" });
    } else {
      this.setState({ color: "black" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  handleClick = () => {
    window.scrollTo(0, 5000);
  };

  render() {
    return (
      <div>
        <h3
          style={{ color: this.state.color }}
          className="contact"
          onClick={this.handleClick}
        >
          CONTACT
        </h3>
      </div>
    );
  }
}

export default Contact;

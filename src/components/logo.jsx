import React, { Component } from "react";

class Logo extends Component {
  state = { color: "black" };

  handleClick = () => {
    window.scrollTo(0, 0);
  };

  listenScrollEvent = e => {
    if (window.scrollY > 720) {
      this.setState({ color: "white" });
    } else {
      this.setState({ color: "black" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <header className="App-header">
        <h1
          className="logo"
          onClick={this.handleClick}
          style={{ color: this.state.color }}
        >
          台湾
        </h1>
      </header>
    );
  }
}

export default Logo;

import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      slideOutClassName: "side-nav fixed",
      mainSlideClassName: "main",
    };
  }

  toggleSlideOut = () => {
    this.setState({
      slideOutClassName: !this.state.show ? "side-nav fixed" : "side-nav",
      mainSlideClassName: !this.state.show ? "main" : "main full",
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="App">
        <Header toggleSlideOut={this.toggleSlideOut} objState={this.state} />
        <Main toggleSlideOut={this.toggleSlideOut} objState={this.state} />
      </div>
    );
  }
}

export default App;

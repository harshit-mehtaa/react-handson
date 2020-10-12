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
      active: {
        header: "Tic-Tac-Toe",
        card: "tictactoe",
      }
    };
  }

  toggleSlideOut = () => {
    this.setState({
      slideOutClassName: !this.state.show ? "side-nav fixed" : "side-nav",
      mainSlideClassName: !this.state.show ? "main" : "main full",
      show: !this.state.show,
    });
  };

  setActiveTab = (header, card) => {
    this.setState({
      active: {
        header: header,
        card: card,
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header toggleSlideOut={this.toggleSlideOut} setActiveTab={this.setActiveTab} objState={this.state} />
        <Main toggleSlideOut={this.toggleSlideOut} setActiveTab={this.setActiveTab} objState={this.state} />
      </div>
    );
  }
}

export default App;

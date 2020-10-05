import React, { Component } from "react";
import TicTacToe from "./tictactoe/TicTacToe";
import "./ReactHandson.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <TicTacToe />
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import TicTacToe from "./tictactoe/TicTacToe";
import "./ReactHandson.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1 className="application" >Tic-Tac-Toe</h1>
        <div className="card">
          <TicTacToe />
        </div>
      </div>
    );
  }
}

export default Main;

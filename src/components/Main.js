import React, { Component } from "react";
import TicTacToe from "./tictactoe/TicTacToe";
import "./ReactHandson.css";

class Main extends Component {
  render() {
    console.log(this.props)
    return (
      <div id="main" className={this.props.objState.mainSlideClassName}>
        <h1 className="application">Tic-Tac-Toe</h1>
        <div className="card">
          <TicTacToe />
        </div>
      </div>
    );
  }
}

export default Main;

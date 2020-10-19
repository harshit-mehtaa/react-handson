import React, { Component } from "react";
import "./ReactHandson.css";
import TicTacToe from "./tictactoe/TicTacToe";
import Sudoku from "./sudoku/Sudoku";
import StopWatch from "./stopwatch/StopWatch";


class Main extends Component {
  render() {
    return (
      <div id="main" className={this.props.objState.mainSlideClassName}>
        <h1 className="application">{this.props.objState.active.header}</h1>
        <div className="card">
          {this.props.objState.active.card === "tictactoe" && <TicTacToe />}
          {this.props.objState.active.card === "sudoku" && <Sudoku />}
          {this.props.objState.active.card === "stopwatch" && <StopWatch />}
        </div>
      </div>
    );
  }
}

export default Main;

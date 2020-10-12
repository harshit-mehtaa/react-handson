import React, { Component } from "react";
import TicTacToe from "./tictactoe/TicTacToe";
import "./ReactHandson.css";
import Sudoku from "./sudoku/Sudoku";

class Main extends Component {
  render() {
    return (
      <div id="main" className={this.props.objState.mainSlideClassName}>
        <h1 className="application">{this.props.objState.active.header}</h1>
        <div className="card">
          {this.props.objState.active.card === "tictactoe" && <TicTacToe />}
          {this.props.objState.active.card === "sudoku" && <Sudoku />}
        </div>
      </div>
    );
  }
}

export default Main;

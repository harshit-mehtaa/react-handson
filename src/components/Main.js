import React, { Component } from "react";
import "./ReactHandson.css";
import TicTacToe from "./tictactoe/TicTacToe";
import Sudoku from "./sudoku/Sudoku";
import StopWatch from "./stopwatch/StopWatch";
import Camera from "./camera/Camera";


class Main extends Component {
  

  render() {
    const uploadImage = async file => {
      const formData = new FormData();
      formData.append('file', file);
  
      // Connect to a seaweedfs instance
  };
  
    return (
      <div id="main" className={this.props.objState.mainSlideClassName}>
        <h1 className="application">{this.props.objState.active.header}</h1>
        <div className="card">
          {this.props.objState.active.card === "tictactoe" && <TicTacToe />}
          {this.props.objState.active.card === "sudoku" && <Sudoku />}
          {this.props.objState.active.card === "stopwatch" && <StopWatch />}
          {this.props.objState.active.card === "camera" && <Camera  sendFile={uploadImage} />}
        </div>
      </div>
    );
  }
}

export default Main;

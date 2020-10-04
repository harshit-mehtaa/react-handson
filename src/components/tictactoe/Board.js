import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      squareClassName: Array(9).fill("square"),
      xIsNext: true,
      isEnabled: Array(9).fill(true),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";

    const squareClassName = this.state.squareClassName.slice();
    squareClassName[i] = this.state.xIsNext ? "square X" : "square O";

    const isEnabled = this.state.isEnabled.slice();
    isEnabled[i] = false;

    this.setState({
      squares: squares,
      squareClassName: squareClassName,
      xIsNext: !this.state.xIsNext,
      isEnabled: isEnabled,
    });
  }

  renderSquare(i) {
    return (
      <Square
        className={this.state.squareClassName[i]}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        disabled={this.state.isEnabled[i]}
      />
    );
  }

  resetGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      squareClassName: Array(9).fill("square"),
      xIsNext: true,
      isEnabled: Array(9).fill(true),
    });
  };

  render() {
    const winnerCells = calculateWinner(this.state.squares);
    let status;
    let statusSuccess;

    if (winnerCells) {
      status = "Winner: " + this.state.squares[winnerCells.slice()[0]];
      statusSuccess = "success";
    } else if (!this.state.squares.slice().includes(null)) {
      status = "Draw. Nobody wins";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <>
        <div className={"status " + statusSuccess}>{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="reset-button">
          <button onClick={this.resetGame}>Reset</button>
        </div>
      </>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export default Board;

import React, { Component } from "react";
import SudokuSquare from "./SudokuSquare";
import _ from "lodash";

class SudokuBoard extends Component {
  constructor(props) {
    super(props);

    const { sudoku, completeSudoku, isDisabled } = this.generateSudoku();

    this.state = {
      squares: [...[].concat(...sudoku)],
      origSudoku: [...[].concat(...sudoku)],
      completeSudoku: [...[].concat(...completeSudoku)],
      isDisabled: isDisabled,
      squareClassName: Array(81).fill("square sudoku-square"),
      lastSelected: null,

    };
  }

  renderSquare(i, number) {
    let classname = this.state.squareClassName[i];
    if (i % 9 === 2 || i % 9 === 5) {
      classname += " border-right-yellow";
    }
    if ((i >= 18 && i <= 26) || (i >= 45 && i <= 53)) {
      classname += " border-bottom-yellow";
    }

    // Disable pre-filled numbers
    if (this.state.isDisabled[i]) {
      classname += " red disabled";
    }

    return (
      <SudokuSquare
        className={classname}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderNumberPanel(i) {
    return (
      <SudokuSquare
        className="square sudoku-square number-panel-number"
        value={i}
        onClick={() => this.handleNumberPanelClick(i)}
      />
    );
  }

  handleNumberPanelClick(i) {
    const squares = this.state.squares.slice();
    if (i === "eraser") {
      squares[this.state.lastSelected] = null;
    } else {
      squares[this.state.lastSelected] = i;
    }

    const classname = this.state.squareClassName.slice();
    for (const index of [...Array(81).keys()]) {
      if (classname[index].includes("sudoku-square-blue")) {
        classname[index] = classname[index].replace(" sudoku-square-blue", "");
      }
      if (classname[index].includes("sudoku-square-active")) {
        classname[index] = classname[index].replace(
          " sudoku-square-active",
          ""
        );
      }
    }

    if (this.state.lastSelected !== null) {
      if (!classname[this.state.lastSelected].includes("sudoku-square-active")) {
        classname[this.state.lastSelected] += " sudoku-square-active";
      }
    }

    this.setState({
      squares: squares,
      squareClassName: classname,
    });
  }

  handleClick(i) {
    const classname = this.state.squareClassName.slice();

    // Gethering row cells
    const rowNum = Math.floor(i / 9);
    const rowCells = [];
    for (let j = rowNum * 9; j < rowNum * 9 + 9; j++) {
      rowCells.push(j);
    }

    // Gathering column cells
    const colNum = i % 9;
    const colCells = [];
    for (let j = colNum; j < 81; j += 9) {
      colCells.push(j);
    }

    // Gathering block (3x3)
    const rowBlockStartCells =
      Math.floor(rowNum / 3) * 27 + Math.floor(colNum / 3) * 3;
    const blockCells = [];

    for (let i = rowBlockStartCells; i < rowBlockStartCells + 27; i += 9) {
      for (let j = i; j < i + 3; j++) {
        blockCells.push(j);
      }
    }

    const blueCells = [...new Set([...rowCells, ...colCells, ...blockCells])];
    const nonBlueCells = [...Array(81).keys()].filter(
      (x) => !blueCells.includes(x)
    );

    for (const index of nonBlueCells) {
      // Removing blue if exists
      if (classname[index].includes("sudoku-square-blue")) {
        classname[index] = classname[index].replace(" sudoku-square-blue", "");
      }
      // Removing active if exists
      if (classname[index].includes("sudoku-square-active")) {
        classname[index] = classname[index].replace(
          " sudoku-square-active",
          ""
        );
      }
    }

    // Adding blue
    for (const index of blueCells) {
      if (!classname[index].includes("sudoku-square-blue")) {
        classname[index] += " sudoku-square-blue";
      }
    }

    // Remove previous selected cell as active
    if (this.state.lastSelected !== null) {
    classname[this.state.lastSelected] = classname[this.state.lastSelected].replace(
      " sudoku-square-active",
      ""
    );
    }

    // Change active cell
    if (!classname[i].includes("sudoku-square-active")) {
      classname[i] += " sudoku-square-active";
    }

    this.setState({
      squareClassName: classname,
      lastSelected: i,
    });
  }

  resetGame() {
    this.setState({
      squares: this.state.origSudoku,
      lastSelected: null,
    });
  }

  newGame() {
    const { sudoku, completeSudoku, isDisabled } = this.generateSudoku();

    this.setState({
      squares: [...[].concat(...sudoku)],
      origSudoku: [...[].concat(...sudoku)],
      completeSudoku: [...[].concat(...completeSudoku)],
      isDisabled: isDisabled,
      lastSelected: null,
    });
  }

  render() {
    return (
      <>
        <div className="sudoku-board">
          {JSON.stringify(this.state.squares) ===
            JSON.stringify(this.state.completeSudoku) ? (
              <div className={"status success"}>Winner</div>
            ) : (
              <></>
            )}
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
          </div>
          <div className="board-row">
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
          </div>
          <div className="board-row">
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
          </div>
          <div className="board-row">
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
          </div>
          <div className="board-row">
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
            {this.renderSquare(48)}
            {this.renderSquare(49)}
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
          </div>
          <div className="board-row">
            {this.renderSquare(54)}
            {this.renderSquare(55)}
            {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
          </div>
          <div className="board-row">
            {this.renderSquare(63)}
            {this.renderSquare(64)}
            {this.renderSquare(65)}
            {this.renderSquare(66)}
            {this.renderSquare(67)}
            {this.renderSquare(68)}
            {this.renderSquare(69)}
            {this.renderSquare(70)}
            {this.renderSquare(71)}
          </div>
          <div className="board-row">
            {this.renderSquare(72)}
            {this.renderSquare(73)}
            {this.renderSquare(74)}
            {this.renderSquare(75)}
            {this.renderSquare(76)}
            {this.renderSquare(77)}
            {this.renderSquare(78)}
            {this.renderSquare(79)}
            {this.renderSquare(80)}
          </div>
        </div>
        <div className="board-row number-panel">
          {this.renderNumberPanel(1)}
          {this.renderNumberPanel(2)}
          {this.renderNumberPanel(3)}
          {this.renderNumberPanel(4)}
          {this.renderNumberPanel(5)}
          {this.renderNumberPanel(6)}
          {this.renderNumberPanel(7)}
          {this.renderNumberPanel(8)}
          {this.renderNumberPanel(9)}
          <div
            type="button"
            className="square sudoku-square number-panel-number eraser"
            onClick={() => this.handleNumberPanelClick("eraser")}
          >
            <i className="fa fa-eraser"></i>
            </div>
        </div>
        <div className="reset">
          <button
            type="button"
            className="reset-button new-button"
            onClick={() => this.newGame()}
          >
            New
          </button>
          <button
            type="button"
            className="reset-button"
            onClick={() => this.resetGame()}
          >
            Reset
          </button>
        </div>
      </>
    );
  }

  find_empty_cell(sudoku) {
    for (const row of [...Array(9).keys()]) {
      for (const col of [...Array(9).keys()]) {
        if (sudoku[row][col] === 0) {
          return { row, col };
        }
      }
    }
    return null;
  }

  exists_in_row(sudoku, row, number) {
    return sudoku[row].includes(number);
  }

  exists_in_col(sudoku, col, number) {
    const temp = [];
    for (const row of sudoku) {
      temp.push(row[col]);
    }

    return temp.includes(number);
  }

  exists_in_mini_grid(sudoku, row, col, number) {
    const box_x = Math.floor(col / 3);
    const box_y = Math.floor(row / 3);

    for (const i of [...Array(box_y * 3 + 3).keys()].slice(box_y * 3)) {
      for (const j of [...Array(box_x * 3 + 3).keys()].slice(box_x * 3)) {
        if (sudoku[i][j] === number && !((i, j) === (row, col))) {
          return true;
        }
      }
    }
    return false;
  }

  cell_is_safe(sudoku, row, col, number) {
    return (
      !this.exists_in_row(sudoku, row, number) &&
      !this.exists_in_col(sudoku, col, number) &&
      !this.exists_in_mini_grid(sudoku, row, col, number)
    );
  }

  solve(sudoku) {
    const cell = this.find_empty_cell(sudoku);

    if (!cell) {
      return true;
    }

    const { row, col } = cell;

    for (const number of [...Array(10).keys()].slice(1)) {
      if (this.cell_is_safe(sudoku, row, col, number)) {
        sudoku[row][col] = number;
        if (this.solve(sudoku)) {
          return true;
        }
        sudoku[row][col] = 0;
      }
    }
    return false;
  }

  generateSudoku() {
    let sudoku = new Array(9).fill(0).map(() => new Array(9).fill(0));

    sudoku[Math.floor(Math.random() * 9)][Math.floor(Math.random() * 9)] =
      Math.floor(Math.random() * 8) + 1;
    this.solve(sudoku);

    let completeSudoku = _.cloneDeep(sudoku);

    let counter = 25;
    while (counter > 0) {
      sudoku[Math.floor(Math.random(1) * 9)][
        Math.floor(Math.random(2) * 9)
      ] = null;
      counter -= 1;
    }

    let isDisabled = [...[].concat(...sudoku)].reduce((isDisabled, x) => {
      if (x === null) {
        isDisabled.push(false)
      } else {
        isDisabled.push(true)
      }
      return isDisabled;
    }, []);

    return { sudoku, completeSudoku, isDisabled };
  }
}

export default SudokuBoard;

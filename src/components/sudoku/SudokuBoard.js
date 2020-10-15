import React, { Component } from 'react'
import SudokuSquare from './SudokuSquare';

class SudokuBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(81).fill(null),
            squareClassName: Array(81).fill("square sudoku-square"),
            xIsNext: true,
            isEnabled: Array(81).fill(true),
            lastSelected: null,
        };
    }

    renderSquare(i, number) {
        return (
            <SudokuSquare
                className={this.state.squareClassName[i]}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
                disabled={this.state.isEnabled[i]}
            />
        );
    }

    renderNumberPanel(i) {
        return (
            <SudokuSquare
                className="square sudoku-square number-panel-number"
                value={i}
                onClick={() => this.handleClick(i)}
                disabled={this.state.isEnabled[i]}
            />
        );
    }

    handleClick(i) {
        // const squares = this.state.squares.slice();
        // squares[i] = this.state.xIsNext ? "X" : "O";

        // const squareClassName = this.state.squareClassName.slice();
        // squareClassName[i] = this.state.xIsNext ? "square X" : "square O";

        // const isEnabled = this.state.isEnabled.slice();
        // isEnabled[i] = false;

        this.setState({
            //   squares: squares,
            //   squareClassName: squareClassName,
            //   xIsNext: !this.state.xIsNext,
            //   isEnabled: isEnabled,
            lastSelected: i,
        });
    }

    render() {
        // console.log(this.state)
        return (
            <>
                <div className="sudoku-board">
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
                        {this.renderSquare(19)}
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
                    <button type="button" className="reset-button sudoku-number-panel-empty">Empty</button>
                </div>
                <div className="reset">
                    <button type="button" className="reset-button" onClick={this.resetGame}>
                        Reset
                    </button>
                </div>
            </>
        )
    }
}

export default SudokuBoard

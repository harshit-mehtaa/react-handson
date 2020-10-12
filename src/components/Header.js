import React, { Component } from "react";
import tictactoe from "../tictactoe.svg";
import sudoku from "../sudoku.svg";
import "./ReactHandson.css";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className={this.props.objState.slideOutClassName}>
            <ul>
              <li onClick={() => this.props.setActiveTab("Tic-Tac-Toe", "tictactoe")}>
                <button>
                  <img
                    src={tictactoe}
                    className="side-nav-icon"
                    alt="tic-tac-toe"
                  />
                  <span>Tic-Tac-Toe</span>
                </button>
              </li>
              <li onClick={() => this.props.setActiveTab("Sudoku", "sudoku")}>
                <button>
                  <img
                    src={sudoku}
                    className="side-nav-icon"
                    alt="sudoku"
                  />
                  <span>Sudoku</span>
                </button>
              </li>
            </ul>
          </div>
          <Navbar toggleSlideOut={this.props.toggleSlideOut} />
        </header>
      </>
    );
  }
}

export default Header;

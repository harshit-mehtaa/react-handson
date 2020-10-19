import React, { Component } from "react";
import "./ReactHandson.css";
import tictactoe from "../img/tictactoe.svg";
import sudoku from "../img/sudoku.svg";
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
                  <span className={this.props.objState.active.card === "tictactoe" ? "side-nav-li-active" : ""}>Tic-Tac-Toe</span>
                </button>
              </li>
              <li onClick={() => this.props.setActiveTab("Sudoku", "sudoku")}>
                <button>
                  <img
                    src={sudoku}
                    className="side-nav-icon"
                    alt="sudoku"
                  />
                  <span className={this.props.objState.active.card === "sudoku" ? "side-nav-li-active" : ""}>Sudoku</span>
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

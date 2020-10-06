import React, { Component } from "react";
import gamepadicon from "../gamepad.svg"
import "./ReactHandson.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <button>
                <img src={gamepadicon} className="gamepad-icon" alt="gamepadicon" />
                <span>Tic-Tac-Toe</span>
              </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

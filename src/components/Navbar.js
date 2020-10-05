import React, { Component } from "react";
import "./ReactHandson.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <button>Tic-Tac-Toe</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

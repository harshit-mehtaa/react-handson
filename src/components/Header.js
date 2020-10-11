import React, { Component } from "react";
import gamepadicon from "../gamepad.svg";
import "./ReactHandson.css";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div id="slide-out" className={this.props.objState.slideOutClassName}>
            <ul>
              <li>
                <button>
                  <img
                    src={gamepadicon}
                    className="gamepad-icon"
                    alt="gamepadicon"
                  />
                  <span>Tic-Tac-Toe</span>
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

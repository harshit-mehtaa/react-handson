import React, { Component } from "react";
import logo from "../logo.svg";
import "./ReactHandson.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="nav fixed-top nav-expand-md">
          <div className="float-left">
            <a
              href="#"
              className="button-collapse"
              onClick={this.props.toggleSlideOut}
            >
              <i className="fas fa-bars"></i>
              <span className="sr-only" aria-hidden="true">
                Toggle side navigation
              </span>
            </a>
          </div>
          <div>
            <button className="app-name">
              <a href="/">
                <img src={logo} className="App-logo" alt="logo" />
                <span>React-Handson</span>
              </a>
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

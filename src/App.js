import React, { Component } from "react";
import "./App.css";

import Main from "./components/main";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Link to="/">JM</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Main />
      </div>
    );
  }
}

export default App;

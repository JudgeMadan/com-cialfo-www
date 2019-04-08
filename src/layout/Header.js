import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends React.Component {
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  render() {
    return (
      <Navbar
        bg="light"
        className="justify-content-between"
        fixed="top"
        sticky="top"
        expand="lg"
      >
        <Nav href="#home">
          <Link to="/" className="navbar-brand">
            Cialfo Logo
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link className="nav-link" to="/client">
              Features
            </Link>
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <NavDropdown title="Language">
              <NavDropdown.Item onClick={() => this.updateLocale("en-US")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.updateLocale("zh-CN")}>
                Chinese
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

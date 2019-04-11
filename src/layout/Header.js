import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavItem from "react-bootstrap/NavItem";

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
            <Link className="nav-link" to="/clients">
              Clients
            </Link>
            <Link className="nav-link" to="/features">
              Features
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
            <Link className="nav-link" to="/solutions">
              Solutions
            </Link>
            {this.props.locale !== "zh-CN" && (
              <NavItem
                onClick={() => this.updateLocale("zh-CN")}
                className="nav-link"
              >
                中文
              </NavItem>
            )}
            {this.props.locale === "zh-CN" && (
              <NavItem
                onClick={() => this.updateLocale("en-US")}
                className="nav-link "
              >
                English
              </NavItem>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

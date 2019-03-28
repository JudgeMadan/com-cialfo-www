import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends React.Component {
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  render() {
    return (
      <Navbar variant="dark" fixed="top" sticky="top" bg="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/" className="navbar-brand">
            Cialfo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/client">
              Clients
            </Link>
            <Link className="nav-link" to="/feature">
              Features
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

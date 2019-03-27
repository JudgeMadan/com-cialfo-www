import React from "react";
import { NavLink } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends React.Component {
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <Navbar variant="dark" fixed="top" sticky="top" bg="dark" expand="lg">
        <Navbar.Brand href="#home">
          <NavLink to="/" className="navbar-brand">
            Cialfo
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/client">
              Clients
            </NavLink>
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavLink
                className="nav-link text-secondary"
                to="/feature/feature-1"
              >
                Feature 1
              </NavLink>
              <NavLink
                className="nav-link text-secondary"
                to="/feature/feature-2"
              >
                Feature 2
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

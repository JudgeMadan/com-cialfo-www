import React from "react";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as contentful from "contentful";

class Header extends React.Component {
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      features: []
    }));
  };

  client = contentful.createClient({
    space: "kn93hfefankj",
    accessToken:
      "bddb1871044902e088b9aec331fca83c23351f0f2c390633d7a8e1b428317981"
  });

  componentWillMount() {
    this.fetchFeatures().then(this.setFeatures);
  }

  fetchFeatures = () =>
    this.client.getEntries({
      content_type: "features"
    });

  setFeatures = response => {
    this.setState({
      features: response.items
    });
  };

  render() {
    console.log(this.state);
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
            <NavDropdown title="Features" id="basic-nav-dropdown">
              {this.state.features.map(({ fields }, i) => (
                <h1
                // className="nav-link text-secondary"
                // to={`/feature/${fields.path}`}
                >
                  {fields.featureName}
                </h1>
              ))}
              {/* <Link className="nav-link text-secondary" to="/feature/feature-1">
                Feature 1
              </Link>
              <Link className="nav-link text-secondary" to="/feature/feature-2">
                Feature 2
                {{
                  pathname: `/client/${props.path}`,
                  state: { props }
                }}
              </Link> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

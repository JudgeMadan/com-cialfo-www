import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import "./Layout/Layout.css";
import Logo from "../img/Logo.svg";
import TranslateButton from "./header/TranslateButton";
import NavItem from "react-bootstrap/NavItem";
import MediaQuery from "react-responsive";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  fetchNavBar = () =>
    this.client.getEntries({
      content_type: "navBar",
      locale: this.props.locale
    });

  setNavBar = response => {
    const navBarContent = response.items[0].fields;
    for (let key in navBarContent) {
      this.setState({
        [key]: navBarContent[key]
      });
    }
  };

  componentDidMount() {
    this.fetchNavBar().then(this.setNavBar);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchNavBar().then(this.setNavBar);
    }
  }

  render() {
    return (
      <Navbar
        className="justify-content-between header"
        fixed="top"
        sticky="top"
        expand="lg"
      >
        <Nav href="#home">
          <NavLink to="/" className="navbar-brand">
            <img src={Logo} />
          </NavLink>
          {/* FULL SCREEN ONLY */}
          <MediaQuery query="(min-device-width: 1224px)">
            <NavItem className="nav-link blue-header-locale-text">
              | &nbsp;&nbsp; {this.props.spaceName}
            </NavItem>
          </MediaQuery>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink
              activeClassName="activeStyle"
              className="nav-link"
              to="/clients"
            >
              {this.state.clientsPage}
            </NavLink>
            <NavLink
              activeClassName="activeStyle"
              className="nav-link"
              to="/features"
            >
              {this.state.featuresPage}
            </NavLink>
            <NavLink
              activeClassName="activeStyle"
              className="nav-link"
              to="/about"
            >
              {this.state.aboutUsPage}
            </NavLink>
            {/* <Link className="nav-link" to="/resources">
              {this.state.resourcesPage}
            </Link> */}
            <NavLink
              activeClassName="activeStyle"
              className="nav-link"
              to="/solutions"
            >
              {this.state.solutionsPage}
            </NavLink>
            {this.props.country_code === "country_code=CN" && (
              <TranslateButton
                locale={this.props.locale}
                space={this.props.space}
                accessToken={this.props.accessToken}
                updateLocale={this.updateLocale}
              />
            )}
            <NavLink
              activeClassName="activeStyle"
              className="nav-link demo-page-link"
              to="/demo"
            >
              {this.state.demoPage}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

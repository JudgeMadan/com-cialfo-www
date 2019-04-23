import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import * as contentful from "contentful";
import NavItem from "react-bootstrap/NavItem";
import "./Layout/Layout.css";
import Logo from "./Layout/Logo.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
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
          <Link to="/" className="navbar-brand">
            <img src={Logo} />
            <span className="logo-text">Cialfo</span>
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link className="nav-link" to="/clients">
              {this.state.clientsPage}
            </Link>
            <Link className="nav-link" to="/features">
              {this.state.featuresPage}
            </Link>
            <Link className="nav-link" to="/about">
              {this.state.aboutUsPage}
            </Link>
            <Link className="nav-link" to="/resources">
              {this.state.resourcesPage}
            </Link>
            <Link className="nav-link" to="/solutions">
              {this.state.solutionsPage}
            </Link>
            {this.props.locale !== "zh-CN" && (
              <Link
                onClick={() => this.updateLocale("zh-CN")}
                className="nav-link "
              >
                中文
              </Link>
            )}
            {this.props.locale === "zh-CN" && (
              <Link
                onClick={() => this.updateLocale("en-US")}
                className="nav-link "
              >
                English
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

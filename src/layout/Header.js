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
import FullScreenHeaderLinks from "./header/FullScreenHeaderLinks";
import MobileHeaderLinks from "./header/MobileHeaderLinks";

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
    console.log(this.props);
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
          {/* <MediaQuery query="(min-device-width: 1224px)">
            <NavItem className="nav-link blue-header-locale-text">
              | &nbsp;&nbsp; {this.props.spaceName}
            </NavItem>
          </MediaQuery> */}
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* FULL WIDTH NAVBAR */}
          <MediaQuery query="(min-device-width: 1224px)">
            <FullScreenHeaderLinks
              aboutUsPage={this.state.aboutUsPage}
              clientsPage={this.state.clientsPage}
              demoPage={this.state.demoPage}
              featuresPage={this.state.featuresPage}
              resourcePage={this.state.resourcePage}
              solutionsPage={this.state.solutionsPage}
              country_code={this.props.country_code}
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
              updateLocale={this.updateLocale}
              spaceName={this.props.spaceName}
            />
          </MediaQuery>
          {/* MOBILE NAV BAR */}
          <MediaQuery query="(max-device-width: 1223px)">
            <MobileHeaderLinks
              aboutUsPage={this.state.aboutUsPage}
              clientsPage={this.state.clientsPage}
              demoPage={this.state.demoPage}
              featuresPage={this.state.featuresPage}
              resourcePage={this.state.resourcePage}
              solutionsPage={this.state.solutionsPage}
              country_code={this.props.country_code}
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
              updateLocale={this.updateLocale}
              spaceName={this.props.spaceName}
            />
          </MediaQuery>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import "../Layout/Layout.css";
import Logo from "../../img/Logo.svg";
import TranslateButton from "./TranslateButton";
import NavItem from "react-bootstrap/NavItem";
import MediaQuery from "react-responsive";

class FullScreenHeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  render() {
    return (
      <Nav>
        <NavLink
          activeClassName="activeStyle"
          className="nav-link"
          to="/clients"
        >
          {this.props.clientsPage}
        </NavLink>

        <NavLink
          activeClassName="activeStyle"
          className="nav-link"
          to="/features"
        >
          {this.props.featuresPage}
        </NavLink>
        <NavLink activeClassName="activeStyle" className="nav-link" to="/about">
          {this.props.aboutUsPage}
        </NavLink>
        {/* <Link className="nav-link" to="/resources">
              {this.state.resourcesPage}
            </Link> */}
        <NavLink
          activeClassName="activeStyle"
          className="nav-link"
          to="/solutions"
        >
          {this.props.solutionsPage}
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
          {this.props.demoPage}
        </NavLink>
        {/* FULL SCREEN ONLY */}
        <MediaQuery query="(min-device-width: 1224px)">
          <NavItem className="header-locale-text">
            {/* | &nbsp; {this.props.spaceName} */} {this.props.spaceName}
          </NavItem>
        </MediaQuery>
      </Nav>
    );
  }
}

export default FullScreenHeaderLinks;

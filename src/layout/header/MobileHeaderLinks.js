import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import "../Layout/Layout.css";
import Logo from "../../img/Logo.svg";
import MobileTranslateButton from "./MobileTranslateButton";
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
    console.log(this.props);
    return (
      <Nav>
        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link"
          to="/clients"
        >
          {this.props.clientsPage}
        </NavLink>

        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link"
          to="/features"
        >
          {this.props.featuresPage}
        </NavLink>
        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link"
          to="/about"
        >
          {this.props.aboutUsPage}
        </NavLink>
        {/* <Link className="mobile-nav-link" to="/resources">
              {this.state.resourcesPage}
            </Link> */}
        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link"
          to="/solutions"
        >
          {this.props.solutionsPage}
        </NavLink>
        {this.props.country_code === "country_code=CN" && (
          <MobileTranslateButton
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            updateLocale={this.updateLocale}
          />
        )}
        <NavLink
          activeClassName="mobile-activeStyle"
          className="mobile-nav-link demo-page-link"
          to="/demo"
        >
          {this.props.demoPage}
        </NavLink>
      </Nav>
    );
  }
}

export default FullScreenHeaderLinks;

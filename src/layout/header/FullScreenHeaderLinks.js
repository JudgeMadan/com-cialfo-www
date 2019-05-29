import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../Layout/Layout.css";
import TranslateButton from "./TranslateButton";
import PathToRegexp from "path-to-regexp";
import { withRouter } from "react-router-dom";

class FullScreenHeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  identifySpace = location => {
    const ROUTE = "/:space/:locale/:path+";
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    if (routeComponents) {
      return routeComponents[1];
    } else return;
  };

  render() {
    console.log(this.props.location.pathname);
    return (
      <Nav>
        <NavLink
          activeClassName="activeStyle"
          className="nav-link"
          to="clients"
        >
          {this.props.clientsPage}
        </NavLink>

        <NavLink
          activeClassName="activeStyle"
          className="nav-link"
          to="features"
        >
          {this.props.featuresPage}
        </NavLink>
        <NavLink activeClassName="activeStyle" className="nav-link" to="/about">
          {this.props.aboutUsPage}
        </NavLink>
        <NavLink
          activeClassName="activeStyle"
          className="nav-link"
          to="solutions"
        >
          {this.props.solutionsPage}
        </NavLink>
        {this.identifySpace(this.props.location) === "cn" && (
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
          to="demo"
        >
          {this.props.demoPage}
        </NavLink>
      </Nav>
    );
  }
}

export default withRouter(FullScreenHeaderLinks);

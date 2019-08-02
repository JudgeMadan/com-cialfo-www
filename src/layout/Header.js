import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import "./Layout/Layout.css";
import Logo from "../img/cialfo-vertical_blue@4x.png";
import TranslateButton from "./header/TranslateButton";
import NavItem from "react-bootstrap/NavItem";
import MediaQuery from "react-responsive";
import FullScreenHeaderLinks from "./header/FullScreenHeaderLinks";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile, parse } from "path-to-regexp";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateLocale = locale => {
    this.props.updateLocale(locale);
  };

  generateLocale = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location);
    // return routeComponents[2];
    if (routeComponents) {
      return routeComponents[2];
    } else return;
  };

  generateSpace = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location);
    if (routeComponents) {
      return routeComponents[1];
    } else return;
  };

  generateUrl = (path, location) => {
    const ROUTE = "/:space/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    if (routeComponents && routeComponents[3]) {
      return definePath({
        space: routeComponents[1],
        locale: routeComponents[2],
        path: path
      });
    } else if (routeComponents && routeComponents[3] == undefined) {
      return definePath({
        space: routeComponents[1],
        locale: routeComponents[2],
        path: "a"
      });
    }
  };

  setSpace = () => {
    if (this.generateSpace(this.props.location.pathname)) {
      if (this.generateSpace(this.props.location.pathname) === "cn") {
        return this.props.spaces.cn.space;
      } else if (this.generateSpace(this.props.location.pathname) === "intl") {
        return this.props.spaces.intl.space;
      } else if (this.generateSpace(this.props.location.pathname) === "in") {
        return this.props.spaces.india.space;
      } else if (this.generateSpace(this.props.location.pathname) === "us") {
        return this.props.spaces.us.space;
      }
    } else {
      if (this.props.spaceName === "china") {
        return this.props.spaces.cn.space;
      } else if (this.props.spaceName === "india") {
        return this.props.spaces.india.space;
      } else if (this.props.spaceName === "intl") {
        return this.props.spaces.intl.space;
      } else if (this.props.spaceName === "us") {
        return this.props.spaces.us.space;
      }
    }
  };

  setAccessToken = () => {
    if (this.generateSpace(this.props.location.pathname)) {
      if (this.generateSpace(this.props.location.pathname) === "cn") {
        return this.props.spaces.cn.accessToken;
      } else if (this.generateSpace(this.props.location.pathname) === "intl") {
        return this.props.spaces.intl.accessToken;
      } else if (this.generateSpace(this.props.location.pathname) === "in") {
        return this.props.spaces.india.accessToken;
      } else if (this.generateSpace(this.props.location.pathname) === "us") {
        return this.props.spaces.us.accessToken;
      }
    } else {
      if (this.props.spaceName === "china") {
        return this.props.spaces.cn.accessToken;
      } else if (this.props.spaceName === "intl") {
        return this.props.spaces.intl.accessToken;
      } else if (this.props.spaceName === "india") {
        return this.props.spaces.india.accessToken;
      } else if (this.props.spaceName === "us") {
        return this.props.spaces.us.accessToken;
      }
    }
  };

  fetchNavBar = () =>
    contentful
      .createClient({
        space: this.setSpace(),
        accessToken: this.setAccessToken(),
        environment: this.props.environment
      })
      .getEntries({
        content_type: "navBar",
        locale: this.generateLocale(this.props.location.pathname)
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
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchNavBar().then(this.setNavBar);
    }
  }

  render() {
    return (
      <Navbar
        className="justify-content-between header"
        fixed="top"
        sticky="top"
        expand="md"
      >
        <Nav href="#home">
          <NavLink
            to={this.generateUrl("home", this.props.location)}
            className="navbar-brand"
          >
            <img className="logo" src={Logo} />
          </NavLink>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <FullScreenHeaderLinks
            aboutUsPage={this.state.aboutUsPage}
            clientsPage={this.state.clientsPage}
            demoPage={this.state.demoPage}
            featuresPage={this.state.featuresPage}
            resourcePage={this.state.resourcePage}
            eventsPage={this.state.eventsPage}
            solutionsPage={this.state.solutionsPage}
            country_code={this.props.country_code}
            locale={this.props.locale}
            space={this.props.space}
            accessToken={this.props.accessToken}
            updateLocale={this.updateLocale}
            spaceName={this.props.spaceName}
            spaces={this.props.spaces}
          />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);

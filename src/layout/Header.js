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
import { contenfulConfig } from "../config/contentfulKeys"
import { DataContext } from "../contexts/DataContext"


class Header extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

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

  componentDidMount() {
    this.context.fetchEntries("navBar").then((response) => {
      let data = this.context.setContent(response)
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.context.fetchEntries("navBar").then((response) => {
        let data = this.context.setContent(response)
        this.setState({
          data: data
        })
      });
    }
  }

  render() {
    console.log(this.props)
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
            nameDemo={this.state.data.nameDemo}
            linkDemo={this.state.data.linkDemo}
            name={[this.state.data.name1, this.state.data.name2, this.state.data.name3, this.state.data.name4, this.state.data.name5, this.state.data.name6]}
            link={[this.state.data.link1, this.state.data.link2, this.state.data.link3, this.state.data.link4, this.state.data.link5, this.state.data.link6]}
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

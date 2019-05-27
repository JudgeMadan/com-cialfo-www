import React from "react";
import * as contentful from "contentful";
import NavItem from "react-bootstrap/NavItem";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile, parse } from "path-to-regexp";

class TranslateButton extends React.Component {
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

  generateUrl = (locale, location) => {
    console.log(location);
    const ROUTE = "/:locale(zh-CN|en-US)/:path*";
    console.log(ROUTE);
    const definePath = compile(ROUTE);

    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);

    let subPaths = null;
    if (routeComponents && routeComponents[2]) {
      subPaths = routeComponents[2].split("/");
    }
    return definePath({
      locale,
      path: subPaths
    });
  };

  render() {
    return (
      <div>
        {this.props.locale !== "zh-CN" && (
          <NavItem
            onClick={() => this.generateUrl("zh-CN", this.props.location)}
            className="nav-link translator"
            to="/"
          >
            中文
          </NavItem>
        )}
        {this.props.locale === "zh-CN" && (
          <NavItem
            onClick={() => this.updateLocale("zh-CN", this.props.location)}
            className="nav-link translator"
          >
            English
          </NavItem>
        )}
      </div>
    );
  }
}

export default withRouter(TranslateButton);

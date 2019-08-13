import React from "react";
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

  identifyLocale = location => {
    const ROUTE = "/:space/:locale/:path*";
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    return routeComponents[2];
  };


  generateUrl = (locale, location) => {
    const ROUTE = "/:space/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    let subPaths = null;
    if (routeComponents && routeComponents[3]) {
      subPaths = routeComponents[3].split("/");
      return definePath({
        space: routeComponents[1],
        locale: locale,
        path: subPaths
      });
    } else if (routeComponents && routeComponents[3] == undefined) {
      return definePath({
        space: routeComponents[1],
        locale: locale,
        path: "a"
      });
    }
  };

  componentDidMount() {
    this.generateUrl("zh-CN", this.props.location);
  }

  render() {
    return (
      <div>
        {this.identifyLocale(this.props.location) !== "zh-CN" && (
          <NavLink
            className="nav-link translator"
            to={this.generateUrl("zh-CN", this.props.location)}
          >
            中文
          </NavLink>
        )}
        {this.identifyLocale(this.props.location) === "zh-CN" && (
          <NavLink
            className="nav-link translator"
            to={this.generateUrl("en-US", this.props.location)}
          >
            English
          </NavLink>
        )}
      </div>
    );
  }
}

export default withRouter(TranslateButton);

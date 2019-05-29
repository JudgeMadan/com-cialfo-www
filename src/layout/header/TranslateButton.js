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

  generateUrl = (locale, location) => {
    console.log(location);
    const ROUTE = "/:space/:locale/:path*";

    const definePath = compile(ROUTE);

    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    console.log(routeComponents);

    // let subPaths = null;
    // if (routeComponents && routeComponents[2]) {
    //   subPaths = routeComponents[2].split("/");
    //   console.log(subPaths);
    // }

    // return definePath({
    //   locale,
    //   path: routeComponents
    // });
    // ("/cn/en-US/about");
    return definePath({
      space: routeComponents[1],
      locale: locale,
      path: "features" + `/` + "send"
    });
  };

  render() {
    return (
      <div>
        {this.props.locale !== "zh-CN" && (
          <NavLink
            className="nav-link translator"
            // to={this.generateUrl("zh-CN", this.props.location)}
            to={this.generateUrl("en-US", this.props.location)}
          >
            中文
          </NavLink>
        )}
        {this.props.locale === "zh-CN" && (
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

import React from "react";
import PathToRegexp, { compile, parse } from "path-to-regexp";
import { withRouter } from "react-router-dom";

class FourOhFourRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  identifyLocale = location => {
    const ROUTE = "/:space/:locale/:path+";
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    if (routeComponents) {
      return routeComponents[2];
    } else return;
  };

  redirect = () => {
    if (this.props.spaceName == "china") {
      let locale = this.identifyLocale(this.props.location)
      if (locale === "zh-CN" || locale === "en-US") {
        this.props.history.push(
          "/cn/" + locale + "/404"
        );
        return;
      } else {
        window.location.href = "/cn/en-US/404";
        return;
      }
    } else if (this.props.spaceName == "india") {
      let locale = this.identifyLocale(this.props.location)
      if (locale === "zh-CN" || locale === "en-US") {
        this.props.history.push(
          "/in/" + locale + "/404"
        );
        return;
      } else {
        window.location.href = "/in/en-US/404";
        return;
      }
    } else if (this.props.spaceName == "us") {
      let locale = this.identifyLocale(this.props.location)
      if (locale === "zh-CN" || locale === "en-US") {
        this.props.history.push(
          "/us/" + locale + "/404"
        );
        return;
      } else {
        window.location.href = "/us/en-US/404";
        return;
      }
    } else {
      let locale = this.identifyLocale(this.props.location)
      if (locale === "zh-CN" || locale === "en-US") {
        this.props.history.push(
          "/intl/" + locale + "/404"
        );
        return;
      } else {
        window.location.href = "/intl/en-US/404"; // hard refresh for accessToken
        return;
      }
    }
  };

  componentDidMount() {
    this.redirect();
  }

  render() {
    return <div />;
  }
}

export default withRouter(FourOhFourRedirect);

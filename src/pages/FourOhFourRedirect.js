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
      if (this.identifyLocale(this.props.location)) {
        this.props.history.push(
          "/cn/" + this.identifyLocale(this.props.location) + "/404"
        );
      } else {
        this.props.history.push("/cn/en-US/404");
      }
    } else {
      if (this.identifyLocale(this.props.location)) {
        this.props.history.push(
          "/intl/" + this.identifyLocale(this.props.location) + "/404"
        );
      } else {
        this.props.history.push("/intl/en-US/404");
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

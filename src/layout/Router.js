import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientStories from "../pages/ClientStories";
import Features from "../pages/Features";
import Home from "../pages/Home";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home locale={this.props.locale} />}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/clients"
          render={() => <ClientStories locale={this.props.locale} />}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/features"
          render={() => <Features locale={this.props.locale} />}
        />
        <Route render={() => <Home locale={this.props.locale} />} />
      </Switch>
    );
  }
}
export default Router;

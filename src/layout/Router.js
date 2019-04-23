import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientStories from "../pages/ClientStories";
import Features from "../pages/Features";
import Home from "../pages/Home";
import GetADemo from "../pages/GetADemo";
import FeaturesSend from "../pages/features/FeaturesSend";
import FeaturesResearch from "../pages/features/FeaturesResearch";
import FeaturesDocuments from "../pages/features/FeaturesDocuments";
import About from "../pages/About";

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
        <Route
          locale={this.props.locale}
          exact
          path="/about"
          render={() => <About locale={this.props.locale} />}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/features/send"
          render={() => <FeaturesSend locale={this.props.locale} />}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/features/research"
          render={() => <FeaturesResearch locale={this.props.locale} />}
        />
        {/* MAKE A 404 Page instead */}
        {/* <Route render={() => <Home locale={this.props.locale} />} /> */}
        <Route
          locale={this.props.locale}
          exact
          path="/features/documents"
          render={() => <FeaturesDocuments locale={this.props.locale} />}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/demo"
          render={() => <GetADemo locale={this.props.locale} />}
        />
      </Switch>
    );
  }
}
export default Router;

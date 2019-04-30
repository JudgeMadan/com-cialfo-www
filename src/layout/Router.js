import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientStories from "../pages/ClientStories";
import Features from "../pages/Features";
import Home from "../pages/Home";
import FeaturesSend from "../pages/features/FeaturesSend";
import FeaturesResearch from "../pages/features/FeaturesResearch";
import FeaturesDocuments from "../pages/features/FeaturesDocuments";
import About from "../pages/About";
import GetADemo from "../pages/GetADemo";
import GetInTouch from "../pages/GetInTouch";
import Privacy from "../pages/Privacy";
import Security from "../pages/Security";
import FourOhFour from "../pages/FourOhFour";
import ThankYou from "../pages/ThankYou";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
              getADemoEmail={this.props.getADemoEmail}
              sendEmailAddressToGetADemo={this.props.sendEmailAddressToGetADemo}
            />
          )}
        />
        {/* <Route
          locale={this.props.locale}
          exact
          path="/clients"
          render={() => (
            <ClientStories
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        /> */}
        <Route
          locale={this.props.locale}
          exact
          path="/features"
          render={() => (
            <Features
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/about"
          render={() => (
            <About
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/features/send"
          render={() => (
            <FeaturesSend
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/features/research"
          render={() => (
            <FeaturesResearch
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/features/documents"
          render={() => (
            <FeaturesDocuments
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/demo"
          render={() => (
            <GetADemo
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
              getADemoEmail={this.props.getADemoEmail}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/get_in_touch"
          render={() => (
            <GetInTouch
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/privacy"
          render={() => (
            <Privacy
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/security"
          render={() => (
            <Security
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/thank_you"
          render={() => (
            <ThankYou
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          render={() => (
            <FourOhFour
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
      </Switch>
    );
  }
}
export default Router;

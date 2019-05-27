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
import Solutions from "../pages/Solutions";
import SolutionsCounselors from "../pages/SolutionsCounselors";
import SolutionsIT from "../pages/SolutionsIT";
import SolutionsPrincipals from "../pages/SolutionsPrincipals";
import SolutionsSuperintendents from "../pages/SolutionsSuperintendents";
import ClientStoriesAmericanSchoolInJapan from "../pages/clientStories/ClientStoriesAmericanSchoolInJapan";
import ClientStoriesAmericanSchoolInChina from "../pages/clientStories/ClientStoriesAmericanSchoolInChina";
import Events from "../pages/Events";
import Downloads from "../pages/Downloads";
import TermsOfService from "../pages/TermsOfService";
import CialfoVSNaviance from "../pages/CialfoVSNaviance";
import CialfoVSBridgeU from "../pages/CialfoVSBridgeU";
import CialfoVSMaia from "../pages/CialfoVSMaia";
import { withRouter } from "react-router-dom";

class Router extends React.Component {
  render() {
    console.log(this.props.match);
    return (
      <Switch>
        {/* <Route
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
        /> */}
        <Route
          exact
          path={this.props.match.url + ":space" + "/" + ":locale"}
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
        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/clients"}
          render={() => (
            <ClientStories
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/clients/american-school-japan"
          render={() => (
            <ClientStoriesAmericanSchoolInJapan
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/clients/american-school-china"
          render={() => (
            <ClientStoriesAmericanSchoolInChina
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
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
          path="/contact"
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
          path="/thank-you"
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
          path="/solutions"
          render={() => (
            <Solutions
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/solutions/counselors"
          render={() => (
            <SolutionsCounselors
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/solutions/it"
          render={() => (
            <SolutionsIT
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/solutions/principals"
          render={() => (
            <SolutionsPrincipals
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/solutions/superintendents"
          render={() => (
            <SolutionsSuperintendents
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/events"
          render={() => (
            <Events
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/downloads"
          render={() => (
            <Downloads
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/terms-of-service"
          render={() => (
            <TermsOfService
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/cialfo-vs-naviance"
          render={() => (
            <CialfoVSNaviance
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/cialfo-vs-bridge-u"
          render={() => (
            <CialfoVSBridgeU
              locale={this.props.locale}
              space={this.props.space}
              accessToken={this.props.accessToken}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path="/cialfo-vs-maia"
          render={() => (
            <CialfoVSMaia
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
export default withRouter(Router);

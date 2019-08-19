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
import SolutionsFamilies from "../pages/SolutionsFamilies";
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
import Redirect from "../pages/Redirect";
import FourOhFourRedirect from "../pages/FourOhFourRedirect";
import { withRouter } from "react-router-dom";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/home"}
          render={() => (
            <Home
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
            <ClientStories />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/clients-american-school-japan"
          }
          render={() => (
            <ClientStoriesAmericanSchoolInJapan />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/clients-american-school-china"
          }
          render={() => (
            <ClientStoriesAmericanSchoolInChina />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/features"}
          render={() => (
            <Features />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/about"}
          render={() => (
            <About />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url + ":space" + "/" + ":locale" + "/features-send"
          }
          render={() => (
            <FeaturesSend />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/features-research"
          }
          render={() => (
            <FeaturesResearch />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/features-report"
          }
          render={() => (
            <FeaturesDocuments />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/demo"}
          render={() => (
            <GetADemo
              getADemoEmail={this.props.getADemoEmail}
            />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/contact"}
          render={() => (
            <GetInTouch />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/privacy-policy"}
          render={() => (
            <Privacy />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/security"}
          render={() => (
            <Security />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url + ":space" + "/" + ":locale" + "/thank-you"
          }
          render={() => (
            <ThankYou />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url + ":space" + "/" + ":locale" + "/solutions"
          }
          render={() => (
            <Solutions />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/solutions-counselors"
          }
          render={() => (
            <SolutionsCounselors />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url + ":space" + "/" + ":locale" + "/solutions-it"
          }
          render={() => (
            <SolutionsIT />
          )}
        />

        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/solutions-principals"
          }
          render={() => (
            <SolutionsPrincipals />
          )}
        />

        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/solutions-superintendents"
          }
          render={() => (
            <SolutionsSuperintendents />
          )}
        />

        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/solutions-families"
          }
          render={() => (
            <SolutionsFamilies />
          )}
        />

        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/events"}
          render={() => (
            <Events />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url + ":space" + "/" + ":locale" + "/downloads"
          }
          render={() => (
            <Downloads />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/terms-of-service"
          }
          render={() => (
            <TermsOfService />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/terms-and-conditions"
          }
          render={() => (
            <TermsOfService />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/cialfo-vs-naviance"
          }
          render={() => (
            <CialfoVSNaviance />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/cialfo-vs-bridge-u"
          }
          render={() => (
            <CialfoVSBridgeU />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={
            this.props.match.url +
            ":space" +
            "/" +
            ":locale" +
            "/cialfo-vs-maia"
          }
          render={() => (
            <CialfoVSMaia />
          )}
        />
        <Route
          locale={this.props.locale}
          exact
          path={this.props.match.url + ":space" + "/" + ":locale" + "/404"}
          render={() => (
            <FourOhFour />
          )}
        />
        <Route
          exact
          path={this.props.match.url + ":space/*"}
          render={() => (
            <FourOhFourRedirect
              spaceName={this.props.spaceName}
            />
          )}
        />
        <Route
          exact
          render={() => (
            <Redirect
              spaceName={this.props.spaceName}
              getADemoEmail={this.props.getADemoEmail}
              sendEmailAddressToGetADemo={this.props.sendEmailAddressToGetADemo}
            />
          )}
        />
      </Switch>
    );
  }
}
export default withRouter(Router);

import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import "./home/Home.css";
import SolutionsHeader from "./solutions/SolutionsHeader";
import MobileSolutionsHeader from "./solutions/MobileSolutionsHeader";
import SolutionsRightSideText from "./solutions/SolutionsRightSideText";
import MobileSolutionsContentText from "./solutions/MobileSolutionsContentText";
import SolutionsLeftSideText from "./solutions/SolutionsLeftSideText";
import FeaturesSubfooter from "./features/featuresSharedComponents/FeaturesSubfooter";
import PartnerImages from "./PartnerImages";
import MobilePartnerImages from "./MobilePartnerImages";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import DemoCallToAction from "./sharedComponents/DemoCallToAction"

class Solutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forCounselors: "solutions-counselors-link-text",
      forIT: "solutions-it-link-text",
      forPrincipals: "solutions-principals-link-text",
      forSuperintendents: "solutions-superintendents-link-text"
    };
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken(),
    environment: this.props.environment
  });

  componentDidMount() {
    this.fetchFeatures().then(this.setFeatures);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchFeatures().then(this.setFeatures);
    }
  }

  fetchFeatures = () => {
    return this.client.getEntries({
      content_type: "homePageHeaderProductImage",
      locale: this.props.match.params.locale
    });
  };

  setFeatures = response => {
    const solutionsContent = response.items;
    let filteredSolutionsContent = solutionsContent.filter(
      solution => solution.fields.pageType === "solutions"
    );
    let filteredSolutionsContentFields = filteredSolutionsContent[0].fields;
    for (let key in filteredSolutionsContentFields) {
      if (typeof filteredSolutionsContentFields[key] === "string") {
        this.setState({
          [key]: filteredSolutionsContentFields[key]
        });
      } else if (Array.isArray(filteredSolutionsContentFields[key])) {
        this.setState({
          [key]: filteredSolutionsContentFields[key].map(
            img => img.fields.file.url
          )
        });
      } else {
        this.setState({
          [key]: filteredSolutionsContentFields[key].fields.file.url
        });
      }
    }
  };

  render() {
    const space = this.props.match.params.space;
    return (
      <Container className="homePageContainer" fluid>
        {/* FULL PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsHeader
            title={this.state.homePageHeaderTitle}
            subtitle={this.state.homePageHeaderBlurb}
            isSolutionsPage="true"
          />
        </MediaQuery>
        {/* MOBILE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsHeader
            title={this.state.homePageHeaderTitle}
            subtitle={this.state.homePageHeaderBlurb}
            isSolutionsPage="true"
          />
        </MediaQuery>
        {/* FULL PAGE RIGHT SIDE COUNSELORS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsRightSideText
            title={this.state.homePageFeaturesSendDocumentTitle}
            blurb={this.state.homePageFeaturesSendDocumentBlurb}
            link={this.state.homePageFeaturesSendDocumentLinkText}
            url={this.state.homePageFeaturesSendDocumentLinkUrl}
            linkStyle={this.state.forCounselors}
            image={this.state.solutionsForCounselorImage}
          />
        </MediaQuery>
        {/* MOBILE RIGHT SIDE COUNSELORS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsContentText
            title={this.state.homePageFeaturesSendDocumentTitle}
            blurb={this.state.homePageFeaturesSendDocumentBlurb}
            link={this.state.homePageFeaturesSendDocumentLinkText}
            url={this.state.homePageFeaturesSendDocumentLinkUrl}
            linkStyle={this.state.forCounselors}
            image={this.state.solutionsForCounselorImage}
          />
        </MediaQuery>
        {/* FULL SCREEN FOR PRINCIPALS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsLeftSideText
            title={this.state.homePageFeaturesDiscoverTitle}
            blurb={this.state.homePageFeaturesDiscoverBlurb}
            link={this.state.homePageFeaturesDiscoverLinkText}
            url={this.state.homePageFeaturesDiscoveryLinkUrl}
            linkStyle={this.state.forPrincipals}
            image={this.state.solutionsForPrincipalsImage}
          />
        </MediaQuery>
        {/* MOBILE FOR PRINCIPALS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsContentText
            title={this.state.homePageFeaturesDiscoverTitle}
            blurb={this.state.homePageFeaturesDiscoverBlurb}
            link={this.state.homePageFeaturesDiscoverLinkText}
            url={this.state.homePageFeaturesDiscoveryLinkUrl}
            linkStyle={this.state.forPrincipals}
            image={this.state.solutionsForPrincipalsImage}
          />
        </MediaQuery>
        <div className="solutions-bottom-spacing" />
        {/* FULL SCREEN FOR SUPERINTENDENTS (US) / FAMILIES (INDIA) */}
        {(space == "us" || space == "in") && (
          <MediaQuery query="(min-device-width: 1224px)">
            <SolutionsRightSideText
              title={this.state.solutionsExtraTitle}
              blurb={this.state.solutionsExtraBlurb}
              link={this.state.solutionsExtraLinkText}
              url={this.state.solutionsExtraLinkUrl}
              linkStyle={this.state.forSuperintendents}
              image={space == "us" ? this.state.solutionsForSuperintendentsImage : this.state.solutionsForFamiliesImage}
            />
          </MediaQuery>
        )}
        {/* MOBILE FOR SUPERINTENDENTS (US) / FAMILIES (INDIA) */}
        {(space == "us" || space == "in") && (
          <MediaQuery query="(max-device-width: 1223px)">
            <MobileSolutionsContentText
              title={this.state.solutionsExtraTitle}
              blurb={this.state.solutionsExtraBlurb}
              link={this.state.solutionsExtraLinkText}
              url={this.state.solutionsExtraLinkUrl}
              linkStyle={this.state.forSuperintendents}
              image={space == "us" ? this.state.solutionsForSuperintendentsImage : this.state.solutionsForFamiliesImage}
            />
          </MediaQuery>
        )}
        {/* FULL SCREEN PARTNERS IMAGES */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="full-width-light-blue center-in-row">
            <PartnerImages
              locale={this.props.locale}
              className="partnerImages"
              partnerImages={this.state.homePagePoweredByOurPartnersPartners}
              accessToken={this.props.accessToken}
              space={this.props.space}
              title={this.state.homePagePoweredByOurPartnersTitle}
            />
          </div>
        </MediaQuery>
        {/* MOBILE PARTNERS IMAGES */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobilePartnerImages
            locale={this.props.locale}
            className="partnerImages "
            partnerImages={this.state.homePagePoweredByOurPartnersPartners}
            accessToken={this.props.accessToken}
            space={this.props.space}
            title={this.state.homePagePoweredByOurPartnersTitle}
          />
        </MediaQuery>
        <div className="solutions-bottom-spacing" />
        {/* <MediaQuery query="(min-device-width: 1224px)">
          {space !== "us" && (
            <FeaturesSubfooter
              img={this.state.solutionsSubfooterImg}
              quote={this.state.solutionsSubfooterQuote}
              quoteAuthor={this.state.solutionsSubfooterQuoteAuthor}
            />
          )}
        </MediaQuery> */}
        <DemoCallToAction />
      </Container>
    );
  }
}

export default withRouter(Solutions);

import React from "react";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./home/Home.css";
import Documents from "../img/home/CDocs.svg";
import ResearchImage from "../img/home/SchoolsOverview.svg";
import Reports from "../img/home/Reports.svg";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import SolutionsHeader from "./solutions/SolutionsHeader";
import MobileSolutionsHeader from "./solutions/MobileSolutionsHeader";
import SolutionsRightSideText from "./solutions/SolutionsRightSideText";
import MobileSolutionsContentText from "./solutions/MobileSolutionsContentText";
import SolutionsLeftSideText from "./solutions/SolutionsLeftSideText";
import FeaturesSubfooter from "./features/FeaturesSubfooter";
import PartnerImages from "./PartnerImages";
import MobilePartnerImages from "./MobilePartnerImages";
import MediaQuery from "react-responsive";
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

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchFeatures().then(this.setFeatures);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchFeatures().then(this.setFeatures);
    }
  }

  fetchFeatures = () => {
    return this.client.getEntries({
      content_type: "homePageHeaderProductImage",
      locale: this.props.locale
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
    console.log(this.state);
    return (
      <Container className="homePageContainer">
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
          />
        </MediaQuery>
        {/* FULL PAGE LEFT SIDE IT TEAM */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsLeftSideText
            title={this.state.homePageFeaturesLeverageTitle}
            blurb={this.state.homePageFeaturesLeverageBlurb}
            link={this.state.homePageFeaturesLeverageLinkText}
            url={this.state.homePageFeaturesLeverageLinkUrl}
            linkStyle={this.state.forIT}
          />
        </MediaQuery>
        {/* MOBILE IT TEAM */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsContentText
            title={this.state.homePageFeaturesLeverageTitle}
            blurb={this.state.homePageFeaturesLeverageBlurb}
            link={this.state.homePageFeaturesLeverageLinkText}
            url={this.state.homePageFeaturesLeverageLinkUrl}
            linkStyle={this.state.forIT}
          />
        </MediaQuery>
        {/* FULL SCREEN FOR PRINCIPALS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsRightSideText
            title={this.state.homePageFeaturesDiscoverTitle}
            blurb={this.state.homePageFeaturesDiscoverBlurb}
            link={this.state.homePageFeaturesDiscoverLinkText}
            url={this.state.homePageFeaturesDiscoveryLinkUrl}
            linkStyle={this.state.forPrincipals}
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
          />
        </MediaQuery>
        {/* FULL SCREEN FOR SUPERINTENDENTS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsLeftSideText
            title={this.state.solutionsExtraTitle}
            blurb={this.state.solutionsExtraBlurb}
            link={this.state.solutionsExtraLinkText}
            url={this.state.solutionsExtraLinkUrl}
            linkStyle={this.state.forSuperintendents}
          />
        </MediaQuery>
        {/* MOBILE FOR SUPERINTENDENTS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsContentText
            title={this.state.solutionsExtraTitle}
            blurb={this.state.solutionsExtraBlurb}
            link={this.state.solutionsExtraLinkText}
            url={this.state.solutionsExtraLinkUrl}
            linkStyle={this.state.forSuperintendents}
          />
        </MediaQuery>
        <div className="solutions-bottom-spacing" />
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
        <MediaQuery query="(min-device-width: 1224px)">
          <FeaturesSubfooter
            img={this.state.solutionsSubfooterImg}
            quote={this.state.solutionsSubfooterQuote}
            quoteAuthor={this.state.solutionsSubfooterQuoteAuthor}
          />
        </MediaQuery>
      </Container>
    );
  }
}

export default Solutions;

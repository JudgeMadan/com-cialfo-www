import React from "react";
import Container from "react-bootstrap/Container";
import "./home/Home.css";
import SolutionsHeader from "./solutions/SolutionsHeader";
import MobileSolutionsHeader from "./solutions/MobileSolutionsHeader";
import SolutionsRightSideText from "./solutions/SolutionsRightSideText";
import MobileSolutionsContentText from "./solutions/MobileSolutionsContentText";
import SolutionsLeftSideText from "./solutions/SolutionsLeftSideText";
import PartnerImages from "./PartnerImages";
import MobilePartnerImages from "./MobilePartnerImages";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import DemoCallToAction from "./sharedComponents/DemoCallToAction";
import { DataContext } from "../contexts/DataContext";

class Solutions extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      forCounselors: "solutions-counselors-link-text",
      forIT: "solutions-it-link-text",
      forPrincipals: "solutions-principals-link-text",
      forSuperintendents: "solutions-superintendents-link-text",
      data: {}
    };
  }

  componentDidMount() {
    this.context.fetchEntries("homePageHeaderProductImage").then((response) => {
      let data = this.context.setContent(response, "solutions")
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("homePageHeaderProductImage").then((response) => {
        let data = this.context.setContent(response, "solutions")
        this.setState({
          data: data
        })
      });
    }
  }

  render() {
    const space = this.props.match.params.space;
    return (
      <Container className="homePageContainer" fluid>
        {/* FULL PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsHeader
            title={this.state.data.homePageHeaderTitle}
            subtitle={this.state.data.homePageHeaderBlurb}
            isSolutionsPage="true"
          />
        </MediaQuery>
        {/* MOBILE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsHeader
            title={this.state.data.homePageHeaderTitle}
            subtitle={this.state.data.homePageHeaderBlurb}
            isSolutionsPage="true"
          />
        </MediaQuery>
        {/* FULL PAGE RIGHT SIDE COUNSELORS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsRightSideText
            title={this.state.data.homePageFeaturesSendDocumentTitle}
            blurb={this.state.data.homePageFeaturesSendDocumentBlurb}
            link={this.state.data.homePageFeaturesSendDocumentLinkText}
            url={this.state.data.homePageFeaturesSendDocumentLinkUrl}
            linkStyle={this.state.forCounselors}
            image={this.state.data.solutionsForCounselorImage}
          />
        </MediaQuery>
        {/* MOBILE RIGHT SIDE COUNSELORS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsContentText
            title={this.state.data.homePageFeaturesSendDocumentTitle}
            blurb={this.state.data.homePageFeaturesSendDocumentBlurb}
            link={this.state.data.homePageFeaturesSendDocumentLinkText}
            url={this.state.data.homePageFeaturesSendDocumentLinkUrl}
            linkStyle={this.state.forCounselors}
            image={this.state.data.solutionsForCounselorImage}
          />
        </MediaQuery>
        {/* FULL SCREEN FOR PRINCIPALS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsLeftSideText
            title={this.state.data.homePageFeaturesDiscoverTitle}
            blurb={this.state.data.homePageFeaturesDiscoverBlurb}
            link={this.state.data.homePageFeaturesDiscoverLinkText}
            url={this.state.data.homePageFeaturesDiscoveryLinkUrl}
            linkStyle={this.state.forPrincipals}
            image={this.state.data.solutionsForPrincipalsImage}
          />
        </MediaQuery>
        {/* MOBILE FOR PRINCIPALS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsContentText
            title={this.state.data.homePageFeaturesDiscoverTitle}
            blurb={this.state.data.homePageFeaturesDiscoverBlurb}
            link={this.state.data.homePageFeaturesDiscoverLinkText}
            url={this.state.data.homePageFeaturesDiscoveryLinkUrl}
            linkStyle={this.state.forPrincipals}
            image={this.state.data.solutionsForPrincipalsImage}
          />
        </MediaQuery>
        <div className="solutions-bottom-spacing" />
        {/* FULL SCREEN FOR SUPERINTENDENTS (US) / FAMILIES (INDIA) */}
        {(space == "us" || space == "in") && (
          <MediaQuery query="(min-device-width: 1224px)">
            <SolutionsRightSideText
              title={this.state.data.solutionsExtraTitle}
              blurb={this.state.data.solutionsExtraBlurb}
              link={this.state.data.solutionsExtraLinkText}
              url={this.state.data.solutionsExtraLinkUrl}
              linkStyle={this.state.forSuperintendents}
              image={space == "us" ? this.state.data.solutionsForSuperintendentsImage : this.state.data.solutionsForFamiliesImage}
            />
          </MediaQuery>
        )}
        {/* MOBILE FOR SUPERINTENDENTS (US) / FAMILIES (INDIA) */}
        {(space == "us" || space == "in") && (
          <MediaQuery query="(max-device-width: 1223px)">
            <MobileSolutionsContentText
              title={this.state.data.solutionsExtraTitle}
              blurb={this.state.data.solutionsExtraBlurb}
              link={this.state.data.solutionsExtraLinkText}
              url={this.state.data.solutionsExtraLinkUrl}
              linkStyle={this.state.forSuperintendents}
              image={space == "us" ? this.state.data.solutionsForSuperintendentsImage : this.state.data.solutionsForFamiliesImage}
            />
          </MediaQuery>
        )}
        {/* FULL SCREEN PARTNERS IMAGES */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="full-width-light-blue center-in-row">
            <PartnerImages
              locale={this.props.locale}
              className="partnerImages"
              partnerImages={this.state.data.homePagePoweredByOurPartnersPartners}
              accessToken={this.props.accessToken}
              space={this.props.space}
              title={this.state.data.homePagePoweredByOurPartnersTitle}
            />
          </div>
        </MediaQuery>
        {/* MOBILE PARTNERS IMAGES */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobilePartnerImages
            locale={this.props.locale}
            className="partnerImages "
            partnerImages={this.state.data.homePagePoweredByOurPartnersPartners}
            accessToken={this.props.accessToken}
            space={this.props.space}
            title={this.state.data.homePagePoweredByOurPartnersTitle}
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

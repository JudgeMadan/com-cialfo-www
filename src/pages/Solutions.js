import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Documents from "../img/home/CDocs.svg";
import ResearchImage from "../img/home/SchoolsOverview.svg";
import Reports from "../img/home/Reports.svg";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import SolutionsHeader from "./solutions/SolutionsHeader";
import SolutionsRightSideText from "./solutions/SolutionsRightSideText";
import SolutionsLeftSideText from "./solutions/SolutionsLeftSideText";
import FeaturesSubfooter from "./features/FeaturesSubfooter";
import HomePartnerImages from "./home/HomePartnerImages";
class Solutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          [key]: filteredSolutionsContentFields[key]
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
        <SolutionsHeader
          title={this.state.homePageHeaderTitle}
          subtitle={this.state.homePageHeaderBlurb}
        />
        <SolutionsRightSideText
          title={this.state.homePageFeaturesSendDocumentTitle}
          blurb={this.state.homePageFeaturesSendDocumentBlurb}
          link={this.state.homePageFeaturesSendDocumentLinkText}
          url={this.state.homePageFeaturesSendDocumentLinkUrl}
        />
        <SolutionsLeftSideText
          title={this.state.homePageFeaturesLeverageTitle}
          blurb={this.state.homePageFeaturesLeverageBlurb}
          link={this.state.homePageFeaturesLeverageLinkText}
          url={this.state.homePageFeaturesLeverageLinkUrl}
        />
        <SolutionsRightSideText
          title={this.state.homePageFeaturesDiscoverTitle}
          blurb={this.state.homePageFeaturesDiscoverBlurb}
          link={this.state.homePageFeaturesDiscoverLinkText}
          url={this.state.homePageFeaturesDiscoveryLinkUrl}
        />
        <SolutionsLeftSideText
          title={this.state.solutionsExtraTitle}
          blurb={this.state.solutionsExtraBlurb}
          link={this.state.solutionsExtraLinkText}
          url={this.state.solutionsExtraLinkUrl}
        />
        <div className="solutions-bottom-spacing" />
        <HomePartnerImages
          locale={this.props.locale}
          accessToken={this.props.accessToken}
          space={this.props.space}
        />
        <div className="solutions-bottom-spacing" />
        <FeaturesSubfooter
          img={this.state.solutionsSubfooterImg}
          quote={this.state.solutionsSubfooterQuote}
          quoteAuthor={this.state.solutionsSubfooterQuoteAuthor}
        />
      </Container>
    );
  }
}

export default Solutions;

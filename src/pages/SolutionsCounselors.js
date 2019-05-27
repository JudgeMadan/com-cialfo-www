import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import SolutionsSubPage from "./solutions/SolutionsSubPage";

class SolutionsCounselors extends React.Component {
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
      solution => solution.fields.pageType === "solutionsCounselors"
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
    return (
      <Container className="homePageContainer">
        <SolutionsSubPage
          locale={this.props.locale}
          accessToken={this.props.accessToken}
          space={this.props.space}
          pageTitle={this.state.homePageHeaderTitle}
          pageSubtitle={this.state.homePageHeaderBlurb}
          topRowTitle={this.state.homePageFeaturesSendDocumentTitle}
          topRowBlurb={this.state.homePageFeaturesSendDocumentBlurb}
          subFooterImg={this.state.solutionsSubfooterImg}
          subFooterQuote={this.state.solutionsSubfooterQuote}
          subFooterQuoteAuthor={this.state.solutionsSubfooterQuoteAuthor}
          subFooterQuoteCredit={this.state.solutionsSubfooterQuoteAuthorCredit}
          bottomRowTitle={this.state.homePageFeaturesLeverageTitle}
          bottomRowBlurb={this.state.homePageFeaturesLeverageBlurb}
        />
      </Container>
    );
  }
}

export default SolutionsCounselors;

import React from "react";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import SolutionsSubPage from "./solutions/SolutionsSubPage";
import { withRouter } from "react-router-dom";

class SolutionsFamilies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      solution => solution.fields.pageType === "solutionsFamilies"
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
      <Container fluid={true}>
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
          spaces={this.props.spaces}
          setSpace={this.props.setSpace}
          setAccessToken={this.props.setAccessToken}
          topRowImage={this.state.solutionsSubPageTopImage}
          bottomRowImage={this.state.solutionsSubPageBottomImage}
          environment={this.props.environment}
        />
      </Container>
    );
  }
}

export default withRouter(SolutionsFamilies);

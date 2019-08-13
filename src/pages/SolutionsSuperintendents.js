import React from "react";
import Container from "react-bootstrap/Container";
import SolutionsSubPage from "./solutions/SolutionsSubPage";
import { withRouter } from "react-router-dom";
import { DataContext } from "../contexts/DataContext"

class SolutionsSuperintendents extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.context.fetchEntries("homePageHeaderProductImage").then((response) => {
      let data = this.context.setContent(response, "solutionsSuperintendents")
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("homePageHeaderProductImage").then((response) => {
        let data = this.context.setContent(response, "solutionsSuperintendents")
        this.setState({
          data: data
        })
      });
    }
  }

  render() {
    return (
      <Container fluid={true}>
        <SolutionsSubPage
          pageTitle={this.state.data.homePageHeaderTitle}
          pageSubtitle={this.state.data.homePageHeaderBlurb}
          topRowTitle={this.state.data.homePageFeaturesSendDocumentTitle}
          topRowBlurb={this.state.data.homePageFeaturesSendDocumentBlurb}
          subFooterImg={this.state.data.solutionsSubfooterImg}
          subFooterQuote={this.state.data.solutionsSubfooterQuote}
          subFooterQuoteAuthor={this.state.data.solutionsSubfooterQuoteAuthor}
          subFooterQuoteCredit={this.state.data.solutionsSubfooterQuoteAuthorCredit}
          bottomRowTitle={this.state.data.homePageFeaturesLeverageTitle}
          bottomRowBlurb={this.state.data.homePageFeaturesLeverageBlurb}
          topRowImage={this.state.data.solutionsSubPageTopImage}
          bottomRowImage={this.state.data.solutionsSubPageBottomImage}
        />
      </Container>
    );
  }
}

export default withRouter(SolutionsSuperintendents);

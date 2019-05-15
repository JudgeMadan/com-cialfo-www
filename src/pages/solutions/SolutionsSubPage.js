import React from "react";
import HomeMarquee from "../home/HomeMarquee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import SolutionsHeader from "./SolutionsHeader";
import SolutionsRightSideText from "./SolutionsRightSideText";
import SolutionsLeftSideText from "./SolutionsLeftSideText";
import SolutionsSubfooter from "./SolutionsSubfooter";
class SolutionsSubPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Container className="homePageContainer">
        <SolutionsHeader
          title={this.props.pageTitle}
          subtitle={this.props.pageSubtitle}
        />
        <div className="solutions-bottom-spacing" />
        <SolutionsRightSideText
          title={this.props.topRowTitle}
          blurb={this.props.topRowBlurb}
        />
        <div className="solutions-bottom-spacing" />
        <SolutionsSubfooter
          img={this.props.subFooterImg}
          quote={this.props.subFooterQuote}
          quoteAuthor={this.props.subFooterQuoteAuthor}
          quoteAuthorCredit={this.props.subFooterQuoteCredit}
        />
        <div className="solutions-bottom-spacing" />
        <SolutionsLeftSideText
          title={this.props.bottomRowTitle}
          blurb={this.props.bottomRowBlurb}
        />
        <div className="solutions-bottom-spacing" />
        <div className="solutions-marquee-container">
          <HomeMarquee
            locale={this.props.locale}
            accessToken={this.props.accessToken}
            space={this.props.space}
          />
        </div>
      </Container>
    );
  }
}

export default SolutionsSubPage;

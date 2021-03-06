import React from "react";
import HomeMarquee from "../home/HomeMarquee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";
import SolutionsHeader from "./SolutionsHeader";
import SolutionsRightSideText from "./SolutionsRightSideText";
import SolutionsLeftSideText from "./SolutionsLeftSideText";
import SolutionsSubfooter from "./SolutionsSubfooter";
import MobileSolutionsContentText from "./MobileSolutionsContentText";
import MobileSolutionsHeader from "./MobileSolutionsHeader";
import MediaQuery from "react-responsive";
import DemoCallToAction from "../sharedComponents/DemoCallToAction"

class SolutionsSubPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const space = this.props.match.params.space;
    return (
      <Container fluid={true} className="no-padding">
        {/* FULL SCREEN SOLUTIONS SUBPAGE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <SolutionsHeader
            title={this.props.pageTitle}
            subtitle={this.props.pageSubtitle}
          />
          <div className="solutions-bottom-spacing" />
          <SolutionsRightSideText
            title={this.props.topRowTitle}
            blurb={this.props.topRowBlurb}
            image={this.props.topRowImage}
          />
          <div className="solutions-bottom-spacing" />
          <SolutionsLeftSideText
            title={this.props.bottomRowTitle}
            blurb={this.props.bottomRowBlurb}
            image={this.props.bottomRowImage}
          />
          <div className="solutions-bottom-spacing" />
          {space !== "us" && (
            <Row className="center-in-row">
              {this.props.locale !== "zh-CN" && (
                <h1 className="primary_font">
                  The top international schools trust Cialfo
                </h1>
              )}
              {this.props.locale === "zh-CN" && (
                <h1 className="primary_font">中文中文中文</h1>
              )}
            </Row>
          )}
          {space !== "us" && (
            <div className="solutions-marquee-container">
              <HomeMarquee
                locale={this.props.locale}
                accessToken={this.props.accessToken}
                space={this.props.space}
                spaces={this.props.spaces}
                setSpace={this.props.setSpace}
                setAccessToken={this.props.setAccessToken}
                environment={this.props.environment}
              />
            </div>
          )}
        </MediaQuery>
        {/* MOBILE SOLUTIONS SUBPAGE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <MobileSolutionsHeader
            title={this.props.pageTitle}
            subtitle={this.props.pageSubtitle}
          />
          <MobileSolutionsContentText
            title={this.props.topRowTitle}
            blurb={this.props.topRowBlurb}
            image={this.props.topRowImage}
          />
          <MobileSolutionsContentText
            title={this.props.bottomRowTitle}
            blurb={this.props.bottomRowBlurb}
            image={this.props.bottomRowImage}
          />
        </MediaQuery>
        <DemoCallToAction />
      </Container>
    );
  }
}

export default withRouter(SolutionsSubPage);

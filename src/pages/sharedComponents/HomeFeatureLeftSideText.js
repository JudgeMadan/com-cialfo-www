
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../home/Home.css";
import LightBlueRectangle from "../../img/LightBlueRectangle.svg";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile, parse } from "path-to-regexp";
import MediaQuery from "react-responsive";
import ResearchImage from "../../img/home/SchoolsOverview.svg";

class HomeFeatureLeftSideText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: window.innerHeight, width: window.innerWidth };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  generateUrl = (path, location) => {
    const ROUTE = "/:space/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    if (routeComponents && routeComponents[3]) {
      return definePath({
        space: routeComponents[1],
        locale: routeComponents[2],
        path: path
      });
    } else if (routeComponents && routeComponents[3] == undefined) {
      return definePath({
        space: routeComponents[1],
        locale: routeComponents[2],
        path: "a"
      });
    }
  };

  render() {
    return (
      <div>
        {/* FULL SCREEN LEVERAGE TEXT */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="homeRows mb-5">
            {this.state.width > 1200 && (
              <Col className="homePageFeaturesText">
                <div className="homePageFeaturesLeftSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.props.title}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.props.blurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesLeverageLinkText"
                      to={this.generateUrl(
                        this.props.linkUrl,
                        this.props.location
                      )}
                    >
                      {this.props.linkText}
                    </Link>
                  </Row>
                </div>
              </Col>
            )}
            {this.state.width <= 1200 && (
              <Col className="feature-home-page-shared-component-image-right-side-col 
              medium-home-left-side-text-image"> 
                <img
                  className="medium-feature-home-subpage-image-sizing"
                  src={ResearchImage}
                />
              </Col>
            )}
            {this.state.width > 1200 && (
              <Col className="feature-home-page-shared-component-image-right-side-col vertical-center-image">
                <img
                  className="features-productImgRight feature-image-sizing"
                  src={ResearchImage}
                />
              </Col>
            )}
            {this.state.width <= 1200 && (
              <Row className="homePageFeaturesText my-5 pb-3">
                <div className="homePageFeaturesLeftSideTextObject">
                  <Row className="center-in-row">
                    <h1 className="primary_font text-center">
                      {this.props.title}
                    </h1>
                  </Row>
                  <Row className="center-in-row">
                    <p className="secondary_font text-center">
                      {this.props.blurb}
                    </p>
                  </Row>
                  <Row className="center-in-row">
                    <Link
                      className="homeFeatureLink homePageFeaturesLeverageLinkText text-center"
                      to={this.generateUrl(
                        this.props.linkUrl,
                        this.props.location
                      )}
                    >
                      {this.props.title}
                    </Link>
                  </Row>
                </div>
              </Row>
            )}
          </Row>
        </MediaQuery>
        {/* MOBILE LEVERAGE TEXT COLLEGE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img className="mobile-homePageImg" src={ResearchImage} />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.props.title}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.props.blurb}
                  </p>
                </Row>
                <Row className="mb-5">
                  <Link
                    className="homeFeatureLink homePageFeaturesLeverageLinkText"
                    to={this.generateUrl(this.props.linkUrl, this.props.location)}
                  >
                    {this.props.linkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(HomeFeatureLeftSideText);

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import LightBlueRectangle from "../../img/LightBlueRectangle.svg";
import "../home/Home.css";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile, parse } from "path-to-regexp";
import MediaQuery from "react-responsive";

class HomeFeatureRightSideText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
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
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="homeRows mb-5">
            {this.state.width > 1200 && (
              <Col className="feature-home-page-shared-component-image-left-side-col vertical-center-image">
                <img
                  className="features-img subpage-features-productImgLeft feature-image-sizing"
                  src={this.props.image}
                />
              </Col>

            )}

            {this.state.width <= 1200 && (
              <Col className="feature-home-page-shared-component-image-right-side-col 
              medium-home-left-side-text-image medium-home-feature-img-div-container"> 
                <div className="medium-home-feature-img-div">
                    <img
                      className="features-img medium-feature-home-subpage-image-sizing"
                      src={this.props.image}
                    />
                </div>
              </Col>
            )}
            {this.state.width > 1200 && (
              <Col className="homePageFeaturesText">
                <div className="homePageFeaturesRightSideTextObject">
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
                      className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
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
              <Row className="homePageFeaturesText my-5 pb-3">
                <div className="homePageFeaturesRightSideTextObject">
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
                      className="homeFeatureLink homePageFeaturesSendDocumentLinkText text-center"
                      to={this.generateUrl(
                        this.props.linkUrl,
                        this.props.location
                      )}
                    >
                      {this.props.linkText}
                    </Link>
                  </Row>
                </div>
              </Row>
            )}
          </Row>
        </MediaQuery>
        {/* MOBILE SEND DOCUMENTS FEATURES */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img className="features-img mobile-homePageImg" src={this.props.image} />
            </Row>
            <Row className="mobile-homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font center-in-row">
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
                    className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                    to={this.generateUrl(this.props.linkUrl, this.props.location)}
                  >
                    {this.props.linkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
      </div >
    );
  }
}

export default withRouter(HomeFeatureRightSideText);

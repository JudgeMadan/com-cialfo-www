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
import LightBlueRectangle from "../img/LightBlueRectangle.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile } from "path-to-regexp";
class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

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

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken()
  });

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.fetchFeatures().then(this.setFeatures);
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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchFeatures().then(this.setFeatures);
    }
  }

  fetchFeatures = () => {
    return this.client.getEntries({
      content_type: "featuresPage",
      locale: this.props.match.params.locale
    });
  };

  setFeatures = response => {
    const featureContent = response.items[0].fields;
    for (let key in featureContent) {
      if (typeof featureContent[key] === "string") {
        this.setState({
          [key]: featureContent[key]
        });
      } else if (Array.isArray(featureContent[key])) {
        this.setState({
          [key]: featureContent[key]
        });
      } else {
        this.setState({
          [key]: featureContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    console.log(this.state.width);
    return (
      <Container className="homePageContainer">
        {/* FULL SCREEN TOP ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.featuresTitle}</h1>
          </Row>
          <Row className="featuresVideoEmbed">
            <div>
              <img className="oval" src={Oval} />
              <img className="line" src={Line} />
              {this.state.width > 850 && (
                <ReactPlayer
                  className="video"
                  width="800px"
                  height="448px"
                  url={this.state.featuresVideo}
                />
              )}
              {this.state.width < 850 && (
                <ReactPlayer
                  className="video"
                  width="600px"
                  height="366px"
                  url={this.state.featuresVideo}
                />
              )}
            </div>
          </Row>
          <Row className="homePageSchoolTestimonialsTitle">
            <h1 className="primary_font">
              {this.state.homePageSchoolTestimonialsTitle}
            </h1>
          </Row>
          <Row className="homeMarquee">
            <HomeMarquee
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
              spaces={this.props.spaces}
              setSpace={this.props.setSpace}
              setAccessToken={this.props.setAccessToken}
            />
          </Row>
        </MediaQuery>
        {/* MOBILE TOP ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.featuresTitle}</h1>
          </Row>
          <Row className="mobile-featuresVideoEmbed">
            <div>
              <img className="oval" src={Oval} />
              <ReactPlayer
                className="video"
                width="345px"
                height="194px"
                url={this.state.featuresVideo}
              />
            </div>
          </Row>
          <Row className="homePageSchoolTestimonialsTitle">
            <h1 className="primary_font">
              {this.state.homePageSchoolTestimonialsTitle}
            </h1>
          </Row>
        </MediaQuery>
        {/* FULL SCREEN SEND DOCUMENTS*/}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows">
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
                <img className="productImgLeft" src={Documents} />
                <img
                  className="features-left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Col>
            )}
            {this.state.width < 1000 && (
              <Row className="homePageFeaturesImage homePageFeaturesImageBackground">
                <img className="productImgLeft" src={Documents} />
                <img
                  className="features-left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Row>
            )}
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesText">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.featurePageFeaturesSendDocumentTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.featurePageFeaturesSendDocumentBlurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                      to={this.generateUrl(
                        "features-send",
                        this.props.location
                      )}
                    >
                      {this.state.featurePageFeaturesSendDocumentLinkText}
                    </Link>
                  </Row>
                </div>
              </Col>
            )}
            {this.state.width < 1000 && (
              <Row className="homePageFeaturesText">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.featurePageFeaturesSendDocumentTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.featurePageFeaturesSendDocumentBlurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                      to={this.generateUrl(
                        "features-send",
                        this.props.location
                      )}
                    >
                      {this.state.featurePageFeaturesSendDocumentLinkText}
                    </Link>
                  </Row>
                </div>
              </Row>
            )}
          </Row>
        </MediaQuery>
        {/* MOBILE SEND DOCUMENTS*/}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-features-image mt-5">
              <img className="mobile-feature-page-img" src={Documents} />
            </Row>
            <Row className="mobile-featuresFeaturesText mt-3">
              <div className="mobile-features-page-content-text">
                <Row className="center-in-row">
                  <h1 className="primary_font center-in-row">
                    {this.state.featurePageFeaturesSendDocumentTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.featurePageFeaturesSendDocumentBlurb}
                  </p>
                </Row>
                <Row className="mb-5">
                  <Link
                    className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                    to={this.generateUrl("features-send", this.props.location)}
                  >
                    {this.state.featurePageFeaturesSendDocumentLinkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN LEVERAGE*/}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows">
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesText">
                <div className="homePageFeaturesLeftSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.featurePageFeaturesLeverageTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.featurePageFeaturesLeverageBlurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesLeverageLinkText"
                      to={this.generateUrl(
                        "features-research",
                        this.props.location
                      )}
                    >
                      {this.state.featurePageFeaturesLeverageLinkText}
                    </Link>
                  </Row>
                </div>
              </Col>
            )}
            {this.state.width < 1000 && (
              <Row className="homePageFeaturesImage homePageFeaturesImageBackgroundReverse">
                <img className="productImgRight" src={ResearchImage} />
                <img
                  className="features-right-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Row>
            )}
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesImage homePageFeaturesImageBackgroundReverse">
                <img className="productImgRight" src={ResearchImage} />
                <img
                  className="features-right-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Col>
            )}
            {this.state.width < 1000 && (
              <Row className="homePageFeaturesText">
                <div className="homePageFeaturesLeftSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.featurePageFeaturesLeverageTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.featurePageFeaturesLeverageBlurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesLeverageLinkText"
                      to={this.generateUrl(
                        "features-research",
                        this.props.location
                      )}
                    >
                      {this.state.featurePageFeaturesLeverageLinkText}
                    </Link>
                  </Row>
                </div>
              </Row>
            )}
          </Row>
        </MediaQuery>
        {/* MOBILE SCREEN LEVERAGE*/}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-features-image mt-5">
              <img className="mobile-feature-page-img" src={ResearchImage} />
            </Row>
            <Row className="mobile-featuresFeaturesText mt-3">
              <div className="mobile-features-page-content-text">
                <Row className="center-in-row">
                  <h1 className="primary_font">
                    {this.state.featurePageFeaturesLeverageTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.featurePageFeaturesLeverageBlurb}
                  </p>
                </Row>
                <Row className="mb-5">
                  <Link
                    className="homeFeatureLink homePageFeaturesLeverageLinkText"
                    to={this.generateUrl(
                      "features-research",
                      this.props.location
                    )}
                  >
                    {this.state.featurePageFeaturesLeverageLinkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN DISCOVER*/}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows">
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
                <img className="productImgLeft" src={Reports} />
                <img
                  className="features-left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Col>
            )}
            {this.state.width < 1000 && (
              <Row className="homePageFeaturesImage homePageFeaturesImageBackground">
                <img className="productImgLeft" src={Reports} />
                <img
                  className="features-left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Row>
            )}
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesText">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.featurePageFeaturesDiscoverTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.featurePageFeaturesDiscoverBlurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                      to={this.generateUrl(
                        "features-documents",
                        this.props.location
                      )}
                    >
                      {this.state.featurePageFeaturesDiscoverLinkText}
                    </Link>
                  </Row>
                </div>
              </Col>
            )}
            {this.state.width < 1000 && (
              <Row className="homePageFeaturesText">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.featurePageFeaturesDiscoverTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.featurePageFeaturesDiscoverBlurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                      to={this.generateUrl(
                        "features-documents",
                        this.props.location
                      )}
                    >
                      {this.state.featurePageFeaturesDiscoverLinkText}
                    </Link>
                  </Row>
                </div>
              </Row>
            )}
          </Row>
        </MediaQuery>
        {/* MOBILE  DISCOVER*/}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-features-image mt-5">
              <img className="mobile-feature-page-img" src={Reports} />
            </Row>
            <Row className="homePageFeaturesText mt-3">
              <div className="mobile-features-page-content-text">
                <Row>
                  <h1 className="primary_font">
                    {this.state.featurePageFeaturesDiscoverTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.featurePageFeaturesDiscoverBlurb}
                  </p>
                </Row>
                <Row className="mb-5">
                  <Link
                    className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                    to={this.generateUrl(
                      "features-documents",
                      this.props.location
                    )}
                  >
                    {this.state.featurePageFeaturesDiscoverLinkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
      </Container>
    );
  }
}

export default withRouter(Features);

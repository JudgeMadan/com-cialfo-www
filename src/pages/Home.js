import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import MobileHomePartnerImages from "./home/MobileHomePartnerImages";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Hero from "../img/home/devices.png";
import Documents from "../img/home/CDocs.svg";
import ResearchImage from "../img/home/SchoolsOverview.svg";
import Reports from "../img/home/Reports.svg";
import Stroke10 from "../img/Stroke10.svg";
import LightBlueRectangle from "../img/LightBlueRectangle.svg";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import MediaQuery from "react-responsive";
import Container from "react-bootstrap/Container";
import PartnerImages from "./PartnerImages";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile } from "path-to-regexp";
class Home extends React.Component {
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
    this.fetchHomeContent().then(this.setHomeContent);
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
      this.fetchHomeContent().then(this.setHomeContent);
    }
  }

  handleChange = e => {
    const fieldContent = e.target.value;
    this.props.sendEmailAddressToGetADemo(fieldContent);
  };

  fetchHomeContent = () =>
    this.client.getEntries({
      content_type: "homePageHeaderProductImage",
      locale: this.props.match.params.locale
    });

  setHomeContent = response => {
    const homeContent = response.items;
    let filteredhomeContent = homeContent.filter(
      homeContent => homeContent.fields.pageType === "homePage"
    );
    let filteredhomeContentFields = filteredhomeContent[0].fields;
    for (let key in filteredhomeContentFields) {
      if (typeof filteredhomeContentFields[key] === "string") {
        this.setState({
          [key]: filteredhomeContentFields[key]
        });
      } else if (Array.isArray(filteredhomeContentFields[key])) {
        this.setState({
          [key]: filteredhomeContentFields[key].map(
            test => test.fields.file.url
          )
        });
      } else {
        this.setState({
          [key]: filteredhomeContentFields[key].fields.file.url
        });
      }
    }
  };

  render() {
    const space = this.props.match.params.space;
    return (
      <Container className="homePageContainer">
        {/* FULL SCREEN TOP ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Row className="top_row">
              <Col className="top_row_left_col">
                <div>
                  <Row>
                    <h1 className="primary_font left-side-header-title left-side-header-title-large-font">
                      {this.state.homePageHeaderTitle}
                    </h1>
                  </Row>
                  <Row>
                    <h1 className="secondary_font left-side-header-blurb">
                      {this.state.homePageHeaderBlurb}
                    </h1>
                  </Row>
                  <Row>
                    <Form className="get-a-demo-form">
                      <Form.Row className="email-form-container">
                        <Col xs={7} className="pt-1">
                          <Form.Control
                            className="primary_font email-form"
                            placeholder={
                              this.state.homePageHeaderEmailPlaceholderText
                            }
                            plaintext
                            onChange={this.handleChange}
                          />
                        </Col>
                        <Col>
                          <Button
                            className="home-page-button sharp-corners-button"
                            type="submit"
                            size="sm"
                            variant="primary"
                          >
                            <Link
                              className="primary_font get-a-demo-link"
                              to={this.generateUrl("demo", this.props.location)}
                            >
                              {this.state.homePageHeaderEmailSubmitButtonText}
                            </Link>
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </Row>
                </div>
              </Col>
              <Col className="homePageHeaderProductImage">
                <img className="homePageImg" src={Hero} />
              </Col>
            </Row>
          )}
          {this.state.width <= 1000 && (
            <Row className="top_row">
              <Row className="homePageHeaderProductImage">
                <img className="small-homePageImg" src={Hero} />
              </Row>
              <Container className="center-in-row">
                <div>
                  <Row className="mt-3">
                    <h1 className="primary_font left-side-header-title left-side-header-title-large-font">
                      {this.state.homePageHeaderTitle}
                    </h1>
                  </Row>
                  <Row className="mt-3">
                    <h1 className="secondary_font left-side-header-blurb">
                      {this.state.homePageHeaderBlurb}
                    </h1>
                  </Row>
                  <Row>
                    <Form className="get-a-demo-form">
                      <Form.Row className="email-form-container">
                        <Col xs={7} className="pt-1">
                          <Form.Control
                            className="primary_font email-form"
                            placeholder={
                              this.state.homePageHeaderEmailPlaceholderText
                            }
                            plaintext
                            onChange={this.handleChange}
                          />
                        </Col>
                        <Col>
                          <Button
                            className="home-page-button sharp-corners-button"
                            type="submit"
                            size="sm"
                            variant="primary"
                          >
                            <Link
                              className="primary_font get-a-demo-link"
                              to={this.generateUrl("demo", this.props.location)}
                            >
                              {this.state.homePageHeaderEmailSubmitButtonText}
                            </Link>
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </Row>
                </div>
              </Container>
            </Row>
          )}
        </MediaQuery>
        {/* MOBILE TOP ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile_top_row mobile-bottom-border">
            <Row className="mobile_top_row_left_col">
              <div>
                <Row>
                  <h1 className="primary_font mobile_top_row_header">
                    {this.state.homePageHeaderTitle}
                  </h1>
                </Row>
                <Row>
                  <h1 className="secondary_font homePageHeaderBlurb mobile_top_row_header">
                    {this.state.homePageHeaderBlurb}
                  </h1>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN MARQUEE | NO MARQUEE ON MOBILE */}
        {space !== "us" && (
          <MediaQuery query="(min-device-width: 1224px)">
            <Row className="homePageSchoolTestimonialsTitle">
              <h1 className="primary_font">
                {this.state.homePageSchoolTestimonialsTitle}
              </h1>
            </Row>
            {/* keep div to permit overflow */}
            <div className="homeMarquee">
              <HomeMarquee
                locale={this.props.locale}
                accessToken={this.props.accessToken}
                space={this.props.space}
                spaces={this.props.spaces}
                setSpace={this.props.setSpace}
                setAccessToken={this.props.setAccessToken}
              />
            </div>
          </MediaQuery>
        )}
        {/* FULL SCREEN SEND DOCUMENTS FEATURE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows">
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
                <img
                  className="custom-left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
                <img className="productImgLeft" src={Documents} />
              </Col>
            )}
            {this.state.width <= 1000 && (
              <Row className="homePageFeaturesImage homePageFeaturesImageBackground mb-5">
                <img
                  className="custom-left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
                <img className="productImgLeft" src={Documents} />
              </Row>
            )}
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesText">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.homePageFeaturesSendDocumentTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.homePageFeaturesSendDocumentBlurb}
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
                      {this.state.homePageFeaturesSendDocumentLinkText}
                    </Link>
                  </Row>
                </div>
              </Col>
            )}
            {this.state.width <= 1000 && (
              <Row className="homePageFeaturesText mb-5">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.homePageFeaturesSendDocumentTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.homePageFeaturesSendDocumentBlurb}
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
                      {this.state.homePageFeaturesSendDocumentLinkText}
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
              <img className="mobile-homePageImg" src={Documents} />
            </Row>
            <Row className="mobile-homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font center-in-row">
                    {this.state.homePageFeaturesSendDocumentTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesSendDocumentBlurb}
                  </p>
                </Row>
                <Row className="mb-5">
                  <Link
                    className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                    to={this.generateUrl("features-send", this.props.location)}
                  >
                    {this.state.homePageFeaturesSendDocumentLinkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN LEVERAGE TEXT */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows">
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesText">
                <div className="homePageFeaturesLeftSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.homePageFeaturesLeverageTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.homePageFeaturesLeverageBlurb}
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
                      {this.state.homePageFeaturesLeverageLinkText}
                    </Link>
                  </Row>
                </div>
              </Col>
            )}
            {this.state.width <= 1000 && (
              <Row className="homePageFeaturesImage homePageFeaturesImageBackgroundReverse mt-5">
                <img className="productImgRight" src={ResearchImage} />
                <img
                  className="right-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Row>
            )}
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesImage homePageFeaturesImageBackgroundReverse">
                <img className="productImgRight" src={ResearchImage} />
                <img
                  className="right-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Col>
            )}
            {this.state.width <= 1000 && (
              <Row className="homePageFeaturesText my-5">
                <div className="homePageFeaturesLeftSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.homePageFeaturesLeverageTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.homePageFeaturesLeverageBlurb}
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
                      {this.state.homePageFeaturesLeverageLinkText}
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
                    {this.state.homePageFeaturesLeverageTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesLeverageBlurb}
                  </p>
                </Row>
                <Row className="mb-5">
                  <Link
                    className="homeFeatureLink homePageFeaturesLeverageLinkText"
                    to={this.generateUrl("features-send", this.props.location)}
                  >
                    {this.state.homePageFeaturesLeverageLinkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN INSIGHTS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureRows mb-3">
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
                <img className="productImgLeft" src={Reports} />
                <img
                  className="custom-left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Col>
            )}
            {this.state.width <= 1000 && (
              <Row className="homePageFeaturesImage homePageFeaturesImageBackground mt-5">
                <img className="productImgLeft" src={Reports} />
                <img
                  className="custom-left-align-light-blue-background"
                  src={LightBlueRectangle}
                />
              </Row>
            )}
            {this.state.width > 1000 && (
              <Col className="homePageFeaturesText">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.homePageFeaturesDiscoverTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.homePageFeaturesDiscoverBlurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                      to={this.generateUrl(
                        "features-report",
                        this.props.location
                      )}
                    >
                      {this.state.homePageFeaturesDiscoverLinkText}
                    </Link>
                  </Row>
                </div>
              </Col>
            )}

            {this.state.width <= 1000 && (
              <Row className="homePageFeaturesText">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row>
                    <h1 className="primary_font">
                      {this.state.homePageFeaturesDiscoverTitle}
                    </h1>
                  </Row>
                  <Row>
                    <p className="secondary_font">
                      {this.state.homePageFeaturesDiscoverBlurb}
                    </p>
                  </Row>
                  <Row>
                    <Link
                      className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                      to={this.generateUrl(
                        "features-report",
                        this.props.location
                      )}
                    >
                      {this.state.homePageFeaturesDiscoverLinkText}
                    </Link>
                  </Row>
                </div>
              </Row>
            )}
          </Row>
        </MediaQuery>
        {/* MOBILE DISCOVER INSIGHTS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-border-bottom">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img className="mobile-homePageImg" src={Reports} />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.state.homePageFeaturesDiscoverTitle}
                  </h1>
                </Row>
                <Row>
                  <p className="secondary_font">
                    {this.state.homePageFeaturesDiscoverBlurb}
                  </p>
                </Row>
                <Row className="mb-5">
                  <Link
                    className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                    to={this.generateUrl("features-send", this.props.location)}
                  >
                    {this.state.homePageFeaturesDiscoverLinkText}
                  </Link>
                </Row>
              </div>
            </Row>
          </Container>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="homePageVideoCaseStudy">
            <div className="partial-width-dark-blue">
              <Row className="homePageVideoCaseStudyTitle">
                <h1 className="primary_font white-font mobile-home-page-video-case-study-title">
                  {this.state.homePageVideoCaseStudyTitle}
                </h1>
              </Row>
              <Row className="homePageVideoCaseStudyVideoEmbed">
                <div>
                  <img className="oval" src={Oval} />
                  <img className="line" src={Line} />
                  {this.state.width > 850 && (
                    <ReactPlayer
                      className="video"
                      width="800px"
                      height="448px"
                      url={this.state.homePageVideoCaseStudyVideoEmbed}
                    />
                  )}
                  {this.state.width <= 850 && (
                    <ReactPlayer
                      className="video"
                      width="600px"
                      height="366px"
                      url={this.state.homePageVideoCaseStudyVideoEmbed}
                    />
                  )}
                </div>
              </Row>
            </div>
          </div>
          <PartnerImages
            locale={this.props.locale}
            className="partnerImages"
            partnerImages={this.state.homePagePoweredByOurPartnersPartners}
            accessToken={this.props.accessToken}
            space={this.props.space}
            title={this.state.homePagePoweredByOurPartnersTitle}
          />
        </MediaQuery>
        {/* MOBILE VIDEO CONTENT */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row>
            <Container className="mobile-homePageVideoCaseStudy mobile-top-border py-3">
              <Row className=" mobile-homePageVideoCaseStudyTitle">
                <h1 className="primary_font white-font">
                  {this.state.homePageVideoCaseStudyTitle}
                </h1>
              </Row>
              <Row className="mobile-homePageVideoCaseStudyVideoEmbed mb-4">
                <div>
                  <ReactPlayer
                    className="video"
                    width="345px"
                    height="194px"
                    url={this.state.homePageVideoCaseStudyVideoEmbed}
                  />
                </div>
              </Row>
            </Container>
          </Row>
        </MediaQuery>
      </Container>
    );
  }
}

export default withRouter(Home);

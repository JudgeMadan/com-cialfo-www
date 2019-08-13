import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Hero from "../img/home/devices.png";
import HeroUS from "../img/home/devices-us.png";
import Documents from "../img/home/CDocs.png";
import ResearchImage from "../img/home/SchoolsOverview.png";
import ResearchImageUS from "../img/home/SchoolsOverview-us.png";
import Discover from "../img/home/Discover.png";
import Stroke10 from "../img/Stroke10.svg";
import LightBlueRectangle from "../img/LightBlueRectangle.svg";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import MediaQuery from "react-responsive";
import Container from "react-bootstrap/Container";
import PartnerImages from "./PartnerImages";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile } from "path-to-regexp";
import HomeFeatureLeftSideText from "./sharedComponents/HomeFeatureLeftSideText"
import HomeFeatureRightSideText from "./sharedComponents/HomeFeatureRightSideText"
import HomeCarousel from "./home/HomeCarousel";
import MobileHomeCarousel from "./home/MobileHomeCarousel";
import DemoCallToAction from "./sharedComponents/DemoCallToAction";
import { DataContext } from "../contexts/DataContext"
class Home extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: {}
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


  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.context.fetchEntries("homePageHeaderProductImage").then((response) => {
      let data = this.context.setContent(response, "homePage")
      this.setState({
        data: data
      })
    });
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
      this.context.fetchEntries().then((response) => {
        let data = this.context.setContent(response, "homePage")
        this.setState({
          data: data
        })
      });
    }
  }

  handleChange = e => {
    const fieldContent = e.target.value;
    this.props.sendEmailAddressToGetADemo(fieldContent);
  };

  render() {
    const space = this.props.match.params.space;
    return (
      <div className="homePageContainer" fluid>
        {/* FULL SCREEN TOP ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1100 && (
            <Row className="top_row mx-5">
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
              <Col className="homePageHeaderProductImage mr-5">
                <img className="homePageImg" src={space == "us" ? HeroUS : Hero} />
              </Col>
            </Row>
          )}
          {this.state.width <= 1100 && (
            <div>
              <Row className="top_row mx-3">
                <Row className="homePageHeaderProductImage">
                  {/* MAKE THIS IMAGE SMALLER */}
                  <img className="small-homePageImg" src={space == "us" ? HeroUS : Hero} />
                </Row>
                <div className="home-medium-header-content center-in-row">
                  {/* <div className="center-in-row"> */}
                  <Row className="mt-3">
                    <h1 className="primary_font left-side-header-title left-side-header-title-large-font">
                      {this.state.data.homePageHeaderTitle}
                    </h1>
                  </Row>
                  <Row className="mt-3">
                    <h1 className="secondary_font left-side-header-blurb">
                      {this.state.data.homePageHeaderBlurb}
                    </h1>
                  </Row>
                  <Row>
                    <Form className="get-a-demo-form">
                      <Form.Row className="email-form-container">
                        <Col xs={7} className="pt-1">
                          <Form.Control
                            className="primary_font email-form"
                            placeholder={
                              this.state.data.homePageHeaderEmailPlaceholderText
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
                              {this.state.data.homePageHeaderEmailSubmitButtonText}
                            </Link>
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </Row>
                  {/* </div> */}
                </div>
              </Row>
              <div className="home-medium-header-content center-in-row">
                {/* <div className="center-in-row"> */}
                <Row className="mt-3">
                  <h1 className="primary_font left-side-header-title left-side-header-title-large-font">
                    {this.state.data.homePageHeaderTitle}
                  </h1>
                </Row>
                <Row className="mt-3">
                  <h1 className="secondary_font left-side-header-blurb">
                    {this.state.data.homePageHeaderBlurb}
                  </h1>
                </Row>
                <Row>
                  <Form className="get-a-demo-form">
                    <Form.Row className="email-form-container">
                      <Col xs={7} className="pt-1">
                        <Form.Control
                          className="primary_font email-form"
                          placeholder={
                            this.state.data.homePageHeaderEmailPlaceholderText
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
                            {this.state.data.homePageHeaderEmailSubmitButtonText}
                          </Link>
                        </Button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Row>
              </div>
            </div>
          )}
        </MediaQuery>
        {/* MOBILE TOP ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile_top_row mobile-bottom-border">
            <Row className="mobile_top_row_left_col">
              <div>
                <Row>
                  <h1 className="primary_font mobile_top_row_header">
                    {this.state.data.homePageHeaderTitle}
                  </h1>
                </Row>
                <Row>
                  <h1 className="secondary_font homePageHeaderBlurb mobile_top_row_header">
                    {this.state.data.homePageHeaderBlurb}
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
                {this.state.data.homePageSchoolTestimonialsTitle}
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
                environment={this.props.environment}
              />
            </div>
          </MediaQuery>
        )}
        {/*SEND DOCUMENTS FEATURE */}
        <HomeFeatureRightSideText
          title={this.state.data.homePageFeaturesSendDocumentTitle}
          blurb={this.state.data.homePageFeaturesSendDocumentBlurb}
          linkText={this.state.data.homePageFeaturesSendDocumentLinkText}
          linkUrl="features-send"
          image={Documents}
        />
        {/* LEVERAGE FEATURE */}
        <HomeFeatureLeftSideText
          title={this.state.data.homePageFeaturesLeverageTitle}
          blurb={this.state.data.homePageFeaturesLeverageBlurb}
          linkText={this.state.data.homePageFeaturesLeverageLinkText}
          image={space == "us" ? ResearchImageUS : ResearchImage}
          linkUrl="features-research"
        />
        {/* DISCOVER INSIGHTS */}
        <HomeFeatureRightSideText
          title={this.state.data.homePageFeaturesDiscoverTitle}
          blurb={this.state.data.homePageFeaturesDiscoverBlurb}
          linkText={this.state.data.homePageFeaturesDiscoverLinkText}
          linkUrl="features-report"
          image={Discover}
        />
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="homePageVideoCaseStudy">
            <div className="partial-width-dark-blue">
              <Row className="homePageVideoCaseStudyTitle">
                <h1 className="primary_font white-font mobile-home-page-video-case-study-title">
                  {this.state.data.homePageVideoCaseStudyTitle}
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
                      url={this.state.data.homePageVideoCaseStudyVideoEmbed}
                    />
                  )}
                  {this.state.width <= 850 && (
                    <ReactPlayer
                      className="video"
                      width="600px"
                      height="366px"
                      url={this.state.data.homePageVideoCaseStudyVideoEmbed}
                    />
                  )}
                </div>
              </Row>
            </div>
          </div>
          <PartnerImages
            locale={this.props.locale}
            className="partnerImages"
            partnerImages={this.state.data.homePagePoweredByOurPartnersPartners}
            accessToken={this.props.accessToken}
            space={this.props.space}
            title={this.state.data.homePagePoweredByOurPartnersTitle}
            environment={this.props.environment}
          />
        </MediaQuery>
        {/* MOBILE VIDEO CONTENT */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row>
            <Container className="mobile-homePageVideoCaseStudy mobile-top-border py-3">
              <Row className=" mobile-homePageVideoCaseStudyTitle">
                <h1 className="primary_font white-font">
                  {this.state.data.homePageVideoCaseStudyTitle}
                </h1>
              </Row>
              <Row className="mobile-homePageVideoCaseStudyVideoEmbed mb-4">
                <div>
                  <ReactPlayer
                    className="video"
                    width="345px"
                    height="194px"
                    url={this.state.data.homePageVideoCaseStudyVideoEmbed}
                  />
                </div>
              </Row>
            </Container>
          </Row>
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(Home);

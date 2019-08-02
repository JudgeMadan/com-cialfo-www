import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Documents from "../img/home/CDocs.png";
import ResearchImage from "../img/home/SchoolsOverview.png";
import ResearchImageUS from "../img/home/SchoolsOverview-us.png";
import Discover from "../img/home/Discover.png";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import LightBlueRectangle from "../img/LightBlueRectangle.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile } from "path-to-regexp";
import HomeFeatureLeftSideText from "./sharedComponents/HomeFeatureLeftSideText"
import HomeFeatureRightSideText from "./sharedComponents/HomeFeatureRightSideText"
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
    accessToken: this.setAccessToken(),
    environment: this.props.environment
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
    const space = this.props.match.params.space;
    return (
      <Container className="homePageContainer" fluid>
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
          {space !== "us" && (
            <Row className="homePageSchoolTestimonialsTitle">
              <h1 className="primary_font">
                {this.state.homePageSchoolTestimonialsTitle}
              </h1>
            </Row>
          )}
          {space !== "us" && (
            <Row className="homeMarquee mx-3">
              <HomeMarquee
                locale={this.props.locale}
                accessToken={this.props.accessToken}
                space={this.props.space}
                spaces={this.props.spaces}
                setSpace={this.props.setSpace}
                setAccessToken={this.props.setAccessToken}
                environment={this.props.environment}
              />
            </Row>
          )}
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
        {/* SEND DOCUMENTS*/}
        <HomeFeatureRightSideText
          title={this.state.featurePageFeaturesSendDocumentTitle}
          blurb={this.state.featurePageFeaturesSendDocumentBlurb}
          linkText={this.state.featurePageFeaturesSendDocumentLinkText}
          linkUrl="features-send"
          image={Documents}
        />
        {/* LEVERAGE*/}
        <HomeFeatureLeftSideText
          title={this.state.featurePageFeaturesLeverageTitle}
          blurb={this.state.featurePageFeaturesLeverageBlurb}
          linkText={this.state.featurePageFeaturesLeverageLinkText}
          image={space == "us" ? ResearchImageUS : ResearchImage}
          linkUrl="features-research"
        />
        {/* DISCOVER*/}
        <HomeFeatureRightSideText
          title={this.state.featurePageFeaturesDiscoverTitle}
          blurb={this.state.featurePageFeaturesDiscoverBlurb}
          linkText={this.state.featurePageFeaturesDiscoverLinkText}
          image={Discover}
          linkUrl="features-report"
        />
      </Container>
    );
  }
}

export default withRouter(Features);

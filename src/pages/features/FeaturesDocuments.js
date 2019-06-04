import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import "./Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import FeaturesBullets from "./FeaturesBullets";
import MobileFeaturesBullets from "./MobileFeaturesBullets";
import Oval from "../../img/Oval.svg";
import Line from "../../img/Line.svg";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class FeaturesDocuments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

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
    this.fetchFeaturesResearchPage().then(this.setFeaturesResearchPage);
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
      this.fetchFeaturesResearchPage().then(this.setFeaturesResearchPage);
    }
  }

  fetchFeaturesResearchPage = () => {
    return this.client.getEntries({
      content_type: "featuresDocuments",
      locale: this.props.match.params.locale
    });
  };

  setFeaturesResearchPage = response => {
    const sendingPageContent = response.items[0].fields;
    for (let key in sendingPageContent) {
      if (typeof sendingPageContent[key] === "string") {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else if (Array.isArray(sendingPageContent[key])) {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else {
        this.setState({
          [key]: sendingPageContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    return (
      <Container className="featuresSendPage" fluid={true}>
        {/* FULL SCREEN PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.documentsTitle}</h1>
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
                  url={this.state.documentsVideo}
                />
              )}
              {this.state.width <= 850 && (
                <ReactPlayer
                  className="video"
                  width="600px"
                  height="366px"
                  url={this.state.documentsVideo}
                />
              )}
            </div>
          </Row>
        </MediaQuery>
        {/* MOBILE PAGE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.documentsTitle}</h1>
          </Row>
          <Row className="mobile-featuresVideoEmbed">
            <div>
              <img className="oval" src={Oval} />
              <ReactPlayer
                className="video"
                width="345px"
                height="194px"
                url={this.state.documentsVideo}
              />
            </div>
          </Row>
        </MediaQuery>
        {/* FULL WIDTH EXPLORE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            {/* <Col className="feature-image-left-side-col vertical-center-image">
              <img
                className="features-productImgLeft feature-image-sizing"
                src={this.state.documentsExploreImage}
              />
            </Col> */}
            <Col className="feature-image-left-side-col vertical-center-image">
              <img
                className="features-productImgLeft feature-image-sizing"
                src={this.state.documentsExploreImage}
              />
            </Col>
            <Col className="featureSubSectionTextAlign">
              <Container>
                <Row>
                  <Col>
                    <h1 className="primary_font">
                      {this.state.documentsExploreTitle}
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FeaturesBullets
                      bullets={this.state.documentsExploreBlurb}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE EXPLORE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img
                className="mobile-homePageImg"
                src={this.state.documentsExploreImage}
              />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.state.documentsExploreTitle}
                  </h1>
                </Row>
                <Row>
                  <Col>
                    <MobileFeaturesBullets
                      bullets={this.state.documentsExploreBlurb}
                    />
                  </Col>
                </Row>
                <Row className="mb-5" />
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL WIDTH TRANSCRIPT */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <Col className="featureSubSectionTextAlign">
              <Container>
                <Row>
                  <Col>
                    <h1 className="primary_font">
                      {this.state.documentsTranscriptTitle}
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FeaturesBullets
                      bullets={this.state.documentsTranscriptBlurb}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="feature-image-right-side-col vertical-center-image">
              <img
                className="features-productImgRight feature-image-sizing"
                src={this.state.documentsTranscriptImage}
              />
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE TRANSCRIPT */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img
                className="mobile-homePageImg"
                src={this.state.documentsTranscriptImage}
              />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.state.documentsTranscriptTitle}
                  </h1>
                </Row>
                <Row>
                  <Col>
                    <MobileFeaturesBullets
                      bullets={this.state.documentsTranscriptBlurb}
                    />
                  </Col>
                </Row>
                <Row className="mb-5" />
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL WIDTH SUB FOOTER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <FeaturesSubfooter
              img={this.state.documentsFooterImg}
              quote={this.state.documentsFooterQuote}
              quoteAuthor={this.state.documentsFooterAuthor}
            />
          </Row>
        </MediaQuery>
      </Container>
    );
  }
}
export default withRouter(FeaturesDocuments);

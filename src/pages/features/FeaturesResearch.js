import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import Documents from "../../img/home/CDocs.svg";
import "./Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import FeaturesBullets from "./FeaturesBullets";
import MobileFeaturesBullets from "./MobileFeaturesBullets";
import Oval from "../../img/Oval.svg";
import Line from "../../img/Line.svg";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
class FeaturesResearch extends React.Component {
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
      content_type: "featuresResearchPage",
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
          <Row className="features-titleContainer mb-5">
            <h1 className="primary_font">{this.state.researchTitle}</h1>
          </Row>
          <Row className="featuresVideoEmbed">
            <div>
              <img className="features-oval" src={Oval} />
              <img className="features-line" src={Line} />
              <Row>
                <img className="features-hero-image" src={Documents} />
              </Row>
            </div>
          </Row>
        </MediaQuery>
        {/* MOBILE PAGE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="features-titleContainer mb-5">
            <h1 className="primary_font">{this.state.researchTitle}</h1>
          </Row>
          <Container className="featuresVideoEmbed mobile-bottom-border pb-5">
            <Row className="center-in-row">
              <img className="mobile-features-hero-image" src={Documents} />
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN Knowledge */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Row className="test-row" no-gutters>
              {/* <Col className="feature-image-col">
              <img
                className="feature-send-portal-left-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              />
            </Col> */}
              <Col className="feature-image-left-side-col vertical-center-image">
                <img
                  className="features-productImgLeft feature-image-sizing"
                  src={this.state.researchInfoImg}
                />
              </Col>
              <Col className="featureSubSectionTextAlign ">
                <Container className="inner-test-div">
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.researchInfoTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesBullets bullets={this.state.researchInfoBlurb} />
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          )}
          {this.state.width <= 1000 && (
            <div>
              <Row className="feature-image-left-side-col vertical-center-image">
                <Container className="medium-subpage-features-productImg subpage-features-margin-right">
                  <img
                    className="medium-feature-subpage-image-sizing"
                    src={this.state.researchInfoImg}
                  />
                </Container>
              </Row>
              <Row className="featureSubSectionTextAlign my-5">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.researchInfoTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesBullets bullets={this.state.researchInfoBlurb} />
                    </Col>
                  </Row>
                </Container>
              </Row>
            </div>
          )}
        </MediaQuery>
        {/* MOBILE SCREEN Knowledge */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img
                className="mobile-homePageImg"
                src={this.state.researchInfoImg}
              />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.state.researchInfoTitle}
                  </h1>
                </Row>
                <Row>
                  <Col>
                    <MobileFeaturesBullets
                      bullets={this.state.researchInfoBlurb}
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
          {this.state.width > 1000 && (
            <Row className="test-row">
              <Col
                className="featureSubSectionTextAlign"
                ref={divElement => (this.divElement = divElement)}
              >
                <Container className="inner-test-div ">
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.researchTranscriptTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesBullets
                        bullets={this.state.researchTranscriptBlurb}
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col className="feature-image-right-side-col vertical-center-image">
                <img
                  className="features-productImgRight feature-image-sizing"
                  src={this.state.researchTranscriptImg}
                />
              </Col>
            </Row>
          )}
          {this.state.width <= 1000 && (
            <div>
              <Row className="feature-image-right-side-col vertical-center-image">
                <Container className="medium-subpage-features-productImg subpage-features-margin-right">
                  <img
                    className="medium-feature-subpage-image-sizing"
                    src={this.state.researchTranscriptImg}
                  />
                </Container>
              </Row>
              <Row className="featureSubSectionTextAlign my-5">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.researchTranscriptTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesBullets
                        bullets={this.state.researchTranscriptBlurb}
                      />
                    </Col>
                  </Row>
                </Container>
              </Row>
            </div>
          )}
        </MediaQuery>
        {/* MOBILE TRANSCRIPT */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img
                className="mobile-homePageImg"
                src={this.state.researchTranscriptImg}
              />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.state.researchTranscriptTitle}
                  </h1>
                </Row>
                <Row>
                  <Col>
                    <MobileFeaturesBullets
                      bullets={this.state.researchTranscriptBlurb}
                    />
                  </Col>
                </Row>
                <Row className="mb-5" />
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL WIDTH KNOWLEDGE */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Row className="researchBottomRow">
              <Col className="feature-image-left-side-col vertical-center-image">
                <img
                  className="features-productImgLeft feature-image-sizing"
                  src={this.state.researchKnowledgeImg}
                />
              </Col>
              <Col className="featureSubSectionTextAlign">
                <Container className="inner-test-div">
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.researchKnowledgeTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesBullets
                        bullets={this.state.researchKnowledgeBlurb}
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          )}
          {this.state.width <= 1000 && (
            <div>
              <Row className="feature-image-left-side-col vertical-center-image">
                <Container className="medium-subpage-features-productImg subpage-features-margin-right">
                  <img
                    className="medium-feature-subpage-image-sizing"
                    src={this.state.researchKnowledgeImg}
                  />
                </Container>
              </Row>
              <Row className="featureSubSectionTextAlign my-5">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.researchKnowledgeTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesBullets
                        bullets={this.state.researchKnowledgeBlurb}
                      />
                    </Col>
                  </Row>
                </Container>
              </Row>
            </div>
          )}
        </MediaQuery>
        {/* MOBILE KNOWLEDGE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img
                className="mobile-homePageImg"
                src={this.state.researchKnowledgeImg}
              />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.state.researchKnowledgeTitle}
                  </h1>
                </Row>
                <Row>
                  <Col>
                    <MobileFeaturesBullets
                      bullets={this.state.researchKnowledgeBlurb}
                    />
                  </Col>
                </Row>
                <Row className="mb-5" />
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL WIDTH FEATURES SUBFOOTER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <FeaturesSubfooter
              img={this.state.researchFooterImg}
              quote={this.state.researchFooterQuote}
              quoteAuthor={this.state.researchFooterAuthor}
            />
          </Row>
        </MediaQuery>
      </Container>
    );
  }
}
export default withRouter(FeaturesResearch);

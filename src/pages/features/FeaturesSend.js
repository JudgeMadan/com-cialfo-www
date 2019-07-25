import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import "./Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import MediaQuery from "react-responsive";
import Oval from "../../img/Oval.svg";
import Line from "../../img/Line.svg";
import PartnerImages from "../PartnerImages";
import MobilePartnerImages from "../MobilePartnerImages";
import Pointer from "../../img/Pointer.svg";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import { withRouter } from "react-router-dom";
import FeaturesBullets from "./FeaturesBullets";
import FeaturesSendBullets from "./FeaturesSendBullets";
import MobileFeaturesSendBullets from "./MobileFeaturesSendBullets";

class FeaturesSend extends React.Component {
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
    accessToken: this.setAccessToken(),
    environment: this.props.environment
  });

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.fetchFeaturesSendingPage().then(this.setFeaturesSendingPage);
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
      this.fetchFeaturesSendingPage().then(this.setFeaturesSendingPage);
    }
  }

  fetchFeaturesSendingPage = () => {
    return this.client.getEntries({
      content_type: "featuresSendingPage",
      locale: this.props.match.params.locale
    });
  };

  setFeaturesSendingPage = response => {
    const sendingPageContent = response.items[0].fields;
    for (let key in sendingPageContent) {
      if (typeof sendingPageContent[key] === "string") {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else if (Array.isArray(sendingPageContent[key])) {
        this.setState({
          [key]: sendingPageContent[key].map(test => test.fields.bulletPoint)
        });
      } else {
        this.setState({
          [key]: sendingPageContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    const space = this.props.match.params.space;
    return (
      <Container className="featuresSendPage" fluid={true}>
        {/* FULL SCREEN PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="features-titleContainer mb-5">
            <h1 className="primary_font">{this.state.sendTitle}</h1>
          </Row>
          <Row className="featuresVideoEmbed">
            <div>
              <img className="features-oval" src={Oval} />
              <img className="features-line" src={Line} />
              <Row>
                <img className="features-hero-image" src={this.state.featureSendHero} />
              </Row>
            </div>
          </Row>
        </MediaQuery>
        {/* MOBILE PAGE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="features-titleContainer mb-5">
            <h1 className="primary_font">{this.state.sendTitle}</h1>
          </Row>
          <Container className="featuresVideoEmbed mobile-bottom-border pb-5">
            <Row className="center-in-row">
              <img className="mobile-features-hero-image" src={this.state.featureSendHero} />
            </Row>
          </Container>
        </MediaQuery>

        {/* FULL SCREEN FEATURE ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Row>
              <Col className="feature-image-left-side-col vertical-center-image">
                <img
                  className="features-productImgLeft feature-image-sizing"
                  src={this.state.sendPortalImage}
                />
              </Col>
              <Col className="featureSubSectionTextAlign">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.sendPortalTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Col>
                        <FeaturesSendBullets
                          bullets={this.state.sendPortalBlurb}
                        />
                      </Col>
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
                    src={this.state.sendPortalImage}
                  // src={this.state.documentsTranscriptImage}
                  />
                </Container>
              </Row>
              <Row className="featureSubSectionTextAlign my-5">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.sendPortalTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesSendBullets
                        bullets={this.state.sendPortalBlurb}
                      />
                    </Col>
                  </Row>
                </Container>
              </Row>
            </div>
          )}
        </MediaQuery>
        {/* MOBILE FEATURE ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img
                className="mobile-homePageImg"
                src={this.state.sendPortalImage}
              />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">{this.state.sendPortalTitle}</h1>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <MobileFeaturesSendBullets
                      bullets={this.state.sendPortalBlurb}
                    />
                  </Col>
                </Row>
                <Row className="mb-5" />
              </div>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN TRANSCRIPT ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Row>
              <Col className="featureSubSectionTextAlign">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.sendTranscriptTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Col>
                        <FeaturesSendBullets
                          bullets={this.state.sendTranscriptBlurb}
                        />
                      </Col>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col className="feature-image-right-side-col vertical-center-image">
                <img
                  className="features-productImgRight feature-image-sizing"
                  src={this.state.sendTranscriptImage}
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
                    src={this.state.sendTranscriptImage}
                  />
                </Container>
              </Row>
              <Row className="featureSubSectionTextAlign my-5">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.state.sendTranscriptTitle}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesSendBullets
                        bullets={this.state.sendTranscriptBlurb}
                      />
                    </Col>
                  </Row>
                </Container>
              </Row>
            </div>
          )}
        </MediaQuery>
        {/* MOBILE TRANSCRIPT ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img
                className="mobile-homePageImg"
                src={this.state.sendTranscriptImage}
              />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.state.sendTranscriptTitle}
                  </h1>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <MobileFeaturesSendBullets
                      bullets={this.state.sendTranscriptBlurb}
                    />
                  </Col>
                </Row>
                <Row className="mb-5" />
              </div>
            </Row>
          </Container>
        </MediaQuery>
        <Row className="mb-3" />
        {/* FULL WIDTH PARTNERS */}
        {/* <MediaQuery query="(min-device-width: 1224px)">
          <Row className="featureSendPartnersTitle">
            <div className="full-width-light-blue">
              <PartnerImages
                locale={this.props.locale}
                className="partnerImages"
                partnerImages={this.state.sendPartnersArray}
                accessToken={this.props.accessToken}
                space={this.props.space}
                title={this.state.sendPartnersTitle}
              />
            </div>
          </Row>
        </MediaQuery> */}
        {/* MOBILE PARTNERS */}
        {/* <MediaQuery query="(max-device-width: 1223px)">
          <MobilePartnerImages
            locale={this.props.locale}
            className="partnerImages"
            partnerImages={this.state.sendPartnersArray}
            accessToken={this.props.accessToken}
            space={this.props.space}
            title={this.state.sendPartnersTitle}
          />
        </MediaQuery> */}
        {/* FEATURES SUBFOOTER ONLY ON FULL SCREEN */}
        {/* <MediaQuery query="(min-device-width: 1224px)">
          {space !== "us" && (
            <Row>
              <FeaturesSubfooter
                img={this.state.sendFooterImage}
                quote={this.state.sendFooterQuote}
                quoteAuthor={this.state.sendingFooterAuthor}
              />
            </Row>
          )}
        </MediaQuery> */}
      </Container>
    );
  }
}
export default withRouter(FeaturesSend);

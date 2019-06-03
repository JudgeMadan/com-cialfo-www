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
    accessToken: this.setAccessToken()
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
    console.log(sendingPageContent);
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
    // console.log(this.state);
    return (
      <Container className="featuresSendPage" fluid={true}>
        {/* FULL SCREEN PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.sendTitle}</h1>
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
                  url={this.state.sendVideo}
                />
              )}
              {this.state.width < 850 && (
                <ReactPlayer
                  className="video"
                  width="600px"
                  height="366px"
                  url={this.state.sendVideo}
                />
              )}
            </div>
          </Row>
        </MediaQuery>
        {/* MOBILE PAGE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.sendTitle}</h1>
          </Row>
          <Row className="mobile-featuresVideoEmbed">
            <div>
              <img className="oval" src={Oval} />
              <ReactPlayer
                className="video"
                width="345px"
                height="194px"
                url={this.state.sendVideo}
              />
            </div>
          </Row>
        </MediaQuery>
        {/* FULL SCREEN FEATURE ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
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
        </MediaQuery>
        {/* MOBILE FEATURE ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border my-5 px-4">
            <Row className="center-in-row px-3">
              <h1 className="primary_font">{this.state.sendPortalTitle}</h1>
            </Row>
            <Row className="mb-5 px-3">
              <Col>
                <FeaturesSendBullets bullets={this.state.sendPortalBlurb} />
              </Col>
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL SCREEN TRANSCRIPT ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
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
                    <h1 className="secondary_font">
                      <img src={Pointer} />
                      &nbsp;
                      {this.state.sendTranscriptBlurb}
                    </h1>
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
        </MediaQuery>
        {/* MOBILE TRANSCRIPT ROW */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border my-5 px-4">
            <Row className="center-in-row px-3">
              <h1 className="primary_font">{this.state.sendTranscriptTitle}</h1>
            </Row>
            <Row className="mb-5 px-3">
              <h1 className="secondary_font">
                <img src={Pointer} />
                &nbsp;
                {this.state.sendTranscriptBlurb}
              </h1>
            </Row>
          </Container>
        </MediaQuery>
        <Row />
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
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <FeaturesSubfooter
              img={this.state.sendFooterImage}
              quote={this.state.sendFooterQuote}
              quoteAuthor={this.state.sendingFooterAuthor}
            />
          </Row>
        </MediaQuery>
      </Container>
    );
  }
}
export default withRouter(FeaturesSend);

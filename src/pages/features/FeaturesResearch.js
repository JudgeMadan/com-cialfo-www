import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import "./Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import FeaturesBullets from "./FeaturesBullets";
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
    console.log(this.state);
    return (
      <Container className="featuresSendPage" fluid={true}>
        {/* FULL SCREEN PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.researchTitle}</h1>
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
                  url={this.state.researchVideo}
                />
              )}
              {this.state.width < 850 && (
                <ReactPlayer
                  className="video"
                  width="600px"
                  height="366px"
                  url={this.state.researchVideo}
                />
              )}
            </div>
          </Row>
        </MediaQuery>
        {/* MOBILE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.researchTitle}</h1>
          </Row>
          <Row className="mobile-featuresVideoEmbed">
            <div>
              <img className="oval" src={Oval} />
              <img className="line" src={Line} />
              <ReactPlayer
                className="video"
                width="345px"
                height="194px"
                url={this.state.researchVideo}
              />
            </div>
          </Row>
        </MediaQuery>
        {/* FULL SCREEN Knowledge */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="test-row" no-gutters>
            <Col className="feature-image-col">
              {/* <img
                className="feature-send-portal-left-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              /> */}
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
        </MediaQuery>
        {/* MOBILE SCREEN Knowledge */}
        <MediaQuery query="(max-device-width: 1223px)">
          {/* <Col className="featureImage">
              <img
                className="feature-send-portal-left-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              />
              <img src={this.state.researchInfoImg} />
            </Col> */}
          <Container className="mobile-bottom-border my-5 px-4">
            <Row className="center-in-row px-3 mb-3">
              <h1 className="primary_font">{this.state.researchInfoTitle}</h1>
            </Row>
            <Row className="mb-5 px-3">
              <FeaturesBullets bullets={this.state.researchInfoBlurb} />
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL WIDTH TRANSCRIPT */}
        <MediaQuery query="(min-device-width: 1224px)">
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
            <Col className="feature-image-col">
              {/* <img
                className="feature-send-portal-right-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              /> */}
              {/* <img src={this.state.researchTranscriptImg} /> */}
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE TRANSCRIPT */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border my-5 px-4">
            <Row className="center-in-row px-3 mb-3">
              <h1 className="primary_font">
                {this.state.researchTranscriptTitle}
              </h1>
            </Row>
            <Row className="mb-5 px-3">
              <FeaturesBullets bullets={this.state.researchTranscriptBlurb} />
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL WIDTH KNOWLEDGE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="researchBottomRow test-row">
            <Col className="feature-image-col" />
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
        </MediaQuery>
        {/* MOBILE KNOWLEDGE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="my-5 px-4">
            <Row className="center-in-row px-3 mb-3">
              <h1 className="primary_font">
                {this.state.researchKnowledgeTitle}
              </h1>
            </Row>
            <Row className="mb-5 px-3">
              <FeaturesBullets bullets={this.state.researchKnowledgeBlurb} />
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

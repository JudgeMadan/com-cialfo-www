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

class FeaturesDocuments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setSpace = () => {
    if (this.props.match.params.space === "cn") {
      return this.props.spaces.cn.space;
    } else if (this.props.match.params.space === "intl") {
      return this.props.spaces.intl.space;
    } else if (this.props.match.params.space === "in") {
      return this.props.spaces.india.space;
    }
  };

  setAccessToken = () => {
    if (this.props.match.params.space === "cn") {
      return this.props.spaces.cn.accessToken;
    } else if (this.props.match.params.space === "intl") {
      return this.props.spaces.intl.accessToken;
    } else if (this.props.match.params.space === "in") {
      return this.props.spaces.india.accessToken;
    }
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken()
  });

  componentDidMount() {
    this.fetchFeaturesResearchPage().then(this.setFeaturesResearchPage);
  }

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
      <Container className="featuresSendPage">
        {/* FULL SCREEN PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="titleContainer">
            <h1 className="primary_font">{this.state.documentsTitle}</h1>
          </Row>
          <Row className="featuresVideoEmbed">
            <div>
              <img className="oval" src={Oval} />
              <img className="line" src={Line} />
              <ReactPlayer
                className="video"
                width="800px"
                height="448px"
                url={this.state.documentsVideo}
              />
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
              <img className="line" src={Line} />
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
            <Col className="featureImage">
              <img
                className="feature-send-portal-left-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              />
              {/* <img src={this.state.researchInfoImg} /> */}
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
          <Container className="mobile-bottom-border my-5 px-4">
            <Row className="center-in-row px-3 mb-3">
              <h1 className="primary_font">
                {this.state.documentsExploreTitle}
              </h1>
            </Row>
            <Row className="mb-5 px-3">
              <FeaturesBullets bullets={this.state.documentsExploreBlurb} />
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
            <Col className="featureImage">
              <img
                className="feature-send-portal-right-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              />
              {/* <img src={this.state.researchTranscriptImg} /> */}
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE TRANSCRIPT */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border my-5 px-4">
            <Row className="center-in-row px-3 mb-3">
              <h1 className="primary_font">
                {this.state.documentsTranscriptTitle}
              </h1>
            </Row>
            <Row className="mb-5 px-3">
              <FeaturesBullets bullets={this.state.documentsTranscriptBlurb} />
            </Row>
          </Container>
        </MediaQuery>
        {/* FULL WIDTH PERSONAL KNOWLEDGE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="researchBottomRow">
            <Col className="featureImage">
              <img
                className="feature-send-portal-left-align-light-blue-rectangle"
                src={ThinLightBlueRectangle}
              />
              {/* <img src={this.state.researchKnowledgeImg} /> */}
            </Col>
            <Col className="featureSubSectionTextAlign">
              <Container>
                <Row>
                  <Col>
                    <h1 className="primary_font">
                      {this.state.documentsPersonalKnowledgeTitle}
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FeaturesBullets
                      bullets={this.state.documentsPersonalKnowledgeBlurb}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </MediaQuery>
        {/* MOBILE TRANSCRIPT */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="my-5 px-4">
            <Row className="center-in-row px-3 mb-3">
              <h1 className="primary_font">
                {this.state.documentsPersonalKnowledgeTitle}
              </h1>
            </Row>
            <Row className="mb-5 px-3">
              <FeaturesBullets
                bullets={this.state.documentsPersonalKnowledgeBlurb}
              />
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

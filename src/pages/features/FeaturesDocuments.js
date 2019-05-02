import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import "./Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import FeaturesBullets from "./FeaturesBullets";
import Oval from "./Oval.svg";
import Line from "./Line.svg";

class FeaturesDocuments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchFeaturesResearchPage().then(this.setFeaturesResearchPage);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchFeaturesResearchPage().then(this.setFeaturesResearchPage);
    }
  }

  fetchFeaturesResearchPage = () => {
    return this.client.getEntries({
      content_type: "featuresDocuments",
      locale: this.props.locale
    });
  };

  setFeaturesResearchPage = response => {
    const sendingPageContent = response.items[0].fields;
    console.log(sendingPageContent);
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
        <Row className="titleContainer">
          <h1 className="primary_font">{this.state.documentsTitle}</h1>
        </Row>
        <Row className="featuresVideoEmbed">
          <div>
            <img className="oval" src={Oval} />
            <img className="line" src={Line} />
            <ReactPlayer
              className="video"
              width="1000px"
              height="560px"
              url={this.state.documentsVideo}
            />
          </div>
        </Row>
        <Row>
          <Col className="featureImage">
            {/* <img src={this.state.researchInfoImg} /> */}
          </Col>
          <Col className="featureSubSectionTextAlign">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="primary_font">
                    {this.state.documentsExploreTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets bullets={this.state.documentsExploreBlurb} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="featureSubSectionTextAlign">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="primary_font">
                    {this.state.documentsTranscriptTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets
                    bullets={this.state.documentsTranscriptBlurb}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="featureImage">
            {/* <img src={this.state.researchTranscriptImg} /> */}
          </Col>
        </Row>
        <Row className="researchBottomRow">
          <Col className="featureImage">
            {/* <img src={this.state.researchKnowledgeImg} /> */}
          </Col>
          <Col className="featureSubSectionTextAlign">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="primary_font">
                    {this.state.documentsPersonalKnowledgeTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets
                    bullets={this.state.documentsPersonalKnowledgeBlurb}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <FeaturesSubfooter
            img={this.state.documentsFooterImg}
            quote={this.state.documentsFooterQuote}
            quoteAuthor={this.state.documentsFooterAuthor}
          />
        </Row>
      </Container>
    );
  }
}
export default FeaturesDocuments;

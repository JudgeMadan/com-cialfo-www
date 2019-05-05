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
class FeaturesResearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
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
      content_type: "featuresResearchPage",
      locale: this.props.locale
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
        <Row className="titleContainer">
          <h1 className="primary_font">{this.state.researchTitle}</h1>
        </Row>
        <Row className="featuresVideoEmbed">
          <div>
            <img className="oval" src={Oval} />
            <img className="line" src={Line} />
            <ReactPlayer
              className="video"
              width="500px"
              height="280px"
              url={this.state.researchVideo}
            />
          </div>
        </Row>
        <Row>
          <Col className="featureImage">
            <img src={this.state.researchInfoImg} />
          </Col>
          <Col className="featureSubSectionTextAlign">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="primary_font">
                    {this.state.researchInfoTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets
                    bullets={this.state.researchKnowledgeBlurb}
                  />
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
                    {this.state.researchTranscriptTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets
                    bullets={this.state.researchTranscriptBlurb}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="featureImage">
            <img src={this.state.researchTranscriptImg} />
          </Col>
        </Row>
        <Row className="researchBottomRow">
          <Col className="featureImage">
            <img src={this.state.researchKnowledgeImg} />
          </Col>
          <Col className="featureSubSectionTextAlign">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="primary_font">
                    {this.state.researchKnowledgeTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets
                    bullets={this.state.researchKnowledgeBlurb}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <FeaturesSubfooter
            img={this.state.researchFooterImg}
            quote={this.state.researchFooterQuote}
            quoteAuthor={this.state.researchFooterAuthor}
          />
        </Row>
      </Container>
    );
  }
}
export default FeaturesResearch;

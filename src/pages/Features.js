import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import FeaturesSubfooter from "./features/FeaturesSubfooter";
import FeaturesBullets from "./features/FeaturesBullets";
import "./features/Features.css";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "zh-CN"
    };
  }
  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchFeatures().then(this.setFeatures);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchFeatures().then(this.setFeatures);
    }
  }

  fetchFeatures = () => {
    return this.client.getEntries({
      content_type: "featuresPage",
      locale: this.props.locale
    });
  };

  setFeatures = response => {
    const featureContent = response.items[0].fields;
    console.log(featureContent);
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
    console.log(this.state);
    return (
      <Container>
        <Row className="titleContainer">
          <h1 className="primary_font">{this.state.featuresTitle}</h1>
        </Row>
        <Row className="featuresVideoEmbed">
          <ReactPlayer
            width="1000px"
            height="560px"
            url={this.state.featuresVideo}
          />
        </Row>
        <Row className="pb-5">
          <Col className="featureImage">
            <h1>ADD IMAGE</h1>
          </Col>
          <Col className="featureSubSectionTextAlign">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="primary_font">
                    {this.state.featuresResearchTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets bullets={this.state.featuresResearchArray} />
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
                    {this.state.featuresTranscriptTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets
                    bullets={this.state.featuresTranscriptArray}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="featureImage">
            <h1>ADD IMAGE</h1>
          </Col>
        </Row>
        <Row className="researchBottomRow">
          <Col className="featureImage">
            <h1>ADD IMAGE</h1>
          </Col>
          <Col className="featureSubSectionTextAlign">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <h1 className="primary_font">
                    {this.state.featuresDocTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <FeaturesBullets bullets={this.state.featuresDocArray} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <FeaturesSubfooter
            img={this.state.featuresSubfooterPhoto}
            quote={this.state.featuresSubfooterBlurb}
            quoteAuthor={this.state.featuresSubfooterBlurbAuthor}
          />
        </Row>
      </Container>
    );
  }
}

export default Features;

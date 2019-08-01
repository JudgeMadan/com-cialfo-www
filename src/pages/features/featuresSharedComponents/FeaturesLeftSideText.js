import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import FeaturesBullets from "./FeaturesBullets";
import MobileFeaturesBullets from "./MobileFeaturesBullets";
import Oval from "../../../img/Oval.svg";
import Line from "../../../img/Line.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class FeaturesLeftSideText extends React.Component {
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
    const space = this.props.match.params.space;
    return (
      <div>
        {/* FULL WIDTH TRANSCRIPT */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1000 && (
            <Row className="mb-5">
              <Col className="featureSubSectionTextAlign">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.props.title}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesBullets
                        bullets={this.props.bullets}
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col className="feature-image-right-side-col vertical-center-image">
                <img
                  className="features-productImgRight feature-image-sizing"
                  src={this.props.image}
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
                    src={this.props.image}
                  />
                </Container>
              </Row>
              <Row className="featureSubSectionTextAlign my-5">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="primary_font">
                        {this.props.title}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FeaturesBullets
                        bullets={this.props.bullets}
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
                src={this.props.image}
              />
            </Row>
            <Row className="homePageFeaturesText">
              <div className="homePageFeaturesRightSideTextObject mt-3">
                <Row>
                  <h1 className="primary_font">
                    {this.props.title}
                  </h1>
                </Row>
                <Row>
                  <Col>
                    <MobileFeaturesBullets
                      bullets={this.props.bullets}
                    />
                  </Col>
                </Row>
                <Row className="mb-5" />
              </div>
            </Row>
          </Container>
        </MediaQuery>
      </div>
    );
  }
}
export default withRouter(FeaturesLeftSideText);

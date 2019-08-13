import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import FeaturesBullets from "./FeaturesBullets";
import MobileFeaturesBullets from "./MobileFeaturesBullets";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class FeaturesRightSideText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
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

  render() {
    return (
      <div>
        {/* FULL WIDTH EXPLORE */}
        <MediaQuery query="(min-device-width: 1224px)">
          {this.state.width > 1200 && (
            <Row>
              <Col className="feature-image-left-side-col vertical-center-image mb-5">
                <img
                  className="features-img subpage-features-productImgLeft feature-image-sizing"
                  src={this.props.image}
                />
              </Col>
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
            </Row>
          )}
          {this.state.width <= 1200 && (
            <div>
              <Col className="feature-home-page-shared-component-image-right-side-col 
              medium-home-left-side-text-image"> 
                <div className="feature-subpage-image-centering"> 
                  <img
                    className="features-img feature-subpage-image-sizing-medium"
                    src={this.props.image}
                  />
                </div>
              </Col>
              <Row className="featureSubSectionTextAlign  my-5">
                <Container className="center-in-row">
                  <Row>
                    <Col className="center-in-row max-width-800">
                      <h1 className="primary_font text-center">
                        {this.props.title}
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="center-in-row max-width-800 mx-5">
                      <FeaturesBullets
                        bullets={this.props.bullets}
                        className="mx-5"
                      />
                    </Col>
                  </Row>
                </Container>
              </Row>
            </div>
          )}
        </MediaQuery>
        {/* MOBILE EXPLORE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="mobile-bottom-border">
            <Row className="mobile-homePageFeaturesImage mt-5">
              <img
                className="features-img mobile-homePageImg"
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
export default withRouter(FeaturesRightSideText);

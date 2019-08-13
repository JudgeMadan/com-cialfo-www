import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../Features.css";
import FeaturesSubfooter from "./FeaturesSubfooter";
import FeaturesRightSideText from "./FeaturesRightSideText"
import FeaturesLeftSideText from "./FeaturesLeftSideText"
import FeaturesBullets from "./FeaturesBullets";
import MobileFeaturesBullets from "./MobileFeaturesBullets";
import Oval from "../../../img/Oval.svg";
import Line from "../../../img/Line.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class FeaturesTitle extends React.Component {
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
      <Container className="featuresSendPage" fluid={true}>
        {/* FULL SCREEN PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="features-titleContainer mb-5">
            <h1 className="primary_font">{this.props.title}</h1>
          </Row>
          <Row className="featuresVideoEmbed">
            <div>
              <img className="features-oval" src={Oval} />
              <img className="features-line" src={Line} />
              <Row>
                <img className="features-hero-image" src={this.props.heroImage} />
              </Row>
            </div>
          </Row>
        </MediaQuery>
        {/* MOBILE PAGE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="features-titleContainer mb-5">
            <h1 className="primary_font">{this.props.title}</h1>
          </Row>
          <Container className="featuresVideoEmbed mobile-bottom-border pb-5">
            <Row className="center-in-row">
              <img className="mobile-features-hero-image" src={this.props.heroImage} />
            </Row>
          </Container>
        </MediaQuery>
      </Container>
    );
  }
}
export default withRouter(FeaturesTitle);

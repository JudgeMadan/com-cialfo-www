import React from "react";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./solutions.css";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import { Link } from "react-router-dom";

class SolutionsLeftSideText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="homePageFeaturesText">
            <div className="homePageFeaturesLeftSideTextObject">
              <Row>
                <h1 className="primary_font">{this.props.title}</h1>
              </Row>
              <Row>
                <p className="secondary_font">{this.props.blurb}</p>
              </Row>
              <Row>
                <Link
                  className="homeFeatureLink homePageFeaturesLeverageLinkText"
                  to={this.props.url}
                >
                  {this.props.link}
                </Link>
              </Row>
            </div>
          </Col>
          <Col className="featureImage">
            <img
              className="solutions-right-align-light-blue-background"
              src={ThinLightBlueRectangle}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SolutionsLeftSideText;

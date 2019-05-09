import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import "./solutions.css";

class SolutionsRightSideText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="featureImage">
            <img
              className="solutions-left-align-light-blue-background"
              src={ThinLightBlueRectangle}
            />
          </Col>
          <Col className="featureSubSectionTextAlign">
            <div className="homePageFeaturesRightSideTextObject">
              <Row>
                <h1 className="primary_font">{this.props.title}</h1>
              </Row>
              <Row>
                <p className="secondary_font">{this.props.blurb}</p>
              </Row>
              <Row>
                <Link className="homeFeatureLink" to={this.props.url}>
                  <p className={this.props.linkStyle}>{this.props.link}</p>
                </Link>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SolutionsRightSideText;

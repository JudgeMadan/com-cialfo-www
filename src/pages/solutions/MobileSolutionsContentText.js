import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import "./solutions.css";
import Container from "react-bootstrap/Container";

class MobileSolutionsContentText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="mobile-bottom-border">
        <Row className="mobile-homePageFeaturesImage mt-5">
          <img className="mobile-homePageImg" src={this.props.image} />
        </Row>
        <Row className="homePageFeaturesText">
          <div className="homePageFeaturesRightSideTextObject mt-3">
            <Row>
              <h1 className="primary_font">{this.props.title}</h1>
            </Row>
            <Row>
              <p className="secondary_font">{this.props.blurb}</p>
            </Row>
            <Row className="mb-3">
              <Link className="homeFeatureLink" to={this.props.url}>
                <p className={this.props.linkStyle}>{this.props.link}</p>
              </Link>
            </Row>
          </div>
        </Row>
      </Container>
    );
  }
}

export default MobileSolutionsContentText;

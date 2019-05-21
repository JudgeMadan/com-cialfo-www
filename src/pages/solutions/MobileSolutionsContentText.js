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
      <Container>
        <Row className="mobile-bottom-border mb-5 pb-5">
          <Col className="featureSubSectionTextAlign ">
            <div>
              <Row className="center-in-row mobile-solutions-content-title">
                <h1 className="primary_font">{this.props.title}</h1>
              </Row>
              <Row className="center-in-row mx-3">
                <p className="secondary_font mobile-solutions-blurb">
                  {this.props.blurb}
                </p>
              </Row>
              <Row className="center-in-row mx-5">
                <Link className="homeFeatureLink" to={this.props.url}>
                  <p className={this.props.linkStyle}>{this.props.link}</p>
                </Link>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MobileSolutionsContentText;

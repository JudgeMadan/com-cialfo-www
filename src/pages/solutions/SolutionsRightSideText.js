import React from "react";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./solutions.css";

class SolutionsRightSideText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="featureImage" />
          <Col className="featureSubSectionTextAlign">
            <div className="homePageFeaturesRightSideTextObject">
              <Row>
                <h1 className="primary_font">{this.props.title}</h1>
              </Row>
              <Row>
                <p className="secondary_font">{this.props.blurb}</p>
              </Row>
              <Row>
                <Link
                  className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                  to={this.props.url}
                >
                  {this.props.link}
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

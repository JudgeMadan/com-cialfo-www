import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import "./solutions.css";
import { withRouter } from "react-router-dom";

class SolutionsRightSideText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.url);

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
                <Link
                  className={this.props.linkStyle}
                  to={this.props.match.url + this.props.url}
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

export default withRouter(SolutionsRightSideText);

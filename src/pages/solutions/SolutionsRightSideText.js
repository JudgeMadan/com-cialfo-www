import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import LightBlueRectangle from "../../img/LightBlueRectangle.svg";
import "./solutions.css";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile, parse } from "path-to-regexp";
import MediaQuery from "react-responsive";

class SolutionsRightSideText extends React.Component {
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

  generateUrl = (path, location) => {
    const ROUTE = "/:space/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = PathToRegexp(ROUTE).exec(location.pathname);
    if (routeComponents && routeComponents[3]) {
      return definePath({
        space: routeComponents[1],
        locale: routeComponents[2],
        path: path
      });
    } else if (routeComponents && routeComponents[3] == undefined) {
      return definePath({
        space: routeComponents[1],
        locale: routeComponents[2],
        path: "a"
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.width > 1200 && (
          <Row>
            <Col className="solutionsPageFeaturesImage homePageFeaturesImageBackground">
              <img
                className="custom-left-align-light-blue-background"
                src={LightBlueRectangle}
              />
              <img
                className="solutions-productImgLeft"
                src={this.props.image}
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
                    to={this.generateUrl(this.props.url, this.props.location)}
                  >
                    {this.props.link}
                  </Link>
                </Row>
              </div>
            </Col>
          </Row>
        )}
           {this.state.width <= 1200 && (
            <div>
                <Col className="feature-home-page-shared-component-image-right-side-col 
                medium-home-left-side-text-image medium-home-feature-img-div-container"> 
                <div className="medium-home-feature-img-div">
                    <img
                      className="features-img medium-feature-home-subpage-image-sizing"
                      src={this.props.image}
                    />
                  </div>
                </Col>
              <Row className="homePageFeaturesText my-5 pb-3">
                <div className="homePageFeaturesRightSideTextObject">
                  <Row className="center-in-row">
                    <h1 className="primary_font text-center">
                      {this.props.title}
                    </h1>
                  </Row>
                  <Row className="center-in-row">
                    <p className="secondary_font text-center">
                      {this.props.blurb}
                    </p>
                  </Row>
                  <Row className="center-in-row">
                    <Link
                      className={this.props.linkStyle}
                      to={this.generateUrl(this.props.url, this.props.location)}
                    >
                      {this.props.link}
                    </Link>
                  </Row>
                </div>
              </Row>
            </div>
          )}
      </div>
    );
  }
}

export default withRouter(SolutionsRightSideText);

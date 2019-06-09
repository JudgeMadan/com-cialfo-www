import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./solutions.css";
import LightBlueRectangle from "../../img/LightBlueRectangle.svg";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile, parse } from "path-to-regexp";
class SolutionsLeftSideText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: window.innerHeight, width: window.innerWidth };
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
        {this.state.width > 1000 && (
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
                    className={this.props.linkStyle}
                    to={this.generateUrl(this.props.url, this.props.location)}
                  >
                    {this.props.link}
                  </Link>
                </Row>
              </div>
            </Col>
            <Col className="solutionsPageFeaturesImage homePageFeaturesImageBackground">
              <img
                className="features-right-align-light-blue-background"
                src={LightBlueRectangle}
              />
              <img
                className="solutions-productImgRight"
                src={this.props.image}
              />
            </Col>
          </Row>
        )}
        {this.state.width <= 1000 && (
          <Container className="m-5">
            <Row className="homePageFeaturesImageBackground solutionsPageFeaturesImage mt-5">
              <img
                className="features-right-align-light-blue-background"
                src={LightBlueRectangle}
              />
              <img
                className="medium-solutions-productImgRight"
                src={this.props.image}
              />
            </Row>
            <Row className="homePageFeaturesText mb-5 pb-5">
              <div className="homePageFeaturesLeftSideTextObject">
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
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default withRouter(SolutionsLeftSideText);

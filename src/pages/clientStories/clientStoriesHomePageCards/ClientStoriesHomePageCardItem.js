import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import "../clientStories.css";
import PathToRegexp, { compile, parse } from "path-to-regexp";
import { withRouter } from "react-router-dom";

class ClientStoriesHomePageCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      <Col className="client-stories-home-page-card m-5 px-5 pt-5 pb-3">
        <Row>
          <img src={this.props.logo} />
        </Row>
        <Row className="my-4 primary_font">
          <h1>{this.props.title}</h1>
        </Row>
        <Row className="client-stories-home-page-card-blurb secondary_font">
          <p>{this.props.blurb}</p>
        </Row>
        <Row>
          <NavLink
            className="client-marquee-object-link-nav-link"
            to={this.generateUrl(this.props.route, this.props.location)}
          >
            <p className="secondary_font client-marquee-object-link-text">
              Read the story
            </p>
          </NavLink>
        </Row>
      </Col>
    );
  }
}
export default withRouter(ClientStoriesHomePageCardItem);

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import "../clientStories.css";

class ClientStoriesHomePageCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
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
            to={this.props.route}
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
export default ClientStoriesHomePageCardItem;

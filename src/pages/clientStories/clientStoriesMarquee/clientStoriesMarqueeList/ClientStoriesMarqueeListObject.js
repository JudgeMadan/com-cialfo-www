import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ClientStoriesMarqueeListObject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trimmedRoute: ""
    };
  }

  componentDidMount() {
    let route = this.props.route;
    let trimmedRoute = route.substring(1);
    this.setState({
      trimmedRoute: trimmedRoute
    });
  }

  render() {
    return (
      <div className="client-marqueeElement client-marqueeItem ">
        <Col className="client-marquee-object px-5 mx-2 py-3 my-2">
          <Row className="client-marquee-object-title">
            <h1 className="primary_font">{this.props.blurb}</h1>
          </Row>
          <Row className="client-marquee-object-bottom-row">
            <Col className="client-marquee-object-link-text-col">
              <NavLink
                className="client-marquee-object-link-nav-link"
                to={this.state.trimmedRoute}
              >
                <p className="secondary_font client-marquee-object-link-text">
                  Read the story
                </p>
              </NavLink>
            </Col>
            <Col>
              <div className="client-marquee-image-div">
                <img className="client-marquee-image" src={this.props.logo} />
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
export default withRouter(ClientStoriesMarqueeListObject);

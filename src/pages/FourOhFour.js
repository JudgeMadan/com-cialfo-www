import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import React from "react";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import FourOhFourImg from "../img/404.svg";
import GrayLines from "../img/GrayLines.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class FourOhFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken()
  });

  componentDidMount() {
    this.fetchGetADemo().then(this.setGetADemo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchGetADemo().then(this.setGetADemo);
    }
  }

  fetchGetADemo = () => {
    return this.client.getEntries({
      content_type: "fourOhFour",
      locale: this.props.match.params.locale
    });
  };

  setGetADemo = response => {
    const fourOhFourContent = response.items[0].fields;
    for (let key in fourOhFourContent) {
      if (typeof fourOhFourContent[key] === "string") {
        this.setState({
          [key]: fourOhFourContent[key]
        });
      }
    }
  };

  render() {
    return (
      <div className="privacy_security_title four_oh_four_outer_content">
        <Container>
          <MediaQuery query="(min-device-width: 1224px)">
            <div>
              <Row className="four_oh_four_content pb-5">
                <img className="blue-header-svg" src={FourOhFourImg} />
                <img className="four-oh-four-gray-lines" src={GrayLines} />
              </Row>
              <Row className="four_oh_four_content center-in-row">
                <h1 className="primary_font thank-you-title-text four-oh-four-title-text">
                  {this.state.fourOhFourText}
                </h1>
              </Row>
              <Row className="four_oh_four_content button">
                <Link to="">
                  {/* <Link className="nav-link nav-link-no-underline" to=""> */}
                  <button
                    className="nav-link-button sharp-corners-button btn btn-primary submit_button"
                    // className="submit_button"
                  >
                    {this.state.fourOhFourButton}
                  </button>
                </Link>
              </Row>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1223px)">
            <div>
              <Row className="four_oh_four_content pb-5 my-3">
                <img className="mobile-blue-header-svg" src={FourOhFourImg} />
                <img
                  className="mobile-four-oh-four-gray-lines"
                  src={GrayLines}
                />
              </Row>
              <Row className="four_oh_four_content center-in-row ">
                <h1 className="primary_font thank-you-title-text four-oh-four-title-text">
                  {this.state.fourOhFourText}
                </h1>
              </Row>
              <Row className="four_oh_four_content button">
                <Link className="nav-link nav-link-no-underline" to="">
                  <button className="submit_button">
                    {this.state.fourOhFourButton}
                  </button>
                </Link>
              </Row>
            </div>
          </MediaQuery>
        </Container>
      </div>
    );
  }
}

export default withRouter(FourOhFour);

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import FourOhFourImg from "../img/404.svg";
import GrayLines from "../img/GrayLines.svg";

class FourOhFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchGetADemo().then(this.setGetADemo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchGetADemo().then(this.setGetADemo);
    }
  }

  fetchGetADemo = () => {
    return this.client.getEntries({
      content_type: "fourOhFour",
      locale: this.props.locale
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
          <div>
            <Row className="four_oh_four_content">
              <div>
                <img className="thank-you-image" src={FourOhFourImg} />
                <img className="thank-you-gray-lines" src={GrayLines} />
              </div>
            </Row>
            <Row className="four_oh_four_content center-in-row">
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
        </Container>
      </div>
    );
  }
}

export default FourOhFour;

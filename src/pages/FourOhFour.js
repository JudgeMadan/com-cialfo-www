import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import FourOhFourImg from "./404/404.png";

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
        <Container className="four_oh_four_outer_content">
          <div>
            <Row className="four_oh_four_content">
              <div>
                <img src={FourOhFourImg} />
              </div>
            </Row>
            <Row className="four_oh_four_content">
              <div>
                <h1 className="primary_font">{this.state.fourOhFourText}</h1>
              </div>
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

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import ThankYouImg from "./thankYou/ThankYou.png";

class ThankYou extends React.Component {
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
    return this.client.getEntry("7LSK0DMIgxeHkpjNlqQZLP");
  };

  setGetADemo = response => {
    const thankYouContent = response.fields;
    for (let key in thankYouContent) {
      if (typeof thankYouContent[key] === "string") {
        this.setState({
          [key]: thankYouContent[key]
        });
      }
    }
  };

  render() {
    return (
      <Container className="four_oh_four_outer_content">
        <div>
          <Row className="four_oh_four_content">
            <div>
              <img src={ThankYouImg} />
            </div>
          </Row>
          <Row className="four_oh_four_content">
            <div>
              <h1 className="primary_font">{this.state.fourOhFourText}</h1>
            </div>
          </Row>
          <Row className="four_oh_four_content">
            <div>
              <h2 className="secondary_font">{this.state.fourOhFourButton}</h2>
            </div>
          </Row>
          <Row className="four_oh_four_content button">
            <Link className="nav-link nav-link-no-underline" to="">
              <button className="submit_button">Home</button>
            </Link>
          </Row>
        </div>
      </Container>
    );
  }
}

export default ThankYou;

import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";
import TermsOfServiceSingapore from "./termsOfService/TermsOfServiceSingapore";
import TermsOfServiceUS from "./termsOfService/TermsOfServiceUS";

class TermsOfService extends React.Component {
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
    accessToken: this.setAccessToken(),
    environment: this.props.environment
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
      content_type: "privacyAndSecurity",
      locale: this.props.match.params.locale
    });
  };

  setGetADemo = response => {
    const privacyContent = response.items[0].fields;
    for (let key in privacyContent) {
      if (typeof privacyContent[key] === "string") {
        this.setState({
          [key]: privacyContent[key]
        });
      } else {
        this.setState({
          [key]: privacyContent[key].content
        });
      }
    }
  };

  render() {
    const space = this.props.match.params.space;
    return (
      <Container className="secondary_font">
        <Container class="text-lg-center text-md-center text-sm-center text-xs-center">
          <Row className="center-in-row">
            <p className="hidden-xs-down primary_font privacy-upper-title">
              Cialfo
            </p>
          </Row>
          <Row className="center-in-row">
            <h1 className="primary_font terms-of-service-title ">
              Terms of Service
            </h1>
          </Row>
          <br />
        </Container>
        {space === "us" && <TermsOfServiceUS />}
        {space !== "us" && <TermsOfServiceSingapore />}
        <Row className="center-in-row pb-5">
          <h1>···</h1>
        </Row>
      </Container>
    );
  }
}

export default withRouter(TermsOfService);

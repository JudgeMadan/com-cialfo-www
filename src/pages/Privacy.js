import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import PrivacyAndSecurityBody from "./privacyAndSecurity/PrivacyAndSecurityBody";
import PrivacyEnglish from "./privacyAndSecurity/PrivacyEnglish";
import PrivacyChinese from "./privacyAndSecurity/PrivacyChinese";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";

class Privacy extends React.Component {
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
    return (
      <div>
        <Row className="center-in-row pt-5">
          {this.props.locale !== "zh-CN" && <PrivacyEnglish />}
          {this.props.locale === "zh-CN" && <PrivacyChinese />}
        </Row>
        <Row className="center-in-row pb-5">
          <h1>···</h1>
        </Row>
      </div>
    );
  }
}

export default withRouter(Privacy);

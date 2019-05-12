import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import PrivacyAndSecurityBody from "./privacyAndSecurity/PrivacyAndSecurityBody";
import PrivacyEnglish from "./privacyAndSecurity/PrivacyEnglish";
import PrivacyChinese from "./privacyAndSecurity/PrivacyChinese";
import Container from "react-bootstrap/Container";
class Privacy extends React.Component {
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
      content_type: "privacyAndSecurity",
      locale: this.props.locale
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
    console.log(this.state);
    return (
      <Row className="center-in-row pt-5 pb-5">
        {this.props.locale !== "zh-CN" && <PrivacyEnglish />}
        <PrivacyChinese />
        )}
      </Row>
    );
  }
}

export default Privacy;

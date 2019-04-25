import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import PrivacyAndSecurityBody from "./privacyAndSecurity/PrivacyAndSecurityBody";
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
    return (
      <div>
        <div className="privacy_security_title title_top">
          <Row>
            <h5 className="primary_font">
              {this.state.privacyAndSecuritySubtitle}
            </h5>
          </Row>
        </div>
        <div className="privacy_security_title title_bottom">
          <Row>
            <h1 className="primary_font">
              {this.state.privacyAndSecurityTitle}
            </h1>
          </Row>
        </div>
        <PrivacyAndSecurityBody
          paragraphs={this.state.privacyAndSecurityBody}
        />
        <Row className="privacy_security_title">
          <h1>...</h1>
        </Row>
      </div>
    );
  }
}

export default Privacy;

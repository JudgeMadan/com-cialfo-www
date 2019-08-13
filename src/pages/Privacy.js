import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import PrivacyEnglish from "./privacyAndSecurity/PrivacyEnglish";
import PrivacyChinese from "./privacyAndSecurity/PrivacyChinese";
import { withRouter } from "react-router-dom";

class Privacy extends React.Component {

  render() {
    return (
      <div>
        <Row className="center-in-row pt-5">
          {this.props.match.params.locale !== "zh-CN" && <PrivacyEnglish />}
          {this.props.match.params.locale === "zh-CN" && <PrivacyChinese />}
        </Row>
        <Row className="center-in-row pb-5">
          <h1>···</h1>
        </Row>
      </div>
    );
  }
}

export default withRouter(Privacy);

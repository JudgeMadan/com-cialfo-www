import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import Container from "react-bootstrap/Container";
import * as contentful from "contentful";
import SecurityFeatureObject from "./privacyAndSecurity/SecurityFeatureObject";
import Line from "../img/Line.svg";
import BlueStroke10 from "../img/BlueStroke10.svg";
import Oval from "../img/Oval.svg";
import "./privacyAndSecurity/privacyAndSecurity.css";
class Security extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidMount() {
    this.fetchHomeContent().then(this.setHomeContent);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchHomeContent().then(this.setHomeContent);
    }
  }

  handleChange = e => {
    const fieldContent = e.target.value;
    this.props.sendEmailAddressToGetADemo(fieldContent);
  };

  fetchHomeContent = () =>
    this.client.getEntries({
      content_type: "securityPage",
      locale: this.props.locale
    });

  setHomeContent = response => {
    const homeContent = response.items;
    let filteredhomeContent = homeContent.filter(
      homeContent => homeContent.fields.pageType === "securityPage"
    );
    let filteredhomeContentFields = filteredhomeContent[0].fields;
    for (let key in filteredhomeContentFields) {
      if (typeof filteredhomeContentFields[key] === "string") {
        this.setState({
          [key]: filteredhomeContentFields[key]
        });
      } else if (Array.isArray(filteredhomeContentFields[key])) {
        this.setState({
          [key]: filteredhomeContentFields[key]
        });
      } else {
        this.setState({
          [key]: filteredhomeContentFields[key].fields.file.url
        });
      }
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Row className="center-in-row ">
          <img className="security-line" src={Line} />
          <h1 className="primary_font security-title-font-size security-header-text">
            {this.state.securityTitle}
          </h1>
        </Row>
        <Row className="center-in-row pb-5 security-title-row">
          <p className="secondary_font security-header-text">
            {this.state.securitySubtitle}
          </p>
        </Row>
        <div className="full-width-light-blue mt-5">
          <Row className="center-in-row light-blue-background security-content-row-header">
            <img className="security-oval" src={Oval} />
            <img className="security-blue-stroke-10" src={BlueStroke10} />
            <h1 className="primary_font security-subheader security-header-text">
              {this.state.securityFeaturesTitle}
            </h1>
          </Row>
          <SecurityFeatureObject
            securityFeatures={this.state.securityFeaturesItems}
          />
        </div>
        <div className="full-width-dark-blue">
          <Row className="center-in-row security-content-row-header">
            <h1 className="primary_font white-font security-subheader ">
              {this.state.securityQuestionTitle}
            </h1>
          </Row>
          <Row className="center-in-row">
            <p className="secondary_font white-font">
              {this.state.securityQuestionBlurb}
            </p>
          </Row>
          <Row className="center-in-row pb-5 security-content-row-footer">
            <button className="security-button">
              {this.state.securityQuestionButtonText}
            </button>
          </Row>
        </div>
        <Row className="center-in-row pt-5 pb-5">
          {this.props.locale !== "zh-CN" && (
            <p className="secondary_font">
              Read more about our <a href="#">Privacy Policy</a> and&nbsp;
              <a href="#">Terms of Service</a>
            </p>
          )}
          {this.props.locale === "zh-CN" && (
            <p className="secondary_font">
              中文中文中文 <a href="#">Privacy Policy</a> 中文&nbsp;
              <a href="#">Terms of Service</a>
            </p>
          )}
        </Row>
      </Container>
    );
  }
}

export default Security;

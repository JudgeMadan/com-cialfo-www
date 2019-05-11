import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import Container from "react-bootstrap/Container";
import * as contentful from "contentful";
import SecurityFeatureObject from "./privacyAndSecurity/SecurityFeatureObject";
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
          <h1 className="primary_font security-title-font-size">
            {this.state.securityTitle}
          </h1>
        </Row>
        <Row className="center-in-row pb-5 security-title-row">
          <p className="secondary_font">{this.state.securitySubtitle}</p>
        </Row>
        <div className="full-width-light-blue mt-5">
          <Row className="center-in-row light-blue-background pt-5">
            <h1 className="primary_font subheader-font-size ">
              {this.state.securityFeaturesTitle}
            </h1>
          </Row>
          <SecurityFeatureObject
            securityFeatures={this.state.securityFeaturesItems}
          />
        </div>
        <div className="full-width-dark-blue">
          <Row className="center-in-row  pt-5">
            <h1 className="primary_font white-font subheader-font-size ">
              {this.state.securityQuestionTitle}
            </h1>
          </Row>
          <Row className="center-in-row">
            <p className="secondary_font white-font">
              {this.state.securityQuestionBlurb}
            </p>
          </Row>
          <Row className="center-in-row pb-5">
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

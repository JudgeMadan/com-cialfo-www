import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import Container from "react-bootstrap/Container";
import SecurityFeatureObject from "./privacyAndSecurity/SecurityFeatureObject";
import MobileSecurityFeatureObject from "./privacyAndSecurity/MobileSecurityFeatureObject";
import Line from "../img/Line.svg";
import BlueStroke10 from "../img/BlueStroke10.svg";
import Oval from "../img/Oval.svg";
import "./privacyAndSecurity/privacyAndSecurity.css";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { DataContext } from "../contexts/DataContext"

class Security extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.context.fetchEntries("securityPage").then((response) => {
      let data = this.context.setContent(response, "securityPage")
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.context.fetchEntries("securityPage").then((response) => {
        let data = this.context.setContent(response, "securityPage")
        this.setState({
          data: data
        })
      });
    }
  }

  handleChange = e => {
    const fieldContent = e.target.value;
    this.props.sendEmailAddressToGetADemo(fieldContent);
  };

  render() {
    const locale = this.props.match.params.locale
    return (
      <Container>
        {/* FULL SCREEN PAGE HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="center-in-row security-header-row">
            <img className="security-line" src={Line} />
            <h1 className="primary_font security-header-text">
              {this.state.data.securityTitle}
            </h1>
          </Row>
          <Row className="center-in-row pb-5 security-title-row">
            <p className="secondary_font security-header-subtitle security-header-text">
              {this.state.data.securitySubtitle}
            </p>
          </Row>
        </MediaQuery>
        {/* MOBILE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Container className="center-in-row security-header-row">
            <Row className="center-in-row ">
              <h1 className="primary_font security-header-text">
                {this.state.data.securityTitle}
              </h1>
            </Row>
            <Row className="center-in-row mobile-security-title-row">
              <p className="secondary_font mobile-security-header-subtitle security-header-text">
                {this.state.data.securitySubtitle}
              </p>
            </Row>
          </Container>
        </MediaQuery>
        {/* DESK TOP CONTENT */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="full-width-light-blue center-in-row mt-5">
            <Row className="center-in-row light-blue-background security-content-row-header">
              <img className="security-oval" src={Oval} />
              <img className="security-blue-stroke-10" src={BlueStroke10} />
              <h1 className="primary_font security-subheader security-header-text">
                {this.state.data.securityFeaturesTitle}
              </h1>
            </Row>
            <Row className="center-in-row">
              <SecurityFeatureObject
                securityFeatures={this.state.data.securityFeaturesItems}
              />
            </Row>
          </div>
          <div className="full-width-dark-blue">
            <Row className="center-in-row security-content-row-header">
              <h1 className="primary_font white-font security-subheader ">
                {this.state.data.securityQuestionTitle}
              </h1>
            </Row>
            <Row className="center-in-row">
              <p className="secondary_font white-font security-questions-blurb">
                {this.state.data.securityQuestionBlurb}
              </p>
            </Row>
            <Row className="center-in-row pb-5 security-content-row-footer">
              <NavLink to="contact">
                <button className="security-button">
                  {this.state.data.securityQuestionButtonText}
                </button>
              </NavLink>
            </Row>
          </div>
          <Row className="center-in-row pt-5 pb-5">
            {locale !== "zh-CN" && (
              <p className="secondary_font">
                Read more about our{" "}
                <NavLink to="privacy-policy">Privacy Policy</NavLink> and&nbsp;
                <NavLink to="terms-of-service">Terms of Service</NavLink>
              </p>
            )}
            {locale === "zh-CN" && (
              <p className="secondary_font">
                中文中文中文 <NavLink to="privacy-policy">Privacy Policy</NavLink>{" "}
                and&nbsp;
                <NavLink to="terms-of-service">Terms of Service</NavLink>
              </p>
            )}
          </Row>
        </MediaQuery>
        {/* MOBILE CONTENT */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="center-in-row light-blue-background mobile-security-content-row-header mt-5">
            <h1 className="primary_font mobile-security-subheader security-header-text">
              {this.state.data.securityFeaturesTitle}
            </h1>
          </Row>
          <Row className="center-in-row light-blue-background">
            <MobileSecurityFeatureObject
              securityFeatures={this.state.data.securityFeaturesItems}
            />
          </Row>
          <Row className="center-in-row dark-blue-background">
            <h1 className="primary_font white-font mobile-security-subheader pt-5">
              {this.state.data.securityQuestionTitle}
            </h1>
          </Row>
          <Row className="center-in-row dark-blue-background">
            <p className="secondary_font white-font security-questions-blurb">
              {this.state.data.securityQuestionBlurb}
            </p>
          </Row>
          <Row className="center-in-row pb-5 mobile-security-content-button dark-blue-background">
            <NavLink to="contact">
              <button className="security-button">
                {this.state.data.securityQuestionButtonText}
              </button>
            </NavLink>
          </Row>
          <Row className="center-in-row mobile-security-read-more pb-5">
            {locale !== "zh-CN" && (
              <p className="secondary_font">
                Read more about our{" "}
                <NavLink to="privacy-policy">Privacy Policy</NavLink> and&nbsp;
                <NavLink to="terms-of-service">Terms of Service</NavLink>
              </p>
            )}
            {locale === "zh-CN" && (
              <p className="secondary_font">
                中文中文中文 <NavLink to="privacy-policy">Privacy Policy</NavLink>
                and&nbsp;
                <NavLink to="terms-of-service">Terms of Service</NavLink>
              </p>
            )}
          </Row>
        </MediaQuery>
      </Container>
    );
  }
}

export default withRouter(Security);

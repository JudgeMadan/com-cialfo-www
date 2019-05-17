import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutByTheNumbers from "./about/AboutByTheNumbers";
import AboutLeadershipTeam from "./about/AboutLeadershipTeam";
import AboutPartners from "./about/AboutPartners";
import MobileAboutPartners from "./about/MobileAboutPartners";
import AboutCounselors from "./about/AboutCounselors";
import MobileAboutCounselors from "./about/MobileAboutCounselors";
import AboutBusinessAdvisors from "./about/AboutBusinessAdvisors";
import MobileAboutBusinessAdvisors from "./about/MobileAboutBusinessAdvisors";
import AboutCialfoOffices from "./about/AboutCialfoOffices";
import MobileAboutCialfoOffices from "./about/MobileAboutCialfoOffices";
import MobileAboutByTheNumbers from "./about/MobileAboutByTheNumbers";
import MediaQuery from "react-responsive";
import PartnerImages from "./PartnerImages";

import "./about/About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
  });

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchAboutContent().then(this.setAboutContent);
    }
  }

  componentDidMount() {
    this.fetchAboutContent().then(this.setAboutContent);
  }

  fetchAboutContent = () =>
    this.client.getEntries({
      content_type: "about",
      locale: this.props.locale
    });

  setAboutContent = response => {
    const aboutContent = response.items;
    let filteredaboutContent = aboutContent.filter(
      aboutContent => aboutContent.fields.pageType === "aboutPage"
    );
    let filteredaboutContentFields = filteredaboutContent[0].fields;
    for (let key in filteredaboutContentFields) {
      if (typeof filteredaboutContentFields[key] === "string") {
        this.setState({
          [key]: filteredaboutContentFields[key]
        });
      } else if (Array.isArray(filteredaboutContentFields[key])) {
        this.setState({
          [key]: filteredaboutContentFields[key]
        });
      } else {
        this.setState({
          [key]: filteredaboutContentFields[key].fields.file.url
        });
      }
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container className="aboutPage">
        {/* FULL SCREEN HEADER */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="aboutPageTitle">
            <Container>
              <Row>
                <Col className="top_row_left_col ">
                  <div>
                    <Row>
                      <h1 className="primary_font left-side-header-title">
                        {this.state.aboutPageHeaderTitle}
                      </h1>
                    </Row>
                    <Row>
                      <h2 className="secondary_font left-side-header-blurb">
                        {this.state.aboutPageHeaderSubtitle}
                      </h2>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <img src={this.state.aboutPageHeaderImage} />
                </Col>
              </Row>
            </Container>
          </Row>
        </MediaQuery>
        {/* MOBILE HEADER */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row>
            <Container>
              <img
                className="mobile-hero-image"
                src={this.state.aboutPageHeaderImage}
              />
              <Row className="mobile-top-row-header-container center-in-row">
                <h1 className="primary_font aboutPageHeaderTitle mobile_top_row_header">
                  {this.state.aboutPageHeaderTitle}
                </h1>
              </Row>
              <Row className="mobile-top-row-header-container center-in-row my-3">
                <h2 className="secondary_font mobile_top_row_header">
                  {this.state.aboutPageHeaderSubtitle}
                </h2>
              </Row>
            </Container>
          </Row>
        </MediaQuery>
        {/* FULL SCREEN BY THE NUMBERS */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="full-width-light-blue">
            <Row className="center-in-row light-blue-background pt-5">
              <h1 className="primary_font">
                {this.state.aboutPageNumbersTitle}
              </h1>
            </Row>
            <Row className="by-the-numbers light-blue-background">
              <AboutByTheNumbers
                byTheNumbers={this.state.aboutPageNumbersArray}
              />
            </Row>
          </div>
        </MediaQuery>
        {/* MOBILE BY THE NUMBERS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="light-blue-background">
            <Container className="m-3">
              <Row className="center-in-row light-blue-background pt-5">
                <h1 className="primary_font">
                  {this.state.aboutPageNumbersTitle}
                </h1>
              </Row>
              <Row className="by-the-numbers light-blue-background">
                <MobileAboutByTheNumbers
                  byTheNumbers={this.state.aboutPageNumbersArray}
                />
              </Row>
            </Container>
          </Row>
        </MediaQuery>
        {/* FULL SCREEN ABOUT WHO WE ARE */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="full-width-dark-blue">
            <Row className="dark-blue-background">
              <Col className="who-we-are-image-container">
                <img
                  className="about-page-who-we-are-image"
                  src={this.state.aboutPageWhoWeAreImage}
                />
              </Col>
              <Col className="aboutPageWhoWeAreContentContainer">
                <Row>
                  <p className="aboutPageWhoWeAreContent">
                    {this.state.aboutPageWhoWeAreContent}
                  </p>
                </Row>
              </Col>
            </Row>
          </div>
        </MediaQuery>
        {/* MOBILE WHO WE ARE */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="dark-blue-background">
            {/* <Col className="who-we-are-image-container"> */}
            <div className="mobile-who-we-are-image-container">
              <img
                className="mobile-about-page-who-we-are-image"
                src={this.state.aboutPageWhoWeAreImage}
              />
            </div>
            {/* </Col> */}
            <Col className="aboutPageWhoWeAreContentContainer">
              <Row>
                <p className="mobile-aboutPageWhoWeAreContent">
                  {this.state.aboutPageWhoWeAreContent}
                </p>
              </Row>
            </Col>
          </Row>
        </MediaQuery>
        {/* Full Screen LeadershipTitle */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row className="center-in-row pt-5">
            <h1 className="primary_font">
              {this.state.aboutPageLeadershipTitle}
            </h1>
          </Row>
        </MediaQuery>
        {/* Mobile Screen LeadershipTitle */}
        <MediaQuery query="(max-device-width: 1223px)">
          <Row className="center-in-row pt-5">
            <h1 className="primary_font mobile_top_row_header">
              {this.state.aboutPageLeadershipTitle}
            </h1>
          </Row>
        </MediaQuery>
        <Row className="aboutPageLeadershipTeam">
          <AboutLeadershipTeam
            leadershipTeam={this.state.aboutPageLeadershipLeaders}
          />
        </Row>
        <div className="full-width-light-blue">
          <Row className="center-in-row light-blue-background pt-5">
            <Container className="partners">
              <Row className="center-in-row partnersTitle light-blue-background">
                <h1 className="primary_font light-blue-background">
                  {this.state.aboutPagePartnersTitle}
                </h1>
                <h1 className="secondary_font">
                  {this.state.aboutPagePartnersSubtitle}
                </h1>
              </Row>
              <Row className="aboutPartners light-blue-background">
                {/* MOBILE ABOUT PARTNERS  */}
                <MediaQuery query="(max-device-width: 1223px)">
                  <MobileAboutPartners
                    partners={this.state.aboutPagePartnersPartners}
                  />
                </MediaQuery>
                {/* FULL SCREEN ABOUT PARTNERS */}
                <MediaQuery query="(min-device-width: 1224px)">
                  <AboutPartners
                    partners={this.state.aboutPagePartnersPartners}
                  />
                </MediaQuery>
              </Row>
            </Container>
          </Row>
        </div>
        <Row className="center-in-row about-page-counselor-advisor-header">
          <h1 className="primary_font">
            {this.state.aboutPageCounselorsTitle}
          </h1>
        </Row>
        <Row className=" about-page-counselor-advisor-footer">
          <Container>
            <MediaQuery query="(min-device-width: 1223px)">
              <AboutCounselors
                counselors={this.state.aboutPageCounselorsCounselors}
              />
            </MediaQuery>
            {/* MOBILE COUNSELORS */}
            <MediaQuery query="(max-device-width: 1223px)">
              <MobileAboutCounselors
                counselors={this.state.aboutPageCounselorsCounselors}
              />
            </MediaQuery>
          </Container>
        </Row>
        {/* FULL SCREEN BUSINESS ADVISORS */}
        <MediaQuery query="(min-device-width: 1223px)">
          <div className="full-width-light-blue">
            <Row className="light-blue-background about-page-counselor-advisor-header center-in-row ">
              <h1 className="primary_font">
                {this.state.aboutPageBusinessAdvisorsTitle}
              </h1>
            </Row>
            <Row className="light-blue-background about-page-counselor-advisor-footer">
              <Container>
                <AboutBusinessAdvisors
                  businessAdvisors={
                    this.state.aboutPageBusinessAdvisorsAdvisors
                  }
                />
              </Container>
            </Row>
          </div>
        </MediaQuery>
        {/* MOBILE BUSINESS ADVISORS */}
        <MediaQuery query="(max-device-width: 1223px)">
          <div>
            <Row className="light-blue-background about-page-counselor-advisor-header center-in-row py-5">
              <h1 className="primary_font">
                {this.state.aboutPageBusinessAdvisorsTitle}
              </h1>
            </Row>
            <Row className="light-blue-background about-page-counselor-advisor-footer">
              <Container>
                <MobileAboutBusinessAdvisors
                  businessAdvisors={
                    this.state.aboutPageBusinessAdvisorsAdvisors
                  }
                />
              </Container>
            </Row>
          </div>
        </MediaQuery>
        {/* FULL SCREEN ABOUT OFFICES */}
        <MediaQuery query="(min-device-width: 1223px)">
          <div className="full-width-near-black">
            <AboutCialfoOffices
              cialfoOffices={this.state.aboutPageOfficesLocations}
            />
          </div>
        </MediaQuery>
        {/* MOBILE ABOUT OFFICES */}
        <MediaQuery query="(max-device-width: 1223px)">
          {/* <div className="full-width-near-black"> */}
          <MobileAboutCialfoOffices
            cialfoOffices={this.state.aboutPageOfficesLocations}
          />
          {/* </div> */}
        </MediaQuery>
      </Container>
    );
  }
}

export default About;
